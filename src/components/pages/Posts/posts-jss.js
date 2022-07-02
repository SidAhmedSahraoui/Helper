import { createUseStyles } from "react-jss";
import colors from "../../styling/colors";

const useStyles = createUseStyles({
  posts: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});

export default useStyles;
