import { MemoryRouter } from "react-router";
import { it, describe, expect, vi, beforeEach } from "vitest";
import { PaymentSummary } from "./PaymentSummary";
import { screen, within, render } from "@testing-library/react";

describe("PaymmentSummary Component", () => {
  let loadCart;
  let paymentsummary;
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
    const payment1 = within(paymentSummaryrow[4]).getByTestId(
      "correct-dollar-amount"
    );
    expect(payment1).toHaveTextContent("$26.37");
  });
  it("click the place order button", () => {});
});
