import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 700,
    marginLeft: 30,
    marginTop: 30,
  },
  media: {
    height: 600,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
  },
};

class MovieDetails extends React.Component {
  render(){
    const { classes } = this.props;
    const info = this.props.location.state;
    console.log(info)
    return (
      <Card className={classes.card}>
        <CardHeader title={info.show.name} />
        <CardMedia
          className={classes.media}
          image={info.show.image.medium}
        />
        <CardContent>
          <Typography component="p">
            Entrée: {info.score} 
          </Typography>
          <Typography component="p">
            Résumé:{info.show.summary} 
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default withStyles(styles)(MovieDetails);
