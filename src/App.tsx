import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';
import SideMenu from './components/SideMenu';

import data from './data';

const App = () => {
  return (
    <>
    
       {
         data.map((item) => (
          <Section
            key={item.id}
            variant={item.variant}
            title={item.title}
            description={item.description}/>
         ))
       }

      <SideMenu>
      </SideMenu>

       <GlobalStyles />
    </>
  );
}

export default App;
