import React from 'libs/react';
import { TestContext } from './TestContext';

export default function () {
  const context = React.useContext(TestContext);
  return <div>Local: {context}</div>
}
