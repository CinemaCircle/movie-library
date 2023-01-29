import { Welcome } from "../components/Welcome/Welcome";
import { ColorSchemeToggle } from "../components/ToggleScheme/ColorSchemeToggle";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
