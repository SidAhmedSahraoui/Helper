import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@keyframes hold": {
    "0%": {
      background: "rgb(81, 0, 180)",
    },
    "25%": {
      background: "rgba(81, 0, 180, 0)",
    },
    "50%": {
      background: "rgb(81, 0, 180)",
    },
    "75%": {
      background: "rgba(81, 0, 180, 0)",
    },
    "100%": {
      background: "rgb(81, 0, 180)",
    },
  },
  spinner: {
    width: "50px",
    margin: "auto",
    height: "50px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",

    "& .el": {
      width: "30%",
      height: "30%",
      borderRadius: "5px",
      animation: "$hold 9s linear infinite",
    },
    "& .el1": {
      animation: "$hold 3s linear infinite",
    },
    "& .el2, .el4": {
      animation: "$hold 3s linear infinite",
      animationDelay: "0.2s",
    },
    "& .el3, .el5, .el7": {
      animation: "$hold 3s linear infinite",
      animationDelay: "0.4s",
    },
    "& .el6, .el8": {
      animation: "$hold 3s linear infinite",
      animationDelay: "0.6s",
    },
    "& .el9": {
      animation: "$hold 3s linear infinite",
      animationDelay: "0.8s",
    },
  },
});
export default useStyles;
