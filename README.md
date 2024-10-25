# Construção-de-APIs-StackX

# Configuração: npm init, npm install express, filesystem

 Esta API permite simular requisições GET e POST.

 Para inserir um novo usuáro no array e no arquivo txt:

 GET -> http://localhost:3000/Usuarios
 Para visualizar todos usuários

 POST
{
  "nome": "Eldissone Vilonga",
  "idade": 21,
  "email": "contacto@eldissone.com",
  "post":  "Olá mundo esse é meu primeiro post"
}

🗑️ E se quiser remover usuario faça DELETE (/Usuarios/:nome)
