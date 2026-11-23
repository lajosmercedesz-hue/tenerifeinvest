import { describe, expect, it } from "vitest";

import { buildEnquiryMailto, enquirySchema, whatsappUrl } from "@/lib/contact";

describe("contact details", () => {
  it("sends form enquiries to info@tenerifeinvestment.co", () => {
    const url = buildEnquiryMailto({ name: "Anna", email: "anna@example.com", phone: "", message: "Hi" });
    expect(url.startsWith("mailto:info@tenerifeinvestment.co?")).toBe(true);
    expect(decodeURIComponent(url)).toContain("Email: anna@example.com");
  });

  it("opens WhatsApp on +971553403366", () => {
    expect(whatsappUrl()).toBe("https://wa.me/971553403366");
  });

  it("rejects an enquiry without a valid email", () => {
    const result = enquirySchema.safeParse({ name: "Anna", email: "nope", phone: "", message: "Hi" });
    expect(result.success).toBe(false);
  });
});
