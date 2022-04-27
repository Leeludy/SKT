# SKT Aeroshutter

### Descridtion

It is a tool for the field, for people who work directly with the stock, and who are primarily interested in real availability, monitoring and procurement. Usability and ergonomics are preferred over administrative and financial aspects.

### Technologies

Supported on NodeJS 16.14.2 this project was launch in two part
Front with Create React App 17.0.2
Back including Express
And Maria DB data base 10.5.15

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### UTC date format

Cross configuration needed :
react-app ISO date format

```react
const isoDate = new Date(date).toISOString();
```

back nodeJS

```nodejs
const connect = mariadb.createPool({
host : ...,
user : ...,
timezone: "utc",}
```

data base (mariaDB)

```mysql
SELECT @@time_zone;
```

UTC
