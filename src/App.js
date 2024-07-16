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
import { sendMessageToOpenAI } from './openai';
import { useEffect, useRef, useState } from 'react';

function App() {
  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{
    text: "Bonjour, comment puis je vous aider ?",
    isBot: true,
  }]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages])

  const HandleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text, isBot: false}
    ])
    const response = await sendMessageToOpenAI(text);
    setMessages([
      ...messages,
      { text, isBot: false},
      { text: response, isBot: true}
    ])
  }

  const handleEnter = async (e) => {
    if(e.key === 'Enter') await HandleSend();
  }

  const handleQuery = async (e) => {
    const text = e.target.value;;
    setMessages([
      ...messages,
      {text, isBot: false}
    ])
    const response = await sendMessageToOpenAI(text);
    setMessages([
      ...messages,
      { text, isBot: false},
      { text: response, isBot: true}
    ])
  }

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
          <button className='midButton' onClick={() => {window.location.reload()}}>
            <img src={addBtn} alt='new Chat' className='addChatButton'/>
            Nouveau Chat
          </button>
    {/*---------- upperSideBottom -------------*/}
          <div className='upperSideBottom'>
            {/*---------- Exemple de Question -------------*/}
            <button className='query' onClick={handleQuery} value={"C'est quoi la programmation ?"}>
              <img src={messageIcon} alt='query'/>
              C'est quoi la programmation ?
            </button>
            <br/>
            <button className='query' onClick={handleQuery} value={"Comment utiliser une API ?"}>
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
          {messages.map((messages, i) => 
            <div key={i} className={messages.isBot ? 'chat bot' : "chat"}>
              <img className='chatImg' src={messages.isBot?gptImgLogo: userIcon} alt=''/>
                <p className='txt'>
                  { messages.text }
                </p>
            </div>
          )}
          <div ref={msgEnd}/>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Envoyer un message...' value={input} onKeyDown={handleEnter} onChange={(e) =>{setInput(e.target.value)}}/>
            <button className='send' onClick={HandleSend}>
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
