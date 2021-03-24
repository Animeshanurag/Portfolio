import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         

            <aside className="four columns footer-widgets">
            </aside>
   </section>
    );
  }
}

export default Contact;
