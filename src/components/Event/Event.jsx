import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import CoverImageComponent from '../CoverImageComponent';
import styles from './Event.module.css';

export default function Event() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getApi = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("https://newsapi.org/v2/everything?q=medtech&apiKey=8563719b635a4f2582a74281a0a87333");
      setNews(response.data.articles.slice(0, 18));
      console.log(response.data.articles);
    } catch (error) {
      console.error("Error fetching the news", error);
      setError("Failed to fetch news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <CoverImageComponent image="HealthCareCoverImage.jpg" title="Events" />
      <h2 className={`text-center ${styles.gradientText}`} style={{ margin: "3rem 0" }}>Medtech News</h2>
      <div className="container">
        <div className="row">
          {loading ? (
            <h2 className='text-center gradientText'>Loading...</h2>
          ) : error ? (
            <h2 className='text-center gradientText'>{error}</h2>
          ) : (
            news.map((item, index) => (
              <div key={index} className="col-md-4 mb-3">
                <Card item={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}


