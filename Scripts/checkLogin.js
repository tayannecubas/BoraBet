 /* para utilisar essa função você pode fazer da seguinte maneira:
          colocacar esse script na mesma pasta dos htmls e css e no html do registra usuário no final colocar < script src = "checkLogin.js" > < /script>
     
        ou você compia toda a função para dentro do html e coloca dentro da tag <script>function checkLogin....</script>

        por fim no html aonde o botão esta coloca onclick="checkLogin(event)"
              */
 function checkLogin(event) {
     event.preventDefault();
     document.getElementById('message').innerHTML = "checking";
     // Aqui vai a url aonde esta sua aplicação backend esta esperando o data. se estiver testando localmente seria ex http://localhost:3000/salvaNovoUsuario
     const url = "https://hostname/login";
     const data = {
         "name": document.getElementById('username').value,
         'password': document.getElementById('password').value
     };
     const other_params = {
         headers: { "content-type": "application/json; charset=UTF-8" },
         body: data,
         method: "POST",
         mode: "cors"
     };

     fetch(url, other_params)
         .then(function(response) {
             if (response.ok) {
                 return response.json();
             } else {
                 throw new Error("Could not reach the API: " + response.statusText);
             }
         }).then(function(data) {
             document.getElementById("message").innerHTML = data.encoded;
         }).catch(function(error) {
             document.getElementById("message").innerHTML = error.message;
         });
     return true;
 }