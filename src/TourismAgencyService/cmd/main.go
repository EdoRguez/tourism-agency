package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/EdoRguez/tourism-agency/TourismAgencyService/config"
	db "github.com/EdoRguez/tourism-agency/TourismAgencyService/db/sqlc"
)

func main() {
	var exitCode int
	defer func() {
		os.Exit(exitCode)
	}()

	// load config
	env, err := config.LoadConfig("../.")
	if err != nil {
		fmt.Printf("error: %v", err)
		exitCode = 1
		return
	}

	// run the server
	run(env)
}

func run(conf config.Config) {
	conn, err := sql.Open(conf.DBDriver, conf.DBSource)
	if err != nil {
		log.Fatal("Cannot connect to db: ", err)
	}

	storage := db.NewStorage(conn)
	server := NewServer(storage)

	err = server.Start(conf.HTTPServerAddress)
	if err != nil {
		log.Fatal("Cannot start server: ", err)
	}
}
