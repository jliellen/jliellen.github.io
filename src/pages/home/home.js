import React, {Component} from 'react'
import Nav from './nav'
import Main from './main'
import '../../assets/css/main.css'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <Nav/>
        <Main/>
      </div>
    )
  }
}
