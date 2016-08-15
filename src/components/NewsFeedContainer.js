import React from 'react';

import { rootUrl } from '../constants/constants.js';
import NewsFeed from './Newsfeed';

class NewsFeedContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      messages: []
    }
  }

  componentWillMount() {
    this.get('newsfeed');
  }

  get (data) {
    var url = `${rootUrl}${data}.json`;

    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({
          messages: result.messages
        });
      })
  }

  render () {
    var { messages } = this.state;
    return <NewsFeed messages={messages} />
  }
}

export default NewsFeedContainer;
