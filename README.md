# Challenger Solution: Search API

[![maintainer-badge](https://img.shields.io/badge/mantenedor-Elder%20Junior-informational.svg)](mailto:elderjunior08@gmail.com) [![node-version](https://img.shields.io/badge/node-%3E%3D14.15.0-brightgreen)](https://nodejs.org/en/docs/) 

API REST que busca usuários pelo nome e username a partir de uma **palavra chave**

# Iniciando a aplicação local

1. Clone o repositório - `git@github.com:ElderJr08/challenge-solution.git`.
2. Instale as dependências - `npm install`.
3. Crie um arquivo .env e preencha com as *Variáveis de Ambiente*
4. Para iniciar a aplicação em modo local - `npm run start`.
5. Para rodar os testes unitarios da aplicação - `npm run test:unit`.
6. Para rodar os testes integrados da aplicação - `npm run test:integration`.
7. Para rodar todos os testes da aplicação - `npm run test`.

## Variáveis de ambiente
```
PORT=8080
MONGO_URI=mongodb://localhost:27017/challenger
USERS_FILE_NAME=database.csv
USERS_FILE_SEPARATOR=','
HIGH_RELEVANCE_FILE_NAME=lista_relevancia_1.txt
LESS_RELEVANCE_FILE_NAME=lista_relevancia_2.txt
```

# Iniciando a aplicação via Docker

1. Clone o repositório - `git@github.com:ElderJr08/challenge-solution.git`.
2. Rodar comando docker-compose - `docker-compose up`.

# Endpoints
## GET
```
/search?query={term}
```
Obtém todos os usuários em um formato .json que combinam com o termo pesquisado, de acordo com a regra de relevância das listas informada anteriormente.

### Exemplo

| Parâmetro  | Descrição                   |
|------------|-----------------------------|
| query      | Termo procurado.                                                                                           |
| from       | Posição da página. 0 é a primeira, 1 é a segunda e assim por diante.  Caso não informado, o valor default será 0.|
| size       | Quantidade de itens a ser retornado.  Caso não informado, o valor default será 15.  


## Exemplo de uso
```
$ curl http://localhost:8080/search?query=dragon
```

### Retorno:
```
    {
        "from": 0,
        "size": 2,
        "data": [
            {
                "id": "aaaaaaaa-bbbb-cccc-dddd-111111111111",
                "name": "Dragon Ball",
                "username": "dragon.ball"
            },
            {
                "id": "xxxxxxxx-yyyy-cccc-aaaa-zzzzzzzzzzzz",
                "name": "Super Dragon",
                "username": "super.dragon"
            }
        ]
    }


```