import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Dissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import { red700, green700, yellow600, brown700 }
  from 'material-ui/styles/colors';


const ResultModal = React.createClass({
  handleClose() {
    this.props.closeModal();
  },

  render() {
    const restaurant = this.props.modalData.restaurant
    const styleDialog = {
      width: '100%',
      maxWidth: 'none',
    };

    const styleBody = {
      padding: '20px',
    };

    const actions =
      <div>
        <FlatButton
          label="Close"
          onTouchTap={this.handleClose}
          style={{backgroundColor: red700, display: 'inline-block', marginBottom: '5px'}}
        />
        <div style={{display: 'inline-block', }}>
          <a href={restaurant.url}><img style={{width: '75px'}} src="./images/yelp.jpg"></img></a>
          <p
            style={{
              marginLeft: '80px',
              marginTop: '0px',
              marginBottom: '0px'
            }}>Rating: {restaurant.rating} / Reviews: {restaurant.reviewCount}
          </p>

        </div>
      </div>;

    return (
      <div>
        <Dialog
          actions={actions}
          contentStyle={styleDialog}
          bodyStyle={styleBody}
          modal={false}
          open={this.props.modalData.open}
          onRequestClose={this.handleClose}
        >
        <div>
          <Paper
            style={{
              display: 'inline-block',
              width: '130px',
              height: '130px'
            }}>
              <img
                style={{width: '130px', height: '130px'}} src={restaurant.imageUrl}
              />
          </Paper>

          <div style={{display: 'inline-block', marginLeft: '15px'}}>
            <div className="resultLink">
              <a href={restaurant.url}>{restaurant.name}</a>
            </div>
            {restaurant.location ? restaurant.location.map((element, index) => {
              return <h5 className="resultForm" key={index + 'i'}>
                {restaurant.location[index]}
              </h5>
            }) : <h5></h5>}
            <h6 className="resultPhone">{restaurant.displayPhone}</h6>
          </div>
        </div>
          <p>{restaurant.snippetText}</p>
        </Dialog>
      </div>
    );
  }
});

export default ResultModal;
