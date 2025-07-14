import { Snackbar, Alert } from "@mui/material";
import useSnackbar from "./useSnackbar";

const PositionedSnackbar = () => {
  const { message, type, open, closeSnackbar } = useSnackbar();

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={5000}
      onClose={closeSnackbar}
      data-testid="snackbar"
    >
      <Alert
        onClose={closeSnackbar}
        severity={type || "info"}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default PositionedSnackbar;
