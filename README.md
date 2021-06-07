## LabenuSystem:

A Labenu agora tem um novo sistema de gerenciamento e visualiação de todo seus participantes!

Este app gerencia todo cadastro e visualização dos alunos, turmas, professores, habilidades, hobbies e muito mais de todo mundo!

## Criadores

- Marcelino Sandroni
- Isabelle Frederico

## Estrutura dos endpints

# Front end
Acessando a página inicial da aplicação, está o front end feito em REACT, esta rota vem da pasta `public/app/build` da Raiz do projeto.

![Screenshot from 2021-06-03 22-09-10](https://user-images.githubusercontent.com/7757352/120730683-6a37cb00-c4b8-11eb-959b-64232da24ec6.png)


# API catalog

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14852823-ed39eab9-1a94-4ec5-a081-88a4ac1f64aa?action=collection%2Ffork&collection-url=entityId%3D14852823-ed39eab9-1a94-4ec5-a081-88a4ac1f64aa%26entityType%3Dcollection%26workspaceId%3D1abd2c64-b3c1-4171-933f-f7f24af287a0)

Acessando o endpint /api, é onde está todos os endpoints do servidor, na página inicial `/api`, ha um catálogo simples de toda estrutura com rotas e opções da API.

![Screenshot from 2021-06-02 17-27-23](https://user-images.githubusercontent.com/7757352/120547743-e999a180-c3c7-11eb-8137-782ee0678a3d.png)


# Principais entidades
As principais entidades e endepoints utilizados são os seguintes:

![Screenshot from 2021-06-02 18-23-24](https://user-images.githubusercontent.com/7757352/120554127-c07d0f00-c3cf-11eb-8fd6-f4bc5ece789a.png)


* /api/class
* /api/students
* /api/teachers
* /api/hobbies
* /api/skills

## Dependencias

- React
- Express 5
- Knex
- mysql

## Como rodar?

**Migrations**
Após copiar o repositório, faça a migração das tabelas, é importante ter os dados do banco no arquivo `.env`. na raís do projeto, ou então definir qualquer outro banco de dados no arquivo `knexfile`.

_Criando todos os banco de dados_

```
npx knex migration:latest
```

_Inserindo no banco as informações básicas_

```
npx knex seed:run
```

**Scripts**

Para rodar o projeto em desenvolvimento, utilize o comando dev:

```
npm run dev
```

Para rodar em produção, construa tudo com o comando build:

```
npm run build
```

## Front end

O front end é em React, com componetização de todos os elementos para melhor organização e produtividade.

O modo view do app, está na pasta public, é iniciado junto com a aplicação, podendo se desejar, rodar separado..
