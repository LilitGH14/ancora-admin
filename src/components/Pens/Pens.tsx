import { useEffect, useState } from "react";
import Modal from "../common/Modal/Modal";
import { PENS_HEADERS } from "@/constants/tablesHeaders";
import { deleteProduct, getProducts } from "@/services/products";
import Link from "next/link";
import NewPen from "./NewPen";
import { ProductStatusInStock } from "@/types/product";

const PensTable = () => {
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>({
    name: "",
    description: "",
    price: null,
    category: 0,
    status: 0,
    images: [],
    link: "",
    limited_id: 0,
  });

  const trigerModal = () => {
    setOpenFormModal((prev) => !prev);
  };

  const addNewPen = () => {
    setSelectedProduct({
      name: "",
      description: "",
      price: null,
      category: 0,
      status: 0,
      images: [],
      link: "",
      limited_id: 0,
    });
    trigerModal();
  };

  const updatePensData = (product: any) => {
    setSelectedProduct(product);
    trigerModal();
  };

  const deletePen = (id: any) => {
    deleteProduct(id).then((res) => {
      if (res.ResponseCode === 200) {
        getProducts().then((productRes) => {
          if (productRes.ResponseCode === 200) {
            setProducts(productRes.ResponseData);
          }
        });
      }
    });
  };

  useEffect(() => {
    !openFormModal &&
      getProducts().then((res) => {
        if (res.ResponseCode === 200) {
          setProducts(res.ResponseData);
        }
      });
  }, [openFormModal]);

  return (
    <>
      <div className="rounded-[10px] border border-stroke bg-white p-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="mb-8 flex justify-end">
          <button
            onClick={addNewPen}
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
                    className={`min-w-[${header.inpWidth}] w-[${header.inpWidth}] max-w-[${header.inpWidth}] font-small px-4 py-4 text-sm text-dark dark:text-white`}
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
              {products?.map((packageItem, index) => (
                <tr key={`tr-${index}`}>
                  {PENS_HEADERS?.map((header) => (
                    <td
                      key={`td-pen-${header.name}`}
                      className={`border-[#eee] px-4 py-4 text-sm dark:border-dark-3`}
                    >
                      {header.name !== "link" ? (
                        <h5 className="text-dark dark:text-white">
                          {header.name === "status" ? (
                            <span
                              className={`rounded-lg p-2 ${packageItem[header.name] === 0 ? " bg-green-200" : " bg-blue-100 "}`}
                            >
                              {ProductStatusInStock[packageItem[header.name]]}
                            </span>
                          ) : (
                            packageItem[header.name]
                          )}
                        </h5>
                      ) : (
                        <Link href={packageItem[header.name]} target="_blank">
                          <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                          </svg>
                        </Link>
                      )}
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
      <Modal isOpen={openFormModal} onClose={trigerModal}>
        <NewPen close={trigerModal} product={selectedProduct} />
      </Modal>
    </>
  );
};

export default PensTable;
