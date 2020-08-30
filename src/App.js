import React from 'react';
import Bar from './components/Bar';
import List from './components/List1/List';
import List2 from './components/List2/List2';
import List3 from './components/List3/List3';
import Bar2 from './components/Bar2'
import "./App.css"

function App() {
  
  return (
    <div className="app">
      <Bar/>
      <Bar2/>
      <div className="card">
      <List/>
      <List2/>
      <List3/>
      </div>
      
      
    </div>
  )
}

export default App
