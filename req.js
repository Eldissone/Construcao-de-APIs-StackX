const nome = "Eldissone";

const result = await fetch (`http://127.0.0.1:3000/`, {
    method: "POST",
    headers: {'content-type' : 'application/json'},
    body: JSON.stringify({
        
        "nome": "Eldissone Vilonga",
        "idade": 19,
        "email": "contacto@eldissone.com",
        "post":  "Olá mundo esse é meu primeiro post"
        
    })
});

console.log(result.status)
console.log(await result.text())