# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
    extends: [
        // Remove ...tseslint.configs.recommended and replace with this
        ...tseslint.configs.recommendedTypeChecked,
        // Alternatively, use this for stricter rules
        ...tseslint.configs.strictTypeChecked,
        // Optionally, add this for stylistic rules
        ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
    plugins: {
        // Add the react-x and react-dom plugins
        'react-x': reactX,
        'react-dom': reactDom,
    },
    rules: {
        // other rules...
        // Enable its recommended typescript rules
        ...reactX.configs['recommended-typescript'].rules,
        ...reactDom.configs.recommended.rules,
    },
});
```

## Advanced Knowledge

### Higher-Order Component (HOC)

Là một hàm nhận vào một component và trả về một component mới với thêm logic hoặc props. Nó được dùng để tái sử dụng logic giữa các components (kiểu như "decorator").

- Mục đích:
  - Tái sử dụng logic của component, chia sẻ logic không liên quan đến giao diện như data fetching, theo dõi trạng thái, lắng nghe sự kiện của trình duyệt.
  - Cung cấp styling hoặc theming.
  - Thao tác với Props: HOC có thể thay đổi, thêm, hoặc bớt các props được truyền vào component.

- Khi nào sử dụng:
  - Tạo HOC để hiện thi trạng thái loading: khi có nhiều component cần lấy dữ liệu từ một API. Bạn muốn hiển thi thông báo "Đang tải ...". Logic này sẽ bị lặp lại ở khắp nơi, vì thế sử dụng HOC là hợp lý.
