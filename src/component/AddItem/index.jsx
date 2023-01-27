import React, { useState } from 'react'
import AreaAddItem from '../AreaAddItem'


const AddItem = ({ newItem, onChange, setNewItem }) => {

  const [selectButton, setSelectButton] = useState(false)
  const onClickButton = (selectButton) => {
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
