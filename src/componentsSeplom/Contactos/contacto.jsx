import React from 'react'
import { Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { display } from '@material-ui/system';



const useStyles = makeStyles({
    card: {
      width: "50%",
      marginRight:"20px"
    },
    media: {
      height: "314px",
      width: "50%",
      display:"flex",
      textAlign:"center",
      justifyContent:"center",
    },

    grid:{
        margin:"30px",
        display:"flex",
        justifyContent:"center",
        width: "100%",
    },

    telefonos:{
        fontSize:"25px",
    }
  });

const contacto = () => {
    const classes = useStyles();
    return (
        <div className="container">
                        <Grid className={classes.grid}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="img/telefono.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                             Teléfonos
                          </Typography >
                            <Typography className={classes.telefonos} variant="body2" color="textSecondary" component="p">
                              09992881649 / 4511647 /984782051 correo: Progectseplom@gmail.com
                              

                       </Typography>
                       <Typography gutterBottom variant="h5" component="h2">
                             Horarios de atención
                          </Typography >
                            <Typography className={classes.telefonos} variant="body2" color="textSecondary" component="p">
                              08:00 am - 21:00 pm
                              

                       </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                  
                     
                    </CardActions>
                </Card>
            
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="img/redesociales.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Redes sociales
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               

                       </Typography>

                       <Typography gutterBottom variant="h5" component="h2">
                             Facebook
                          </Typography >
                            <Typography className={classes.telefonos} variant="body2" color="textSecondary" component="p">
                              Plomería Inmediata
                              
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2">
                             Instagram
                          </Typography >
                            <Typography className={classes.telefonos} variant="body2" color="textSecondary" component="p">
                              Plomería1
                              
                              </Typography>
                       
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    
                   
                      
                    </CardActions>
                </Card>
      
                

            </Grid>

            
        </div>
    )
}

export default contacto
