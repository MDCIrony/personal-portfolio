//Button interfaces
export interface IShowButton {
  clicked: boolean;
  handleClick: () => void;
}

export interface IHoveredImg {
  img: string;
  alt: string;
  size: string;
  href: string;
}

export interface IHoveredLink {
  link: string;
  text: string;
  width?: string;
  onClick?: () => void;
}
