[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
[![Stars][stars-shield]][stars-url]

  <h3 align="center">🗃 Coordinate Stock 🗃</h3>

  <p align="center">
    Um programa que eu criei para me ajudar a salvar as coordenadas do meu mundo de Minecraft
    <br />
    <br />
    <br />
  </p>

## 👷 | Pré-requisitos

- Ter Docker em sua máquina. Você pode baixá-lo [aqui](https://docs.docker.com/get-docker/)

## ⏬ | Instalação

Clone o repositório com `git clone https://github.com/ySnoopyDogy/coordinate-stock.git`

Crie o arquivo **.env** na raíz do projeto com a seguinte estrutura:

```
PORT - Porta para rodar a aplicação web
DB_USER - Usuário para se conectar ao banco de dados
DB_HOST - Host do banco de dados
DATABASE - Nome do banco de dados
DB_PASSWORD - Senha do usuário do banco de dados
```

## 🚀 | Rodando com Docker

Antes de rodar o Docker Compose precisamos fazer alguns ajustes de acordo com sua preferência! Todas alterações serão no arquivo `docker-compose.yml`.

O serviço `app` é responsável por rodar a aplicação web. Você pode trocar as portas de acordo com sua preferência.

> Não esqueça de que a porta exposta do container deve ser a mesma da `.env`.

Já o serviço `database` tem algumas coisinhas que podem ser mudadas!
Você pode mudar a localização dos volumes do banco de dados, eu utilizo em `./data/`.
As portas eu aconselho deixar em `5432` pois é o default do Postgre, mas se quiser, a escolha é sua.
Por fim, você pode mudar as variáveis de ambiente do vanco de dados, que DEVEM ser iguais as da `.env`

###### Feito isso, você já pode rodar o Docker!

Com `docker compose up` você iniciará os dois containers, e na primeira inicialização do container `database` você deve configurar o banco de dados!

- Entre em seu container com `docker excec -it <nome do container> bash`. Isso executará o bash dentro do container, te dando acesso direto ao container.
- Entre no Postgre para criar a tabela utilizando `psql --username <pguser> --db_name coordinates --host <database>` onde pguser é o usuário da variável de ambiente Docker, e host é o nome do serviço do banco de dados
- No psql, rode a segunda query do `postgre.sql`

Feito isso você pode sair do container e tudo já estará rodando!

## 🚀 | Rodando sem o Docker :(

Caso você não queira usar docker, está tudo bem! Você só precisará ter o [Postgres](https://www.postgresql.org/) instalado em seu computador. Acesse o psql e rode todas queries do `postgre.sql` para criar o banco de dados e a tabela

> O nome de sua database deverá ser o mesmo do `.env`

Agora, vamos instalar todas dependências necessárias com `npm install`. Sua aplicação está pronta para rodar! `npm start` e xaaaaaama, ta lá meu guri.

## 🔀 | Rotas

| Tipo | Endpoint   | Descrição                                                                  |
| ---- | ---------- | -------------------------------------------------------------------------- |
| GET  | `/add`     | Abre a página para adicionar uma nova coordenada                           |
| GET  | `/:id?`    | Mostra todas as coordenadas existentes, ou uma em específico passando o id |
| POST | `/api/add` | Adiciona uma nova coordenada ao banco de dados                             |

## 🔨 | Este projeto foi criado utilizando as seguintes tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Ejs](https://ejs.co/)
- [Node Postgres](https://node-postgres.com/)
- [Docker](https://www.docker.com/)

## ⚖️ | Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para obter mais informações.

---

Este projeto foi criado com ❤️ por Luxanna.

[contributors-shield]: https://img.shields.io/github/contributors/ySnoopyDogy/coordinate-stock?label=Contribuidores
[contributors-url]: https://github.com/ySnoopyDogy/coordinate-stock/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/ySnoopyDogy/coordinate-stock?color=f7f203&label=Stars&style=flat
[stars-url]: https://github.com/ySnoopyDogy/coordinate-stock/stargazers
[license-shield]: https://img.shields.io/github/license/ySnoopyDogy/coordinate-stock?color=gree&label=Licen%C3%A7a
[license-url]: https://github.com/ySnoopyDogy/coordinate-stock/blob/master/LICENSE
