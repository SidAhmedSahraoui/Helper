import { createUseStyles } from 'react-jss';
import { BUTTON_PRIMARY , BUTTON_TRANSPARENT } from '../../styling/styling';
import colors from '../../styling/colors';

const useStyles = createUseStyles({
  navbar: {
    paddingTop: '20px',
    paddingBottom: '20px',
    '& .container' : {
      width:'80%',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems : 'center',
      '& .links' : {
        width:'150px',
        display: 'flex',
        justifyContent: 'space-evenly',
        '& .button-primary': {
          ...BUTTON_PRIMARY,
          textDecoration:'none'
        },
        '& .link-primary': {
          ...BUTTON_TRANSPARENT ,
          textDecoration: 'none',
          color: colors['text-gray-900'],
        },
      }
    }
  },
});

export default useStyles;
