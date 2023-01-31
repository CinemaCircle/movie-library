import { createStyles, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    hashtag: {
        marginRight: 5,
        fontSize: 30,
        fontWeight: 400,
        color: theme.colorScheme === "dark" ? theme.colors.gray[7] : theme.black
    },
    title: {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: -2,
  
      [theme.fn.smallerThan("md")]: {
        fontSize: 50,
      },
    },
}));

export default function Logo(){
    const {classes} = useStyles();
    return <>
        <Title inherit variant="text" className={classes.hashtag} component="span">#</Title><Title inherit className={classes.title} variant="gradient" component="span" gradient={{ from: 'orange', to: 'red' }}>MustWatch</Title>
    </>
}