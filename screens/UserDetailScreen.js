// screens/UserDetailScreen.js
import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

const UserDetailScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <View style={styles.detailCard}>
        <Text style={styles.name}>{user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone: {user.phone}</Text>
        <Text>Website: {user.website}</Text>
        <Text>Company: {user.company.name}</Text>
        <Text>
          Address: {user.address.street}, {user.address.city},{" "}
          {user.address.zipcode}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailCard: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#f1f1f1",
  },
  name: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});

export default UserDetailScreen;
