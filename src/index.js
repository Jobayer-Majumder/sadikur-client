import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
// import { createUploadLink } from "apollo-upload-client";
import {
  transitions,
  positions,
  Provider as AlertProvider
} from 'react-alert'
import reportWebVitals from './reportWebVitals';
import AlertTemplate from 'react-alert-template-basic';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: createUploadLink({
  //   uri: "http://localhost:5000/"
  // }),
  
  uri: "http://localhost:5000/graphql"
})

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}



ReactDOM.render(

  <ApolloProvider client={client}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
