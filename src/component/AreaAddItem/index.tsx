import React, { useState } from 'react'
import { newItemProps } from '../AddItem'

const AreaAddItem: React.FC<newItemProps> = ({ newItem, onChange, setNewItem }) => {

  const [valueSite, setValueSite] = useState('')
  const [valueLogin, setValueLogin] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  const clearInput = () => {
    setValueSite('')
    setValuePassword('')
  }

  const onChangeSite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueSite(event.target.value)
    setNewItem({
      site: event.target.value,
      login: newItem.login,
      password: newItem.password,
      id: newItem.id
    })
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuePassword(event.target.value)
    setNewItem({
      site: newItem.site,
      login: newItem.login,
      password: event.target.value,
      id: newItem.id
    })
  }

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueLogin(event.target.value)
    setNewItem({
      site: newItem.site,
      login: event.target.value,
      password: newItem.password,
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
        <span>login</span>
        <input value={valueLogin} onChange={onChangeLogin} />
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