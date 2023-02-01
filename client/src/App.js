import "./normal.css";
import "./App.css";
import { useState } from "react";
import Avatar from "./components/Avatar";
import NewChat from "./components/NewChat";
import NavPrompt from "./components/NavPrompt";
import Loading from "./components/Loading";
import Error from "./components/Error";
import NavLinks from "./components/NavLink";
import BotResponse from "./components/BotResponse";
import IntroSection from "./components/IntroSection";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatLog([...chatLog, { chatPrompt: inputPrompt }]);
    async function callAPI() {
      try {
        const response = await fetch("https://talk-bot.onrender.com/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: inputPrompt }),
        });
        const data = await response.json();
        setChatLog([
          ...chatLog,
          {
            chatPrompt: inputPrompt,
            botMessage: data.botResponse,
          },
        ]);
        setErr(false);
      } catch (err) {
        setErr(err);
      }
    }
    callAPI();
    setInputPrompt("");
  };

  return (
    <div className="App">
      <header>
        <div className="menu">
          <button onClick={() => setShowMenu(true)}>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#d9d9e3"
              strokeLinecap="round"
            >
              <path d="M21 18H3M21 12H3M21 6H3" />
            </svg>
          </button>
        </div>
        <h1>TalkBot</h1>
      </header>
      {showMenu && (
        <nav>
          <div className="navItems">
            <NewChat setChatLog={setChatLog} setShowMenu={setShowMenu} />
            {chatLog.map(
              (chat, idx) =>
                chat.botMessage && (
                  <NavPrompt chatPrompt={chat.chatPrompt} key={idx} />
                )
            )}
          </div>
          <div className="navCloseIcon">
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              xmlSpace="preserve"
              stroke="#fff"
              width={42}
              height={42}
              onClick={() => setShowMenu(false)}
            >
              <path d="m53.691 50.609 13.467-13.467a2 2 0 1 0-2.828-2.828L50.863 47.781 37.398 34.314a2 2 0 1 0-2.828 2.828l13.465 13.467-14.293 14.293a2 2 0 1 0 2.828 2.828l14.293-14.293L65.156 67.73c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L53.691 50.609z" />
            </svg>
          </div>
        </nav>
      )}

      <aside className="sideMenu">
        <NewChat setChatLog={setChatLog} setShowMenu={setShowMenu} />
        <div className="navPromptWrapper">
          {chatLog.map(
            (chat, idx) =>
              chat.botMessage && (
                <NavPrompt chatPrompt={chat.chatPrompt} key={idx} />
              )
          )}
        </div>
        {chatLog.length > 0 && (
          <NavLinks
            svg={
              <svg
                fill="#fff"
                viewBox="0 0 24 24"
                data-name="Flat Line"
                xmlns="http://www.w3.org/2000/svg"
                className="icon flat-line"
                stroke="#fff"
                width={23}
                height={23}
              >
                <path
                  d="M5 8h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5V8Z"
                  transform="rotate(90 12 14)"
                  style={{
                    fill: "#fff202022",
                    strokeWidth: 2,
                  }}
                />
                <path
                  d="M16 7V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
                  style={{
                    fill: "none",
                    stroke: "#fff202022000000",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                />
                <path
                  data-name="primary"
                  d="M10 11v6m4-6v6M4 7h16m-2 13V7H6v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1Z"
                  style={{
                    fill: "none",
                    stroke: "#fff202022000000",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                />
              </svg>
            }
            text="Clear Conversations"
            setChatLog={setChatLog}
          />
        )}
        <NavLinks
          svg={
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              stroke="#fff"
              width={25}
              height={25}
            >
              <title>{"discord_fill"}</title>
              <g stroke="none" fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                <path
                  d="M15.003 4c.744 0 1.53.26 2.25.547l.527.216c1.26.528 1.968 1.636 2.517 2.853.891 1.975 1.51 4.608 1.724 6.61.102.95.127 1.906-.056 2.549-.197.687-.867 1.173-1.518 1.555l-.322.183-.334.186c-.172.096-.349.191-.525.284l-.522.27-.717.357-.577.284a1 1 0 1 1-.894-1.788l.79-.39-.58-.609c-1.39.57-3.027.893-4.766.893-1.739 0-3.376-.322-4.766-.893l-.58.608.793.39a1 1 0 1 1-.894 1.79l-.544-.27c-.402-.2-.805-.398-1.203-.607l-.928-.505-.321-.183c-.651-.382-1.322-.868-1.518-1.555-.184-.643-.158-1.598-.057-2.55.214-2.001.833-4.634 1.724-6.609.549-1.217 1.257-2.325 2.517-2.853C7.059 4.413 8.072 4 9 4c.603 0 1.077.555.99 1.147A13.65 13.65 0 0 1 12 5c.691 0 1.366.05 2.014.148A1.012 1.012 0 0 1 15.004 4ZM8.75 10.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm6.5 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z"
                  fill="#fff"
                />
              </g>
            </svg>
          }
          text="OpenAI Discord"
          link="https://discord.com/invite/openai"
        />
        <NavLinks
          svg={
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={25}
              height={25}
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5m-6 0 7.5-7.5M15 3h6v6"
              />
            </svg>
          }
          text="Updates & FAQ"
          link="https://help.openai.com/en/collections/3742473-chatgpt"
        />
      </aside>

      <section className="chatBox">
        {chatLog.length > 0 ? (
          <div className="chatLogWrapper">
            {chatLog.length > 0 &&
              chatLog.map((chat, idx) => (
                <div className="chatLog" key={idx}>
                  <div className="chatPromptMainContainer">
                    <div className="chatPromptWrapper">
                      <Avatar bg="#5437DB" className="userSVG">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={1.9}
                          viewBox="0 0 24 24"
                          // strokeLinecap="round"
                          // strokeLinejoin="round"
                          className="h-6 w-6"
                          height={40}
                          width={40}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </Avatar>
                      <div id="chatPrompt">{chat.chatPrompt}</div>
                    </div>
                  </div>

                  <div className="botMessageMainContainer">
                    <div className="botMessageWrapper">
                      <Avatar bg="#11a27f" className="openaiSVG">
                        <svg
                          width={41}
                          height={41}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          strokeWidth={1.5}
                          className="h-6 w-6"
                        >
                          <path
                            d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835A9.964 9.964 0 0 0 18.306.5a10.079 10.079 0 0 0-9.614 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.516 3.35 10.078 10.078 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.813ZM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496ZM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744ZM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.01L7.04 23.856a7.504 7.504 0 0 1-2.743-10.237Zm27.658 6.437-9.724-5.615 3.367-1.943a.121.121 0 0 1 .113-.01l8.052 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.65-1.132Zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763Zm-21.063 6.929-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225Zm1.829-3.943 4.33-2.501 4.332 2.5v5l-4.331 2.5-4.331-2.5V18Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Avatar>
                      {chat.botMessage ? (
                        <div id="botMessage">
                          <BotResponse response={chat.botMessage} />
                        </div>
                      ) : err ? (
                        <Error err={err} />
                      ) : (
                        <Loading />
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <IntroSection />
        )}

        <form onSubmit={handleSubmit}>
          <div className="inputPromptWrapper">
            <input
              name="inputPrompt"
              id=""
              className="inputPrompttTextarea"
              type="text"
              rows="1"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              autoFocus
            ></input>
            <p></p>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
