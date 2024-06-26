import React, {useState} from "react";
import {styles} from '@/styles/CounterScreenStyle'
import TouchableText from "@/components/TouchableText";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";

export default function CounterScreen() {
  let [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1)

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{`Counter is in ${count}`}</ThemedText>
      <TouchableText onPress={onPress} content="Push me"/>
    </ThemedView>
  )
}

