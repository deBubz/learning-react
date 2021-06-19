import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadData, filterByValue } from '../store/index'


class App extends Component{

  componentDidMount() {
    document.title = "Cheese"
    // loadData returns obj used by dispatch as action
    // {count: 20} payload
    this.props.dispatch(loadData({count: 30}))
  }

  // filter
  filterByInput(e) {
    let input = e.target.value;
    this.props.dispatch(filterByValue({value: input}));
  }

  render() {
    let products = this.props.state.filteredProduct;
    // console.log(products);
    return (
      <div className="App">
        <header className="App-header">
          {/* header */}
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title"> Filtering with React-Redux</h1>
                <h3 className="subtitle"> something guide</h3>
              </div>
            </div>
          </section>
          
          <section className="section">
            <div className="container">
              <div>
                <div className="field is-grouped" style={{alignItems: "center"}}>
                  {/* filter text box */}
                  <div className="control" style={{minWidth: "300px"}}>
                    <input onChange={ e => { this.filterByInput(e); }}
                      style={{width: "100%"}} placeholder='Filter by' type='text'/>
                  </div>
                </div>
              </div><br/>

              {/* item list */}
              <div className='tile is-ancestor' style={{flexWrap: "wrap"}}>
                {console.log(products) }
                {
                  products && 
                  products.map(product => (
                    <div className='tile is-parent is-3'>
                      <div className='tile is-child box'>
                        <p> <b>Name: </b> {product.name} </p>
                        <p> <b>Designer: </b> {product.designer} </p>
                        <p> <b>Type: </b> {product.type} </p>
                        <p> <b>Price: </b> {product.price} </p>
                      </div>
                  </div> ))
                }
              </div>
            </div>
          </section>
        </header>
      </div>
    );
  }
}

// redux connect
function mapStateToProps(state) {
  return {state};
}

export default connect(mapStateToProps)(App);
