DROP TABLE BusSeat;
DROP TABLE Seat;
DROP TABLE Bus;
USE BusReservation;DROP Table ROUTE;
DROP Table BUS;
DROP Table Seat;
DROP Table BusSeat;

CREATE TABLE Route (
    RouteId INT PRIMARY KEY,
    Source VARCHAR(10) NOT NULL,
    Destination VARCHAR(10) NOT NULL,
Distance INT NOT NULL
);

INSERT INTO Route VALUES
(1,'Pune','Mumbai',150),
(2,'Mumbai','Pune',150),
(3,'Pune','Shirdi',300),
(4,'Delhi','Panipat',100);SELECT * FROM Route;DROP TABLE Bus;

CREATE TABLE Bus (
	BusId int primary key,
    BusNo VARCHAR(10) not null,
    Rows INT NOT NULL,
    Cols INT NOT NULL,
    DTime DATETIME NOT NULL,
    Atime DATETIME,
    RouteId INT FOREIGN KEY REFERENCES Route(RouteId),
	Pickup VARCHAR(50) NOT NULL,
	SeatCost INT NOT NULL,
	DriverName VARCHAR(20),
	DriverContact VARCHAR(10),
	TypeOfBus VARCHAR(10) NOT NULL
);

INSERT INTO Bus VALUES
(1,'UK123',4,5,'1998-01-23 12:45:56','2010-12-31 01:15:00',1,'Swargate',300,'Vibhor','1234567890','AC'),
(2,'UK124',4,5,'1998-01-23 12:45:56','2010-12-31 01:15:00',4,'India Gate',600,'Mahalakshmi','0987654321','NON AC');SELECT * FROM Bus;



CREATE TABLE Seat (
    SeatNo VARCHAR(2) PRIMARY KEY,
    Row INT NOT NULL,
	Col INT NOT NULL,
);

INSERT INTO Seat VALUES
('A1',0,0),
('A2',0,1),
('A3',0,2),
('A4',0,3),
('B1',1,0),
('B2',1,1),
('B3',1,2),
('B4',1,3),
('C1',2,0),
('C2',2,1),
('C3',2,2),
('C4',2,3),
('D1',3,0),
('D2',3,1),
('D3',3,2),
('D4',3,3),
('E1',4,0),
('E2',4,1),
('E3',4,2),
('E4',4,3);SELECT * FROM Seat;

CREATE TABLE BusSeat (
    SeatNo VARCHAR(2) FOREIGN KEY REFERENCES Seat(SeatNo),
    BusId int FOREIGN KEY REFERENCES Bus(BusId),
	Available BIT DEFAULT(1)
);

INSERT INTO BusSeat VALUES
('A1',1,1),
('A2',1,1),
('A3',1,1),
('A4',1,1),
('B1',1,1),
('B2',1,1),
('B3',1,1),
('B4',1,1),
('C1',1,1),
('C2',1,1),
('C3',1,1),
('C4',1,1),
('D1',1,1),
('D2',1,1),
('D3',1,1),
('D4',1,1),
('E1',1,1),
('E2',1,1),
('E3',1,1),
('E4',1,1),
('A1',2,1),
('A2',2,1),
('A3',2,1),
('A4',2,1),
('B1',2,1),
('B2',2,1),
('B3',2,1),
('B4',2,1),
('C1',2,1),
('C2',2,1),
('C3',2,1),
('C4',2,1),
('D1',2,1),
('D2',2,1),
('D3',2,1),
('D4',2,1),
('E1',2,1),
('E2',2,1),
('E3',2,1),
('E4',2,1);
SELECT * FROM BusSeat;