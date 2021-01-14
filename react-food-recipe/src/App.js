// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";


function App() {

  const [search, setSearch] = useState("");
  const [recipes, setRecipies] = useState([]);

  const APP_ID = "c511801d";
  const APP_KEY = "817069a36f1426e641d008c47d2ff0e0";

  // async wait until it gets the response
  useEffect(async() =>{
    const data = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    console.log(data);
    setRecipies(data.hits);
  });
  


  const onInputChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div className="App">
      <Header search={search} onInputChange = {onInputChange} />
    
     <Recipes />
    </div>
  );
}

export default App;
