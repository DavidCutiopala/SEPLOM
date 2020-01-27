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
      maxWidth: 345,
      marginRight:"20px"
    },
    media: {
      height: 140,
    },

    grid:{
        margin:"30px",
        display:"flex"
    }
  });
const Nosotros = () => {

    const classes = useStyles();
    return (
        <div className="container">

            <Grid className={classes.grid}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="img/plomero.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                             MISIÓN
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Ofrecer un servicio inmediato de calidad a todos los inconvenientes  
                                de nuestros clientes, caracterizandonos por preveer la mejor solución
                                con equipos y máquinaria al servicio de nuestros clientes 

                       </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Compartir
                     </Button>
                     
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="img/fontaneroSonrisa.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              VISIÓN
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               Ser una empresa lider en servicios de plomería inmediata 
                               que pueda cumplir con la demanda y emergencias en el menor tiempo posible 
                               asi mismo contribuir con proyectos que aborden grandes extenciones 
                       </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                           Compartir
                     </Button>
                      
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="img/detector.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              TRABAJOS FUTUROS
                          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Establecer soluciones con detectores tecnológicos de fugas 

                       </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                       Establecer un CEDE de operaciones con todas las funcionalidades administrativas

                       </Typography>
                       
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Compartir
                     </Button>
                   
                      
                    </CardActions>
                </Card>
      
                

            </Grid>

           
          
        </div>
    )
}

export default Nosotros
