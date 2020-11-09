import React, { useState, useEffect } from 'react';

import api from './services/api';

import Header from './components/Header';

import './App.css';
import image from './assets/background.jpg';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
      console.log(response);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: 'Project 1',
      owner: 'Hiago Souza',
    });

    const project = response.data;

    setProjects([...projects, project]);

    console.log(projects);
  }
  return (
    <div className='App'>
      <Header title='Home Page' />
      <button type='button' onClick={handleAddProject}>
        Add project
      </button>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
