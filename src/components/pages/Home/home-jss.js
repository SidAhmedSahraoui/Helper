import { createUseStyles } from 'react-jss';
import colors from '../../styling/colors';

const useStyles = createUseStyles({
  page: {
    width:'90%',
    margin:'auto',
    padding: '40px 20px',
    marginBottom: '40px',
    '& h1.title': {
      color: colors['text-gray-900'],
      fontWeight: '700',
      fontSize: '3rem',
      maxWidth: '450px',
    },

    '@media screen and (max-width: 576px)': {
      '& h1.title': {
        fontSize: '2rem',
      },
    },

    '& h5': {
      color: colors['text-gray-600'],
      fontWeight: '500',
      maxWidth: '500px',
      fontSize: '1.7rem',
      '& span': {
        fontWeight: '700',
        color: colors['text-gray-700'],
      },
    },

    '& h3': {
      color: colors['text-gray-800'],
      fontWeight: '700',
      fontSize: '1.7rem',
      maxWidth: '250px',
      position: 'relative',
      '& .line' : {
        width: '55px',
        height: '5px',
        backgroundColor: colors['text-gray-500'],
        display: 'block',
        marginLeft: '125px'
      },
    },
    '& .services' : {
        display : 'flex',
        justifyContent : 'flex-start',
        flexWrap : 'wrap',
        '& .service' : {
            display: 'flex',
            width:'250px',
            alignItems: 'center',
            justifyContent : 'space-evenly',
            marginRight : '45px',
            fontWeight: '200',
            fontSize:'1.3rem',
            '& h4' : {
                color : colors['text-gray-700'],
                fontWeight: '600',
                fontSize: '16px'
            },
            '& .icon' : {
                fontSize :'1.5rem',
                color : colors['danger']
            },
        }
    }
  },
});

export default useStyles;