import  React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Context from "./Context";
import Sing_in from "./pages/sing_in";
function App() {
  const url_base='http://localhost/my-quiz/api/'
  const url = {
    Login:`${url_base}Login.php`,
    };
  return (
    <div className="App">
      <Context.Provider  value={url}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home/>}/>
                <Route path="Sing_in" element={<Sing_in/>}/>
            </Route>
          </Routes>
        </BrowserRouter> 
      </Context.Provider>
  </div>
  );
}

export default App;
