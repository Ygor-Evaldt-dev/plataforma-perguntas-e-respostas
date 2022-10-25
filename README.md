# plataforma-perguntas-e-respostas
- Plataforma de perguntas e respostas estilo Yahoo respostas.

## Stacks:

### Node.js
- https://nodejs.org/en/

### Express
- https://expressjs.com/pt-br/

### Express ejs layouts
- https://www.npmjs.com/package/express-ejs-layouts

### Body-parser
- https://www.npmjs.com/package/body-parser

### Ejs
- https://ejs.co/

### Sequelize
- https://sequelize.org/docs/v6/getting-started/

### Mysql2
- https://www.npmjs.com/package/mysql2

### Faker.js
- https://fakerjs.dev/guide/

## Rodando o projeto localmente.

### Passo 1
- Instale o node.js no seu ambiente local: https://nodejs.org/en/

### Passo 2
- Instale o Mysql server no seu ambiente local: https://dev.mysql.com/downloads/

### Passo 3
- Com o Node.js e o Mysql instalado localmente, crie um clone deste repositório no seu computador com o comando terminal - 'git clone https://github.com/Ygor-Evaldt-dev/plataforma-perguntas-e-respostas.git'

### Passo 4
- Acesse o diretorio do projeto com o comando terminal 'cd plataforma-perguntas-e-respostas'

### Passo 5
- Remova o versionamento com o comando terminal 'rm -rf .git/'

### Passo 6
- Abra o PowerShell terminal no seu computador e digite o comando mysql -h localhost -u root -p
- digite a senha que você definiu para o seu usuario local
- Já dentro do MySql digite o comando CREATE DATABASE 'nome do banco de dados'

### Passo 7
- No diretorio 'database' no arquivo 'connection.js' preencha as informações de 'database' e 'password' definidar por você no passo anterior

### Passo 8
- Se certificando de estar dentro do diretório do projeto, escreva o comando terminal 'node index.js'

### Passo 9
- Abra o seu navegador e acesse o endereço 'http://localhost'

## Observações
### Porta do servidor local
- Caso o seu ambiente local já esteja utilizando a porta '80' para algum outro serviço, acesse o arquivo 'index.js' na raiz do projeto e altere o valor da váriavel 'port' linha 6 para outra de sua preferência, execute o comando terminal 'node index.js' e acesse o endereço http://localhost/'porta que você escolheu'
