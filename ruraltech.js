function entrar(){ //será executada quando o botão for clicado.
    document.getElementById("usuario").value //Procura no HTML
    let senha = document.getElementById("senha").value //Procura no HTML

    let mensagem = document.getElementById("mensagem") //Procura no HTML

    if(usuario == "" || senha == ""){ //SE o usuário estiver vazio OU a senha estiver vazia
        mensagem.innerHTML = "Preencha todos os campos!"
    }

    else if(usuario == "admin" && senha == "123"){
        mensagem.innerHTML = "Login realizado!"
    }

    else{ //Se nenhuma condição acima funcionar.
        mensagem.innerHTML = "Usuário ou senha incorretos!"
    }
}