import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
              <ul className="social-links">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}>&nbsp;-&nbsp;{item.name}</i></a>
                              </li>
                            )
                      }
                    )
                  }
            </ul>
            </div>
          </div>

        </section>
        );
  }
}