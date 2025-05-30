# Steam Profile Widget

一个独立的Steam个人资料展示组件，可以轻松嵌入到任何网站或博客中。

![image](https://github.com/user-attachments/assets/424d3ec4-9573-4660-adae-8abda77bd4a3)

## 🚀 快速开始

### 基本使用

1. **下载文件**
   - `steam-profile-widget.js` - 主要的widget文件

2. **在HTML中引入**
   ```html
   <!-- 创建容器 -->
   <div id="my-steam-profile" data-steam-id="你的Steam用户名"></div>
   
   <!-- 引入widget脚本 -->
   <script src="steam-profile-widget.js"></script>
   ```

### 高级用法

#### 手动初始化
```javascript
// 手动创建widget实例
const widget = new SteamProfileWidget('container-id', 'steam-username');
```

#### 多个widget
```html
<!-- 可以在同一页面放置多个Steam profile -->
<div id="profile1" data-steam-id="ANGJustinl"></div>
<div id="profile2" data-steam-id="另一个用户名"></div>

<script src="steam-profile-widget.js"></script>
```

## 📋 配置选项

### HTML属性
- `data-steam-id`: Steam用户名或自定义URL ID（必需）
- `id`: 容器的唯一标识符

### 自定义Steam ID
替换 `data-steam-id` 中的值为你的Steam个人资料URL中的ID：
- 如果你的Steam URL是 `https://steamcommunity.com/id/YourUsername/`
- 那么使用 `data-steam-id="YourUsername"`

## 🎨 样式自定义

Widget使用了独立的CSS类名（以`spw-`前缀），不会与你网站的样式冲突。

### 自定义颜色
```css
/* 覆盖默认颜色 */
.spw-profile-customization {
    --primary-color: #your-color;
    --secondary-color: #your-secondary-color;
}
```

### 调整大小
```css
.steam-profile-widget {
    max-width: 600px; /* 自定义宽度 */
    margin: 10px 0;   /* 自定义间距 */
}
```

## 🌐 跨域支持

Widget使用 `allorigins.win` 代理服务来解决跨域问题，无需额外配置。

## 📱 响应式设计

Widget自动适配移动设备，在小屏幕上会调整布局和字体大小。

## ⚡ 性能特性

- **轻量级**: 单文件，无依赖
- **缓存友好**: 自动处理样式注入
- **防冲突**: 使用独立的CSS类名
- **优雅降级**: 网络错误时显示静态内容

## 🔧 故障排除

### 常见问题

1. **Widget不显示**
   - 检查容器ID是否正确
   - 确保Steam用户名存在且公开

2. **样式冲突**
   - Widget使用`spw-`前缀的类名，避免冲突
   - 如有问题，检查CSS优先级

3. **加载缓慢**
   - 这是正常现象，因为需要从Steam获取数据
   - 加载期间会显示动画

## 📝 HTML使用示例

### 简单HTML示例
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steam个人资料组件演示</title>
    <style>
        body {
            font-family: 'Microsoft YaHei', Arial, sans-serif;
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
        <h1>🎮 我的Steam个人资料</h1>
        
        <!-- Steam个人资料组件 -->
        <div id="steam-profile" data-steam-id="ANGJustinl"></div>
        
        <p>查看我在上面的游戏成就！</p>
    </div>
    
    <script src="steam-profile-widget.js"></script>
</body>
</html>
```

**在线演示：**
<div style="font-family: 'Microsoft YaHei', Arial, sans-serif; margin: 20px; background: #1b2838; color: white; padding: 20px; border-radius: 10px;">
    <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
        <h1 style="color: white; margin-bottom: 20px;">🎮 我的Steam个人资料</h1>
        <div id="demo-steam-profile-cn" data-steam-id="ANGJustinl" style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; text-align: center; border: 2px dashed #66c0f4;">
            <p style="margin: 0; color: #66c0f4;">Steam个人资料组件将在这里加载</p>
        </div>
        <p style="margin-top: 15px;">查看我在上面的游戏成就！</p>
    </div>
</div>

### 博客集成示例
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>我的游戏博客</title>
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
        h1, h2 { color: white; }
        p { color: #f0f0f0; }
    </style>
</head>
<body>
    <article>
        <h1>关于我的游戏装备</h1>
        <p>这里是我的Steam个人资料，带有自定义样式：</p>
        
        <div class="gaming-section">
            <h2>🎮 游戏档案</h2>
            <div class="widget-container">
                <!-- 带自定义样式的Steam个人资料组件 -->
                <div id="steam-widget" data-steam-id="你的用户名"></div>
            </div>
        </div>
        
        <p>更多博客内容...</p>
    </article>
    
    <script src="steam-profile-widget.js"></script>
</body>
</html>
```

**在线演示：**
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 15px; margin: 20px 0;">
    <h2 style="color: white; text-align: center; margin-bottom: 20px;">🎮 游戏档案</h2>
    <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; backdrop-filter: blur(10px);">
        <div id="blog-steam-widget-cn" data-steam-id="你的用户名" style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; text-align: center; border: 2px dashed #fff;">
            <p style="margin: 0; color: white;">带自定义样式的Steam个人资料组件</p>
        </div>
    </div>
</div>

### 个人作品集网站
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>开发者作品集</title>
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
            color: white;
        }
        .gaming-card:hover {
            transform: translateY(-5px);
            border-color: #66c0f4;
        }
        .skills-card {
            background: #2a2a2a;
            padding: 25px;
            border-radius: 12px;
            color: white;
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
            <h1>张三 - 全栈开发工程师</h1>
            
            <div class="portfolio-grid">
                <div class="skills-card">
                    <h2>💻 技术技能</h2>
                    <ul>
                        <li>JavaScript, TypeScript</li>
                        <li>React, Vue.js</li>
                        <li>Node.js, Python</li>
                        <li>游戏开发</li>
                    </ul>
                </div>
                
                <div class="gaming-card">
                    <h2>🎮 游戏经历</h2>
                    <p>当我不在编码时，我在游戏！</p>
                    <!-- Steam个人资料组件 -->
                    <div id="my-gaming-profile" data-steam-id="你的用户名"></div>
                </div>
            </div>
        </section>
    </main>

    <script src="steam-profile-widget.js"></script>
</body>
</html>
```

**在线演示：**
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 40px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
    <div style="background: #2a2a2a; padding: 25px; border-radius: 12px; color: white;">
        <h2 style="margin-top: 0;">💻 技术技能</h2>
        <ul style="color: #ccc;">
            <li>JavaScript, TypeScript</li>
            <li>React, Vue.js</li>
            <li>Node.js, Python</li>
            <li>游戏开发</li>
        </ul>
    </div>
    <div style="background: #171a21; border: 2px solid #2a475e; border-radius: 12px; padding: 25px; color: white; transition: transform 0.3s ease;">
        <h2 style="margin-top: 0;">🎮 游戏经历</h2>
        <p>当我不在编码时，我在游戏！</p>
        <div id="portfolio-gaming-profile-cn" data-steam-id="你的用户名" style="background: rgba(102,192,244,0.1); padding: 15px; border-radius: 8px; text-align: center; border: 2px dashed #66c0f4; margin-top: 15px;">
            <p style="margin: 0; color: #66c0f4;">Steam个人资料组件</p>
        </div>
    </div>
</div>

### 游戏商城团队介绍
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>游戏商城 - 认识我们的团队</title>
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
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
    </style>
</head>
<body>
    <section class="team-section">
        <div class="container">
            <h1 style="color: white; text-align: center;">认识我们的游戏专家</h1>
            
            <div class="team-member">
                <div class="member-info">
                    <h3>王小明</h3>
                    <p>首席游戏策展人</p>
                    <p>15年以上游戏经验，专精独立游戏和3A大作。</p>
                </div>
                <div class="steam-profile-section">
                    <!-- 团队成员的Steam个人资料组件 -->
                    <div id="curator-profile" data-steam-id="团队成员用户名"></div>
                </div>
            </div>
            
            <div class="team-member">
                <div class="member-info">
                    <h3>李小红</h3>
                    <p>社区经理</p>
                    <p>构建游戏社区，连接全球玩家。</p>
                </div>
                <div class="steam-profile-section">
                    <!-- 另一个Steam个人资料组件 -->
                    <div id="community-profile" data-steam-id="另一个用户名"></div>
                </div>
            </div>
        </div>
    </section>

    <script src="steam-profile-widget.js"></script>
</body>
</html>
```

**在线演示：**
<div style="padding: 60px 0; background: linear-gradient(45deg, #1e3c72, #2a5298); border-radius: 15px; margin: 20px 0;">
    <h1 style="color: white; text-align: center; margin-bottom: 30px;">认识我们的游戏专家</h1>
    <div style="display: flex; align-items: center; gap: 30px; margin: 40px 20px; padding: 30px; background: rgba(255,255,255,0.05); border-radius: 20px; backdrop-filter: blur(10px);">
        <div style="flex: 1; color: white;">
            <h3 style="margin: 0 0 10px 0;">王小明</h3>
            <p style="margin: 5px 0; color: #ccc;">首席游戏策展人</p>
            <p style="margin: 5px 0; font-size: 14px; color: #aaa;">15年以上游戏经验，专精独立游戏和3A大作。</p>
        </div>
        <div style="flex: 1; min-width: 300px;">
            <div id="curator-profile-demo-cn" data-steam-id="团队成员用户名" style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; text-align: center; border: 2px dashed #fff;">
                <p style="margin: 0; color: white;">团队成员的Steam个人资料组件</p>
            </div>
        </div>
    </div>
</div>

### 游戏评测网站
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>专业玩家游戏评测</title>
    <style>
        body {
            font-family: 'Microsoft YaHei', Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f5f5f5;
        }
        .reviewer-card {
            border: 1px solid #ddd;
            border-radius: 15px;
            padding: 25px;
            margin: 30px 0;
            background: white;
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
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 15px;
        }
        .review-content {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
        }
        .rating {
            font-size: 24px;
        }
    </style>
</head>
<body>
    <main>
        <h1 style="text-align: center;">🎮 专业游戏评测</h1>
        
        <article class="reviewer-card">
            <div class="reviewer-header">
                <div>
                    <h2>评测：《赛博朋克2077》</h2>
                    <p>评测者：<strong>专业玩家2024</strong></p>
                </div>
                <div class="rating">⭐⭐⭐⭐☆</div>
            </div>
            
            <div class="review-content">
                <p>在夜之城度过100多个小时后，这是我的详细评测...</p>
                <p><em>查看我的游戏资历：</em></p>
            </div>
            
            <!-- 评测者的Steam个人资料 -->
            <div id="reviewer-steam" data-steam-id="专业玩家用户名"></div>
        </article>
        
        <article class="reviewer-card">
            <div class="reviewer-header">
                <div>
                    <h2>评测：《艾尔登法环》</h2>
                    <p>评测者：<strong>魂系老兵</strong></p>
                </div>
                <div class="rating">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div class="review-content">
                <p>FromSoftware再次超越了自己...</p>
                <p><em>查看我的魂系游戏通关记录：</em></p>
            </div>
            
            <!-- 另一个评测者的Steam个人资料 -->
            <div id="souls-reviewer" data-steam-id="魂系专家用户名"></div>
        </article>
    </main>

    <script src="steam-profile-widget.js"></script>
</body>
</html>
```

**在线演示：**
<div style="font-family: 'Microsoft YaHei', Arial, sans-serif; margin: 20px 0;">
    <h1 style="text-align: center; margin-bottom: 30px;">🎮 专业游戏评测</h1>
    
    <div style="border: 1px solid #ddd; border-radius: 15px; padding: 25px; margin: 30px 0; background: white; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px;">
            <div>
                <h2 style="margin: 0 0 5px 0;">评测：《赛博朋克2077》</h2>
                <p style="margin: 0; color: #666;">评测者：<strong>专业玩家2024</strong></p>
            </div>
            <div style="font-size: 24px;">⭐⭐⭐⭐☆</div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 15px 0;">
            <p style="margin: 0 0 10px 0;">在夜之城度过100多个小时后，这是我的详细评测...</p>
            <p style="margin: 0; font-style: italic;"><em>查看我的游戏资历：</em></p>
        </div>
        
        <div id="reviewer-steam-demo-cn" data-steam-id="专业玩家用户名" style="background: rgba(102,192,244,0.1); padding: 15px; border-radius: 8px; text-align: center; border: 2px dashed #66c0f4; margin-top: 15px;">
            <p style="margin: 0; color: #66c0f4;">评测者的Steam个人资料组件</p>
        </div>
    </div>
</div>

### 响应式设计示例
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>响应式Steam组件示例</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Microsoft YaHei', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .responsive-container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .profile-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin: 30px 0;
        }
        
        .profile-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .profile-card h3 {
            color: white;
            margin-bottom: 15px;
            text-align: center;
        }
        
        h1 {
            color: white;
            text-align: center;
            margin-bottom: 40px;
        }
        
        /* 移动端优化 */
        @media (max-width: 768px) {
            .profile-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .profile-card {
                padding: 20px;
            }
            
            h1 {
                font-size: 24px;
            }
        }
        
        @media (max-width: 480px) {
            body {
                padding: 10px;
            }
            
            .profile-card {
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="responsive-container">
        <h1>🎮 游戏玩家展示墙</h1>
        
        <div class="profile-grid">
            <div class="profile-card">
                <h3>团队队长</h3>
                <div id="leader-profile" data-steam-id="队长用户名"></div>
            </div>
            
            <div class="profile-card">
                <h3>策略专家</h3>
                <div id="strategist-profile" data-steam-id="策略家用户名"></div>
            </div>
            
            <div class="profile-card">
                <h3>射击高手</h3>
                <div id="shooter-profile" data-steam-id="射击专家用户名"></div>
            </div>
        </div>
    </div>

    <script src="steam-profile-widget.js"></script>
</body>
</html>
```

**在线演示：**
<div style="font-family: 'Microsoft YaHei', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 300px; padding: 20px; border-radius: 15px; margin: 20px 0;">
    <div style="max-width: 1200px; margin: 0 auto;">
        <h1 style="color: white; text-align: center; margin-bottom: 40px;">🎮 游戏玩家展示墙</h1>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin: 30px 0;">
            <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 25px; border: 1px solid rgba(255, 255, 255, 0.2);">
                <h3 style="color: white; margin-bottom: 15px; text-align: center;">团队队长</h3>
                <div id="leader-profile-demo" data-steam-id="队长用户名" style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; text-align: center; border: 2px dashed #fff;">
                    <p style="margin: 0; color: white;">Steam个人资料组件</p>
                </div>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 25px; border: 1px solid rgba(255, 255, 255, 0.2);">
                <h3 style="color: white; margin-bottom: 15px; text-align: center;">策略专家</h3>
                <div id="strategist-profile-demo" data-steam-id="策略家用户名" style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; text-align: center; border: 2px dashed #fff;">
                    <p style="margin: 0; color: white;">Steam个人资料组件</p>
                </div>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 25px; border: 1px solid rgba(255, 255, 255, 0.2);">
                <h3 style="color: white; margin-bottom: 15px; text-align: center;">射击高手</h3>
                <div id="shooter-profile-demo" data-steam-id="射击专家用户名" style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; text-align: center; border: 2px dashed #fff;">
                    <p style="margin: 0; color: white;">Steam个人资料组件</p>
                </div>
            </div>
        </div>
    </div>
</div>

##  文件结构

```
steam-profile-widget/
├── steam-profile-widget.js    # 主要widget文件
├── widget-example.html        # 使用示例
├── README.md                  # 英文说明文档
└── README-CN.md              # 中文说明文档
```

## 🎯 兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ 移动端浏览器

## 📄 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 🔗 相关链接

- [Steam社区](https://steamcommunity.com/)
- [组件演示](widget-example.html)

---

**享受展示你的Steam个人资料！** 🎮
