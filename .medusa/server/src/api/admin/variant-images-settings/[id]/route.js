"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const retrieve_variant_image_settings_1 = require("../../../../workflows/retrieve-variant-image-settings");
const update_variant_image_settings_1 = require("../../../../workflows/update-variant-image-settings");
const POST = async (req, res) => {
    const product_id = req.params.id;
    const { result } = await (0, update_variant_image_settings_1.updateVariantImagesSettingsWorkflow)(req.scope).run({
        input: { product_id, ...req.body },
        throwOnError: false,
        logOnError: true,
    });
    res.json(result);
};
exports.POST = POST;
const GET = async (req, res) => {
    const product_id = req.params.id;
    const { result } = await (0, retrieve_variant_image_settings_1.retrieveVariantImagesSettingsWorkflow)(req.scope).run({
        input: { product_id },
        throwOnError: false,
        logOnError: true,
    });
    res.json(result);
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3ZhcmlhbnQtaW1hZ2VzLXNldHRpbmdzL1tpZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMkdBQThHO0FBQzlHLHVHQUEwRztBQU9uRyxNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBc0QsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDeEcsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFFakMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSxtRUFBbUMsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzFFLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDbEMsWUFBWSxFQUFFLEtBQUs7UUFDbkIsVUFBVSxFQUFFLElBQUk7S0FDakIsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFWVyxRQUFBLElBQUksUUFVZjtBQUVLLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNuRSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUVqQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLHVFQUFxQyxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDNUUsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFO1FBQ3JCLFlBQVksRUFBRSxLQUFLO1FBQ25CLFVBQVUsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBVlcsUUFBQSxHQUFHLE9BVWQifQ==