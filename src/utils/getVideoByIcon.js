import iconToVideoMap from '../config/iconVideoMap';

export function getVideoByIcon(iconCode) {
  return iconToVideoMap[iconCode] || 'default.mp4';
}
