import colors from "./colors";

export const BUTTON_PRIMARY = {
  background: colors["primary"],
  border: 0,
  borderRadius: "10px",
  fontWeight: 400,
  fontSize: '16px',  color: "#fff !important",
  padding: "8px 20px !important",
};

export const BUTTON_PRIMARY_OUTLINE = {
  background: colors["text-gray-100"],
  border: `2px solid ${colors.primary}`,
  borderRadius: "10px",
  fontWeight: 400,
  fontSize: '16px',
  color: colors.primary,
  padding: "8px 20px !important",
  '&:hover' : {
    background : colors.primary,
    color : colors["text-gray-100"],
    cursor : 'pointer'
  }
};

export const BUTTON_TRANSPARENT = {
  background: "transparent",
  color: colors.primary,
  border: 0,
  borderRadius: "10px",
  fontWeight: 400,
  fontSize: '16px',
  padding: "8px 20px !important",
};

export const LINK_PRIMARY = {
  fontWeight: 400,
  fontSize: '16px',
  color: `${colors["text-gray-900"]} !important`,
  "&:hover": {
    color: colors["text-gray-900"],
  },
};

export const CARD_SHADOW = {
  borderRadius: "10px",
  "box-shadow": `0px 12px 24px ${colors["text-gray-700"]}`,
};

export const INPUT_TEXT = {
  fontWeight: 400,
  fontSize: '16px',
  borderRadius: "8px",
  padding: "12px 24px",
  border: `2px solid ${colors["text-gray-400"]}`,
  "&:focus": {
    borderColor: colors["text-gray-600"],
  },
};

