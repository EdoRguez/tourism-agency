-- name: CreateBoat :one
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
) RETURNING *;

-- name: GetBoat :one
SELECT * FROM boats
WHERE id = $1 LIMIT 1;

-- name: GetAllBoats :many
SELECT * FROM boats
ORDER BY id
LIMIT $1
OFFSET $2;

-- name: UpdateBoat :one
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
RETURNING *;

-- name: DeleteBoat :exec
DELETE FROM boats
WHERE id = $1;