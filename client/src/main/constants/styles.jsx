import {makeStyles} from "@material-ui/styles";

const drawerWidth = "120px";

export const useStyles = makeStyles((theme) => ({
    content: {
        padding: "12px 24px",
        [theme.breakpoints.up("md")]: {
            marginLeft: drawerWidth
        }
    },
    drawer: {
        width: drawerWidth,
        height: "100%",
        position: "fixed",
        fontSize: "12px",
        textAlign: "center",
        padding: "12px 24px",
        [theme.breakpoints.up("xs")]: {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            display: "block"
        }
    },
    drawerIcon: {
        padding: "12px 24px",
        overflow: "hidden",
        textDecoration: "none"
    },
    quarterCard: {
        paddingBottom: "20px",
        [theme.breakpoints.up("xs")]: {
            width: "50%"
        },
        [theme.breakpoints.up("sm")]: {
            width: "33%"
        },
        [theme.breakpoints.up("md")]: {
            width: "25%"
        },
        [theme.breakpoints.up("lg")]: {
            width: "20%"
        }
    },
    photoBar: {
        height: "100%",
        alignItems: "center",
        display: "flex",
        [theme.breakpoints.up("xs")]: {
            flexDirection: "column-reverse"
        },
        [theme.breakpoints.up("md")]: {
            flexDirection: "row"
        }
    }
}));
