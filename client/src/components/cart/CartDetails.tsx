import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type CartDetailsProps = {
  activeStep: number;
};

const CartDetails = ({ activeStep }: CartDetailsProps) => {
  const router = useRouter();

  return (
    <div className="flex h-max w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-5/12">
      <h2 className="font-semibold">Cart Details</h2>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-medium">$100</p>
        </div>

        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Discount(10%)</p>
          <p className="font-medium text-red-400">-$10</p>
        </div>

        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Shipping Fee</p>
          <p className="font-medium">$10</p>
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between">
          <p className="font-semibold text-gray-800">Total</p>
          <p className="font-medium">$100</p>
        </div>
      </div>

      {activeStep === 1 && (
        <button
          onClick={() => router.push("/cart?step=2", { scroll: false })}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-800 p-2 text-white transition-all duration-300 hover:bg-gray-900"
        >
          Continue
          <ArrowRight className="size-3" />
        </button>
      )}
    </div>
  );
};

export default CartDetails;
