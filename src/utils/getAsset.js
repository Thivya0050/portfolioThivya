const assetContext = require.context('../assets', false, /\.(png|jpg|jpeg|webp|mp4)$/i);

export function getAsset(filename) {
  const key = `./${filename}`;
  if (assetContext.keys().includes(key)) {
    return assetContext(key);
  }
  return null;
}
