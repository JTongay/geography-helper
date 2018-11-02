import * as React from 'react';

interface IError {
  error: any;
}

export const Error: React.StatelessComponent<IError> = ({ error }) => {
  if (error) {
    return (
      <h1>Error</h1>
    )
  }
  return null;
}
