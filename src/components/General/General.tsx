"use client";
import { META_HEADERS } from "@/constants/tablesHeaders";
import { getGeneralData } from "@/services/general";
import { useEffect, useState } from "react";
import Modal from "../common/Modal/Modal";
import NewMetas from "./NewMetas";

const GeneralTable = () => {
  const [meta, setMeta] = useState<any[]>([]);
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);

  const trigerModal = () => {
    setOpenFormModal((prev) => !prev);
  };

  const updateMeta = () => {
    setOpenFormModal(false);
    getGeneralData().then((res) => {
      if (res.ResponseCode === 200) {
        setMeta(res.ResponseData);
      }
    });
  };

  useEffect(() => {
    getGeneralData().then((res) => {
      if (res.ResponseCode === 200) {
        setMeta(res.ResponseData);
      }
    });
  }, []);

  return (
    <>
      <div className="rounded-[10px] border border-stroke bg-white p-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                {META_HEADERS?.map((header) => (
                  <th
                    className={`min-w-[${header.inpWidth}] w-[${header.inpWidth}] max-w-[${header.inpWidth}] font-small px-4 py-4 text-sm text-dark dark:text-white`}
                    key={`th-general-${header.name}`}
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
              {meta?.map((saleItem, index) => (
                <tr key={`tr-general-${saleItem[index]}`}>
                  {META_HEADERS?.map((header) => (
                    <td
                      key={`td-general-${header.name}`}
                      className={`border-[#eee] px-4 py-4 text-sm dark:border-dark-3`}
                    >
                      <h5 className="text-dark dark:text-white">
                        {header.name === "salesDate"
                          ? new Date(saleItem[header.name])?.toDateString()
                          : saleItem[header.name]}
                      </h5>
                    </td>
                  ))}
                  <td className="flex border-[#eee] px-4 py-4 dark:border-dark-3">
                    <button
                      onClick={() => trigerModal()}
                      className="mr-2 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-500 p-2 font-medium text-white transition hover:bg-blue-700 hover:text-white"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={openFormModal} onClose={trigerModal}>
        <NewMetas
          close={() => setOpenFormModal(false)}
          update={updateMeta}
          meta={meta[0]}
        />
      </Modal>
    </>
  );
};

export default GeneralTable;
