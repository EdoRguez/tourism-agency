run:
	cd cmd; go run main.go

postgres:
	docker run --name tourism-agency-db -p 5434:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

createdb:
	docker exec -it tourism-agency-db createdb --username=postgres tourism-agency

dropdb:
	docker exec -it tourism-agency-db dropdb --username=postgres tourism-agency

sqlc:
	docker run --rm -v "%cd%:/src" -w /src sqlc/sqlc generate

createmigration:
	migrate create -ext sql -dir db/migration -seq $(name)

migrateup:
	migrate -path db/migration -database "postgresql://postgres:mysecretpassword@localhost:5434/tourism-agency?sslmode=disable" --verbose up

migratedown:
	migrate -path db/migration -database "postgresql://postgres:mysecretpassword@localhost:5434/tourism-agency?sslmode=disable" --verbose down