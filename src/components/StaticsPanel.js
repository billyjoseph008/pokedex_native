import React from "react"
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView 
} from 'react-native';
import { useTranslation } from "react-i18next";
import ProgressBarClassic from 'react-native-progress-bar-classic';

const StaticsPanel = (props) => {

    const { t } = useTranslation();
    const statisticsData = [
        { details: "details.hp", stat: props.hp, barColor: "blue" },
        { details: "details.attack", stat: props.attack, barColor: "orange" },
        { details: "details.defense", stat: props.defense, barColor: "green" },
        { details: "details.speed", stat: props.speed, barColor: "blue" },
        { details: "details.spatk", stat: props.spatk, barColor: "orange" },
        { details: "details.spdf", stat: props.spdef, barColor: "green" }
    ]

    return (
        <View style={styles.main}>
            <Text>{t(`details.statistics`)}</Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <ScrollView style={styles.scroll}>
                {statisticsData.map(stat =>
                    <View contentContainerStyle = {styles.stats}>
                        <Text>{t(stat.details)}</Text>
                        <ProgressBarClassic 
                            valueStyle={'default'}
                            progress={stat.stat} />
                    </View>
                )}
            </ScrollView>
  
        </View>
    )
}

export default StaticsPanel;

const styles = StyleSheet.create({
    main:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    stats:{
        marginVertical: 20,
        flexDirection: "column",
    },
    scroll: {
        width: "80%",
    }
})