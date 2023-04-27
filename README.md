# Shawandpartners

Backend Challenge

This is the backend challenge, below are instructions on how to run the project, node v16.18.0 was used. If you prefer to use docker , below you will find instructions on how to run it.

# Installation

Install by `npm`

```shell
npm install
```

**or** install with `yarn` (this project is developed using `yarn`)

```shell
yarn install
```

# Installation using docker

to use run the project using docker follow the following instructions

run the command

```shell
docker build -t shawandpartners/dockernode .
```

`-t` is the name/tag of the image.

`shawandpartners/dockernode` name I chose for the image.

`-t` is the name/tag of the image.

`.` where the Dockerfile is (in this case it is a . because the command will be executed in the same directory where the Dockerfile is located — the same as the code . that we use to open VS Code in the folder we are in the terminal.

Now let's create the container, we will use port 3333:

```shell
docker run -p 3333:3333 -d shawandpartners/dockernode
```

`docker run` create a container.

`-p 333:3333` releases the port of the container so that every request from outside wanting to access port 3333 the container can also listen on port 3333.

`-d` _detach,_ that is, the terminal is free and the process runs in the background, however it displays the container ID.

`shawandpartners/dockernode` name of the image I'm using to create the container.

Done, now the application is running via docker

# Endpoints

`/api/users?since={number}`

Lists all users and pages each request.

Ex: http://localhost:3333/api/users?since=1

`/api/users/:username/details`

Displays the details of the user sent in the request

Ex: http://localhost:3333/api/users/username/details

`/api/users/:username/repos`

Displays the repositories of the user passed in the request

Ex: http://localhost:3333/api/users/username/repos

# Tests

Run the command below to run the tests:

```shell
yarn test
```

# Environment

`PORT` - Port where the project will start.

`GITHUB_TOKEN` - Your GitHub authorization token.

# Now it's just coding 🚀
