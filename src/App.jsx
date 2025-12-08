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

function App() {
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      text: 'Горные походы открывают удивительные природные ландшафты',
      date: new Date()
    },
    {
      title: 'Поход в горы',
      text: 'Думал, что очень много времени...',
      date: new Date()
    },
    {
      title: 'Первая заметка',
      text: 'Создал первую заметку, чтобы...',
      date: new Date()
    }
  ]

  return (
    <div className='app'>

      <LeftPanel>
        <Header/>
        <JournalAddButton/>
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[2].title}
              text={data[2].text}
              date={data[2].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>

      <Body>
        <JournalForm />
      </Body>

    </div>
    )
}

export default App