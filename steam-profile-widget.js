/**
 * Steam Profile Customization Widget
 * Independent widget for embedding in blogs or websites
 * Usage: <div id="steam-profile-widget" data-steam-id="ANGJustinl"></div>
 */
class SteamProfileWidget {
    constructor(containerId, steamId) {
        this.containerId = containerId;
        this.steamId = steamId || 'ANGJustinl';
        this.proxyUrl = 'https://api.allorigins.win/raw?url=';
        this.steamUrl = `https://steamcommunity.com/id/${this.steamId}`;
        this.init();
    }

    init() {
        this.injectStyles();
        this.initWidget();
    }

    injectStyles() {
        // Check if styles already injected
        if (document.getElementById('steam-profile-widget-styles')) return;

        const style = document.createElement('style');
        style.id = 'steam-profile-widget-styles';
        style.textContent = `
/* Steam Profile Widget Styles */
.steam-profile-widget {
    font-family: "Motiva Sans", "Segoe UI", Arial, sans-serif;
    max-width: 850px;
    margin: 20px auto;
    animation: spw-fadeInUp 0.5s ease-out;
}

.spw-profile-customization {
    background: linear-gradient(145deg, #1e2328 0%, #2a475e 50%, #1b2838 100%);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(102, 192, 244, 0.1);
    border: 1px solid rgba(102, 192, 244, 0.2);
    position: relative;
    transition: transform 0.2s ease;
}

.spw-profile-customization:hover {
    transform: translateY(-2px);
}

.spw-profile-customization-header {
    background: linear-gradient(145deg, #171a21 0%, #1e2328 100%);
    color: #c7d5e0;
    padding: 16px 20px;
    font-size: 14px;
    border-bottom: 2px solid rgba(102, 192, 244, 0.3);
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    font-family: "Consolas", "Monaco", monospace;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: border-bottom-color 0.2s ease;
}

.spw-profile-customization-header:hover {
    border-bottom-color: rgba(102, 192, 244, 0.5);
}

.spw-profile-customization-block {
    padding: 24px;
    background: radial-gradient(ellipse at center, #0e141b 0%, #0a0f14 100%);
}

.spw-customtext-showcase {
    background: linear-gradient(145deg, #0e141b 0%, #161b22 100%);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(102, 192, 244, 0.1);
}

.spw-showcase-content-bg {
    padding: 20px;
    color: #c7d5e0;
    line-height: 1.7;
    font-size: 13px;
    font-family: "Consolas", "Monaco", monospace;
    background: linear-gradient(135deg, transparent 0%, rgba(102, 192, 244, 0.02) 100%);
}

.spw-bb-h1 {
    font-size: 20px;
    font-weight: bold;
    color: #66c0f4;
    margin: 12px 0;
    display: inline;
    text-shadow: 0 0 8px rgba(102, 192, 244, 0.4);
}

.spw-bb-h2 {
    font-size: 17px;
    font-weight: bold;
    color: #beee11;
    margin: 16px 0 12px 0;
    display: inline;
    text-shadow: 0 0 6px rgba(190, 238, 17, 0.4);
}

.spw-bb-link {
    color: #66c0f4;
    text-decoration: none;
    transition: color 0.2s ease;
    position: relative;
    padding: 2px 4px;
    border-radius: 4px;
}

.spw-bb-link:hover {
    color: #ffffff;
    background: rgba(102, 192, 244, 0.1);
    text-decoration: none;
}

.spw-showcase-content-bg b {
    font-family: "Consolas", "Monaco", monospace;
    white-space: pre;
    color: #e8f4f8;
}

.spw-showcase-content-bg hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, #66c0f4, transparent);
    margin: 16px 0;
}

.spw-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background: linear-gradient(145deg, #1b2838 0%, #2a475e 100%);
    color: #66c0f4;
    border-radius: 12px;
    border: 1px solid rgba(102, 192, 244, 0.2);
    position: relative;
    overflow: hidden;
}

.spw-loading::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(102, 192, 244, 0.1), transparent);
    animation: spw-scan 2s linear infinite;
}

.spw-loading::after {
    content: "🔄 Loading Steam Profile...";
    animation: spw-pulse 1.5s infinite;
    z-index: 1;
    position: relative;
    font-size: 16px;
    text-shadow: 0 0 10px rgba(102, 192, 244, 0.5);
}

@media (max-width: 768px) {
    .steam-profile-widget {
        margin: 10px;
    }
    
    .spw-profile-customization {
        border-radius: 8px;
    }
    
    .spw-profile-customization-block {
        padding: 18px;
    }
    
    .spw-showcase-content-bg {
        padding: 16px;
        font-size: 12px;
    }
    
    .spw-profile-customization-header {
        font-size: 12px;
        padding: 12px 16px;
    }
    
    .spw-bb-h1 {
        font-size: 18px;
    }
    
    .spw-bb-h2 {
        font-size: 15px;
    }
}

@keyframes spw-fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes spw-pulse {
    0%, 100% { 
        opacity: 0.7;
    }
    50% { 
        opacity: 1;
    }
}

@keyframes spw-scan {
    0% {
        transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
        transform: translateX(100%) translateY(100%) rotate(45deg);
    }
}

@media (prefers-reduced-motion: reduce) {
    .steam-profile-widget * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
        `;
        document.head.appendChild(style);
    }

    async initWidget() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Steam Profile Widget: Container ${this.containerId} not found`);
            return;
        }

        container.className = 'steam-profile-widget';
        container.innerHTML = '<div class="spw-loading"></div>';

        const customizationContent = await this.fetchCustomization();
        this.renderCustomization(customizationContent, container);
    }

    async fetchCustomization() {
        try {
            const response = await fetch(`${this.proxyUrl}${encodeURIComponent(this.steamUrl)}`);
            const html = await response.text();
            return this.extractCustomization(html);
        } catch (error) {
            console.error('Failed to fetch Steam profile customization:', error);
            return this.getFallbackContent();
        }
    }

    extractCustomization(html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const customEl = doc.querySelector('div[data-panel*="PanelGroup"].profile_customization');
        
        if (customEl) {
            return this.convertToWidgetHTML(customEl.outerHTML);
        }
        
        const fallbackEl = doc.querySelector('.profile_customization');
        return fallbackEl ? this.convertToWidgetHTML(fallbackEl.outerHTML) : this.getFallbackContent();
    }

    convertToWidgetHTML(html) {
        // Convert Steam classes to widget classes to avoid conflicts
        return html
            .replace(/class="profile_customization"/g, 'class="spw-profile-customization"')
            .replace(/class="profile_customization_header/g, 'class="spw-profile-customization-header')
            .replace(/class="profile_customization_block"/g, 'class="spw-profile-customization-block"')
            .replace(/class="customtext_showcase"/g, 'class="spw-customtext-showcase"')
            .replace(/class="showcase_content_bg showcase_notes"/g, 'class="spw-showcase-content-bg"')
            .replace(/class="bb_h1"/g, 'class="spw-bb-h1"')
            .replace(/class="bb_h2"/g, 'class="spw-bb-h2"')
            .replace(/class="bb_link"/g, 'class="spw-bb-link"');
    }

    getFallbackContent() {
        return `<div class="spw-profile-customization">
            <div class="spw-profile-customization-header">
                ☰⠀Steam 社区 :: ANGJustinl⠀⠀⠀⠀⠀    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ─⠀❐⠀✖
            </div>
            <div class="spw-profile-customization-block">
                <div class="spw-customtext-showcase">
                    <div class="spw-showcase-content-bg">
                        🡸 🡺 ⭮ | 🔒 h​ttp​s​:// steamcоmmunity.cоm/id/ANGJustinl/<br> <hr> <br><div class="spw-bb-h1">🔒 User Profile OS v2.3.3 | 兼容性: Steam Level ∞</div><div class="spw-bb-h2">💾 UserData.sys</div> <b><br>╔═════════════════════════════╗<br>║ [OS Alert] 用户类型检测中...                            ║<br>║ ▶ 物种：应该是人类 (♂)                                  ║<br>║ ▶ 运行时长：18 cycles                                    ║<br>║ ▶ 当前任务：大学-材料科学.exe (85% CPU)  ║<br>║ ▶ 隐藏进程：SteamTools_Ultimate                 ║<br>╚═════════════════════════════╝<br><br>[System Notice] <br>核心驱动偏好加载：<br>✔️ 沙盒引擎.dll<br>✔️ 解密算法.bin<br>✔️ 解密演算.sys<br>⚠️ 注意：耐心模块需定期更新<br><br>[Multiplayer Protocol] <br>✅ 被动社交模式已激活<br>🕹️ 兼容性：CO-OP &gt; PvP<br>🔥 推荐运行：派对游戏</b> <br> <hr> <br><div class="spw-bb-h2">🛠️ Hardware Diagnostics</div> <b><br>[CPU-Z Report]<br>┌──────────────┬──────────────────────┐<br>│ 便携终端                     │ 玄派 星耀 R7-8845H                       │<br>│ GPU Renderer           │ RTX 4070TI Super                          │<br>│ Memory                      │ 32GB DDR5 @4400MHz               │<br>└──────────────┴──────────────────────┘<br><br>[Legacy Device]<br>⚠️ Tesla P40 已进入博物馆模式<br>⚡ 电力供应：长城650W (超频警告！)<br>💾 存储矩阵：4TB (AI模型占98%)</b> <br> <hr> <br><div class="spw-bb-h2">📡 Connection Status</div> <a class="spw-bb-link" href="https://steamcommunity.com/id/ANGJustin/#commentthread_Profile_76561198344849298_area" target="_blank" rel="">📨 收件箱 (新消息待处理)</a> <br>📡 正在监听端口：多人游戏信号..
                    </div>
                </div>
            </div>
        </div>`;
    }

    renderCustomization(content, container) {
        container.innerHTML = content;
    }
}

// Auto-initialize widgets
document.addEventListener('DOMContentLoaded', () => {
    // Find all steam profile widget containers
    const widgets = document.querySelectorAll('[id*="steam-profile"], [class*="steam-profile-widget"]');
    
    widgets.forEach(widget => {
        const steamId = widget.getAttribute('data-steam-id') || 'ANGJustinl';
        new SteamProfileWidget(widget.id || widget.className, steamId);
    });
});

// Export for manual initialization
window.SteamProfileWidget = SteamProfileWidget;