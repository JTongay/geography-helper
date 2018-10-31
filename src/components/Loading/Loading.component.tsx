import { Spinner } from '@blueprintjs/core';
import * as React from 'react';

interface ILoadingProps {
  loading: boolean;
}

export const Loading: React.StatelessComponent<ILoadingProps> = ({ loading }) => {
  if (loading) {
    return (
      <Spinner intent="primary" />
    );
  }
  return null;
}
