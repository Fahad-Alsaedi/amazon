import React from 'react';
import './App.css';
import data from './data';
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
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div className="price">${product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    );
  }
}

export default App;
