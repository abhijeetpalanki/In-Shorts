import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import axios from "axios";

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=c710b32a3ba24ef8800f06e0fb90158a"
      )
      .then(function (response) {
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;
