import React from 'react';
import { withRouter } from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import { fullWhite, red700, green600, yellow600, brown700 }
  from 'material-ui/styles/colors';


const Results = React.createClass({
  render() {
    const { restaurants, position } = this.props;
    const restaurantsView = restaurants.slice(position.start, position.end);

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

        {restaurantsView.map((restaurant, index) => {
          const categories = restaurant.categoryList.reduce((a, b) => b += `, ${a}`);
          let bgColor;

          switch (index) {
            case 0:
              bgColor = red700;
              break;
            case 1:
              bgColor = green600;
              break;
            case 2:
              bgColor = yellow600;
              break;
            case 3:
              bgColor = brown700;
              break;
            default:
          }        

          return <TableRow style={{backgroundColor: bgColor, color: fullWhite}}>
            <TableRowColumn style={{ width: 50 }}>{restaurant.rating}</TableRowColumn>
            <TableRowColumn>{restaurant.name}</TableRowColumn>
            <TableRowColumn style={{ width: 60}}>{categories}</TableRowColumn>
          </TableRow>
        })}

        </TableBody>
      </Table>
    </div>;
  }
});

export default withRouter(Results);
