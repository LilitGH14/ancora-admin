import HttpClient from "@/services/HttpClient";
import { ResponseGeneralType } from "@/types/types";

export const getGeneralData: () => Promise<ResponseGeneralType> = async () => {
  const response: ResponseGeneralType =
    await HttpClient.get(`/general/getMetaData`);
  return response;
};

export const updateGeneralData: (
  meta: any,
) => Promise<ResponseGeneralType> = async (meta) => {
  const response: ResponseGeneralType = await HttpClient.post(
    `/general/updateMetaData`,
    meta,
  );
  return response;
};
