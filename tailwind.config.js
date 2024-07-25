module.exports = {
    // ...
    theme: {
      extend: {
        animation: {
          'slide-in': 'slide-in 0.5s forwards',
        },
        keyframes: {
          'slide-in': {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
      },
    },
}