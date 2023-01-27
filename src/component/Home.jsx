import React, { useState } from 'react'
import AddItem from './AddItem';



const Home = () => {
  const [areaPassword, setAreaPassword] = useState('no password')
  const [newItem, setNewItem] = useState({
    site: 'Insta',
    password: 'insta234',
    id: 4
  })
  const [importantData, setImportantData] = useState([
    {
      site: 'vk',
      password: 'tron',
      id: 1
    }, {
      site: 'ok',
      password: 'raes143',
      id: 2
    }, {
      site: 'mail',
      password: 'kall',
      id: 3
    }
  ])

  const onChange = (item) => {
    setImportantData([...importantData, item])
    setNewItem({
      site: newItem.site,
      password: newItem.password,
      id: newItem.id + 1
    })
  }

  // console.log(newItem, 'state')

  return (
    <>
      <h1>SAVE PASSWORD</h1>
      <AddItem newItem={newItem} onChange={onChange} setNewItem={setNewItem} />
      <h3>{areaPassword}</h3>
      <ul>
        {
          importantData.map((item) => {
            return <li key={item.id} onClick={() => setAreaPassword(item.password)}>{item.site}</li>
          })
        }
      </ul>
      {/* <button onClick={() => onChange(newItem)}>ADD NEW SITE AND PASSWORD</button> */}
    </>
  )
}

export default Home
