import { createUseStyles } from 'react-jss'
import colors from '../../styling/colors'

const useStyles = createUseStyles({
    footer : {
        '& .container':{
            textAlign : 'center',
            '& h4': {
                color : colors['text-gray-900'],
                margin: '0px',
                '& .icon':{
                    color : colors['text-gray-900'],
                    fontSize: '1.3rem'
                }
            },
            '& p': {
                margin: '3px',
                fontSize: '1.0rem',
                fontWeight:'600',
                color: colors['text-gray-900']

            }
        }
    }
})
export default useStyles