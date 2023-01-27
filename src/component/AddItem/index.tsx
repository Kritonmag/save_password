import React, { useState } from 'react'
import AreaAddItem from '../AreaAddItem'
import { newItem } from '../Home'

export type newItemProps = {
  newItem: newItem,
  onChange: (item: any) => void,
  setNewItem: (item: newItem) => void
}

const AddItem: React.FC<newItemProps> = ({ newItem, onChange, setNewItem }) => {

  const [selectButton, setSelectButton] = useState(false)
  const onClickButton = (selectButton: boolean) => {
    setSelectButton(!selectButton)
  }


  return (
    <>
      <button onClick={() => onClickButton(selectButton)}>Add item</button>
      {selectButton === true ? <AreaAddItem newItem={newItem} onChange={onChange} setNewItem={setNewItem} /> : <></>}
    </>
  )
}

export default AddItem
