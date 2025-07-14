import * as index from "index";
import SnackbarProvider from "SnackbarProvider";
import useSnackbar from "useSnackbar";
import PositionedSnackbar from "PositionedSnackbar";

describe("index.js", () => {
  it("should export SnackbarProvider", () => {
    expect(index.SnackbarProvider).toBe(SnackbarProvider);
  });

  it("should export useSnackbar", () => {
    expect(index.useSnackbar).toBe(useSnackbar);
  });

  it("should export PositionedSnackbar", () => {
    expect(index.PositionedSnackbar).toBe(PositionedSnackbar);
  });
});
