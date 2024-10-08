import { useFormik } from "formik";
import logo from "../../../public/images/logo/logo.png";
import Image from "next/image";
import { meta_schema } from "@/utils/validation-scheme";
import { useEffect } from "react";
import { updateGeneralData } from "@/services/general";

interface NewMetasProps {
  close: () => void;
  update: () => void;
  meta: any;
}

const NewMetas = ({ close, update, meta }: NewMetasProps) => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
    setValues,
    resetForm,
  } = useFormik({
    initialValues: meta,
    validationSchema: meta_schema,
    onSubmit: (values) => {
      updateGeneralData(values);
      update();
      close();
    },
  });

  useEffect(() => {
    meta && setValues(meta);

    return () => {
      resetForm();
    };
  }, [meta, resetForm, setValues]);

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
              placeholder="Title"
              name="title"
              value={values?.title}
              onBlur={handleBlur}
              onChange={handleChange}
              className="mb-3 w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
            {touched.title && errors.title && (
              <span className="absolute left-0 top-[55px] text-sm text-red-500">
                {errors.title as any}
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
              value={values?.description}
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
            <textarea
              placeholder="Keywords"
              name="keywords"
              value={values?.keywords}
              onBlur={handleBlur}
              onChange={handleChange}
              className="mb-3 w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
            />
            {touched.keywords && errors.keywords && (
              <span className="absolute left-0 top-[55px] text-sm text-red-500">
                {errors.keywords as any}
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
          Update
        </button>
      </div>
    </form>
  );
};

export default NewMetas;
