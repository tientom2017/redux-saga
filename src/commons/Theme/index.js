import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  color: {
    primary: purple,
    secondary: green,
    error:  'E64A19'
  },
  background: {
    backgroundColor: 'blue',
  },
  typography: {
      fontFamily: 'Roboto'
  },
  shape:{
      borderRadius: 4,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
