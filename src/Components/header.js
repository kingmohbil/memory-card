const Header = ({ score, best }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-text">Memory Card</span>
        <span className="navbar-text">
          Score: {score} | Best: {best}
        </span>
      </div>
    </nav>
  );
};

export default Header;
