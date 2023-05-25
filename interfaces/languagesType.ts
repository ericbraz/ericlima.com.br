export type Languages = 'en' | 'pt' | 'fr'

export interface MenuObject {
   name: string
   tag: JSX.Element
   tagSmall: JSX.Element
   language: Languages
   menu: string[]
}
