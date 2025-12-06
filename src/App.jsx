import './App.css'
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layout/LeftPanel/LeftPanel.jsx';
import Header from './components/Header/header';
import Body from './layout/Body/body';
import CardButton from './components/CardButton/CardButton.jsx';
import JournalList from './components/JournalList/journalList';
import JournalAddButton from './components/JournalAddButton/journalAddButton';

function App() {
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      text: 'Горные походы открывают удивительные природные ландшафты',
      date: new Date()
    },
    {
      title: 'Походы в горы',
      text: 'Думал, что нашёл что то новое',
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
        </JournalList>
      </LeftPanel>

      <Body>
        Body
      </Body>

    </div>
    )
}

export default App