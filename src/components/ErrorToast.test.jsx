import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ErrorToast from "./ErrorToast";

describe("ErrorToast", () => {
  it("should not render anything if open is false", () => {
    const { container } = render(<ErrorToast open={false} message="Error!" />);
    expect(container.firstChild).toBeNull();
  });

  it("should render the message and close button if open is true", () => {
    const setOpen = vi.fn();
    const { getByText, getByRole } = render(
      <ErrorToast open={true} message="Error!" setOpen={setOpen} />
    );

    expect(getByText("Error!")).toBeTruthy();
    expect(getByRole("alert")).toBeTruthy();
  });
});
