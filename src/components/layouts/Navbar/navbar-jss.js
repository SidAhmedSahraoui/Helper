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
      '& .brand': {
        textDecoration: 'none',
        '& .logo': {
          color: colors.primary,
          fontFamily: 'monospace'
        }
      },
      '& .dropdown': {
        listStyle: 'none',
        color: colors['text-gray-800'],
          '&:hover': {
            color: colors['text-gray-900'],
        },
        '& .menu':{
          display:'none !important',
          '@media screen and (max-width: 740px)': {
            display:'inline !important'
          },
        },
        '& .dropdown-menu': {
          width: '450px',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          boxShadow: 'none',
          '@media screen and (max-width: 740px)': {
            display:'none'
          },
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
          },
        }
      },      
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
