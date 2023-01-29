import { Title, Text, Anchor } from "@mantine/core";
import useStyles from "./WelcomeStyles";

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{" "}
        <Text inherit variant="gradient" component="span">
          Movie library
        </Text>
      </Title>
      <Text
        color="dimmed"
        align="center"
        size="lg"
        sx={{ maxWidth: 580 }}
        mx="auto"
        mt="xl"
      >
        This Next.js project is a place to collect movies you have watched and
        suggest others to watch. It will also contain movie recommendation in
        the future as well.
      </Text>
    </>
  );
}
