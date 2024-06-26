import React from 'react'
import { GiCalendar, GiClawSlashes, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { GiMailbox } from "react-icons/gi";


const Aside = () => {
  return (
        <aside className='sidebar'>
            <div className='sidebar-info'>
                <figure className='avatar-box'>
                    <img src="/images/personne.jpg" alt="" width="80"/>
                </figure>
                <div className='info-content'>
                    <h1 className='name'>Zorgani Mariem</h1>
                    <p className='title'>Web Developer</p>
                </div>
                <button className='info_more-btn' data-sidebar-btn>
                        <span>Show Contacts</span>
                        <GiClawSlashes />

                </button>
            </div>
            {/*contact info */}
            <div className='sidebar-info_more'>
                <hr className='separator2'/>
                <ul className='contacts-list'>
                    <li className='contact-item'>
                        <di className='icon-box'>
                        <GiMailbox />
                        </di>

                        <div className='contact-info'>
                            <p className='contact-title'>Email</p>
                            <a href='mailto:mariem.zorgani@esprit.tn' className='contact-link'>mariem.zorgani@esprit.tn</a>
                        </div>
                    </li>
                    
                    <li className="contact-item">
                        <div className="icon-box">
                            <GiPhone/>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Phone</p>

                            <a href="tel:+21626760560" className="contact-link">
                                +21626760560
                            </a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <GiCalendar/>
               
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>

                            <time dateTime="2002-01-02">January 02, 2002</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <GiMayanPyramid/>
                            <ion-icon name="location-outline"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Location</p>

                            <address>Manouba,Tunisie</address>
                        </div>
                    </li>
                </ul>
                <hr className='separator2'/>
                <ul className="social-list">

                    <li className="social-item">
                        <div className="icon-box">
                            <a href="https://www.facebook.com/merirm.meriouma?mibextid=rS40aB7S9Ucbxw6v" className="social-link">
                                <img src="/images/facebook.png" alt="Facebook" className="social-icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </a>
                        </div>
                    </li>
                    <li className="social-item">
                        <div className="icon-box">
                            <a href="https://www.instagram.com/meriem.zorgani/" className="social-link">
                            <img src="/images/instagram.png" alt="instagram" className="social-icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </a>
                        </div>
                    </li>
                    <li className="social-item">
                        <div className="icon-box">
                            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="social-link">
                            <img src="/images/linkedin2.png" alt="linkedin" className="social-icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </a>
                        </div>
                    </li>
                </ul> 
            </div>
        </aside>
  )
}

export default Aside

