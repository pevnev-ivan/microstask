import React, {useCallback, useMemo, useState} from 'react';

const BooksRender = (props: {books: Array<string>, addBook: () => void}) => {
    console.log('Books map fn')
    return (
        <div>
            <button onClick={() => props.addBook()}>Add book</button>
            {props.books.map((e, index) => <li key={index}>{e}</li>)}
        </div>
    )
}

const Books = React.memo(BooksRender)


const UseCallbackExample = () => {
    console.log('Main fn')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'NodeJS', 'TypeScript', 'Redux'])

    const newNooksArray = useMemo(() => {
        return books.filter(e => e.toLowerCase().indexOf('t' ) > -1)
    }, [books])

  const memoizedAddBooks = useCallback(() => {
      setBooks([...books, 'Trigonometry'])
  }, [books])

    return (
        <div>
            <button onClick={() => {setCounter(counter + 1)}}>+</button>

            <p>{counter}</p>
            <Books books={newNooksArray} addBook={memoizedAddBooks}/>
        </div>
    );
};

export default UseCallbackExample;