import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, ScrollView, Picker } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
// import { AsyncStorage } from 'react-native';


var watching_id_list = []
var watched_id_list = []
var to_watch_id_list = []

var id_list = []
var title_list = []
var release_date = []
var image_list = []

const Home = () => {

  useEffect( () => {
    getWatchingId();
    getWatchedId();
    getToWatchId();
    getWatchingData();
    getWatchedData();
    getToWatchData();
  }, [])

  const getWatchingId = () => {
    axios.get('http://192.168.137.1:8000/library/get_watching_id')
    .then(res => {
      console.log('res:' , res)
      var myObj = res.data
      var result_length = res.data.results.length
      console.log('result_length:' , result_length)
      for (var i = 0; i < result_length; i++) {
        watching_id_list.push(myObj.results[i].watching_id);
      }
      console.log(watching_id_list)
    }) 
  }

  const getWatchedId = () => {
    axios.get('http://192.168.137.1:8000/library/get_watched_id', {
      headers: {
        'Authorization': `bearer ${access_token}`
      }
    })
    .then(res => {
      console.log('res:' , res)
      var myObj = res.data
      var result_length = res.data.results.length
      console.log('result_length:' , result_length)
      for (var i = 0; i < result_length; i++) {
        watched_id_list.push(myObj.results[i].watching_id);
      }
      console.log(watched_id_list)
    }) 
  }

  const getToWatchId = () => {
    axios.get('http://192.168.137.1:8000/library/get_to_watch_id')
    .then(res => {
      console.log('res:' , res)
      var myObj = res.data
      var result_length = res.data.results.length
      console.log('result_length:' , result_length)
      for (var i = 0; i < result_length; i++) {
        to_watch_id_list.push(myObj.results[i].watching_id);
      }
      console.log(to_watch_id_list)
    }) 
  }


  const getWatchingData = () => {
    axios.get('https://api.themoviedb.org/3/movie/' + movie_id +'?api_key=161b61c9dfebca02c100c2062fe725c5&language=en-US')
    .then(res => {
      console.log('res:' , res)
      var myObj = res.data
      var result_length = res.data.results.length
      console.log('result_length:' , result_length)
      for (var i = 0; i < result_length; i++) {
        id_list.push(myObj.results[i].id);
        title_list.push(myObj.results[i].original_title);
        overview_list.push(myObj.results[i].overview);
        var temp = myObj.results[i].release_date;
        release_date.push(temp.substring(0, 4));
        image_list.push( "http://image.tmdb.org/t/p/w780" + myObj.results[i].poster_path)
      }
      console.log(image_list)
    }) 
  }

  

  const [watching, setWatching] = useState([

    { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9', title: 'Avengers: End Game', released: '2019 ‧ Action/Sci-fi ‧ 3h 2m', key: '1' },
    { image: 'https://www.spotlightstheatre.co.uk/wordpress/wp-content/uploads/2019/11/f_frozen2_header_mobile_18432_d258f93f.jpeg', title: 'Frozen II', released: '2019 ‧ Animation/Musical ‧ 1h 43m', key: '2' },
    { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P', title: 'Alita: Battle Angel', released: '2019 ‧ Action/Sci-fi ‧ 2h 2m', key: '3' },
    { image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg', title: 'The Irish Man', released: '2019 ‧ Crime/Drama ‧ 3h 30m', key: '4' },
    { image: 'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg', title: 'John Wick Chapter 3', released: '2019 ‧ Action/Thriller ‧ 2h 10m', key: '5' },
  ]);

  const [toWatch, setToWatch] = useState([

    { image: 'https://www.spotlightstheatre.co.uk/wordpress/wp-content/uploads/2019/11/f_frozen2_header_mobile_18432_d258f93f.jpeg', title: 'Frozen II', released: '2019 ‧ Animation/Musical ‧ 1h 43m', key: '2' },
    { image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg', title: 'The Irish Man', released: '2019 ‧ Crime/Drama ‧ 3h 30m', key: '4' },
    { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9', title: 'Avengers: End Game', released: '2019 ‧ Action/Sci-fi ‧ 3h 2m', key: '1' },
    { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P', title: 'Alita: Battle Angel', released: '2019 ‧ Action/Sci-fi ‧ 2h 2m', key: '3' },
    { image: 'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg', title: 'John Wick Chapter 3', released: '2019 ‧ Action/Thriller ‧ 2h 10m', key: '5' },
  ]);

  const [watched, setWatched] = useState([

    { image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg', title: 'The Irish Man', released: '2019 ‧ Crime/Drama ‧ 3h 30m', key: '4' },
    { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9', title: 'Avengers: End Game', released: '2019 ‧ Action/Sci-fi ‧ 3h 2m', key: '1' },
    { image: 'https://www.spotlightstheatre.co.uk/wordpress/wp-content/uploads/2019/11/f_frozen2_header_mobile_18432_d258f93f.jpeg', title: 'Frozen II', released: '2019 ‧ Animation/Musical ‧ 1h 43m', key: '2' },
    { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P', title: 'Alita: Battle Angel', released: '2019 ‧ Action/Sci-fi ‧ 2h 2m', key: '3' },
    { image: 'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg', title: 'John Wick Chapter 3', released: '2019 ‧ Action/Thriller ‧ 2h 10m', key: '5' },
  ]);

  const [gallery, setgallery] = useState([

    { image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg', title: 'The Irish Man', released: '2019 ‧ Crime/Drama ‧ 3h 30m', key: '4' },
    { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9', title: 'Avengers: End Game', released: '2019 ‧ Action/Sci-fi ‧ 3h 2m', key: '1' },
    { image: 'https://www.spotlightstheatre.co.uk/wordpress/wp-content/uploads/2019/11/f_frozen2_header_mobile_18432_d258f93f.jpeg', title: 'Frozen II', released: '2019 ‧ Animation/Musical ‧ 1h 43m', key: '2' },
    { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P', title: 'Alita: Battle Angel', released: '2019 ‧ Action/Sci-fi ‧ 2h 2m', key: '3' },
    { image: 'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg', title: 'John Wick Chapter 3', released: '2019 ‧ Action/Thriller ‧ 2h 10m', key: '5' },
  ]);

  const [list, setList] = useState([
    // { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD', key: '1' },
    // { image: 'https://upload.wikimedia.org/wikipedia/en/7/7a/1917poster.jpg', key: '2' },
    // { image: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg', key: '3' },
    // { image: 'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/spies-in-disguise-et00072276-10-03-2018-03-41-39.jpg', key: '4', },
    // { image: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg', key: '5' },
  ]);

  const carouselRef = useRef(null);

  const sliderWidth = Dimensions.get('window').width;
  const [selectedValue, setSelectedValue] = useState("");

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={{ uri: item.image }} style={styles.carouselImage} />
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselReleased}>{item.released}</Text>
        <View style={styles.picker}>
          <Picker
            placeholder="Add to"
            style={{ color: 'black', fontWeight: 'bold' }}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Move to" value="" />
            <Picker.Item label="Watching List" value="watching" />
            <Picker.Item label="To Watch List" value="towatch" />
            <Picker.Item label="Watched List" value="watched" />
          </Picker>
        </View>
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'rgb(28, 27, 27)', flex: 1 }}>
        <StatusBar backgroundColor='rgb(28, 27, 27)' barStyle='light-content' />
        <Text style={{ color: 'rgb(247, 156, 59)', fontSize: 30, fontWeight: 'bold', marginLeft: 140, }}>Your Lists</Text>
        <View style={styles.carouselContentContainer}>
          <View style={{ ...StyleSheet.absoluteFill, backgroundColor: 'rgb(28, 27, 27)' }}>
            <View style={{ paddingTop: 20 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Watching</Text>
              <View style={styles.carouselContainerView}>
                <Carousel
                  data={watching}
                  renderItem={renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={sliderWidth}
                  ref={carouselRef}
                  inActiveOpacity={0.4}
                />
              </View>
            </View>

            <View>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>To Watch</Text>
              <View style={styles.carouselContainerView}>
                <Carousel
                  data={toWatch}
                  renderItem={renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={sliderWidth}
                  ref={carouselRef}
                  inActiveOpacity={0.4}
                />
              </View>
            </View>

            <View>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>Watched</Text>
              <View style={styles.carouselContainerView}>
                <Carousel
                  data={watched}
                  renderItem={renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={sliderWidth}
                  ref={carouselRef}
                  inActiveOpacity={0.4}
                />
              </View>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>

  );
}

export default Home;

const styles = StyleSheet.create({
  carouselImage: {
    width: 100,
    height: 160,
    borderRadius: 10,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  carouselTitle: {
    paddingLeft: 100,
    color: 'white',
    position: 'absolute',
    top: 5,
    left: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  carouselReleased: {
    paddingLeft: 100,
    color: 'white',
    position: 'absolute',
    top: 30,
    left: 10,
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14
  },
  carouselContainerView: {
    width: '50%',
    height: 175,
  },
  picker: {
    paddingLeft: 100,
    bottom: 60,
    left: 1,
    marginLeft: 100,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'rgb(247, 156, 59)'
  }
});
