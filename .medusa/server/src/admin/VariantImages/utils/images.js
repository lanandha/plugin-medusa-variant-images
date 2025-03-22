import { fetchBackend } from "./util.js";
const splitImages = (images) => {
  const uploadImages = [];
  const existingImages = [];
  images.forEach((image) => {
    if (image.nativeFile) {
      uploadImages.push(image);
    } else {
      existingImages.push(image);
    }
  });
  return { uploadImages, existingImages };
};
const prepareImages = async (images) => {
  const { uploadImages, existingImages } = splitImages(images);
  let uploadedImgs = [];
  if (uploadImages.length > 0) {
    const files = uploadImages.map((i) => i.nativeFile);
    const form = new FormData();
    files.forEach((file) => {
      form.append("files", file, file.name);
    });
    const res = await fetchBackend("/admin/uploads", { body: form, method: "POST", files: true }).catch((err) => console.log(err));
    if (res) uploadedImgs = res.files;
  }
  return [...existingImages, ...uploadedImgs];
};
export {
  prepareImages
};
