"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVariantImagesSettingsWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const update_settings_step_1 = require("./steps/update-settings-step");
exports.updateVariantImagesSettingsWorkflow = (0, workflows_sdk_1.createWorkflow)('update-variant-images-settings', (input) => {
    const productSettings = (0, update_settings_step_1.updateSettingsStep)(input);
    return new workflows_sdk_1.WorkflowResponse(productSettings);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3VwZGF0ZS12YXJpYW50LWltYWdlLXNldHRpbmdzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUcyQztBQUMzQyx1RUFBa0U7QUFRckQsUUFBQSxtQ0FBbUMsR0FBRyxJQUFBLDhCQUFjLEVBQy9ELGdDQUFnQyxFQUNoQyxDQUFDLEtBQXVDLEVBQUUsRUFBRTtJQUMxQyxNQUFNLGVBQWUsR0FBRyxJQUFBLHlDQUFrQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWxELE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQ0YsQ0FBQyJ9