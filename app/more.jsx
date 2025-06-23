import {View, Text, ScrollView} from 'react-native';
import TourismSite from './../components/TourismSite';
import {useContext} from 'react';
import { TourismContext } from './../contexts/tourismContextProvider';


export default function Index() {
    const { TourismSites } = useContext(TourismContext);

  return (
      <ScrollView style={{flex: 1, height:"100%",backgroundColor: 'black'}}>

        {/* Displaying more tourism sites */}
        <Text style={{color:"white", textAlign:'center', fontWeight:'bold',fontSize:24, padding:20}}> More Tourism Sites </Text>
        {TourismSites.map((touristSite, index) => (
            <View key={index} style={{padding: 10}}>
                <TourismSite touristSite={touristSite} />
            </View>
        ))}
      </ScrollView>
  );
}