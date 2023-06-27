# Login Meme

## Prerequisite

- SQL Server
- SQL Server Authentication (https://stackoverflow.com/a/58329203)

### Link to website

- Link - https://8c8pg7kbyf.eu-west-1.awsapprunner.com

### 1. Setup the DB

    - Open Local Instance of SQL Server
    - Run the DB script(s) in a query window
  
### 2. Add Dotenv variables

    - Add a '.env' file in the root of the project
      - .env
      - Replace ! with your information
        IDENTITY_SERVER_PORT = !
        RESOURCE_SERVER_PORT = !

        JWT_SECRET = !
        
        NODE_ENV = Production
        
        DB_USER = !
        DB_PASSWORD = !
        DB_NAME = LoginMemeDB
        DB_SERVER = !
        
        SMTP_EMAIL = !
        SMTP_PASSWORD = !
        SMTP_FROM_PASSWORD = noreply@LoginMeme.co.za (This is not a password, this is sent in the email, too lazy to change the key name everywhere)
        SMTP_FROM_NAME = LoginMeme 

### 3. Running the website

In the Root Directory
  - npm install
    - Run the Identity-Server
      - npm run identity-server-install 
      - npm run identity-server-prod
  
    - Run the Resource-Server
      - npm run resource-server-install 
      - npm run resource-server-prod

