uniform float uIntensity;
uniform float uTime;

varying vec2 vUv;
varying float vDisplacement;

void main () {
    float distort = 2.0 * vDisplacement * uIntensity * sin(vUv.y * 10.0 + uTime);
    vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
    gl_FragColor = vec4(color, 1.0);
}