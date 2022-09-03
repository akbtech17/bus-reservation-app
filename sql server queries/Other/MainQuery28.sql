-- dropping customer table
drop table customer;


--dropping busseat table
drop table BusSeat;

--dropping seat table
drop table seat;

-- creating bus seat table
create table BusSeat(
	SeatNo varchar(2),
	BusId int foreign key references bus(busId),
	Available bit default(1),
	Constraint PK_SeatNo_BusId Primary Key (SeatNo, BusId)
) 

-- select bus seat
select * from busseat;

-- created proceducre for adding bus seats
create proc AddBusSeat(@BusId int) 
AS
BEGIN
	INSERT INTO BusSeat VALUES('A0',@BusId,1);
	INSERT INTO BusSeat VALUES('A1',@BusId,1);
	INSERT INTO BusSeat VALUES('A2',@BusId,1);
	INSERT INTO BusSeat VALUES('A3',@BusId,1);
	INSERT INTO BusSeat VALUES('A4',@BusId,1);
	INSERT INTO BusSeat VALUES('A5',@BusId,1);
	INSERT INTO BusSeat VALUES('A6',@BusId,1);
	INSERT INTO BusSeat VALUES('A7',@BusId,1);
	INSERT INTO BusSeat VALUES('A8',@BusId,1);
	INSERT INTO BusSeat VALUES('A9',@BusId,1);

	INSERT INTO BusSeat VALUES('B0',@BusId,1);
	INSERT INTO BusSeat VALUES('B1',@BusId,1);
	INSERT INTO BusSeat VALUES('B2',@BusId,1);
	INSERT INTO BusSeat VALUES('B3',@BusId,1);
	INSERT INTO BusSeat VALUES('B4',@BusId,1);
	INSERT INTO BusSeat VALUES('B5',@BusId,1);
	INSERT INTO BusSeat VALUES('B6',@BusId,1);
	INSERT INTO BusSeat VALUES('B7',@BusId,1);
	INSERT INTO BusSeat VALUES('B8',@BusId,1);
	INSERT INTO BusSeat VALUES('B9',@BusId,1);

	INSERT INTO BusSeat VALUES('C0',@BusId,1);
	INSERT INTO BusSeat VALUES('C1',@BusId,1);
	INSERT INTO BusSeat VALUES('C2',@BusId,1);
	INSERT INTO BusSeat VALUES('C3',@BusId,1);
	INSERT INTO BusSeat VALUES('C4',@BusId,1);
	INSERT INTO BusSeat VALUES('C5',@BusId,1);
	INSERT INTO BusSeat VALUES('C6',@BusId,1);
	INSERT INTO BusSeat VALUES('C7',@BusId,1);
	INSERT INTO BusSeat VALUES('C8',@BusId,1);
	INSERT INTO BusSeat VALUES('C9',@BusId,1);

	INSERT INTO BusSeat VALUES('D0',@BusId,1);
	INSERT INTO BusSeat VALUES('D1',@BusId,1);
	INSERT INTO BusSeat VALUES('D2',@BusId,1);
	INSERT INTO BusSeat VALUES('D3',@BusId,1);
	INSERT INTO BusSeat VALUES('D4',@BusId,1);
	INSERT INTO BusSeat VALUES('D5',@BusId,1);
	INSERT INTO BusSeat VALUES('D6',@BusId,1);
	INSERT INTO BusSeat VALUES('D7',@BusId,1);
	INSERT INTO BusSeat VALUES('D8',@BusId,1);
	INSERT INTO BusSeat VALUES('D9',@BusId,1);
END

EXEC AddBusSeat @BusId = 1;

-- select bus seat
select * from BusSeat;




-- created delete bus seat procedure
create proc DeleteBusSeat(@BusId int) 
AS
BEGIN
	delete from BusSeat where BusId = @BusId;
END







-- creating a transaction table
create table TransactionDetails (
	TId int primary key,
	BusId int foreign key references bus(busid) not null,
	CustomerId int foreign key references customer(customerId) not null,
	DateOfBooking datetime not null,
	TotalCost int not null
) 



-- insert values
insert into TransactionDetails values
(1,1,1,'1998-01-23 12:45:56.000', 500),
(2,1,1,'2012-01-23 12:45:56.000', 250);

select * from TransactionDetails;


-- creating a passenger table
create table Passenger (
	PId int primary key,
	TId int foreign key references TransactionDetails(TId) not null,
	PName varchar(40) not null,
	Age int not null,
	Adhaar varchar(12) not null,
	Gender char not null
) 

-- insert values
insert into Passenger values
(1,1,'Stella Sumanam',28,'123456789','F'),
(2,2,'Sajid',50,'9876543210','M');

-- select 
select * from Passenger;



drop table TransactionSeat;
-- creating a TansactionSeat
create table TransactionSeat (
	TId int foreign key references TransactionDetails(TId) not null,
	SeatNo varchar(2) not null,
	Constraint PK_TId Primary Key (TId,SeatNo)
) 

-- insert values
insert into TransactionSeat values
(1,1,'A1'),
(1,2,'B1');

-- select 
select * from TransactionSeat;


-- creating procedure to reset the seat
CREATE PROCEDURE ResetSeat(@BusId INT, @SeatNo VARCHAR(2))
AS
BEGIN
    UPDATE BusSeat SET Available = 0 WHERE BusSeat.BusId = @BusId AND BusSeat.SeatNo = @SeatNo;
END

-- creating procedure to set the seat
CREATE PROCEDURE SetSeat(@BusId INT, @SeatNo VARCHAR(2))
AS
BEGIN
    UPDATE BusSeat SET Available = 1 WHERE BusSeat.BusId = @BusId AND BusSeat.SeatNo = @SeatNo;
END



-- create a testing procedures
-- delete all data
CREATE PROCEDURE TestDeleteAllRecords
AS
BEGIN
    delete from BusSeat;
    delete from Passenger;
    delete from TransactionSeat;
    delete from TransactionDetails;
	delete from Customer;
	delete from Bus;
END

DROP Procedure TestDeleteAllRecords;

EXEC TestDeleteAllRecords;

-- insert all data
select * from bus;
select * from BusSeat;
select * from customer;
select * from admin;
select * from transactiondetails;
select * from passenger;
select * from transactionseat;

drop procedure TestInsertAllRecords;

CREATE PROCEDURE TestInsertAllRecords
AS
BEGIN 
	-- adding the details of customers
	insert into customer values
	(1,'Aatmic','Tiwari','2000-03-03 12:45:56','M','4719168654','aatmic_tiwari@gmail.com','cust@123'),
	(2,'Harshita','Verma','1998-02-17 12:45:56','F','9767168654','harshita_verma@gmail.com','cust@321');

	-- adding the details of buses
	insert into Bus values
	(1,'UK123',10,4,'2022-09-02 12:45:56','2022-09-02 01:15:00','Swargate',600,'Vibhor','7711168654','AC','Pune','Mumbai',300),
	(2,'UK124',10,4,'2022-09-02 12:45:56','2022-09-02 01:15:00','Dhankawadi',1000,'Mahalakshmi','9423168623','NON-AC','Pune','Shirdi',450),
	(3,'UK125',10,4,'2022-09-03 12:45:56','2022-09-03 01:15:00','Church Gate',600,'Ananya','9411458689','AC','Mumbai','Pune',300),
	(4,'UK126',10,4,'2022-09-03 12:45:56','2022-09-03 01:15:00','Anand Vihar',800,'Akash','9661168654','NON-AC','Delhi','Khatima',200);

	-- adding the transaction details
	insert into transactiondetails values
	(1,1,1,'2022-08-28 12:45:56',2400),
	(2,4,2,'2022-08-24 12:45:56',1600);

	-- adding the details of bus seats
	EXEC AddBusSeat @BusId = 1;
	EXEC AddBusSeat @BusId = 2;
	EXEC AddBusSeat @BusId = 3;
	EXEC AddBusSeat @BusId = 4;

	-- adding the passenger details 
	insert into passenger values
	(1,1,'Anshul', 22,'123456789123','M'),
	(2,1,'Anish', 23,'343456789112','M'),
	(3,1,'Prakhar', 24,'653456789125','M'),
	(4,1,'Aatmic', 21,'353456789167','M'),
	(5,2,'Anshul', 22,'413456789165','M'),
	(6,2,'Harshita', 20,'893456789127','F');

	-- adding the booked seats details 
	insert into transactionseat values
	(1,'A0'),
	(1,'B0'),
	(1,'C0'),
	(1,'D0'),
	(2,'A0'),
	(2,'B0');

	-- reset the booked seats
	EXEC ResetSeat @BusId=1, @SeatNo='A0';
	EXEC ResetSeat @BusId=1, @SeatNo='B0';
	EXEC ResetSeat @BusId=1, @SeatNo='C0';
	EXEC ResetSeat @BusId=1, @SeatNo='D0';

	EXEC ResetSeat @BusId=4, @SeatNo='A0';
	EXEC ResetSeat @BusId=4, @SeatNo='B0';
END

EXEC TestDeleteAllRecords;
EXEC TestInsertAllRecords;