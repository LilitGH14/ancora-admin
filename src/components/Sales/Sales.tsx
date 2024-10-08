"use client";
import { SALES_HEADERS } from "@/constants/tablesHeaders";
import { getSales } from "@/services/sales";
import { useEffect, useState } from "react";

const SalesTable = () => {
  const [sales, setSales] = useState<any[]>([]);

  useEffect(() => {
    getSales().then((res) => {
      if (res.ResponseCode === 200) {
        setSales(res.ResponseData);
      }
    });
  }, []);

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              {SALES_HEADERS?.map((header) => (
                <th
                  className={`min-w-[${header.inpWidth}] w-[${header.inpWidth}] max-w-[${header.inpWidth}] font-small px-4 py-4 text-sm text-dark dark:text-white`}
                  key={`th-sales-${header.name}`}
                >
                  {header.name.toUpperCase().replaceAll("_", " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sales?.map((saleItem, index) => (
              <tr key={`tr-sales-${saleItem[index]}`}>
                {SALES_HEADERS?.map((header) => (
                  <td
                    key={`td-sales-${header.name}`}
                    className={`border-[#eee] px-4 py-4 text-sm dark:border-dark-3`}
                  >
                    <h5 className="text-dark dark:text-white">
                      {header.name === "salesDate"
                        ? new Date(saleItem[header.name])?.toDateString()
                        : saleItem[header.name]}
                    </h5>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;
