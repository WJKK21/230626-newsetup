const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		index: "./index.tsx"
	}, // 진입점 파일
	output: {
    path: path.join(__dirname, 'bundle'),
    filename: '[name].bundle.js'
	}, // 번들링 출력 결과물 저장
	module: {
		rules: [
			{
				test: [/\.ts/, /\.tsx/],
				use: [
					"babel-loader",
					"ts-loader"
				]
			}
		]
	}, // test에 지정된 파일을 어떤 모듈로 해석할 것인지 지정
	devServer: {
		historyApiFallback: true, // 페이지 404를 응답 받을경우 main페이지로 자동 이동
		port: 8050, // dev-server를 실행할 포트 지정
		hot: true, // 뜨거워 - 번들링 대상 파일이 수정 될 경우 자동으로 반영하도록 설정
	},
	resolve: {
		extensions: [
			".js", ".jsx", ".ts", ".tsx"
		]
	}, // 어떤 유형의 파일들을 해석할 것인지 지정
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html" // index.html을 템플릿으로 번들링 결과 복사본 생성
		})
	]
}