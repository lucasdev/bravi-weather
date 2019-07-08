## Pre Requisits

- Node 8+
- Npm
- Angular CLI 
- Docker

### BraviFrontend - Build with docker

- Build image: 
```
$  docker build -t weather-my-city .
```

- Run container:
```
$ docker run -d --name weather-frontend -p 3737:80 weather-my-city
```

- Access:
```
http://localhost:3737/
```
