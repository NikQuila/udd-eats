import { ScrollView, StyleSheet, Text, View } from "react-native";
import fonts from "../utils/fonts";
import { useSelector } from "react-redux";
import { selectCart } from "../store/cart/cart.selector";
import CartItemCard from "../components/CartItemCard";
import { formatNumber } from "../utils/functions";
import CustomButton from "../components/CustomButton";
import colors from "../utils/colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationScreensList } from "../utils/screen-types";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = StackNavigationProp<NavigationScreensList, "cart">;

const CartScreen = () => {
  const cart = useSelector(selectCart);
  const navigation = useNavigation<NavigationProp>();

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Productos Seleccionados</Text>
        <View style={styles.productList}>
          {cart.cartItems.map((item) => (
            <CartItemCard key={item.id} product={item} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.totalContainer}>
        <View>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPriceText}>${formatNumber(cart.total)}</Text>
        </View>
        <View>
          <CustomButton
            title="Ir al pagar"
            fontSize={16}
            textColor="white"
            backgroundColor={colors.appColor}
            onPress={() => navigation.navigate("payment")}
            height={40}
            width={160}
          />
        </View>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.poppinsRegular,
    marginVertical: 20,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // si quieres que haya espacio entre los elementos
    gap: 20,
  },
  totalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
  },
  totalPriceText: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 18,
  },
});
