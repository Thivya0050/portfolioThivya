import sabas1 from '../assets/sabas1.png';
import sabas2 from '../assets/sabas2.png';
import sabas3 from '../assets/sabas3.png';
import sabas4 from '../assets/sabas4.png';
import chatboxImg from '../assets/ai_chatbox.png';
import aesappImg from '../assets/gig.png';
import rainwaterImg from '../assets/rainwater_optimizer_landscape.png';
import robotVideo from '../assets/robort_arm_project.mp4';
import pushupVideo from '../assets/AI_Push-Up_Counter_2025-11-08_10-00-20.mp4';
import emotionVideo from '../assets/Real-Time_Emotion_Detector_2025-11-06_14-58-48.mp4';

const webpContext = require.context('../assets', false, /\.webp$/i);

function loadWebp(filename) {
  const key = `./${filename}`;
  return webpContext.keys().includes(key) ? webpContext(key) : null;
}

export const hubsmonImages = [
  'main_hm.webp',
  '2main_hm.webp',
  '3main_hm.webp',
  '4_hm.webp',
  'map_hm.webp',
]
  .map(loadWebp)
  .filter(Boolean);

export const sabasImages = [sabas1, sabas2, sabas3, sabas4];

export {
  chatboxImg,
  aesappImg,
  rainwaterImg,
  robotVideo,
  pushupVideo,
  emotionVideo,
};
