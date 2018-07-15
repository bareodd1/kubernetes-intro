import React from 'react';
import ContactInformationContainer from './app/contact-information/ContactInformationContainer';
import EducationContainer from './app/education/EducationContainer';
import WorkContainer from './app/work/WorkContainer';
import './index.css';

const App = () => (
  <div className="container">
      <h1 className="main-header my-5">Activity Workflow</h1>
      <div className="content-bulk">
          <ContactInformationContainer />
      </div>
      <div className="content-bulk">
          <EducationContainer />
      </div>
      <div className="content-bulk">
          <WorkContainer />
      </div>
      <h1 className="main-header my-5">Activity Definitions</h1>
  </div>
);

export default App;
