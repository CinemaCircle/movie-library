import { createStyles, Text, Title } from '@mantine/core';

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

  return <>
      <Title className={classes.title} opacity={0.2} align="left" mt={60}>
        Welcome to{" "}
        <Text inherit variant="text" component="span">
          {process.env.NEXT_PUBLIC_WEBSITE_TITLE}
        </Text>
      </Title>
      <Text
        color="dimmed"
        align="left"
        size='lg'
        mx="auto"
        mt="xs"
        mb={60}
      >
        {process.env.NEXT_PUBLIC_WELCOME_DESC}
      </Text>
    </>;
}
