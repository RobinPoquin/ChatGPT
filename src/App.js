import './App.css';
import gptLogo from './assets/chatgpt.svg';

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
            <img src='' alt='' className='addChatButton'/>
            Nouveau Chat
          </button>
    {/*---------- upperSideBottom -------------*/}
          <div className='upperSideBottom'>
            {/*---------- Exemple de Question -------------*/}
            <button className='query'><img src='' alt=''/>C'est quoi la programmation ?</button>
            <button className='query'><img src='' alt=''/>Comment utiliser une API ?</button>
          </div>


        </div>


{/*---------- LowerSide -------------*/}
        <div className='lowerSide'>

        </div>
      </div>
      <div className='main'>

      </div>
    </div>
  );
}

export default App;
