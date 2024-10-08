import { object, string, number } from "yup";

export const product_schema = object().shape({
  name: string().required().label("Name"),
  description: string().required().label("Description"),
  link: string().required().label("Link"),
  price: number().required().min(1).label("Price"),
  category: string().required().label("Category"),
  status: number().required().label("Status"),
  limited_id: number().required().label("Limited_id"),
});

export const meta_schema = object().shape({
  title: string().required().label("Title"),
  description: string().required().label("Description"),
  keywords: string().required().label("Keywords"),
});
