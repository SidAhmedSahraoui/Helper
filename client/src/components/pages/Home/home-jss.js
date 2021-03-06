import { createUseStyles } from "react-jss";
import colors from "../../styling/colors";
import { BUTTON_PRIMARY_OUTLINE, INPUT_TEXT } from "../../styling/styling"
const useStyles = createUseStyles({
  postsContainer: {
    padding: "40px 20px",
    margin: "auto",
    backgroundColor: colors["text-gray-200"],
    display: "flex",
    justifyContent: "space-evenly",
    "& .ad": {
      width: "450px",
      "& img": {
        width: "450px",
        height: "70%",
      },
      "& .info": {
        textAlign: "center",
        "& p": {
          display: "flex",
          justifyContent: "space-evenly",
          "& a": {
            "& .icon": {
              width: "35px",
              height: "35px",
              color: colors.primary,
            },
          },
        },
      },
      "@media screen and (max-width: 900px)": {
        display: "none",
      },
    },
    "& .posts": {
      display: "flex",
      flexWrap: "wrap",
      width: "70%",
      "@media screen and (max-width: 1400px)": {
        width: "100%",
      },
    },
  },
  page: {
    padding: "40px 20px",
    marginBottom: "40px",
    width: "90%",
    margin: "auto",

    "& .row": {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      "& h1.title": {
        color: colors["text-gray-900"],
        fontWeight: "700",
        fontSize: "3rem",
        maxWidth: "450px",
      },
      "& .col": {
        width: "450px",
        "& img": {
          width: "100%",
          height: "100%",
        },
      },

      "@media screen and (max-width: 576px)": {
        "& h1.title": {
          fontSize: "2rem",
        },
      },

      "& h5": {
        color: colors["text-gray-600"],
        fontWeight: "500",
        maxWidth: "500px",
        fontSize: "1.7rem",
        "& span": {
          fontWeight: "700",
          color: colors["text-gray-700"],
        },
      },
    },

    "& h3": {
      color: colors["text-gray-800"],
      fontWeight: "700",
      fontSize: "1.7rem",
      maxWidth: "250px",
      marginLeft: "45px",

      "& .line": {
        width: "55px",
        height: "5px",
        backgroundColor: colors["text-gray-500"],
        display: "block",
        marginLeft: "125px",
      },
    },
    "& .ad": {
      width: "80%",
      margin: "auto",
      marginTop: "55px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      backgroundColor: colors["text-gray-200"],
      borderRadius: "8px",
      "& img": {
        width: "450px",
      },
      "& .info": {
        textAlign: "center",
        "& p": {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          "& a": {
            margin: "12px",
            "& .icon": {
              width: "35px",
              height: "35px",
              color: colors.primary,
            },
          },
        },
        "& form": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          "& input": {
            ...INPUT_TEXT,
            margin: "12px auto",
            
          },
          "& textarea": {
            ...INPUT_TEXT,
            height: "45px"
          },
          "& .btn": {
            ...BUTTON_PRIMARY_OUTLINE,
            width: "40%",
          },
          "@media screen and (max-width: 576px)": {
            "& input": {
              width: "50%",
            },
          "& textarea": {
            width: "50%",
            margin: "auto"
          }},
        }
      },
      "@media screen and (max-width: 580px)": {
        "& img": {
          width: "80%",
          margin: "auto",
        },
      },
    },
    "& .services": {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      "& .service": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "210px",
        padding: "8px 24px",
        margin: "auto 12px",
        width: "285px",
        marginBottom: "8px",
        backgroundColor: colors["text-gray-200"],
        "& p": {
          color: colors["text-gray-700"],
          fontWeight: 600,
          fontSize: "16px",
          maxWidth: "285px",
        },
        "& .row": {
          display: "flex",
          width: "300px",
          alignItems: "center",
          justifyContent: "flex-start",
          marginRight: "45px",
          fontWeight: "200",
          fontSize: "1.3rem",
          "& h4": {
            color: colors["text-gray-900"],
            fontWeight: 600,
            fontSize: "18px",
          },
        },

        "& .icon": {
          fontSize: "26px",
          marginRight: "12px",
          color: colors["danger"],
        },
      },
    },
  },
});

export default useStyles;
