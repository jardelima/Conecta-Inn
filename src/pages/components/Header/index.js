import React, {useState} from "react";
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    StatusBar } 
from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useDrawerStatus } from '@react-navigation/drawer';

import styles from "./style";

export default function Header(props) {
    const [notificationAlert, setNotificationAlert] = React.useState(true);
    const navigation = useNavigation();
    const drawerStatus = useDrawerStatus();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#7D81D2" barStyle="light-content" />

            <View>
                <Image 
                    source={require("../../../assets/images/logo.png")}
                />
            </View>

            <View style={styles.icons}>
                <TouchableOpacity style={styles.notification}>
                    <Image 
                        source={require("../../../assets/icons/notification.png")}
                    />
                    {notificationAlert ? 
                        <View style={styles.notificationAlert} />
                    :
                        <View style={[styles.notificationAlert, styles.notificationAlertActive]} />
                    }
                    
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {
                        if (drawerStatus === "closed") {
                            navigation.openDrawer();
                        } else {
                            navigation.dispatch(DrawerActions.closeDrawer());
                        }
                    }}
                >                 
                    <Image 
                        source={props.src}
                    />
                </TouchableOpacity>
            </View>
        </View>    
    )
}   
