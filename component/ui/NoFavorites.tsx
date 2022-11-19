
import { Container, Text, Image } from '@nextui-org/react';
import { text } from 'stream/consumers';

export const NoFavorites = () => {
  return (
    <Container css={{
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign:'center'
      }}>
        <Text h1>No hay favoritos</Text>
        <Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ Math.floor(Math.random() * 151)}.svg`}
          width={450}
          alt='pokemon'
          height={450}
          css={{
            opacity: 0.1
          }}
        />
      </Container>
  )
};
