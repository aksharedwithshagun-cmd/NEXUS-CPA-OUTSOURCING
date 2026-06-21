import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    businessName: v.string(),
    revenueRange: v.string(),
    serviceNeeded: v.string(),
    message: v.string(),
  },
  returns: v.id("leads"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("leads", args);
  },
});
