export const INSTAGRAM_HANDLE = "pachecotechh";
export const INSTAGRAM_URL = `https://ig.me/m/${INSTAGRAM_HANDLE}`;

// Direct message URL for Instagram - opens DM directly
export const INSTAGRAM_DM_URL = INSTAGRAM_URL;

// Generate Instagram DM pre-filled message
export function generateInstagramMessage(name: string, contact: string, project: string): string {
  return `Olá! Sou ${name}. Contato: ${contact}. Projeto: ${project}`;
}

// Legacy function - generate WhatsApp message (now redirects to Instagram)
export function generateWhatsAppMessage(name: string, contact: string, project: string): string {
  return generateInstagramMessage(name, contact, project);
}

// Open Instagram in new tab
export function openInstagram() {
  if (typeof window !== "undefined") {
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
  }
}

// Open WhatsApp - redirects to Instagram DM
export function openWhatsApp(message?: string) {
  openInstagram();
}

// Legacy function for backwards compatibility
export function openInstagramDM(prefilledMessage?: string) {
  openInstagram();
}
