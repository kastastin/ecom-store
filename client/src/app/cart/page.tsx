"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { ShippingFormInputs } from "@/types";
import CartSteps from "@/components/cart/CartSteps";
import CartItems from "@/components/cart/CartItems";
import CartDetails from "@/components/cart/CartDetails";
import ShippingForm from "@/components/forms/ShippingForm";

const CartPage = () => {
  const searchParams = useSearchParams();

  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();

  const activeStep = parseInt(searchParams.get("step") || "1");

  return (
    <div className="mt-12 flex size-full flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      <CartSteps activeStep={activeStep} />

      <div className="flex w-full flex-col gap-16 lg:flex-row">
        {/* Left container (Items, Shipping form, Payment form) */}
        <div className="flex w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-7/12">
          {activeStep === 1 && <CartItems />}
          {activeStep === 2 && (
            <ShippingForm setShippingForm={setShippingForm} />
          )}
          {activeStep === 3 && shippingForm && "Payment form"}
        </div>

        {/* Right container (Details) */}
        <CartDetails activeStep={activeStep} />
      </div>
    </div>
  );
};

export default CartPage;
