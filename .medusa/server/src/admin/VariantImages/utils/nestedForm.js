import { get } from "lodash-es";
function nestedForm(form, path) {
  return {
    ...form,
    path(field) {
      const fullPath = path && field ? `${path}.${field}` : path ? path : field;
      if ("path" in form) {
        return form.path(path);
      }
      return fullPath || "";
    },
    get(obj, field) {
      const fullPath = path && field ? `${path}.${field}` : path ? path : field;
      if ("get" in form) {
        return form.get(path);
      }
      return fullPath ? get(obj, fullPath) : obj;
    }
  };
}
export {
  nestedForm
};
