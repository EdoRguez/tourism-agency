package repository

import (
	"context"

	db "github.com/EdoRguez/tourism-agency/TourismAgencyService/db/sqlc"
)

type BoatRepo struct {
	SQLStorage *db.SQLStorage
}

func NewBoatRepo(sql *db.SQLStorage) *BoatRepo {
	return &BoatRepo{
		SQLStorage: sql,
	}
}

func (boatRepo *BoatRepo) CreateBoat(ctx context.Context, arg db.CreateBoatParams) (db.Boat, error) {
	var result db.Boat

	err := boatRepo.SQLStorage.ExecTx(ctx, func(q *db.Queries) error {
		var err error

		result, err = q.CreateBoat(ctx, arg)
		if err != nil {
			return err
		}

		return err
	})

	return result, err
}

func (boatRepo *BoatRepo) GetAllBoats(ctx context.Context, arg db.GetAllBoatsParams) ([]db.Boat, error) {
	var result []db.Boat

	err := boatRepo.SQLStorage.ExecTx(ctx, func(q *db.Queries) error {
		var err error

		result, err = q.GetAllBoats(ctx, arg)
		if err != nil {
			return err
		}

		return err
	})

	return result, err
}
