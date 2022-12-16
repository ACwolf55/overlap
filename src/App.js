import './App.css';
import {Route,Routes} from 'react-router-dom'
import { Profile } from './Profile';
import { Landing } from './Landing';
import { VendorRegistration } from './VendorRegistration';
import { VendorHome } from './VendorHome';
import MemberRegistration from './MemberRegistration';
import MemberHome from './MemberHome'

function App() {
  return (
    <div className="App">

    <Routes>
    <Route path= '/' element={ <Landing/>} />
    <Route path ='/profile' element={ <Profile/>} />
    <Route path ='/vendor-reg' element={ <VendorRegistration/>} />
    <Route path ='/vendor-home' element={ <VendorHome/>} />
    <Route path ='/member-reg' element={ <MemberRegistration/>} />
    <Route path ='/member-home' element={ <MemberHome/>} />
    

    </Routes>

  
    </div>
  );
}

export default App;
