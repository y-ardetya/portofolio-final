import * as THREE from "three";

const loadImage = (path) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (e) => reject(e);
  });
};

export const getPixelData = async (img) => {
  try {
    let image = await loadImage(img);
    let width = 200;
    let height = width;
    let size = 128;
    let number = size * size;
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    let canvasData = ctx.getImageData(0, 0, width, height).data;

    let pixels = [];
    for (let i = 0; i < canvasData.length; i += 4) {
      let x = (i / 4) % width;
      let y = Math.floor(i / 4 / width);
      if (canvasData[i] < 5) {
        pixels.push({ x: x / width - 0.5, y: 0.5 - y / height });
      }
    }
    const data = new Float32Array(4 * number);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const index = i * size + j;
        let randomPixel = pixels[Math.floor(Math.random() * pixels.length)];
        data[4 * index] =
          8 * (randomPixel.x + (Math.random() - 0.5) * 0.01) - 3.3;
        data[4 * index + 1] =
          2 * (randomPixel.y + (Math.random() - 0.5) * 0.01) + 1;
        data[4 * index + 2] = 0;
        data[4 * index + 3] = 1;
      }
    }

    let dataTexture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    dataTexture.needsUpdate = true;
    return dataTexture;
  } catch (error) {
    null;
  }
};

export const getDataTexture = (size) => {
  let number = size * size;
  const data = new Float32Array(4 * number);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const index = i * size + j;

      //*generate points in sphere
      //? if I use x,y,z as position, the points will be in a sphere
      let theta = Math.random() * Math.PI * 2;
      let phi = Math.acos(2 * Math.random() - 1);
      let x = Math.sin(phi) * Math.cos(theta);
      let y = Math.sin(phi) * Math.sin(theta);
      let z = Math.cos(phi);

      data[4 * index] = 6 * (i / size - 0.5);
      data[4 * index + 1] = 6 * (j / size - 0.5);
      data[4 * index + 2] = 0;
      data[4 * index + 3] = 0;
    }
  }

  let dataTexture = new THREE.DataTexture(
    data,
    size,
    size,
    THREE.RGBAFormat,
    THREE.FloatType
  );
  dataTexture.needsUpdate = true;

  return dataTexture;
};
