## Install mongodb local by docker
docker-compose up -d  

## Postman test

GET http://localhost:3000/health  

POST http://localhost:3000/users  
Body: raw  
{  
  "name": "Anderson",  
  "email": "anderson@example.com"  
}  

GET  http://localhost:3000/users  