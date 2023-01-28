import React, { useState } from 'react'
import './index.css'

const EditItem = ({ selectItem, setSelectItem, onEditItem }) => {

  const [valueLogin, setValueLogin] = useState(selectItem.login)
  const [valuePassword, setValuePassword] = useState(selectItem.password)

  const onChangeLogin = (event) => {
    setValueLogin(event.target.value)
    setSelectItem({
      site: selectItem.site,
      login: event.target.value,
      password: selectItem.password,
      id: selectItem.id
    })
  }

  const onChangePassword = (event) => {
    setValuePassword(event.target.value)
    setSelectItem({
      site: selectItem.site,
      login: selectItem.login,
      password: event.target.value,
      id: selectItem.id
    })
  }

  console.log(selectItem)

  return (
    <div className='area-edit'>
      <div>LOGIN</div>
      <div>
        <input type="text"
          value={valueLogin}
          onChange={onChangeLogin} />
        <span onClick={() => { onEditItem(selectItem) }}>SAVE DATA</span>
      </div>
      <div>PASSWORD</div>
      <div>
        <input type="text"
          value={valuePassword}
          onChange={onChangePassword} />
        <span>REMOVE DATA</span>
      </div>
    </div>
  )
}

export default EditItem
