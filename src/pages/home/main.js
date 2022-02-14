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
          <p> I'm a first year master student in <a href="http://dminer.eecs.yorku.ca/">Data Mining Lab </a> 
              at York University, supervised by <a href="https://www.eecs.yorku.ca/~papaggel/">Manos Papagelis</a>.
          </p>
          <p>I Love the complexity that large datasets represent and want data collection to reach its potential to effect positive change in the world. 
            Always looking for opportunities to demonstrate, learn, and grow my skill set. 
            My current interest is graph mining, machine/deep learning with graphs.</p>
          <h2 id="news">News</h2>
          <ul>
            <li><strong>4/10/2021:</strong> A collaboration paper was accepted by Big Data Research.
            </li>
            <li><strong>30/4/2021:</strong> I completed my undergraduate degree in Computer Science.</li>
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
            Tilemachos Pechlivanoglou, <strong>Jing Li</strong>, Jialin Sun, Farzaneh Heidari, and Manos Papagelis. 
            Big Data Research, 2022.<br/> </p></li>
          </ul>
          {/* <h2 id="phd-thesis">Ph.D. Thesis</h2>
          <ul>
            <li><a href="pdf/Snell_Jake_C_202106_PhD_thesis.pdf">Learning to Build Probabilistic Models with Limited
              Data</a>.<br/> <strong>Jake Snell</strong>. Ph.D. Thesis, Dept. of Computer Science, Univ. of Toronto,
              2021.
            </li>
          </ul> */}
          <h2 id="reviewing">Reviewing</h2>
          <ul>
            <li><a href="https://onlinelibrary.wiley.com/journal/14678640">Computational Intelligence</a>: 2021</li>
          </ul>
          <p></p>
        </div>
        <div className="page-footer">
        </div>
      </div>
    )
  }
}
