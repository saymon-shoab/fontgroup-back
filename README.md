# 🚀 Project Setup & Run Instructions

## Run Locally

Clone the project

```bash
  git clone https://github.com/saymon-shoab/fontgroup-back.git
```

Go to the project directory

```bash
  cd fontgroup-back
```

node js version

```bash
  nvm use 20.12.1
```
Install dependencies

```bash
  npm install
```

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`= "production"

`PORT`= 6877

`DATABASE_URL` = ?

`CLOUDINARY_CLOUD_NAME`= ?

`CLOUDINARY_API_KEY`= ?

`CLOUDINARY_API_SECRET`= ?

Start the server

```bash
  npm run dev
```



## API Reference

#### Local Base Url

```http
  http://localhost:6877/api/v1
```
#### Live Base Url

```http
  https://fontgroup-back.onrender.com/api/v1
```

#### Create Fonts

```http
  POST /fonts/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `file` | **Required**. Required. Only .ttf file via form-data key:font |

#### Get fonts

```http
  GET /fonts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `None`      | `-` | Returns list of all fonts|



#### Create Fonts

```http
  POST /fontGroup/create
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `groupName` | `stirng` | **Required**. Name of the font group 
| `fontIds`   | `string[]`| **Required**. Array of font _ids


#### Get all font group

```http
  GET /fontGroup
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `None`      | `-` | Returns list of all font group|


#### Delete font group

```http
  DELETE /fontGroup/${groupId}
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `groupId` | `stirng` |**Required**.ID of the font group   

#### Update Font Group Name

```http
  PUT /fontGroup/${groupId}
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `groupId` | `stirng` |**Required**.ID of the font group  
|  `groupName` | `stirng` | **Required**. New name for the group 
