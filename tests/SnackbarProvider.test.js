import { screen, fireEvent, render } from "@testing-library/react";
import TestComponent from "./utils/TestComponent";
import SnackbarProvider from "SnackbarProvider";

const renderSnackbarTestComponent = () =>
  render(
    <SnackbarProvider>
      <TestComponent />
    </SnackbarProvider>
  );

describe("SnackbarProvider", () => {
  it("shows the Snackbar when showSnackbar is triggered", async () => {
    renderSnackbarTestComponent();

    fireEvent.click(screen.getByText("Open Snackbar"));

    const snackbar = await screen.findByTestId("snackbar");
    expect(snackbar).toBeInTheDocument();
    expect(snackbar).toHaveTextContent("Test Snackbar");
  });

  it("closes the Snackbar when closeSnackbar is triggered", () => {
    renderSnackbarTestComponent();

    expect(screen.getByTestId("open-state").textContent).toBe("Closed");

    fireEvent.click(screen.getByText("Open Snackbar"));
    expect(screen.getByTestId("open-state").textContent).toBe("Open");

    fireEvent.click(screen.getByText("Close Snackbar"));
    expect(screen.getByTestId("open-state").textContent).toBe("Closed");
  });
});
