import './App.css'
import Trash from '../../assets/trash.svg'

function App() {

  const users = [{
    id: '424j2342k3l4234',
    name: 'Samuel',
    age: 28,
    email: 'samuel@email.com'
  },
  {
    id: '432kl34j23k4lj2dsd',
    name: 'Wallace',
    age: 27,
    email: 'wallace@email.com'
  }
  ]

  return (
    <>
      <div className="container">
        <form>
          <h1>Cadastro de usuários</h1>
          <input name='name' type='text' placeholder='Nome' />
          <input name='age' type='number' placeholder='Idade' />
          <input name='email' type='email' placeholder='Email' />
          <button type='button'>Cadastrar</button>
        </form>

        {users.map((user) => (
          <div className="users" key={user.id}>
            <div className="users-infos">
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>

            <button className="delete-user-button">
              <img src={Trash} />
            </button>
          </div>
        ))}


      </div>
    </>
  )
}

export default App


