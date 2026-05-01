export const INSTAGRAM_HANDLE = "pachecotechh";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export function openInstagramDM(prefilledMessage?: string) {
  if (prefilledMessage && typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(prefilledMessage).catch(() => {});
  }
  if (typeof window !== "undefined") {
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
  }
}
