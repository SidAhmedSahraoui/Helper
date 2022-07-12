import { createUseStyles } from "react-jss";
import colors from "../../styling/colors";
import { BUTTON_PRIMARY_OUTLINE, INPUT_TEXT } from "../../styling/styling";

const useStyles = createUseStyles({
   profile : {
    '& .user': {
        padding: '12px 16px',
        '& .welcome': {
            color: colors["text-gray-700"],
            fontSize: '28px',
            fontWeight: 800,
            paddingLeft: '26px',
        },
        '& .email': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            color: colors["text-gray-700"],
            fontSize: '18px',
            fontWeight: 600,
            '& .element': {
                margin: '24px'
            }
        },
        '& .alert-container': {
            width: '80%',
            margin: '18px auto'
        },
        '& .edit': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            '& .form': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                width: '350px',
                '@media screen and (max-width: 600px)': {
                    width: '150px',
                    '& .text-input': {
                        width: '80%'
                    }                
                },
                '& .text-input': {
                    ...INPUT_TEXT,
                    margin: '12px auto'
                },
                '& .select': {
                    ...INPUT_TEXT
                },
                '& .button': {
                    ...BUTTON_PRIMARY_OUTLINE,
                    margin: '12px auto'
                }
            }
        }
    }
    }
});

export default useStyles;
