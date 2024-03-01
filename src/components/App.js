import '../styles/App.css';
import projects from '../resources/projects_list.json'
import React from 'react';
import IdCard from './IdCard';

export default class App extends React.Component
{
   render()
   {
      return (
         <div className='App'>
            <header>
                <h1>Portfolio of Juan-Claudio</h1>
            </header>
            <main className="App-main">
               {projects.map((project, idx)=>{
                  return (
                     <IdCard key={idx} projectInfo={project} />
                  )
               })}
            </main>
         </div>
      );
   }
}