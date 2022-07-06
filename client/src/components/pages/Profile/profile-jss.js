import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
   profile : {
    '& .user': {
        padding: '12px 16px',
    }
    }
});

export default useStyles;
