import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios';
import Date from './date';
import Explanation from './explanation';
import Media from './media';
import Title from './title';

function App() {
  const [space, setSpace] = useState();

  useEffect ( () => { 
    axios 
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(result => {
        setSpace(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [] );

  let date = null;
  let explanation = null;
  let url = null;
  let title = null;

  if(space) {
    date = space.date;
    explanation = space.explanation;
    url = space.url;
    title = space.title;
  }
  return (
  <div className = "main">
    <div className = "header">
    <h1>Nasa Picture of the Day</h1>
      <Title title = {title} />
      <Date date = {date} />
      <Media url = {url} />
      <Explanation explanation = {explanation} />
    </div>
  </div>
  )
}

export default App; 