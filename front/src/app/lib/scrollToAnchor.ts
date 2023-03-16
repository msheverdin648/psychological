

export function ScrollToAnchor(anchor: string):void {
    const element = document.querySelector(anchor);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}