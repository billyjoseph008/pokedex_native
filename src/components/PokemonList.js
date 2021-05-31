import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import { useTranslation } from "react-i18next";
import { SearchBar } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PokemonService } from '../apiServices/PokemonService'
import PokemonCard from './PokemonCard'

const PokemonList = () => {

    const { t } = useTranslation();
    const [pokemons, setPokemons] = useState([]);
    const pokemonService = new PokemonService();
    const [searchTerm, setSearchTerm] = useState('');
    const [pagination, setPagination] = useState(0);
    const [paginationNumber, setPaginationNumber] = useState(1);

    useEffect(() => {
        setPokemons([]);
        pokemonService.getPokemons(pagination).then((data) => generatePokemons(data.results));
    }, [pagination])

    function generatePokemons(results) {
        results.forEach(async pokemon => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const data = await res.json();
            setPokemons(currentList => [...currentList, data]);
            await pokemons.sort((a, b) => a.id - b.id);
        })
    }

    function nextPokemons(direction) {
        if (direction === "more" && pagination >= 0) {
            setPagination(pagination + 50)
            setPaginationNumber(paginationNumber + 1)
        } else if (direction === "less" && pagination >= 50) {
            setPagination(pagination - 50)
            setPaginationNumber(paginationNumber - 1)
        }
    }

    return (
        <View style={styles.main}>

            <View contentContainerStyle={styles.searchBarContainer}>
                <SearchBar
                    cancelIcon
                    showCancel
                    lightTheme
                    round
                    containerStyle={styles.searchBar}
                    placeholder={t(`pokemonList.search`)}
                    onChangeText={(value) => setSearchTerm(value)}
                    value={searchTerm}
                />
            </View>

            <ScrollView contentContainerStyle={styles.gridContainer}>
                {pokemons.filter(pokemon => {
                    if (searchTerm == '') {
                        return pokemon;
                    } else if (pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || pokemon.id == searchTerm) {
                        return pokemon;
                    }
                }).map((pokemon, index) =>
                    <PokemonCard
                        key={index}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        link={pokemon.id}
                    />
                )}
            </ScrollView>

            <View contentContainerStyle={styles.navigationContainer}>

                <View style={styles.navigationPanel}>
                    <Button
                        icon={
                            <Icon
                                style={{marginHorizontal: 2}}
                                name="arrow-left"
                                size={15}
                                color="white"
                            />
                        }
                        buttonStyle={styles.button}
                        title={t(`pokemonList.lastPage`)}
                        onPress={() => nextPokemons("less")}>
                    </Button>
                    <Text style ={styles.paginationNumber}>
                        {paginationNumber > 1 ? paginationNumber - 1 : null}
                    </Text>
                    <Text style ={styles.paginationActualNumber}>
                        {paginationNumber}
                    </Text>
                    <Text style ={styles.paginationNumber}>
                        {paginationNumber + 1}
                    </Text>
                    <Button
                        icon={
                            <Icon
                                style={{marginHorizontal: 2}}
                                name="arrow-right"
                                size={15}
                                color="white"
                            />
                        }
                        iconRight
                        buttonStyle={styles.button}
                        title={t(`pokemonList.nextPage`)}
                        onPress={() => nextPokemons("more")}>
                    </Button>
                </View>

            </View>

        </View>

    )
}

export default PokemonList;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    searchBarContainer: {
        flex: 2,
        flexDirection: "row",
        backgroundColor: "#ecf0f1"
    },
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ecf0f1"
    },
    navigationContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ecf0f1"
    },
    navigationPanel: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 30,
        backgroundColor: "#ecf0f1"
    },
    searchBar: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#ecf0f1"
    },
    button: {
        width: 100,
        height: 35,
        marginHorizontal: 30,
    },
    paginationNumber: {
        marginHorizontal: 5,
        fontSize: 15,
    },
    paginationActualNumber: {
        marginHorizontal: 20,
        fontSize: 22,
        fontWeight: "bold",
    }
})