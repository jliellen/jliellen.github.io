import React, {Component} from 'react'
import ProfileLogo from '../../assets/images/profile.jpg'
import '../../assets/css/main.css'

export default class Main extends Component {
  render() {
    return (

      <div id="content" className="content-container">
        <h1 className="post-title">About Me</h1>
        <div>
          <p><img className="article-image" src={ProfileLogo } alt="Profile"/></p>
          <p> I'm a first year PhD student in <a href="http://dminer.eecs.yorku.ca/">Data Mining Lab </a> 
              at York University, supervised by <a href="https://www.eecs.yorku.ca/~papaggel/">Manos Papagelis</a>.
          </p>
          <p>I Love the complexity that large datasets represent and want data collection to reach its potential to effect positive change in the world. 
            Always looking for opportunities to demonstrate, learn, and grow my skill set. 
            My current interest is data mining, machine/deep learning, generative models, LLMs.</p>
          <h2 id="news">News</h2>
          <ul>
            <li><strong>31/12/2023:</strong> I completed my master degree in Computer Science.</li>
          </ul>
          {/* <h2 id="preprints">Preprints</h2>
          <ul>
            <li><a href="https://arxiv.org/pdf/2012.05895.pdf">Flexible Few-Shot Learning with Contextual
              Similarity</a> .<br/> Mengye Ren, Eleni Triantafillou, Kuan-Chieh Wang, James Lucas, <strong>Jake
              Snell</strong>, Xaq Pitkow, Andreas S. Tolias, and Richard Zemel.
            </li>
          </ul> */}
          <h2 id="publications">Publications</h2>
          <ul>
            <li><p><a href="https://www.eecs.yorku.ca/~papaggel/docs/papers/all/bdr-epidemics.pdf">Epidemic Spreading in Trajectory Networks</a>. 
            T. Pechlivanoglou, <strong>J. Li</strong>, J. Sun, F. Heidari, and M. Papagelis. 
            Big Data Research, 2022.<br/> </p></li>
            <li><p><a href="https://www.eecs.yorku.ca/~papaggel/docs/papers/all/acm-sigspatial22-spatialepi-microscopic.pdf">Microscopic modeling of spatiotemporal epidemic dynamics</a>. 
            T. Pechlivanoglou, G. Alix, N. Yanin, <strong>J. Li</strong>, F. Heidari, and M. Papagelis. 
            ACM SIGSPATIAL, 2022.<br/> </p></li>
            <li><p><a href="https://www.eecs.yorku.ca/~papaggel/docs/papers/all/ieee-mdm22-epidemics-mobility-recommendation-system.pdf">A Mobility-based Recommendation System for Mitigating the Risk of Infection during Epidemics</a>. 
            G. Alix, N. Yanin, T. Pechlivanoglou, <strong>J. Li</strong>, F. Heidari, and M. Papagelis. 
            IEEE MDM, 2022.<br/> </p></li>
            <li><p><a href="https://www.eecs.yorku.ca/~papaggel/docs/papers/all/acm-sigspatial23-point2hex.pdf">A Mobility-based Recommendation System for Mitigating the Risk of Infection during Epidemics</a>. 
            A. Faraji*, <strong>J. Li*</strong>, G. Alix, M. Alsaeed, N. Yanin, A. Nadiri, and M. Papagelis. 
            ACM SIGSPATIAL, 2023.<br/> </p></li>
          </ul>
          <h2 id="master-thesis">Master Thesis</h2>
          <ul>
            <li><a href="https://www.eecs.yorku.ca/~papaggel/docs/theses/li-msc-thesis.pdf">Trajectory Prediction Learning Using Deep Generative Models</a>.<br/> <strong>Jing Li</strong>. Master Thesis, Lassonde School of Engineering, 
            York University, 2023.
            </li>
          </ul>
          {/* <h2 id="reviewing">Reviewing</h2>
          <ul>
            <li><a href="https://onlinelibrary.wiley.com/journal/14678640">Computational Intelligence</a>: 2021</li>
          </ul> */}
          <p></p>
        </div>
        <div className="page-footer">
        </div>
      </div>
    )
  }
}
