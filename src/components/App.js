import React from 'react';

import Header from './Header';
import NewsFeedContainer from './NewsFeedContainer';

import styles from './app.css';


const App = () => (
  <div className={styles.container}>
    <Header />
    <NewsFeedContainer />
  </div>
);

export default App;
