import React, {Component, version} from 'react';
import CVfile from '../../assets/pdfs/JL.pdf';
import '../../assets/css/main.css'; 
import { Link, Route } from 'react-router-dom'


export default class Nav extends Component {
  render() {
    return (
      <nav>
        <header>
          <div className="site-title">
            <a href="/">Jing Li</a>
          </div>
        </header>
        <div className="nav-menu">
          <a className="color-link nav-link" href={CVfile}>CV</a>
          <Link className="color-link nav-link" to={'/personal'}>Personal</Link>
        </div>
        <footer className="footer">
          <div className="social-icons">
            <a className="social-icon" href="mailto:jliellen@yorku.ca" target="_blank" rel="noopener" title="Email">
              <i className="fas fa-envelope"/>
            </a>
            <a className="social-icon" href="https://scholar.google.com/citations?user=ir8DKqYAAAAJ&hl=en" target="_blank" rel="noopener"
               title="Google">
               <i className="fab fa-google" />
            </a>
            <a className="social-icon" href="https://www.linkedin.com/in/jing-li-0254a4172/" target="_blank"
               rel="noopener" title="LinkedIn">
               <i className="fab fa-linkedin" />
            </a>
          </div>
          {/* <p>
            <a href="https://github.com/kimcc/hugo-theme-noteworthy" target="_blank" rel="noopener">Noteworthy theme</a>
          </p>
          <p>
            <a href="https://gohugo.io" target="_blank" rel="noopener">Built with Hugo</a>
          </p> */}
        </footer>
      </nav>
    )
  }
}
