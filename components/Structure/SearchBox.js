import { createStyles, Input } from '@mantine/core';
import { Search } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    search: {
        "& input": {
            border: 0,
            backgroundColor: 'transparent',
            paddingTop: 22,
            paddingBottom: 22,
            fontSize: 25,
            fontWeight: 300,
            paddingLeft: 50
        }
    }
}));

export default function SearchBox(){
    const {classes} = useStyles();
    return <Input icon={<Search />} className={classes.search} placeholder="Search here..." />
}