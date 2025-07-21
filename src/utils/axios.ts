import axios from 'axios';

// Khởi tạo đối tượng Axios cấu hình chung cho dự án
const authorizedAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30 * 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
});

// withCredentials: sẽ cho phép axios tự động đính kèm và gửi cookie trong mỗi request lên BE
// cho phép Axios tự động gửi kèm các thông tin xác thực (credentials) trong mỗi request API được thực hiện bởi instance này. "Credentials" ở đây thường là:
// - Cookies: Phổ biến nhất, sử dụng JWT tokens (refresh và access) theo cơ chế httpOnly Cookie.
// - Authorization headers: Các header dùng cho việc xác thực (ví dụ: HTTP Basic Auth).
// - TLS client certificates: Chứng chỉ bảo mật phía client.
authorizedAxiosInstance.defaults.withCredentials = true;

// Cấu hình Request Interceptor: can thiệp vào giữa những request API
authorizedAxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Cấu hình Response Interceptor: Can thiệp vào những response nhận về từ API
authorizedAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default authorizedAxiosInstance;
