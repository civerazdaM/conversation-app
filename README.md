
## Project Setup

### Project template
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Docker usage

#### Docker dev
It can be run in dev mode with fallowing command :

First build dev docker image: ```docker build -t sample:dev .```.

After build is done run: ```docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev```.

App can be accessed then in dev mode on [http://localhost:3001](http://localhost:3001).

#### Docker prod

It can be run in prod mode with fallowing command :

First build prod docker image: ```docker build -f Dockerfile-prod -t sample:prod .```.

After build is done run: ```docker run -it -p 80:80 --rm sample:prod```.

App can be accessed then in prod mode on [http://localhost:80](http://localhost:80).