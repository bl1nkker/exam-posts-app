import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from '../screens/mainScreen/MainScreen'
import PostScreen from '../screens/postScreen/PostScreen'
import BookedScreen from '../screens/bookedScreen/BookedScreen '
import { AboutScreen } from '../screens/aboutScreen/AboutScreen'
import { CreateScreen } from '../screens/createScreen/CreateScreen'
import { THEME } from '../theme'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'



export const AppNavigation = (props) => {

    const Stack = createNativeStackNavigator()
    const Tab = (Platform.OS === 'android') ? createMaterialBottomTabNavigator() : createBottomTabNavigator()
    const Drawer = createDrawerNavigator()

    const screenOptions = {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
    }


    const PostNavigator = () => {
        return (
            <Stack.Navigator
                initialRouteName='MainScreen'
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                    options={MainScreen.navigationOption}
                />
                <Stack.Screen
                    name="PostScreen"
                    component={PostScreen}
                    options={PostScreen.navigationOption}
                />
            </Stack.Navigator>
        )
    }

    const BookedNavigator = () => {
        return (
            <Stack.Navigator
                // initialRouteName='MainScreen'
                screenOptions={screenOptions}>

                <Stack.Screen
                    name="BookedScreen"
                    component={BookedScreen}
                    options={BookedScreen.navigationOption}
                />

                <Stack.Screen
                    name="PostScreen"
                    component={PostScreen}
                    options={PostScreen.navigationOption}
                />
            </Stack.Navigator>
        )
    }
    const AboutNavigator = () => {
        return (
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen
                    name='AboutScreen'
                    component={AboutScreen}
                    options={AboutScreen.navigationOption}
                />
            </Stack.Navigator>
        )
    }
    const CreateNavigator = () => {
        return (
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen
                    name='CreateScreen'
                    component={CreateScreen}
                    options={CreateScreen.navigationOption}
                />
            </Stack.Navigator>
        )
    }
    const AndroidConfig = {
        // headerShown: false,
        shifting: 'true',
        barStyle: { backgroundColor: THEME.MAIN_COLOR },
        postScreenOptions: {
            tabBarLabel: 'Все',
            tabBarIcon: ({ focused }) => (<Ionicons name='ios-albums' size={25} color={focused ? '#fff' : "#4d5156"} />)
        },
        bookedScreenOptions: {
            tabBarLabel: 'Избранное',
            tabBarIcon: ({ focused, }) => (<Ionicons name='ios-star' size={25} color={focused ? '#fff' : "#4d5156"} />)
        }
    }

    const IosConfig = {
        screenOptions: {
            headerShown: false,
        },
        postScreenOptions: {
            tabBarLabel: 'Все',
            tabBarIcon: ({ focused }) => (<Ionicons name='ios-albums' size={25} color={focused ? THEME.MAIN_COLOR : "#4d5156"} />)
        },
        bookedScreenOptions: {
            tabBarLabel: 'Избранное',
            tabBarIcon: ({ focused }) => (<Ionicons name='ios-star' size={25} color={focused ? THEME.MAIN_COLOR : "#4d5156"} />)
        }
    }

    const BottomNavigator = () => {
        return (
            <Tab.Navigator
                initialRouteName='Post'
                screenOptions={{ headerShown: false }}
                barStyle={AndroidConfig.barStyle}
                shifting={AndroidConfig.shifting}
            >
                <Tab.Screen
                    name="Post"
                    component={PostNavigator}
                    options={Platform.OS === 'android' ? AndroidConfig.postScreenOptions : IosConfig.postScreenOptions}
                />

                <Tab.Screen name="Booked"
                    component={BookedNavigator}
                    options={Platform.OS === 'android' ? AndroidConfig.bookedScreenOptions : IosConfig.bookedScreenOptions}
                />
            </Tab.Navigator>
        )
    }
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, activeTintColor: THEME.MAIN_COLOR, labebStyle: { fontFamily: 'open-bold' } }}>
            <Drawer.Screen
                name='Bottom'
                component={BottomNavigator}
                options={{
                    drawerLabel: 'Главная',
                    //drawerIcon :  ({ focused }) => (<Ionicons name='ios-star' size={25} color={focused ? THEME.MAIN_COLOR : "#4d5156"} />)
                }}
            />
            <Drawer.Screen
                name='About'
                component={AboutNavigator}
                options={{ drawerLabel: 'О приложении' }}
            />
            <Drawer.Screen
                name='Create'
                component={CreateNavigator}
                options={{ drawerLabel: 'Новый пост' }}
            />
        </Drawer.Navigator>
    )
}




