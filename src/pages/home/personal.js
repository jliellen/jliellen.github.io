import React, {Component} from 'react'
import '../../assets/css/main.css'
import { Link, Route } from 'react-router-dom'

export default class Personal extends Component {
  render() {
    return (    
        <header>
          <div id="personalcontent" className="content-container">
            {/* <Link to={'/'}>Personal</Link> */}
            <h1 className="post-title">Interest</h1>
                <p> Apart from computing, I enjoy most of my time cooking. I also like playing ping pong. 
                I follow a number of podcasts and television shows. 
                <a href="https://www.thisamericanlife.org/">This American Life</a> and <a href="https://www.nbc.com/the-office/photos">The Office</a> are my favorites. </p>
                <p>"I'm not superstitious, but I am a little stitious" -- Michael Scott</p>
          </div>
        </header>
    )
  }
}
