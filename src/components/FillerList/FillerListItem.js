import React from 'react';
import { useRouter } from "next/router";

import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

import useFillerStore from "../../hooks/globalStores/useFillerStore";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

export default function FillerListItem() {
    const classes = useStyles();
    const router = useRouter();

    const { getFillerById } = useFillerStore();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" style={{ marginBottom: 50 }}
                    onClick={() => router.push('/')}>Go back</Button>
            <h3>{getFillerById(router.query.id)}</h3>
        </div>
    );
}
