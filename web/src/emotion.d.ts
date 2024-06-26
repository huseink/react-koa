import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      white: string;
      black: string;
      primary: string;
      primaryDarken: string;
      gray: string;
      grayDarken: string;
      success: string;
      error: string;
    };
  }
}
