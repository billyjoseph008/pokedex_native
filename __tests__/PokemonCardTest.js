//Unit Testing
import React from 'react'
import 'react-native';
import {NativeRouter} from "react-router-native";
import PokemonCard from '../src/components/PokemonCard'

import renderer from 'react-test-renderer';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')

it('Renders a Pokemon Card :)', () => {
    
    const pokemon = {
        name: 'Pikachu',
        id: 1,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
    }
    renderer.create(   
    <NativeRouter>
        <PokemonCard
            key='1'
            name={pokemon.name}
            image={pokemon.image}
            link={pokemon.id} />
    </NativeRouter>
    );

}); 

