import HttpClient from "@/services/HttpClient";
import { ResponseGeneralType } from "@/types/types";

export const getSales: () => Promise<ResponseGeneralType> = async () => {
  const response: ResponseGeneralType =
    await HttpClient.get(`/payments/getSales`);
  return response;
};
