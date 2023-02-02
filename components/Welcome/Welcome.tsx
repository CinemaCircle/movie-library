import { createStyles, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: -2,

    [theme.fn.smallerThan("md")]: {
      fontSize: 50,
    },
  },
}));

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} opacity={0.2} align="left" mt={60}>
        Welcome to{" "}
        <Text inherit variant="text" component="span">
          MustWatch
        </Text>
      </Title>
      <Text color="dimmed" align="left" size="lg" mx="auto" mt="xs" mb={60}>
        MustWatch is the ultimate destination for film aficionados and
        cinephiles alike. Immerse yourself in a world of celluloid dreams and
        explore a curated collection of must-watch movies that will captivate
        your senses and stir your emotions. Discover new and timeless classics,
        as you delve into a kaleidoscope of genres, ranging from heart-warming
        dramas to edge-of-your-seat thrillers. Share your own recommendations
        and join a community of fellow cinephiles as you embark on a journey
        through the magic of the movies. MustWatch - where every film is a
        masterpiece waiting to be experienced.
      </Text>
    </>
  );
}
