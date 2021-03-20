export const useScrollTrigger = () => {
    const prevScroll = window.scrollY
    let curScroll
    let direction = 0;
    let prevDirection = 0;

    curScroll = window.scrollY;
    if (curScroll > prevScroll) {
        // scrolled up
        direction = 2;
    }

    if (curScroll < prevScroll) {
        // scrolled down
        direction = 1;
    }
    return {
        direction, curScroll
    }
}