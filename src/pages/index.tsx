import * as React from 'react';
import { HomePage } from './HomePage/HomePage';
import { LessonPage } from './LessonPage/LessonPage';


/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
const Home: React.FC = (): JSX.Element => {

  // TODO: fetch data
  
  return (
    <>
      <HomePage />
      
      {/* <LessonPage lessonId={2}/> */}
    </>
  );
};

export default Home;
