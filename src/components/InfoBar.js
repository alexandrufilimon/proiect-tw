import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IoLogoFacebook} from 'react-icons/io';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: '250px'
  },
  media: {
    height: 140,
  },
  button:{
    
   
    alignItems: "center",
    
    
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} position="static">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://shoppingcitytm.ro/wp-content/uploads/2017/01/13.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Little Hanoi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Transformă-ți foamea interioară în pace interioară. Cu niște taieței și spaghete. Sau vreo rețetă chinezească pe care n-ai mai încercat-o.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button} size="small" color="primary" href="https://www.facebook.com/LittleHanoiBistro/" target ="_blank">
          < IoLogoFacebook fontSize="large"/>Facebook Page
        </Button>
        <Button size="small" color="primary">
          
        </Button>
      </CardActions>
    </Card>
  );
}
