import Image from 'next/image';
import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link } from '@nextui-org/react';


export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 50px',
            backgroundColor: theme?.colors.gray50.value
        }}> 
                <Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ Math.floor(Math.random() * 151)}.png`}
                    alt="icono de la app"
                    width={70}
                    height={70}
                />

            <NextLink href="/" passHref>
                <div style={{display:'flex'}}>
                <Image 
                    src='/img/Sin-título-1.png'
                    alt="icono de la app"
                    width={100}
                    height={35}

                />
                </div>
            </NextLink>

            <Spacer css={{ flex: 1 }}/>
            
            <NextLink href="/favorites" passHref>
                <div style={{ marginRight: '10px' }}>
                    <Text color='white'>Favoritos</Text>
                </div>
            </NextLink>

        </div>
    )
};
