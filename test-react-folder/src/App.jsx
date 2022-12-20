import React from 'react'
import UserSource from './components'


const userList = [
  {
    id: 1,
    title: 'Body share locante asta muloco wtf',
    body: 'Kruglye dokhody (pau) dorogiye tryapki Babuli na zhitu, banguyu'
  },
  {
    id: 2,
    title: 'Body share locante asta muloco wtf',
    body: 'Kruglye dokhody (pau) dorogiye tryapki Babuli na zhitu, banguyu'
  },
  {
    id: 3,
    title: 'Body share locante asta muloco wtf',
    body: 'Kruglye dokhody (pau) dorogiye tryapki Babuli na zhitu, banguyu'
  },
  {
    id: 4,
    title: 'Body share locante asta muloco wtf',
    body: 'Kruglye dokhody (pau) dorogiye tryapki Babuli na zhitu, banguyu'
  },
  {
  id: 5,
    title: 'Body share locante asta muloco wtf',
    body: 'Kruglye dokhody (pau) dorogiye tryapki Babuli na zhitu, banguyu'
  }
]

const App = () => {
  if (!userList.length) {
    return (
      <div>
        no data
      </div>
    )
  }

  return (
    <div>
      {userList.map((item, idx) => (
        <UserSource
          key={idx}
          userId={item.id}
          title={item.title}
          bodyText={item.body}
          
        />
        
      ))}
      <h3>Наведи на них</h3>
    </div>
  );
}

export default App;
