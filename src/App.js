import './App.css';
import TaskSection from './Components/AddTAsk/TaskSection';
import Navbar from './Components/Navigation/Navbar';
import Section from './Components/Welcome/section';
function App() {
  return (
   <>
       <Navbar/>
      <Section/>
      <TaskSection/>
      </>
  );
}

export default App;
