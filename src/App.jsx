import './App.css'
import React, {useState} from 'react';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layout/LeftPanel/LeftPanel.jsx';
import Header from './components/Header/header';
import Body from './layout/Body/body';
import CardButton from './components/CardButton/CardButton.jsx';
import JournalList from './components/JournalList/journalList';
import JournalAddButton from './components/JournalAddButton/journalAddButton';
import JournalForm from './components/JournalForm/JournalForm.jsx';

const INITIAL_DATA = [
    {
      id: 1,
      title: 'Подготовка к обновлению курсов',
      text: 'Горные походы открывают удивительные природные ландшафты',
      date: new Date()
    },
    {
      id: 2,
      title: 'Поход в горы',
      text: 'Думал, что очень много времени...',
      date: new Date()
    }
  ];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: item.data ? new Date(item, date) : new Date(),
      id: Math.max(...oldItems.map(i => i.id)) + 1
  }]);
};

const sortItems = (a, b) => {
  if (a.date < b.date) {
    return 1;
  } else {
    return -1;
  }
}

  return (
    <div className='app'>

      <LeftPanel>
        <Header/>
        <JournalAddButton/>
        <JournalList>
          {items.sort(sortItems).map(el => (
            <CardButton key={el.id}>
              <JournalItem
                title={el.title}
                text={el.text}
                date={el.date}
              />
          </CardButton>
          ))}
        </JournalList>
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem}/>
      </Body>

    </div>
    )
}

export default App