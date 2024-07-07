type Props = {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const BurgerMenu: React.FC<Props> = ({ setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(false);
  };

  return <aside onClick={toggleMenu}>BurgerMenu</aside>;
};
