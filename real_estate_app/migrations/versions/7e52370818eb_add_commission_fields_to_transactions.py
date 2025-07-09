"""Add commission fields to transactions

Revision ID: 7e52370818eb
Revises: 0e1df9f93269
Create Date: 2025-05-29 14:38:00

"""
from alembic import op
import sqlalchemy as sa

revision = '7e52370818eb'
down_revision = '0e1df9f93269'
branch_labels = None
depends_on = None

def upgrade():
    op.add_column('transactions', sa.Column('commission_owner', sa.Float(), nullable=True, default=0.0))
    op.add_column('transactions', sa.Column('commission_agent', sa.Float(), nullable=True, default=0.0))
    op.add_column('transactions', sa.Column('commission_marketer', sa.Float(), nullable=True, default=0.0))
    op.execute("UPDATE transactions SET commission_owner = 0.0, commission_agent = 0.0, commission_marketer = 0.0 WHERE commission_owner IS NULL")

def downgrade():
    op.drop_column('transactions', 'commission_marketer')
    op.drop_column('transactions', 'commission_agent')
    op.drop_column('transactions', 'commission_owner')