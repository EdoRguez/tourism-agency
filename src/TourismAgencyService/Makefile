run:
	cd cmd; go run main.go

sqlc:
	docker run --rm -v "%cd%:/src" -w /src sqlc/sqlc generate

createmigration:
	migrate create -ext sql -dir db/migration -seq $(name)
