import { Stack, Tabs } from 'expo-router';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TourismContextProvider } from './../contexts/tourismContextProvider';

export default function Layout() {
  return (
      <TourismContextProvider>
        <Tabs>
            <Tabs.Screen
            name="index"
            options = {{title: "AfriTour",
                tabBarIcon: ({ color }) => <MaterialIcons name="house" size={30} color={color} />,}}
            />
            <Tabs.Screen
            name="update"
            options = {{title: "Update",
                tabBarIcon: ({ color }) => <MaterialIcons name="edit" size={30} color={color} />,}}/>
            <Tabs.Screen
                    name="more"
                    options = {{title: "More",
                        tabBarIcon: ({ color }) => <MaterialIcons name="more" size={30} color={color} />,}}/>
        </Tabs>
    </TourismContextProvider>
  );
}