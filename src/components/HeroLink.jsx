function HeroLink({text}) {
  return (
    <div className="group">
      <a href="#">{text}</a>
      <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
    </div>
  );
}

export default HeroLink;
