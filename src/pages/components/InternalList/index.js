import React, { useState, useEffect } from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image,
    ScrollView,
    FlatList,
} from "react-native";
import styles from "./style";
import MenuItem from "../MenuItem";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function InternalList( props ) {
    const navigation = useNavigation();
    const route = useRoute();
    const { localName, localAddress, upQtdProduct, checkOut, listProducts } = route.params;
    const [type, setType] = React.useState(props.type);
    const [menuList, setMenuList] = React.useState(props.list);
    const [updateQtdProduct, setUpdateQtdProduct] = React.useState(1);

    React.useEffect(() => {
        setTypeFilter(props.type);
    }, []);

    const setTypeFilter = (type) => {
        if(type !== "") {
            setMenuList([...props.list.filter(item => item.type === type)]);
        } else {
            setMenuList(props.list);
        }
        setType(type);
    }

    React.useEffect(() => {
        if(upQtdProduct > 1) {
            setUpdateQtdProduct(2);
        }
    });

    const renderItem = ({item, index}) => {
        return (
            <MenuItem 
                src={item.img}
                nameProduct={item.nameProduct}
                widthProduct={item.widthProduct}
                valueProduct={item.valueProduct}
                linkProduct={() => navigation.navigate("InternalProduct", 
                    {
                        listProducts,
                        checkOut,
                        upQtdProduct: updateQtdProduct,
                        localName,
                        localAddress,
                        page: item.page,
                        imgProduct: item.img,
                        nameProduct: item.nameProduct,
                        widthProduct: item.widthProduct,
                        valueProduct: item.valueProduct,
                        imgSlideOne: item.imgSlideOne,
                        imgSlideTwo: item.imgSlideTwo,
                        imgSlideThree: item.imgSlideThree,
                        deliveryProduct: item.deliveryProduct,
                        descriptionProduct: item.descriptionProduct,
                    })
                }
            />
        )
    }

    return (
        <>
            <View>
                <ScrollView horizontal={true} style={styles.typeMenuContainer}>
                    {
                        props.typeMenu.map((types, index) => (
                            <TouchableOpacity 
                                key={index}
                                style={
                                    [
                                        styles.typeMenuItem, 
                                        type === types.type && styles.typeMenuItemActive
                                    ]
                                }
                                onPress={() => { setTypeFilter(types.type) }}
                            >
                                <Text style={
                                    [
                                        styles.typeMenuText, 
                                        type === types.type && styles.typeMenuTextActive
                                    ]
                                }>
                                    {types.type}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>

            <View style={[styles.containerItems, styles.containerScroll]}>
                <FlatList 
                    data={menuList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
            </View>
        </>
    )
}
