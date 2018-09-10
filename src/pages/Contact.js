import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';



import './contact.css';
import 'font-awesome/css/font-awesome.min.css';



class Contact extends Component {


  render() {
    return (
      <div className="contactContent">
       <div className="mt-5">
              <p>
                Thank you visitor for exploring my site.  I'f you liked what you saw, you can reach me through the links and resume listed below.
            I'm looking forward to meeting you in person some day to build something amazing! Until that time, take care of yourself.
  
              </p>
        </div> 

        <div className="portrait"></div>
          <div className="contactBox">
       
                  <p >
            <i className="fa fa-envelope icon-mail mright"  ></i> Email: <span><a href="http://www.google.com" style={{ textDecoration: 'none' }}>roudyantenor@gmail.com</a></span>
                  </p>
                  <p>
            <i className="fa fa-linkedin icon-linked mright"></i> Professional LinkedIn profile: <span><a href="https://www.linkedin.com/in/roudyantenor" style={{ textDecoration: 'none' }}>Roudy Antenor</a></span>
                  </p>
                  <p>
            <i className="fa fa-twitter icon-twitter mright"></i> Twitter handle: <span><a href="https://twitter.com/thekidroudy?lang=en" style={{ textDecoration: 'none' }}>@thekidroudy</a></span>
                  </p>
                  <p>
            <i className="fa fa-github icon-github mright"></i> GitHub profile: <span><a href="https://github.com/antenorr" style={{ textDecoration: 'none' }}>antenorr</a></span>
                  </p>
     
                 
          </div>
          <div className="clearFloat"></div>

          <div className="thank-you-section">
            <h1>Resume</h1>
          </div>

            <div>
              <ResponsiveEmbed src="./../../resume_9_5.pdf" allowfullscreen />
            </div>
            <div className="thank-you-section ">
              <h1>Thank you</h1>
            </div>
              
 


      </div>
    );
  }
}


export default Contact;

