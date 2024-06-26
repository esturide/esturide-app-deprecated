import React, {useState} from "react";
import {styles} from '@/styles/CounterScreenStyle'
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";

export default function CounterScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Buttons screen</ThemedText>
    </ThemedView>
  )
}

