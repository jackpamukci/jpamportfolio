import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import down from '../images/download.svg'

import data from '../data.js'
import ResumeContent from '../components/ResumeContent';
import ResumeHeader from '../components/ResumeHeader';


const Resume = () => {
  data.sections.map(project => (
    console.log(project)
  ))

  return (
    <div className="App">
      
        <Header name={'JaCk'}/>
        
        <div className="App-header">
            <div class="md:w-9/12 lg:w-9/12 mb-20 mt-10">

              <div class='mt-10 border-b-4 border-black'/>

                <button class="bg-transparent font-bold py-2 px-4 inline-flex items-center">
                  <a href="https://drive.google.com/file/d/13qHdSia0Ae9TtBFBNQ3e8RTHtZb02BXd/view?usp=sharing" target="_blank" class="down">
                    <img class="s" loading='lazy' src={down}/>
                    <h1 class="text-4xl mt-10 uppercase font-extrabold mx-auto text-center">Resume</h1>
                  </a>
                </button>


              {data.sections.map(project => (
                <div>
                  <ResumeContent data={project}/>
                  </div>
                ))}
                
                
            </div>  
        </div>
        <Footer/>      
    </div>
  );
}

export default Resume;
