import * as yup from "yup";

export let formSchema = yup.object().shape({
  name: yup.string().max(15).min(3).required(),
  mail: yup.string().email(),
  city: yup.string().required(),
  locality: yup.string().max(20).min(3).required(),
  country: yup.string().required(),
  date: yup.string().required(),
  category: yup.string().required(),
  message: yup.string().min(300).max(4000).required(),
});
