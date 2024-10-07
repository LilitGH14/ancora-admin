import { useState } from "react";
import Modal from "../common/Modal/Modal";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { loginUser } from "@/services/auth";
import { setUser } from "@/redux/slices/authSlice";
import logo from "../../../public/images/logo/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PENS_HEADERS } from "@/constants/tablesHeaders";

const packageData: any[] = [
  {
    id: "kbkbhb2131",
    name: "Free package",
    description: "hvgvg  gvgv hgvgv g v ghjvg",
    price: 0.0,
    category: "man",
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
    images: ["hjvhj"],
    link: "hjvhvjvhjvjhvj",
    limited_id: 2020,
  },
];

const PensTable = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [openFormModal, setOpenFormModal] = useState(false);

  const { handleSubmit, handleBlur, handleChange, values } = useFormik({
    initialValues: {
      name: "",
      price: 0,
    },
    onSubmit: (values) => {
      loginUser(values).then((res) => {
        if (res.ResponseCode === 200) {
          router.push("/");

          dispatch(setUser(res.ResponseData));
          localStorage.setItem("token", res.ResponseData.token);
        }
      });
    },
  });

  const openModal = () => {
    setOpenFormModal((prev) => !prev);
  };

  const updatePensData = (pen: any) => {};

  const deletePen = (id: any) => {};

  return (
    <>
      <div className="rounded-[10px] border border-stroke bg-white p-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="mb-8 flex justify-end">
          <button
            onClick={openModal}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Add new
          </button>
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                {PENS_HEADERS?.map((header) => (
                  <th
                    className={`min-w-[${header.inpWidth}] font-small px-4 py-4 text-sm text-dark dark:text-white`}
                    key={header.name}
                  >
                    {header.name.toUpperCase().replaceAll("_", " ")}
                  </th>
                ))}
                <th
                  className={`font-small min-w-[150px] px-4 py-4 text-sm text-dark dark:text-white`}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.map((packageItem, index) => (
                <tr key={packageItem[index]}>
                  {PENS_HEADERS?.map((header) => (
                    <td
                      key={packageItem[header.name]}
                      className={`border-[#eee] px-4 py-4 text-sm dark:border-dark-3`}
                    >
                      <h5 className="text-dark dark:text-white">
                        {packageItem[header.name]}
                      </h5>
                    </td>
                  ))}
                  <td className="flex border-[#eee] px-4 py-4 dark:border-dark-3">
                    <button
                      onClick={() => updatePensData(packageItem)}
                      className="mr-2 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-500 p-2 font-medium text-white transition hover:bg-blue-700 hover:text-white"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deletePen(packageItem.id)}
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg p-2 font-medium text-blue-500 outline outline-2 outline-blue-500 transition hover:bg-slate-100"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={openFormModal} onClose={openModal}>
        <form onSubmit={handleSubmit} className="w-[400px]">
          <div className="mb-5 flex justify-center">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Description"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type="number"
                placeholder="Price"
                name="price"
                value={values.price}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type="number"
                placeholder="Category"
                name="price"
                value={values.price}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type="number"
                placeholder="Limited collection id"
                name="price"
                value={values.price}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type="file"
                placeholder="Image"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4.5">
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
            >
              Add
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default PensTable;
