# Talkbot App

A conversational AI app inspired by OpenAI's GPT-3 language model, built with Create React App.

## Features

- Natural language processing and understanding
- Context-aware responses
- Ability to converse on a variety of topics
- React-based front-end for easy user interaction
- Node.js back-end for communication with the OpenAI API

## Requirements

- Node JS
- npm
- [Create Open AI account](https://beta.openai.com/signup/)

## Setup

1. Clone the repository

```
git clone https://github.com/dhiant/react-chatGPT-clone.git
```

2. Install client dependencies

```
cd client
npm install
```

3. Install server dependencies

```
cd server
npm install
```

4. Get your Open AI API key from [Open AI API Key](https://platform.openai.com/account/api-keys)

5. Environment Variable Setup

- Go to server folder and create .env file in root of server folder and create a variable REACT_APP_OPENAI_API_KEY = [ Your Open AI key here ] insise .env file as

```
REACT_APP_OPENAI_API_KEY = [Your Open AI key here]

```

## Usage

1. Start the client

```
cd client
npm start
```

2. Start the server

```
cd server
node index.js
```

- Check if your client application run on port 3000 with the development environment configuration, so in your browser just go to http://localhost:3000

- Check if your server application run on port 4000

## Contribution

All contributions are welcome. Feel free to open an issue or create a pull request. And I will be more than happy for sponsors.

<a href="https://www.buymeacoffee.com/sushantdhimal" target="_blank"><img src="./client/public/buymeacoffee.png" alt="Buy Me A Coffee" style="height: 50px !important;width: 200px !important;" ></a>

## Liscence

This project is licensed under the Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.

This means that you can use, copy, and modify the code as long as you give credit to the original author (attribution), don't use it for commercial purposes (non-commercial), and distribute any modifications under the same license (share alike).

Please note that this license applies to the code in this repository only, and does not apply to the OpenAI API, which is subject to its own license agreement.

[Liscence](LISCENCE)
