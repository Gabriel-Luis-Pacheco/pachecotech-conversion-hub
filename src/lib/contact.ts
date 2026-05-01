export const INSTAGRAM_HANDLE = "pachecotechh";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const WHATSAPP_NUMBER = "5511999999999"; // Replace with actual number (format: countrycode + number)
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Oi!%20Quero%20falar%20sobre%20meu%20projeto.`;

export function openInstagramDM(prefilledMessage?: string) {
  if (prefilledMessage && typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(prefilledMessage).catch(() => {});
  }
  if (typeof window !== "undefined") {
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
  }
}
