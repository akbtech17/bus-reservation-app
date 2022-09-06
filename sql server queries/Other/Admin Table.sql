drop table Admin;

create table Admin(
	adminId int identity(1,1) primary key,
	firstName varchar(30) not null,
	lastName varchar(30),
	email varchar(125) not null unique,
	password varchar(15) not null
);

insert Admin values
('Anshul','Bansal','akb.tech17@gmail.com','12@dmiN34'),
('Aatmic','Tiwari','aatmic@gmail.com','12@dmiN34'),
('Anish','Anand','anish@gmail.com','12@dmiN34'),
('Prakhar','Kesari','prakhar@gmail.com','12@dmiN34');

select * from Admin;