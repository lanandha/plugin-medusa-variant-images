"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20241110190231 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20241110190231 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "variant_images_settings" ("product_id" text not null, "base_option_enabled" boolean not null default false, "base_option_id" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "variant_images_plugin_settings_pkey" primary key ("product_id"));');
    }
    async down() {
        this.addSql('drop table if exists "variant_images_settings" cascade;');
    }
}
exports.Migration20241110190231 = Migration20241110190231;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNDExMTAxOTAyMzEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy92YXJpYW50LWltYWdlcy1zZXR0aW5ncy9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjQxMTEwMTkwMjMxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBQ3BELEtBQUssQ0FBQyxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FDVCxvWEFBb1gsQ0FDclgsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMseURBQXlELENBQUMsQ0FBQztJQUN6RSxDQUFDO0NBQ0Y7QUFWRCwwREFVQyJ9