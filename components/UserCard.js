// components/UserCard.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const UserCard = ({ user, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
      <Text>{user.company.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  name: { fontWeight: "bold", fontSize: 16 },
});

export default UserCard;
