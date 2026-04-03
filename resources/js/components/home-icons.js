import { h } from 'vue';

function makeIcon(paths) {
    return {
        inheritAttrs: false,
        props: {
            class: {
                type: String,
                default: '',
            },
        },
        setup(props) {
            return () =>
                h(
                    'svg',
                    {
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        stroke: 'currentColor',
                        'stroke-width': 1.9,
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        class: props.class,
                    },
                    paths.map((attrs) => h('path', attrs)),
                );
        },
    };
}

export const ArrowIcon = makeIcon([{ d: 'M5 12h14' }, { d: 'm13 6 6 6-6 6' }]);
export const PhoneIcon = makeIcon([{ d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 11.8 19.86 19.86 0 0 1 1.08 3.18 2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.12.9.34 1.77.64 2.59a2 2 0 0 1-.45 2.11L6.9 8.85a16 16 0 0 0 8.26 8.25l1.42-1.42a2 2 0 0 1 2.11-.45c.82.3 1.69.52 2.59.64A2 2 0 0 1 22 16.92z' }]);
export const MapPinIcon = makeIcon([{ d: 'M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z' }, { d: 'M12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' }]);
export const ShieldIcon = makeIcon([{ d: 'm12 3 7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3Z' }, { d: 'm9.5 12 1.7 1.7 3.8-4.2' }]);
export const StethoscopeIcon = makeIcon([{ d: 'M6 3v5a4 4 0 0 0 8 0V3' }, { d: 'M8 3h6' }, { d: 'M12 12v3a4 4 0 1 0 4-4h-1' }, { d: 'M17 11a2 2 0 1 1 0 4' }]);
