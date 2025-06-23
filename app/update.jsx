import {View, Text, TextInput, Pressable, ScrollView} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useContext, useEffect }  from 'react';
import { TourismContext } from './../contexts/tourismContextProvider';

export default function Update() {
    const { TourismSites, setTourismSites } = useContext(TourismContext);

    const editTourismSite = (site) => {
        setSelectedTourismSite(site);
    }

    const saveEditedSite = () => {
      const updatedSites = TourismSites.map(site =>
        site.name === selectedTourismSite.name ? { ...selectedTourismSite } : site
      );
      setTourismSites(updatedSites);
    };

    const [selectedTourismSite, setSelectedTourismSite] = useState({
        name: '',description: '',location: '',rating: 0, picture: '',visitations: 0});

    return (
        <ScrollView  style={{flex:1, height:"100%",  marginHorizontal:10}}>

           <Text style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 20 }}>Update Tourism Site</Text>

           <Text>Name:</Text>
               <TextInput
                   style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '90%', marginBottom: 20, }}
                   placeholder="Enter site nam"
                   value = {selectedTourismSite.name}
                   onChangeText={(text) =>
                       setSelectedTourismSite({ ...selectedTourismSite, name: text })
                     }
                  />

           <Text>Rating:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '90%', marginBottom: 20, paddingHorizontal: 10 }}
                    placeholder="Enter site rating (0-5)"
                    onChangeText={text =>
                            setSelectedTourismSite({ ...selectedTourismSite, rating: parseFloat(text) || 0 })
                        }
                    value = {selectedTourismSite.rating.toString()}
                    />
           <Text>Image URL:</Text>
                <TextInput
                    style={{ height: 80, borderColor: 'gray', borderWidth: 1, width: '90%', marginBottom: 20, paddingHorizontal: 10 }} multiline
                    placeholder="Enter image URL" value = {selectedTourismSite.picture}
                    onChangeText={text =>
                            setSelectedTourismSite({ ...selectedTourismSite, picture: text })
                        }
                />
           <Text>Visitations:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '90%', marginBottom: 20, paddingHorizontal: 10 }}
                    placeholder="Enter number of visitations"
                    onChangeText={text =>
                            setSelectedTourismSite({ ...selectedTourismSite, visitations: parseInt(text) || 0 })
                        }
                    value = {selectedTourismSite.visitations.toString()}
                />
           <View style={{flexDirection:'row', gap:24, justifyContent:'center'}}>
                <Pressable onPress={saveEditedSite}
                     style={{ width:'100%',alignItems:'center',padding:4,backgroundColor:'black',borderRadius:4, alignSelf:'flex-start'}}>
                        <Text
                        style={{fontSize:20,fontWeight:'bold',color:'white',width:'100%',textAlign:'center'}}>
                        Save Edited Info
                        </Text>
                </Pressable>
           </View>
           <Picker
              selectedValue={selectedTourismSite}
              onValueChange={(itemValue) => editTourismSite(itemValue)}
            >
            <Picker.Item label="Select a site to update" value = {null} />
              {TourismSites.map((site) => (
                <Picker.Item
                  key={site.name}
                  label={site.name}
                  value={site}
                />
              ))}
          </Picker>

        </ScrollView>
    );
}
{/*           <Text>Description:</Text> */}
{/*               <TextInput */}
{/*                 style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '90%', marginBottom: 20, paddingHorizontal: 10 }} */}
{/*                 placeholder="Enter site description" value = {selectedTourismSite.description} */}
{/*                 multiline/> */}
{/*           <Text>Location:</Text> */}
{/*                 <TextInput */}
{/*                     style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '90%', marginBottom: 20, paddingHorizontal: 10 }} */}
{/*                     placeholder="Enter site location" value= {selectedTourismSite.location} */}
{/*                 /> */}
{/*             <Pressable style={{padding:4,backgroundColor:'white',borderWidth:1, borderColor:'black', borderRadius:4, alignSelf:'flex-start'}}><Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Add New Site </Text></Pressable> */}
