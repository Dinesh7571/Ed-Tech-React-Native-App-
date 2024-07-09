import { StyleSheet, Text, TouchableOpacity, View, FlatList, StatusBar, ActivityIndicator } from 'react-native';
import React from 'react';
import useData from '../Hooks/useData';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Roadmaps = () => {
  const { data, error, isLoading } = useData("/roadmaps");
  const color = ['#5AB2FF', '#FDDE55', '#FF76CE', '#7743DB', '#7743DB', '#FF9B9B']
  return (
    <View style={{ backgroundColor: '#011b31', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar backgroundColor={"#011b31"} barStyle="light-content" />
      {isLoading ?
          <ActivityIndicator size={50} />
           :
        <FlatList
          data={data}
          renderItem={({ item, index }) => <RenderComponent Title={item.title} Url={item.link} Color={color[index % 6]} />}
          keyExtractor={item => item._id}
          numColumns={2} // Render items in two columns
          contentContainerStyle={{ padding: 10 }} // Add padding around the FlatList content
        />
      }
    </View>
  );
};

export default Roadmaps;

const RenderComponent = ({ Title, Url, Color }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    activeOpacity={0.7}
      onPress={() => {
        navigation.navigate({
          name: 'ViewPdf',
          params: { url: Url },
        });
      }}
      style={[styles.container, { backgroundColor: Color }]}>
     <Icon name='sitemap' size={50} color='white' />
      <Text style={styles.title}>{Title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 15,
    borderRadius: 10,
    width: "47%",
    height: 120,

    elevation: 10,
  },
  title: {
    textAlign:'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
