uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uMouse;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vWind;

struct Light {
    vec3 position;
    vec3 color;
};

vec3 addLight (Light l) {
    //* light direction
    vec3 L = normalize(l.position - vPosition);
    //* surface normal
    vec3 N = normalize(vNormal);

    //* ambient Light
    float ambientScore = 0.4;
    vec3 ambientColor = ambientScore * l.color;

    //* diffuse Light
    float diffuseScore = max(dot(L, N), 0.0);
    vec3 diffuseColor = diffuseScore * l.color;

    return ambientColor + diffuseColor;
}

void main () {
    vec4 color = texture2D(uTexture, vUv);
    float grayscale = (color.r + color.g + color.b) / 3.0;
    color.rgb = vec3(grayscale);
    Light l = Light(
        vec3(uMouse.x, uMouse.y , 1.0),
        vec3(1.0, 1.0, 1.0)
    );


    vec3 rgb = addLight(l) * color.rgb;
    vec4 finalColor = vec4(rgb, 1.0);

    gl_FragColor = finalColor;
}