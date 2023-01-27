import React, { useState } from 'react'

const AreaAddItem = ({ newItem, onChange, setNewItem }) => {

  const [valueSite, setValueSite] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  const clearInput = () => {
    setValueSite('')
    setValuePassword('')
  }

  const onChangeSite = (event) => {
    setValueSite(event.target.value)
    setNewItem({
      site: event.target.value,
      password: newItem.password,
      id: newItem.id
    })
  }

  const onChangePassword = (event) => {
    setValuePassword(event.target.value)
    setNewItem({
      site: newItem.site,
      password: event.target.value,
      id: newItem.id
    })
  }


  return (
    <>
      <div>
        <span>site</span>
        <input value={valueSite} onChange={onChangeSite} />
      </div>
      <div>
        <span>password</span>
        <input value={valuePassword} onChange={onChangePassword} />
      </div>
      <button onClick={() => { onChange(newItem), clearInput() }}>ADD</button>
    </>
  )
}

export default AreaAddItem