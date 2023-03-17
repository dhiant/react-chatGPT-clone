import React from "react";
import NavLinks from "./NavLink";
import BuyMeACoffeeButton from "./BuyMeACoffeeButton";

const NavLinksContainer = ({ chatLog, setChatLog }) => {
  return (
    <div className="navLinks" style={{ position: "absolute", bottom: "10px" }}>
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
      <NavLinks
        svg={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            style={{ marginLeft: "4px" }}
          >
            <path
              d="m16 17 5-5m0 0-5-5m5 5H9m0-9H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21H9"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        text="Log out"
        link=""
      />
      <BuyMeACoffeeButton />
    </div>
  );
};

export default NavLinksContainer;
