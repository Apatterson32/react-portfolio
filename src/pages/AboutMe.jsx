import React from 'react';

const AboutMe = () => {
  return (
    <div className="center-content">
      <section>
        <p>
          Hello! I'm Alissa Patterson, a passionate web developer with a strong
          background in creating modern, responsive, and user-friendly web
          applications.
        </p>
        <p>
          In 2023, I delved into programming with a clear goal: to contribute to the progress of humankind. My dedicated drive pushes me to create solutions that make a
           meaningful impact. I appreciate the programming community's need to explore new technologies so that we collectively aim to create efficient and scalable solutions.
        </p>
      </section>
      <section>
        <div className='skills-list'>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>GraphQL</li>
            <li>RESTful APIs</li>
          </ul>
         </div> 
      </section>
    </div>
  );
};

export default AboutMe;
