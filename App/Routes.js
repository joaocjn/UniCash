import { React } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Paginas/Home.js";
import Extrato from "./Paginas/Extrato.js";
import Transferencia from "./Paginas/Transferencia.js";
import { Global } from "./Styles.js";
import Svg, { Path } from "react-native-svg"

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    height: 66,
                    backgroundColor: '#232D52',
                    // borderTopLeftRadius: 4,
                    // borderTopRightRadius: 4,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: focused ? '#17A7E0' : '#232D52',
                                height: focused ? 76 : 40,
                                width: focused ? 56 : 40,
                                borderRadius: 4,
                            }}
                        >
                            <Image
                                source={require('../App/assets/Home.png')}
                                style={{ width: 30, height: 30 }}
                            />

                        </View>
                    ),
                }}
            />
            
            < Tab.Screen
                name="Tranferência"
                component={Transferencia}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: focused ? '#17A7E0' : '#232D52',
                                height: focused ? 76 : 40,
                                width: focused ? 56 : 40,
                                borderRadius: 4,
                            }}
                        >
                            <Svg
                                width={21}
                                height={17}
                                viewBox="0 0 21 17"
                            >
                                <Path d="M7 17C5.05 17 3.39583 16.3208 2.0375 14.9625C0.679167 13.6042 0 11.95 0 9.99999C0 7.94999 0.729167 6.27915 2.1875 4.98749C3.64583 3.69582 5.275 3.10832 7.075 3.22499L5.45 1.59999C5.3 1.44999 5.225 1.27082 5.225 1.06249C5.225 0.854155 5.3 0.674988 5.45 0.524988C5.6 0.374988 5.77917 0.299988 5.9875 0.299988C6.19583 0.299988 6.375 0.374988 6.525 0.524988L9.475 3.47499C9.55833 3.55832 9.61667 3.64165 9.65 3.72499C9.68333 3.80832 9.7 3.89999 9.7 3.99999C9.7 4.09999 9.68333 4.19165 9.65 4.27499C9.61667 4.35832 9.55833 4.44165 9.475 4.52499L6.525 7.47499C6.375 7.62499 6.2 7.69582 6 7.68749C5.8 7.67915 5.625 7.59999 5.475 7.44999C5.325 7.29999 5.25 7.12082 5.25 6.91249C5.25 6.70415 5.325 6.52499 5.475 6.37499L7.15 4.69999C5.56667 4.66665 4.22917 5.14999 3.1375 6.14999C2.04583 7.14999 1.5 8.43332 1.5 9.99999C1.5 11.5167 2.0375 12.8125 3.1125 13.8875C4.1875 14.9625 5.48333 15.5 7 15.5H9.25C9.46667 15.5 9.64583 15.5708 9.7875 15.7125C9.92917 15.8542 10 16.0333 10 16.25C10 16.4667 9.92917 16.6458 9.7875 16.7875C9.64583 16.9292 9.46667 17 9.25 17H7ZM13.5 17C13.0833 17 12.7292 16.8542 12.4375 16.5625C12.1458 16.2708 12 15.9167 12 15.5V11.5C12 11.0833 12.1458 10.7292 12.4375 10.4375C12.7292 10.1458 13.0833 9.99999 13.5 9.99999H19.5C19.9167 9.99999 20.2708 10.1458 20.5625 10.4375C20.8542 10.7292 21 11.0833 21 11.5V15.5C21 15.9167 20.8542 16.2708 20.5625 16.5625C20.2708 16.8542 19.9167 17 19.5 17H13.5ZM13.5 15.5H19.5V11.5H13.5V15.5ZM13.5 7.99999C13.0833 7.99999 12.7292 7.85415 12.4375 7.56249C12.1458 7.27082 12 6.91665 12 6.49999V2.49999C12 2.08332 12.1458 1.72915 12.4375 1.43749C12.7292 1.14582 13.0833 0.999988 13.5 0.999988H19.5C19.9167 0.999988 20.2708 1.14582 20.5625 1.43749C20.8542 1.72915 21 2.08332 21 2.49999V6.49999C21 6.91665 20.8542 7.27082 20.5625 7.56249C20.2708 7.85415 19.9167 7.99999 19.5 7.99999H13.5Z" fill="white"/>
                            </Svg>
                        </View>
                    ),
                }}
            />

            < Tab.Screen
                name="Extrato"
                component={Extrato}
                options={{
                    //headerShown: false,
                    headerStyle: {
                        backgroundColor: "#232D53",
                    },
                    headerTitleStyle: {
                        fontWeight: "400",
                    },
                    headerTintColor: "#FFFFFF", //Cor do titulo do header.
                    headerTitleAlign: "center", //alinhamento do titulo do header.
                    headerRight: () => (
                        <TouchableOpacity
                            style={styles.icone}
                        >
                            <Image
                                source={require('../App/assets/Export.png')}
                            style={{ width: 24, height: 24 }}
                            />
                        </TouchableOpacity>
                    ), //Botão direito do header.
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: focused ? '#17A7E0' : '#232D52',
                                height: focused ? 76 : 40,
                                width: focused ? 56 : 40,
                                borderRadius: 4,
                            }}
                        >
                            <Image
                                source={require('../App/assets/Extrato.png')}
                                style={{ width: 21, height: 27 }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator >
    );
}
const styles = StyleSheet.create({
    icone: {
        margin: 20
    }
});
export default Routes;