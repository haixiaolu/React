import { createContext } from "react";

const BooksContext = createContext();

function Provider( {children }) {
    const [count, setCound] = useState(5);

    const valueToShare = {
        count,
        incrementCount: () => {
            setCount(count + 1);
        },
    };
    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export default BooksContext;