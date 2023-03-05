import React from "react";

const NavPrompt = ({ chatPrompt, setShowMenu }) => {
  const chatPromptCharacters = chatPrompt.split("");
  const navPromptHref = `navPrompt-${chatPrompt.replace(/[^a-zA-Z0-9]/g, "-")}`;

  return (
    <div className="navPrompt">
      <a href={`#${navPromptHref}`} onClick={() => setShowMenu(false)}>
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ECECF1"
          stroke="#ECECF1"
          width={16}
          height={16}
        >
          <path
            fill="#ECECF1"
            fillRule="evenodd"
            d="M15 3.25A2.25 2.25 0 0 0 12.75 1h-9.5A2.25 2.25 0 0 0 1 3.25v11a.75.75 0 0 0 1.26.55l2.801-2.6a.75.75 0 0 1 .51-.2h7.179A2.25 2.25 0 0 0 15 9.75v-6.5zm-2.25-.75a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H5.572a2.25 2.25 0 0 0-1.531.6L2.5 12.53V3.25a.75.75 0 0 1 .75-.75h9.5z"
            clipRule="evenodd"
          />
        </svg>
        <p>
          {chatPromptCharacters.map((char, idx) => (
            <span key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
              {char}
            </span>
          ))}
        </p>
      </a>
    </div>
  );
};

export default NavPrompt;
