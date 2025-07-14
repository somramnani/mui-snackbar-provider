import { render, screen, fireEvent } from "@testing-library/react";
import PositionedSnackbar from "PositionedSnackbar";
import useSnackbar from "useSnackbar";

jest.mock("useSnackbar", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("PositionedSnackbar", () => {
  it("renders with message and severity", () => {
    useSnackbar.mockReturnValue({
      message: "Test Snackbar",
      type: "success",
      open: true,
      closeSnackbar: jest.fn(),
    });

    render(<PositionedSnackbar />);

    expect(screen.getByText("Test Snackbar")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass("MuiAlert-filledSuccess");
  });

  it("does not render when open is false", () => {
    useSnackbar.mockReturnValue({
      message: "",
      type: "info",
      open: false,
      closeSnackbar: jest.fn(),
    });

    const { container } = render(<PositionedSnackbar />);
    expect(container.querySelector(".MuiSnackbar-root")).toBeNull();
  });

  it("calls closeSnackbar on close", () => {
    const closeSnackbarMock = jest.fn();
    useSnackbar.mockReturnValue({
      message: "Close me",
      type: "error",
      open: true,
      closeSnackbar: closeSnackbarMock,
    });

    render(<PositionedSnackbar />);
    fireEvent.click(screen.getByRole("button")); // Close icon
    expect(closeSnackbarMock).toHaveBeenCalled();
  });
});
