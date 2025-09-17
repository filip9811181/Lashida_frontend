export const Circle = () => {
    return (

        <svg
            width='27'
            height='27'
            viewBox='0 0 27 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g filter='url(#filter0_d_51_4252)'>
                <circle cx='11.5' cy='11.5' r='11.5' fill='white' />
                <circle cx='11.5' cy='11.5' r='10' stroke='black' stroke-width='3' />
            </g>
            <defs>
                <filter
                    id='filter0_d_51_4252'
                    x='0'
                    y='0'
                    width='27'
                    height='27'
                    filterUnits='userSpaceOnUse'
                    color-interpolation-filters='sRGB'
                >
                    <feFlood flood-opacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    />
                    <feOffset dx='4' dy='4' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
                    />
                    <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_51_4252'
                    />
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_51_4252'
                        result='shape'
                    />
                </filter>
            </defs>
        </svg>
    );
};
