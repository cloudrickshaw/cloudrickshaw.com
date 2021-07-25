import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import useTheme from './theme/mui';
import { ThemeProvider } from '@material-ui/core/styles';

export const AppWithProvider = () => {
  const muiTheme = useTheme();
  return (
    <React.StrictMode>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<AppWithProvider />, document.getElementById('root'));
