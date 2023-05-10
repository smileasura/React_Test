import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const { children } = props;

    const [isAdmin, setIsAmin] = useState(false);

    return(
        <AdminFlagContext.Provider value={{isAdmin, setIsAmin}}>
            {children}
        </AdminFlagContext.Provider>
    );
};