import { createContext, useState } from "react";
import PositionedSnackbar from "./PositionedSnackbar/PositionedSnackbar";

export const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  const closeSnackbar = () => {
    setOpen(false);
  };

  const showSnackbar = ({ message: snackbarMessage, type: snackbarType }) => {
    setMessage(snackbarMessage);
    setType(snackbarType);
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider
      value={{ message, open, type, closeSnackbar, showSnackbar }}
    >
      {children}
      <PositionedSnackbar />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
