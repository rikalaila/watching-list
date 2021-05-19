import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar, ScrollView, ImageBackground, TextInput, Picker} from 'react-native';
import {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-anchor-carousel';
import {Feather} from '@expo/vector-icons';
import axios from 'axios';

var id_list = []
var title_list = []
var overview_list = []
var release_date = []
var image_list = []

const itemGallery = () => {
    
}

const Browse= () => {

  useEffect( () => {
    getData();
  }, [])

  const getData = () => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=161b61c9dfebca02c100c2062fe725c5')
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

  const [background,setBackground] = useState({
    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
    name: 'Avengers: End Game',
    stat: '2019 ‧ Action/Sci-fi ‧ 3h 2m',
    desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
  })

  const [gallery, setgallery] = useState([

    {image:image_list[0], title:title_list[0],released: release_date[0] ,key: id_list[0] , desc: overview_list[0]},
    {image:image_list[1], title:title_list[1],released: release_date[1] ,key: id_list[1] , desc: overview_list[1]},
    {image:image_list[2], title:title_list[2],released: release_date[2] ,key: id_list[2] , desc: overview_list[2]},
    {image:image_list[3], title:title_list[3],released: release_date[3] ,key: id_list[3] , desc: overview_list[3]},
    {image:image_list[4], title:title_list[4],released: release_date[4] ,key: id_list[4] , desc: overview_list[4]},
    // { image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9', title: 'Avengers: End Game',released: '2019 ‧ Action/Sci-fi ‧ 3h 2m' ,key: '1' , desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.' },
    // { image:'https://www.spotlightstheatre.co.uk/wordpress/wp-content/uploads/2019/11/f_frozen2_header_mobile_18432_d258f93f.jpeg', title: 'Frozen II',released: '2019 ‧ Animation/Musical ‧ 1h 43m',  key: '2' , desc: 'Elsa the Snow Queen has an extraordinary gift -- the power to create ice and snow. But no matter how happy she is to be surrounded by the people of Arendelle, Elsa finds herself strangely unsettled.' },
    // { image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P', title: 'Alita: Battle Angel',released: '2019 ‧ Action/Sci-fi ‧ 2h 2m',key: '3', desc: 'Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.' },
    // { image:'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg', title: 'The Irish Man',released: '2019 ‧ Crime/Drama ‧ 3h 30m', key: '4', desc: 'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa.' },
    // { image:'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg', title: 'John Wick Chapter 3',released: '2019 ‧ Action/Thriller ‧ 2h 10m', key: '5', desc: 'John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.' },
  ]);

  // const [list, setList] = useState([
  //   { image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD', key: '1' },
  //   { image:'https://upload.wikimedia.org/wikipedia/en/7/7a/1917poster.jpg',key: '2' },
  //   { image:'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg', key: '3'},
  //   { image:'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/spies-in-disguise-et00072276-10-03-2018-03-41-39.jpg', key: '4', },
  //   { image:'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg', key: '5' },
  // ]);

  const carouselRef = useRef(null);

  const {width, height} = Dimensions.get('window')

  const renderItem = ({item, index}) => {
    return (
    <View>
      <TouchableOpacity
        onPress={() => { 
            carouselRef.current.scrollToIndex(index);
            setBackground({
                uri: item.image,
                name: item.title,
                stat: item.released,
                desc: item.desc
            })
            }
        }
      >
        <Image source={{uri: item.image}} style={styles.carouselImage} />
        <Text style={styles.carouselText}>{item.title}</Text>
      </TouchableOpacity>
    </View>
    )
  }

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <ScrollView style={{backgroundColor: '#000'}} blurRadius={100}>
      <StatusBar backgroundColor='#000' barStyle='light-content' />

      <View style={styles.carouselContentContainer}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
            <ImageBackground source={{ uri: background.uri  }} style={styles.ImageBg} blurRadius={10}>
              <View style={styles.SearchboxContainer}>
                <TextInput
                placeholder='Search Movies'
                placeholderTextColor='#666'
                style={styles.Searchbox}
                >
                </TextInput>
                <Feather name='search' size={22} color='#666' style={styles.SearchboxIcon} />
              </View>
              <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical:     10 }}>Movies</Text>
              <View style={styles.carouselContainerView}>
                <Carousel style={styles.carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20} 
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
                />
              </View>

              <View style={styles.movieInfoContainer}>
                <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.movieName}>{background.name}</Text>
                    <Text style={styles.movieStat}>{background.stat}</Text>
                </View>
              </View>
              <View style={{paddingHorizontal: 14, marginTop: 14}}>
                  <Text style={{color: 'white', opacity: 0.8, lineHeight: 20}}>
                      {background.desc}
                  </Text>
              </View>
              <View style={styles.picker}>
                <Picker
                placeholder="Add to"
                  style={{color: 'black', fontWeight: 'bold'}}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Add to List" value="" />
                  <Picker.Item label="Watching List" value="watching" />
                  <Picker.Item label="To Watch LIst" value="towatch" />
                  <Picker.Item label="Watched LIst" value="watched" />
                </Picker>
                </View>
            </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}

export default Browse;

const styles = StyleSheet.create({
  carouselImage: {
      width: 200, 
      height: 320, 
      borderRadius: 10, 
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,0.9)'
  },
  carouselText: {
      paddingLeft: 14,
      color: 'white', 
      position: 'absolute', 
      bottom: 10, 
      left: 2, 
      fontWeight: 'bold'
  },
  carouselIcon: {
      position: 'absolute', 
      top: 15, 
      right: 15
  },
  carouselContentContainer: {
      flex: 1,
      backgroundColor: '#000',
      height: 720,
      paddingHorizontal: 14
    },
  SearchboxContainer: {
      flexDirection: 'row',
      marginVertical: 20, 
      width: '95%',
      alignSelf: 'center', 
      backgroundColor: '#fff', 
      elevation: 10,
      borderRadius: 4,
  },
  Searchbox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  SearchboxIcon: {
    position: 'absolute', 
    right: 20, 
    top: 14
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start',  
  },
  carouselContainerView: {
      width: '100%',
      height:350 ,
      justifyContent: 'center',
      alignItems: 'center',
  },
  carousel: {
      flex:1,
      overflow: 'visible',
  },
  movieName: {
    paddingLeft: 14,
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 20,
    marginBottom: 6
  },
  movieStat: {
    paddingLeft: 14,
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 14, 
    opacity: 0.8
  },
  picker: {
    marginLeft: 15,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    marginTop: 20,
    padding: 1,
    backgroundColor:'white'
  }
});
