import User from "./User.js"

// User é uma super classe de Admin, e Admin é uma sub clase de User
class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())