import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import locals from "../utils/locals";
import LocalCard from "../components/LocalCard";
import fonts from "../utils/fonts";
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../store/cart/cart.selector";
import { setCart } from "../store/cart/cart.actions";
import { useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

const LocalsScreen = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      const copyCart = { ...cart, cartItems: [] };
      copyCart.total = 0;
      dispatch(setCart(copyCart));
    }, [])
  );
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Locales Disponibles</Text>
      {locals.map((local) => (
        <View key={local.id} style={styles.localContainer}>
          <LocalCard local={local} />
        </View>
      ))}
    </ScrollView>
  );
};

export default LocalsScreen;

const styles = StyleSheet.create({
  container: { marginHorizontal: 30 },
  localContainer: {
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 20,
    marginBottom: 10,
  },
});
