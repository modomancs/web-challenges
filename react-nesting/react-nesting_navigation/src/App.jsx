import "./styles.css";
import Header from "./compontents/header";
import avatar from "./img/avatar.jpg";
import Navigation from "./compontents/Navigation";
import Link from "./compontents/Link";
import Avatar from "./compontents/Avatar";
import Logo from "./compontents/Logo";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link hrefLink="#home">Home</Link>
          <Link hrefLink="#about">About</Link>
          <Link hrefLink="#impressum">Impressum</Link>
        </Navigation>
        <Avatar src={avatar} alt="Avatar" />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
