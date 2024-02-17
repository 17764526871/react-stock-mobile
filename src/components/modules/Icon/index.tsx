import '../../../assets/icon/iconfont.css';
interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({ className, style, onClick }) => {
  if (className) {
    return <i className={`iconfont icon-${className}`} style={style} onClick={onClick}></i>;
  }

  return null;
};
