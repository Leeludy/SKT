# SKT Aeroshutter

### Descridtion

This project has been initialized as a team 3 to conclude our web development studies.\
It was taken up by the sponsor company and still keep growing.
Designed to be a real tool for the field, for people working directly with the stock and primarily interested in monitoring drone spare parts,\
Usability and ergonomics are preferred over administrative and financial aspects.

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
