import React from 'react';

const Error = ({mensaje}) => {
    return ( 
         <p className="my-3 p-4 text-center alert alert-danger rounded">{mensaje}</p>
     );
}
 
export default Error;