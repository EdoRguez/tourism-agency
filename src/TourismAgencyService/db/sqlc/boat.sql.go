// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.23.0
// source: boat.sql

package db

import (
	"context"
)

const createBoat = `-- name: CreateBoat :one
INSERT INTO boats (
  name,
  description,
  number_people,
  main_image_url,
  base_price,
  id_boat_type,
  id_destination
) VALUES (
  $1, $2, $3, $4, $5, $6, $7
) RETURNING id, name, description, number_people, main_image_url, base_price, id_boat_type, id_destination, "created_At"
`

type CreateBoatParams struct {
	Name          string `json:"name"`
	Description   string `json:"description"`
	NumberPeople  int16  `json:"number_people"`
	MainImageUrl  string `json:"main_image_url"`
	BasePrice     string `json:"base_price"`
	IDBoatType    int32  `json:"id_boat_type"`
	IDDestination int32  `json:"id_destination"`
}

func (q *Queries) CreateBoat(ctx context.Context, arg CreateBoatParams) (Boat, error) {
	row := q.db.QueryRowContext(ctx, createBoat,
		arg.Name,
		arg.Description,
		arg.NumberPeople,
		arg.MainImageUrl,
		arg.BasePrice,
		arg.IDBoatType,
		arg.IDDestination,
	)
	var i Boat
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Description,
		&i.NumberPeople,
		&i.MainImageUrl,
		&i.BasePrice,
		&i.IDBoatType,
		&i.IDDestination,
		&i.CreatedAt,
	)
	return i, err
}

const deleteBoat = `-- name: DeleteBoat :exec
DELETE FROM boats
WHERE id = $1
`

func (q *Queries) DeleteBoat(ctx context.Context, id int32) error {
	_, err := q.db.ExecContext(ctx, deleteBoat, id)
	return err
}

const getAllBoats = `-- name: GetAllBoats :many
SELECT id, name, description, number_people, main_image_url, base_price, id_boat_type, id_destination, "created_At" FROM boats
ORDER BY id
LIMIT $1
OFFSET $2
`

type GetAllBoatsParams struct {
	Limit  int32 `json:"limit"`
	Offset int32 `json:"offset"`
}

func (q *Queries) GetAllBoats(ctx context.Context, arg GetAllBoatsParams) ([]Boat, error) {
	rows, err := q.db.QueryContext(ctx, getAllBoats, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []Boat{}
	for rows.Next() {
		var i Boat
		if err := rows.Scan(
			&i.ID,
			&i.Name,
			&i.Description,
			&i.NumberPeople,
			&i.MainImageUrl,
			&i.BasePrice,
			&i.IDBoatType,
			&i.IDDestination,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getBoat = `-- name: GetBoat :one
SELECT id, name, description, number_people, main_image_url, base_price, id_boat_type, id_destination, "created_At" FROM boats
WHERE id = $1 LIMIT 1
`

func (q *Queries) GetBoat(ctx context.Context, id int32) (Boat, error) {
	row := q.db.QueryRowContext(ctx, getBoat, id)
	var i Boat
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Description,
		&i.NumberPeople,
		&i.MainImageUrl,
		&i.BasePrice,
		&i.IDBoatType,
		&i.IDDestination,
		&i.CreatedAt,
	)
	return i, err
}

const updateBoat = `-- name: UpdateBoat :one
UPDATE boats
SET 
    name = $2,
    description = $3,
    number_people = $4,
    main_image_url = $5,
    base_price = $6,
    id_boat_type = $7,
    id_destination = $8
WHERE id = $1
RETURNING id, name, description, number_people, main_image_url, base_price, id_boat_type, id_destination, "created_At"
`

type UpdateBoatParams struct {
	ID            int32  `json:"id"`
	Name          string `json:"name"`
	Description   string `json:"description"`
	NumberPeople  int16  `json:"number_people"`
	MainImageUrl  string `json:"main_image_url"`
	BasePrice     string `json:"base_price"`
	IDBoatType    int32  `json:"id_boat_type"`
	IDDestination int32  `json:"id_destination"`
}

func (q *Queries) UpdateBoat(ctx context.Context, arg UpdateBoatParams) (Boat, error) {
	row := q.db.QueryRowContext(ctx, updateBoat,
		arg.ID,
		arg.Name,
		arg.Description,
		arg.NumberPeople,
		arg.MainImageUrl,
		arg.BasePrice,
		arg.IDBoatType,
		arg.IDDestination,
	)
	var i Boat
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Description,
		&i.NumberPeople,
		&i.MainImageUrl,
		&i.BasePrice,
		&i.IDBoatType,
		&i.IDDestination,
		&i.CreatedAt,
	)
	return i, err
}
