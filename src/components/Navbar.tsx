import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { selectCart } from "../store/cart/cart.selector";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import { RouteProp } from "@react-navigation/native";
import { NavigationScreensList } from "../utils/screen-types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<NavigationScreensList, "locals">;

const Navbar = () => {
  const navigation = useNavigation<NavigationProp>();
  const cart = useSelector(selectCart);
  const totalItems = cart.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <View style={styles.navbarContainer}>
      <Image
        style={styles.navbarImage}
        source={{
          uri: "https://www.udd.cl/dircom/web/udd/UDD.png",
        }} // Reemplaza con tu URL de imagen
      />
      <TouchableOpacity
        style={styles.cartContainer}
        onPress={() => navigation.navigate("cart")}
      >
        {cart.cartItems.length > 0 && (
          <>
            <Text style={styles.text}>Ver Carrito</Text>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <Ionicons name="cart-outline" size={20} color={colors.appColor} />
              <Text style={styles.text}>{totalItems}</Text>
            </View>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarContainer: {
    width: "100%",
    height: 80, // Ajusta según tus necesidades
    padding: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navbarImage: {
    width: 140, // Ajusta según tus necesidades
    height: 40, // Ajusta según tus necesidades
    borderRadius: 20,
  },
  cartContainer: {
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  text: {
    fontFamily: fonts.poppinsSemiBold,
    color: colors.appColor,
  },
});
