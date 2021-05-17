import React from 'react'
import { Container, Typography, Button, makeStyles, ThemeProvider, useTheme } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import detect from '../img/detect.svg'



const useStyles = makeStyles((theme) => ({

    aboutbg: {

        height: "100vh",
        width: "100vw",
        background: "url( https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80 )",
        backgroundSize: "cover",
        paddingTop: "10%",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",

        [theme.breakpoints.down('sm')]: {
            height: "130vh",
        },

        [theme.breakpoints.up('sm')]: {
            height: "130vh",
        },

        [theme.breakpoints.up('md')]: {
            height: "150vh",
        },

    },

    aboutheader: {
        marginTop: "10%",
        fontSize: "400%",
        color: "white",
        marginTop: "-5%",

        [theme.breakpoints.down('sm')]: {
            fontSize: "300%",
        },

        [theme.breakpoints.up('sm')]: {
            fontSize: "400%",
        },

        [theme.breakpoints.up('md')]: {
            fontSize: "400%",
        },

    },

    aboutsvg: {
        width: "50vw",
        height: "50vh",
    },

    aboutsvgimg: {
        height: "80%",
        width: "80%",
        marginTop: "10%",

        [theme.breakpoints.down('sm')]: {
            height: "70vh",
            width: "70vw",
            marginTop: "-5%",
        },

        [theme.breakpoints.up('sm')]: {
            height: "50vh",
            width: "50vw",
            marginTop: "5%"
        },

        [theme.breakpoints.up('md')]: {
            height: "50vh",
            width: "50vw",
            marginTop: "5%",
        },

    },

    abouttypings: {
        height: "50vh",
        width: "50vw",
    },

    aboutpara: {
        color: "whitesmoke",
        fontSize: "200%",
        marginTop: "15%",
        fontFamily: 'Pangolin, cursive',
    },


}));

function Detect(props) {

    const classes = useStyles(props)

    let deviceName;
    let deviceSvg;
    let ScreenWidth = window.innerWidth;

    ScreenWidth > 800 ?  deviceName = "Windows/Tablet" : deviceName = "Android phone";

    return (
        <>

            <Container

                maxWidth="xl" align="center" className={classes.aboutbg}>

                <Typography data-aos="zoom-in-down" data-aos-duration="1000" gutterBottom className={classes.aboutheader} variant="h3" align="center">
                    <b> Device Detected </b>
                </Typography>

                <Grid container spacing={2}>

                    <Grid className={classes.aboutsvg} item xs={12} sm={12} md={12} lg={12} xl={6} >
                        <img data-aos="zoom-in-right" data-aos-duration="1000" align="center" src={detect} className={classes.aboutsvgimg}></img>
                    </Grid>

                    <Grid className={classes.abouttypings} item xs={12} sm={12} md={12} lg={12} xl={6} >
                        <Typography data-aos="zoom-in-left" data-aos-duration="1000" gutterBottom align="center" variant="h5" className={classes.aboutpara} >

                            <b>
                               Your device {deviceName} detected  <br></br> 
                               Dynamic way of device detection <br></br>
                           </b>

                        </Typography>

                        <Button data-aos="zoom-in-up" data-aos-duration="1000" variant="outlined" style={{ color: "yellow", border: "2px solid yellow" }}>
                            Read More
                        </Button>

                    </Grid>

                </Grid>


            </Container>

        </>
    )

}

export default Detect;


