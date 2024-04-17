const path = require('path');

module.exports = {
    webpack: {
        alias:{
            '@image': path.resolve(__dirname, 'src/assets/image'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
        },
    },
}