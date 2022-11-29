# openpicnic-api
An API for the OpenPicNic application

## Installation

Define the following environment variables:

Database connection:
* `DATABASE_HOST` - the host of the database
* `DATABASE_PORT` - the port of the database
* `DATABASE_NAME` - the name of the database
* `DATABASE_USER` - the user of the database
* `DATABASE_PASSWORD` - the password of the database

The URL of the site
* `SITE_URL` - the url of the site
* `PORT` - the port of the site

Connection to the API server
* `API_USERNAME` - the username of the API server
* `API_PASSWORD` - the password of the API server

⚠ You must be define the following environment variables in the `.env` file otherwise the application will not work.

### Requirements

* Node.js installed
* MySQL server

### Dependencies

* Express
* MySQL
* Dotenv

## Information

If the installation fails, delete the `package-lock.json` file and run `npm install` again.

### Routes

#### GET /api/avatar

Returns the avatars of the users.

#### GET /api/avatar/:id

Returns the avatar of the user with the specified id.

#### GET /api/avis

Returns the avis.

#### GET /api/avis/:id

Returns the avis with the specified id.

#### GET /api/equipement

Returns the equipements.

#### GET /api/equipement/:id

Returns the equipement with the specified id.

#### GET /api/equipements

Returns the list of equipements.

#### GET /api/equipements/:id

Returns the list of equipements with the specified id.

#### GET /api/localisation

Returns the localisations.

#### GET /api/localisation/:id

Returns the localisation with the specified id.

#### GET /api/user

Returns the users.

#### GET /api/user/:id

Returns the user with the specified id.

#### POST /api/avatar

Creates a new avatar.

#### POST /api/avis

Creates a new avis.

#### POST /api/equipement

Creates a new equipement.

#### POST /api/equipements

Creates a new equipements.

#### POST /api/localisation

Creates a new localisation.

#### POST /api/user

Creates a new user.

#### PUT /api/avatar/:id

Updates the avatar with the specified id.

#### PUT /api/avis/:id

Updates the avis with the specified id.

#### PUT /api/equipement/:id

Updates the equipement with the specified id.

#### PUT /api/equipements/:id

Updates the equipements with the specified id.

#### PUT /api/localisation/:id

Updates the localisation with the specified id.

#### PUT /api/user/:id

Updates the user with the specified id.

#### DELETE /api/avatar

Deletes all the avatars.

#### DELETE /api/avatar/:id

Deletes the avatar with the specified id.

#### DELETE /api/avis

Deletes all the avis.

#### DELETE /api/avis/:id

Deletes the avis with the specified id.

#### DELETE /api/equipement

Deletes all the equipements.

#### DELETE /api/equipement/:id

Deletes the equipement with the specified id.

#### DELETE /api/equipements

Deletes all the equipements.

#### DELETE /api/equipements/:id

Deletes the equipements with the specified id.

#### DELETE /api/localisation

Deletes all the localisations.

#### DELETE /api/localisation/:id

Deletes the localisation with the specified id.

#### DELETE /api/user

Deletes all the users.

#### DELETE /api/user/:id

Deletes the user with the specified id.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details