import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Chat from "./pages/Chat";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/chats" Component={Chat}/>
        
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
