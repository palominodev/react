import { memo } from 'react';

export const Small = memo(({counter}) => {


    console.log('Volví a generarme');
  return (
    <small>
        {counter}
    </small>
  )
})
