import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const scrollView = ({scroll}) => <NewsCard scroll={scroll} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showHorizontalIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_Image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff0',
  },
  banner_Image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
    margin: 5,
    borderRadius: 5,
  },
  headerText: {
    weight: 'bold',
    fontSize: 53,
    color: 'black',
  },
});
export default App;
