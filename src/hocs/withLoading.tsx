import React from 'react';

export interface WithLoadingProps {
  isLoading: boolean;
}

// Sử dụng Generic <P> để đại diện cho props của WrappedComponent.
// React.ComponentType<P> là kiểu cho một component (class hoặc function) nhận vào props P.
const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  // Component mới sẽ nhận props của component gốc (P) và props của HOC (WithLoadingProps).
  // Ta dùng toán tử giao (intersection type) `&` để kết hợp chúng.
  const WithLoadingComponent = (props: P & WithLoadingProps) => {
    // Tách prop `isLoading` ra, phần còn lại là `restProps` sẽ được truyền cho component gốc.
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <div>Fetching data... </div>;
    }

    // `restProps` bây giờ có kiểu P, chính xác là những gì WrappedComponent cần.
    // Chúng ta cần ép kiểu `restProps` về `P` để TypeScript hiểu.
    return <WrappedComponent {...(restProps as P)} />;
  };

  return WithLoadingComponent;
};

export default withLoading;
