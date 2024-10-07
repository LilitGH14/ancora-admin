import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/common/Breadcrumbs/Breadcrumb";
import SalesTable from "@/components/Sales/Sales";

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto">
        <Breadcrumb pageName="Sales" />
        <SalesTable />
      </div>
    </DefaultLayout>
  );
};

export default CalendarPage;
