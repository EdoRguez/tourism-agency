package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/EdoRguez/tourism-agency/TourismAgencyService/config"
	db "github.com/EdoRguez/tourism-agency/TourismAgencyService/db/sqlc"
	"github.com/EdoRguez/tourism-agency/TourismAgencyService/handlers"
	"github.com/gorilla/mux"
)

type Server struct {
	http *http.Server
}

func NewServer(conf config.Config, storage *db.SQLStorage) *Server {
	sm := mux.NewRouter()

	loadRoutes(sm, storage)

	s := &http.Server{
		Addr:         conf.HTTPServerAddress,
		Handler:      sm,
		IdleTimeout:  120 * time.Second,
		ReadTimeout:  1 * time.Second,
		WriteTimeout: 1 * time.Second,
	}

	return &Server{
		http: s,
	}
}

func (s *Server) Start(address string) error {
	go func() {
		fmt.Println("Starting server on: ", address)

		err := s.http.ListenAndServe()
		if err != nil {
			fmt.Printf("Error starting server: %s\n", err)
			os.Exit(1)
		}
	}()

	// trap sigterm or interupt and gracefully shutdown the server
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)

	// Block until a signal is received.
	sig := <-c
	log.Println("Got signal:", sig)

	// gracefully shutdown the server, waiting max 30 seconds for current operations to complete
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	s.http.Shutdown(ctx)
	return nil
}

func loadRoutes(router *mux.Router, storage *db.SQLStorage) {
	baseRoute := router.PathPrefix("/api").Subrouter()
	loadOrderRoutes(baseRoute, storage)
}

func loadOrderRoutes(router *mux.Router, storage *db.SQLStorage) {
	handler := handlers.NewBoatHandler(storage)

	baseRoute := router.PathPrefix("/order").Subrouter()

	// getRouter := baseRoute.Methods(http.MethodGet).Subrouter()
	// getRouter.HandleFunc("/", ph.GetProducts)

	postRouter := baseRoute.Methods(http.MethodPost).Subrouter()
	postRouter.HandleFunc("/", handler.CreateBoat)
}
