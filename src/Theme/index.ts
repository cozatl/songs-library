// import { DefaultTheme } from "styled-components/dist/types"; // Not needed for the creation of file styled.d.ts
// Changed name to index.ts instead of index.js (to import DefaultTheme correctly)

const Theme = {
    colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        background: '#f0f0f0',
    },
    fonts: {
        base: 'Helvetica, Arial, sans-serif',
        size: {
            small: '12px',
            medium: '15px',
        },
        weight: {
            normal: 400,
            light: 300
        }
    },
}

export default Theme;