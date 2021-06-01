import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-native'
import {
    StyleSheet,
    View,
    Image,
    Picker,
} from 'react-native';
import { useTranslation } from "react-i18next";
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = () => {

    const [t, i18n] = useTranslation();
    const [selectedValue, setSelectedValue] = useState("en");
    const location = useLocation();


    useEffect(() => {
        i18n.changeLanguage(selectedValue)
    }, [selectedValue])

    return (

        <View style={styles.container}>
            {
                location.pathname == "/" ? <View style={styles.backArrowSpace}></View> :

                    <View style={styles.backArrowSpace}>
                        <Link to="/">
                            <Icon
                                name="angle-left"
                                backgroundColor="transparent"
                                color="#fff"
                                style={styles.backArrow}
                                size={30}
                            >
                            </Icon>
                        </Link>
                    </View>
            }

            <View style={styles.logoSpace}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
            </View>

            <View style={styles.languageSelectorSpace}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.languageSelector}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="EN" value="en" />
                    <Picker.Item label="ES" value="es" />
                    <Picker.Item label="DE" value="de" />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        height: 70,
        backgroundColor: "#c0392b",
        justifyContent: "center",
        alignContent: "center",
    },
    backArrowSpace: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    logoSpace: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    languageSelectorSpace: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    },
    logo: {
        width: "100%",
        height: 45,
    },
    languageSelector: {
        marginHorizontal: 40,
        width: 60,
        height: 40,
        color: "#fff",
    },
    backArrow: {
        paddingLeft: 10,
        height: 40,
    }
});

export default Navbar;