import Breadcrumb from "@/components/common/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import PensTable from "@/components/Pens/Pens";

const ProductPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto">
        <Breadcrumb pageName="Pens" />
        <PensTable />
      </div>
    </DefaultLayout>
  );
};

export default ProductPage;
