import { createUseStyles } from "react-jss";
import colors from "../styling/colors";
import { BUTTON_PRIMARY, CARD_SHADOW, INPUT_TEXT, LINK_PRIMARY } from "../styling/styling";

const useStyles = createUseStyles({
    auth : {
        ...CARD_SHADOW,
        padding : '12px',
        textAlign: 'center',
        width: '450px',
        margin: 'auto',
        marginBottom: '45px',
        border: `2px solid ${colors["text-gray-800"]}`,
        '& .title': {
            color: colors.primary,
            margin: '8px',
            fontSize: '24px'
        },
        '& .subtitle': {
            color: colors["text-gray-600"],
            margin: '8px 8px 24px 8px',
            fontSize: '16px',
            fontWeight: '500'
        },
        '& .text-input' : {
            ...INPUT_TEXT,
            margin: '8px'
        },
        '& .button-primary': {
            ...BUTTON_PRIMARY,
            margin: '24px',
            '&:hover': {
                cursor: 'pointer',
            }
        },
        '& .link-primary': {
            ...LINK_PRIMARY,
            textDecoration:'none'
        },


    }
}) 
export default useStyles;