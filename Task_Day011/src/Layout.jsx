const Layout = ({ header, sidebar, content }) => {
  return (
    <div>
      <header>{header}</header>

      <div className="layout">
        <aside>{sidebar}</aside>
        <main>{content}</main>
      </div>
    </div>
  );
};

export default Layout;
