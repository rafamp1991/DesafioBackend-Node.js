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

## Rotas

### CIDADES

* Listar todas as cidades: http://localhost:8080/cidades
	
* Consultar cidade pelo id: http://localhost:8080/cidades/ + id da cidade

* Consultar cidades pelo nome: http://localhost:8080/cidades/nome/ + nome da cidade

* Listar cidades pelo nome do Estado: http://localhost:8080/cidades/estado/nome/ + nome do estado

* Listar cidades pelo uf do Estado: http://localhost:8080/cidades/estado/uf/ + uf do estado

* Cadastrar cidade: http://localhost:8080/cidades	
	
* Atualizar cidade: http://localhost:8080/cidades/ + id da cidade
	
* Deletar cidade: http://localhost:8080/cidades + id da cidade

### ESTADOS

* Listar todos os estados: http://localhost:8080/estados
	
* Consultar estado pelo id: http://localhost:8080/estados/ + id do estado
	
* Consultar estado pelo nome: http://localhost:8080/estados/nome/ + nome do estado
	
* Consultar estado pelo UF: http://localhost:8080/estados/uf/ + uf do estado

* Cadastrar estado: http://localhost:8080/estados
	
* Atualizar estado: http://localhost:8080/estados/ + id do estado
	
* Deletar estado: http://localhost:8080/estados/ + id do estado

### CLIENTES

* Listar todos os clientes: http://localhost:8080/clientes

* Consultar cliente pelo id: http://localhost:8080/clientes/ + id do cliente
	
* Consultar cliente pelo nome: http://localhost:8080/clientes/nome/ + nome do cliente
	
* Cadastrar cliente: http://localhost:8080/clientes
	
* Atualizar cliente: http://localhost:8080/clientes/ + id do cliente
	
* Deletar cliente: http://localhost:8080/clientes/ + id do cliente
