import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Section from './Section';

import data from './data';

function App() {
  return (
    <>
    
       {
         data.map((item) => (
          <Section
            variant={item.variant}
            title={item.title}
            description={item.description}/>
         ))
       }

       <GlobalStyles />
    </>
  );
}

export default App;
