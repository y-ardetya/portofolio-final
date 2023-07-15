uniform sampler2D uCurrentPosition;
uniform sampler2D uOriginalPosition;
uniform vec2 uMouse;
uniform float uTime;

varying vec2 vUv;

void main () {
    vec2 position = texture2D(uCurrentPosition, vUv).xy;
    vec2 original = texture2D(uOriginalPosition, vUv).xy;

    vec2 force = original - uMouse.xy;
    float len = length(force);
    float forceFactor = 1.0 / max(1.0, len * 50.0);

    vec2 positionToGo = original + normalize(force) * forceFactor * 2.;

    position.xy += (positionToGo - position.xy) * 1.0;



    gl_FragColor = vec4(position, 0.0, 1.0);
}