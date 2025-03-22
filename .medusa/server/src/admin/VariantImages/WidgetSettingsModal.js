import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Drawer, Button, Heading, Switch, Select, clx } from "@medusajs/ui";
import { EllipsisHorizontal } from "@medusajs/icons";
function WidgetSettingsModal({
  settings,
  setSettings,
  product,
  options
}) {
  var _a;
  const {
    baseOptionUpload: { enabled, option }
  } = settings;
  const handleCheckedChange = async (checked) => {
    await fetch(`/admin/variant-images-settings/${product.id}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        base_option_enabled: checked
      })
    });
    setSettings((_curr) => ({
      ..._curr,
      baseOptionUpload: { ..._curr.baseOptionUpload, enabled: checked }
    }));
  };
  const handleOptionChange = async (option_id) => {
    await fetch(`/admin/variant-images-settings/${product.id}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        base_option_enabled: true,
        base_option_id: option_id
      })
    });
    setSettings((_curr) => ({
      ..._curr,
      baseOptionUpload: {
        ..._curr.baseOptionUpload,
        enabled: true,
        option: option_id
      }
    }));
  };
  return /* @__PURE__ */ jsxs(Drawer, { children: [
    /* @__PURE__ */ jsx(Drawer.Trigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "transparent", className: "h-7 w-7 p-1 text-ui-fg-subtle", children: /* @__PURE__ */ jsx(EllipsisHorizontal, {}) }) }),
    /* @__PURE__ */ jsxs(Drawer.Content, { "aria-describedby": void 0, children: [
      /* @__PURE__ */ jsx(Drawer.Header, { children: /* @__PURE__ */ jsx(Drawer.Title, { children: "Variant Images Settings" }) }),
      /* @__PURE__ */ jsx(Drawer.Body, { className: "divide-y p-0 overflow-y-auto no-scrollbar", children: /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between items-center", children: [
          /* @__PURE__ */ jsx(Heading, { level: "h3", children: "Upload by option" }),
          !!settings.baseOptionUpload.option && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Switch, { id: "enable-option-setting", checked: enabled, onCheckedChange: handleCheckedChange }),
            /* @__PURE__ */ jsx("label", { htmlFor: "enable-option-setting", className: "sr-only", children: "Enable/Disable base option" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-ui-fg-muted", children: "Instead of uploading images to each individual variant, upload to multiple using a base option. Each variant with the same option value will be updated." }),
        /* @__PURE__ */ jsxs("div", { children: [
          !!settings.baseOptionUpload.option && /* @__PURE__ */ jsx("label", { htmlFor: "option-select", className: "text-xs text-neutral-300 block mt-2", children: "Select an option" }),
          /* @__PURE__ */ jsxs(Select, { size: "small", onValueChange: handleOptionChange, value: option, children: [
            /* @__PURE__ */ jsx(Select.Trigger, { id: "option-select", className: clx("w-56 mt-2", !!settings.baseOptionUpload.option && "mt-1"), children: /* @__PURE__ */ jsx(Select.Value, { placeholder: "Select Option" }) }),
            /* @__PURE__ */ jsx(Select.Content, { children: options == null ? void 0 : options.map((item) => /* @__PURE__ */ jsx(Select.Item, { value: item.id, children: item.title }, item.id)) })
          ] })
        ] }),
        option && /* @__PURE__ */ jsxs("p", { className: "text-xs text-ui-fg-muted font-semibold", children: [
          "All variants with the same value for the ",
          /* @__PURE__ */ jsx("span", { className: "text-ui-fg-interactive", children: (_a = options == null ? void 0 : options.find((o) => o.id === option)) == null ? void 0 : _a.title }),
          " option will be updated simultaneously"
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Drawer.Footer, { children: /* @__PURE__ */ jsx(Drawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { children: "Okay" }) }) })
    ] })
  ] });
}
export {
  WidgetSettingsModal as default
};
