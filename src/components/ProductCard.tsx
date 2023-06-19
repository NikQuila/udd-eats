import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Product } from "../utils/types";
import fonts from "../utils/fonts";
import CustomButton from "./CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import colors from "../utils/colors";
import { selectCart } from "../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/cart/cart.actions";

type props = {
  product: Product;
};

const ProductCard = ({ product }: props) => {
  const [cartCount, setCartCount] = useState(0);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    const copyCart = { ...cart, cartItems: [...cart.cartItems] };
    const cartItemIndex = copyCart.cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (cartItemIndex !== -1) {
      const updatedItem = {
        ...copyCart.cartItems[cartItemIndex],
        quantity: copyCart.cartItems[cartItemIndex].quantity + 1,
      };

      copyCart.cartItems = [
        ...copyCart.cartItems.slice(0, cartItemIndex),
        updatedItem,
        ...copyCart.cartItems.slice(cartItemIndex + 1),
      ];
    } else {
      copyCart.cartItems.push({ ...product, quantity: 1 });
    }

    copyCart.total += product.price;
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
          {cartCount}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <View style={{ alignSelf: "center" }}>
          <CustomButton
            title="Agregar"
            fontSize={12}
            textColor="white"
            backgroundColor={colors.appColor}
            onPress={handleAddToCart}
            height={40}
            width={100}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

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
