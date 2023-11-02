
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import SingleView from './pages/SingleView';


function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* for empty path just give '/' 
      if you want to add some more pages we put the paths inside <Routes> */}  
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/view/:id' element={<SingleView></SingleView>}></Route>


      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
