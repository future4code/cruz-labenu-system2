export const rem = (pixel: number) => `${pixel / 16} rem`

export const theme = {
  primary: '#fe7e02',
  secondary: '#f9b24e',
  textPrimary: '#323b3f',
  textSecondary: '#fff',
  backgroundPrimary: '#fff',
  backgroundSecondary: '#e3e8eb',
  cardPrimary: '#45525b',
  cardSecondary: '#bccbd5',
  typography: {
    title: '5 rem',
    subtitle1: '4 rem',
    subtitle2: '3 rem',
    body1: '1.5 rem',
    body2: '1.2 rem',
    button: '1.8 rem',
    caption: '1 rem'
  },
  space(size: number) {
    return this.remi(size * 8)
  },
  remi: (pixel: number) => `${pixel / 16} rem`
}
