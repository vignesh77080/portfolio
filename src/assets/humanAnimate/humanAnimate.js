import React from 'react';

import classes from './humanAnimate.module.css';

function SvgComponent(props) {

    let styleClass = null

    if(props.scroll > 10){
        document.querySelector('.'+classes.humanWrap).classList.remove(classes.fullAnimate)
        styleClass= {
            transform : 'translate('+props.scroll+'px)',
            opacity: '1'
        }
    }

    return (
      <div style={styleClass} className={[classes['humanWrap'], classes['fullAnimate']].join(' ')}>
            <svg viewBox="0 0 265.65 194.95">
                <defs>
                <clipPath id="prefix__clip-path">
                    <path
                    className="prefix__cls-1"
                    d="M194.7 147.66h29.13l-4.86 40.74h-19.41l-4.86-40.74z"
                    />
                </clipPath>
                <clipPath id="prefix__clip-path-2">
                    <path
                    className="prefix__cls-1"
                    d="M189.7 142.66h39.13v50.74H189.7z"
                    />
                </clipPath>
                <clipPath id="prefix__clip-path-3">
                    <path
                    className="prefix__cls-1"
                    d="M150.85 83.34c-4.93 5.07-14.79 15.49-21.54 15.49 0 0 0-.13-.05-.37v.37c-6.76 0-16.61-10.42-21.54-15.49-3.75-3.85-1.94-8.82-.65-13.3a44 44 0 001.74-9.65c.35-6.23-.31-12.33.46-18.58 1.57-12.82 17.74-12.35 20-12.22 2.27-.13 18.44-.6 20 12.22 1.2 9.78-.73 19.68 2.42 29.19 1.41 4.17 2.67 8.73-.84 12.34z"
                    />
                </clipPath>
                <style>
                    {
                    ".prefix__cls-1{fill:none}.prefix__cls-3,.prefix__cls-56{fill:#1bf1f1}.prefix__cls-3{opacity:.18}.prefix__cls-5{fill:#f1be46}.prefix__cls-11{fill:#e1a839}.prefix__cls-13{fill:#35428b}.prefix__cls-16{fill:#9b613f}.prefix__cls-17{fill:#fdc6a2}.prefix__cls-18{fill:#d98a77}.prefix__cls-22{fill:#723f28}.prefix__cls-25{fill:#c4d7e9}.prefix__cls-27{fill:#eec2b8}.prefix__cls-30,.prefix__cls-32,.prefix__cls-46{fill:#fff}.prefix__cls-59{opacity:.49}.prefix__cls-32{opacity:.5}.prefix__cls-35{fill:#714630}.prefix__cls-40{fill:#e48c7c}.prefix__cls-39{fill:#d27e72}.prefix__cls-44{fill:#253246}.prefix__cls-46{opacity:.67}.prefix__cls-49{fill:#e4b4b0}.prefix__cls-50,.prefix__cls-51{fill:#ecc0bd}.prefix__cls-51{opacity:.66}.prefix__cls-52{fill:#cd9190}.prefix__cls-55{fill:#f1167d}.prefix__cls-59{fill:#fff4f9}.prefix__cls-60{fill:#ffd88c}"
                    }
                </style>
                </defs>
                <g
                style={{
                    isolation: "isolate",
                }}
                >
                <g id="prefix__Layer_2" data-name="Layer 2">
                    <g id="prefix__Layer_1-2" data-name="Layer 1">
                    <circle className="prefix__cls-3" cx={95.55} cy={16.9} r={16.6} />
                    <circle
                        className="prefix__cls-3"
                        cx={180.5}
                        cy={114.83}
                        r={14.48}
                    />
                    <circle
                        cx={47.83}
                        cy={42.83}
                        r={9.92}
                        fill="#f107b3"
                        opacity={0.18}
                    />
                    <path
                        className="prefix__cls-5"
                        d="M49.22 183.36c0 1.64-.17 3.4-1.22 4.66-1.39 1.68-3.83 1.88-6 2l-19.11.7a46.61 46.61 0 01-10.23-.39 15.5 15.5 0 01-8.91-4.68 15.1 15.1 0 01-3-6A19.94 19.94 0 01.28 171c1.72-9.77 11.85-16.77 21.6-14.39 4.2 1 7.73 3.55 11.55 5.45 4.1 2 8.38.66 12.23 2.45l1.83.85a75.74 75.74 0 011.73 18z"
                    />
                    <path
                        d="M1.57 167.93c3.22-7.85 12-13 20.58-10.86"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#ffd88c"
                        fill="none"
                    />
                    <g clipPath="url(#prefix__clip-path)">
                        <g clipPath="url(#prefix__clip-path-2)">
                        <image
                            width={82}
                            height={107}
                            transform="matrix(.48 0 0 .48 189.55 142.46)"
                            xlinkHref="data:image/png;base64,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"
                        />
                        </g>
                    </g>
                    <path
                        d="M221 144.56h-3.3l.08-5.88a3.18 3.18 0 013.17-3.13z"
                        fill="#c38685"
                    />
                    <path
                        d="M196.59 139.59h25.36a1.5 1.5 0 011.5 1.5v3.29h-28.36v-3.29a1.5 1.5 0 011.5-1.5z"
                        fill="#daa09d"
                    />
                    <path
                        className="prefix__cls-5"
                        d="M52.4 152.92c-.56-.38-10.14-6.2-19-5.82 0 0 5.63 11.45 4.88 19.61"
                    />
                    <path
                        className="prefix__cls-11"
                        d="M47 158.12l-1.86 1.82-6.86 6.73c.52-5.68-2.05-13-3.66-16.85a41.99 41.99 0 00-1.21-2.72c3.25.46 10.11 2.46 13.59 11.02z"
                    />
                    <path
                        d="M171 136.66a4.61 4.61 0 01-1 .35l-.19.05c-6.75 1.65-35.06 3.22-40.44 3.24h-.16c-4.25 0-22.83-1-33.76-2.23l-1.1-.07c-1.49-.18-2.81-.36-3.89-.55-.61-.1-1.15-.21-1.59-.31l-.28-.08c-1-.27-1.47-.53-1.15-.8a1.17 1.17 0 01.28-.15 9.2 9.2 0 002.07-1.17 9.16 9.16 0 001.27-1.12.38.38 0 00.09-.09 10.06 10.06 0 00.8-.95.38.38 0 00.09-.13 20.3 20.3 0 003-7.17c.57-2.21 1-4.48 1.81-6.62a15.89 15.89 0 012.15-4.23 10.41 10.41 0 01.91-1.1q.27-.28.57-.57a20.79 20.79 0 014.62-3.24c.61-.32 1.23-.62 1.86-.89a41 41 0 0110.14-2.76c1-.14 1.91-.27 2.87-.39 3-.36 6.13-.58 9.24-.64h.16a93 93 0 0112.11 1 37.68 37.68 0 0112 3.68c.41.22.81.45 1.21.69a16.32 16.32 0 011.73 1.16 18 18 0 011.66 1.37 14.78 14.78 0 013.86 6.51c.58 1.76 1 3.61 1.45 5.42a21.36 21.36 0 003.11 7.71 9.9 9.9 0 00.89 1.07 10.25 10.25 0 001.38 1.23 10.84 10.84 0 001 .64 8.51 8.51 0 001.05.51l.18.08c.34.2.32.38 0 .55z"
                        fill="#43549a"
                    />
                    <path
                        className="prefix__cls-13"
                        d="M169.94 137a105.71 105.71 0 01-13.32 1.69c2.32-12-.67-22.76-3.13-29a21.36 21.36 0 014.55 3.2c6.41 6 3.73 16.75 10.69 21.94a9.2 9.2 0 002.07 1.17c.77.37.38.69-.86 1zm-81.27-.09A105.71 105.71 0 00102 138.6c-2.32-12 .67-22.76 3.13-29a21.36 21.36 0 00-4.55 3.2c-6.41 6-3.73 16.75-10.69 21.94a9.2 9.2 0 01-2.08 1.26c-.81.27-.38.59.86.91z"
                    />
                    <circle
                        className="prefix__cls-13"
                        cx={103.97}
                        cy={127.72}
                        r={1.41}
                    />
                    <circle
                        className="prefix__cls-13"
                        cx={104.65}
                        cy={125.02}
                        r={0.63}
                    />
                    <circle
                        className="prefix__cls-13"
                        cx={106.69}
                        cy={127.48}
                        r={0.56}
                    />
                    <circle
                        className="prefix__cls-13"
                        cx={107.33}
                        cy={124.97}
                        r={1.01}
                    />
                    <circle
                        className="prefix__cls-13"
                        cx={106.31}
                        cy={130.3}
                        r={0.99}
                    />
                    <path
                        className="prefix__cls-5"
                        d="M72.86 165.3L58.6 155a20.76 20.76 0 014.77-5.16 27.1 27.1 0 017.84-4.31 30.66 30.66 0 014.66-1.23s-3.76 15.37-3.01 21z"
                    />
                    <path
                        className="prefix__cls-11"
                        d="M75.86 144.28s-8 5-8.4 11l4.36 9.72.7-.28s2.78-18.72 3.34-20.44z"
                    />
                    <path
                        d="M24.81 189.14a8.75 8.75 0 018.31-8.74L64 178.82a10.32 10.32 0 0110.32 10.32H24.81z"
                        fill="#e9af3d"
                    />
                    <path
                        d="M87.39 136.17a9.32 9.32 0 002.53-1.53 13.6 13.6 0 01-1.44 2.55c-1.41-.34-1.91-.68-1.09-1.02zm82.44.96a14.82 14.82 0 01-1.21-2.13 9.2 9.2 0 002.07 1.17c.77.32.38.64-.86.96z"
                        fill="#d5e4ec"
                    />
                    <path
                        className="prefix__cls-16"
                        d="M109.27 54.2c-12.11-12.39-8.45-30.41-8.45-30.41l7.32 3.8S102.51 13 113.63 4.08c0 0-2.25 6.62 2.82 10.14 0 0 2-12.53 13.23-14.22 0 0-1.41 7.88 1.83 10.56 0 0 14.64-13.8 42.8-4.08 0 0-4.79 6.19-9.15 9.15a53 53 0 0115.34 2c-11.47 2.47-23.56 8.47-29.1 19.22a32.59 32.59 0 00-3.7 10.9"
                    />
                    <path
                        className="prefix__cls-17"
                        d="M135.66 104.71a2.16 2.16 0 01-.46 2 8.26 8.26 0 01-5.66 2.87h-.07a8.24 8.24 0 01-5.66-2.87 2.16 2.16 0 01-.46-2c1.34-5.32.84-16.42.84-16.42l5.28-1.78h.07l5.28 1.78s-.5 11.1.84 16.42z"
                    />
                    <path
                        className="prefix__cls-16"
                        d="M156 23.65c0 1.57 3.8 18.58-6.9 26.75V23.65s6.9-.14 6.9 0z"
                    />
                    <circle
                        className="prefix__cls-17"
                        cx={109.01}
                        cy={56.58}
                        r={7.53}
                    />
                    <circle className="prefix__cls-17" cx={149.2} cy={56.37} r={7.53} />
                    <circle
                        className="prefix__cls-18"
                        cx={108.67}
                        cy={56.93}
                        r={3.48}
                    />
                    <circle
                        className="prefix__cls-18"
                        cx={150.44}
                        cy={56.34}
                        r={3.56}
                    />
                    <path
                        className="prefix__cls-17"
                        d="M150.85 83.34c-4.93 5.07-14.79 15.49-21.54 15.49 0 0 0-.13-.05-.37v.37c-6.76 0-16.61-10.42-21.54-15.49-3.75-3.85-1.94-8.82-.65-13.3a44 44 0 001.74-9.65c.35-6.23-.31-12.33.46-18.58 1.57-12.82 17.74-12.35 20-12.22 2.27-.13 18.44-.6 20 12.22 1.2 9.78-.73 19.68 2.42 29.19 1.41 4.17 2.67 8.73-.84 12.34z"
                    />
                    <g
                        clipPath="url(#prefix__clip-path-3)"
                        id="prefix__Texture_Group"
                        data-name="Texture Group"
                        opacity={0.19}
                    >
                    </g>
                    <path
                        d="M148.88 39.7c-5.15-7.18-17.55-6.84-19.59-6.73-2-.11-14.44-.45-19.6 6.71 3-10.64 17.45-10.21 19.6-10.09 2.14-.12 16.6-.59 19.59 10.11z"
                        fill="#f8b894"
                    />
                    <path
                        className="prefix__cls-22"
                        d="M149.77 45.88v1a28.12 28.12 0 00-.44-5.08c-1.57-12.82-17.74-12.35-20-12.22-2.28-.13-18.45-.6-20 12.22a56.52 56.52 0 00-.43 6.2 76.35 76.35 0 01.37-10.34c.6-4.87 3.64-8.17 7.65-10.08a19.32 19.32 0 016-6.52 8.31 8.31 0 00-1.32 4.82 13.11 13.11 0 015.5-5.56l-.65 2.12a14.92 14.92 0 00-.69 3 48.46 48.46 0 017.43.05 25.47 25.47 0 017.81 1.78 12.85 12.85 0 018.26 10.42 46 46 0 01.51 8.19z"
                    />
                    <path
                        d="M135 99.82c-5.2.49-8.72-.61-10.91-1.79v-.7a11.57 11.57 0 005.09 1.48v-.37c0 .24.05.37.05.37a10.61 10.61 0 004.31-1.1c.41-.19.82-.39 1.23-.61v.81c.15.65.23 1.29.23 1.91z"
                        fill="#f1ae8b"
                    />
                    <path
                        d="M172.68 139.38v48.43H85.62v-48.43a6.8 6.8 0 013.85-6.13 6.49 6.49 0 012.59-.67 2.3 2.3 0 01.37 0h73.4a4.3 4.3 0 01.62 0 6.43 6.43 0 012.45.71 6.81 6.81 0 013.78 6.09z"
                        fill="#dae5f2"
                    />
                    <path
                        className="prefix__cls-25"
                        d="M172.68 167.83v22.61H85.61v-18.56c18.28 5.32 52.2 11.12 87.07-4.05z"
                    />
                    <circle
                        className="prefix__cls-22"
                        cx={135.39}
                        cy={22.41}
                        r={1.44}
                    />
                    <circle
                        className="prefix__cls-22"
                        cx={139.19}
                        cy={21.06}
                        r={0.77}
                    />
                    <circle
                        className="prefix__cls-22"
                        cx={136.83}
                        cy={19.94}
                        r={0.77}
                    />
                    <path
                        d="M133.76 9.18s9.16-7.69 27.46-5.57m4.08.64l3.45.78m-51.6 6.73a16.35 16.35 0 017.79-10.14m-18.21 16.62A19.38 19.38 0 01110 8"
                        stroke="#eec2b8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                    <circle className="prefix__cls-27" cx={109.8} cy={10.8} r={1.38} />
                    <circle
                        className="prefix__cls-27"
                        cx={110.21}
                        cy={13.54}
                        r={0.47}
                    />
                    <circle
                        className="prefix__cls-27"
                        cx={118.65}
                        cy={11.01}
                        r={0.94}
                    />
                    <circle className="prefix__cls-27" cx={156.85} cy={4.63} r={1.31} />
                    <circle className="prefix__cls-27" cx={135.73} cy={8.76} r={0.75} />
                    <circle className="prefix__cls-27" cx={166.8} cy={6.6} r={1.03} />
                    <circle
                        className="prefix__cls-27"
                        cx={135.12}
                        cy={11.15}
                        r={0.61}
                    />
                    <circle className="prefix__cls-27" cx={139.16} cy={9.46} r={1.27} />
                    <path
                        d="M140.83 25.24a12.88 12.88 0 018.25 6.45"
                        stroke="#723f28"
                        opacity={0.52}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                    <path
                        d="M153.11 78.46a7.74 7.74 0 01-2.24 4.9c-4.93 5.07-14.79 15.49-21.54 15.49 0 0 0-.13-.05-.37v.37c-6.76 0-16.61-10.42-21.54-15.49a7.58 7.58 0 01-2.21-4.9 34 34 0 0047.58 0z"
                        opacity={0.2}
                        fill="#e89e85"
                    />
                    <path
                        className="prefix__cls-30"
                        d="M138.82 73.34a2.14 2.14 0 012.07 2.66 11 11 0 01-21.45 0 2.14 2.14 0 012.07-2.66z"
                    />
                    <path
                        d="M100.82 27.72s-.75 9.94 3.19 17.92"
                        opacity={0.49}
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                    <circle
                        className="prefix__cls-32"
                        cx={103.57}
                        cy={26.64}
                        r={0.68}
                    />
                    <circle
                        className="prefix__cls-32"
                        cx={101.74}
                        cy={25.72}
                        r={0.42}
                    />
                    <circle
                        className="prefix__cls-30"
                        cx={102.69}
                        cy={28.57}
                        r={0.95}
                    />
                    <path
                        d="M122.52 6.55a13.42 13.42 0 013-2.63"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                    <circle
                        className="prefix__cls-30"
                        cx={112.22}
                        cy={41.28}
                        r={1.55}
                    />
                    <circle
                        className="prefix__cls-30"
                        cx={110.68}
                        cy={45.64}
                        r={0.56}
                    />
                    <circle className="prefix__cls-30" cx={112.93} cy={44.8} r={0.49} />
                    <path
                        className="prefix__cls-16"
                        d="M125.55 48.79a1.36 1.36 0 01-1.74.85h-.13c-5-2-7.79.46-7.91.57a1.32 1.32 0 01-.93.36h-.07a1.37 1.37 0 01-1.3-1.44 1.34 1.34 0 01.42-.92c.17-.16 4.15-3.79 10.82-1.11a1.36 1.36 0 01.84 1.69zm8.08 0a1.36 1.36 0 001.74.85h.13c5-2 7.79.46 7.91.57a1.32 1.32 0 00.93.36h.07a1.37 1.37 0 001.3-1.44 1.35 1.35 0 00-.43-.92c-.16-.16-4.14-3.79-10.81-1.11a1.36 1.36 0 00-.84 1.69z"
                    />
                    <rect
                        x={127.55}
                        y={59.13}
                        width={4.06}
                        height={11.89}
                        rx={2.03}
                        fill="#e99f86"
                    />
                    <ellipse
                        className="prefix__cls-35"
                        cx={120.17}
                        cy={55.28}
                        rx={2.71}
                        ry={3.42}
                    />
                    <ellipse
                        className="prefix__cls-35"
                        cx={138.36}
                        cy={55.28}
                        rx={2.71}
                        ry={3.42}
                    />
                    <path
                        d="M109.3 49.48a111.7 111.7 0 01-.21 13.76"
                        opacity={0.77}
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                    <rect
                        x={0.29}
                        y={187.96}
                        width={265.36}
                        height={6.99}
                        rx={3.5}
                        fill="#ffb29c"
                    />
                    <path
                        d="M265.65 191.46a3.5 3.5 0 01-3.5 3.49H3.78a3.49 3.49 0 01-3.49-3.49 3.44 3.44 0 01.55-1.87 3.48 3.48 0 002.94 1.61h258.37a3.48 3.48 0 002.47-1 3.87 3.87 0 00.48-.59 3.44 3.44 0 01.55 1.85z"
                        opacity={0.45}
                        fill="#e48c7c"
                    />
                    <rect
                        className="prefix__cls-39"
                        x={137.03}
                        y={192.62}
                        width={32.12}
                        height={2.06}
                        rx={1.03}
                    />
                    <rect
                        className="prefix__cls-39"
                        x={171.94}
                        y={192.62}
                        width={6.12}
                        height={2.06}
                        rx={1.03}
                    />
                    <rect
                        className="prefix__cls-30"
                        x={11.49}
                        y={187.93}
                        width={32.12}
                        height={2.06}
                        rx={1.03}
                    />
                    <rect
                        className="prefix__cls-30"
                        x={46.4}
                        y={187.93}
                        width={6.12}
                        height={2.06}
                        rx={1.03}
                    />
                    <rect
                        className="prefix__cls-39"
                        x={220.85}
                        y={192.62}
                        width={32.12}
                        height={2.06}
                        rx={1.03}
                    />
                    <rect
                        className="prefix__cls-39"
                        x={255.77}
                        y={192.62}
                        width={6.12}
                        height={2.06}
                        rx={1.03}
                    />
                    <circle
                        className="prefix__cls-25"
                        cx={154.74}
                        cy={171.26}
                        r={1.55}
                    />
                    <circle
                        className="prefix__cls-25"
                        cx={146.86}
                        cy={171.26}
                        r={2.58}
                    />
                    <circle
                        className="prefix__cls-25"
                        cx={152.11}
                        cy={167.42}
                        r={0.8}
                    />
                    <circle
                        className="prefix__cls-25"
                        cx={151.97}
                        cy={174.78}
                        r={1.92}
                    />
                    <circle className="prefix__cls-25" cx={158.35} cy={170} r={0.94} />
                    <circle
                        className="prefix__cls-25"
                        cx={159.71}
                        cy={165.16}
                        r={2.21}
                    />
                    <path
                        className="prefix__cls-30"
                        d="M111 134.56H93.35v-2H113a2 2 0 01-2 2zm7.88 0h-1.6a2 2 0 01-2-2h5.6a2 2 0 01-2 2z"
                    />
                    <circle
                        className="prefix__cls-40"
                        cx={83.36}
                        cy={191.42}
                        r={1.48}
                    />
                    <circle
                        className="prefix__cls-40"
                        cx={87.62}
                        cy={189.69}
                        r={0.53}
                    />
                    <circle
                        className="prefix__cls-40"
                        cx={76.92}
                        cy={191.24}
                        r={1.44}
                    />
                    <circle
                        className="prefix__cls-40"
                        cx={79.63}
                        cy={189.66}
                        r={0.42}
                    />
                    <circle
                        className="prefix__cls-40"
                        cx={80.62}
                        cy={191.91}
                        r={0.63}
                    />
                    <circle
                        className="prefix__cls-40"
                        cx={87.09}
                        cy={192.69}
                        r={0.77}
                    />
                    <circle className="prefix__cls-40" cx={85.3} cy={189.48} r={0.46} />
                    <ellipse
                        className="prefix__cls-5"
                        cx={55.68}
                        cy={167.44}
                        rx={17.36}
                        ry={16.59}
                    />
                    <path
                        className="prefix__cls-11"
                        d="M73.05 167.63c0 9.16-7.78 16.59-17.37 16.59s-17.36-7.43-17.36-16.59v-1.12C39 175.14 46.49 182 55.68 182S72.4 175.14 73 166.51c0 .37.05.74.05 1.12z"
                    />
                    <circle className="prefix__cls-30" cx={93.36} cy={134.9} r={2.36} />
                    <circle
                        cx={94.84}
                        cy={138.49}
                        r={0.72}
                        opacity={0.72}
                        fill="#fff"
                    />
                    <circle cx={93.5} cy={141.25} r={1.17} opacity={0.42} fill="#fff" />
                    <circle className="prefix__cls-30" cx={89.7} cy={137.08} r={0.83} />
                    <circle
                        className="prefix__cls-30"
                        cx={92.09}
                        cy={138.56}
                        r={0.39}
                    />
                    <path
                        d="M44.51 169.34l-12.02-2.82m12.02 6.95l-13.02 3.82m13.02-5.88h-8.14m29.33-2.07l12.02-2.82m-12.02 6.95l13.02 3.82m-13.02-5.88h8.14"
                        stroke="#be8116"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                    <rect
                        className="prefix__cls-30"
                        x={45.1}
                        y={157.42}
                        width={9.53}
                        height={11.6}
                        rx={4.76}
                    />
                    <circle
                        className={classes['eyesCat']}
                        cx={49.87}
                        cy={163.45}
                        r={1.73}
                    />
                    <rect
                        className="prefix__cls-30"
                        x={56.85}
                        y={157.57}
                        width={9.67}
                        height={11.77}
                        rx={4.83}
                    />
                    <path
                        className="prefix__cls-44"
                        d="M55.14 169a.69.69 0 00-.68.67.66.66 0 00.17.45 1.41 1.41 0 002.48 0 .68.68 0 00-.07-.95.74.74 0 00-.42-.17z"
                    />
                    <path
                        d="M54.59 150.82c-8 .19-13 6.86-13.25 7.15l-.3.4.8.6.3-.41c0-.06 5-6.56 12.47-6.74 0 0-.05-1-.02-1z"
                        opacity={0.44}
                        fill="#fff"
                    />
                    <circle
                        className="prefix__cls-30"
                        cx={52.98}
                        cy={152.56}
                        r={0.96}
                    />
                    <circle
                        className="prefix__cls-46"
                        cx={52.63}
                        cy={154.18}
                        r={0.33}
                    />
                    <circle
                        cx={52.98}
                        cy={155.52}
                        r={0.49}
                        opacity={0.47}
                        fill="#fff"
                    />
                    <circle
                        className="prefix__cls-46"
                        cx={54.79}
                        cy={153.81}
                        r={0.47}
                    />
                    <circle
                        className="prefix__cls-30"
                        cx={54.93}
                        cy={151.84}
                        r={0.52}
                    />
                    <path
                        d="M224.33 144.69l-.29 1.75h-29.55l-.29-1.75a.91.91 0 01.89-1.06h28.35a.9.9 0 01.89 1.06z"
                        fill="#f3cdc8"
                    />
                    <path
                        className="prefix__cls-49"
                        d="M192.23 141.66h34.07v4.78h-34.07z"
                    />
                    <path
                        className="prefix__cls-50"
                        d="M224.04 146.44l-.21 1.22H194.7l-.21-1.22h29.55z"
                    />
                    <circle
                        className="prefix__cls-50"
                        cx={197.07}
                        cy={147.99}
                        r={0.89}
                    />
                    <circle
                        className="prefix__cls-51"
                        cx={199.88}
                        cy={150.43}
                        r={0.42}
                    />
                    <circle
                        className="prefix__cls-50"
                        cx={198.57}
                        cy={148.65}
                        r={0.33}
                    />
                    <circle
                        className="prefix__cls-51"
                        cx={197.72}
                        cy={150.52}
                        r={0.52}
                    />
                    <circle
                        className="prefix__cls-50"
                        cx={199.23}
                        cy={152.96}
                        r={0.33}
                    />
                    <circle
                        className="prefix__cls-50"
                        cx={200.82}
                        cy={151.65}
                        r={0.23}
                    />
                    <path
                        className="prefix__cls-52"
                        d="M195.08 141.14h28.35v.52h-28.35z"
                    />
                    <circle
                        className="prefix__cls-52"
                        cx={197.82}
                        cy={141.04}
                        r={0.52}
                    />
                    <circle
                        className="prefix__cls-52"
                        cx={199.65}
                        cy={140.43}
                        r={0.38}
                    />
                    <circle
                        className="prefix__cls-52"
                        cx={198.49}
                        cy={140.25}
                        r={0.28}
                    />
                    <path
                        opacity={0.4}
                        fill="#fff"
                        d="M194.51 141.65h10.91v.89h-10.91z"
                    />
                    <circle
                        className={classes['eyesCat']}
                        cx={61.83}
                        cy={163.45}
                        r={1.73}
                    />
                    <path
                        d="M67.05 148.12a26.64 26.64 0 014.81-2.2l-.65-.41a27.1 27.1 0 00-7.84 4.31l.59.57s.15-.16.47-.44a1.16 1.16 0 00-.07.37 1 1 0 101-.95.58.58 0 00-.19 0c.36-.28.82-.6 1.37-.95a.33.33 0 00.33.27.34.34 0 00.35-.35.36.36 0 00-.17-.22z"
                        opacity={0.34}
                        fill="#fff"
                    />
                    <circle className="prefix__cls-30" cx={67.1} cy={149.79} r={0.32} />
                    <circle className="prefix__cls-55" cx={88.46} cy={63.24} r={3.03} />
                    <circle className="prefix__cls-55" cx={166.8} cy={39.73} r={3.03} />
                    <circle className={classes['bubbles']} cx={40.44} cy={111.87} r={7.6} />
                    <circle cx={90.53} cy={94.83} r={5.22} fill="#11b3d8" />
                    <circle
                        className="prefix__cls-13"
                        cx={189.76}
                        cy={56.93}
                        r={5.22}
                    />
                    <circle className="prefix__cls-56" cx={65.57} cy={92.67} r={2.16} />
                    <circle
                        className="prefix__cls-56"
                        cx={236.91}
                        cy={138.17}
                        r={2.16}
                    />
                    <circle
                        className="prefix__cls-55"
                        cx={226.02}
                        cy={110.54}
                        r={3.03}
                    />
                    <circle
                        className="prefix__cls-13"
                        cx={248.96}
                        cy={116.63}
                        r={5.22}
                    />
                    <path
                        d="M119.59 107.55h-.12a1.17 1.17 0 01.22.67 1.29 1.29 0 11-2.51-.34 48.94 48.94 0 00-9.09 2.48 1 1 0 01-.35.06 1 1 0 01-.79-1.61 41 41 0 0110.14-2.76c1-.14 1.91-.27 2.87-.39a1 1 0 01.51.76 1 1 0 01-.88 1.13z"
                        fill="#fff4f9"
                        opacity={0.2}
                    />
                    <circle
                        className="prefix__cls-59"
                        cx={115.18}
                        cy={112.53}
                        r={0.66}
                    />
                    <circle
                        className="prefix__cls-59"
                        cx={118.47}
                        cy={114.27}
                        r={0.56}
                    />
                    <circle
                        className="prefix__cls-59"
                        cx={120.06}
                        cy={112.2}
                        r={1.08}
                    />
                    <circle
                        className="prefix__cls-59"
                        cx={117.43}
                        cy={111.36}
                        r={0.66}
                    />
                    <circle
                        className="prefix__cls-59"
                        cx={122.38}
                        cy={109.78}
                        r={0.87}
                    />
                    <circle className="prefix__cls-60" cx={9.36} cy={161.84} r={2.26} />
                    <circle className="prefix__cls-60" cx={13} cy={158.75} r={0.97} />
                    <circle
                        className="prefix__cls-60"
                        cx={13.17}
                        cy={162.88}
                        r={0.81}
                    />
                    <circle
                        className="prefix__cls-60"
                        cx={17.68}
                        cy={157.48}
                        r={0.73}
                    />
                    <circle
                        className="prefix__cls-60"
                        cx={15.83}
                        cy={159.87}
                        r={0.88}
                    />
                    <circle
                        className="prefix__cls-60"
                        cx={18.61}
                        cy={159.62}
                        r={1.05}
                    />
                    <circle
                        className="prefix__cls-30"
                        cx={128.74}
                        cy={161.61}
                        r={10.9}
                    />
                    </g>
                </g>
                </g>
            </svg>
        </div>
    )
  }
  
export default SvgComponent
  

