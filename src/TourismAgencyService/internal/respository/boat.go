package respository

import (
	"context"

	db "github.com/EdoRguez/tourism-agency/TourismAgencyService/db/sqlc"
)

type boatRepo struct{}

func CreateBoat(ctx context.Context, arg db.CreateBoatParams) (db.Boat, error) {
	var result db.Boat

	return result, err
}
