# Public Files Guide

Add the following files to your `/public` folder in your project:

## Photos (Required for full display)

Place these image files in `/public/`:

- **profile.jpg** — Hero section circular profile picture (200x200px recommended)
- **about-photo.jpg** — About Me section photo (any size, will scale to 340px height)
- **education-photo.jpg** — Education section photo (any size, will scale to 420px height)
- **extra-photo.jpg** — Extracurriculars section photo (any size, will scale to 420px height)

## Tech Logos (for Technical Skills section)

Place SVG or image files in `/public/logos/`:

- python.svg
- java.svg
- react.svg
- js.svg (JavaScript)
- html.svg
- css.svg
- pytorch.svg
- r.svg
- powerbi.svg

## Company Logos (for Experience section)

Currently using placeholder outlines. Replace with actual company logos by editing the `experiences` array in `app/page.tsx` and pointing the `logo` property to images in `/public/`:

- compass-logo.png (or .svg)
- cremeworkz-logo.png (or .svg)
- alta-logo.png (or .svg)

## File Structure

```
/public
  ├── profile.jpg
  ├── about-photo.jpg
  ├── education-photo.jpg
  ├── extra-photo.jpg
  ├── compass-logo.png
  ├── cremeworkz-logo.png
  ├── alta-logo.png
  └── /logos
      ├── python.svg
      ├── java.svg
      ├── react.svg
      ├── js.svg
      ├── html.svg
      ├── css.svg
      ├── pytorch.svg
      ├── r.svg
      └── powerbi.svg
```

Once you add these files, the 404 warnings will disappear and your site will display fully!
