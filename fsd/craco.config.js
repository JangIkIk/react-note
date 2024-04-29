const path = require('path');

module.exports = {
    webpack: {
        alias:{
            "@app": path.resolve(__dirname, "src/"),
            "@state": path.resolve(__dirname, "src/state"),
            "@utility": path.resolve(__dirname, "src/utility"),
            "@pages": path.resolve(__dirname, "src/pages"), 
            '@features': path.resolve(__dirname, 'src/features'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@videos': path.resolve(__dirname, 'src/assets/videos'),
        },
    },
}