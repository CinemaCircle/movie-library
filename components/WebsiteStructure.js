import { Container } from '@mantine/core';
import { Fragment } from 'react';

import Footer from './Structure/Footer';
import Header from './Structure/Header';
import SearchBox from './Structure/SearchBox';

export default function WebsiteStructure({children}){
    return <Container size='xl'>
        <Header />
        <SearchBox />
        {children}
        <Footer />
    </Container>
}