import { ChangeEvent, useState } from "react";
import { IBook } from "../Interfaces/Ibook";

const useForm = () => {
  const [formData, setFormData] = useState<IBook>({ author: "", description: "", title: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    setFormData({
      ...formData, [name]: value
    })
  }

  return {
    formData,
    handleChange
  }
}

export default useForm