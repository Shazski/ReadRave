import { ChangeEvent, useState } from "react";

const useForm = () => {
  const [formData, setFormData] = useState<any>(null);

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