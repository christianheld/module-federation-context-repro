import React from 'libs/react';
import { TestContext } from 'host/TestContext';

export default function () {
  const context = React.useContext(TestContext);
  return <div>Remote: {context}</div>
}
