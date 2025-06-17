import React from 'react';
import tourist_sites from './../assets/tourism_site.json';
import {View, Text, ScrollView} from 'react-native';
import TourismSite from './../components/TourismSite';
import {useState} from 'react';

export default function Index() {
    //setsCurrentTouristSite is used to track the current tourist site being displayed
    const [currentTouristSite, setCurrentTouristSite] = useState(0);

    //dynamically filter the tourist sites to only show those with a rating of 5.0 top 3
    const topTourismSites = tourist_sites.filter(site => site.rating == 5.0);

  return (
      <ScrollView style={{flex: 1, height:"100%",backgroundColor: 'black'}}>

        {/* Displaying more tourism sites */}
        <Text style={{color:"white", textAlign:'center', fontWeight:'bold',fontSize:24, padding:20}}> More Tourism Sites </Text>
        {tourist_sites.map((touristSite, index) => (
            <View key={index} style={{padding: 10}}>
                <TourismSite touristSite={touristSite} />
            </View>
        ))}
      </ScrollView>
  );
}