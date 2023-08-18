import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-0  translate-middle badge round-pill bg-success" style={{ left: "90%", zIndex: "1" }}>{source}
          </span>
          <img src={!imgUrl ? "https://images.pushsquare.com/4e7e104c76d84/1280x720.jpg" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}....</p>
            <p className='card-text'><small className='text-muted'> By {!author ? "Uknown" : author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btm-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem