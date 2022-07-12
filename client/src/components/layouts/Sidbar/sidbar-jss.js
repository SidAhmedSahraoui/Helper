import { createUseStyles } from "react-jss";
import colors from "../../styling/colors";

const useStyles = createUseStyles({
  sid: {
    padding: "24px 8px",
    width: "180px",
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "80vh",
    borderRadius: "8px",
    borderBottom: `3px solid ${colors["text-gray-500"]}`,
    borderRight: `3px solid ${colors["text-gray-500"]}`,
    backgroundColor: colors["text-gray-400"],
    "@media screen and (max-width: 780px)": {
      width: "50px",
    },
    "& .link": {
      textDecoration: "none",
      "& .element": {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "flex-end",
        fontSize: "18px",
        padding: "0px",
        marginBottom: "18px",
        height: "45px",
        borderRadius: "10px",
        color: colors.primary,
        textDecoration: "none",
        "& .name": {
          fontWeight: "200",
          marginLeft: "15px",
          "@media screen and (max-width: 780px)": {
            display: "none",
          },
        },
        "& .icon": {
          marginLeft: "15px",
        },
        "&:hover": {
          color: colors["text-gray-100"],
          background: colors.primary,
          cursor: "pointer",
        },
      },
    },
  },
});

export default useStyles;
