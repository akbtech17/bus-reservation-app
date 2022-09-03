USE [BusReservation]
GO

/****** Object:  Table [dbo].[Customer]    Script Date: 03-09-2022 8.06.19 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Customer](
	[CustomerId] [int] NOT NULL,
	[FirstName] [varchar](10) NOT NULL,
	[LastName] [varchar](15) NOT NULL,
	[Dob] [datetime] NULL,
	[Gender] [char](1) NULL,
	[Mobile] [varchar](10) NOT NULL,
	[Email] [varchar](25) NOT NULL,
	[Password] [varchar](9) NOT NULL,
	[Wallet] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Customer] ADD  DEFAULT ((0)) FOR [Wallet]
GO

