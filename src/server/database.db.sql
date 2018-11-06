BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS `Users` (
	`ID`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`login`	TEXT UNIQUE,
	`email`	TEXT UNIQUE,
	`password`	TEXT,
	`first name`	TEXT,
	`last name`	TEXT
);
CREATE TABLE IF NOT EXISTS `Tickets` (
	`ticket number`	TEXT,
	`country of departure`	TEXT,
	`price`	REAL
);
CREATE TABLE IF NOT EXISTS `Flights` (
	`Number of tickets`	TEXT,
	`Date of flight`	TEXT,
	`City of depature`	TEXT,
	`City of destination`	TEXT
);
COMMIT;
