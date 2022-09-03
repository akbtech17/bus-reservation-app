USE [BusReservation]
GO

/****** Object:  Table [dbo].[TransactionDetails]    Script Date: 03-09-2022 8.06.47 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TransactionDetails](
	[TId] [int] NOT NULL,
	[BusId] [int] NOT NULL,
	[CustomerId] [int] NOT NULL,
	[DateOfBooking] [datetime] NOT NULL,
	[TotalCost] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[TId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[TransactionDetails]  WITH CHECK ADD FOREIGN KEY([BusId])
REFERENCES [dbo].[Bus] ([BusId])
GO

ALTER TABLE [dbo].[TransactionDetails]  WITH CHECK ADD FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customer] ([CustomerId])
GO

