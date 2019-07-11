import React from 'react';
import './App.css';
import Table from './Table'

const team = [
    {teamName:"A", gd:"-3", pts:3},
    {teamName:"B", gd:"10", pts:9},
    {teamName:"C", gd:"15", pts:12},
    {teamName:"D", gd:"1", pts:3}]

function App() {
  return (
    <div className="App">
      <Table team={team} />
    </div>
  );
}

export default App;
