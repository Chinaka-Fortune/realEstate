"""Add location_point to properties

Revision ID: 0e1df9f93269
Revises: 
Create Date: 2025-05-26 23:43:28.081685

"""
from alembic import op
import sqlalchemy as sa
from geoalchemy2 import Geography

# revision identifiers, used by Alembic.
revision = '0e1df9f93269'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    # Add location_point column if it doesn't exist
    conn = op.get_bind()
    if not conn.execute(
        sa.text("SELECT column_name FROM information_schema.columns WHERE table_name='properties' AND column_name='location_point'")
    ).fetchone():
        op.add_column(
            'properties',
            sa.Column('location_point', Geography(geometry_type='POINT', srid=4326), nullable=True)
        )
    # Populate location_point
    op.execute("""
        UPDATE properties
        SET location_point = ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)
        WHERE latitude IS NOT NULL AND longitude IS NOT NULL AND location_point IS NULL
    """)
    # Create spatial index if it doesn't exist
    if not conn.execute(
        sa.text("SELECT indexname FROM pg_indexes WHERE indexname='idx_properties_location_point'")
    ).fetchone():
        op.create_index(
            'idx_properties_location_point',
            'properties',
            ['location_point'],
            postgresql_using='gist'
        )

def downgrade():
    # Drop spatial index if it exists
    op.drop_index('idx_properties_location_point', table_name='properties', if_exists=True)
    # Drop location_point column if it exists
    op.drop_column('properties', 'location_point')