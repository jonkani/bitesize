import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
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

    const actions =
      <div>
        <p style={{display: 'inline-block', marginRight: '125px'}}>Rating: {restaurant.rating} | {restaurant.reviewCount} reviews</p>
        <FlatButton
          label="Close"
          onTouchTap={this.handleClose}
          style={{backgroundColor: red700}}
        />
      </div>;

    return (
      <div>
        <Dialog
          actions={actions}
          contentStyle={styleDialog}
          modal={false}
          open={this.props.modalData.open}
          onRequestClose={this.handleClose}
        >
        <div>
          <Paper circle={true} style={{height: '100px', width: '100px', display: 'inline-block'}}>
            <img src={restaurant.imageUrl} />
          </Paper>
          <div style={{display: 'inline-block', marginLeft: '15px'}}>
            <h3 className="resultForm">
              <a href={restaurant.url}>
                {restaurant.name}
              </a>
            </h3>
            <h5 className="resultForm">{restaurant.location ? restaurant.location[0]: ''}</h5>
            <h5 className="resultForm">{restaurant.location ? restaurant.location[1]: ''}</h5>
            <h5 className="resultForm">{restaurant.location ? restaurant.location[2]: ''}</h5>
            <h5 className="resultForm">{restaurant.location ? restaurant.location[3]: ''}</h5>
            <h6 className="resultForm">{restaurant.displayPhone}</h6>
          </div>
        </div>
          <p>{restaurant.snippetText}</p>
        </Dialog>
      </div>
    );
  }
});

export default ResultModal;
