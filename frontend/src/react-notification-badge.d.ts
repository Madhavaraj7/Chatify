declare module 'react-notification-badge' {
    import * as React from 'react';
  
    interface NotificationBadgeProps {
      count: number;
      effect?: any;
      style?: React.CSSProperties;
      className?: string;
    }
  
    const NotificationBadge: React.FC<NotificationBadgeProps>;
  
    export default NotificationBadge;
  }
  