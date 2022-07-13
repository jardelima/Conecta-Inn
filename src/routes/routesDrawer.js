import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Dashboard from "../pages/Dashboard";
import DrawerContent from "../pages/components/DrawerContent";
import InternalHotel from "../pages/InternalHotel";
import InternalMenu from "../pages/InternalMenu";
import InternalTour from "../pages/InternalTour";
import InternalProduct from "../pages/InternalProduct";
import Cart from "../pages/Cart";
import CheckIn from "../pages/CheckIn";
import Chat from "../pages/Chat";
import CheckOut from "../pages/CheckOut";
import Extract from "../pages/Extract";
import Payment from "../pages/Payment";

const Drawer = createDrawerNavigator();

function RoutesDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    width: "100%",
                },
            }}
            drawerContent={DrawerContent}
        >
            <Drawer.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
                }}
            />

            <Drawer.Screen
                name="InternalHotel"
                component={InternalHotel}
                options={{
                    headerShown: false,
                }}
            />

            <Drawer.Screen
                name="InternalMenu"
                component={InternalMenu}
                options={{
                    headerShown: false,
                }}
            />

            <Drawer.Screen
                name="InternalTour"
                component={InternalTour}
                options={{
                    headerShown: false,
                }}
            />

            <Drawer.Screen
                name="InternalProduct"
                component={InternalProduct}
                options={{
                    headerShown: false,
                }}
            />

            <Drawer.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                }}
            />

            <Drawer.Screen
                name="CheckIn"
                component={CheckIn}
                options={{
                    headerShown: false,
                }}
            />

            <Drawer.Screen
                name="CheckOut"
                component={CheckOut}
                options={{
                    headerShown: false,
                }}
            />

            <Drawer.Screen 
                name="Chat"
                component={Chat}
                options={{
                    headerShown: false,
                }}
            />

            <Drawer.Screen 
                name="Extract"
                component={Extract}
                options={{
                    headerShown: false,
                }}
            />

            <Drawer.Screen 
                name="Payment"
                component={Payment}
                options={{
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    )
}

export default RoutesDrawer;
