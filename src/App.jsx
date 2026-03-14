import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Loader from "./Components/Loader";
import { ThemeProviderCustom } from "./context/ThemeContext";

import "./assets/Css/Theme.css";
import "./assets/Css/MainStyle.css";

function App() {

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    },2000)

    return ()=> clearTimeout(timer)

  },[])

  return (
    <ThemeProviderCustom>
      <div className="app-root">
        {loading ? <Loader/> : <Home/>}
      </div>
    </ThemeProviderCustom>
  );
}

export default App;