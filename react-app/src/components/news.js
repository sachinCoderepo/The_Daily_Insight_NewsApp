import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=07dd0014afce4ee7a7461c444d75a5db");
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className='container my-3'style={{color: props.mode==='dark'?'white':'dark'}}>
      <h1>Fatafat News Head-lines</h1>

      <div className='row'>
        {articles.map((element) => (
          <div className='col-md-4' key={element.url}>
            <Newsitem
              title={element.title ? element.title.slice(0, 45) : ""}
              description={element.description ? element.description.slice(0, 88) : ""}
              imgUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>
        ))}
      </div>
      {/* Add pagination buttons or other components here */}
    </div>
  );
}

export default News;
