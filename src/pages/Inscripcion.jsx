import { useState } from "react";
import "./Inscripcion.css";

export default function Inscripcion() {

  const [paymentMethod, setPaymentMethod] = useState("mercadopago");

  const paymentLinks = {
    mercadopago: "https://mpago.la/TU_LINK",
    stripe: "https://buy.stripe.com/TU_LINK",
    paypal: "https://paypal.me/TU_LINK",
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h1>Inscripción al Curso</h1>

        <p>
          Completa tus datos y selecciona tu método de pago.
        </p>

        <form className="register-form">

          <input
            type="text"
            placeholder="Nombre completo"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
          />

          <input
            type="text"
            placeholder="Número de WhatsApp"
          />

          <div className="payment-methods">

            <button
              type="button"
              className={
                paymentMethod === "mercadopago"
                  ? "active"
                  : ""
              }
              onClick={() => setPaymentMethod("mercadopago")}
            >
              Mercado Pago
            </button>

            <button
              type="button"
              className={
                paymentMethod === "stripe"
                  ? "active"
                  : ""
              }
              onClick={() => setPaymentMethod("stripe")}
            >
              Stripe
            </button>

            <button
              type="button"
              className={
                paymentMethod === "paypal"
                  ? "active"
                  : ""
              }
              onClick={() => setPaymentMethod("paypal")}
            >
              PayPal
            </button>

          </div>

          <a
            href={paymentLinks[paymentMethod]}
            target="_blank"
            rel="noreferrer"
            className="pay-btn"
          >
            Continuar al pago
          </a>

        </form>

      </div>

    </div>
  );
}