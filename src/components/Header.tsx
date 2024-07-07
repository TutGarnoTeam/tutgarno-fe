import { BurgerMenu } from './BurgerMenu';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const Header: React.FC<Props> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    isMenuOpen
      ? (
        <BurgerMenu
          setIsMenuOpen={setIsMenuOpen}
        />
      )
      : (
        <header>Header</header>
      )
  );
};
