import { createUseStyles } from "react-jss";
import { BUTTON_PRIMARY_OUTLINE, INPUT_TEXT } from "../../styling/styling";

const useStyles = createUseStyles({
   profile : {
    '& .user': {
        padding: '12px 16px',
        '& .welcome': {
            fontSize: '24px',
            fontWeight: '600'
        },
        '& .email': {
            fontSize: '22px',
            fontWeight: '600'
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
