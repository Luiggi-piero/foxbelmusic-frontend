import { createContext, ReactNode, useContext, useState } from 'react';

interface SearchContextType {
    isValid: boolean,
    valid: () => void,
    invalid: () => void
}

const SearchContext = createContext<SearchContextType | null>(null);

interface SearchProviderProps {
    children: ReactNode; // Permite cualquier tipo de contenido como hijos
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
    const [isValid, setIsValid] = useState(false);

    const valid = () => setIsValid(true);
    const invalid = () => setIsValid(false);

    return (
        <SearchContext.Provider value={{
            isValid,
            valid,
            invalid
        }}>
            {children}
        </SearchContext.Provider>
    )
};

export const useSearch = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch debe ser usado dentro de un SearchProvider");
    }
    return context
};