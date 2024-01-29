import * as React from 'react';
import { Typography } from '@/components/Typography/Typography';

/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
const Home: React.FC = (): JSX.Element => {
  return (
    <div style={{ margin: '50px' }}>
      <Typography variant="h1">Welcome to Quran Journey</Typography>
      <div>
        <Typography variant="subtitle1">This is a placeholder page</Typography>
      </div>
    </div>
  );
};

export default Home;
