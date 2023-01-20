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

* Node.js installed (v16.18.1 tested)
* MySQL server

### Dependencies

* Express
* MySQL
* Dotenv

## Information

If the installation fails, delete the `package-lock.json` file and run `npm install` again.

## Usage/Examples

### Start the server

#### NPM

```bash
  npm start
```

#### PM2

```bash
  pm2 start npm --name "openpicnic-api" -- start
```

## Authentication

The API uses basic authentication. The username and password are defined in the environment variables.

## API Reference

#### Get all users

```http
  GET /api/users
```

#### Get a user

```http
  GET /api/users?id=${id} or /api/users?email=${email}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `number` | **Required**. User id      |
| `email`   | `string` | **Required**. User email   |

#### Create a user

```http
  POST /api/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nom`     | `string` | **Required**. User last name      |
| `prenom`  | `string` | **Required**. User first name     |
| `email`   | `string` | **Required**. User email          |
| `password`| `string` | **Required**. User password       |
| `isAdmin` | `boolean`| **Not required**. User is admin   |
| `idAvatar`| `number` | **Not required**. User avatar id  |

#### Update a user

```http
  PUT /api/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. User id             |
| `nom`     | `string` | **Not required**. User last name  |
| `prenom`  | `string` | **Not required**. User first name |
| `email`   | `string` | **Not required**. User email      |
| `password`| `string` | **Not required**. User password   |
| `isAdmin` | `boolean`| **Not required**. User is admin   |
| `idAvatar`| `number` | **Not required**. User avatar id  |

#### Delete a user

```http
  DELETE /api/users?id=${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `number` | **Required**. User id      |

#### Get all avatars

```http
  GET /api/avatar
```

#### Get an avatar

```http
  GET /api/avatar?idAvatar=${idAvatar}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `idAvatar`| `number` | **Required**. Avatar id    |

#### Create an avatar

```http
  POST /api/avatar
```

| Parameter  | Type     | Description                       |
| :--------  | :------- | :-------------------------------- |
| `nomAvatar`| `string` | **Required**. Avatar name         |
| `imageURL` | `string` | **Required**. Avatar image url    |

#### Update an avatar

```http
  PUT /api/avatar
```

| Parameter  | Type     | Description                       |
| :--------  | :------- | :-------------------------------- |
| `idAvatar` | `number` | **Required**. Avatar id           |
| `nomAvatar`| `string` | **Not required**. Avatar name     |
| `imageURL` | `string` | **Not required**. Avatar image url|

#### Delete an avatar

```http
  DELETE /api/avatar?idAvatar=${idAvatar}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `idAvatar`| `number` | **Required**. Avatar id    |

#### Get all attributes

```http
  GET /api/attribut
```

#### Get an attribute

```http
  GET /api/attribut?idE=${idE}&idL=${idL}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `idE`     | `number` | **Required**. Equipment id |
| `idL`     | `number` | **Required**. Location id  |

#### Create an attribute

```http
  POST /api/attribut
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `idE`     | `number` | **Required**. Equipment id        |
| `idL`     | `number` | **Required**. Location id         |

#### Delete an attribute

```http
  DELETE /api/attribut?idE=${idE}&idL=${idL}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `idE`     | `number` | **Required**. Equipment id |
| `idL`     | `number` | **Required**. Location id  |

#### Get all equipments

```http
  GET /api/equipement
```

#### Get an equipment

```http
  GET /api/equipement?id=${id} or /api/equipement?description=${description}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `number` | **Required**. Equipment id |
| `description`| `string` | **Required**. Equipment description |

#### Create an equipment

```http
  POST /api/equipement
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `description`| `string` | **Required**. Equipment description |

#### Update an equipment

```http
  PUT /api/equipement
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Equipment id        |
| `description`| `string` | **Not required**. Equipment description |

#### Delete an equipment

```http
  DELETE /api/equipement?id=${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `number` | **Required**. Equipment id |

#### Get all locations

```http
  GET /api/localisation
```

#### Get a location

```http
  GET /api/localisation?id=${id} or /api/localisation?nom=${nom}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `number` | **Required**. Location id  |
| `nom`     | `string` | **Required**. Location name|

#### Create a location

```http
  POST /api/localisation
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nom`     | `string` | **Required**. Location name       |
| `description`| `string` | **Not required**. Location description |
| `imageURL`| `string` | **Not required**. Location image url |
| `note`    | `string` | **Not required**. Location note   |
| `latitude`| `number` | **Not required**. Location latitude |
| `longitude`| `number` | **Not required**. Location longitude |

#### Update a location

```http
  PUT /api/localisation
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Location id         |
| `nom`     | `string` | **Not required**. Location name   |
| `description`| `string` | **Not required**. Location description |
| `imageURL`| `string` | **Not required**. Location image url |
| `note`    | `string` | **Not required**. Location note   |
| `latitude`| `number` | **Not required**. Location latitude |
| `longitude`| `number` | **Not required**. Location longitude |

#### Delete a location

```http
  DELETE /api/localisation?id=${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `number` | **Required**. Location id  |

#### Get all avis

```http
  GET /api/avis
```

#### Get an avis

```http
  GET /api/avis?idU=${idU}&idL=${idL}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `idU`     | `number` | **Required**. User id      |
| `idL`     | `number` | **Required**. Location id  |

#### Create an avis

```http
  POST /api/avis
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `idU`     | `number` | **Required**. User id             |
| `idL`     | `number` | **Required**. Location id         |
| `titre`   | `string` | **Not required**. Avis title      |
| `message` | `string` | **Not required**. Avis message    |
| `dateAvis`| `string` | **Not required**. Avis date       |
| `note`    | `number` | **Not required**. Avis note       |

#### Update an avis

```http
  PUT /api/avis
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `idU`     | `number` | **Required**. User id             |
| `idL`     | `number` | **Required**. Location id         |
| `titre`   | `string` | **Not required**. Avis title      |
| `message` | `string` | **Not required**. Avis message    |
| `dateAvis`| `string` | **Not required**. Avis date       |
| `note`    | `number` | **Not required**. Avis note       |

#### Delete an avis

```http
  DELETE /api/avis?idU=${idU}&idL=${idL}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `idU`     | `number` | **Required**. User id      |
| `idL`     | `number` | **Required**. Location id  |

#### Get all favorites

```http
  GET /api/favoris
```

#### Get a favorite

```http
  GET /api/favoris?idU=${idU}&idL=${idL}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `idU`     | `number` | **Required**. User id      |
| `idL`     | `number` | **Required**. Location id  |

#### Create a favorite

```http
  POST /api/favoris
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `idU`     | `number` | **Required**. User id             |
| `idL`     | `number` | **Required**. Location id         |

#### Delete a favorite

```http
  DELETE /api/favoris?idU=${idU}&idL=${idL}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `idU`     | `number` | **Required**. User id      |
| `idL`     | `number` | **Required**. Location id  |

## Authors

- [@Fontom's](https://github.com/Fontom71)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
