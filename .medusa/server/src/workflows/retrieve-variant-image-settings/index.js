"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveVariantImagesSettingsWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const retrieve_settings_step_1 = require("./steps/retrieve-settings-step");
exports.retrieveVariantImagesSettingsWorkflow = (0, workflows_sdk_1.createWorkflow)('retrieve-variant-images-settings', (input) => {
    const productSettings = (0, retrieve_settings_step_1.retrieveSettingsStep)(input);
    return new workflows_sdk_1.WorkflowResponse(productSettings);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3JldHJpZXZlLXZhcmlhbnQtaW1hZ2Utc2V0dGluZ3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQXFGO0FBQ3JGLDJFQUFzRTtBQU16RCxRQUFBLHFDQUFxQyxHQUFHLElBQUEsOEJBQWMsRUFBQyxrQ0FBa0MsRUFBRSxDQUFDLEtBQW9DLEVBQUUsRUFBRTtJQUMvSSxNQUFNLGVBQWUsR0FBRyxJQUFBLDZDQUFvQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBELE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQyJ9