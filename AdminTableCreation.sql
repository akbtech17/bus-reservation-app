CREATE DATABASE BusReservation;
USE BusReservation;

 

CREATE TABLE Admin (
	AdminId Int Primary Key,
	FirstName Varchar(10) NOT NULL,
	LastName Varchar(15) NOT NULL,
	Email Varchar(25) NOT NULL UNIQUE,
	Password Varchar(9)  NOT NULL,
);

 


Insert Into Admin Values
(1, 'Jitin', 'Sharma', 'admin1@gmail.com', 'admin@123'),
(2, 'Anshul', 'Bansal', 'admin2@gmail.com','admin@123'),
(3, 'Divya', 'Marikanti', 'admin3@gmail.com', 'admin@123'),
(4, 'Omkar', 'Bhagwat', 'admin4@gmail.com', 'admin@123');

 

Select * From Admin;