"""Add agent_id and marketer_id to transactions

Revision ID: c324b73a7017
Revises: 7e52370818eb
Create Date: 2025-05-29 16:08:47

"""
from alembic import op
import sqlalchemy as sa

revision = 'c324b73a7017'
down_revision = '7e52370818eb'
branch_labels = None
depends_on = None

def upgrade():
    with op.batch_alter_table('transactions', schema=None) as batch_op:
        batch_op.add_column(sa.Column('agent_id', sa.String(length=36), nullable=True))
        batch_op.add_column(sa.Column('marketer_id', sa.String(length=36), nullable=True))
        batch_op.create_foreign_key('transactions_agent_id_fkey', 'users', ['agent_id'], ['id'])
        batch_op.create_foreign_key('transactions_marketer_id_fkey', 'users', ['marketer_id'], ['id'])

def downgrade():
    with op.batch_alter_table('transactions', schema=None) as batch_op:
        batch_op.drop_constraint('transactions_marketer_id_fkey', type_='foreignkey')
        batch_op.drop_constraint('transactions_agent_id_fkey', type_='foreignkey')
        batch_op.drop_column('marketer_id')
        batch_op.drop_column('agent_id')