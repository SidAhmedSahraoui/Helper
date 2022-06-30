import { createUseStyles } from 'react-jss'
import colors from '../../styling/colors'
const useStyles = createUseStyles({
    post : {
        padding: '0px 0px 12px 0px',
        margin: '12px auto',
        width: '350px',
        borderRadius: '12px !important',
        boxShadow: `1px 3px 6px ${colors['text-gray-600']} !important`,
        backgroundColor:'#fff',
        height: '210px',
        cursor: 'pointer',
        '@media screen and (max-width: 490px)': {
              width: '90%',
          },
        '&:hover': {
            borderBottom: `4px solid ${colors.primary}`
        },
        '& .head': {
            color: colors['text-gray-800'],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            '& .title': {
                fontSize: '28px',
                textAlign: 'center',
                fontWeight: 400,
                margin: '0px',
                width: '85%',
                paddingLeft: '20px'
            },
            '& .icon': {
                color: colors['text-gray-100'],
                fontSize: '5px',
                width: '7%',
                height: '30px',
                padding: '12px 8px',
                backgroundColor: colors.primary,
                borderBottomLeftRadius: '12px',
                borderBottomRightRadius: '12px'
            }
        },
        '& .position': {
            color: colors.primary,
            textAlign: 'center'
        },
        '& .core': {
            '& .content': {
                textAlign: 'center'
            }
        },
        '& .contact': {
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '80%',
            margin: 'auto',
            '& .call': {
                width: '35%',
                display: 'flex',
                alignItems: 'center',
                border: `1px solid ${colors['text-gray-500']}`,
                borderRadius: '12px',
                backgroundColor: colors['text-gray-100'],
                color: colors.primary,
                justifyContent: 'center',
                '& h3': {
                    marginRight: '12px'
                }
            },
            '& .msg': {
                width: '45%'
            }
        }
    }
})
export default useStyles