"use client";
import Breadcrumb from "@/components/common/Breadcrumbs/Breadcrumb";
import GeneralTable from "@/components/General/General";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

const ProductPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto">
        <Breadcrumb pageName="General" />
        <GeneralTable />
      </div>
    </DefaultLayout>
  );
};

export default ProductPage;
