# Login Meme

## Prerequisite

- SQL Server
- SQL Server Authentication selected

### 1. Setup the DB

    - Open Local Instance of SQL Server
    - Run the DB script(s) in a query window
  
### 2. Add Dotenv variables

    - Add a 'config.env' file in the **Config** folder
      - config/config.env
      - Replace * with your information
    > PORT = 8080
        JWT_SECRET = *
        
        NODE_ENV = Production
        
        DB_USER = *
        DB_PASSWORD = *
        DB_NAME = LoginMemeDB
        DB_SERVER = *
        
        SMTP_EMAIL = *
        SMTP_PASSWORD = *
        SMTP_FROM_PASSWORD = noreply@LoginMeme.co.za
        SMTP_FROM_NAME = LoginMeme 