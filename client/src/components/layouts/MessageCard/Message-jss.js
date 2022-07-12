import { createUseStyles } from "react-jss";
import colors from "../../styling/colors";
const useStyles = createUseStyles({
  message: {
    padding: "0px 0px 12px 0px",
    margin: "12px auto",
    width: "350px",
    borderRadius: "12px !important",
    boxShadow: `3px 6px 12px ${colors["text-gray-600"]}`,
    backgroundColor: "#fff",
    "@media screen and (max-width: 550px)": {
      width: "80%",
    },
    "&:hover": {
      cursor: "pointer",
    },
    "& .head": {
      color: colors["text-gray-800"],
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      "& .title": {
        fontSize: "20px",
        textAlign: "center",
        fontWeight: 800,
        margin: "12px",
        "& span": {
          fontSize: "18px",
          fontWeight: 200,
        },
      },
    },
    "& .core": {
      "& .content": {
        textAlign: "center",
        margin: "12px",
      },
    },
  },
});
export default useStyles;
