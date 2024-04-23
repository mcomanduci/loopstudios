function FooterIcon({icon}) {
  return (
    <div className="h-8 group">
      <a href="#">
        <img src={icon} alt="" className="h-6" />
      </a>
    </div>
  );
}

export default FooterIcon;
