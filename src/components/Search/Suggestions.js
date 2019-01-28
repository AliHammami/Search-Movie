import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    marginLeft: 20,
    marginBottom: 20,
  },
  media: {
    objectFit: 'cover',
  },
};

const Suggestions = (props) => {
  const { classes } = props;
  const options = props.results.map( m => (
    <Card className={classes.card} key={m.show.id}>
      <CardActionArea>
        <Link
          to={{
            pathname: '/movie/' + m.show.id,
            state: m,
          }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {m.show.name}
          </Typography>
          {console.log(m)}
          {m.show.image === null ? (
            <CardMedia
              component="img"
              className={classes.media}
              height="300"
              src="/src/elements/Photo-Unavailable.jpeg"
              alt={m.show.name}
            />
          ) : (
            <CardMedia
              component="img"
              className={classes.media}
              height="500"
              src={m.show.image.original}
              alt={m.show.name}
            />
          )}
        </Link>
      </CardActionArea>
    </Card>
  ));
  return <ul>{options}</ul>;
};

export default withStyles(styles)(Suggestions);
