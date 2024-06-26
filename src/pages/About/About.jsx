import { useEffect, useState } from "react"
import Service from "./Service";
import Testimonial from "./Testimonial";




const servicesData =[
  {
    "title": "Web development",
    "icon": "/images/icon-dev.svg",
    "description": "High-quality development of sites at the professional level."
  },
]


const About = () => {
  const[testimonials,setTestimonials]=useState([]);
  useEffect(() =>{
    fetch('testimonials.json').then(res =>res.json()).then(data => {
      //console.log(data)
      setTestimonials(data)

    });
  },[])
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>I am a passionate and dedicated web developer with a keen eye for detail and a deep love for coding.
           My journey in web development has equipped me with a strong proficiency in modern web technologies, 
           including HTML, CSS, JavaScript, and various frameworks . I thrive on creating
            responsive, user-friendly, and aesthetically pleasing websites and applications that deliver an exceptional 
            user experience. With a problem-solving mindset and a commitment to continuous learning, I enjoy tackling 
            complex challenges and staying updated with the latest industry trends. 
        </p>

        <p>My goal is to leverage my skills 
        to build innovative web solutions that make a meaningful impact.
        </p>
      
      </section>

      {/*services */}
      <section className='service'>
        <h2 className='h3 service-title'>What I'm Doing</h2>
        <ul>
          {
            servicesData.map((service,index) =>(
              <Service key={index}title={service.title} icon={service.icon} description={service.description}/>
            ))
          }
        </ul>
      </section>
            {/*Testimonials */}
      <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul className="testimonials-list" has-scrollbar>
          {
            testimonials.map((testimonial,index) =>(
              <Testimonial  key={index} name={testimonial.name} avatar={testimonial.avatar} testimonial={testimonial.testimonial}/>
            ))
          }
          </ul>
      </section>


    </div>
  )
}

export default About
