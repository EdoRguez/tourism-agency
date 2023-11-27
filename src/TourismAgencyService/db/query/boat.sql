-- -- name: CreateBoat :one
-- INSERT INTO Boats (
--   owner,
--   balance,
--   currency
-- ) VALUES (
--   $1, $2, $3
-- ) RETURNING *;

-- name: GetBoat :one
SELECT * FROM boats
WHERE id = $1 LIMIT 1;

-- name: GetAllBoats :many
SELECT * FROM boats
ORDER BY id
LIMIT $1
OFFSET $2;

-- -- name: UpdateBoat :one
-- UPDATE Boats
-- SET balance = $2
-- WHERE id = $1
-- RETURNING *;

-- -- name: DeleteBoat :exec
-- DELETE FROM Boats
-- WHERE id = $1;