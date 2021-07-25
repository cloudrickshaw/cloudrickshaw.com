// @flow
import React from 'react';
import { createTheme } from '@material-ui/core/styles';
//import palette from './palette';
import typography from './typography';

export default function useTheme() {
  const theme = React.useMemo(
    () =>
      createTheme({
        typography
      }),
    []
  );
  return theme;
}
