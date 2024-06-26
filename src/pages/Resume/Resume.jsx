import React from 'react'
import { FaBookReader } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import { FaRegBookmark } from "react-icons/fa";
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
       <header>
        <h2 className='h2 article-title'>Resume</h2>
        </header> 
        <div className='timeline'>
          <div className='title-wrapper'>
            <div className='icon-box'>
            <FaBookReader />
            </div>
            <h3 className='h3'>Education</h3>
          </div>
            <ol className='timeline-list'>
              <TimelineItem
              title="Institut Préparatoire aux Etudes d'Ingénieur de Bizerte"
              date="2020-2022"
              description="prepa bizerte .......etc.."
              />
              <TimelineItem
              title="École supérieure privée d'ingénierie et de technologie"
              date="2022-in progress"
              description="Esprit............etc.."
              />
            </ol>
        </div>  
        <div className='timeline'>
          <div className='title-wrapper'>
            <div className='icon-box'>
            <FaRegBookmark  />
            </div>
            <h3 className='h3'>Experience</h3>
          </div>
            <ol className='timeline-list'>
              <TimelineItem
              title="aaaaa"
              date="2ddc"
              description="cjzeh"
              />
              <TimelineItem
              title="zecfc"
              date="zcedc"
              description="eczec"
              />
            </ol>
        </div>
        <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={60} />
          <SkillItem title="WordPress" value={45} />
        </ul>
      </div>   

    </section>  
)
}

export default Resume