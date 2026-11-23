import { z } from "zod";

export const CONTACT_EMAIL = "info@tenerifeinvestment.co";
export const WHATSAPP_NUMBER = "+971553403366";
export const WHATSAPP_DISPLAY = "+971 55 340 3366";

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be under 255 characters"),
  phone: z
    .string()
    .trim()
    .max(30, "Telephone must be under 30 characters")
    .regex(/^[+()\d\s-]*$/, "Please use digits, spaces and + ( ) - only"),
  message: z.string().trim().min(1, "Please tell us about your investment goals").max(2000, "Message must be under 2000 characters"),
});

export type Enquiry = z.infer<typeof enquirySchema>;

export function whatsappUrl(text?: string): string {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function emailUrl(subject?: string): string {
  return subject
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${CONTACT_EMAIL}`;
}

export function buildEnquiryMailto(enquiry: Enquiry): string {
  const subject = `Investment enquiry from ${enquiry.name}`;
  const body = [
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Telephone: ${enquiry.phone || "Not provided"}`,
    "",
    enquiry.message,
  ].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
