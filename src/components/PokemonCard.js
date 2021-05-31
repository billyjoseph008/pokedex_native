import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from "react-native";
import { Link } from "react-router-native";

const PokemonCard = (props) => {

    return (
        <Link to={`/pokemon/${props.link}`}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={{
                        uri: props.image,
                    }} />
                <Text style={styles.capitalize}>{props.name}</Text>
            </View>
        </Link>
    )
}

export default PokemonCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        height: 100,
        width: 108,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        margin: 6,
    },
    image: {
        width: 75,
        height: 70,
    },
    capitalize: {
        textTransform: "capitalize",
    }
})


