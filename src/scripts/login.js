login()

function login() {
    let out = 1
    while (out != 0) {
        let user = window.prompt('Usuário:')
        let password = window.prompt('Senha:')
        if (password.length < 8) {
            window.alert('A senha deve conter no minimo 8 caracteres!')
        } else {
            window.alert('Login realizado com sucesso!')
            document.write(`<p>Bem vindo <strong>${user.toUpperCase()}</strong></p>`)
            out = 0
        }
    }
}