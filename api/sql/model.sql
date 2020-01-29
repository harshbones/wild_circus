CREATE DATABASE wild_circus;

USE wild_circus;

CREATE TABLE wilders
(
wilder_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
firstname VARCHAR(100),
lastname VARCHAR(150),
nickname VARCHAR(150),
description TEXT
); 

CREATE TABLE users
(
user_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
firstname VARCHAR(100),
lastname VARCHAR(150),
location VARCHAR(150), 
is_admin INT NOT NULL
);

CREATE TABLE acts
(
act_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
name VARCHAR(100),
description TEXT,
location VARCHAR(150),
places INT
);

CREATE TABLE tickets
(
ticket_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
act_id INT references acts(act_id),
user_id INT references users(user_id)
);