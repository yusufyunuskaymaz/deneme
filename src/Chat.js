import avatar1 from "./assets/img/avatar1.png";
import avatar2 from "./assets/img/avatar2.png";
import avatar3 from "./assets/img/avatar3.png";
import avatar4 from "./assets/img/avatar4.png";
import { useEffect, useState } from "react";

function Chat({ user, socket }) {
  console.log(user)
  const initialMessages = [
    { author: "agent", message: "iyi akşamlar", time: "22.11" },
    { author: "customer", message: "sağ olun size de", time: "22.15" },
  ];
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  console.log(messageList,"messageList")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentMessage !== "") {
      const messageData = {
        author: user.name,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    setMessageList(initialMessages)
  }, []);
  return (
    <div id="containerDiv">
      <aside id="sideBar">
        <div id="barraDeFerramentas">
          <div className="imgDiv">
          <img src={ user.name === "agent" ? avatar1 : avatar2} className="fotoUsuario" alt="Imagem do avatar 1" />
          <span className="userName">{user.name.toUpperCase()}</span>
          </div>
          <div className="auxIcon">
            <i className="fas fa-spinner" />
            <i className="fas fa-comment-alt" />
            <i className="fas fa-ellipsis-v" />
          </div>
        </div>
        <div id="containerNotification">
          <i className="fas fa-bell-slash" />
          <p id="receberNotification">Receive notifications</p>
          <p id="ativarNotification">
            Enable notifications on desktop <i className="fas fa-angle-right" />{" "}
          </p>
        </div>
        <div id="containerPesquisa">
          <i id="porcurarContato" className="fas fa-search" />
          <input
            type="text"
            name="search"
            id="procura"
            placeholder="Search or start a new conversation"
          />
        </div>
        <div id="containerContatos">
          <div className="boxContato chatAtivo">
            <img
              src={ user.name === "agent" ? avatar2 : avatar1}
              alt="Imagem do avatar 2"
              className="fotoUsuario"
            />
            <div className="ifoUsuario">
              <p className="nomeUsuario">{user.name === "agent" ? "Customer" : "Agent"}</p>
              <p className="previewMenssage">
                <i className="fas fa-check-double" />
                Hi, how are you?
              </p>
            </div>
            <div className="infoMenssage">
              <p className="horario">22:40</p>
            </div>
          </div>
          <div className="boxContato">
            <img
              src={avatar3}
              alt="Imagem do avatar 2"
              className="fotoUsuario"
            />
            <div className="ifoUsuario">
              <p className="nomeUsuario">Francisco Mattos</p>
              <p className="previewMenssage">
                Are you available for a new job?
              </p>
            </div>
            <div className="infoMenssage">
              <p className="horario">20:44</p>
              <p className="menssagePendente">3</p>
            </div>
          </div>
          <div className="boxContato">
            <img
              src={avatar4}
              alt="Imagem do avatar 3"
              className="fotoUsuario"
            />
            <div className="ifoUsuario">
              <p className="nomeUsuario">Carina Borges</p>
              <p className="previewMenssage">
                The project turned out perfect, thank you!
              </p>
            </div>
            <div className="infoMenssage">
              <p className="horario">18:33</p>
              <p className="menssagePendente">5</p>
            </div>
          </div>
        </div>
      </aside>
      <main id="chatArea">
        <nav id="chatNavBar">
          <div id="containerContactInfo">
            <img
              src={ user.name === "agent" ? avatar2 : avatar1}
              alt="Imagem do avatar 2"
              className="fotoUsuario"
            />
            <p className="nomeUsuario">{user.name === "agent" ? "Customer" : "Agent"}</p>
          </div>
          <ul id="containerFerramentasChat">
            <li>
              <i className="fas fa-search" />
            </li>
            <li>
              <i className="fas fa-paperclip" />
            </li>
            <li>
              <i className="fas fa-ellipsis-v" />
            </li>
          </ul>
        </nav>
        <div className="bg-image">
          <div className="message-container">
            {messageList?.map((item,index) => {
              return (
                  <div key={index+1} className={item.author === user.name ? "me" : "other"}>
                    <div className="messageDiv">
                    <p>{item.message}</p> <span className="time">{item.time}</span>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
        <div className="containerEnviarMenssage">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <i className="fas fa-grin" />
            <input
              type="text"
              name="menssage"
              value={currentMessage}
              id="inputUsuario"
              placeholder="Type a message..."
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <i className="fas fa-microphone" />
          </form>
        </div>
      </main>
    </div>
  );
}

export default Chat;
