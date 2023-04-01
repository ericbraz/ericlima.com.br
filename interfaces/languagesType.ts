export type Languages = 'en' | 'pt' | 'fr'

export interface TopMenu {
   name: string
   tag: JSX.Element
   tagSmall: JSX.Element
   language: Languages
   menu: string[]
}
