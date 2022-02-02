//typeScript não tem uma definição 
//padrão mas a comunidade o reconhece como uma linguegem de programação.

// o que o typescript traz de vantagens ?
// - trazer mais entendimento do que é a informação chamada

// exemplo de como usar

//o nome type define que vou usar tipagem neste objeto
type User = {
  name: string
  email: string
  address: {
    city: string
    state?: string
  }
}


function ShowWelcome(user: User){
  return `Welcome ${user.name} your email is ${user.email}. Your city is ${user.address.city}`
}


ShowWelcome({
  name: 'rodrigo ',
  email: 'rod@test.com',
  address: {
    city:'Rio De Janeiro',
    state: 'RJ'
  }
})

