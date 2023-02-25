import React, { createContext, useContext, useReducer } from 'react';

// Global state combined reducers
import { rootReducer, initialState } from '../reducers/rootReducer.js';

// export const StateContext = createContext();
export const StoreContext = createContext(); //export ?

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    // Important(!): memoize array value. Else all context consumers update on *every* render
    // const store = React.useMemo(() => [state, dispatch], [state]);
    // return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

    return <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>;
};

// использовать в компонетнтах получить доступ до стора
export function useStoreProvider() {
    return useContext(StoreContext);
}
