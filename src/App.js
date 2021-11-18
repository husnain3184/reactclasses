import './App.css';
import Header from './Mycomponets/Header';
import Textarea from './Mycomponets/Textarea/Textarea';

function App() {
 
  
  return (
   <div className="container">
   <Header title = {"My Todos"}/>
   <Textarea/>
   </div>
  );
}

export default App;
