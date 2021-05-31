import React from 'react'
import 'react-native';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import PokemonCard from '../components/PokemonCard'
import { BrowserRouter as Router } from "react-router-dom";

test('Renders a Pokemon Card', () => {
    const pokemon = {
        name: 'Pikachu',
        id: 1,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
    }

    const component = render(
        <Router>
            <PokemonCard
                key='1'
                name={pokemon.name}
                image={pokemon.image}
                link={pokemon.id} />
        </Router>
    )
    expect(component.container).toHaveTextContent(pokemon.name)
})