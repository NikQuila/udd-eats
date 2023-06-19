import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CartItem, Product } from "../utils/types";
import fonts from "../utils/fonts";
import CustomButton from "./CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import colors from "../utils/colors";
import { selectCart } from "../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/cart/cart.actions";

type props = {
  product: CartItem;
};

const CartItemCard = ({ product }: props) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleAddToCart = (suma: number) => {
    const copyCart = { ...cart, cartItems: [...cart.cartItems] };
    const cartItemIndex = copyCart.cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (cartItemIndex !== -1) {
      const updatedItem = {
        ...copyCart.cartItems[cartItemIndex],
        quantity: copyCart.cartItems[cartItemIndex].quantity + suma,
      };

      copyCart.cartItems[cartItemIndex] = updatedItem;
    } else {
      copyCart.cartItems.push({ ...product, quantity: 1 });
    }

    copyCart.total += product.price * suma;
    dispatch(setCart(copyCart));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.imageUrl }} />
      </View>
      <View style={styles.cartIconContainer}>
        <Ionicons name="cart-outline" size={18} color="white" />
        <Text
          style={{
            color: "white",
            fontFamily: fonts.poppinsSemiBold,
            marginTop: 4,
          }}
        >
          {product.quantity}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            gap: 10,
            marginTop: 10,
          }}
        >
          {product.quantity > 0 && (
            <CustomButton
              title="-"
              fontSize={16}
              textColor="white"
              backgroundColor={"#bf0410"}
              onPress={() => handleAddToCart(-1)}
              height={40}
              width={40}
            />
          )}
          <CustomButton
            title="+"
            fontSize={16}
            textColor="white"
            backgroundColor={colors.appColor}
            onPress={() => handleAddToCart(1)}
            height={40}
            width={40}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItemCard;

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    position: "relative",
  },
  cartIconContainer: {
    position: "absolute",
    top: -14,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.appColor,
    borderRadius: 20,
    padding: 4,
    paddingHorizontal: 6,
    gap: 2,
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    resizeMode: "contain",
  },
  infoContainer: {},
  title: {
    fontSize: 14,
    fontFamily: fonts.poppinsRegular,
    textAlign: "center",
    marginTop: 4,
  },
  description: {
    fontSize: 12,
    fontFamily: fonts.poppinsRegular,
    color: "gray",
  },
  price: {
    fontSize: 14,
    fontFamily: fonts.poppinsSemiBold,
    textAlign: "center",
  },
});
