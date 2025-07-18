import { renderHook } from "@testing-library/react";
import useSnackbar from "useSnackbar";

describe("useSnackbar hook", () => {
  it("throws an error when used outside SnackbarProvider", () => {
    expect(() => {
      renderHook(() => useSnackbar());
    }).toThrow("useSnackbar must be used inside a SnackbarProvider");
  });
});
