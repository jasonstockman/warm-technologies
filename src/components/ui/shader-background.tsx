import { useEffect, useRef } from 'react';

const vertexShaderSource = `
  attribute vec4 aVertexPosition;

  void main() {
    gl_Position = aVertexPosition;
  }
`;

const fragmentShaderSource = `
  precision highp float;

  uniform vec2 iResolution;
  uniform float iTime;

  const float overallSpeed = 0.14;
  const float gridSmoothWidth = 0.015;
  const vec4 lineColor = vec4(0.55, 0.42, 0.70, 1.0);
  const float scale = 4.2;
  const float minLineWidth = 0.008;
  const float maxLineWidth = 0.055;
  const float lineSpeed = 0.7 * overallSpeed;
  const float lineAmplitude = 0.85;
  const float lineFrequency = 0.18;
  const float warpSpeed = 0.16 * overallSpeed;
  const float warpFrequency = 0.42;
  const float warpAmplitude = 0.72;
  const float offsetFrequency = 0.42;
  const float offsetSpeed = 0.9 * overallSpeed;
  const float minOffsetSpread = 0.4;
  const float maxOffsetSpread = 1.4;
  const int linesPerGroup = 12;

  #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
  #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))

  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
  }

  float getPlasmaY(float x, float horizontalFade, float offset) {
    return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
  }

  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord.xy / iResolution.xy;
    vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;

    float horizontalFade = 1.0 - (cos(uv.x * 6.28318) * 0.5 + 0.5);
    float verticalFade = 1.0 - (cos(uv.y * 6.28318) * 0.5 + 0.5);
    float edgeFade = smoothstep(0.08, 0.65, uv.x) * smoothstep(0.08, 0.82, uv.y);

    space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
    space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;

    vec4 lines = vec4(0.0);

    for (int l = 0; l < linesPerGroup; l++) {
      float normalizedLineIndex = float(l) / float(linesPerGroup);
      float offsetTime = iTime * offsetSpeed;
      float offsetPosition = float(l) + space.x * offsetFrequency;
      float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
      float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
      float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
      float linePosition = getPlasmaY(space.x, horizontalFade, offset);
      float line = drawSmoothLine(linePosition, halfWidth, space.y) * 0.35 + drawCrispLine(linePosition, halfWidth * 0.2, space.y) * 0.75;

      float circleX = mod(float(l) + iTime * lineSpeed, 20.0) - 10.0;
      vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
      float circle = drawCircle(circlePosition, 0.009, space) * 1.4;

      lines += (line + circle) * lineColor * rand;
    }

    vec4 bgColor1 = vec4(1.0, 1.0, 1.0, 1.0);
    vec4 bgColor2 = vec4(0.90, 0.82, 0.98, 1.0);
    vec4 fragColor = mix(bgColor1, bgColor2, uv.x * 0.45 + uv.y * 0.18);
    fragColor += lines * verticalFade * edgeFade;
    fragColor.a = 1.0;

    gl_FragColor = fragColor;
  }
`;

function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);

  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function initShaderProgram(gl: WebGLRenderingContext) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (!vertexShader || !fragmentShader) {
    return null;
  }

  const shaderProgram = gl.createProgram();

  if (!shaderProgram) {
    return null;
  }

  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error('Shader program link error:', gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true });

    if (!gl) {
      console.warn('WebGL not supported.');
      return undefined;
    }

    const shaderProgram = initShaderProgram(gl);

    if (!shaderProgram) {
      return undefined;
    }

    const positionBuffer = gl.createBuffer();

    if (!positionBuffer) {
      return undefined;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0]),
      gl.STATIC_DRAW,
    );

    const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
    const resolution = gl.getUniformLocation(shaderProgram, 'iResolution');
    const time = gl.getUniformLocation(shaderProgram, 'iTime');

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const startTime = Date.now();
    let animationFrame = 0;

    const render = () => {
      const currentTime = (Date.now() - startTime) / 1000;

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(shaderProgram);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(time, currentTime);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(vertexPosition);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.075] mix-blend-multiply"
    />
  );
}

export default ShaderBackground;
