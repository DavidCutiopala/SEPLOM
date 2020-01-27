import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import galery from './galery.css'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
const images = [
  {
    original: 'img/SliderTubos.jpg',
    thumbnail: 'img/SliderTubos.jpg',
    description: "Herramientas de destape profesionales RIDGID",
  },


  {
    original: 'img/panles.jpg',
    thumbnail: 'img/panles.jpg',
    description: "Panales solares  con tuberías de cobre",
  },

  {
    original: 'img/trabajo3.jpg',
    thumbnail: 'img/trabajo3.jpg',
    description: "Instalación de tuberías de cobre ",
  },
  {
    original: 'img/trabajo2.jpg',
    thumbnail: 'img/trabajo2.jpg',
    description: "PVC profesionalismo en restructuración",
  },
  {
    original: 'img/bomba.png',
    thumbnail: 'img/bomba.png',
    description: "Instalación de bomba hidroneumática y tanque de reserva",
  },

];

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


const Galery = () => {
  const classes = useStyles();
  return (
    <div className="container container-galery">
      <ImageGallery items={images}
      />;


                <div className={classes.containerTitulo}>
                         <Typography className={classes.tituloTrabajos} gutterBottom variant="h5" component="h2">
                          Mira nuestro video con todos los servicios
                        </Typography>

      </div>

      <video class="html-video" src="./img/seplomvideo.mp4" width="100%" height="720" controls></video>

    </div>
  )
}

export default Galery
