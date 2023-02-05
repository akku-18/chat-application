import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed"
import LoginForm from './components/LoginForm';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="af7e9e04-be3c-4904-b45a-af9eeeb236bc"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      
    />
  );
};

export default App;
