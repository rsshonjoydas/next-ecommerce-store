import { FC, ReactNode } from 'react';

interface containerProps {
  children: ReactNode;
}

const Container: FC<containerProps> = ({ children }) => {
  return <div className='mx-auto max-w-7xl'>{children}</div>;
};

export default Container;
