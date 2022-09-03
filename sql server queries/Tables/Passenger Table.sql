USE [BusReservation]
GO

/****** Object:  Table [dbo].[Passenger]    Script Date: 03-09-2022 8.06.35 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Passenger](
	[PId] [int] NOT NULL,
	[TId] [int] NOT NULL,
	[PName] [varchar](40) NOT NULL,
	[Age] [int] NOT NULL,
	[Adhaar] [varchar](12) NOT NULL,
	[Gender] [char](1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[PId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Passenger]  WITH CHECK ADD FOREIGN KEY([TId])
REFERENCES [dbo].[TransactionDetails] ([TId])
GO

