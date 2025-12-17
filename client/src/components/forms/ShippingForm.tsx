import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { ShippingFormInputs, shippingFormSchema } from "@/types";

type ShippingFormProps = {
  setShippingForm: (data: ShippingFormInputs) => void;
};

const ShippingForm = ({ setShippingForm }: ShippingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs font-medium text-gray-500">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Bob Builder"
          {...register("name")}
          className="border-b border-gray-200 py-2 text-sm outline-none"
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs font-medium text-gray-500">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="bob.builder@gmail.com"
          {...register("email")}
          className="border-b border-gray-200 py-2 text-sm outline-none"
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs font-medium text-gray-500">
          Phone
        </label>
        <input
          id="phone"
          type="text"
          placeholder="123456789"
          {...register("phone")}
          className="border-b border-gray-200 py-2 text-sm outline-none"
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Address */}
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs font-medium text-gray-500">
          Address
        </label>
        <input
          id="address"
          type="text"
          placeholder="121 Main St"
          {...register("address")}
          className="border-b border-gray-200 py-2 text-sm outline-none"
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      {/* City */}
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs font-medium text-gray-500">
          City
        </label>
        <input
          id="city"
          type="text"
          placeholder="Miami"
          {...register("city")}
          className="border-b border-gray-200 py-2 text-sm outline-none"
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-800 p-2 text-white transition-all duration-300 hover:bg-gray-900"
      >
        Continue
        <ArrowRight className="size-3" />
      </button>
    </form>
  );
};

export default ShippingForm;
