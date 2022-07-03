import { createUseStyles } from 'react-jss'
import colors from '../../styling/colors'

const useStyles = createUseStyles({
    footer : {
        padding: '12px 8px',
        margin: 'auto',
        '& .container':{
            textAlign : 'center',
            '& h4': {
                color : colors['text-gray-800'],
                margin: '0px',
                '& .icon':{
                    color : colors['text-gray-800'],
                    fontSize: '1.3rem'
                }
            },
            '& p': {
                margin: '3px',
                fontSize: '1.0rem',
                fontWeight:'600',
                color: colors['text-gray-800']

            }
        }
    }
})
export default useStyles