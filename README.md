# Desafio UStore - API

Bem-vindo à API do Desafio UStore! Este projeto é uma API desenvolvida utilizando [NestJS](https://nestjs.com/), conectada a um banco de dados MySQL.

## Pré-requisitos

Antes de rodar esta API, você precisará ter instalado em sua máquina:

- [NodeJS](https://nodejs.org/en) (v18.x ou superior)
- [Nest.js](https://nestjs.com/) (v10.x ou superior)
- [MySQL](https://www.mysql.com/) (versão 8.x)
- Um cliente MySQL, como o [MySQL Workbench](https://www.mysql.com/products/workbench/) ou o [DBeaver](https://dbeaver.io/)

## Instalação

### 1. Clonando o Repositório

Comece clonando o repositório em sua máquina local:

```bash
git clone https://github.com/seuusuario/desafio-ustore.git
cd desafio-ustore
```

### 2. Instalando Dependências

Instale as dependências do projeto utilizando o NPM:

```bash
npm install
```

### 3. Criar o Banco de Dados no MySQL

Antes de rodar a aplicação, crie um banco de dados chamado desafio_ustore no MySQL. Você pode fazer isso diretamente no terminal ou utilizando um cliente MySQL.

Exemplo utilizando o terminal MySQL:

```bash
CREATE DATABASE desafio_ustore;
```

Observação: Certifique-se de que o MySQL está rodando na sua máquina.

### 4. Configuração do Banco de Dados

Certifique-se de que suas configurações de banco de dados (usuário, senha, host, etc.) estão corretas no arquivo de configuração da aplicação. Por padrão, o arquivo de configuração se conecta ao banco de dados MySQL usando os seguintes parâmetros:

- Usuário: root
- Senha: 123456
- Host: localhost
- Porta: 3306

Se precisar alterar essas configurações, vá até o arquivo src/config/database.config.ts e modifique conforme necessário.

### 5. Rodando a Aplicação

Para rodar a API localmente com Node.js, use o comando:

```bash
npm run start:dev
```

Isso iniciará a API no modo de desenvolvimento. Ela ficará disponível em http://localhost:3000.

### 6. Testando a API

Uma vez que a aplicação esteja rodando, você pode acessar os endpoints através de um cliente REST como o [Postman]('https://www.postman.com/') ou [Insomnia]('https://insomnia.rest/download').

**GET** `http://localhost:3000/products` - Lista todos os produtos  
**POST** `http://localhost:3000/products` - Cria um novo produto (envie um JSON no corpo da requisição)

### Payload de Exemplo para Criar e Atualizar um Produto:

```json
{
  "describe": "Filé bovino",
  "price": 10,
  "expiry_date": "2024-09-30"
}
```

## Endpoints Principais

Aqui estão alguns dos principais endpoints disponíveis na API:

- **GET** `/products` - Retorna a lista de todos os produtos
- **POST** `/products` - Cria um novo produto
- **GET** `/products/:id` - Retorna um produto específico por ID
- **PUT** `/products/:id` - Atualiza um produto por ID
- **DELETE** `/products/:id` - Deleta um produto por ID

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **NestJS** - Framework para construção de APIs robustas e escaláveis
- **MySQL** - Banco de dados relacional
- **Docker** - Contêinerização da aplicação

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias, correções de bugs ou novas funcionalidades.

## Licença

Este projeto é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

```

```
