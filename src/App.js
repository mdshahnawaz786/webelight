import { useDispatch } from 'react-redux';
import './App.css';
import Nav from './Components/Navbar/Nav';
import { useEffect } from 'react';
import { apiFetching } from './Function/function';
import Home from './Components/Home/Home';
import { Route,Routes } from 'react-router-dom';
import Graph from './Components/Graph/Graph';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    apiFetching(dispatch)
  },[])
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="graph/:login/:repo" element={<Graph/>} />
      </Routes>
    </div>
  );
}

export default App;
