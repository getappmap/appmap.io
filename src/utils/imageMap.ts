/**
 * Image mapping system using ES module imports for production compatibility
 * Maps JSON paths to imported asset URLs that work in both dev and production
 */

// Import all images as ES modules
import appmapLogo from "@/assets/images/appmap-logo.svg";
import userLogos from "@/assets/images/user-logos.svg";

/**
 * Image mapping from JSON paths to imported asset URLs
 * This ensures proper asset handling in both development and production builds
 */
const imageMap: Record<string, string> = {
  // AppMap logos
  "/assets/images/appmap-logo.svg": appmapLogo,
  "/images/appmap-logo.svg": appmapLogo,
  "/assets/img/logos/appmap-logo-color.svg": appmapLogo,
  
  // User/Company logos
  "/assets/img/user-logos.svg": userLogos,
  "/images/user-logos.svg": userLogos,
  "/user-logos.svg": userLogos,
};

/**
 * Resolves image paths from JSON data to actual imported asset URLs
 * @param imagePath - Path from JSON data (e.g., "/assets/images/logo.png")
 * @returns Resolved asset URL that works in both dev and production
 */
export function resolveImagePath(imagePath: string): string {
  // First try exact match in image map
  if (imageMap[imagePath]) {
    return imageMap[imagePath];
  }

  // Try normalized paths (with and without /assets prefix)
  const normalizedPath = imagePath.startsWith("/assets/")
    ? imagePath
    : `/assets${imagePath.startsWith("/") ? imagePath : "/" + imagePath}`;

  if (imageMap[normalizedPath]) {
    return imageMap[normalizedPath];
  }

  // Try legacy path format
  const legacyPath = imagePath.replace("/assets", "");
  if (imageMap[legacyPath]) {
    return imageMap[legacyPath];
  }

  // Fallback: log warning and return original path
  console.warn(`Image not found in image map: ${imagePath}. Available images:`, Object.keys(imageMap));
  return imagePath;
}

/**
 * Get all available image paths for debugging
 */
export function getAvailableImages(): string[] {
  return Object.keys(imageMap);
}

/**
 * Legacy export for compatibility
 */
export const resolveImageUrl = resolveImagePath;
