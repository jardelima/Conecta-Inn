import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";

export default function MenuItem(props) {
    return (
        <TouchableOpacity 
            style={styles.menuItemContainer}
            onPress={props.linkProduct}
        >
            <Image 
                style={styles.menuItemImage}
                source={props.src}
            />
            <View style={styles.menuItemDetailsContainer}>
                <Text style={styles.menuItemTitle}>{props.nameProduct}</Text>
                <View style={styles.menuItemDetails}>
                    <Text style={styles.menuItemDetail}>{props.widthProduct}</Text>
                    <Text style={styles.menuItemDetail}>{props.valueProduct}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
