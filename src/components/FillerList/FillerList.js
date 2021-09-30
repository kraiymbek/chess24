import React, { Fragment } from 'react';
import { useRouter } from "next/router";


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import useFillerStore from "../../hooks/globalStores/useFillerStore";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

export default function FillerList() {
    const classes = useStyles();
    const router = useRouter();
    const { getActualFillerList, getRemoteFillerList } = useFillerStore();

    const handleListItemClick = (id) => {
        router.push('/filler/[id]', `/filler/${id}`);
    };

    return (
        <div className={classes.root}>
            {
                !getActualFillerList().length ? <div>No data</div> :
                    <List component="nav" aria-label="secondary mailbox folder">
                        {
                            getActualFillerList().map((item, index) => (
                                <Fragment key={item+index}>
                                    <ListItem  button onClick={() => handleListItemClick(index)}>
                                        <ListItemText primary={item.split('.')[0]} />
                                    </ListItem>
                                    <Divider/>
                                </Fragment>

                            ))
                        }
                    </List>
            }

            <Button style={{ marginTop: 50 }} variant="contained" color="primary"
                    onClick={() => getRemoteFillerList()}>Add more</Button>
        </div>
    );
}
