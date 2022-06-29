import { createUseStyles } from 'react-jss'
import colors from '../../styling/colors'
const useStyles = createUseStyles({
    post : {
        padding: '0px 0px 12px 0px',
        margin: '12px auto',
        width: '45%',
        '& .head': {
            color: colors.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            '& .title': {
                fontSize: '28px',
                textAlign: 'center',
                fontWeight: 400,
                margin: '0px',
                width: '85%'
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
        '& .core': {
            '& .content': {
                textAlign: 'center'
            }
        }
    }
})
export default useStyles