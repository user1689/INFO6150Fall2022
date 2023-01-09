import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render() {
    const {onClick, extraClassName} = this.props;
    return (
      <div className={`${extraClassName}`} onClick={onClick}><button className="icon__fakebutton"></button></div>
    )
  }
}
