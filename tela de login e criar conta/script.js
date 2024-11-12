function mostrarSenha(){
    var senha = document.getElementById("password");
    var btnShowPass = document.getElementById("btn-senha");
    
    if(password.type=="password"){
        senha.type="text";
    }else{
        senha.type="password";
    }
}