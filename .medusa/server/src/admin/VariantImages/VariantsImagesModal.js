import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FocusModal, Button } from "@medusajs/ui";
import { nestedForm } from "./utils/nestedForm.js";
import { prepareImages } from "./utils/images.js";
import VariantsImagesMediaForm from "./VariantsImagesMediaForm.js";
import { fetchBackend, sortByTitle } from "./utils/util.js";
const VariantsImagesModal = ({ variant, open, onClose, product, type, settings, notify }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const form = useForm({
    defaultValues: getDefaultValues(product, variant, type)
  });
  const [imageArr, setImageArr] = useState([]);
  //! When removing an image, it resets to the default structure
  const [variants, setVariants] = useState(variant);
  const {
    formState: { isDirty },
    handleSubmit,
    reset
  } = form;
  useEffect(() => {
    reset(getDefaultValues(product, variant, type));
    setImageArr(
      getDefaultValues(product, variant, type).media.images.filter((i) => i.info.selected).sort((a, b) => a.info.selectedNumber - b.info.selectedNumber)
    );
  }, [reset, product, variant, type]);
  useEffect(() => {
    var _a;
    if (settings.baseOptionUpload.enabled) {
      const _variants = (_a = product.variants) == null ? void 0 : _a.filter(
        (v) => {
          var _a2, _b, _c, _d;
          return ((_b = (_a2 = v.options) == null ? void 0 : _a2.find((o) => o.option_id === settings.baseOptionUpload.option)) == null ? void 0 : _b.value) === ((_d = (_c = variant.options) == null ? void 0 : _c.find((o) => o.option_id === settings.baseOptionUpload.option)) == null ? void 0 : _d.value);
        }
      );
      if (_variants == null ? void 0 : _variants.length) setVariants(_variants);
    }
  }, []);
  const onReset = () => {
    reset(getDefaultValues(product, variant, type));
    onClose();
  };
  const onSubmit = handleSubmit(async (data) => {
    var _a;
    setIsUpdating(true);
    let preppedImages = [];
    try {
      preppedImages = await prepareImages(data.media.images);
    } catch (error) {
      notify.error("Error", { description: "Something went wrong while trying to upload images." });
      console.error("Something went wrong while trying to upload images.");
      return;
    }
    const urls = preppedImages.map((image) => ({ url: image.url }));
    await fetchBackend(`/admin/products/${product.id}`, { body: { images: urls }, method: "POST" });
    let updatedVariantList;
    if (type === "thumbnail") {
      const thumbnail = ((_a = data.media.images.find((image) => image.info.selected)) == null ? void 0 : _a.url) || null;
      if (Array.isArray(variants)) {
        await fetchBackend(`/admin/products/${product.id}/variants/batch`, {
          body: {
            update: variants.map((v) => ({
              id: v.id,
              metadata: { ...v.metadata, thumbnail }
            }))
          },
          method: "POST"
        });
        updatedVariantList = await fetchBackend(`/admin/products/${product.id}/variants?order=title`).then((res) => res == null ? void 0 : res.variants);
      } else
        updatedVariantList = await fetchBackend(`/admin/products/${product.id}/variants/${variants.id}`, {
          body: {
            metadata: {
              ...variants.metadata,
              thumbnail
            }
          },
          method: "POST"
        }).then((res) => {
          var _a2, _b, _c;
          return (_c = (_b = (_a2 = res == null ? void 0 : res.product) == null ? void 0 : _a2.variants) == null ? void 0 : _b.sort) == null ? void 0 : _c.call(_b, sortByTitle);
        });
    } else {
      const images = data.media.images.map(({ info: { selected } }, i) => selected && urls[i]).filter(Boolean).sort((a, b) => imageArr.findIndex((i) => a.url === i.url) - imageArr.findIndex((i) => b.url === i.url));
      if (Array.isArray(variants)) {
        await fetchBackend(`/admin/products/${product.id}/variants/batch`, {
          body: {
            update: variants.map((v) => ({
              id: v.id,
              metadata: { ...v.metadata, images }
            }))
          },
          method: "POST"
        });
        updatedVariantList = await fetchBackend(`/admin/products/${product.id}/variants?order=title`).then((res) => res == null ? void 0 : res.variants);
      } else {
        updatedVariantList = await fetchBackend(`/admin/products/${product.id}/variants/${variants.id}`, {
          body: {
            metadata: {
              ...variants.metadata,
              images
            }
          },
          method: "POST"
        }).then((res) => {
          var _a2, _b, _c;
          return (_c = (_b = (_a2 = res == null ? void 0 : res.product) == null ? void 0 : _a2.variants) == null ? void 0 : _b.sort) == null ? void 0 : _c.call(_b, sortByTitle);
        });
      }
    }
    onClose({ ...product, variants: updatedVariantList || null });
    setIsUpdating(false);
  });
  return /* @__PURE__ */ jsx(FocusModal, { open, onOpenChange: onReset, modal: true, children: /* @__PURE__ */ jsxs(FocusModal.Content, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ jsx(FocusModal.Title, { asChild: true, children: /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Variant Images" }) }),
    /* @__PURE__ */ jsx(FocusModal.Header, { children: /* @__PURE__ */ jsx(Button, { variant: "primary", type: "submit", disabled: !isDirty, isLoading: isUpdating, form: "variant-images-form", children: "Save and close" }) }),
    /* @__PURE__ */ jsx(FocusModal.Body, { children: /* @__PURE__ */ jsx("form", { onSubmit, id: "variant-images-form", className: "h-full w-full", children: /* @__PURE__ */ jsx(VariantsImagesMediaForm, { form: nestedForm(form, "media"), type, setImageArr, imageArr }) }) })
  ] }) });
};
const getDefaultValues = (product, variant, type) => {
  var _a;
  const images = ((_a = product == null ? void 0 : product.images) == null ? void 0 : _a.map((image) => {
    var _a2, _b, _c, _d, _e;
    const isSelected = type === "thumbnail" ? (
      // @ts-ignore
      ((_a2 = variant == null ? void 0 : variant.metadata) == null ? void 0 : _a2.thumbnail) === image.url
    ) : (
      // @ts-ignore
      ((_c = (_b = variant == null ? void 0 : variant.metadata) == null ? void 0 : _b.images) == null ? void 0 : _c.some((vImage) => vImage.url === image.url)) ?? false
    );
    const selectedNumber = type === "media" && // @ts-ignore
    ((_e = (_d = variant == null ? void 0 : variant.metadata) == null ? void 0 : _d.images) == null ? void 0 : _e.findIndex((vImage) => vImage.url === image.url));
    return {
      url: image.url,
      info: {
        selectedNumber: isSelected && selectedNumber + 1 || -1,
        selected: isSelected
      }
    };
  })) || [];
  return {
    media: {
      images
    }
  };
};
export {
  VariantsImagesModal as default
};
