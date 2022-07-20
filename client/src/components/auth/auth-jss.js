import { createUseStyles } from "react-jss";
import colors from "../styling/colors";
import { BUTTON_PRIMARY, INPUT_TEXT, LINK_PRIMARY } from "../styling/styling";

const useStyles = createUseStyles({
  auth: {
    padding: "12px",
    marginTop: "45px",
    textAlign: "center",
    width: "450px",
    margin: "auto",
    marginBottom: "45px",
    backgroundColor: `${colors["text-gray-200"]} !important`,
    "@media screen and (max-width: 550px)": {
      width: "80%",
    },
    "& .title": {
      color: colors.primary,
      margin: "8px",
      fontSize: "24px",
    },
    "& .subtitle": {
      color: colors["text-gray-600"],
      margin: "8px 8px 24px 8px",
      fontSize: "16px",
      fontWeight: "500",
    },
    "& .text-input": {
      ...INPUT_TEXT,
      margin: "8px",
    },
    "& .button-primary": {
      ...BUTTON_PRIMARY,
      margin: "24px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    "& .link-primary": {
      ...LINK_PRIMARY,
      textDecoration: "none",
    },
  },
});
export default useStyles;
