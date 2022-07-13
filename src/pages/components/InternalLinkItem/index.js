import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import styles from "./style";

export default function InternalLinkItem(props) {
    return (
            <TouchableOpacity 
                style={styles.item} 
                activeOpacity={2}
                onPress={props.link}
            >
                <Image 
                    style={styles.itemImage}
                    source={props.src}
                />
                <Text style={styles.itemText} >{props.title}</Text>
            </TouchableOpacity>
    )
}
