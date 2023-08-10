import React from 'react';

function Newsitem({ title, description, imgUrl, newsUrl }) {
  return (
    <div className='my-3'>
      <div className="card" style={{width: "18rem"}}>
        <img src={!imgUrl ? "https://images.pushsquare.com/4e7e104c76d84/1280x720.jpg" : imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{description}....</p>
          <a href={newsUrl} target='_blank' className="btn btm-sm btn-primary" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default Newsitem;
