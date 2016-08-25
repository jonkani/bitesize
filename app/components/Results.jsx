import React from 'react';
import { withRouter } from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import { fullWhite, red700, green600, yellow600, brown700 }
  from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import AvReplay from 'material-ui/svg-icons/av/replay';

const Results = React.createClass({
  handleTouchTap() {
    this.props.nextRestaurants();
  },

  handleRowTouch(restaurant) {
    this.props.setModal(restaurant);
  },

  render() {
    const { restaurants, position } = this.props;
    const restaurantsView = restaurants.slice(position.start, position.end);
    if (!restaurantsView.length) {
      restaurantsView.push(
        {
          name: 'Nothing Found.',
          rating: ':(',
          categoryList: ['Sorry!']
        }
      )
    }

    return <div>
      <img className="results" src="./images/results.jpg"></img>

      <IconButton
        tooltip="More restaurants!"
        onTouchTap={this.handleTouchTap}
      >
        <AvReplay />
      </IconButton>

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
          const categories = restaurant.categoryList.join(', ');
          let bgColor;
          let burger;

          switch (index) {
            case 0:
              bgColor = red700;
              burger = './images/cheeseburger2.png';
              break;
            case 1:
              bgColor = green600;
              burger = './images/cheeseburger3.png';
              break;
            case 2:
              bgColor = yellow600;
              burger = './images/cheeseburger4.png';
              break;
            case 3:
              bgColor = brown700;
              burger = './images/cheeseburger5.png';
              break;
            default:
          }

          return <TableRow
              style={{backgroundColor: bgColor, color: fullWhite}}
              key={index}
              onTouchTap={() => this.handleRowTouch(restaurant)}
            >
            <TableRowColumn style={{ width: 100 }}><img className="burgerList" src={burger}></img></TableRowColumn>
            <TableRowColumn>{restaurant.name}, {categories}</TableRowColumn>
          </TableRow>
        })}

        </TableBody>
      </Table>
    </div>;
  }
});

export default withRouter(Results);
