export default function getEdges(target: any) {
  const {
    top,
    right,
    bottom,
    left,
    height
  } = target.offsetParent.getBoundingClientRect();
  return { top, right, left, bottom };
}
