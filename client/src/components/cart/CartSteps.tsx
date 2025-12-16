import { CartStepType } from "@/types";

const steps: CartStepType[] = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Address" },
  { id: 3, title: "Payment Method" },
];

type CartStepsProps = {
  activeStep: number;
};

const CartSteps = ({ activeStep }: CartStepsProps) => {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
      {steps.map(({ id, title }) => {
        const isActiveStep = id === activeStep;

        return (
          <div
            key={id}
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              isActiveStep ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`flex size-6 items-center justify-center rounded-full p-4 text-white ${
                isActiveStep ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {id}
            </div>
            <p
              className={`text-sm font-medium ${
                isActiveStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CartSteps;
