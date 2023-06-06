import avatar1 from "./assets/img/avatar1.png"
import avatar2 from "./assets/img/avatar2.png"
import avatar3 from "./assets/img/avatar3.png"
import avatar4 from "./assets/img/avatar4.png"


function App() {
  return (
    <div id="container">
    <aside id="sideBar">
      <div id="barraDeFerramentas">
        <img src={avatar1} className="fotoUsuario" alt="Imagem do avatar 1" />
        <div className="auxIcon">
          <i className="fas fa-spinner" />
          <i className="fas fa-comment-alt" />
          <i className="fas fa-ellipsis-v" />
        </div>
      </div>
      <div id="containerNotification">
        <i className="fas fa-bell-slash" />
        <p id="receberNotification">Receive notifications</p>
        <p id="ativarNotification">Enable notifications on desktop <i className="fas fa-angle-right" /> </p>
      </div>
      <div id="containerPesquisa">
        <i id="porcurarContato" className="fas fa-search" />
        <input type="text" name="search" id="procura" placeholder="Search or start a new conversation" />
      </div>
      <div id="containerContatos"> 
        <div className="boxContato chatAtivo">
          <img src={avatar2} alt="Imagem do avatar 2" className="fotoUsuario" />
          <div className="ifoUsuario">
            <p className="nomeUsuario">Joana Farias</p>
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
          <img src={avatar3} alt="Imagem do avatar 2" className="fotoUsuario" />
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
          <img src={avatar4} alt="Imagem do avatar 3" className="fotoUsuario" />
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
          <img src={avatar2} alt="Imagem do avatar 2" className="fotoUsuario" />
          <p className="nomeUsuario">Joana Farias</p>
        </div>
        <ul id="containerFerramentasChat">
          <li><i className="fas fa-search" /></li>
          <li><i className="fas fa-paperclip" /></li>
          <li><i className="fas fa-ellipsis-v" /></li>
        </ul>
      </nav>
      <div id="containerMenssages">
        <div className="bg-image" />
        <div className="chatMenssages">
          <p className="remetenteMenssage">Hi, how are you?</p>
          <p className="destinMenssage">Hi, how are you?</p>
        </div>
      </div>
      <div className="containerEnviarMenssage">
        <i className="fas fa-grin" />
        <input type="text" name="menssage" id="inputUsuario" placeholder="Type a message..." />
        <i className="fas fa-microphone" />
      </div>
    </main>
  </div>
  );
}

export default App;
