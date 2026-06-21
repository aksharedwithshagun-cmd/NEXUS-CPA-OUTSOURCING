import { query } from "./_generated/server";
import { v } from "convex/values";

export const listServices = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("services"),
      _creationTime: v.number(),
      title: v.string(),
      description: v.string(),
      icon: v.string(),
      details: v.array(v.string()),
      slug: v.string(),
    })
  ),
  handler: async (ctx) => {
    return await ctx.db.query("services").collect();
  },
});

export const listIndustries = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("industries"),
      _creationTime: v.number(),
      name: v.string(),
      icon: v.string(),
      description: v.string(),
    })
  ),
  handler: async (ctx) => {
    return await ctx.db.query("industries").collect();
  },
});
