# React + JavaScript + MindAr

O Courage Quest é um sistema gamificado para tratamento de fobias. 
A ideia é que o usuário escolha o animal que lhe causa medo, podendo escolher entre barata ou aranha e através da utilização de um card que deve ser de preferência impresso e posto na palma da sua mão, ele deverá apontar a câmera do seu celular para o card e assim o modelo 3D do animal será exibido.
Vence aquele que suportar os 3 níveis de exposição, começando com um modelo low poly no primeiro nível, seguindo para um modelo intermediário e por fim, um modelo realista do animal.
Os dois primeiros níveis possuem duração de 15 segundos e o último nível possui 20 segundos.
Caso o usuário se assuste com o animal e o perca de vista na câmera, ocorre um game over e o processo deve ser reiniciado.

Acesse o seguinte link com seu celular para iniciar o sistema e utilize o card abaixo para jogar: https://courage-quest.netlify.app
<img src="/src/mind/card.jpeg">

Para rodar(Ambiente de desenvolvimento):

## 1) NodeJS

Instalar a versão LTS do [NodeJS](https://nodejs.org/en/download).


## 2) Dependências

Abrir o cmd como administrador e acessar a pasta do projeto com o seguinte comando:
### `cd caminho`

Executar o seguinte comando para instalar as dependências do projeto:
### `npm install`

Verificar dentro da pasta node_modules se o aframe foi instalado. Se não tiver sido instalado, descompactar o arquivo aframe.rar dentro desta pasta. 
Para mim ele não instalou e tive que baixar o pacote e descompactar.

## 3) Executar projeto

Para executar o projeto, use o seguinte comando dentro da pasta courage_quest_ar:
### `set HTTPS=true&&npm start`

Uma página do navegador padrão será aberta quando o projeto tiver sido compilado e na tela do cmd estará escrito uma url para acesso em LAN, escrito "On your network", que será formada por: https://IP_do_computador:3000.
Usar essa url no celular para realizar os testes em AR com a câmera.
