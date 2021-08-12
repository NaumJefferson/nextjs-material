import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Cria a instância do tema.
const theme = createTheme({
  palette: {
    primary: {
      main: '#9DF02C',
    },
    secondary: {
      main: '#F03E13',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;