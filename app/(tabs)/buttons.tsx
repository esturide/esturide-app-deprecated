import {Text, View} from "react-native";
import styles from "@/styles/GlobalStyles";
import Button from "@/components/Buttons/ButtonExample";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import BtnDepositarVerde from "@/components/Buttons/ButtonDepositGreen";
import ButtonWithdraw from "@/components/Buttons/ButtonWithdraw";
import ButtonDepositBlue from "@/components/Buttons/ButtonDepositBlue";
import React from "react";

export default function demo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Componentes</Text>
      <Button title="Press me!" onPress={() => alert("Button Pressed!")}/>
      <ButtonSubmit title="Label"/>
      <BtnDepositarVerde/>
      <ButtonWithdraw/>
      <ButtonDepositBlue/>
    </View>
  );
}
