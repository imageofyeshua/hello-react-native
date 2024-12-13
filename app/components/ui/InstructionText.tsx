import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/app/constants/colors";

const InstructionText = ({ children, style }: any) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
