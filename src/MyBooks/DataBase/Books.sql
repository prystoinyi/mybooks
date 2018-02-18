Create table Books
(
     ID int primary key identity,
     [Name] nvarchar(50),
     Author nvarchar(50),
     PublicationYear int,
     Edition nvarchar(50),
	 UserID int,
	 access bit
)