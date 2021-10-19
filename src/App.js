import './App.css';
import { useState } from 'react';
import Form from './Compoents/Form/Form';
import Posts from "./Compoents/Posts"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [currentId, setCurrentId] = useState(0);
  return (
    <div className="row m-0">
      <div className='col-lg-7 col-md-12'>
        <Posts setCurrentId={setCurrentId} />
      </div>
      <div className='col-md-none col-lg-5'>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
}

export default App;
