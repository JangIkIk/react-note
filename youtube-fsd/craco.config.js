const path = require('path');

module.exports = {
    webpack: {
        alias:{
            "@app": path.resolve(__dirname, "src/1_app"),
            "@pages": path.resolve(__dirname, "src/2_pages"), 
            "@widgets": path.resolve(__dirname, "src/3_widgets"), 
            '@features': path.resolve(__dirname, 'src/4_features'),
            '@entities': path.resolve(__dirname, 'src/5_entities'),
            "@shared": path.resolve(__dirname, "src/shared"), 
            '@images': path.resolve(__dirname, 'src/shared/assets/images'),
        },
    },
}