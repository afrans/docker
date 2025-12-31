# PostgreSQL com Docker (Ubuntu) + Spring Boot (Windows)

Este projeto sobe um PostgreSQL via Docker no Ubuntu, com persistência de dados,
expondo a porta 5432 para acesso externo (Spring Boot no Windows).

---

## 📦 Pré-requisitos

- Ubuntu 20.04+
- Docker
- Docker Compose (plugin)
- Spring Boot no Windows

---

## 🚀 Subir o PostgreSQL

No diretório do projeto:

```bash
docker compose up -d

Verifique se está rodando:

docker ps

Você deve ver:

0.0.0.0:5432->5432/tcp
