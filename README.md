# Steam Profile Widget

A standalone Steam profile customization widget that can be easily embedded into any website or blog.

中文文档: [README.md](README-CN.md)


## 🚀 Quick Start

### Basic Usage

1. **Download Files**
   - `steam-profile-widget.js` - Main widget file

2. **Include in HTML**
   ```html
   <!-- Create container -->
   <div id="my-steam-profile" data-steam-id="YourSteamUsername"></div>
   
   <!-- Include widget script -->
   <script src="steam-profile-widget.js"></script>
   ```

### Advanced Usage

#### Manual Initialization
```javascript
// Manually create widget instance
const widget = new SteamProfileWidget('container-id', 'steam-username');
```

#### Multiple Widgets
```html
<!-- You can place multiple Steam profiles on the same page -->
<div id="profile1" data-steam-id="ANGJustinl"></div>
<div id="profile2" data-steam-id="AnotherUsername"></div>

<script src="steam-profile-widget.js"></script>
```

## 📋 Configuration Options

### HTML Attributes
- `data-steam-id`: Steam username or custom URL ID (required)
- `id`: Unique identifier for the container

### Custom Steam ID
Replace the value in `data-steam-id` with your Steam profile URL ID:
- If your Steam URL is `https://steamcommunity.com/id/YourUsername/`
- Then use `data-steam-id="YourUsername"`

## 🎨 Style Customization

The widget uses independent CSS class names (with `spw-` prefix) that won't conflict with your website's styles.

### Custom Colors
```css
/* Override default colors */
.spw-profile-customization {
    --primary-color: #your-color;
    --secondary-color: #your-secondary-color;
}
```

### Adjust Size
```css
.steam-profile-widget {
    max-width: 600px; /* Custom width */
    margin: 10px 0;   /* Custom spacing */
}
```

## 🌐 CORS Support

The widget uses `allorigins.win` proxy service to handle CORS issues without additional configuration.

## 📱 Responsive Design

The widget automatically adapts to mobile devices, adjusting layout and font sizes on smaller screens.

## ⚡ Performance Features

- **Lightweight**: Single file, no dependencies
- **Cache-friendly**: Automatic style injection handling
- **Conflict-free**: Uses isolated CSS class names
- **Graceful degradation**: Shows static content on network errors

## 🔧 Troubleshooting

### Common Issues

1. **Widget doesn't display**
   - Check if container ID is correct
   - Ensure Steam username exists and is public

2. **Style conflicts**
   - Widget uses `spw-` prefixed class names to avoid conflicts
   - If issues persist, check CSS specificity

3. **Slow loading**
   - This is normal as data needs to be fetched from Steam
   - Loading animation is displayed during fetch

## 📦 File Structure

```
steam-profile-widget/
├── steam-profile-widget.js    # Main widget file
├── widget-example.html        # Usage example
├── README.md                  # Chinese documentation
└── README-EN.md              # English documentation
```

## 🎯 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🎮 Features

- **Steam-themed Design**: Authentic Steam blue color scheme
- **Loading Animations**: Cool scanning effect while loading
- **Hover Effects**: Interactive elements with smooth transitions
- **ASCII Art Support**: Proper display of monospace content
- **Customization Content**: Shows Steam profile customization panels
- **Fallback Content**: Static content when Steam data unavailable

## 🛠️ Technical Details

### Architecture
- **Self-contained**: All CSS is injected via JavaScript
- **Event-driven**: Automatic initialization on DOM ready
- **Error handling**: Graceful fallback on network failures
- **Memory efficient**: Minimal DOM manipulation

### Security
- **CORS proxy**: Safe cross-origin requests
- **XSS protection**: Proper HTML sanitization
- **No external dependencies**: Reduces attack surface

## 📝 Examples

### Simple HTML Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steam Profile Widget Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background: #1b2838;
            color: white;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎮 My Steam Profile</h1>
        
        <!-- Steam Profile Widget -->
        <div id="steam-profile" data-steam-id="ANGJustinl"></div>
        
        <p>Check out my gaming achievements above!</p>
    </div>
    
    <script src="steam-profile-widget.js"></script>
</body>
</html>
```

**Live Demo:**
<div style="font-family: Arial, sans-serif; margin: 20px; background: #1b2838; color: white; padding: 20px; border-radius: 10px;">
    <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
        <h1 style="color: white; margin-bottom: 20px;">🎮 My Steam Profile</h1>
        <div id="demo-steam-profile" data-steam-id="ANGJustinl" style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; text-align: center; border: 2px dashed #66c0f4;">
            <p style="margin: 0; color: #66c0f4;">Steam Profile Widget will load here</p>
        </div>
        <p style="margin-top: 15px;">Check out my gaming achievements above!</p>
    </div>
</div>

### Blog Integration
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Gaming Blog</title>
    <style>
        .gaming-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 30px;
            border-radius: 15px;
            margin: 20px 0;
        }
        .widget-container {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
    </style>
</head>
<body>
    <article>
        <h1>About My Gaming Setup</h1>
        <p>Here's my Steam profile with custom styling:</p>
        
        <div class="gaming-section">
            <h2>🎮 Gaming Profile</h2>
            <div class="widget-container">
                <!-- Steam Profile Widget with custom styling -->
                <div id="steam-widget" data-steam-id="YourUsername"></div>
            </div>
        </div>
        
        <p>More blog content...</p>
    </article>
    
    <script src="steam-profile-widget.js"></script>
</body>
</html>
```

**Live Demo:**
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 15px; margin: 20px 0;">
    <h2 style="color: white; text-align: center; margin-bottom: 20px;">🎮 Gaming Blog Section</h2>
    <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; backdrop-filter: blur(10px);">
        <div id="blog-steam-widget" data-steam-id="YourUsername" style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; text-align: center; border: 2px dashed #fff;">
            <p style="margin: 0; color: white;">Steam Profile Widget with Custom Styling</p>
        </div>
    </div>
</div>

### Portfolio Website
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer Portfolio</title>
    <style>
        .portfolio-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 40px 0;
        }
        .gaming-card {
            background: #171a21;
            border: 2px solid #2a475e;
            border-radius: 12px;
            padding: 25px;
            transition: transform 0.3s ease;
        }
        .gaming-card:hover {
            transform: translateY(-5px);
            border-color: #66c0f4;
        }
        @media (max-width: 768px) {
            .portfolio-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <main class="portfolio">
        <section class="about-section">
            <h1>John Doe - Full Stack Developer</h1>
            
            <div class="portfolio-grid">
                <div class="skills-card">
                    <h2>💻 Technical Skills</h2>
                    <ul>
                        <li>JavaScript, TypeScript</li>
                        <li>React, Vue.js</li>
                        <li>Node.js, Python</li>
                        <li>Game Development</li>
                    </ul>
                </div>
                
                <div class="gaming-card">
                    <h2>🎮 Gaming Experience</h2>
                    <p>When I'm not coding, I'm gaming!</p>
                    <!-- Steam Profile Widget -->
                    <div id="my-gaming-profile" data-steam-id="YourUsername"></div>
                </div>
            </div>
        </section>
    </main>

    <script src="steam-profile-widget.js"></script>
</body>
</html>
```

**Live Demo:**
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 40px 0; font-family: Arial, sans-serif;">
    <div style="background: #2a2a2a; padding: 25px; border-radius: 12px; color: white;">
        <h2 style="margin-top: 0;">💻 Technical Skills</h2>
        <ul style="color: #ccc;">
            <li>JavaScript, TypeScript</li>
            <li>React, Vue.js</li>
            <li>Node.js, Python</li>
            <li>Game Development</li>
        </ul>
    </div>
    <div style="background: #171a21; border: 2px solid #2a475e; border-radius: 12px; padding: 25px; color: white; transition: transform 0.3s ease;">
        <h2 style="margin-top: 0;">🎮 Gaming Experience</h2>
        <p>When I'm not coding, I'm gaming!</p>
        <div id="portfolio-gaming-profile" data-steam-id="YourUsername" style="background: rgba(102,192,244,0.1); padding: 15px; border-radius: 8px; text-align: center; border: 2px dashed #66c0f4; margin-top: 15px;">
            <p style="margin: 0; color: #66c0f4;">Steam Profile Widget</p>
        </div>
    </div>
</div>

### E-commerce Gaming Site
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Gaming Store - About Our Team</title>
    <style>
        .team-section {
            padding: 60px 0;
            background: linear-gradient(45deg, #1e3c72, #2a5298);
        }
        .team-member {
            display: flex;
            align-items: center;
            gap: 30px;
            margin: 40px 0;
            padding: 30px;
            background: rgba(255,255,255,0.05);
            border-radius: 20px;
            backdrop-filter: blur(10px);
        }
        .member-info {
            flex: 1;
            color: white;
        }
        .steam-profile-section {
            flex: 1;
            min-width: 300px;
        }
    </style>
</head>
<body>
    <section class="team-section">
        <div class="container">
            <h1>Meet Our Gaming Experts</h1>
            
            <div class="team-member">
                <div class="member-info">
                    <h3>Alex Johnson</h3>
                    <p>Lead Game Curator</p>
                    <p>15+ years of gaming experience, specializing in indie games and AAA titles.</p>
                </div>
                <div class="steam-profile-section">
                    <!-- Steam Profile Widget for team member -->
                    <div id="curator-profile" data-steam-id="TeamMemberUsername"></div>
                </div>
            </div>
            
            <div class="team-member">
                <div class="member-info">
                    <h3>Sarah Chen</h3>
                    <p>Community Manager</p>
                    <p>Building gaming communities and connecting players worldwide.</p>
                </div>
                <div class="steam-profile-section">
                    <!-- Another Steam Profile Widget -->
                    <div id="community-profile" data-steam-id="AnotherUsername"></div>
                </div>
            </div>
        </div>
    </section>

    <script src="steam-profile-widget.js"></script>
</body>
</html>
```

**Live Demo:**
<div style="padding: 60px 0; background: linear-gradient(45deg, #1e3c72, #2a5298); border-radius: 15px; margin: 20px 0;">
    <h1 style="color: white; text-align: center; margin-bottom: 30px;">Meet Our Gaming Experts</h1>
    <div style="display: flex; align-items: center; gap: 30px; margin: 40px 20px; padding: 30px; background: rgba(255,255,255,0.05); border-radius: 20px; backdrop-filter: blur(10px);">
        <div style="flex: 1; color: white;">
            <h3 style="margin: 0 0 10px 0;">Alex Johnson</h3>
            <p style="margin: 5px 0; color: #ccc;">Lead Game Curator</p>
            <p style="margin: 5px 0; font-size: 14px; color: #aaa;">15+ years of gaming experience, specializing in indie games and AAA titles.</p>
        </div>
        <div style="flex: 1; min-width: 300px;">
            <div id="curator-profile-demo" data-steam-id="TeamMemberUsername" style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; text-align: center; border: 2px dashed #fff;">
                <p style="margin: 0; color: white;">Steam Profile Widget for Team Member</p>
            </div>
        </div>
    </div>
</div>

### Gaming Review Site
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Game Reviews by Pro Gamers</title>
    <style>
        .reviewer-card {
            border: 1px solid #ddd;
            border-radius: 15px;
            padding: 25px;
            margin: 30px 0;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }
        .reviewer-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(0,0,0,0.15);
        }
        .reviewer-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        .review-content {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <main>
        <h1>🎮 Professional Game Reviews</h1>
        
        <article class="reviewer-card">
            <div class="reviewer-header">
                <div>
                    <h2>Review: Cyberpunk 2077</h2>
                    <p>Reviewed by <strong>ProGamer2024</strong></p>
                </div>
                <div class="rating">⭐⭐⭐⭐☆</div>
            </div>
            
            <div class="review-content">
                <p>After 100+ hours in Night City, here's my detailed review...</p>
                <p><em>See my gaming credentials below:</em></p>
            </div>
            
            <!-- Reviewer's Steam Profile -->
            <div id="reviewer-steam" data-steam-id="ProGamerUsername"></div>
        </article>
        
        <article class="reviewer-card">
            <div class="reviewer-header">
                <div>
                    <h2>Review: Elden Ring</h2>
                    <p>Reviewed by <strong>SoulsVeteran</strong></p>
                </div>
                <div class="rating">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div class="review-content">
                <p>FromSoftware has outdone themselves once again...</p>
                <p><em>Check my Souls game completion record:</em></p>
            </div>
            
            <!-- Another reviewer's Steam Profile -->
            <div id="souls-reviewer" data-steam-id="SoulsExpertUsername"></div>
        </article>
    </main>

    <script src="steam-profile-widget.js"></script>
</body>
</html>
```

**Live Demo:**

<div style="font-family: Arial, sans-serif; margin: 20px 0;">
<h1 style="text-align: center; margin-bottom: 30px;">🎮 Professional Game Reviews</h1>
    
<div style="border: 1px solid #ddd; border-radius: 15px; padding: 25px; margin: 30px 0; background: white; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px;">
<div>
<h2 style="margin: 0 0 5px 0;">Review: Cyberpunk 2077</h2>
<p style="margin: 0; color: #666;">Reviewed by <strong>ProGamer2024</strong></p>
</div>
<div style="font-size: 24px;">⭐⭐⭐⭐☆</div>
</div>
        
<div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 15px 0;">
<p style="margin: 0 0 10px 0;">After 100+ hours in Night City, here's my detailed review...</p>
<p style="margin: 0; font-style: italic;"><em>See my gaming credentials below:</em></p>
</div>
        
<div id="reviewer-steam-demo" data-steam-id="ProGamerUsername" style="background: rgba(102,192,244,0.1); padding: 15px; border-radius: 8px; text-align: center; border: 2px dashed #66c0f4; margin-top: 15px;">
<p style="margin: 0; color: #66c0f4;">Reviewer's Steam Profile Widget</p>
</div>
</div>
</div>

## 📄 License

MIT License - Free to use and modify

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 🔗 Links

- [Steam Community](https://steamcommunity.com/)
- [Widget Demo](widget-example.html)

---

**Enjoy showcasing your Steam profile!** 🎮
