## Install mysql local by docker
docker-compose up -d  

## container test
docker exec -it mysql-estudo mysql -u root -p
SHOW DATABASES;
USE curso_db;
CREATE TABLE alunos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  idade INT,
  curso VARCHAR(100)
);
INSERT INTO alunos (nome, idade, curso) VALUES
('Ana', 20, 'Engenharia'),
('Bruno', 25, 'Sistemas de Informação'),
('Carlos', 22, 'Direito');
SELECT * FROM alunos;

### Os dados continuam devido ter criado o volume
docker compose down
docker compose up -d
SELECT * FROM alunos;

## First Update GitHub
Create repository in the github.com  
```bash
 git init -b main
 git add .
 git commit -m "docker projects"
 git remote add origin https://github.com/afrans/docker.git
 git push -u origin main
 ```

 ## Update GitHub
```bash
 git add .
 git commit -m "node.js projects"
 git push -u origin main
 ```