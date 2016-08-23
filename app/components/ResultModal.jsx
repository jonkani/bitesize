import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { red700, green700, yellow600, brown700 }
  from 'material-ui/styles/colors';


const ResultModal = React.createClass({
  getInitialState() {
    return {
      open: false,
    }
  },

  handleOpen() {
    this.setState({open: true});
  },

  handleClose() {
    this.setState({open: false});
  },


  render() {
    const styleDialog = {
      width: '100%',
      maxWidth: 'none',
    };

    const actions =
      <div>
        <p style={{display: 'inline-block', marginRight: '125px'}}>rating / # of ratings</p>
        <FlatButton
          label="Cancel"
          onTouchTap={this.handleClose}
          style={{backgroundColor: red700}}
        />
      </div>;

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          actions={actions}
          contentStyle={styleDialog}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <div>
          <Paper circle={true} style={{height: '100px', width: '100px', display: 'inline-block'}} />
          <div style={{display: 'inline-block', marginLeft: '15px'}}>
            <h3 className="resultForm">Name of Restaurant</h3>
            <h5 className="resultForm">street</h5>
            <h5 className="resultForm">city, state, zip</h5>
            <h6 className="resultForm">phone #</h6>
          </div>
        </div>
          <p>This is where the restaurant snippet will go.</p>
        </Dialog>
      </div>
    );
  }
});

export default ResultModal;
