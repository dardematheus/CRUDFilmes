# Movies Backend

Este é um projeto backend para gerenciar informações relacionadas a filmes, usuários e avaliações. Ele utiliza o Prisma ORM para interagir com o banco de dados e é desenvolvido em TypeScript.

## Funcionalidades

- **Gerenciamento de Usuários**: Criação e consulta de usuários.
- **Gerenciamento de Filmes**: Criação e consulta de filmes.
- **Avaliações**: Adicionar avaliações para filmes, incluindo comentários e notas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.
- **TypeScript**: Linguagem de programação utilizada no projeto.
- **Prisma ORM**: Para modelagem e interação com o banco de dados.
- **SQLite**: Banco de dados utilizado no ambiente de desenvolvimento.

## Estrutura do Banco de Dados

O banco de dados contém os seguintes modelos:

- **User**: Representa os usuários do sistema.
- **Movie**: Representa os filmes cadastrados.
- **Review**: Representa as avaliações feitas pelos usuários para os filmes.

## Observações

- O projeto utiliza o Prisma Client gerado automaticamente. Certifique-se de rodar o comando:

  ```sh
  npx prisma generate
