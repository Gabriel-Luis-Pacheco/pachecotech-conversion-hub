export const INSTAGRAM_HANDLE = "pachecotechh";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
export const WHATSAPP_URL = "https://wa.me/5551999999999";

export function openInstagram() {
  if (typeof window !== "undefined") {
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
  }
}
export function openWhatsApp(message?: string) {
  if (typeof window !== "undefined") {
    const url = message ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}` : WHATSAPP_URL;
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
