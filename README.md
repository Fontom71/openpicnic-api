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
