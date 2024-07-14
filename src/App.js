import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import messageIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';

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
{/*---------- Partie Chatting -------------*/}
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img className='chatImg' src={userIcon} alt=''/>
            <p className='txt'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper justo in gravida fringilla. Donec nec nunc metus. Proin quis.
            </p>
          </div>
          <div className='chat'>
            <img className='chatImg' src={gptImgLogo} alt=''/>
            <p className='txt'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh sem, elementum eu egestas id, fermentum ac velit. Ut laoreet, odio ut posuere tempus, leo augue dapibus enim, ac condimentum nulla nisl quis nibh. Mauris accumsan ex vitae egestas maximus. Nullam convallis, eros vitae gravida vulputate, urna nisi sodales lacus, quis imperdiet risus sapien nec magna. Sed imperdiet, dolor a commodo hendrerit, metus enim efficitur mi, a convallis enim turpis vel lectus. Suspendisse ac dapibus magna, eget tempor quam. Praesent a justo eget lacus placerat imperdiet a id ligula. Suspendisse maximus, magna id ullamcorper molestie, lacus quam accumsan arcu, id.
            </p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Envoyer un message...' />
            <button className='send'>
              <img src={sendBtn} alt='send'/>
            </button>
          </div>
          <p>
            Cette version de ChatGPT peut produire des resultats incorrects concernant des personnes, lieux ou evennements. 
            ChatGPT - V0.1
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
