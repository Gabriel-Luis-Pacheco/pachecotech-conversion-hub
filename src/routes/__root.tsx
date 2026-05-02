import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PachecoTech — Páginas que trazem clientes, com estratégia" },
      {
        name: "description",
        content:
          "Landing pages estratégicas para prestadores de serviço, coaches e criadores de infoproduto. Diagnóstico, copy e construção focados em conversão.",
      },
      { name: "author", content: "PachecoTech" },
      { property: "og:title", content: "PachecoTech — Páginas que trazem clientes, com estratégia" },
      {
        property: "og:description",
        content:
          "Antes de construir, eu entendo seu negócio. Depois executo com foco em resultados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PachecoTech — Páginas que trazem clientes, com estratégia" },
      { name: "description", content: "This application builds strategic, high-converting websites for digital businesses and local service providers." },
      { property: "og:description", content: "This application builds strategic, high-converting websites for digital businesses and local service providers." },
      { name: "twitter:description", content: "This application builds strategic, high-converting websites for digital businesses and local service providers." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/217eb70a-edad-4f8d-b852-58b8875e47b8/id-preview-120a7f3a--6520fcfd-002f-48e7-9ae7-fa23f08609c3.lovable.app-1777665657665.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/217eb70a-edad-4f8d-b852-58b8875e47b8/id-preview-120a7f3a--6520fcfd-002f-48e7-9ae7-fa23f08609c3.lovable.app-1777665657665.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
