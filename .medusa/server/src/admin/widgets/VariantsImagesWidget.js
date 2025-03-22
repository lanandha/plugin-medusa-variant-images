import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { TooltipProvider, Toaster, Heading, DropdownMenu, Button, Tooltip, Table, toast } from "@medusajs/ui";
import { EllipsisHorizontal, PencilSquare, ThumbnailBadge } from "@medusajs/icons";
import VariantsImagesModal from "../VariantImages/VariantsImagesModal.js";
import { defineWidgetConfig } from "@medusajs/admin-sdk";
import ViewImagesModal from "../VariantImages/ViewImagesModal.js";
/* empty css                          */
import WidgetSettingsModal from "../VariantImages/WidgetSettingsModal.js";
import { fetchBackend, paginationInformation } from "../VariantImages/utils/util.js";
import { omit } from "lodash-es";
import { useTimer } from "../VariantImages/hooks/useTimer.js";
const VariantsImagesWidget = ({ data }) => {
  var _a;
  const [openedVariant, setOpenedVariant] = useState(null);
  const [openedDialogType, setOpenedDialogType] = useState(null);
  const [settings, setSettings] = useState({
    baseOptionUpload: { enabled: false }
  });
  const [options, setOptions] = useState();
  const [product, setProduct] = useState(data);
  const updateData = async ({ variants = false, options: options2 = false, product: _product = false }) => {
    if (variants) {
      await fetchBackend(`/admin/products/${product.id}/variants?order=title`).then((res) => {
        if (!res) return;
        setProduct((prevProd) => ({ ...prevProd, variants: res.variants }));
      });
    }
    if (options2) {
      await fetchBackend(`/admin/products/${product.id}/options`).then((res) => {
        if (!res) return;
        setOptions(res.product_options);
      });
    }
    if (_product) {
      await fetchBackend(`/admin/products/${product.id}?fields=-variants`).then((res) => {
        if (!res) return;
        setProduct((prevProd) => ({ ...prevProd, ...res.product }));
      });
    }
  };
  const { fetching, timeLeft, restart } = useTimer({
    length: 6e4,
    onComplete: async () => await updateData({ options: true, product: true, variants: true }),
    recursive: true
  });
  useEffect(() => {
    fetchBackend(`/admin/variant-images-settings/${product.id}`).then((res) => {
      if (!res) return;
      setSettings((_current) => ({
        ..._current,
        baseOptionUpload: {
          enabled: res.base_option_enabled,
          option: res.base_option_id || void 0
        }
      }));
    });
  }, []);
  const handleClose = (_product) => {
    setOpenedVariant(null);
    setOpenedDialogType(null);
    if (_product) setProduct(_product);
  };
  const paginationOptions = paginationInformation(product.variants);
  const { currentVariants } = paginationOptions;
  return /* @__PURE__ */ jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsxs("div", { className: "divide-y shadow-elevation-card-rest bg-ui-bg-base w-full rounded-lg divide-y p-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between items-center px-6 py-4", children: [
        /* @__PURE__ */ jsx(Heading, { level: "h1", className: "flex items-center justify-between gap-x-4 ", children: /* @__PURE__ */ jsx("div", { children: "Variants Images" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-x-4", children: /* @__PURE__ */ jsx(WidgetSettingsModal, { settings, setSettings, product, options }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-[repeat(auto-fill,minmax(225px,1fr))] gap-3 px-6 py-4", children: currentVariants == null ? void 0 : currentVariants.map((variant) => {
        var _a2, _b;
        const variantImages = (_a2 = variant.metadata) == null ? void 0 : _a2.images;
        const variantThumbnail = (_b = variant.metadata) == null ? void 0 : _b.thumbnail;
        return /* @__PURE__ */ jsxs("div", { className: "w-full p-3 border rounded-md flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-3 border bg-ui-bg-base rounded-full text-center relative py-[1.5px]", children: [
            /* @__PURE__ */ jsx("div", { className: "inter-base-semibold flex-1", children: variant.title }),
            /* @__PURE__ */ jsxs(DropdownMenu, { children: [
              /* @__PURE__ */ jsx(DropdownMenu.Trigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "transparent", className: "rounded-full absolute right-0 top-0", children: /* @__PURE__ */ jsx(EllipsisHorizontal, {}) }) }),
              /* @__PURE__ */ jsxs(DropdownMenu.Content, { children: [
                /* @__PURE__ */ jsxs(
                  DropdownMenu.Item,
                  {
                    onClick: () => {
                      setOpenedVariant(variant);
                      setOpenedDialogType("thumbnail");
                    },
                    className: "gap-x-2",
                    children: [
                      /* @__PURE__ */ jsx(PencilSquare, { className: "text-ui-fg-subtle" }),
                      "Edit Thumbnail"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  DropdownMenu.Item,
                  {
                    onClick: () => {
                      setOpenedVariant(variant);
                      setOpenedDialogType("media");
                    },
                    className: "gap-x-2",
                    children: [
                      /* @__PURE__ */ jsx(PencilSquare, { className: "text-ui-fg-subtle" }),
                      "Edit Media"
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 grid-rows-2 items-center gap-3 h-full w-full", children: [
            variantThumbnail ? /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", children: [
              /* @__PURE__ */ jsx("img", { src: variantThumbnail, alt: "Thumbnail", className: "object-cover bg-clip-border w-full h-full rounded-md aspect-square" }),
              /* @__PURE__ */ jsx(Tooltip, { content: "Thumbnail", children: /* @__PURE__ */ jsx(ThumbnailBadge, { className: "absolute top-2 left-2" }) })
            ] }) : /* @__PURE__ */ jsx("div", { className: "w-full h-full aspect-square break-words text-ui-fg-muted text-[14px] text-center border rounded-md border-ui-border-strong border-dashed p-[15%] flex justify-center items-center", children: "No thumbnail" }),
            (variantImages == null ? void 0 : variantImages.length) ? variantImages.length === 3 ? variantImages.map(
              (image, i) => /* @__PURE__ */ jsx(Image, { image }, i)
            ) : variantImages.slice(0, 3).map(
              (image, i) => /* @__PURE__ */ jsxs("div", { className: "w-full h-full relative", children: [
                /* @__PURE__ */ jsx(Image, { image }),
                i === 2 && /* @__PURE__ */ jsx(ViewImagesModal, { variantImages, variantThumbnail })
              ] }, i)
            ) : Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-full h-full aspect-square break-words text-ui-fg-muted text-[14px] text-center border rounded-md border-ui-border-strong border-dashed p-[20%] flex justify-center items-center",
                children: "No images"
              },
              i
            ))
          ] })
        ] }, variant.id);
      }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Table.Pagination, { count: ((_a = product.variants) == null ? void 0 : _a.length) || 0, ...omit(paginationOptions, "currentVariants") }) })
    ] }),
    openedDialogType && /* @__PURE__ */ jsx(
      VariantsImagesModal,
      {
        product,
        variant: openedVariant,
        open: !!openedVariant,
        onClose: handleClose,
        type: openedDialogType,
        settings,
        notify: toast
      }
    )
  ] });
};
const Image = ({ image }) => /* @__PURE__ */ jsx("img", { src: image.url, alt: "Uploaded image", className: "object-cover aspect-square w-full h-full bg-clip-border rounded-md" });
const config = defineWidgetConfig({
  zone: "product.details.after"
});
export {
  Image,
  config,
  VariantsImagesWidget as default
};
