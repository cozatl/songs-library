// Definition of main DefaulTheme to be used in all the project and be recognized in all modules

import 'styled-components';
import Theme from './Theme';

type ThemeType = typeof Theme;
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}