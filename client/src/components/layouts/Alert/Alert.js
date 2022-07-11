import MuiAlert from "@mui/material/Alert";
import colors from "../../styling/colors";
function Alert(props) {
  return (
    <MuiAlert
      style={{
        backgroundColor: `${
          props.type === "success" ? colors.success : colors.danger
        }`,
      }}
      elevation={4}
      variant="filled"
      {...props}
    />
  );
}

export default Alert;
