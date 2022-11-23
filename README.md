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
