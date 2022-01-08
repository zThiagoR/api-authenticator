# Uma API de autenticação simples feita em [TypeScript](https://www.typescriptlang.org/) e [MongoDB](https://www.mongodb.com/)

# Como rodar o projeto
* Clone ou baixe o projeto
* Instale as dependências com `npm i` ou `yarn`
* Inicie o projeto em modo de desenvolvimento com `npm run dev` ou `yarn dev`
* Criar um arquivo `.env` com as seguintes configurações:

```
MONGO=URL DO MONGO
```

## Modo de uso

```
Post /auth/register
```
* Criar  um novo usuário com seguintes parâmetros: 
`name`, `email`, `password`
* Receberá um body com seguintes parâmetros: `name`, `password` (Senha gerada em Hash), `email`, `createdAt`
---

```
POST /auth/authenticate
```
* Autenticar o seu usuário que você registrou no *register*

* Receberá um body com seguintes parâmetros `name`, `email`, `password` e `createdAt`.

---

O simples projeto não está completo, estão apenas implementados os métodos **POST**, ainda não foi feito o **DELETE** e até mesmo o sistema de TOKEN que utilizarei o **JWT** (JsonWebToken). Para deletar o usuário do banco de dados e poder registrar as mesmas informações novamente. 

Inicie o servidor do Express e verifique se está executando em localhost na porta 4000(`http://localhost:4000/`). É possível testar todas as rotas da API usando algum software como [Insomnia](https://insomnia.rest/).
