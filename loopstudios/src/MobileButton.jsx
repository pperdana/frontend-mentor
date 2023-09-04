const MobileButton = () => {
  return (
    <button className="btn-mobile-nav">
      <ion-icon
        className="icon-mobile-nav md hydrated"
        name="menu-outline"
        role="img"
        aria-label="menu outline"
      ></ion-icon>
      <ion-icon
        className="icon-mobile-nav md hydrated"
        name="close-outline"
        role="img"
        aria-label="close outline"
      ></ion-icon>
    </button>
  );
};

export default MobileButton;
