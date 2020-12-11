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

## ⏬ | Instalação

Clone o repositório com `git clone https://github.com/ySnoopyDogy/coordinate-stock.git`

Crie o arquivo **.env** com a seguinte estrutura:

```
PORT - Porta para rodar a aplicação web
DB_USER - Usuário para se conectar ao banco de dados
DB_HOST - Ip do banco de dados (utilize 'localhost' para rodar localmente)
DATABASE - Nome do banco de dados
DB_PASSWORD - Senha do usuário do banco de dados
```

Rode as queries do arquivo `postgre.sql` para a criação do banco de dados e tabela

Builde a aplicação rodando `npm run build` Então, rode a aplicação com `npm start`

## 🔨 | Este projeto foi criado utilizando as seguintes tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Ejs](https://ejs.co/)
- [Node Postgres](https://node-postgres.com/)

## 🔀 | Rotas

| Tipo | Endpoint   | Descrição                                                                  |
| ---- | ---------- | -------------------------------------------------------------------------- |
| GET  | `/add`     | Abre a página para adicionar uma nova coordenada                           |
| GET  | `/:id?`    | Mostra todas as coordenadas existentes, ou uma em específico passando o id |
| POST | `/api/add` | Adiciona uma nova coordenada ao banco de dados                             |

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
