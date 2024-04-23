function FooterItem({text}) {
  return (
    <div className="h-10 group">
      <a href="#">{text}</a>
      <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
    </div>
  );
}

export default FooterItem;
