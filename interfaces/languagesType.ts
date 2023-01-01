export type Languages = 'en-us' | 'pt-br' | 'fr-fr'

export interface TopMenu {
   name: string
   tag: JSX.Element
   language: Languages
   menu: string[]
}
