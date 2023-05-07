import React from 'react'

function GreatWaveSVG() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={827}
            height={662}
            viewBox='0 0 827 662'
            className='max-w-full h-auto drop-shadow-md relative z-0 animate-fadeInLeft'
        >
            <defs>
                <linearGradient id="a">
                    <stop
                        offset={0}
                        style={{
                            stopColor: "#627d9a",
                            stopOpacity: 1,
                        }}
                    />
                </linearGradient>
                <linearGradient
                    xlinkHref="#a"
                    id="b"
                    x1={21.915}
                    x2={740.966}
                    y1={392.981}
                    y2={392.981}
                    gradientTransform="matrix(1.15207 0 0 1 -25.57 18.832)"
                    gradientUnits="userSpaceOnUse"
                />
            </defs>
            <path
                d="M1.44 742.576S-65.632-88.11 809.83 112.223c23.644 5.41 23.448 14.758.055 20.934C113.19 317.084 712.208 743.25 712.208 743.25z"
                style={{
                    fill: "url(#b)",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 1.07334,
                    strokeOpacity: 1,
                }}
                transform="translate(-.256 -81.047)"
            />
            <path
                d="M809.83 112.223c23.644 5.41 23.448 14.758.055 20.934-41.503 10.957-78.407 22.773-111.115 35.308 25.177-40.499 45.703-69.016 111.06-56.242z"
                style={{
                    fill: "#fff",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: 1.07334,
                    strokeOpacity: 1,
                }}
                transform="translate(-.256 -81.047)"
            />
            <path
                d="M132.655 262.202c5.182 9.327 131.031 19.98 163.747 232.147-154.867-151.6-287.075 77.727-287.075 77.727C24.52 455.21 59.56 348.74 132.655 262.202Z"
                style={{
                    display: "inline",
                    fill: "#fff",
                    fillOpacity: 1,
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeOpacity: 1,
                }}
                transform="translate(-.256 -81.047)"
            />
        </svg>
    )
}

export default GreatWaveSVG