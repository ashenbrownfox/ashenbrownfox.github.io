import React, {Component} from 'react';
import sample7 from './../css/images/pic07.jpg';
class Portfolio extends Component {
  render(){
    return (
        <section id="portfolio" classNameName="four">
            <div className="container">
                <header>
                    <h2>Portfolio</h2>
                </header>
                <p>Some projects and snippets I've been working on.</p>
                

                <div className="row">
                {/*this.props.projects.map((project,index)=>{

                return <article class="item">
                        <a href={project.url} className='image fit'><img src={project.imgUrl} alt='' /></a>
                        <header>
                            <h3>{project.name} {index}</h3>
                        </header>
                    </article>
                })*/}
                    <div className="4u 12u$(mobile)">
                        <article className="item">
                            <a href="FizzBuzz/" className="image fit"><img src={sample7} alt="" /></a>
                            <header>
                                <h3>FizzBuzz!</h3>
                            </header>
                        </article>
                        <article className="item">
                            <a href="MusicProject" className="image fit"><img src={sample7} alt="" /></a>
                            <header>
                                <h3>Patatap Clone</h3>
                            </header>
                        </article>
                        <article className="item">
                            <a href="/TicTacToe" className="image fit"><img src={sample7} alt="" /></a>
                            <header>
                                <h3>TicTacToe</h3>
                            </header>
                        </article>
                    </div>
                    <div className="4u 12u$(mobile)">
                        <article className="item">
                            <a href="/colorguess" className="image fit"><img src= {sample7} alt="" /></a>
                            <header>
                                <h3>Guess Color</h3>
                            </header>
                        </article>
                        <article className="item">
                            <a href="/Pokeball" className="image fit"><img src= {sample7} alt="" /></a>
                            <header>
                                <h3>Inspired by: <a href="http://codepen.io/jotavejv/pen/jJdnf">Pokeball  </a>
                                <a href="http://codepen.io/jotavejv/pen/jJdnf">One</a>
                                </h3>
                            </header>
                        </article>
                        <article className="item">
                            <a href="/CodeQuotes" className="image fit"><img src={sample7} alt="" /></a>
                            <header>
                                <h3>Development Quotes</h3>
                            </header>
                        </article>
                    </div>
                    <div className="4u$ 12u$(mobile)">
                        <article className="item">
                            <a href="https://salty-oasis-29940.herokuapp.com/" className="image fit"><img src={sample7} alt="" /></a>
                            <header>
                                <h3>EntrepreDev</h3>
                            </header>
                        </article>
                        <article className="item">
                            <a href="https://ashenbrownfox.github.io/GitHubJobs/" className="image fit"><img src={sample7} alt="" /></a>
                            <header>
                                <h3>Job Searching</h3>
                            </header>

                        </article>

                        <article className="item">
                            <a href="/VirtualReality" className="image fit"><img src={sample7} alt="project6" /></a>
                            <header>
                                <h3>3D Sphere, powered by AFrame</h3>
                            </header>

                        </article>
                    </div>
                    <div className="4u$ 12u$(mobile)">
                        <article className="item">
                            <a href="https://ashenbrownfox.github.io/bbchart/" className="image fit"><img src={sample7} alt="project6" /></a>
                            <header>
                                <h3>Breaking Bad</h3>
                            </header>

                        </article>

                    </div>
                    
                </div>

            </div>
        </section>
    );
  }
}
export default Portfolio;
