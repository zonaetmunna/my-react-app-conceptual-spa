import React from 'react';
import '../Main.css'

const RecentVideo = () => {
     return (
          <div className="recent-video">
               <h1>Recent Videos</h1>
               <ul>
                    <li><a href="">15+ tricks for dev tool</a></li>
                    <li><a href="">Understanding this</a></li>
                    <li><a href="">be expert in JS Array</a></li>
                    <li><a href="">How Browsers works in 4 min</a></li>
               </ul>
               <button>More on youtube</button>

          </div>
     );
};

export default RecentVideo;