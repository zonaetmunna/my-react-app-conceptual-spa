import React from 'react';
import '../Main.css';
import JsConfusing from './JsConfusing';
import Tutorails from './Tutorail';

const Left = () => {
     return (
          <div className="left-main">
               <JsConfusing></JsConfusing>
               <Tutorails></Tutorails>

          </div>
     );
};

export default Left;