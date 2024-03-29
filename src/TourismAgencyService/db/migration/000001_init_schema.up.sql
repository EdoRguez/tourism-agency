CREATE TABLE destinations (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT (now())
);

CREATE TABLE boat_types (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT (now())
);

CREATE TABLE boats (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "number_people" SMALLINT NOT NULL,
    "main_image_url" VARCHAR NOT NULL,
    "base_price" DECIMAL(16,2) NOT NULL,
    "id_boat_type" INT NOT NULL REFERENCES "boat_types"("id"),
    "id_destination" INT NOT NULL REFERENCES "destinations"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT (now())
);