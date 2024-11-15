import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import ChatBot from "../components/ChatBot";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="chat" element={<ChatBot/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
