import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { ArrowDownTray } from "@medusajs/icons";
import { clx } from "@medusajs/ui";
const defaultText = /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(ArrowDownTray, {}),
  /* @__PURE__ */ jsx("p", { className: "font-normal font-sans txt-medium", children: "Upload Images" })
] });
const FileUploadField = ({
  onFileChosen,
  filetypes,
  errorMessage,
  className,
  text = defaultText,
  placeholder = "",
  multiple = false
}) => {
  const inputRef = useRef(null);
  const [fileUploadError, setFileUploadError] = useState(false);
  const handleFileUpload = (e) => {
    const fileList = e.target.files;
    if (fileList) {
      onFileChosen(Array.from(fileList));
    }
  };
  const handleFileDrop = (e) => {
    setFileUploadError(false);
    e.preventDefault();
    const files = [];
    if (e.dataTransfer.items) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === "file") {
          const file = e.dataTransfer.items[i].getAsFile();
          if (file && filetypes.indexOf(file.type) > -1) {
            files.push(file);
          }
        }
      }
    } else {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        if (filetypes.indexOf(e.dataTransfer.files[i].type) > -1) {
          files.push(e.dataTransfer.files[i]);
        }
      }
    }
    if (files.length === 1) {
      onFileChosen(files);
    } else {
      setFileUploadError(true);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "button",
      onClick: () => {
        var _a;
        return (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.click();
      },
      onDrop: handleFileDrop,
      onDragOver: (e) => e.preventDefault(),
      className: clx(
        "bg-ui-bg-component border-ui-border-strong transition-fg group flex w-full flex-col items-center gap-y-2 rounded-lg border border-dashed p-8 hover:border-ui-border-interactive focus:border-ui-border-interactive focus:shadow-borders-focus outline-none focus:border-solid",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-ui-fg-subtle group-disabled:text-ui-fg-disabled flex items-center gap-x-2", children: text }),
        /* @__PURE__ */ jsx("p", { className: "font-normal font-sans txt-compact-small text-ui-fg-muted group-disabled:text-ui-fg-disabled", children: placeholder }),
        fileUploadError && /* @__PURE__ */ jsx("span", { className: "text-rose-60", children: errorMessage || "Please upload an image file" }),
        /* @__PURE__ */ jsx("input", { ref: inputRef, accept: filetypes.join(", "), multiple, type: "file", onChange: handleFileUpload, className: "hidden" })
      ]
    }
  );
};
export {
  FileUploadField as default
};
