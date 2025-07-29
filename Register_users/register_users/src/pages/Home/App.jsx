import './App.css'
import Trash from '../../assets/trash.svg'

function App() {

  return (
    <>
      <div className="container">
          <form>
            <h1>Cadastro de usuários</h1>
            <input name='name' type='text' />
            <input name='age' type='number' />
            <input name='email' type='email' />
            <button type='button'>Cadastrar</button>
          </form>
      </div>

      <div className="users">
        <div className="users-infos">
          <p>Nome: </p>
          <p>Idade: </p>
          <p>Email: </p>
        </div>

        <button className="delete-user-button">
          <img src={Trash} />
        </button>
      </div>
    </>
  )
}

export default App


