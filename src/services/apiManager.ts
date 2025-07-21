import type { AxiosResponse, AxiosRequestConfig } from 'axios';

import authorizedAxiosInstance from '@/utils/axios';

// --- CÁC HÀM TIỆN ÍCH (HELPER FUNCTIONS) ---
// Giờ đây chúng trực tiếp gọi instance của Axios, cho phép tùy chỉnh đầy đủ.

/**
 * Thực hiện GET request.
 * @param url - Endpoint cần gọi.
 * @param config - Các tùy chọn bổ sung của Axios (ví dụ: params, headers, signal...).
 */
const get = <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return authorizedAxiosInstance.get<T>(url, config);
};

/**
 * Thực hiện POST request.
 * @param url - Endpoint cần gọi.
 * @param data - Dữ liệu (body) của request.
 * @param config - Các tùy chọn bổ sung của Axios (ví dụ: headers, onUploadProgress...).
 */
const post = <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return authorizedAxiosInstance.post<T>(url, data, config);
};

/**
 * Thực hiện PUT request.
 * @param url - Endpoint cần gọi.
 * @param data - Dữ liệu (body) của request.
 * @param config - Các tùy chọn bổ sung của Axios.
 */
const put = <T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return authorizedAxiosInstance.put<T>(url, data, config);
};

/**
 * Thực hiện DELETE request.
 * @param url - Endpoint cần gọi.
 * @param config - Các tùy chọn bổ sung của Axios.
 */
// Đặt tên là `del` để tránh trùng với từ khóa `delete` của JavaScript
const del = <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return authorizedAxiosInstance.delete<T>(url, config);
};

// --- EXPORT RA ĐỂ SỬ DỤNG ---
export const ApiManager = { get, post, put, delete: del };

// --- CÁCH SỬ DỤNG MỚI (CỰC KỲ LINH HOẠT) ---

// **************** 1. GET request với params (cách cũ vẫn hoạt động) ****************
// ApiManager.get('/users', { params: { page: 1, limit: 10 } });

// **************** 2. POST request với header tùy chỉnh ****************
// const customHeaders = { 'X-Request-ID': 'some-unique-id' };
// ApiManager.post('/users', { name: 'John Doe' }, { headers: customHeaders });

// **************** 3. PUT request với timeout ****************
// ApiManager.put('/posts/1', { title: 'New Title' }, { timeout: 5000 });

// **************** 4. POST file và theo dõi tiến trình upload  ****************
// const formData = new FormData();
// formData.append('file', myFile);

// ApiManager.post('/upload', formData, {
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
//   onUploadProgress: (progressEvent) => {
//     if (progressEvent.total) {
//       const percentCompleted = Math.round(
//         (progressEvent.loaded * 100) / progressEvent.total
//       );
//       console.log(`Upload Progress: ${percentCompleted}%`);
//     }
//   },
// });

// **************** 5. GET request với AbortController để hủy request ****************
// const controller = new AbortController();
// ApiManager.get('/long-running-task', { signal: controller.signal });
// Để hủy request:
// controller.abort();
