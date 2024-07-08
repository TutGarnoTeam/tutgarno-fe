import { BurgerMenu } from './BurgerMenu';
import { ResponsiveAppBar } from './ResponsiveAppBar';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const Header: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  return isMenuOpen ? (
    <BurgerMenu setIsMenuOpen={setIsMenuOpen} />
  ) : (
    <header>
      <ResponsiveAppBar />
    </header>
  );
};
