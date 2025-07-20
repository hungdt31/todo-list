import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import paths from '@/constants/path';
import { useAuth } from '@/hooks/useAuth';

// Sử dụng Generic <P> để chấp nhận mọi loại props
const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {

  const WithAuthComponent = (props: P) => {
    // Lấy trạng thái đăng nhập từ Context
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    // Nếu đã đăng nhập, render component gốc với các props của nó
    if (isLoggedIn) {
      return <WrappedComponent {...props as P} />;
    }

    // Nếu chưa đăng nhập, render một thông báo hoặc một component khác (ví dụ: <Redirect to="/login" />)
    return (
      <div>
        <h2>Truy cập bị từ chối</h2>
        <p>Bạn cần phải đăng nhập để xem nội dung này.</p>
        <Button variant={'outlined'} onClick={() => navigate(paths.LOGIN)}>Đăng nhập</Button>
      </div>
    );
  };

  return WithAuthComponent;
};

export default withAuth;
