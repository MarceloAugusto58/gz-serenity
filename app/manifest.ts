import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GZ Serenity | Grizi Capasso",
    short_name: "GZ Serenity",
    description: "Massoterapeuta em Dourados MS — terapias que acolhem, aliviam e transformam.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F0E8",
    theme_color: "#3D1F5C",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" }
    ],
  };
}
