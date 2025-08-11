import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 정적 사이트로 빌드
  trailingSlash: true, // Netlify 호환성
  images: {
    unoptimized: true, // 정적 빌드용
  },
};

export default nextConfig;
