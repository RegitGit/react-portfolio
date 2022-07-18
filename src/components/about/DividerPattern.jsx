import React from 'react'

const DividerPattern = (props) => {
  return (
    <div className="svg__container">
        <svg height="180px" width="100%">
          <defs>
            <pattern id={"doodad"+props.name} width="71" height="71" viewBox="0 0 40 5" patternUnits="userSpaceOnUse" patternTransform={"rotate("+props.rotation+")"}>
              <rect width="100%" height="100%" fill="rgba(31, 31, 56,1)"/>
              <circle cx="40" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="0" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="3.076923076923077" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="6.153846153846154" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="9.230769230769232" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="12.307692307692308" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="15.384615384615385" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="18.461538461538463" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="21.53846153846154" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="24.615384615384617" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="27.692307692307693" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="30.76923076923077" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="33.84615384615385" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="36.92307692307693" cy="20" r="0.25" fill="rgba(255, 245, 247,1)"/>
              <circle cx="0" cy="20" r="1" fill="rgba(77, 181, 255,1)"/>
              <circle cx="40" cy="20" r="1" fill="rgba(77, 181, 255,1)"/>
            </pattern>
          </defs>
          <rect fill={"url(#doodad"+props.name+")"} height="100%" width="100%"/>
        </svg>
      </div>
  )
}

export default DividerPattern