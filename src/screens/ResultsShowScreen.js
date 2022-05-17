import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    // console.log(result);

    const getSingleResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() =>{
        getSingleResult(id);
    }, []);
    if(!result){
        return null;
    }

    return (
        <View>
          <Text style={styles.name}>{result.name}</Text>
          <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
              return <Image style={styles.image} source={{ uri: item }} />;
            }}
          />
        </View>
      );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width:300,
        borderRadius:4,
        marginBottom: 5,
        marginLeft: 10
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
      margin: 10
  }
});

export default ResultsShowScreen;