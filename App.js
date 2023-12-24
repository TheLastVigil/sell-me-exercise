import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [finishedCount, setFinishedCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Application</Text>
      <View>
        <Text>{finishedCount}</Text>
        <Text>/3</Text>
      </View>
      <View>
        <Button>Choose Shirt</Button>
        <Button>Choose Pants</Button>
        <Button>Choose Shoes</Button>
      </View>
      {finishedCount === 3 && <Button>Done</Button>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: "2rem",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
