import React, { useState,useEffect } from 'react'
import Card from './Card'
import axios from 'axios';
import CoverImageComponent from '../CoverImageComponent';
import styles from './Event.module.css'

export default function Event() {
  const [news,setNews]=useState([]);
  const [loading, setLoading] = useState(false);

  const getApi=async()=>{
    try {
      setLoading(true);
    await axios.get("https://newsapi.org/v2/everything?q=medtech&apiKey=8563719b635a4f2582a74281a0a87333").then((res)=>(setNews(res.data.articles.slice(0,18))));
  } catch (error){
  console.error("Error fetching the news", error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
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
      
        {loading ? ( // Check if loading is true
          <h2 className='text-center gradientText'>Loading...</h2>
        ) : (news.map((item, index) => (
        <div key={index} className="col-md-4 mb-3">
          <Card item={item} />
        </div>
      )))}
    </div>
  </div>
</>);
}
