USE [BusReservation]
GO

/****** Object:  Table [dbo].[Bus]    Script Date: 03-09-2022 8.05.51 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Bus](
	[BusId] [int] NOT NULL,
	[BusNo] [varchar](10) NOT NULL,
	[Rows] [int] NOT NULL,
	[Cols] [int] NOT NULL,
	[DTime] [datetime] NOT NULL,
	[ATime] [datetime] NULL,
	[Pickup] [varchar](50) NOT NULL,
	[SeatCost] [int] NOT NULL,
	[DriverName] [varchar](20) NULL,
	[DriverContact] [varchar](10) NULL,
	[TypeOfBus] [varchar](10) NOT NULL,
	[Source] [varchar](10) NOT NULL,
	[Destination] [varchar](10) NOT NULL,
	[Distance] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[BusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

