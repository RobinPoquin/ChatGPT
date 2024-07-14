import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import messageIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';

function App() {
  return (
    <div className="App">
      <div className='sideBar'>
{/*---------- upperSide -------------*/}
        <div className='upperSide'>
    {/*---------- upperSideTop -------------*/}
          <div className='upperSideTop'>
            <img src={gptLogo} alt='Logo' className='logo'/>
            <span className='brand'>
              ChatGPT
            </span>
          </div>
          <button className='midButton'>
            <img src={addBtn} alt='new Chat' className='addChatButton'/>
            Nouveau Chat
          </button>
    {/*---------- upperSideBottom -------------*/}
          <div className='upperSideBottom'>
            {/*---------- Exemple de Question -------------*/}
            <button className='query'>
              <img src={messageIcon} alt='query'/>
              C'est quoi la programmation ?
            </button>
            <br/>
            <button className='query'>
              <img src={messageIcon} alt='query'/>
              Comment utiliser une API ?
            </button>
          </div>
        </div>


{/*---------- LowerSide -------------*/}
        <div className='lowerSide'>
          <div className='listItems'><img src={home} alt='' className='listItemsImg'/>Acceuil</div>
          <div className='listItems'><img src={saved} alt='' className='listItemsImg'/>Enregistrement</div>
          <div className='listItems'><img src={rocket} alt='' className='listItemsImg'/>Mise à Jour Plan</div>
        </div>
      </div>
      <div className='main'>

      </div>
    </div>
  );
}

export default App;
