 /* para utilisar essa função você pode fazer da seguinte maneira:
        colocacar esse script na mesma pasta dos htmls e css e no html do registra usuário no final colocar < script src = "sendNewUser.js" > < /script>
   
      ou você compia toda a função para dentro do html e coloca dentro da tag <script>function sendNewUser....</script>

      por fim no html aonde o botão esta coloca onclick="sendNewUser(event)"
            */
 function sendNewUser(event) {
     event.preventDefault();
     document.getElementById('message').innerHTML = "checking";
     // Aqui vai a url aonde esta sua aplicação backend esta esperando o data. se estiver testando localmente seria ex http://localhost:3000/salvaNovoUsuario
     const url = "https://hostname/login";
     const data = {
         "name": document.getElementById('username').value,
         "email": document.getElementById('email').value,
         "description": document.getElementById('user_description').value,
         'password': document.getElementById('user_password').value
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