import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



import Create from './component/create';
import Edit from './component/edit';
import Lists from './component/lists';
import Navb from './component/Navb';



function App() {

  return (
    <div className="App">
      <Navb />
      <div className="App-header">
        <Routes>
          <Route path="*" element={<Navigate to="/list" />} />
          <Route path='/list' element={<Lists />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
