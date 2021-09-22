import React, { Component } from 'react';

import Title from '../../components/title/title';
import NewsPost from '../../components/news/news';
import Input from '../../components/input/input';
import Select from '../../components/select/select';

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';
const HITS_PARAM = 'hitsPerPage=';

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
  };

  componentDidMount() {
    const { searchQuery, hitsPerPage } = this.state;
    this.fetchData(searchQuery, hitsPerPage);
  }

  fetchData(searchQuery, hitsPerPage) {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${HITS_PARAM}${hitsPerPage}`)
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
      hitsPerPage: +value
    }, () => {
      const { searchQuery, hitsPerPage } = this.state;
      this.fetchData(searchQuery, hitsPerPage);
    });
  };

  getSearch = ({ key }) => {
    if (key === 'Enter') {
      const { searchQuery, hitsPerPage } = this.state;
      this.fetchData(searchQuery, hitsPerPage);
    }
  };

  setNews(result) {
    this.setState({ result });
  }

  render() {
    const { searchQuery, result, hitsPerPage } = this.state;
    const { hits = []} = result;

    console.log(result);

    return (
      <div className="wrapper">
        <Title title="Hacker News" />
        <Select handleChange={this.handleHitsChange} value={hitsPerPage} options={HITS} />
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
