const path = require('path');

module.exports = {
    webpack: {
        alias:{
            "@app": path.resolve(__dirname, "src/"), 
            "@pages": path.resolve(__dirname, "src/pages"), 
            '@widget': path.resolve(__dirname, 'src/widget'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@entities': path.resolve(__dirname, 'src/entities'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@image': path.resolve(__dirname, 'src/shared/assets/image'),
        },
    },
}