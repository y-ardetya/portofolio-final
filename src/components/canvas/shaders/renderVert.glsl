uniform sampler2D uTexture;
varying vec2 vRef;

attribute vec2 ref;

void main () {
    vRef = ref;
    vec3 pos = texture2D(uTexture, ref).rgb;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 2.0;
}