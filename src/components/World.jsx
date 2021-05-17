import React from 'react'
import { Container, Typography, Button, makeStyles, ThemeProvider, useTheme } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import worldbg from '../img/worldbg.svg'

const useStyles = makeStyles((theme) => ({

    aboutbg: {

        height: "100vh",
        width: "100vw",
        background: "url( https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80 )",
        backgroundSize: "cover",
        paddingTop: "10%",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",

        [theme.breakpoints.down('sm')]: {
            height: "220vh",
        },

        [theme.breakpoints.up('sm')]: {
            height: "200vh",
        },

        [theme.breakpoints.up('md')]: {
            height: "150vh",
        },

    },

    aboutheader: {
        marginTop: "10%",
        fontSize: "400%",
        color: "white",
        marginTop: "10%",
        paddingBottom : "5%",

        [theme.breakpoints.down('sm')]: {
            fontSize: "300%",
            paddingBottom : "0%",
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
        marginTop : "-5%",
    },

    aboutpara: {
        color: "whitesmoke",
        fontSize: "200%",
        marginTop: "15%",
        fontFamily: 'Pangolin, cursive',
    },


}));

function World(props) {

    const classes = useStyles(props)

    return (
        <>

            <Container

                maxWidth="xl" align="center" className={classes.aboutbg}>

                <Typography data-aos="zoom-in-down" data-aos-duration="1000" gutterBottom className={classes.aboutheader} variant="h3" align="center">
                    <b> World before  PANDAMIC  </b>
                </Typography>

                <Grid container spacing={2}>

                    <Grid className={classes.aboutsvg} item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <img data-aos="zoom-in-right" data-aos-duration="1000" align="center" src={worldbg} className={classes.aboutsvgimg}></img>
                    </Grid>

                    <Grid className={classes.abouttypings} item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <Typography data-aos="zoom-in-left" data-aos-duration="1000" gutterBottom align="center" variant="h5" className={classes.aboutpara} >

                            <b>
                                The COVID-19 pandemic has <br></br>
                                suddenly and deeply changed <br></br>
                                our lives in a way comparable <br></br>
                                with the most traumatic events <br></br>
                                in history, such as a World war. <br></br>
                                With millions of people infected <br></br>
                                around the World and already <br></br>
                                thousands of deaths 
                            </b>

                        </Typography>

                        <Button data-aos="zoom-in-up" data-aos-duration="1000" variant="outlined" style={{ 
                            color: "yellow", 
                            border: "2px solid yellow",
                             }}>
                            Read More
                        </Button>

                    </Grid>

                </Grid>


            </Container>

        </>
    )

}

export default World;