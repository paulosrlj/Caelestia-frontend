import MenuModal from '../layout/MenuModal';

function AppWrapper(Component) {
  return function HOC() {
    return (
      <>
        <MenuModal />
        <Component />
      </>
    );
  };
}

export default AppWrapper;
