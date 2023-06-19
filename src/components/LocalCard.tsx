import {
  StyleSheet,
  View,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Local } from "../utils/types";
import fonts from "../utils/fonts";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationScreensList } from "../utils/screen-types";
import { useNavigation } from "@react-navigation/native";

type props = {
  local: Local;
};

type NavigationProp = StackNavigationProp<NavigationScreensList, "locals">;

const LocalCard = ({ local }: props) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("products", { local })}
    >
      <Image
        style={styles.localImage}
        source={{ uri: local.products[0].imageUrl }}
      />
      <View style={[styles.row, { justifyContent: "space-between" }]}>
        <View style={styles.row}>
          <Image style={styles.avatarImage} source={{ uri: local.imageUrl }} />
          <View>
            <Text style={styles.localNameText}>{local.name}</Text>
            <View style={[styles.row, { marginLeft: 10 }]}>
              <Ionicons name="time-outline" size={18} />
              <Text style={styles.timeDeliveryText}>
                {local.deliveryTime} min
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={14} color="#EC7F1E" />
          <Text style={styles.ratingText}>{local.rating}</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          marginVertical: 10,
        }}
      ></View>
    </TouchableOpacity>
  );
};

export default LocalCard;

const styles = StyleSheet.create({
  localImage: {
    width: 300,
    height: 160,
    resizeMode: "contain",
    borderRadius: 10,
    marginBottom: 4,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "contain",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  localNameText: {
    fontSize: 18,
    fontFamily: fonts.poppinsSemiBold,
    marginLeft: 10,
  },
  timeDeliveryText: {
    fontFamily: fonts.poppinsRegular,
    marginTop: 4,
    marginLeft: 6,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(236, 127, 30, 0.30)", // yellow background with opacity
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  ratingText: {
    fontSize: 14,
    marginTop: 4,
    marginLeft: 2,
    fontFamily: fonts.poppinsSemiBold,
  },
});
