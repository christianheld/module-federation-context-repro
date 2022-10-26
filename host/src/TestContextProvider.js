import React, { useState } from 'libs/react';
import TestContext from "./TestContext";

function TestContextProvider(props) {
    const [value, setValue] = useState("Initialized :)");

    return (
        <TestContext.Provider value={value}>
            {props.children}
        </TestContext.Provider>
    );
}
export default TestContextProvider;