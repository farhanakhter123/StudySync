import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with bot",
        "botConversationDescription": "I am Developed by Team of Study Sync",
        "botId": "117aca69-e25e-4676-91ac-affe253b2a2c",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "117aca69-e25e-4676-91ac-affe253b2a2c",
        "webhookId": "5d6364d8-710e-4971-9c49-35bd16fd5328",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Study Sync Bot",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/a220fe8a-536e-4d5d-b810-e850c4d46fe2/v30709/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true,
        "theme": "prism",
        "themeColor": "#2563eb"
      });
    };
  }, []);

  return <div id="webchat"/>;
};

export default Chatbot;
