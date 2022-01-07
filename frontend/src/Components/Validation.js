import * as yup from "yup";

export let formSchema = yup.object().shape({
  name: yup.string().max(15).min(3).required(),
  mail: yup.string().max(30).min(5).email(),
  city: yup.string().max(20).min(3).required(),
  locality: yup.string().max(20).min(3).required(),
  country: yup.string().max(10).min(2).required(),
  date: yup.date(),
  category: yup.string().required(),
  message: yup.string().min(30).max(4000).required(),
});
