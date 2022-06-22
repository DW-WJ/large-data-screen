import axios from 'axios'
// 配置服务器Url
// const baseUrl = process.env.NODE_ENV === 'development'
//   ? 'https://mes.goldwind.com.cn/GWMES_TEST/' : window.location.protocol + '//' + window.location.host

const baseUrl = 'https://mes.goldwind.com.cn/GWMES/'
// const baseUrl = 'http://192.168.0.113/GWMES/'

 // http://10.8.3.66/GWMES/
// 创建axios实例
const service = axios.create({
	baseURL: '/api/',
	// baseURL: baseUrl,
	timeout: 20 * 60 * 60 * 1000
	// headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

service.interceptors.request.use(function(config) {
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

service.interceptors.response.use(function(response) {
	// 处理响应数据
	if (response.status === 200) {
		return Promise.resolve(response.data);
	} else {
		return Promise.reject(response);
	}
}, function(error) {
	// 处理响应失败
	return Promise.reject(error);
});


export default service
