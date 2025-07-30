import './App.css'
import { useEffect, useState, useRef } from 'react'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function App() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersApi = await api.get('/usuarios')

    setUsers(usersApi.data)
    console.log(usersApi.data)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    getUsers()
  }

  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`)

    getUsers()
  }
  
  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <>
      <div className="container">
        <form>
          <h1>Cadastro de usuários</h1>
          <input ref={inputName} name='name' type='text' placeholder='Nome' />
          <input ref={inputAge} name='age' type='number' placeholder='Idade' />
          <input ref={inputEmail} name='email' type='email' placeholder='Email' />
          <button onClick={createUsers} type='button'>Cadastrar</button>
        </form>

        {users.map((user) => (
          <div className="users" key={user.id}>
            <div className="users-infos">
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>

            <button className="delete-user-button"
            onClick={() => deleteUser(user.id)}>
              <img src={Trash} />
            </button>
          </div>
        ))}


      </div>
    </>
  )
}

export default App


