const packageData: any[] = [
  {
    name: "Free package",
    price: 0.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
  },
  {
    name: "Business Package",
    price: 99.0,
    invoiceDate: `Jan 13,2023`,
    status: "Unpaid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Pending",
  },
];

const SalesTable = () => {
  return (
    <div className="rounded-[10px] border border-stroke bg-white p-2 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                Package
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                Invoice date
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, index) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <h5 className="text-dark dark:text-white">
                    {packageItem.name}
                  </h5>
                  <p className="mt-[3px] text-body-sm font-medium">
                    ${packageItem.price}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white">
                    {packageItem.invoiceDate}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === packageData.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p
                    className={`inline-flex rounded-full px-3.5 py-1 text-body-sm font-medium`}
                  >
                    {packageItem.status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;
