import './App.css';
import {Route,Routes} from 'react-router-dom'
import { Profile } from './Profile';
import { VendorRegistration } from './VendorRegistration';
import { Landing } from './Landing';

function App() {
  return (
    <div className="App">

    <Routes>
    <Route path= '/' element={ <Landing/>} />
    <Route path ='/profile' element={ <Profile/>} />
    <Route path ='/vendor-reg' element={ <VendorRegistration/>} />

    </Routes>

  
    </div>
  );
}

export default App;
