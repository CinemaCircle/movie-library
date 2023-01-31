import { Box, createStyles, Title } from '@mantine/core';

import { MovieCarousel } from './MovieCarousel';

const useStyles = createStyles((theme) => ({
    title: {
        fontWeight: 500,
        marginBottom: 10
    }
}))

export default function CarouselSection({title}){

    const {classes} = useStyles();
    return <Box mb={40}>
        <Title size='h3' className={classes.title}>{title}</Title>
        <MovieCarousel />
    </Box>
}