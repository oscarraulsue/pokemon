import { Button, Grid } from '@nextui-org/react'
import { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../component/layout'
import { PokemonCard } from '../component/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokémons'>
      
    <Grid.Container gap={ 2 } justify='flex-start'>
      {
        pokemons.map( ( pokemon ) => (
          <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
        ))
      }
    </Grid.Container>

  </Layout>
  
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
  const pokemons: SmallPokemon[] = data.results.map( (poke:SmallPokemon, i:number) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )

  return {
    props: {
      pokemons
    }
  } 
}

export default HomePage;
