import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";


export default function App()
{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="register" element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    );
}
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<App/>) ; 


