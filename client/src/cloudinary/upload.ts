export const imageUpload = async (image: File) => {
 const formData = new FormData();
 formData.append("file", image);
 formData.append("upload_preset", "drtyu0yv");
 try {
  const res = await fetch(
   "https://api.cloudinary.com/v1_1/dvjggxcc1/image/upload",
   {
    method: "post",
    body: formData,
   }
  );
  const urlData = await res.json();
  return urlData.url;
 } catch (err) {
  console.error(err);
 }
};
