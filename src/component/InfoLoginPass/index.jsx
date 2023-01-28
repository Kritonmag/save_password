import React, { useState } from 'react'
import EditItem from '../EditItem'
import { newItem } from '../Home'
import './index.css'

const InfoLoginPass = ({ selectItem, setSelectItem, onEditItem }) => {
  const [dataEdit, setDataEdit] = useState(false)
  const [visibilityPassword, setVisibilityPassword] = useState(false)
  const [valueLogin, setValueLogin] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  const onClickVisiblity = () => {
    setVisibilityPassword(!visibilityPassword)
  }

  const onDataEdit = () => {
    setDataEdit(!dataEdit)
  }

  return (
    <>
      <div className='SiteAndPassword'>
        <div>
          <div className='column-login'>
            <div >LOGIN</div>
            <div className='column-login-info'>
              <div className='login-info'>{selectItem.login}</div>
              <div onClick={() => onDataEdit()}
                className='edit-btn'>
                edit
              </div>
            </div>
          </div>
          <div className='column-password'>
            <div>PASSWORD</div>
            <div className='column-password-info'>
              <div
                onClick={() => onClickVisiblity()}
                className={visibilityPassword === false ? 'no-visibility-password' : 'visibility-password'}>
                {selectItem.password}
              </div>
            </div>
          </div>
        </div>
        {dataEdit === true ? <EditItem
          selectItem={selectItem}
          setSelectItem={setSelectItem}
          onEditItem={onEditItem} /> : <></>}
      </div>
    </>
  )
}

export default InfoLoginPass
