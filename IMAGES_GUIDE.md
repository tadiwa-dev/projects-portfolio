# 📸 Images Guide for Portfolio

This guide explains where to place your images in the portfolio project.

## 📁 Directory Structure

```
portfolio/
├── public/
│   └── images/
│       ├── profile/           # Profile and personal images
│       └── projects/          # Project screenshots and visuals
```

## 🖼️ Image Placement Guide

### 1. Profile Images (`/public/images/profile/`)

#### Required Images:
- **`tadiwa-matewe.jpg`** - Your professional headshot
  - **Recommended size:** 400x400px or larger (square aspect ratio)
  - **Format:** JPG or PNG
  - **Usage:** Hero section profile photo
  - **Fallback:** If image not found, displays "TM" initials

### 2. Project Images (`/public/images/projects/`)

#### Required Images:
- **`development-dollar-app.jpg`** - Development Dollar App screenshots
  - **Recommended size:** 800x600px or larger
  - **Format:** JPG or PNG
  - **Usage:** Project card and modal display
  - **Content:** App screenshots, UI mockups, or app store preview

- **`youth-ticketing-system.jpg`** - Youth Big Sabbath Ticketing System
  - **Recommended size:** 800x600px or larger
  - **Format:** JPG or PNG
  - **Usage:** Project card and modal display
  - **Content:** QR code examples, system interface, event photos

- **`ai-chatbot.jpg`** - AI Chatbot prototype
  - **Recommended size:** 800x600px or larger
  - **Format:** JPG or PNG
  - **Usage:** Project card and modal display
  - **Content:** Chatbot interface, conversation examples, PWA screenshots

## 🎨 Image Recommendations

### Profile Photo:
- Professional headshot with good lighting
- Clean background (solid color or blurred)
- Smiling and approachable
- High resolution for crisp display

### Project Images:
- Screenshots of your applications
- UI/UX mockups or wireframes
- Demo videos converted to GIFs (optional)
- Before/after comparisons
- User interface highlights

## 📱 Responsive Considerations

All images are automatically optimized for:
- **Desktop:** Full resolution display
- **Tablet:** Scaled appropriately
- **Mobile:** Optimized for smaller screens

## 🔧 How to Add Images

1. **Navigate to the images directory:**
   ```bash
   cd public/images/profile
   # or
   cd public/images/projects
   ```

2. **Add your images with the exact filenames:**
   - Profile: `tadiwa-matewe.jpg`
   - Projects: `development-dollar-app.jpg`, `youth-ticketing-system.jpg`, `ai-chatbot.jpg`

3. **Test locally:**
   ```bash
   npm start
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🚨 Important Notes

- **File names must match exactly** as specified above
- **Use JPG or PNG formats** for best compatibility
- **Optimize images** for web (compress if needed)
- **Keep file sizes reasonable** (< 2MB per image)
- **Test on different devices** to ensure proper display

## 🎯 Image Sources

You can get images from:
- **Your own screenshots** (best option)
- **App store screenshots** (for published apps)
- **Design mockups** (Figma, Adobe XD exports)
- **Professional photos** (for profile picture)
- **Stock photos** (as placeholders, but replace with real project images)

## 📋 Checklist

- [ ] Profile photo added (`tadiwa-matewe.jpg`)
- [ ] Development Dollar App image added
- [ ] Youth Ticketing System image added
- [ ] AI Chatbot image added
- [ ] All images display correctly in browser
- [ ] Images look good on mobile devices
- [ ] File sizes are optimized for web

## 🆘 Troubleshooting

**Image not displaying?**
- Check file name matches exactly
- Ensure file is in correct directory
- Verify file format (JPG/PNG)
- Check browser console for errors

**Image looks blurry?**
- Use higher resolution source image
- Ensure image is at least 800px wide for projects
- Use 400x400px minimum for profile photo

**Page loads slowly?**
- Compress images using tools like TinyPNG
- Consider using WebP format for better compression
- Optimize image dimensions to match display size

---

**Need help?** Check the main README.md or create an issue in the repository.
