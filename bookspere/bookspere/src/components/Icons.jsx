const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
       viewBox="0 0 24 24" strokeWidth={1.5} 
       stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

export const BookIcon = () => <Icon path="M12 6.253v13..." />;
export const SearchIcon = () => <Icon path="M21 21l-5.197-5.197..." />;
export const UserIcon = () => <Icon path="M15.75 6a3.75..." />;
export const MenuIcon = () => <Icon path="M3.75 6.75h16.5..." />;
export const CloseIcon = () => <Icon path="M6 18L18 6..." />;
