import React from "react";
import { Button, FluentProvider, makeStyles, teamsDarkTheme, tokens } from "@fluentui/react-components";
import "../libs/global_tailwind.css";
import "../libs/fui_docs/main.css"

const useDocsStyles = makeStyles({
    root: {
        ":root, :root body, :root html": {
            backgroundColor: tokens.colorNeutralBackground3,
        },
        backgroundColor: tokens.colorNeutralBackground3,
        height:'100%',
        overflow:'auto',
        display: 'block',
    },
});

export default function Docs() {
    const classes = useDocsStyles();
    return <>
        <FluentProvider theme={teamsDarkTheme} className={classes.root}>
            <Button appearance="primary">Hello?</Button>
        </FluentProvider>
    </>;
}

export function SidePanel() {
    return <></>;
}