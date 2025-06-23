import {View, Text, Pressable, ScrollView} from 'react-native';
import { TourismContext } from './../contexts/tourismContextProvider';
import TourismSite from './../components/TourismSite';
import {useState,useContext} from 'react';
import tourist_sites from './../assets/tourism_site.json';


export default function Index() {
    const { TourismSites } = useContext(TourismContext);
    const [currentTouristSite, setCurrentTouristSite] = useState(0);
    const topTourismSites = TourismSites.filter(site => site.rating == 5.0);

  return (
        <View style={{padding:20,backgroundColor: '#F0F0F0'}}>
            <Text style={{color:"black", textAlign:'center', fontWeight:'bold',fontSize:24}}> Top 3 African Tourism Sites </Text>
            <TourismSite touristSite={topTourismSites[currentTouristSite]} />
            <View style={{flexDirection: 'row', gap:"8", marginTop: 20, justifyContent: 'center'}}>
                <>
                {topTourismSites.slice(0,3).map((site, index) => (
                    <Pressable
                    key={index}
                    onPress={()=> setCurrentTouristSite(index)}

                    //dynamically styles the button based on active tourist site
                    style={{
                        backgroundColor: currentTouristSite === index ? '#007BFF' : '#E0E0E0',
                        padding: 10,
                        borderRadius: 5,
                    }}>
                        <Text style={{color: currentTouristSite === index ? '#FFFFFF' : '#000000'}}>
                            {index + 1}
                        </Text>
                    </Pressable>
                ))}
                </>
            </View>
        </View>

  );
}