import axios from "axios";
import { useNavigate } from "react-router";
import { formatMoney } from "../../utils/money";
export function PaymentSummary({ paymentSummary ,loadCart}) {
  const navigate = useNavigate();
  async function createOrder() {
    await axios.post('/api/orders');
    await loadCart();
    navigate('/orders')
  }
  return (
    <>
      <div className="payment-summary">
        <div className="payment-summary-title">Payment Summary</div>
        {paymentSummary && (
          <>
            <div className="payment-summary-row"data-testid="payment-summary-row">
              <div>Items ({paymentSummary.totalItems}):</div>
              <div className="payment-summary-money" data-testid="correct-dollar-amount">
                {formatMoney(paymentSummary.productCostCents)}
              </div>
            </div>

            <div className="payment-summary-row" data-testid="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money" data-testid="correct-dollar-amount">
                {formatMoney(paymentSummary.shippingCostCents)}
              </div>
            </div>

            <div className="payment-summary-row subtotal-row" data-testid="payment-summary-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money" data-testid="correct-dollar-amount">
                {formatMoney(paymentSummary.totalCostBeforeTaxCents)}
              </div>
            </div>

            <div className="payment-summary-row" data-testid="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money" data-testid="correct-dollar-amount">
                {formatMoney(paymentSummary.taxCents)}
              </div>
            </div>

            <div className="payment-summary-row total-row" data-testid="payment-summary-row">
              <div>Order total:</div>
              <div className="payment-summary-money" data-testid="correct-dollar-amount">
                {formatMoney(paymentSummary.totalCostCents)}
              </div>
            </div>

            <button className="place-order-button button-primary" onClick={createOrder}>
              Place your order
            </button>
          </>
        )}
      </div>
    </>
  );
}
