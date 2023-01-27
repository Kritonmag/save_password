import React, { useState } from 'react'
import AddItem from './AddItem';

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
    setImportantData([...importantData, item])
    setNewItem({
      site: '',
      login: '',
      password: '',
      id: newItem.id + 1
    })
  }

  const onSelect = (item: newItem) => {
    setSelectItem({
      site: item.site,
      login: item.login,
      password: item.password,
      id: item.id
    })
  }

  return (
    <>
      <h1>SAVE PASSWORD</h1>
      <AddItem newItem={newItem} onChange={onChange} setNewItem={setNewItem} />
      <ul>
        {
          importantData.map((item) => {
            return <li key={item.id} onClick={() => onSelect(item)}>{item.site}</li>
          })
        }
      </ul>
      <div>
        <div>Название сайта<span>  {selectItem.site}</span></div>
        <div>LOGIN<span>   {selectItem.login}</span></div>
        <div>PASSWORD<span>  {selectItem.password}</span></div>
      </div>
      {/* <button onClick={() => onChange(newItem)}>ADD NEW SITE AND PASSWORD</button> */}
    </>
  )
}

export default Home
