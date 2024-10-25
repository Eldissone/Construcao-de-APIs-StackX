# Construção-de-APIs-StackX

# Configuração: npm init, npm install express, filesystem

E para simular requisições HTTP pode se usar o <strong>Postman ou Thunder Client<strong/>

 Esta API permite simular requisições GET e POST.<br/>

 Para inserir um novo usuáro no array e no arquivo txt:<br/>

 #GET -> http://localhost:3000/Usuarios<br/>
 Para visualizar todos usuários<br/>

 #POST<br/>
{<br/>
  "nome": "Eldissone Vilonga", <br/>
  "idade": 21,<br/>
  "email": "contacto@eldissone.com",<br/>
  "post":  "Olá mundo esse é meu primeiro post"<br/>
}<br/>

🗑️ E se quiser remover usuario faça DELETE (/Usuarios/:nome)
