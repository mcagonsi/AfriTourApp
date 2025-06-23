import { createContext, useState }  from 'react';
import tourist_sites from './../assets/tourism_site.json';

export const TourismContext = createContext();

export const TourismContextProvider = ({ children }) => {
    const [TourismSites, setTourismSites] = useState(tourist_sites);

    return (
        <TourismContext.Provider value={{ TourismSites, setTourismSites }}>
            {children}
        </TourismContext.Provider>
    );
}