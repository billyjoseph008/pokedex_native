import React from "react"
import axios from 'axios'
import { useParams } from 'react-router-native';
import { useTranslation } from "react-i18next";
import StaticsPanel from './StaticsPanel';
import { useEffect, useState } from 'react';
import { PokemonService } from '../apiServices/PokemonService';
import { View, Image, Text, StyleSheet } from 'react-native';

const Details = () => {

    let { id } = useParams();
    const { t } = useTranslation();
    const pokemonService = new PokemonService();
    const [pokemon, setPokemon] = useState();
    const [pokemonDescription, setPokemonDescription] = useState("");

    useEffect(() => {
        pokemonService.getAPokemon(id).then((onePokemon) => setPokemon(onePokemon))
        /* setPokemonDescription(obtainDescription(id)) */
    }, [])

  /*   async function obtainDescription(id){
        const object = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
             .then(res => res.data.color); 
        console.log("MIRENME SOY UN OBJETO: " + JSON.stringify(object));
    }
 */
    return (
        <View>

            {pokemon != null 

            && 

            <View>
                <View style={styles.infoContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: pokemon.sprites.front_default,
                        }} />
                    <View>
                        <Text>{id.length === 1 ? '#00' + id : '#0' + id}</Text>
                        <Text 
                            style={styles.pokemonName}
                        >
                            {pokemon.name}
                        </Text>
                        <Text><Text>{t(`details.height`)}: </Text>{pokemon.height + " m"}</Text>
                        <Text><Text>{t(`details.weight`)}: </Text>{pokemon.weight + " kg"}</Text>
                    </View>
                </View>
                <Text>{pokemonDescription}</Text>
                <StaticsPanel
                    hp={pokemon.stats[0].base_stat}
                    attack={pokemon.stats[1].base_stat}
                    defense={pokemon.stats[2].base_stat}
                    speed={pokemon.stats[3].base_stat}
                    spatk={pokemon.stats[4].base_stat}
                    spdef={pokemon.stats[5].base_stat}
                />
            </View>
            }
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({
    infoContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },  
    image:{
        width: 170,
        height : 170,   
    },
    pokemonName:{
        textTransform: "capitalize",
        fontSize: 18,
        fontWeight: "bold"
    }
})
