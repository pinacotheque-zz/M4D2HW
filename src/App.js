
import './App.css';
import NavBar from './components/NavBar';
import MyFooter from './components/MyFooter'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import LatestRelease from './components/LatestRelease';


function App() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <LatestRelease/>
        <MyFooter/>
    </div>
  );
}

export default App;
