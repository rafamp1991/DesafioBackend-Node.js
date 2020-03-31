# DesafioBackend-Node.js

## Descrição

Projeto criado por Rafael Martins de Padua, para um desafio na empresa CompassoUOL, Chapecó - SC.

Este projeto preve a construção de uma api backend, destinada a gerar cadastros e gerencia-los utilizando as operações básicas de (inserção, remoção, atualização e consulta), para as seguintes entidades:

* Cliente
* Cidade
* Estado

## API

Em conjunto com este projeto foi desenvolvida uma API para o frontend em React JS. Para acesso ao repositório, segue o link [mateusxlima](https://github.com/mateusxlima/Compacity).

## Pré requisitos

* node 12.16.1
* Visual Studio Code
* banco de dados relacional (Postgresql)

## Backups

* No diretório backups/database_backup se encontra o arquivo [database.backup](https://github.com/rafamp1991/DesafioBackend-Node.js/tree/master/backups/database_backup), contendo o arquivo para importar o banco de dados.

## Como rodar a aplicação

* Para rodar a aplicação abra um prompt de comando e insira o caminho do diretório em que esta o projeto, em seguida execute o seguinte comando:
	* npm run start:dev

## Rotas

### CIDADES

* Listar todas as cidades: http://localhost:3000/cidades
	
* Consultar cidade pelo id: http://localhost:3000/cidades/id/ + id da cidade

* Consultar cidades pelo nome: http://localhost:3000/cidades/nome/ + nome da cidade

* Listar cidades pelo nome do Estado: http://localhost:3000/cidades/estado/nome/ + nome do estado

* Listar cidades pelo uf do Estado: http://localhost:3000/cidades/estado/uf/ + uf do estado

* Cadastrar cidade: http://localhost:3000/cidades/create
	
* Atualizar cidade: http://localhost:3000/cidades/update/ + id da cidade
	
* Deletar cidade: http://localhost:3000/cidades/delete/ + id da cidade

### ESTADOS

* Listar todos os estados: http://localhost:3000/estados
	
* Consultar estado pelo id: http://localhost:3000/estados/id/ + id do estado

* Consultar estado pelo UF: http://localhost:3000/estados/uf/ + uf do estado
	
* Consultar estado pelo nome: http://localhost:3000/estados/nome/ + nome do estado

* Cadastrar estado: http://localhost:3000/estados/create
	
* Atualizar estado: http://localhost:3000/estados/update/ + id do estado
	
* Deletar estado: http://localhost:3000/estados/delete/ + id do estado

### CLIENTES

* Listar todos os clientes: http://localhost:3000/clientes

* Consultar cliente pelo id: http://localhost:3000/clientes/id/ + id do cliente
	
* Consultar cliente pelo nome: http://localhost:3000/clientes/nome/ + nome do cliente

* Listar clientes pelo nome da cidade: http://localhost:3000/clientes/cidade/ + nome da cidade
	
* Cadastrar cliente: http://localhost:3000/clientes/create
	
* Atualizar cliente: http://localhost:3000/clientes/update/ + id do cliente
	
* Deletar cliente: http://localhost:3000/clientes/delete/ + id do cliente
