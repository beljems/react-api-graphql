import React from 'react';
import { useQuery, gql } from '@apollo/client';

import logo from './logo.svg';
import './App.css';

function App() {
  const GET_POSTS = useQuery(gql`
      query getPosts {
        posts {
          id
          title
          content
          image
          createdAt
          comments {
            id
            postId
            content
            createdAt
          }
        }
      }
    `);

  console.log(GET_POSTS);

  return (
    <div className="App">
    </div>
  );
}

export default App;
