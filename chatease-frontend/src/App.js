import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChatRoom from './pages/ChatRoom';

function App() {
  return (
    <div className="w-screen h-screen bg-[#0d192b] overflow-y-scroll text-slate-200">
      
      <Routes>
        <Route path='/' element={<ChatRoom/>} />
      </Routes>
      
    </div>
  );
}

export default App;
