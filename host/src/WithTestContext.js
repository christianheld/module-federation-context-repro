import React from "react";
import TestContext from "./TestContext";

function WithTestContext(Component) {
    return props => (
        <TestContext.Consumer>
            {value => <Component contextValue={value} {...props} />}
        </TestContext.Consumer>);
}

export default WithTestContext;