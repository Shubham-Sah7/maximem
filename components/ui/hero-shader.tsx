"use client";

import React, { useRef, useEffect } from "react";

interface HeroShaderProps {
  isLight?: boolean;
  className?: string;
  opacity?: number;
}

const VERTEX_SHADER_SOURCE = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = (a_position + 1.0) * 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SOURCE = `
  precision highp float;
  varying vec2 v_uv;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform float u_is_light;
  uniform float u_opacity;

  // 2D Rotation matrix for octave rotation
  const mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);

  // Fast trigonometric pseudo-hash
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // Smooth quintic value noise
  float noise(in vec2 x) {
    vec2 p = floor(x);
    vec2 f = fract(x);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
    
    float a = hash(p + vec2(0.0, 0.0));
    float b = hash(p + vec2(1.0, 0.0));
    float c = hash(p + vec2(0.0, 1.0));
    float d = hash(p + vec2(1.0, 1.0));
    
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  // 3-octave Fractional Brownian Motion
  float fbm(vec2 p) {
    float f = 0.0;
    f += 0.5000 * noise(p); p = rot * p * 2.02;
    f += 0.2500 * noise(p); p = rot * p * 2.03;
    f += 0.1250 * noise(p); p = rot * p * 2.01;
    return f / 0.875;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 st = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);

    // Interactive fluid mouse displacement
    vec2 mouse = (u_mouse.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    float mouseDist = length(st - mouse);
    float mouseInfluence = smoothstep(0.65, 0.0, mouseDist);
    vec2 mouseDir = (mouseDist > 0.001) ? normalize(st - mouse) : vec2(0.0);
    vec2 mouseOffset = mouseDir * mouseInfluence * 0.14;

    // Ambient time drift
    float t = u_time * 0.11;

    // Liquid Domain Warping
    vec2 p = st * 1.5 + mouseOffset;

    vec2 q = vec2(
      fbm(p + vec2(0.0, 0.0) + vec2(t * 0.28, t * 0.18)),
      fbm(p + vec2(5.2, 1.3) - vec2(t * 0.18, t * 0.22))
    );

    vec2 r = vec2(
      fbm(p + 3.0 * q + vec2(1.7, 9.2) + 0.14 * t),
      fbm(p + 3.0 * q + vec2(8.3, 2.8) - 0.11 * t)
    );

    float f = fbm(p + 2.8 * r + 0.06 * t);

    // Caustic light contours & luminous filaments
    float ridge1 = 1.0 - abs(sin(f * 8.5 + t * 0.7));
    ridge1 = pow(ridge1, 3.2);

    float ridge2 = 1.0 - abs(sin((f + length(q)) * 13.0 - t * 0.5));
    ridge2 = pow(ridge2, 3.8);

    // Chromatic dispersion offsets for subtle prism refraction
    float fR = fbm(p + 2.8 * r + vec2(0.005, 0.003));
    float fG = f;
    float fB = fbm(p + 2.8 * r - vec2(0.005, 0.003));

    // Cinematic photographic micro-dither to eliminate color banding
    float grain = (hash(gl_FragCoord.xy + fract(u_time * 1.618)) - 0.5) * 0.022;

    // Soft border vignettes for seamless page blending
    float edgeFadeX = smoothstep(0.0, 0.16, uv.x) * smoothstep(1.0, 0.84, uv.x);
    float edgeFadeY = smoothstep(0.0, 0.15, uv.y) * smoothstep(1.0, 0.85, uv.y);
    float vignette = edgeFadeX * edgeFadeY;

    // Central headline & subtitle area relief
    vec2 textPos = vec2(st.x * 1.15, (st.y - 0.10) * 1.9);
    float textDist = length(textPos);
    float textRelief = smoothstep(0.18, 0.72, textDist);
    float filamentMask = 0.20 + 0.80 * textRelief;

    vec4 finalColor;

    if (u_is_light > 0.5) {
      // ════════════ LIGHT MODE: Luminous Alabaster & Sunlit Liquid Amber ════════════
      vec3 baseBg = vec3(1.0, 1.0, 1.0);
      
      vec3 peachLight = vec3(1.0, 0.65, 0.44);
      vec3 amberLight = vec3(0.95, 0.40, 0.13); // Maximem orange #f26522
      vec3 goldLight  = vec3(1.0, 0.82, 0.52);

      vec3 waveColor = mix(peachLight, amberLight, clamp(q.x * 0.7 + 0.3, 0.0, 1.0));
      waveColor = mix(waveColor, goldLight, clamp(r.y * 0.5 + 0.2, 0.0, 1.0));
      waveColor += vec3(ridge1 * 0.45 + ridge2 * 0.35) * goldLight * filamentMask;

      // Subtle prism refraction
      waveColor.r += (fR - fG) * 0.18 * filamentMask;
      waveColor.b += (fB - fG) * 0.12 * filamentMask;

      float waveIntensity = clamp(f * 0.6 + 0.4, 0.0, 1.0);
      float alpha = (waveIntensity * 0.36 + ridge1 * 0.22 + ridge2 * 0.18) * vignette * u_opacity;
      alpha *= (0.35 + 0.65 * textRelief);

      vec3 blended = mix(baseBg, waveColor, alpha);
      blended += grain * 0.015;
      finalColor = vec4(blended, alpha * 1.25);

    } else {
      // ════════════ DARK MODE: Obsidian Velvet & Radiant Molten Ember ════════════
      vec3 baseBg = vec3(0.055, 0.055, 0.051); // #0e0e0d
      vec3 wineDepth = vec3(0.18, 0.06, 0.03); // Deep glowing undertone
      
      vec3 emberCore = vec3(0.95, 0.40, 0.13); // #f26522
      vec3 radiantOrange = vec3(1.0, 0.56, 0.20);
      vec3 moltenGold = vec3(1.0, 0.84, 0.50);
      vec3 hotCrest = vec3(1.0, 0.96, 0.90);

      vec3 waveColor = mix(wineDepth, emberCore, clamp(f * 1.3, 0.0, 1.0));
      waveColor = mix(waveColor, radiantOrange, clamp(length(q) * 0.75, 0.0, 1.0));
      waveColor = mix(waveColor, moltenGold, clamp(r.x * 0.55, 0.0, 1.0));
      
      // Luminous caustic light filaments - protected by filamentMask in text center
      waveColor += ridge1 * 0.65 * moltenGold * filamentMask;
      waveColor += ridge2 * 0.85 * hotCrest * filamentMask;

      // Chromatic dispersion
      waveColor.r += (fR - fG) * 0.35 * filamentMask;
      waveColor.b += (fB - fG) * 0.20 * filamentMask;

      float waveIntensity = clamp(f * 0.75 + 0.25, 0.0, 1.0);
      float glow = length(q) * 0.5 + length(r) * 0.5;
      
      // Rich ambient presence in dark mode
      float alpha = (waveIntensity * 0.52 + glow * 0.30 + (ridge1 * 0.35 + ridge2 * 0.45) * filamentMask) * vignette * u_opacity;
      alpha = clamp(alpha, 0.0, 0.95);

      vec3 blended = mix(baseBg, waveColor, alpha * 0.82);
      blended += (ridge1 * 0.25 + ridge2 * 0.4) * moltenGold * vignette * filamentMask * u_opacity;
      blended += grain * 0.022;

      finalColor = vec4(blended, alpha);
    }

    gl_FragColor = finalColor;
  }
`;

export default function HeroShader({
  isLight = true,
  className = "",
  opacity = 1.0,
}: HeroShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetMouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hasMovedMouseRef = useRef<boolean>(false);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Request WebGL context with alpha and antialiasing
    const gl =
      canvas.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: false }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      return; // Fallback gracefully if WebGL unsupported
    }

    // Helper: Compile WebGL shader
    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error("Shader compile error:", glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const resLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const mouseLocation = gl.getUniformLocation(program, "u_mouse");
    const isLightLocation = gl.getUniformLocation(program, "u_is_light");
    const opacityLocation = gl.getUniformLocation(program, "u_opacity");

    const updateDimensions = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = parent ? parent.clientHeight : window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    window.addEventListener("resize", updateDimensions);

    const handleMouseMove = (e: MouseEvent) => {
      hasMovedMouseRef.current = true;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      targetMouseRef.current = {
        x: (e.clientX - rect.left) * dpr,
        y: (rect.height - (e.clientY - rect.top)) * dpr,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Initial center position
    mouseRef.current = { x: canvas.width * 0.5, y: canvas.height * 0.5 };
    targetMouseRef.current = { x: canvas.width * 0.5, y: canvas.height * 0.5 };

    const startTime = performance.now();

    const render = (now: number) => {
      const elapsed = (now - startTime) * 0.001;

      // If user hasn't moved mouse yet, gently undulate the magnetic field
      if (!hasMovedMouseRef.current) {
        targetMouseRef.current = {
          x: canvas.width * (0.5 + 0.16 * Math.sin(elapsed * 0.65)),
          y: canvas.height * (0.5 + 0.12 * Math.cos(elapsed * 0.45)),
        };
      }

      // Smooth mouse lerping
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.04;

      gl.useProgram(program);
      gl.uniform2f(resLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, elapsed);
      gl.uniform2f(mouseLocation, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(isLightLocation, isLight ? 1.0 : 0.0);
      gl.uniform1f(opacityLocation, opacity);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, [isLight, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none transition-opacity duration-700 select-none z-0 ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
