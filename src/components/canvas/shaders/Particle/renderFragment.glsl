varying vec2 vRef;
varying vec3 vPos;
varying vec3 vNormal;

uniform float uTime;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

void main () {
  // vec3 color = palette( vNormal.x, vec3(0.1,0.10,0.20),vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(1.0,1.0,1.0) );
  gl_FragColor = vec4(vRef, 1.0 , 0.1);
}