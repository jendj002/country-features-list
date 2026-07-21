export function correctPopupOverflow(map: L.Map, popupEl: HTMLElement) {
    const popupRect = popupEl.getBoundingClientRect();
    const mapRect = map.getContainer().getBoundingClientRect();

    let panX = 0, panY = 0;
    const overflowRight = popupRect.right - mapRect.right;
    const overflowLeft = mapRect.left - popupRect.left;
    const overflowTop = mapRect.top - popupRect.top;
    const overflowBottom = popupRect.bottom - mapRect.bottom;

    if (overflowRight > 0) panX = overflowRight + 15;
    else if (overflowLeft > 0) panX = -(overflowLeft + 15);
    if (overflowTop > 0) panY = -(overflowTop + 15);
    else if (overflowBottom > 0) panY = overflowBottom + 15;

    if (panX || panY) map.panBy([panX, panY], { animate: false });
}