import React, { useState } from "react";
import CotizacionConfirm from "../components/cotizaciones/CotizacionConfirm";
import CotizacionForm from "../components/cotizaciones/CotizacionForm";

const Cotizaciones = () => {
  const [step, setStep] = useState(0);
  const [cotizacion, setCotizacion] = useState(null);

  return (
    <div className="cotizacion-container">
      {step === 0 ? (
        <CotizacionForm setStep={setStep} setCotizacion={setCotizacion} />
      ) : (
        <CotizacionConfirm cotizacion={cotizacion} />
      )}
    </div>
  );
};

export default Cotizaciones;
