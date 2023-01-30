import { Container, Image, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

const MoviePage = () => {
  const router = useRouter();
  const { id, image, title, year } = router.query;

  return (
    <Container>
      <Link href="/">Back</Link>
      <h1>Movie Information</h1>
      <p>Movie ID: {id}</p>
      <Text size="xs">{year}</Text>
      <Title order={3}>{title}</Title>
      <Image src={image} width={200} alt="cover" />
    </Container>
  );
};

export default MoviePage;
