import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import Suggestions from './Suggestions';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    background: 'rgb(165, 42, 42)',
    color: 'white',
    fontSize: 25,
    border: 0,
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: 10,
    marginBottom: 40,
  },
});

class Search extends React.Component {
  state = {
    query: '',
    results: [],
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
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getInfo();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            id="movie-name"
            placeholder="Tapez le nom d'un film"
            className={classes.textField}
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button variant="contained" className={classes.button} type="button">
            Chercher
          </button>
        </form>
        <Suggestions results={this.state.results} />
      </div>
    );
  }
}

export default withStyles(styles)(Search);
