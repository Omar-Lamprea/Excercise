import './App.css'
import UserQueueProvider from './context/UserQueueContext'
import NewUserForm from './components/UserForm/NewUserForm'
import UserQueueList from './components/UserQueueList/UserQueueList'
import AttendUser from './components/AttendUser/AttendUser'

function App() {
  return (
    <UserQueueProvider>
      <header>
        <h1>User Queue</h1>
      </header>
      <main className="app-container">
        <section className='box-container'>
          <NewUserForm />
        </section>
        <section className='box-container'>
          <UserQueueList />
        </section>
        <section className='box-container'>
          <AttendUser/>
        </section>
      </main>
    </UserQueueProvider>
  )
}

export default App
