import { createFileRoute } from "@tanstack/react-router";
import { PaletteApp } from "@/components/palette-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PaletteApp />;
}
