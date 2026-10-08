import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lelion Autoparts - Wiper Blade Manufacturer",
    short_name: "Lelion",
    description:
      "OEM/ODM wiper blade manufacturer in Ningbo, China. ISO 9001 certified factory, wholesale universal, specific fit and multifunction wiper blades.",
    start_url: "/en",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}
