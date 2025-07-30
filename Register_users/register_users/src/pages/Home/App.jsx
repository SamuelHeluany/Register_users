import './App.css'
import { useEffect } from 'react'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function App() {

  let users = []

  async function getUsers() {
    users = await api.get('/usuarios')
  }

  useEffect(() => {
    getUsers()
  }, [])
  

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


