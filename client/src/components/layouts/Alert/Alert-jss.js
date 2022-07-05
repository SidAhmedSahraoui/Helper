import { createUseStyles } from "react-jss";
import colors from "../../styling/colors";
const useStyles = createUseStyles({
  alert: {
    "& .main": {
      backgroundColor: colors.danger,
      width: "400px",
      height: "55px",
      textAlign: "center",
      margin: "12px auto",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      color: colors["text-gray-200"],
      fontSize: "18px",
      fontWeight: "200",
      borderRadius: "12px",
    },
    "@media screen and (max-width: 500px)": {
      "& .main": { width: "80%" },
    },
  },
});
export default useStyles;
