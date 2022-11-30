import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

import "./index.css"

export default class App extends Component {
  state = {
    pageIdx: 0
  }
  changePage = (idx) => {
    this.setState({pageIdx: idx})
  }
  render() {
    const {pageIdx} = this.state;
    return (
      <div id="body">
        <Header changePage={this.changePage}></Header>
        <Main pageIdx={pageIdx} changePage={this.changePage}></Main>
        <Footer></Footer>
      </div>
    )
  }
}

