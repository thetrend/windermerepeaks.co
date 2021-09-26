declare module '\*/globals.module.less' {
  const globalStyles: { [className: string]: string };
  export default globalStyles;
}

declare module '\*.module.less' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '\*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
