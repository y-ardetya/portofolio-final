varying vec2 vRef;
varying vec3 vPos;
varying vec3 vNormal;

uniform float uTime;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

void main () {
  //*disc
  float strength = distance(gl_PointCoord, vec2(0.5, 0.5));
  // strength = step(0.5, strength);
  strength = 1.0 - strength;
  strength = pow(strength, 5.0);

  vec3 color = palette( vRef.x, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(1.0,1.0,1.0),vec3(0.0,0.1,0.2) );
  gl_FragColor = vec4(color, strength);
}