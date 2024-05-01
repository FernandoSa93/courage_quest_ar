# Como executar

Siga este passo-a-passo para conseguir executar e testar este projeto.

## 1) NodeJS

Instalar a versão LTS do [NodeJS]([https://nodejs.org/en/download]).


## 2) Dependências

Abrir o cmd como administrador e acessar a pasta do projeto com o seguinte comando:
### `cd caminho`

Executar o seguinte comando para instalar as dependências do projeto:
### `npm install`

Durante os testes, foi identificado que a biblioteca do threeJS foi atualizada e a do MindAR não atualizou o nome das funções do three que ele usa e por conta disso ocorre um erro.
Para solucionar este problema, é preciso instalar uma versão anterior do three com o seguinte comando:
### `npm install three@0.151.0`


## 3) Executar projeto

Para executar o projeto, use o seguinte comando dentro da pasta:
### `set HTTPS=true&&npm start`

Uma página do navegador padrão será aberta quando o projeto tiver sido compilado e na tela do cmd estará escrito uma url para acesso local, que será formada por: https://IP_do_computador:3000.
Usar essa url no celular para realizar os testes em AR com a câmera.


## 4) Testes

Até o momento, foi implementado o exemplo de multi-target do site da [MindAR]([https://nodejs.org/en/download]), utilizando o modelo do Raccoon.
Acessar o site deles e usar o card do Raccoon para testes.
