This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    actions/
      ActionTypes.js
      ChatActions.js
    components/
      autentificationFrom/
        AutentificationForm.jsx
        autentificationFormStyle.js
      chat/
        Chat.jsx
        chatStyle.js
      message/
        Message.jsx
        messageStyle.js
      messageList/
        MessageList.jsx
        messageListStyle.js
      sendMessageForm/
        SendMessageForm.jsx
        sendMessageFormStyle.js
    reducers/
      autentificationReducer.js
      chatReducer.js
      index.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    store.js
```

## Formatting Code Automatically

To format our code whenever we make a commit in git, we need to install the following dependence:

```sh
npm install --save ...
```

Alternatively you may use `yarn`:

```sh
yarn add ...
```
