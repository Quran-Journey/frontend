import * as React from 'react';
import { Typography } from '@/components/Typography/Typography';
import { ResponsivePage } from '@/components/ResponsivePage/ResponsivePage';
/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
const Home: React.FC = (): JSX.Element => {
  return (
    <ResponsivePage>
      <Typography variant="h1">Welcome to Quran Journey</Typography>
      <div>
        <Typography variant="subtitle1">This is a placeholder page</Typography>
      </div>
    </ResponsivePage>
  );
};

export default Home;
