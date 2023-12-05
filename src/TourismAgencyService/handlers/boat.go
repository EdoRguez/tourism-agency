package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	db "github.com/EdoRguez/tourism-agency/TourismAgencyService/db/sqlc"
	repo "github.com/EdoRguez/tourism-agency/TourismAgencyService/internal/respository"
	repository "github.com/EdoRguez/tourism-agency/TourismAgencyService/internal/respository"
)

type BoatHandler struct {
	Repo *repo.BoatRepo
}

type CreateBoatRequest struct {
	Name          string `json:"name"`
	Description   string `json:"description"`
	NumberPeople  int16  `json:"number_people"`
	MainImageUrl  string `json:"main_image_url"`
	BasePrice     string `json:"base_price"`
	IDBoatType    int32  `json:"id_boat_type"`
	IDDestination int32  `json:"id_destination"`
}

type BoatResponse struct {
	ID            int32     `json:"id"`
	Name          string    `json:"name"`
	Description   string    `json:"description"`
	NumberPeople  int16     `json:"number_people"`
	MainImageUrl  string    `json:"main_image_url"`
	BasePrice     string    `json:"base_price"`
	IDBoatType    int32     `json:"id_boat_type"`
	IDDestination int32     `json:"id_destination"`
	CreatedAt     time.Time `json:"created_At"`
}

func NewBoatHandler(sql *db.SQLStorage) *BoatHandler {
	return &BoatHandler{
		Repo: repository.NewBoatRepo(sql),
	}
}

func (handler *BoatHandler) CreateBoat(w http.ResponseWriter, r *http.Request) {
	var createBoatReq CreateBoatRequest
	var boatRes BoatResponse

	if err := json.NewDecoder(r.Body).Decode(&createBoatReq); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	createBoatParams := db.CreateBoatParams{
		Name:          createBoatReq.Name,
		Description:   createBoatReq.Description,
		NumberPeople:  createBoatReq.NumberPeople,
		MainImageUrl:  createBoatReq.MainImageUrl,
		BasePrice:     createBoatReq.BasePrice,
		IDBoatType:    createBoatReq.IDBoatType,
		IDDestination: createBoatReq.IDDestination,
	}

	b, err := handler.Repo.CreateBoat(r.Context(), createBoatParams)
	if err != nil {
		http.Error(w, "There is an error", http.StatusInternalServerError)
		return
	}

	boatRes = BoatResponse{
		ID:            b.ID,
		Name:          b.Name,
		Description:   b.Description,
		NumberPeople:  b.NumberPeople,
		MainImageUrl:  b.MainImageUrl,
		BasePrice:     b.BasePrice,
		IDBoatType:    b.IDBoatType,
		IDDestination: b.IDDestination,
	}

	res, err := json.Marshal(boatRes)
	if err != nil {
		fmt.Println("failed to marshal:", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	w.Write(res)
}
