import { Card, Grid, Group } from '@mantine/core';

import LoginWithGoogle from '../Login/LoginWithGoogle';
import { ColorSchemeToggle } from '../ToggleScheme/ColorSchemeToggle';
import Logo from './Logo';

export default function Header(){
    return <Card shadow="lg" p="md" radius="md" sx={{marginTop: 25, marginBottom: 30}}>
        <Grid>
            <Grid.Col span={10}>
                <Logo />
            </Grid.Col>
            <Grid.Col span={2} sx={{display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
                <Group align='center'>
                    <LoginWithGoogle />
                    <ColorSchemeToggle />
                </Group>
            </Grid.Col>
        </Grid>
    </Card>
}