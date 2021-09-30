import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Sidebar from "./Sidebar";
import Header from "./Header";


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: "flex"
    },
    content: {
        flexGrow: 1,
        marginLeft: theme.spacing(9),
        padding: theme.spacing(3),
        marginTop: theme.spacing(7),
        overflowX: "hidden"
    },
    contentShift: {
        marginLeft: 100,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    }
});

const MainLayout = ({ classes, children }) => {
    return (
        <Fragment>
            <div className={classes.root}>
                <Header
                    handleToggleDrawer={() => {}}
                />
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: true
                    })}
                >
                    {children}
                </main>
            </div>
            <Sidebar open={false} drawerWidth={drawerWidth} />
        </Fragment>
    );
}

export default withStyles(styles)(MainLayout);