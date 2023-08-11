import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';

function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(props.pageSize || 10); // Default page size is 10, or use props.pageSize if provided

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=d8f0c5edd80145078ba685fcb320ae82&page=${page}&pageSize=${pageSize}`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNews();
  }, [page, pageSize]);

  const handleNext = () => {
    setPage(page + 1);
  };
  
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  
  
  

  return (
    <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'gray' }}>
      <h1 className='text-center'>Fatafat News Head-lines</h1>

      <div className='row'>
        {articles !== undefined ? (
  articles.length > 0 ? (
    articles.map((element) => (
          <div className='col-md-4' key={element.url}>
            <Newsitem
              title={element.title ? element.title.slice(0, 45) : ''}
              description={element.description ? element.description.slice(0, 88) : ''}
              imgUrl={element.urlToImage}
              newsUrl={element.url} />
          </div>))
  ) : (
    <p>No articles available.</p>
  )
) : (
  <p>Loading articles...</p>
)}

       
      </div>
      <div className='container d-flex justify-content-between'>
        <button disabled={page <= 1} type="button" onClick={handlePrevious} className="btn btn-warning">
          &larr; Previous
        </button>
        <button type="button" onClick={handleNext} className="btn btn-warning">
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default News;

