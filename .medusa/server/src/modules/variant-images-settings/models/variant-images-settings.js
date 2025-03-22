"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const VariantImagesSettings = utils_1.model.define('variant_images_settings', {
    product_id: utils_1.model.id().primaryKey(),
    base_option_enabled: utils_1.model.boolean().default(false),
    base_option_id: utils_1.model.text().nullable(),
});
exports.default = VariantImagesSettings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1pbWFnZXMtc2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy92YXJpYW50LWltYWdlcy1zZXR0aW5ncy9tb2RlbHMvdmFyaWFudC1pbWFnZXMtc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBa0Q7QUFFbEQsTUFBTSxxQkFBcUIsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLHlCQUF5QixFQUFFO0lBQ3BFLFVBQVUsRUFBRSxhQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQ25DLG1CQUFtQixFQUFFLGFBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ25ELGNBQWMsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQ3hDLENBQUMsQ0FBQztBQUVILGtCQUFlLHFCQUFxQixDQUFDIn0=