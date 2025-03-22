"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettingsStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const variant_images_settings_1 = require("../../../modules/variant-images-settings");
exports.updateSettingsStep = (0, workflows_sdk_1.createStep)('update-settings-step', async (input, { container }) => {
    const SettingsModule = container.resolve(variant_images_settings_1.VARIANT_IMAGES_SETTINGS_MODULE);
    let _productSettings = await SettingsModule.retrieveVariantImagesSettings(input.product_id).catch(() => undefined);
    if (!_productSettings)
        return new workflows_sdk_1.StepResponse(await SettingsModule.createVariantImagesSettings(input));
    return new workflows_sdk_1.StepResponse(await SettingsModule.updateVariantImagesSettings(input));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXNldHRpbmdzLXN0ZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3VwZGF0ZS12YXJpYW50LWltYWdlLXNldHRpbmdzL3N0ZXBzL3VwZGF0ZS1zZXR0aW5ncy1zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUc3RSxzRkFBMEY7QUFFN0UsUUFBQSxrQkFBa0IsR0FBRyxJQUFBLDBCQUFVLEVBQUMsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLEtBQXVDLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3BJLE1BQU0sY0FBYyxHQUFpQyxTQUFTLENBQUMsT0FBTyxDQUFDLHdEQUE4QixDQUFDLENBQUM7SUFFdkcsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRW5ILElBQUksQ0FBQyxnQkFBZ0I7UUFBRSxPQUFPLElBQUksNEJBQVksQ0FBQyxNQUFNLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXhHLE9BQU8sSUFBSSw0QkFBWSxDQUFDLE1BQU0sY0FBYyxDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbkYsQ0FBQyxDQUFDLENBQUMifQ==