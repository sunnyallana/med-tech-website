import React, { useState,useEffect } from 'react'
import Card from './Card'
import axios from 'axios';
import CoverImageComponent from '../CoverImageComponent';
import styles from './Event.module.css'

export default function Event() {
  const [news,setNews]=useState([]);

  const getApi=async()=>{
    await axios.get("https://newsapi.org/v2/everything?q=medtech&apiKey=8563719b635a4f2582a74281a0a87333").then((res)=>(setNews(res.data.articles.slice(0,18))));
   };
useEffect(()=>{
  getApi();
},[]);

return(
<>
<CoverImageComponent image="HealthCareCoverImage.jpg" title="Events" />
  <h2 className={`text-center ${styles.gradientText}`} style={{margin:"3rem 0"}}>Medtech News</h2>
  <div className="container">
    <div className="row">
      {news.map((item, index) => (
        <div key={index} className="col-md-4 mb-3">
          <Card item={item} />
        </div>
      ))}
    </div>
  </div>
</>);
}
