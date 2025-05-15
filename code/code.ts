figma.showUI(__html__, { width: 360, height: 480 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-rectangles') {
    const rect = figma.createRectangle();
    rect.resize(100, 100);
    rect.fills = [{ type: 'SOLID', color: { r: 0, g: 1, b: 0 } }];
    figma.currentPage.appendChild(rect);
    figma.viewport.scrollAndZoomIntoView([rect]);
  }
};
