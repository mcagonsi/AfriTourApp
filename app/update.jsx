import {View, Text, ScrollView} from 'react-native';
export default function Update() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Update Page</Text>
            <Text style={{ marginTop: 10 }}>This is where you can update your tourism site information.</Text>
        </View>
    );
}