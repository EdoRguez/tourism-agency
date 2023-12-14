package util

import (
	"encoding/json"
	"errors"

	"github.com/go-playground/validator"
)

type HandlerError struct {
	Errors []HandlerErrorDetail
}

type HandlerErrorDetail struct {
	Param   string
	Message string
}

func GetHandlerErrorsJson(err error) []byte {
	var ve validator.ValidationErrors
	if errors.As(err, &ve) {
		out := make([]HandlerErrorDetail, len(ve))
		for i, fe := range ve {
			out[i] = HandlerErrorDetail{
				Param:   fe.Field(),
				Message: messageForTag(fe),
			}
		}

		handlerError := HandlerError{
			Errors: out,
		}

		errorJson, _ := json.Marshal(handlerError)
		return errorJson
	}

	return []byte{}
}

func messageForTag(fe validator.FieldError) string {
	switch fe.Tag() {
	case "required":
		return "Field required"
	case "email":
		return "Invalid email"
	case "max":
		return "Max value/characters reached"
	}
	return "There is an error"
}
