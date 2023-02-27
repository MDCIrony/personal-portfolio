//Button interfaces
export interface IShowButton {
  clicked: boolean;
  handleClick: () => void;
}

export interface IHoveredImg {
  img?: string;
  alt: string;
  size?: string;
  href: string;
  children?: React.ReactNode;
}

export interface IHoveredLink {
  link: string;
  text: string;
  width?: string;
  onClick?: () => void;
}

export interface IFooterIcon {
  href: string;
  alt: string;
  icon: React.ReactNode;
}

export interface IImage {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

export interface IRewriteText {
  toRotate: string[];
  period: number;
}
