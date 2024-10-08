import HttpClient from "@/services/HttpClient";
import { ResponseGeneralType } from "@/types/types";

export const getProducts: () => Promise<ResponseGeneralType> = async () => {
  const response: ResponseGeneralType = await HttpClient.get(
    `/products/getProducts`,
  );
  return response;
};

export const addProduct: (
  product: any,
) => Promise<ResponseGeneralType> = async (product) => {
  const response: ResponseGeneralType = await HttpClient.post(
    `/products/addProduct`,
    product,
  );
  return response;
};

export const deleteProduct: (
  productId: any,
) => Promise<ResponseGeneralType> = async (productId) => {
  const response: ResponseGeneralType = await HttpClient.post(
    `/products/deleteProduct/${productId}`,
  );
  return response;
};

export const updateProduct: (
  id: any,
  product: any,
) => Promise<ResponseGeneralType> = async (product, id) => {
  const response: ResponseGeneralType = await HttpClient.post(
    `/products/updateProduct/${id}`,
    product,
  );
  return response;
};
