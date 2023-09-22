import React, { Component } from 'react';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types'

class News extends Component {
  static defaultProps = {
    category: 'general',
    mode: 'light',
  };

  static propTypes = {
    category: PropTypes.string,
    mode: PropTypes.string,
    pageSize: PropTypes.number, // Add this line for pageSize prop validation
  };

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      page: 1,
      pageSize: props.pageSize || 10,
      
    };document.title = `${this.props.category} Fatafat News `
  }
  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      this.setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  setMode = (mode) => {
    this.setState({ mode });
  };


  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page || prevState.pageSize !== this.state.pageSize) {
      this.fetchNews();
    }
  }

  fetchNews = async () => {
    try {
      const { page, pageSize } = this.state;
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d8f0c5edd80145078ba685fcb320ae82&page=${page}&pageSize=${pageSize}`);

      const data = await response.json();
      this.setState({ articles: data.articles });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  handleNext = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handlePrevious = () => {
    if (this.state.page > 1) {
      this.setState(prevState => ({
        page: prevState.page - 1,
      }));
    }
  };

  render() {
    const { articles, page } = this.state;
    const { mode } = this.props;

    return (
      <div className='container my-5' style={{ color: mode === 'dark' ? 'white' : 'brown' }}>
        <h1>Fatafat {this.props.category} News Headlines</h1>

        <div className='row '>
          {articles !== undefined ? (
            articles.length > 0 ? (
              articles.map(element => (
                <div className='col-md-4' key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={element.description ? element.description.slice(0, 88) : ''}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))
            ) : (
              <p>Loading articles......</p>
            )
          ) : (
            <p>Please Wait...</p>
          )}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={page <= 1} type='button' onClick={this.handlePrevious} className='btn btn-warning'>
            &larr; Previous
          </button>
          <button type='button' onClick={this.handleNext} className='btn btn-warning'>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
