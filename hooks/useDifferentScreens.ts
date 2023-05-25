import useWindowDimensions from './useWindowDimensions'

export default function useDifferentScreens() {
   const screenWidth = useWindowDimensions().width

   // Changes in this variables must match changes of CSS variables in styles/global.css file
   const smallScreen = 550 // --max-mobile-screen: 550px;
   const largeScreen = 940 // --max-tablet-screen: 940px;

   const mobileScreen = screenWidth <= smallScreen
   const tabletScreen = screenWidth > smallScreen && screenWidth <= largeScreen
   const desktopScreen = screenWidth > largeScreen

   return { mobileScreen, tabletScreen, desktopScreen }
}
