import useMediaQuery from '@mui/material/useMediaQuery';

export function useCustomMediaQueries() {

    const isLargeScreen = useMediaQuery('(min-width: 1750px)');
    const isMediumLargeScreen = useMediaQuery('(min-width: 1250px)');
    const isMediumScreen = useMediaQuery('(min-width: 1000px)');
    const isSmallScreen = useMediaQuery('(min-width: 650px)');
    const isTinyScreen = useMediaQuery('(min-width: 400px)');

    return { isLargeScreen, isMediumLargeScreen, isMediumScreen, isSmallScreen, isTinyScreen };
}