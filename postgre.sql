CREATE DATABASE coordinates;
CREATE TABLE coords (
  id SERIAL PRIMARY KEY,
  coord_name VARCHAR(50) NOT NULL,
  coord_description TEXT,
  coord_world varchar(10) NOT NULL,
  x INT NOT NULL,
  y INT,
  z INT NOT NULL
);
