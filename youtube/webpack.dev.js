// JS의 내장 경로 모듈
const path = require('path');
// HTML 파일을 생성하는 플러그인
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log("경로테스트",path.resolve(__dirname, "public/assets"));

module.exports = {
    // webpack에 내장된 최적화기능 모드에 따라 각환경에대해 최적화
    mode: "development",
    // webpack의 번들링 프로세스를 시작할 시작점
    entry: path.resolve(__dirname,'./src/index.tsx'),
    // 개발시 사용하는 서버
    // 컴파일후 파일을 출력하지 않는다. 번들파일을 메모리에 보관하고 실제 파일인 것처럼 제공함
    devServer: {
        static:{
          // 정적파일이 있는 경로를 지정
          directory: path.resolve(__dirname, "public/assets"),
          // 서버에서 제공할 정적 파일경로
          publicPath: "/assets"
        },
        // 서버가 시작된 후 브라우저를 열도록
        open: true,
        // 변경된 사항만 갱신
        hot: true,
        // 서버가 열링 port
        port: 3000,
        // dev-server는 파일 변경이 감지되면 페이지를 다시로드함
        // 해당 옵션을 적용하려면 hot을 비활성화 하거나, watchFiles를 활성화
        // https://webpack.kr/configuration/dev-server/#devserverwatchfiles
        // watchFiles: ["src/**/*.index.tsx"]
        // liveReload: false,
    },
    // 다른 유형의 모듈을 처리하는 방법을 결정함
    module: {
    rules: [
      {
        // 테스트를 통과하는 모듈을 포함시킴
        test: /\.(ts|tsx)$/,
        // 결정한 모듈에 적용할 로더
        // ts-loader도 존재한다. 이전에는 ts-loader를 사용해야했지만
        // babel 7 버전이후에는 typeScript도 지원한다고 함
        // 그렇기에 ts-loader는 사용하지않음
        // 단 typescript를 처리하기위해서는 @babel/preset-typescript이 필요하다? -> type 체크를 위한
        // ts-loader를 사용해야 tsconfig.json의 규칙에 따라 타입체킹을 한다?
        use: "babel-loader",
        // 조건과 일치하는 모든 모듈을 제외
        // 번들링과 관련
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        // css-loader: css파일을 읽기위함
        // style-loader: js에서 생성되는 동적 스타일을 적용
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  // 모듈을 해석하는 방식을 결정함
    resolve:{
      //확장자 순서대로 해석하며, 배열의 앞에서부터 해석하고 남은것은 해석하지 않음
        // extensions:[".js", ".ts", ".jsx", ".tsx", ".css"]
        alias:{
          "@css": path.resolve(__dirname, "src/css/"),
          "@components": path.resolve(__dirname, "src/components/"),
        },
    },
    // 불러온 플러그인을 적용
    // https://webpack.kr/plugins/#root
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),

    ]

}