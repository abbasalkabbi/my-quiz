import  React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Context from "./Context";
import Sing_in from "./pages/sing_in";
import Sing_up from "./pages/sing_up";
import Quiz from "./pages/Quiz";
function App() {
  const url_base='http://localhost/my-quiz/api/'
  const url = {
    Login:`${url_base}Login.php`,
    get_quiz:`${url_base}get_quiz.php?`,
    avatar:`${url_base}avatars/`
    };
  return (
    <div className="App">
      <Context.Provider  value={url}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home/>}/>
                <Route path="Sing_in" element={<Sing_in/>}/>
                <Route path="Sing_up" element={<Sing_up/>}/>
                <Route path="quiz/:id/:id_answer" element={<Quiz/>}/>
            </Route>
          </Routes>
        </BrowserRouter> 
      </Context.Provider>
  </div>
  );
}

export default App;
