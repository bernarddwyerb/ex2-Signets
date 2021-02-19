import './Entete.scss'
import avatar from '../images/avatar.jpg';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Bernard Dwyer<img src={avatar} alt="Camille Semaan" /></div>
    </header>
  );
}