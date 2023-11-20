import './App.css';
import Greetings from './components/Greetings.js'
import Messege from './components/Message.js'
import Navbar from './components/Navbar.js'
function App() {
  return (
    <div className="App">
     <Greetings></Greetings>
     <Messege></Messege>
     <Navbar></Navbar>
      <p>Hello again</p>
    </div>
  );
}

export default App;
