# API de Usuários e Transferências

Esta API permite o registro, login, consulta de usuários e transferências de valores entre usuários, com regras básicas para aprendizado de testes e automação de APIs.

## Funcionalidades
- Registro de usuário (não permite duplicados)
- Login de usuário (usuário e senha obrigatórios)
- Consulta de todos os usuários
- Transferência de valores entre usuários
	- Só permite transferências acima de R$ 5.000,00 para usuários marcados como "favorecido"
- Listagem de transferências
- Documentação Swagger disponível em `/api-docs`

## Instalação

1. Clone o repositório:
	 ```bash
	 git clone <repo-url>
	 cd PGTAS-02-API
	 ```
2. Instale as dependências:
	 ```bash
	 npm install
	 ```

## Executando a API

- Para rodar o servidor:
	```bash
	node server.js
	```
- O servidor estará disponível em `http://localhost:3000`
- Acesse a documentação Swagger em `http://localhost:3000/api-docs`

## Endpoints

- `POST /register` — Registra um novo usuário
- `POST /login` — Realiza login
- `GET /users` — Lista todos os usuários
- `POST /transfer` — Realiza uma transferência
- `GET /transfers` — Lista todas as transferências

## Observações
- O banco de dados é em memória (os dados são perdidos ao reiniciar o servidor).
- Para testar a API, utilize ferramentas como Postman, Insomnia ou scripts de automação.
- Para rodar testes automatizados, utilize o comando:
	```bash
	npm test
	```

## Licença
MIT
# Projeto JavaScript com Mocha

Este projeto contém uma função de soma e um teste automatizado usando Mocha.

## Scripts
- `npm test`: Executa os testes com Mocha.

## Estrutura
- `src/sum.js`: Função de soma.
- `test/sum.test.js`: Teste da função de soma.
