import React from 'react'
import { Container, Typography, Button, makeStyles, ThemeProvider, useTheme } from '@material-ui/core'
import Bg from '../img/bg.svg'

const useStyles = makeStyles((theme) => ({

    bgContainer: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "url(https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)",
        backgroundSize: "cover",
        backgroundAttachment : "fixed",
        backgroundRepeat : "no-repeat",
    },

    bgimg: {
        height: "30%",
        width: "30%",
        backgroundAttachment : "fixed",
        backgroundRepeat : "no-repeat",        

        [theme.breakpoints.down('sm')]: {
            width: "80%",
            marginTop: "-10%"
        },

        [theme.breakpoints.up('sm')]: {
            width: "60%",
            marginTop: "-5%"
        },

    },

    heading: {
        color: "#F4B400",
        marginTop: "5%",
        fontSize: "450%",

        [theme.breakpoints.down('sm')]: {
            fontSize: "300%",
            marginTop: "3%",
        },

        [theme.breakpoints.up('sm')]: {
            fontSize: "300%",
            marginTop: "3%",
        },
    },

    headingpara: {
        color: "white",
        fontSize: "150%",

        [theme.breakpoints.down('sm')]: {
            fontSize: "120%",
            marginTop: "-3%"
        },

        [theme.breakpoints.up('sm')]: {
            fontSize: "150%",
            marginTop: "-1%",
        },

    },

}));

function Banner(props) {

    const classes = useStyles(props)

    return (
        <>

            <Container maxWidth="xl" className={classes.bgContainer} >      

                <img gutterBottom align="center" src={Bg} className={classes.bgimg}></img>

                <Typography gutterBottom className={classes.heading} align="center" variant="h3" >
                    <b>Welcome to Global Wolrd! </b>
                </Typography>

                <Typography gutterBottom align="center" className={classes.headingpara} variant="h5" paragraph>
                    <b>
                        In its most general sense, the term <br></br> "world" refers to the totality of entities, <br></br>
                    to the whole of reality or <br></br> to everything that was, is and will be.<br></br>
                    </b>
                </Typography>

                <Container className="buttonbase" align="center" maxWidth="xl">

                    <Button variant="contained" color="secondary">
                        Secondary
                    </Button>

                    <Button style={{border : "2px solid"}} variant="outlined" color="secondary">
                        Secondary
                    </Button>

                </Container>

            </Container>

        </>
    )
}

export default Banner;