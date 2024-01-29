import * as React from 'react';
import { Typography } from '@/components/Typography/Typography';

const Home: React.FC = () => {
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
