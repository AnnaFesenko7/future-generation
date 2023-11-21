import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
// import { useMediaQuery } from 'react-responsive';
// import { Modal } from 'components/Modal/Modal';
// import { useModal } from 'hooks/useModal';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  // const isLoggedIn = useSelector(isLoggedInSelector);
  // const { isModalOpen, closeModal } = useModal(true);

  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
