import Display from "./Display";

function Header() {
  return (
    <>
      <div id="navbar">
        <div className="nav-left">
          <h2>Daraz</h2>
        </div>
        <div className="nav-right">
          <Display />
        </div>
      </div>
    </>
  );
}

export default Header;
