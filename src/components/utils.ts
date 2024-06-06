// utils.ts
export const generateImageFrames = (src: string, frameCount: number): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'Anonymous';  // 确保跨域图片可以加载
    image.src = src;
    image.onload = () => {
      const frames = [];
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject('Canvas context is null');
        return;
      }

      const frameWidth = image.width / frameCount;
      const frameHeight = image.height;
      canvas.width = frameWidth;
      canvas.height = frameHeight;

      for (let i = 0; i < frameCount; i++) {
        ctx.drawImage(image, -i * frameWidth, 0, image.width, image.height);
        frames.push(canvas.toDataURL());
        ctx.clearRect(0, 0, frameWidth, frameHeight);
      }

      resolve(frames);
    };
    image.onerror = () => {
      reject('Image loading error');
    };
  });
};
