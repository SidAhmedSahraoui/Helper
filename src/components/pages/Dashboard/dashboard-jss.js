import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';
import { BUTTON_PRIMARY_OUTLINE, CARD_SHADOW, INPUT_TEXT } from '../../styling/styling';

const useStyles = createUseStyles({
  dash: {
    padding: '0px',
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'flex-start',
    '& .main' : {
      padding: '24px',
      marginLeft: '12px',
      maxHeight: '80vh',
      width: '80%',
      backgroundColor: colors['text-gray-100'],
      borderBottom: `3px solid ${colors['text-gray-400']}`,
      borderRight: `3px solid ${colors['text-gray-400']}`,
      borderRadius: '10px',
      textAlign: 'center',
      display: 'flex',
      justifyContent:'space-evenly',
      '& span': {
        width: '3px',
        height: '80vh',
        backgroundColor: colors['text-gray-900']
      },
      '& .title': {
        color: colors['text-gray-900']
      },
      '& .text-input': {
        ...INPUT_TEXT,
        margin: '12px 8px'
      },
      '& .select-input': {
        ...INPUT_TEXT,
        width: '220px',
        margin: '12px 8px'
      },
      '& .button-primary': {
        ...BUTTON_PRIMARY_OUTLINE,
        margin: '12px 8px',
        '&:hover': {
          cursor:'pointer'
        }
      }
    }
   
  },
});

export default useStyles;