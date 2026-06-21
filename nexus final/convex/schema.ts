import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    businessName: v.string(),
    revenueRange: v.string(),
    serviceNeeded: v.string(),
    message: v.string(),
  }),
  services: defineTable({
    title: v.string(),
    description: v.string(),
    icon: v.string(),
    details: v.array(v.string()),
    slug: v.string(),
  }).index("by_slug", ["slug"]),
  industries: defineTable({
    name: v.string(),
    icon: v.string(),
    description: v.string(),
  }),
});
