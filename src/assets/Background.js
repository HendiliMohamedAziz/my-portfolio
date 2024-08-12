import React from 'react';
import './Background.scss';

const Background = () => {
  return (
    <div className="container">
      {[...Array(400)].map((_, i) => (
        <div key={i} className="trigger"></div>
      ))}
      <div className="monitor">
        <div className="camera o-x">
          <div className="camera o-y">
            <div className="camera o-z">
              <div className="vr">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
