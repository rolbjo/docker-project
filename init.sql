CREATE TABLE users (
  id serial PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE addition (
    id SERIAL PRIMARY KEY,
    question VARCHAR(50),
    answer INTEGER
);

INSERT INTO addition (question, answer) VALUES ('46+17', 63);
INSERT INTO addition (question, answer) VALUES ('133+69', 202);
INSERT INTO addition (question, answer) VALUES ('38+57', 95);
INSERT INTO addition (question, answer) VALUES ('123+456', 579);

CREATE TABLE subtraction (
    id SERIAL PRIMARY KEY,
    question VARCHAR(50),
    answer INTEGER
);

INSERT INTO subtraction (question, answer) VALUES ('89-57', 32);
INSERT INTO subtraction (question, answer) VALUES ('583-268', 315);
INSERT INTO subtraction (question, answer) VALUES ('729-486', 243);
INSERT INTO subtraction (question, answer) VALUES ('915-648', 267);
INSERT INTO subtraction (question, answer) VALUES ('476-259', 217);


CREATE TABLE division (
    id SERIAL PRIMARY KEY,
    question VARCHAR(50),
    answer INTEGER
);

INSERT INTO division (question, answer) VALUES ('56/7', 8);
INSERT INTO division (question, answer) VALUES ('168/12', 14);
INSERT INTO division (question, answer) VALUES ('345/15', 23);
INSERT INTO division (question, answer) VALUES ('825/25', 33);

CREATE TABLE multiplication (
    id SERIAL PRIMARY KEY,
    question VARCHAR(50),
    answer INTEGER
);

INSERT INTO multiplication (question, answer) VALUES ('7*6', 42);
INSERT INTO multiplication (question, answer) VALUES ('9*8', 72);
INSERT INTO multiplication (question, answer) VALUES ('5*11', 55);
INSERT INTO multiplication (question, answer) VALUES ('12*4', 48);

CREATE TABLE testing (
id SERIAL PRIMARY KEY,
testcolumn INTEGER

CREATE TABLE testing123123 (
id SERIAL PRIMARY KEY,
testcolumn INTEGER

);
