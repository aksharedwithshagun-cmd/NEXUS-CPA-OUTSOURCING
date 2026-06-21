import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const seed = internalMutation({
  args: {},
  returns: v.null(),
  handler: async (ctx) => {
    const services = [
      {
        title: "Tax Preparation",
        description: "Comprehensive support for 1040, 1065, 1120, and 1120-S filings with meticulous accuracy and IRS compliance.",
        icon: "Calculator",
        slug: "tax-preparation",
        details: ["Individual Tax (1040)", "Partnership Tax (1065)", "Corporate Tax (1120/S)", "State & Local Filings"],
      },
      {
        title: "Bookkeeping",
        description: "Real-time record-keeping and monthly financial statement preparation to keep your clients audit-ready and organized.",
        icon: "BookOpen",
        slug: "bookkeeping",
        details: ["Daily Transactions", "Bank Reconciliation", "Accounts Payable/Receivable", "Financial Reporting"],
      },
      {
        title: "Audit Support",
        description: "Assistance with workpaper preparation and financial statement audits following strict GAAP standards.",
        icon: "ShieldCheck",
        slug: "audit-support",
        details: ["Workpaper Preparation", "Internal Controls Review", "GAAP Compliance", "Substantive Testing"],
      },
      {
        title: "Payroll Services",
        description: "Seamless payroll management, tax filing, and compliance for your clients' growing teams and complex requirements.",
        icon: "Users",
        slug: "payroll-services",
        details: ["Payroll Processing", "Tax Filing & Payments", "Benefits Admin", "Year-end Reporting"],
      }
    ];

    for (const service of services) {
      const existing = await ctx.db
        .query("services")
        .withIndex("by_slug", (q) => q.eq("slug", service.slug))
        .unique();
      if (!existing) {
        await ctx.db.insert("services", service);
      } else {
        await ctx.db.patch(existing._id, service);
      }
    }

    const industries = [
      { name: "Healthcare", icon: "Stethoscope", description: "Specialized accounting for medical practices." },
      { name: "Real Estate", icon: "Home", description: "Tax strategies for developers and managers." },
      { name: "Technology", icon: "Cpu", description: "Financial guidance for high-growth tech firms." },
      { name: "Construction", icon: "HardHat", description: "Job costing and revenue recognition." },
      { name: "E-commerce", icon: "ShoppingCart", description: "Inventory and sales tax compliance." },
      { name: "Prof. Services", icon: "Briefcase", description: "Practice management for law and consulting." }
    ];

    const existingIndustries = await ctx.db.query("industries").collect();
    for (const ind of industries) {
        const existing = existingIndustries.find(e => e.name === ind.name);
        if (!existing) {
            await ctx.db.insert("industries", ind);
        }
    }

    return null;
  },
});
