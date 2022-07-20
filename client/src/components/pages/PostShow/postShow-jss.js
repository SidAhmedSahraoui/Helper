import { createUseStyles } from "react-jss";
import colors from "../../styling/colors";
import {
  BUTTON_PRIMARY_OUTLINE,
  CARD_SHADOW,
  INPUT_TEXT,
} from "../../styling/styling";

const useStyles = createUseStyles({
  postShow: {
    backgroundColor: colors["text-gray-200"],
    height: "90vh",
    padding: "24px 12px",
    "& .main": {
      display: "flex !important",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      textAlign: "center",
      padding: "24px 12px",
      "& .post": {
        width: "450px",
      },
      "& .message": {
        width: "450px",
        "& .form": {
          ...CARD_SHADOW,
          padding: "12px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          backgroundColor: `${colors["text-gray-100"]}`,
          border: `2px solid ${colors["text-gray-500"]}`,
          "& .text-input": {
            ...INPUT_TEXT,
            margin: "8px",
            width: "50%",
            height: "100px",
          },
          "& .button": {
            ...BUTTON_PRIMARY_OUTLINE,
            margin: "12px auto",
          },
        },
      },
    },
  },
});

export default useStyles;
