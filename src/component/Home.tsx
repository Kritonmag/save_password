import React, { useState } from 'react'
import AddItem from './AddItem';
import InfoLoginPass from './InfoLoginPass';
import './scss/app.css'

export type newItem = {
  site: string;
  login: string;
  password: string;
  id: number
}

const Home: React.FC = () => {
  const [newItem, setNewItem] = useState<newItem>({
    site: '',
    login: '',
    password: '',
    id: 4
  })
  const [selectItem, setSelectItem] = useState<newItem>({
    site: '',
    login: '',
    password: '',
    id: 0
  })

  const [importantData, setImportantData] = useState([
    {
      site: 'vk',
      login: 'GenaLoveDota',
      password: 'tron',
      id: 1
    }, {
      site: 'ok',
      login: 'Gena',
      password: 'raes143',
      id: 2
    }, {
      site: 'mail',
      login: 'GaLoota',
      password: 'kall',
      id: 3
    }
  ])

  const onChange = (item: newItem) => {
    if (item.site !== '' || item.login !== '' || item.password !== '') {
      setImportantData([...importantData, item])
      setNewItem({
        site: '',
        login: '',
        password: '',
        id: newItem.id + 1
      })
    } else {
      alert('error')
    }
  }

  const onSelect = (item: newItem) => {
    if (selectItem.site !== item.site) {
      setSelectItem({
        site: item.site,
        login: item.login,
        password: item.password,
        id: item.id
      })
    } else {
      setSelectItem({
        site: '',
        login: '',
        password: '',
        id: 0
      })
    }
  }

  const onEditItem = (item: newItem) => {
    let filtered = importantData.filter(function (obj) {
      return obj.id == item.id
    });
    filtered.forEach(function (el) {
      el.site = item.site;
      el.login = item.login;
      el.password = item.password;
      el.id = item.id;
    });
    setImportantData(importantData)
    console.log(importantData)
  }

  return (
    <div className='wrapper'>
      <h1>SAVE PASSWORD</h1>
      <AddItem newItem={newItem} onChange={onChange} setNewItem={setNewItem} />
      <div className='content-area'>
        <ul className='content-list'>
          {
            importantData.map((item) => {
              return <li key={item.id} onClick={() => onSelect(item)}>{item.site}</li>
            })
          }
        </ul>
        <div>
          {selectItem.site !== '' ?
            <InfoLoginPass
              selectItem={selectItem}
              setSelectItem={setSelectItem}
              onEditItem={onEditItem} /> : <></>}
        </div>
      </div>
    </div>
  )
}

export default Home
