import React from 'react'
import { Main } from 'components/Main';
import { MainSv } from 'components/MainSv';
import { Footer } from 'components/Footer';
// import { Navbar } from 'components/Navbar';
// import { Home } from 'components/Home'
// import { About } from 'components/About';
// import { Portfolio } from 'components/Portfolio';
// import { Contact } from 'components/Contact';
// import { Footer } from 'components/Footer';

export const App = (props) => {
  // if (props.language === 'ENG') {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
  //   } else if (props.language === 'SWE') {
  //     return (
  //       <>
  //         <MainSv />
  //         <Footer />
  //       </>
  //     );
  //   }
}