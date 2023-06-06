import './App.css';
import HeaderBar from './Components/headerBar';
import LandingPage from './Components/LandingPage'

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <HeaderBar/>
      <LandingPage/>
    </div>
  );
}

export default App;
