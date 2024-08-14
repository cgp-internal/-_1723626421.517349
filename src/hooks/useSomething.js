import { useState } from 'react';

export function useSomething() {
  const [something, setSomething] = useState(null);

  const updateSomething = (newSomething) => {
    setSomething(newSomething);
  };

  return {
    something,
    updateSomething,
  };
}

export { useSomething };