import { Button } from '@mantine/core';
import { BrandGoogle } from 'tabler-icons-react';

export default function LoginWithGoogle(){
    return <Button component="a" href="#" variant="outline" leftIcon={<BrandGoogle size={14} />} color='red'>
                Login
           </Button>
}