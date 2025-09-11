import { MemoryRouter, useLocation } from "react-router";
import { it, describe, expect, vi, beforeEach } from "vitest";
import { PaymentSummary } from "./PaymentSummary";
import { screen, within, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

vi.mock("axios");
describe("PaymmentSummary Component", () => {
  let loadCart;
  let paymentsummary;
  let user;
  beforeEach(() => {
    loadCart = vi.fn();
    paymentsummary = {
      totalItems: 3,
      productCostCents: 2397,
      shippingCostCents: 0,
      totalCostBeforeTaxCents: 2397,
      taxCents: 240,
      totalCostCents: 2637,
    };

    user = userEvent.setup();
  });
  it("search For correct Dollar amount", async () => {
    render(
      <MemoryRouter>
        <PaymentSummary
          paymentSummary={paymentsummary}
          loadCart={loadCart}
        ></PaymentSummary>
      </MemoryRouter>
    );

    const paymentSummaryrow = await screen.findAllByTestId(
      "payment-summary-row"
    );
    const paymentValue = within(paymentSummaryrow[4]).getByTestId(
      "correct-dollar-amount"
    );
    expect(paymentValue).toHaveTextContent("$26.37");
  });
  it("click the place order button", async () => {
    function Location() {
      const location = useLocation();
      return (
        <>
          <div data-testid="url-path">{location.pathname}</div>
        </>
      );
    }
    render(
      <MemoryRouter>
        <PaymentSummary
          paymentSummary={paymentsummary}
          loadCart={loadCart}
        ></PaymentSummary>
        <Location />
      </MemoryRouter>
    );
    const placeOrderButton = screen.getByTestId("test-place-order-button");
    await user.click(placeOrderButton);
    expect(axios.post).toHaveBeenCalledWith("/api/orders");
    expect(loadCart).toHaveBeenCalled();
    expect(screen.getByTestId("url-path")).toHaveTextContent("/orders");
  });
});
