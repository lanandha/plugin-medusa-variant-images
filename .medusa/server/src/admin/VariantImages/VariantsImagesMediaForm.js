import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useFieldArray, Controller } from "react-hook-form";
import FileUploadField from "./components/FileUploadField.js";
import { CheckCircleSolid, CircleDottedLine } from "@medusajs/icons";
import { clx } from "@medusajs/ui";
import { useRef } from "react";
const VariantsImagesMediaForm = ({
  form,
  type,
  setImageArr,
  imageArr
}) => {
  const { control, path, setValue } = form;
  const singleSelection = type === "thumbnail";
  const { fields, append } = useFieldArray({
    control,
    name: path("images")
  });
  const prevSelectedImage = useRef(
    fields == null ? void 0 : fields.findIndex((field) => field.info.selected)
  );
  const handleFilesChosen = (files) => {
    if (files.length) {
      const toAppend = files.map((file) => ({
        url: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
        nativeFile: file,
        info: {
          selected: false,
          selectedNumber: -1
        }
      }));
      append(toAppend);
    }
  };
  const handleImageSelected = (index) => {
    if (prevSelectedImage.current !== void 0 && singleSelection) {
      setValue(path(`images.${prevSelectedImage.current}.info`), {
        selected: false,
        selectedNumber: -1
      });
    }
    prevSelectedImage.current = index;
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex size-full flex-col-reverse lg:grid lg:grid-cols-[1fr_560px]", children: [
    fields.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "bg-ui-bg-subtle size-full overflow-auto divide-y", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col space-y-1", children: [
        /* @__PURE__ */ jsx("h2", { children: "Uploads" }),
        /* @__PURE__ */ jsx("p", { className: "txt-small text-ui-fg-subtle", children: type === "thumbnail" ? /* @__PURE__ */ jsx("span", { children: "Select an image to use as the variant thumbnail." }) : /* @__PURE__ */ jsx("span", { children: "Select images to use as the variant images." }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid h-fit auto-rows-auto grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 p-6", children: fields.map((field, index) => {
        return /* @__PURE__ */ jsx(
          Image,
          {
            image: field,
            index,
            form,
            onSelected: handleImageSelected,
            setImageArr,
            imageArr,
            type
          },
          field.id
        );
      }) })
    ] }) : /* @__PURE__ */ jsx("div", { className: "w-[70%]" }),
    /* @__PURE__ */ jsx("div", { className: "bg-ui-bg-base overflow-auto border-b px-6 py-4 lg:border-b-0 lg:border-l", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-1", children: [
        /* @__PURE__ */ jsx("h2", { children: "Media" }),
        /* @__PURE__ */ jsx("p", { className: "txt-small text-ui-fg-subtle", children: "Add images to your product media." })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        FileUploadField,
        {
          onFileChosen: handleFilesChosen,
          placeholder: "Drag and drop images, or click to upload.",
          multiple: true,
          filetypes: ["image/gif", "image/jpeg", "image/png", "image/webp"],
          className: "py-large"
        }
      ) })
    ] }) })
  ] });
};
const Image = ({
  image,
  index,
  form,
  onSelected,
  setImageArr,
  imageArr,
  type
}) => {
  const { control, path } = form;
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name: path(`images.${index}.info`),
      control,
      render: ({ field: { value, onChange } }) => {
        let selectedNumber = false;
        if (value.selected)
          selectedNumber = imageArr.findIndex((i) => i.url === image.url) + 1;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            className: clx(
              "relative shadow-elevation-card-rest hover:shadow-elevation-card-hover focus-visible:shadow-borders-focus bg-ui-bg-subtle-hover group aspect-square h-auto max-w-full overflow-hidden rounded-lg outline-none",
              {
                "bg-grey-500": value.selected
              }
            ),
            type: "button",
            onClick: () => {
              onChange({
                selectedNumber: -1,
                selected: !value.selected
              });
              if (!value.selected) {
                onSelected(index);
                setImageArr((prevArr) => prevArr == null ? void 0 : prevArr.concat(image));
              } else
                setImageArr(
                  (prevArr) => prevArr == null ? void 0 : prevArr.filter((i) => i.url !== image.url)
                );
            },
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: image.url,
                  alt: image.name || "Uploaded image",
                  className: clx(
                    "rounded-lg object-cover bg-clip-border w-full h-full duration-300 brightness-100",
                    {
                      "brightness-50": value.selected
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: clx(
                    "hidden group-hover:block absolute top-2 right-2 mix-blend-difference",
                    {
                      "block mix-blend-normal": value.selected,
                      "bg-neutral-950 flex rounded-full group-hover:flex flex-row items-center w-10 h-[19px] px-0.5": value.selected && type === "media"
                    }
                  ),
                  children: value.selected ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(CheckCircleSolid, { className: "text-green-300" }),
                    type === "media" && /* @__PURE__ */ jsx("span", { className: "text-xs text-white font-bold ml-1.5 mt-px", children: selectedNumber })
                  ] }) : /* @__PURE__ */ jsx(CircleDottedLine, {})
                }
              )
            ]
          }
        );
      }
    }
  );
};
export {
  VariantsImagesMediaForm as default
};
