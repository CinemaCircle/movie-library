import { Box, createStyles, Title } from '@mantine/core';

import { MovieCarousel } from './MovieCarousel';

interface CarouselSectionProps {
    title: string;
    children?: React.ReactNode;
  }

const useStyles = createStyles((theme) => ({
    title: {
        fontWeight: 500,
        marginBottom: 10
    }
}))

export default function CarouselSection(props: CarouselSectionProps){

    const {classes} = useStyles();
    return <Box mb={40}>
        <Title size='h3' className={classes.title}>{props.title}</Title>
        <MovieCarousel />
    </Box>
}