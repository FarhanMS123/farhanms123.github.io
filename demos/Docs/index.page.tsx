import React from "react";
import { Button, FluentProvider, teamsDarkTheme } from "@fluentui/react-components";

export default function Docs() {
    return <>
        <FluentProvider theme={teamsDarkTheme} style={{height:'100%', overflow:'auto', display: 'block'}}>
            <Button appearance="primary">Hello?</Button>
        </FluentProvider>
    </>;
}