import React from 'react';

import styles from './newsFeed.css';

class NewsFeed extends  React.Component {
  constructor (props) {
      super(props);
  }

  render () {
    return (
      <div className={styles.container}>
        helooo
      </div>
    );
  }
}



NewsFeed.propTypes = {
  messages: React.PropTypes.array
}

export default NewsFeed;
