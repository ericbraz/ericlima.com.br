export type Languages = 'en' | 'pt' | 'fr'

export interface TopMenu {
   name: string
   tag: JSX.Element
   language: Languages
   menu: string[]
}
