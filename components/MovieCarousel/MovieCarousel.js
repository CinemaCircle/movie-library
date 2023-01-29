import { Carousel } from "@mantine/carousel";
import {
  Button,
  Container,
  Paper,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useCarouselStyles } from "./CarouselStyles";

function Card({ image, title, year }) {
  const { classes } = useCarouselStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.year} size="xs">
          {year}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read more
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_g7o3MK19xx1sF3whIvhjCobvmUlo5BKKFCJr4YHr2q8Tp6r",
    title: "The Pale Blue Eye",
    year: "2022",
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAk7E3rjIzJGTzHjuw4Ue3e-a98LN4qhfiPFcPqNrOidhEZGeX",
    title: "Poker Face",
    year: "2022",
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNgaus1EZmk-JVGwmrfpENUbPsG8M2NJIdVIpuWyLG5BrwAbtG",
    title: "The Menu",
    year: "2022",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfTsJIEpggkIgOwR-CZNsHfGU8l6irrrVVAYJpzDFQlj5zioC",
    title: "Bullet Train",
    year: "2022",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZRtuFI9aLn2FNO1WjgRQsHpV2b0FJ1j0HYsmhMhVNMq_M23R",
    title: "Triangle of Sadness",
    year: "2022",
  },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHrQuF9sH0zTeKhScEcMIFa3fm_mICg_a47IGXmdqJ0rKv7UM-",
    title: "All Quiet on the Western Front",
    year: "2022",
  },
  {
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZPYRCww1RGQzJxZRG2F5XKPyT30FR3O6dPOM719hee14DQC2n",
    title: "Glass Onion: A Knives Out Mystery",
    year: "2022",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkbBqL3POWZb7EJmte1wpdZRJkE5_pkV532SF_-zl8LH2mN3a",
    title: "Pinocchio",
    year: "2022",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBg1PqtYusOu-yKC1xbDDErnNH4F1yM53woz7_bZU6J4vGrGI",
    title: "A Man Called Otto",
    year: "2022",
  },
];

export function MovieCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container>
      <Carousel
        slideSize="25%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 4 }]}
        slideGap="xl"
        align="start"
        withIndicators
        slidesToScroll={mobile ? 1 : 4}
        styles={{
          indicator: {
            width: 12,
            height: 4,
            transition: "width 250ms ease",
            "&[data-active]": {
              width: 30,
            },
          },

          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
