import { Welcome } from "../components/Welcome/Welcome";
import { ColorSchemeToggle } from "../components/ToggleScheme/ColorSchemeToggle";
import { MovieCarousel } from "@/components/MovieCarousel/MovieCarousel";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <MovieCarousel />
    </>
  );
}
