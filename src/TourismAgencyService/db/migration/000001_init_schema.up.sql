CREATE TABLE "Boats" (
    "Id" SERIAL PRIMARY KEY
    "Name" VARCHAR(50) NOT NULL,
    "Description" VARCHAR(200) NOT NULL,
    "NumberPeople" SMALLINT NOT NULL,
    "MainImageURL" VARCHAR(MAX) NOT NULL,
    "BasePrice" DECIMAL(16,2) NOT NULL,
    "Id_BoatType" INT NOT NULL,
    "Id_Destination" INT NOT NULL
)