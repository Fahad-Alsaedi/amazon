import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
// import Articles from './components/articles';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // articles: [],
      // tryAxios: [],
    };
  }

  // connect react with API that you build
  // is the same as before exactly
  // this is the way that we learn till now
  ////////////////////////
  // getAllArticles = () => {
  //   axios
  //     .get(`http://localhost:4000/articles`)
  //     .then((response) => {
  //       console.log('RESPONSE: ', response);
  //       console.log('DATA: ', response.data);
  //       this.setState({ tryAxios: response.data.articles });
  //     })
  //     .catch((err) => {
  //       console.log('ERR: ', err);
  //     });
  // };
 

  render() {
    return (
      <BrowserRouter>
<div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazona
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
      <Route path="/product/:id" component= {ProductScreen} exact></Route>
        <Route path="/" component= {HomeScreen} exact></Route>
        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
