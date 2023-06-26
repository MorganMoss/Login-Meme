USE master;
GO

DROP DATABASE IF EXISTS LoginMemeDB;
GO

CREATE DATABASE LoginMemeDB;
GO

USE LoginMemeDB;
GO

CREATE TABLE user_details (
	[userID] [INT] NOT NULL PRIMARY KEY IDENTITY(1,1),
	[email] [nvarchar](120) NOT NULL UNIQUE,
	[password] [varchar](120) NULL,
	[verificationCode] [varchar](120) NULL,
);
GO

CREATE TABLE login_counter (
	[counterID] [INT] NOT NULL PRIMARY KEY IDENTITY(1,1),
	[userID] [INT] NOT NULL,
	[attempts] [INT] NULL,
);
GO

ALTER TABLE [login_counter] ADD FOREIGN KEY ([userID]) REFERENCES [user_details] ([userID])
GO