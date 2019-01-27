import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import Suggestions from './Suggestions';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,

  },
  input: {
    display: 'none',
  },
});

class Search extends React.Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`https://api.tvmaze.com/search/shows?q=test/${this.state.query}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({
          results: response.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    this.getInfo();
  }

  render() {
  
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <input type="text" placeholder="Rechercher un film" /> */}
          <Input
            id="movie-name"
            placeholder="Tapez le nom d'un film"
            className={classes.textField}
            value={this.state.query}
            onChange={this.handleChange}
            // margin="normal"
          />
          <button variant="contained" style={{ backgroundColor: 'Brown', color: 'White' }} className={classes.button} type="sumbit">
            Chercher
          </button>
        </form>
        <Suggestions results={this.state.results} />
      </div>
    );
  }
}

export default withStyles(styles)(Search);
