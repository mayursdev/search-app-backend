## 🗃️ Importing search-app database

- The search api relies on collections like companies, ads. For the api to function the local mongodb needs to be populated with these for the first time.

### Run the following command to import search-app db into your local mongodb instance

`mongorestore -d search-app ./mongodump/search-app`

## ⚙️ .env setup

- First Rename .env_sample file in root directory to .env
- Add your mongodb connection string in the .env at key DB_CONNECTION
Eg: `DB_CONNECTION = mongodb://127.0.0.1:27017/search-app`

## 📦 Install dependencies
`npm install`

## 🏃 All set, now run the server

`npm start`

## 🚚 Routes

- `GET /api/adverts` - To fetch all ads
- `GET /api/adverts?search=<searchTerm>` - To fetch only ads that match search term
- `GET /api/companies` - To fetch all companies
