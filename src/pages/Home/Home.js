import React from 'react';
import Card from '../../components/Card';

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Card className="text-center">
        <h1 className="text-xl font-medium">
          Thank you for using the React Tailwind Starter project!
        </h1>

        <p>
          You can begin by editing the file{' '}
          <pre>src/pages/Home/Home.js</pre>.
        </p>
      </Card>
    </div>
  );
};

export default HomePage;
