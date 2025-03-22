import { jsxs, jsx } from "react/jsx-runtime";
import { Drawer, Heading, Button } from "@medusajs/ui";
import { Image } from "../widgets/VariantsImagesWidget.js";
function ViewImagesModal({ variantThumbnail, variantImages }) {
  return /* @__PURE__ */ jsxs(Drawer, { children: [
    /* @__PURE__ */ jsx(Drawer.Trigger, { asChild: true, children: /* @__PURE__ */ jsx("button", { className: "absolute top-0 left-0 w-full h-full rounded-md bg-neutral-900 bg-opacity-80 flex justify-center items-center duration-300 hover:border hover:border-ui-border-strong hover:bg-opacity-90", children: /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
      "+",
      variantImages.length - 2,
      " more"
    ] }) }) }),
    /* @__PURE__ */ jsxs(Drawer.Content, { "aria-describedby": void 0, children: [
      /* @__PURE__ */ jsx(Drawer.Header, { children: /* @__PURE__ */ jsx(Drawer.Title, { children: "View Variant Images" }) }),
      /* @__PURE__ */ jsxs(Drawer.Body, { className: "divide-y p-0 overflow-y-auto no-scrollbar", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 flex flex-col gap-y-2", children: [
          /* @__PURE__ */ jsx(Heading, { level: "h3", children: "Thumbnail" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-[repeat(auto-fill,minmax(125px,1fr))] gap-3", children: variantThumbnail ? /* @__PURE__ */ jsx(Image, { image: { url: variantThumbnail } }) : /* @__PURE__ */ jsx("div", { className: "w-full h-full aspect-square break-words text-ui-fg-muted text-[14px] text-center border rounded-md border-ui-border-strong border-dashed p-[15%] flex justify-center items-center", children: "No thumbnail" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 flex flex-col gap-y-2", children: [
          /* @__PURE__ */ jsxs(Heading, { level: "h3", children: [
            "Images ",
            /* @__PURE__ */ jsxs("span", { className: "text-ui-fg-muted text-sm", children: [
              "(",
              variantImages.length,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid h-fit auto-rows-auto grid-cols-[repeat(auto-fill,minmax(125px,1fr))] gap-3", children: variantImages.map((image, i) => /* @__PURE__ */ jsx(Image, { image }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Drawer.Footer, { children: /* @__PURE__ */ jsx(Drawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { children: "Okay" }) }) })
    ] })
  ] });
}
export {
  ViewImagesModal as default
};
