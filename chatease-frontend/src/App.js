import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChatRoom from './pages/ChatRoom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<ChatRoom/>} />
      </Routes>
      
    </div>
  );
}

export default App;
