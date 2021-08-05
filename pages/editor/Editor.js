import React from 'react';
import Large from '../../src/components/Cards/Large';
import { makeStyles } from "@material-ui/core/styles";
import Small from '../../src/components/Cards/Small';
import LeftNav from '../../src/components/SideNav/LeftNav';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Loginbtn from '../../src/components/Button/Loginbtn';
import CardContainer from '../../src/components/Cards/CardContainer';
import MainTile from '../../src/components/Cards/MainTile';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import SaveBtn from '../../src/components/Button/SaveBtn';
import PreviewBtn from '../../src/components/Button/PreviewBtn';
import LiveBtn from '../../src/components/Button/LiveBtn';
const useStyles = makeStyles({
    root: {
    },
    sidenav: {
        height: "100%",
        width: "200px",
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        background: "#111",
        overflowX: "hidden",
        paddingTop: '20px',

    },
    main: {
        marginLeft: "200px", /* Same as the width of the sidenav */
        fontSize: "28px",/* Increased text to enable scrolling */
        padding: "0px 10px",
        // background: "#303",
    },
    cardContainer: {
        padding: 10,
        background: "#313637",
        marginTop: 20,
        borderRadius: 4,
        marginBottom: 20
    },
    save: {
        marginBottom: 15,
        marginLeft: 10,
        fontSize: 11,
        width: "10%",
        height: 30,
        textAlign: "center",
        textTransform: 'none',
        background: "#424242",
        float: "right",


    },

    leftbtn: {
        float: "left",

    },
    btnSt: {
        border: 'node',
        background: "#424242",
        color: "#fff",
        borderRadius: 2,
        marginRight: 25,
        marginBottom: 30,
        '&:hover': {
            background: "#424242",
            borderBottom: "5px solid #15C9EA"
        },
    }


});
// layout
const Editor = () => {
    const classes = useStyles();
    return (

        <div>
            <LeftNav />

            <div className={classes.main}>
                <div>

                    <PreviewBtn>PREVIEW</PreviewBtn>
                    <SaveBtn>Save</SaveBtn>


                    <IconButton className={`${classes.btnSt} ${classes.leftbtn} `} aria-label="delete">
                        <SaveIcon />
                    </IconButton>
                    <IconButton className={`${classes.btnSt} ${classes.leftbtn} `} aria-label="delete">
                        <SaveIcon />
                    </IconButton>
                    <LiveBtn>Live</LiveBtn>

                </div>

                <div className={classes.cardContainer}>


                    <Grid container spacing={1}>

                        <Grid item xs={12}>
                            <MainTile />

                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Small />
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Small />
                        </Grid>

                        <Grid item xs={12}>
                            <Large />

                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Small />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Small />
                        </Grid>
                    </Grid>

                </div>

            </div>
        </div>
    )
}

export default Editor;