import React from "react";
import { useForm } from "react-hook-form";

import Button from "./elements/Button";
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";

const AddressForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="md:w-2/3 md:mx-auto px-3 pt-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="pt-4 text-2xl md:text-center">Address for the delivery</h3>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          for="streetAddress"
        >
          Street Address
        </label>
      </div>
    </form>
  );
};

export default AddressForm;
