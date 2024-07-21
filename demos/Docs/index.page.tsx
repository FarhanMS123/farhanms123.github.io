import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";
import React from "react";

export default function Docs() {
    return <>
        <FluentProvider theme={teamsDarkTheme} style={{height:'100%', overflow:'auto', display: 'block'}}>
            //
        </FluentProvider>
    </>;
}