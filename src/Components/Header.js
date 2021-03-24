import React, { Component } from 'react';
// import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
      var firstname = this.props.data.firstname;
      var lastname = this.props.data.lastname;
      // var description= this.props.data.description;
      // var profilepic= "images/"+this.props.data.image;
    }

    return (
      <header id="home">
      {/* <ParticlesBg type="circle" bg={true} /> */}
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{firstname}</h1>
            <h2 className="responsive-headline">{lastname}</h2>
            {/* <h3>{description}.</h3> */}
            {/* <div>            
               <img className="profile-pic"  src={profilepic} alt="Animesh Anurag Profile Pic" />
            </div> */}
         </div>
         
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
