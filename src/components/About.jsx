import React from 'react'
import { Container, Typography, Button, makeStyles, ThemeProvider, useTheme } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Aboutbg from '../img/aboutbg.svg'

const useStyles = makeStyles((theme) => ({

    aboutbg: {

        height: "100vh",
        width: "100vw",
        background: "url( https://images.unsplash.com/photo-1565555254000-4d9bac064b93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80 )",
        backgroundSize: "cover",
        paddingTop: "10%",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",

        [theme.breakpoints.down('sm')]: {
            height: "150vh",
        },

        [theme.breakpoints.up('sm')]: {
            height: "140vh",
        },

        [theme.breakpoints.up('md')]: {
            height: "100vh",
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

function About(props) {

    const classes = useStyles(props)

    return (
        <>

            <Container maxWidth="xl" align="center" className={classes.aboutbg}>

                <Typography gutterBottom className={classes.aboutheader} variant="h3" align="center">
                    <b> About ME </b>
                </Typography>

                <Grid container spacing={2}>

                    <Grid className={classes.aboutsvg} item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <img align="center" src={Aboutbg} className={classes.aboutsvgimg}></img>
                    </Grid>

                    <Grid className={classes.abouttypings} item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <Typography gutterBottom align="center" variant="h5" className={classes.aboutpara} >

                            <b>
                                I am Sridhant 🙂 from class <br></br>
                         9th Studying from Vidyanjali <br></br>
                         School,Kakinada , Andhra Pradesh <br></br>
                         . And this website was <br></br>
                         made in the year 2021
                         </b>

                        </Typography>

                        <Button variant="outlined" style={{color : "yellow" , border : "2px solid yellow"}}>
                                Read More
                        </Button>

                    </Grid>

                </Grid>


            </Container>

        </>
    )

}

export default About;