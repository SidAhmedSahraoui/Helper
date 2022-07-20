import { createUseStyles } from "react-jss";
import colors from "../../styling/colors";
import {
  BUTTON_PRIMARY_OUTLINE,
  INPUT_TEXT,
  LINK_PRIMARY,
} from "../../styling/styling";

const useStyles = createUseStyles({
  AddPost: {
    "& .form": {
      padding: "12px",
      textAlign: "center",
      width: "450px",
      margin: "auto",
      backgroundColor: `${colors["text-gray-100"]}`,
      "@media screen and (max-width: 660px)": {
        width: "90%",
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
        width: "50%",
      },
      "& .button": {
        ...BUTTON_PRIMARY_OUTLINE,
        margin: "12px auto",
      },
      "& .link-primary": {
        ...LINK_PRIMARY,
        textDecoration: "none",
      },
      "& .select-input": {
        ...INPUT_TEXT,
        width: "50%",
        margin: "12px 8px",
      },
    },
  },
});

export default useStyles;
