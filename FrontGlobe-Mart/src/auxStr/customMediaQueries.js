import useMediaQuery from '@mui/material/useMediaQuery';

export function useCustomMediaQueries() {

    const isMediumLargeScreen = useMediaQuery('(min-width: 1250px)');
    const isMediumScreen = useMediaQuery('(min-width: 1000px)');
    const isSmallScreen = useMediaQuery('(min-width: 650px)');
    const isTinyScreen = useMediaQuery('(min-width: 400px)');

    return { isMediumLargeScreen, isMediumScreen, isSmallScreen, isTinyScreen };
}