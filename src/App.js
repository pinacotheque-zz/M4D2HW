
import './App.css';
import NavBar from './components/NavBar';
import MyFooter from './components/MyFooter'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <MyFooter/>
    </div>
  );
}

export default App;
