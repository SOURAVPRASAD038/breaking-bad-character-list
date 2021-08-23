import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  // For Quotes:
    const [item1, setItems1] = useState([])
    const [isLoading1, setIsLoading1] = useState(true)
    const [query1, setQuery1] = useState('')
  
    useEffect(() => {
      const getItems = async () => {
        setIsLoading1(true)
        const result1 = await axios(
          `https://www.breakingbadapi.com/api/quotes${query1}`
        )
  
        console.log(result1.data)
  
        setItems1(result1.data)
        setIsLoading1(false)
      }
  
      getItems()
    }, [query1])
// 

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} item1={item1}/>
    </div>
  )
}

export default App
