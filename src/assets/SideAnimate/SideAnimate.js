import React from 'react';

//import common from './SideAnimation.module.css';
import common from '../../container/CommonSpace/common.module.css';

let SideAnimate = (props) => {

    var Styled = {
        position: 'absolute',
        right: '-29%',
        transform: 'var(--rightSvg)'
    }

    let joinClasses = [common['svgWrap']]

    return (
        <div className={joinClasses.join(' ')}>
            <svg style={props.style ? Styled : null} width='100%' className={common['svg-animate']} viewBox="0 0 153 148" xmlns="http://www.w3.org/2000/svg" stroke="#000">
                <g clipPath= "polygon(0 0, 0% 100%, 100% 0)"><path d="M14.7 14.7v86"/><path  d="M18.3 14.7v86M21.8 14.7v86M25.4 14.7v86M29 14.7v86M32.5 14.7v86M36 14.7v86M39.6 14.7v86M43.1 14.7v86M46.7 14.7v86M50.2 14.7v86M53.8 14.7v86M57.3 14.7v86M60.9 14.7v86M64.4 14.7v86M68 14.7v86M71.5 14.7v86M75 14.7v86M78.6 14.7v86M82.1 14.7v86M85.7 14.7v86M89.2 14.7v86M92.8 14.7v86M96.3 14.7v86M99.9 14.7v86M103.4 14.7v86" strokeDasharray="86" strokeWidth="1.5"/></g>
                <g clipPath= "polygon(62% 13%, 6% 66%, 75% 68% )"><path d="M10.2 94l43 43.1M12.7 91.5l43 43.1M15.2 89l43 43.1M17.7 86.5l43 43.1" strokeDasharray="60.9" strokeWidth="1.5"/><path d="M20.2 84l43.1 43.1M22.7 81.5l43.1 43.1" strokeDasharray="61" strokeWidth="1.5"/><path d="M25.2 79l43.1 43M27.7 76.5l43.1 43M30.2 74l43.1 43M32.7 71.5l43.1 43" strokeDasharray="60.9" strokeWidth="1.5"/><path d="M35.3 69l43 43" strokeDasharray="60.8" strokeWidth="1.5"/><path d="M37.8 66.4l43 43.1" strokeDasharray="60.9" strokeWidth="1.5"/><path d="M40.3 64l43 43" strokeDasharray="60.8" strokeWidth="1.5"/><path d="M42.8 61.4l43 43.1M45.3 59l43.1 43" strokeDasharray="60.9" strokeWidth="1.5"/><path d="M47.8 56.4l43.1 43.1M50.3 53.9L93.4 97" strokeDasharray="61" strokeWidth="1.5"/><path d="M52.8 51.4l43.1 43M55.3 48.9l43.1 43M57.8 46.4l43.1 43" strokeDasharray="60.9" strokeWidth="1.5"/><path d="M60.3 43.9l43.2 43" strokeDasharray="61" strokeWidth="1.5"/><path d="M62.9 41.3l43 43.1M65.4 38.8l43 43.1M67.9 36.3l43 43.1M70.4 33.8l43 43.1" strokeDasharray="60.9" strokeWidth="1.5"/></g>
                <g clipPath= "polygon(20% 35%, 55% 7%, 53% 137%, 30% 71% )"><path d="M142 30.5L108.8 111M138.8 29.1l-33.4 80.4" strokeDasharray="87.1" strokeWidth="1.5"/><path d="M135.5 27.8L102.1 108" strokeDasharray="86.9" strokeWidth="1.5"/><path d="M132.3 26.4l-33.5 80.4M129 25l-33.4 80.4M125.7 23.7l-33.4 80.4M122.4 22.3L89 102.7" strokeDasharray="87.1" strokeWidth="1.5"/><path d="M119.2 21l-33.5 80.3" strokeDasharray="87" strokeWidth="1.5"/><path d="M115.9 19.6L82.5 100M112.6 18.2L79.2 98.6" strokeDasharray="87.1" strokeWidth="1.5"/><path d="M109.3 16.9L76 97.2" strokeDasharray="86.9" strokeWidth="1.5"/><path d="M106 15.5L72.7 96" strokeDasharray="87.1" strokeWidth="1.5"/><path d="M102.8 14.2L69.3 94.5" strokeDasharray="87" strokeWidth="1.5"/><path d="M99.5 12.8L66.1 93.2M96.2 11.4L62.8 91.8" strokeDasharray="87.1" strokeWidth="1.5"/><path d="M93 10L59.4 90.5" strokeDasharray="87.2" strokeWidth="1.5"/></g>
            </svg>
        </div>
    )
}

export default SideAnimate;