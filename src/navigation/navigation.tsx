import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LocalsScreen from "../screens/LocalsScreen";
import Navbar from "../components/Navbar";
import LocalProductsScreens from "../screens/LocalProductsScreen";
import { NavigationScreensList } from "../utils/screen-types";
import CartScreen from "../screens/CartScreen";
import ConfirmScreen from "../screens/PaymentScreen";

const Stack = createStackNavigator<NavigationScreensList>();

const CustomHeader = () => <Navbar />;

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="locals"
          component={LocalsScreen}
          options={{ header: CustomHeader }}
        />
        <Stack.Screen
          name="products"
          component={LocalProductsScreens}
          options={{ header: CustomHeader }}
        />
        <Stack.Screen
          name="cart"
          component={CartScreen}
          options={{ headerTitle: "Tu Carrito" }}
        />
        <Stack.Screen
          name="payment"
          component={ConfirmScreen}
          options={{ headerTitle: "Checkout" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
