import './App.css';
import Greetings from './components/Greetings.js'
import Messege from './components/Message.js'
import Navbar from './components/Navbar.js'
import Student from './components/Student.js'
import Contacts from './components/Contants.js'
function App() {
  return (
    <div className="App">
     <Greetings name ="Ben" heroName ="Amedina" occupationName = "doctor"> 
     <p>children components</p>
     </Greetings>
     <Greetings name = "MWangi" heroName = "Batman" occupationName = "engineer">
      <button>Action</button> </Greetings>
     <Messege />
     <Navbar/>
      <p>Hello again</p>
     <Student name = "parttime"sessions={30}></Student>
     <Contacts cellPhone = {""} email ={""} box={""}></Contacts>

    </div>
    
  );
}

export default App;
