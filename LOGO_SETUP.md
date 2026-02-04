# Logo Setup Guide

## Company Logos for Experience Section

Your experience section has 3 companies that need logos:

### 1. Compass Group
- **Current placeholder**: 📊 emoji
- **Replace with**: Add image to `/public/compass-logo.png`
- **In code** (`/app/page.tsx` line ~30): Change `logo: '📊'` to `logo: '/compass-logo.png'`

### 2. Cremeworkz Pte Ltd
- **Current placeholder**: 🏭 emoji
- **Replace with**: Add image to `/public/cremeworkz-logo.png`
- **In code**: Change `logo: '🏭'` to `logo: '/cremeworkz-logo.png'`

### 3. Alta Construction Group
- **Current placeholder**: 🏗️ emoji
- **Replace with**: Add image to `/public/alta-logo.png`
- **In code**: Change `logo: '🏗️'` to `logo: '/alta-logo.png'`

## How to add logos:

1. Save company logo images as PNG or JPG to `/public/` folder
2. Update the `experiences` array in `/app/page.tsx` - change the emoji to the image path
3. The modal will automatically display your logo when clicked

## Example code change:

**Before:**
```jsx
{
  id: 0,
  company: 'Compass Group',
  logo: '📊',  // emoji placeholder
  ...
}
```

**After:**
```jsx
{
  id: 0,
  company: 'Compass Group',
  logo: '/compass-logo.png',  // actual image
  ...
}
```

## Image rendering:

You'll also need to update how logos display. In the current code, they show as:
- Square boxes (80x80px)
- Rounded corners (8px)
- Gray background if image doesn't load

The code currently shows emoji, but it can handle images too. Just replace the emoji string with the image path!
