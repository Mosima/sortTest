import React from 'react';
import { Table, Button } from 'reactstrap';

const tableHeaders = ['#', 'Team','GD', 'Pts']

export default class Example extends React.Component {
    constructor(props){
        super(props)

        this.sortTeams = this.sortTeams.bind(this);
    }
    sortTeams(){
        const { team } = this.props;
        team.sort((teamA, teamB)=> (teamA.pts > teamB.pts ? -1: 1))
    }

  render() {
    const { team } = this.props;
    team.sort((teamA, teamB)=> (teamA.pts > teamB.pts ? -1: 1))


    for(let x = 0; x < team.length; x++){
        
        console.log(team[x].gd)
    }
    return (
      <Table responsive style={{backgroundColor: "white", marginTop: "60px"}}>
        <thead>
          <tr>
            {tableHeaders.map((head, index)=><th key={index}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            //"teamName":teamName,"played": pl,"gd": goalDiff,"win": win,"lose": lose, "pts": pts
            team.map((team, index)=>
            (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{team.teamName}</td>
                <td>{team.gd}</td>
                <td>{team.pts}</td>
              </tr>
             ))
          }
        </tbody>
        <Button onClick={this.sortTeams} >Sort</Button>
      </Table>
    );
  }
}