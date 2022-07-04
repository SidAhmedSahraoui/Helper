import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';
import { BUTTON_PRIMARY } from '../../styling/styling';

const useStyles = createUseStyles({
  navbar: {
    padding: '12px 0px',
    position: 'sticky',
    top: '0px',
    backgroundColor: colors['text-gray-100'],
    borderBottom: `3px solid ${colors['text-gray-400']}`,
    '& .container' : {
      width:'80%',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems : 'center',
      '& .links': {
        '& .button-primary': {
          ...BUTTON_PRIMARY,
          textDecoration: 'none' 
        }
      },
      '& .brand': {
        textDecoration: 'none',
        '& .logo': {
          color: colors.primary,
          fontFamily: 'monospace',
          fontSize: '28px',
        }
      },
      '& .dropdown': {
        width: '250px',
        color: colors['text-gray-800'],
          '&:hover': {
            color: colors['text-gray-900'],
        },
        
        '& .dropdown-menu': {
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          boxShadow: 'none',
          '& .dropdown-item': {
            textDecoration: 'none',
            color: colors.primary,
            padding: '8px 12px',
            borderRadius: '10px',
            '&:hover': {
              color: colors['text-gray-100'],
              backgroundColor: colors.primary
            },
            '& .icon': {
              marginRight: '10px',
            }
          }
        }
      }
    }
  },
});

export default useStyles;
