import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';

const useStyles = createUseStyles({
  dash: {
    padding: '0px',
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'flex-start',
    '& .main' : {
      padding: '24px'
    }
   
  },
});

export default useStyles;