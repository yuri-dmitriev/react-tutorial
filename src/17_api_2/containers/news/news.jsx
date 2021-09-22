import React, { Component } from 'react';

import Title from '../../components/title/title';
import NewsPost from '../../components/news/news';
import Input from '../../components/input/input';
import Select from '../../components/select/select';
import Pagination from '../../components/pagination/pagination';

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';
const HITS_PARAM = 'hitsPerPage=';
const PAGE_PARAM = 'page=';

const HITS = [
  {
    value: 10,
    label: 10,
  },
  {
    value: 20,
    label: 20,
  },
  {
    value: 30,
    label: 30,
  },
  {
    value: 40,
    label: 40,
  },
  {
    value: 50,
    label: 50,
  },
];

class News extends Component {
  state = {
    searchQuery: '',
    result: {},
    hitsPerPage: 20,
    page: 0,
  };

  componentDidMount() {
    const { searchQuery, hitsPerPage, page } = this.state;
    this.fetchData(searchQuery, hitsPerPage, page);
  }

  fetchData(searchQuery, hitsPerPage, page) {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${HITS_PARAM}${hitsPerPage}&${PAGE_PARAM}${page}`)
      .then(res => res.json())
      .then(result => this.setNews(result))
      .catch(error => error);
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      searchQuery: value
    });
  };

  handleHitsChange = ({ target: { value } }) => {
    this.setState({
      hitsPerPage: +value,
      page: 0,
    }, () => {
      const { searchQuery, hitsPerPage, page } = this.state;
      this.fetchData(searchQuery, hitsPerPage, page);
    });
  };

  handlePageChange = ({ target }) => {
    const btnType = target.getAttribute('data-name');
    const { page } = this.state;

    switch (btnType) {
      case "next":
        this.updatePage(page + 1);
        break;
      case "prev":
        this.updatePage(page - 1);
        break;
      default:
        break;
    }
  };

  updatePage = (number) => {
    this.setState({
      page: number,
    }, () => {
      const { searchQuery, hitsPerPage, page} = this.state;
      this.fetchData(searchQuery, hitsPerPage, page);
    });
  };

  getSearch = ({ key }) => {
    if (key === 'Enter') {
      this.setState({
        page: 0,
      }, () => {
        const { searchQuery, hitsPerPage, page } = this.state;
        this.fetchData(searchQuery, hitsPerPage, page);
      });
    }
  };

  setNews(result) {
    this.setState({ result });
  }

  render() {
    const { searchQuery, result, hitsPerPage } = this.state;
    const { hits = [], page, nbPages } = result;

    console.log(result);

    return (
      <div className="wrapper">
        <Title title="Hacker News" />
        <Select handleChange={this.handleHitsChange} value={hitsPerPage} options={HITS} />
        <Pagination
          onClick={this.handlePageChange}
          page={page}
          lastPage={nbPages}
        />
        <Input onKeyPress={this.getSearch} onChange={this.handleInputChange} value={searchQuery} />
        <ul className="newsList">
          {hits.map(({ author, created_at, num_comments, objectID, title, points, url }) => 
            <NewsPost
              key={objectID}
              author={author}
              created_at={created_at}
              num_comments={num_comments}
              title={title}
              points={points}
              url={url}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default News;
