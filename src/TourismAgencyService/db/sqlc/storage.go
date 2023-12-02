package db

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"
)

type SQLStorage struct {
	connPool *pgxpool.Pool
	*Queries
}

func (storage *SQLStorage) execTx(ctx context.Context, fn func(*Queries) error) error {
	tx, err := storage.connPool.Begin(ctx)
	if err != nil {
		return err
	}

	q := New(tx)
	err = fn(q)
	if err != nil {
		if rbErr := tx.Rollback(ctx); rbErr != nil {
			return fmt.Errorf("tx err: %v, rb err: %v", err, rbErr)
		}
		return err
	}

	return tx.Commit(ctx)
}

func NewStorage(connPool *pgxpool.Pool) *SQLStorage {
	return &SQLStorage{
		connPool: connPool,
		Queries:  New(connPool),
	}
}
