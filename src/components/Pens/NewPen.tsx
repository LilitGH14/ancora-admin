import { useFormik } from "formik";
import logo from "../../../public/images/logo/logo.png";
import Image from "next/image";
import { addProduct, updateProduct } from "@/services/products";
import { product_schema } from "@/utils/validation-scheme";
import { useEffect } from "react";

interface NewPenProps {
  close: () => void;
  product: any;
}

const NewPen = ({ close, product }: NewPenProps) => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    setValues,
    values,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: product,
    validationSchema: product_schema,
    onSubmit: (values) => {
      !!product?.id ? updateProduct(values, product.id) : addProduct(values);
      close();
      resetForm();
    },
  });

  useEffect(() => {
    product && setValues(product);

    return () => {
      resetForm();
    };
  }, [product, resetForm, setValues]);

  return (
    <form onSubmit={handleSubmit} className="overflow-hidden">
      <div className="mb-5 flex justify-center">
        <Image src={logo} alt="Logo" width={150} />
      </div>
      <div className="mb-2 mt-2 max-h-[400px] overflow-auto">
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              className="mb-3 w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
            {touched.name && errors.name && (
              <span className="absolute left-0 top-[55px] text-sm text-red-500">
                {errors.name as any}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={values.description}
              onBlur={handleBlur}
              onChange={handleChange}
              className="mb-3 w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
            {touched.description && errors.description && (
              <span className="absolute left-0 top-[55px] text-sm text-red-500">
                {errors.description as any}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={values.price ?? "Price"}
              onBlur={handleBlur}
              onChange={handleChange}
              className="mb-3 w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
            {touched.price && errors.price && (
              <span className="absolute left-0 top-[55px] text-sm text-red-500">
                {errors.price as any}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <select
              name="category"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.category}
              className="mb-3 w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            >
              <option value={0}>Man</option>
              <option value={1}>Woman</option>
            </select>
            {touched.category && errors.category && (
              <span className="absolute left-0 top-[55px] text-sm text-red-500">
                {errors.category as any}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Link"
              name="link"
              value={values.link ?? "Link"}
              onBlur={handleBlur}
              onChange={handleChange}
              className="mb-3 w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
            {touched.link && errors.link && (
              <span className="absolute left-0 top-[55px] text-sm text-red-500">
                {errors.link as any}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <input
              type="number"
              placeholder="Limited collection id"
              name="limited_id"
              value={values.limited_id ?? "Limited collection id"}
              onBlur={handleBlur}
              onChange={handleChange}
              className="mb-3 w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
            {touched.limited_id && errors.limited_id && (
              <span className="absolute left-0 top-[55px] text-sm text-red-500">
                {errors.limited_id as any}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <input
              type="file"
              placeholder="Image"
              name="images"
              multiple
              onChange={(event) => {
                setFieldValue(
                  "images",
                  Object.values(event.target.files as any),
                );
              }}
              className="mb-3 w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
            {touched.images && errors.images && (
              <span className="absolute left-0 top-[55px] text-sm text-red-500">
                {errors.images as any}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mb-4.5">
        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
        >
          {!!product?.id ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default NewPen;
