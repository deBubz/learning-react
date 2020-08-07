import React from 'react';
import './App.css';

// redux
import { Provider } from 'react-redux';
import store from './store'

// components
import Post from './component/Post' 
import PostForm from './component/PostForm'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm /> <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
