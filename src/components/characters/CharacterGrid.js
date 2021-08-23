import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading, item1, isLoading1 }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className ='cards'>
      {items.map((item, index) => (
        <CharacterItem key={item.char_id} item={item} item1={item1[index]}></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid
