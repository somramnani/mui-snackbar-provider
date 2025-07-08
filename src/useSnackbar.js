import { useContext } from "react";
import { SnackbarContext } from "./SnackbarProvider";

const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used inside a SnackbarProvider");
  }
  return context;
};

export default useSnackbar;
