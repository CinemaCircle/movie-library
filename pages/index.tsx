
import CarouselSection from "../components/MovieCarousel/CarouselSection";
import { MovieCarousel } from "../components/MovieCarousel/MovieCarousel";
import PageContainer from "../components/PageContainer";
import { Welcome } from "../components/Welcome/Welcome";

export default function HomePage() {
  return (
    <PageContainer title={process.env.NEXT_PUBLIC_WEBSITE_TITLE}>
      <Welcome />
      <CarouselSection title="Top 20 movies">
        <MovieCarousel />
      </CarouselSection>
      <CarouselSection title="Most recomended">
        <MovieCarousel />
      </CarouselSection>
    </PageContainer>
  );
}
