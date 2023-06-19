import { RouteProp } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationScreensList } from "../utils/screen-types";
import ProductCard from "../components/ProductCard";
import fonts from "../utils/fonts";
import { useState } from "react";
import colors from "../utils/colors";

type RouteProps = RouteProp<NavigationScreensList, "products">;

type props = {
  route: RouteProps;
};

const LocalProductsScreens = ({ route }: props) => {
  const { local } = route.params;

  const [selectedType, setSelectedType] = useState(local.productsTypes[0]);

  const handleProductTypePress = (productType: string) => {
    setSelectedType(productType);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Productos {local.name}</Text>
      <View style={styles.productTypeContainer}>
        {local.productsTypes.map((productType) => (
          <TouchableOpacity
            key={productType}
            onPress={() => handleProductTypePress(productType)}
          >
            <Text
              style={[
                styles.productTypeText,
                productType === selectedType && { color: colors.appColor },
              ]}
            >
              {productType}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.productList}>
        {local.products
          .filter((product) => product.type === selectedType)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </View>
    </ScrollView>
  );
};

export default LocalProductsScreens;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 20,
    marginBottom: 10,
  },
  productTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
  productTypeText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // si quieres que haya espacio entre los elementos
    gap: 20,
  },
});
