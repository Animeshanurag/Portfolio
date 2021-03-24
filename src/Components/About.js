import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      
    }

    return (
      <section id="about">
      
         <div className="twelve columns main-col">
            
            <h2>LET'S GET ACQUAINTED</h2>
            <p className="comprules">{bio}</p>
         </div>
      
      <div className="three columns">
         <img className="profile-pic"  src={profilepic} alt="Animesh Anurag Profile Pic" />
      </div>

   </section>
    );
  }
}

export default About;
