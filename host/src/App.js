import React, { Suspense } from 'libs/react';

import { TestContext } from './TestContext';

import RemoteSample from 'remote1/RemoteSample';
import LocalSample from './LocalSample';

export default function () {
  return (
    <TestContext.Provider value="Initialized :)">
      <LocalSample />
      <Suspense fallback={'loading...'}>
        <RemoteSample />
      </Suspense>
    </TestContext.Provider>
  );
};

