import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';

const useStyles = createUseStyles({
  posts: {
    padding: '0px',
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'flex-start',
    '& .main' : {
      padding: '24px',
      marginLeft: '12px',
      width: '80%',
      backgroundColor: colors['text-gray-100'],
      borderBottom: `3px solid ${colors['text-gray-400']}`,
      borderRight: `3px solid ${colors['text-gray-400']}`,
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
    }
   
  },
});

export default useStyles;