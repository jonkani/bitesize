import React from 'react';
import { withRouter } from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import { fullWhite, red700, green600, yellow600, brown700 }
  from 'material-ui/styles/colors';


const Results = React.createClass({
  render() {

    return <div>
      <img className="results" src="./images/results.jpg"></img>
      <Table
        fixedHeader={true}
        fixedFooter={true}
        selectable={true}
      >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={{ width: 50 }}>RATING</TableHeaderColumn>
            <TableHeaderColumn>RESTAURANT</TableHeaderColumn>
            <TableHeaderColumn style={{ width: 60}}>CATEGORY</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow style={{backgroundColor: red700, color: fullWhite}}>
            <TableRowColumn style={{ width: 50 }}>4.9</TableRowColumn>
            <TableRowColumn>Daniels Broiler</TableRowColumn>
            <TableRowColumn style={{ width: 60}}>Steak</TableRowColumn>
          </TableRow>
          <TableRow style={{backgroundColor: green600, color: fullWhite}}>
            <TableRowColumn style={{ width: 50 }}>4.5</TableRowColumn>
            <TableRowColumn>La Corona</TableRowColumn>
            <TableRowColumn style={{ width: 60}}>Mexican</TableRowColumn>
          </TableRow>
          <TableRow style={{backgroundColor: yellow600, color: fullWhite}}>
            <TableRowColumn style={{ width: 50 }}>4.0</TableRowColumn>
            <TableRowColumn>Umi Sushe</TableRowColumn>
            <TableRowColumn style={{ width: 60}}>Sushi</TableRowColumn>
          </TableRow>
          <TableRow style={{backgroundColor: brown700, color: fullWhite}}>
            <TableRowColumn style={{ width: 50 }}>3.9</TableRowColumn>
            <TableRowColumn>Jimmy Jones</TableRowColumn>
            <TableRowColumn style={{ width: 60}}>Sandwich</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>;
  }
});

export default withRouter(Results);
