import React from 'react';

import { FillerProvider } from "./FillerProvider";


export const ContextProviders = ({ children }) => {
  return <FillerProvider>{children}</FillerProvider>;
};
