import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { selectCart } from "../store/cart/cart.selector";
import fonts from "../utils/fonts";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationScreensList } from "../utils/screen-types";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = StackNavigationProp<NavigationScreensList, "payment">;

const ConfirmScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const cart = useSelector(selectCart);
  const [selectedCard, setSelectedCard] = useState<null | string>(null);
  const [isOrderConfirmed, setOrderConfirmed] = useState(false);

  // Simulación de tarjetas del usuario.
  const userCards = [
    {
      id: "1",
      number: "**** **** **** 1234",
      holderName: "Roberto Pérez",
      cardType: "Visa",
    },
    {
      id: "2",
      number: "**** **** **** 5678",
      holderName: "Agustina López",
      cardType: "MasterCard",
    },
  ];

  const selectCard = (id: string) => {
    setSelectedCard(id);
  };

  const confirmOrder = () => {
    // Aquí lógica para confirmar el pedido.
    setOrderConfirmed(true);
  };

  const handleGoHome = () => {
    navigation.navigate("locals");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Confirmar Pedido</Text>
      {!isOrderConfirmed ? (
        <>
          <Text style={styles.subtitle}>Selecciona una tarjeta de pago:</Text>
          {userCards.map((card) => (
            <TouchableOpacity key={card.id} onPress={() => selectCard(card.id)}>
              <View
                style={[
                  styles.card,
                  card.id === selectedCard ? styles.selectedCard : {},
                ]}
              >
                <Text style={styles.cardNumber}>{card.number}</Text>
                <Text style={styles.cardHolder}>{card.holderName}</Text>
                <Text style={styles.cardType}>{card.cardType}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total a Pagar:</Text>
            <Text style={styles.totalPrice}>${cart.total.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.confirmButton} onPress={confirmOrder}>
            <Text style={styles.confirmButtonText}>Confirmar Pedido</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.thankYouMessage}>
            ¡Muchas gracias por tu compra! Puedes retirar tu pedido en tu local
            en 10 minutos más.
          </Text>
          <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
            <Text style={styles.homeButtonText}>Volver al inicio</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 16,
    marginBottom: 10,
  },
  card: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
  cardType: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    textAlign: "right", // Esto hará que el tipo de tarjeta se muestre a la derecha.
  },
  selectedCard: {
    backgroundColor: "#bbb",
  },
  cardNumber: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
  },
  cardHolder: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
  },
  totalText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 16,
  },
  totalPrice: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 18,
  },
  confirmButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#FFF",
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 16,
  },
  thankYouMessage: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
  homeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
  },
  homeButtonText: {
    color: "#FFF",
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 16,
  },
});
