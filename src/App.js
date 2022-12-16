import './App.css';
import {Route,Routes} from 'react-router-dom'
import { Profile } from './Profile';
import { Landing } from './Landing';
import { VendorRegistration } from './VendorRegistration';
import { VendorHome } from './VendorHome';

function App() {
  return (
    <div className="App">

    <Routes>
    <Route path= '/' element={ <Landing/>} />
    <Route path ='/profile' element={ <Profile/>} />
    <Route path ='/vendor-reg' element={ <VendorRegistration/>} />
    <Route path ='/vendor-home' element={ <VendorHome/>} />

    </Routes>

  
    </div>
  );
}

export default App;
