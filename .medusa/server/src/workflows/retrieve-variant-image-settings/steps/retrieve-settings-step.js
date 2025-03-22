"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveSettingsStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const variant_images_settings_1 = require("../../../modules/variant-images-settings");
exports.retrieveSettingsStep = (0, workflows_sdk_1.createStep)('retrieve-settings-step', async (input, { container }) => {
    const SettingsModule = container.resolve(variant_images_settings_1.VARIANT_IMAGES_SETTINGS_MODULE);
    let _productSettings = await SettingsModule.retrieveVariantImagesSettings(input.product_id).catch(() => undefined);
    return new workflows_sdk_1.StepResponse(_productSettings);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtc2V0dGluZ3Mtc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvcmV0cmlldmUtdmFyaWFudC1pbWFnZS1zZXR0aW5ncy9zdGVwcy9yZXRyaWV2ZS1zZXR0aW5ncy1zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUc3RSxzRkFBMEY7QUFFN0UsUUFBQSxvQkFBb0IsR0FBRyxJQUFBLDBCQUFVLEVBQUMsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLEtBQW9DLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3JJLE1BQU0sY0FBYyxHQUFpQyxTQUFTLENBQUMsT0FBTyxDQUFDLHdEQUE4QixDQUFDLENBQUM7SUFFdkcsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRW5ILE9BQU8sSUFBSSw0QkFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDLENBQUMifQ==