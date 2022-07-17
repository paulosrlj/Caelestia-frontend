import MenuModal from '../layout/MenuModal';

function AppWrapper(Component, whiteIcon) {
  return function HOC() {
    return (
      <>
        <MenuModal whiteIcon={whiteIcon} />
        <Component />
      </>
    );
  };
}

export default AppWrapper;
