## LabenuSystem:

A Labenu agora tem um novo sistema de gerenciamento e visualiação de todo seus participantes!

Este app gerencia todo cadastro e visualização dos alunos, turmas, professores, habilidades, hobbies e muito mais de todo mundo!

## Criadores

- Marcelino Sandroni
- Isabelle Frederico

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
