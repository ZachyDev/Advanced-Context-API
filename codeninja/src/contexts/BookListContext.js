import { useState,createContext } from "react";

export const BookContext = createContext();
const BookListProvider = (props) => {
    
    // books state
    const [books,setBooks] = useState([
        {id: 1, title: 'Age of Legends', price: 'Ksh 2000'},
        {id: 2, title: 'The Last Pirate', price: 'Ksh 4000'},
        {id: 3, title: 'Billionare Mindsets', price: 'Ksh 1000'}
    ])

  return (
    <BookContext.Provider value={{books, setBooks}}>
        { props.children }
    </BookContext.Provider>
  )
}

export default BookListProvider;