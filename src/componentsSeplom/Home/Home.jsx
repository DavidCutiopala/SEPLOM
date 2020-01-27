import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    fondo: {
        textAlign: "center",
        width: "auto",
        position: "relative",
        zIndex: "1000",

    },
    eslogan: {
        fontFamily: 'Kaushan Script',
        position: "absolute",
        textAlign: "center",
        zIndex: "1500",
        top: "30%",
        left: "50%",
        transform: "translateX(-50%) translateY(-25%)",
        fontSize: "70px",
        color: "black",
        fontStyle: "italic",
    },

    imgHome: {
        background: "rgb(0,0,0,0.40)",
        position: "relative",
        opacity: "0.7",
    },
    card: {
        maxWidth: 345,
        marginRight: "20px"
    },
    media: {

        height: "292px",
    },

    grid: {
        margin: "30px",
        display: "flex"
    },

    tituloTrabajos: {
        fontFamily: 'Kaushan Script',
        fontStyle: "italic",
        fontSize: "35px",
        color: "black",
    }

    ,

    containerTitulo: {
        textAlign: "center",
        background: "rgb(2, 2, 12)",
        background: "linear-gradient(90deg, rgb(2, 7, 24) 0%, rgb(21, 151, 211) 26%, rgba(0,212,255,1) 100%)",
        width: "100%",
        height: "80px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",

    }


});
const Home = () => {

    const classes = useStyles();
    return (
        <div>
            <div className={classes.fondo}>
                <Link to="/">
                    <a><img src={"img/fontaneroSonrisa.jpg"} className={classes.imgHome} alt="store " /></a>
                </Link>
                <div className={classes.eslogan}>Profesionalismo y Responsabilidad a tu servicio  </div>
            </div>
            <div className="container">
                <div className={classes.containerTitulo}>
                    <Typography className={classes.tituloTrabajos} gutterBottom variant="h5" component="h2">
                        Conoce más de nuestros trabajos profesionales
                              </Typography>

                </div>



                <Grid className={classes.grid}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="img/bomba.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Instalación de bombas  de agua
                              </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Equipo Hidroneumático PEDROLLO de 1/2HP 110/220V
                                     Tanque de 24Lts precargado
                                     Sistema completo para instalar
                                        Apto para casas de 2 plantas
                                     Caudal: 48 Lts/Min
                                    Presión: 40 PSI
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Compartir
                          </Button>
                            <Button size="small" color="primary">
                                Ver
                          </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="img/bomba2.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Control de bombas automatizadas
                                 </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    El sistema se encarga de mantener una presión, nivel o caudal predefinido en forma automática. Para esto se requiere un variador de frecuencia, un controlador de bombas, un arreglo de contactores, un transmisor de presión, un indicador de nivel o medidor de caudal.
                             </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Compartir
                               </Button>
                            <Button size="small" color="primary">
                                Ver
                             </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="img/tanqueHidroneumatico.jpeg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Tanques hidroneumáticos
                           </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    TANQUE HIDRONEUMATICO 80 GAL AMERICANO MARCA PEARL
    VERT METAL 1.25 H150XD54CM
    TENEMOS TAMBIEN EN OTRAS CAPACIDADES Y TAMBIEN EN FIBRA,
    
                                 </Typography>


                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Compartir
                          </Button>
                            <Button size="small" color="primary">
                                Ver
              </Button>

                        </CardActions>
                    </Card>



                </Grid>
                <Grid className={classes.grid}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="img/calefonInterno.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Celefón electrico estructura interna
                              </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Calefón eléctrico robusto para varios puntos en pequeños departamentos. En la Sierra se recomienda usar en un solo punto a la vez. Calienta el agua hasta a 50° C instantáneamente. Usar en distancias no mayores a 5 metros.
                                    Equipo electrónico con regulador manual de temperatura.
    
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Compartir
                          </Button>
                            <Button size="small" color="primary">
                                Ver
                          </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="img/calefonTerminado.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Calefefón (Intalación completa)
                                 </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Innovación,textura,profesionalismo
                                    Estos calentadores de agua sólo consumen electricidad mientras esté abierta la llave de agua caliente.
                             </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Compartir
                               </Button>
                            <Button size="small" color="primary">
                                Ver
                             </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="img/celefongas.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Calefón a gas
                           </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Menor gasto de mantenimiento, Evita la molestia e inconveniente de un cambio de membrana. Con Máximo ahorro de gas y 5 sistemas de seguridad.
    
                                 </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Compartir
                          </Button>
                            <Button size="small" color="primary">
                                Ver
              </Button>

                        </CardActions>
                    </Card>



                </Grid>
                <Grid className={classes.grid}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="img/inodoros.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Intalación de Lavabos,Inodoros
                              </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Instalación de inodoros,lavabavos,duchas
                                    y otros accesorios que haran de su baño un lugar mejor

                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Compartir
                          </Button>
                            <Button size="small" color="primary">
                                Ver
                          </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="img/fugasanada.jpeg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Reparación de filtraciones
                                 </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Para una reparación de instalaciónes nosotros  les ofrecemos materiales de calidad
                                    que aseguren el trabajo (materiales lasco )
                             </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Compartir
                               </Button>
                            <Button size="small" color="primary">
                                Ver
                             </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="img/fuga.jpeg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Cualquier trabajo
                           </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    No importa lo simple que sea el trabajo siempre te ofrecemos la mejor solución
 
 
                                 </Typography>


                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Compartir
                          </Button>
                            <Button size="small" color="primary">
                                Ver
              </Button>

                        </CardActions>
                    </Card>



                </Grid>



            </div>
        </div>
    )
}

export default Home
