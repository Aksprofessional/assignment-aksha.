// screens/UserListScreen.js
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  TextInput,
  ActivityIndicator,
  Text,
} from "react-native";
import UserCard from "../components/UserCard";

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = users.filter(
      (u) =>
        u.name.toLowerCase().includes(text.toLowerCase()) ||
        u.email.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const renderItem = ({ item }) => (
    <UserCard
      user={item}
      onPress={() => navigation.navigate("UserDetail", { user: item })}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Search by name or email"
        value={search}
        onChangeText={handleSearch}
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          marginBottom: 15,
        }}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : filteredUsers.length === 0 ? (
        <Text>No users found</Text>
      ) : (
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          refreshing={loading}
          onRefresh={fetchUsers}
        />
      )}
    </SafeAreaView>
  );
};

export default UserListScreen;
