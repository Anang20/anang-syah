"use client";

import { createContext, useContext, useState } from "react";

const UIContext = createContext({ isOpen: false, handleOpen: () => {} });

const UIContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen((state) => !state);
    };

    return (
        <UIContext.Provider value={{ isOpen, handleOpen }}>
            {children}
        </UIContext.Provider>
    );
}

const useUIContext = () => {
    return useContext(UIContext);
}

export { UIContextProvider, useUIContext };
