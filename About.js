import React from 'react';
import { useContext } from 'react';
import noteContext from '../context/noteContext';

const About = () => {
    const a= useContext(noteContext)
  return (
    <div>
      This application is made by {a.name}
    </div>
  )
}

export default About
