import React from 'react';
import '../Main.css';

const Tutorails = () => {
     const tutorails = [
          { title: 'Angular2 Tutorial', des: 'If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you' },
          { title: '50 Dev tool Tips', des: 'If you have some idea about dev tool and want to become a master..this is the right video for your' },
          { title: 'scope & closure', des: 'Understand scope, scope chain, hoisting, closure in JavaScript in the most easiest and funniest way. This is so easy even your grandma can understand.' }
     ];

     return (
          <div className="tutorials">
               {
                    tutorails.map(tutorial => <Tutorial tutorail={tutorial}></Tutorial>)
               }

          </div>
     );
};

function Tutorial(props) {
     const { title, des } = props.tutorail;
     return (
          <div className="tutorial">
               <h1>{title}</h1>
               <p>{des}</p>
               <button>view details>></button>

          </div>
     )
}



export default Tutorails;