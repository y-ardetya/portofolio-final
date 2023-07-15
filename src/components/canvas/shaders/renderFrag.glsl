varying vec2 vRef;
uniform sampler2D uPicture;
void main () {
    // vec4 color = texture2D(uPicture, vRef);
    gl_FragColor = vec4(vRef,1.0,1.0);
}