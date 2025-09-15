
import React from 'react';

interface IconProps {
  className?: string;
}

export const AppIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.25 2.25a.75.75 0 00-1.5 0V3h-1.5V2.25a.75.75 0 00-1.5 0V3h-1.5V2.25a.75.75 0 00-1.5 0V3a.75.75 0 000 1.5h6a.75.75 0 000-1.5V2.25z" />
    <path fillRule="evenodd" d="M3 6a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6zm0 4.5A.75.75 0 013.75 10h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm0 4.5A.75.75 0 013.75 14h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 15zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
);

export const IntegrationIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.19 8.22a.75.75 0 00-1.06 0L9 10.28l-1.06-1.06a.75.75 0 00-1.06 1.06l1.06 1.06-1.06 1.06a.75.75 0 101.06 1.06l1.06-1.06 1.06 1.06a.75.75 0 101.06-1.06l-1.06-1.06 2.06-2.06a.75.75 0 000-1.06zM15 11.25a.75.75 0 00-.75.75v.03a.75.75 0 00.75.75h.03a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75h-.03z" clipRule="evenodd" />
    </svg>
);


export const ContentIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
    </svg>
);


export const TwitterIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
