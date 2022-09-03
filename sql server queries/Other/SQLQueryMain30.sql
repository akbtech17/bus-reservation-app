-- drop table
drop table TransactionSeat;
drop table Passenger;
drop table TransactionDetails;
drop table Customer;

CREATE TABLE Customer(
    [CustomerId] [int] primary key,
    [FirstName] [varchar](10) NOT NULL,
    [LastName] [varchar](15) NOT NULL,
    [Dob] [datetime] ,
    [Gender] [char](1) ,
    [Mobile] [varchar](10) NOT NULL,
    [Email] [varchar](25) NOT NULL,
    [Password] [varchar](9) NOT NULL,
	Wallet int default(0)
);

-- creating a transaction table
create table TransactionDetails (
	TId int primary key,
	BusId int foreign key references bus(busid) not null,
	CustomerId int foreign key references customer(customerId) not null,
	DateOfBooking datetime not null,
	TotalCost int not null
) 

-- creating a passenger table
create table Passenger (
	PId int primary key,
	TId int foreign key references TransactionDetails(TId) not null,
	PName varchar(40) not null,
	Age int not null,
	Adhaar varchar(12) not null,
	Gender char not null
) 

-- creating a TansactionSeat
create table TransactionSeat (
	TId int foreign key references TransactionDetails(TId) not null,
	SeatNo varchar(2) not null,
	Constraint PK_TId Primary Key (TId,SeatNo)
) 

drop procedure TestInsertAllRecords;

CREATE PROCEDURE TestInsertAllRecords
AS
BEGIN 
	-- adding the details of customers
	insert into customer values
	(1,'Aatmic','Tiwari','2000-03-03 12:45:56','M','4719168654','aatmic_tiwari@gmail.com','cust@123',0),
	(2,'Harshita','Verma','1998-02-17 12:45:56','F','9767168654','harshita_verma@gmail.com','cust@123',0),

	-- adding customers who have not done booking yet
	(3,'Bahvya','Goel','2000-05-04 12:45:56','F','7767222659','bhavya_goel@gmail.com','cust@123',0),
	(4,'Mansi','Srivastava','2002-12-01 12:45:56','F','3333168774','mansi_sri@gmail.com','cust@123',0),

	(5,'Amit','Pandey','1996-05-01 12:45:56','M','9411131687','amit_pandey@gmail.com','cust@123',0);

	-- adding the details of buses
	insert into Bus values
	(1,'UK123',10,4,'2022-09-03 12:45:56','2022-09-04 01:15:00','Swargate',600,'Vibhor','7711168654','AC','Pune','Mumbai',300),
	(2,'UK124',10,4,'2022-08-01 12:45:56','2022-08-02 01:15:00','Dhankawadi',1000,'Mahalakshmi','9423168623','NON-AC','Pune','Shirdi',450),
	(3,'UK125',10,4,'2022-09-03 12:45:56','2022-09-03 01:15:00','Church Gate',600,'Ananya','9411458689','AC','Mumbai','Pune',300),
	(4,'UK126',10,4,'2022-09-03 12:45:56','2022-09-03 01:15:00','Anand Vihar',800,'Akash','9661168654','NON-AC','Delhi','Khatima',200),

	(5,'UK127',10,4,'2022-09-03 12:45:56','2022-09-04 01:15:00','Shivaji Nagar',800,'Vinay','5561168650','NON-AC','Pune','Mumbai',300),
	(6,'UK128',10,4,'2022-09-03 12:45:56','2022-09-04 01:15:00','Dhankawadi',1800,'Bhole','4361168653','AC','Pune','Mumbai',300),
	(7,'UK130',10,4,'2022-09-03 12:45:56','2022-09-04 01:15:00','Katraj',450,'Vanjale','1161168659','NON-AC','Pune','Mumbai',300);

	-- adding the transaction details
	insert into transactiondetails values
	(1,1,1,'2022-08-28 12:45:56',2400),
	(2,4,2,'2022-08-24 12:45:56',1600),
	(3,1,5,'2022-08-12 12:45:56',3000),
	(4,2,1,'2022-07-12 12:45:56',2000);

	-- adding the details of bus seats
	EXEC AddBusSeat @BusId = 1;
	EXEC AddBusSeat @BusId = 2;
	EXEC AddBusSeat @BusId = 3;
	EXEC AddBusSeat @BusId = 4;
	EXEC AddBusSeat @BusId = 5;
	EXEC AddBusSeat @BusId = 6;
	EXEC AddBusSeat @BusId = 7;

	-- adding the passenger details 
	insert into passenger values
	(1,1,'Anshul', 22,'123456789123','M'),
	(2,1,'Anish', 23,'343456789112','M'),
	(3,1,'Prakhar', 24,'653456789125','M'),
	(4,1,'Aatmic', 21,'353456789167','M'),
	(5,2,'Anshul', 22,'413456789165','M'),
	(6,2,'Harshita', 20,'893456789127','F'),
	(7,3,'Shivang', 24,'777456789127','M'),
	(8,3,'Anshul', 23,'893456789666','M'),
	(9,3,'Vedant', 23,'333456789111','M'),
	(10,3,'Amit', 21,'123456789999','M'),
	(11,3,'Shubh', 22,'434456789133','M'),
	(12,4,'Anish', 22,'439956789133','M'),
	(13,4,'Aatmic', 22,'234456789555','M');

	-- adding the booked seats details 
	insert into transactionseat values
	(1,'A0'),
	(1,'B0'),
	(1,'C0'),
	(1,'D0'),
	(2,'A0'),
	(2,'B0'),
	(3,'B5'),
	(3,'C3'),
	(3,'D4'),
	(3,'A7'),
	(3,'D8'),
	(4,'A6'),
	(4,'D2');

	-- reset the booked seats
	EXEC ResetSeat @BusId=1, @SeatNo='A0';
	EXEC ResetSeat @BusId=1, @SeatNo='B0';
	EXEC ResetSeat @BusId=1, @SeatNo='C0';
	EXEC ResetSeat @BusId=1, @SeatNo='D0';

	EXEC ResetSeat @BusId=1, @SeatNo='B5';
	EXEC ResetSeat @BusId=1, @SeatNo='C3';
	EXEC ResetSeat @BusId=1, @SeatNo='D4';
	EXEC ResetSeat @BusId=1, @SeatNo='A7';
	EXEC ResetSeat @BusId=1, @SeatNo='D8';

	EXEC ResetSeat @BusId=2, @SeatNo='A6';
	EXEC ResetSeat @BusId=2, @SeatNo='D2';


	EXEC ResetSeat @BusId=4, @SeatNo='A0';
	EXEC ResetSeat @BusId=4, @SeatNo='B0';
END

EXEC TestDeleteAllRecords;
EXEC TestInsertAllRecords;