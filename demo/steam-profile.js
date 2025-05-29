class SteamProfileCustomization {
    constructor(steamId) {
        this.steamId = steamId;
        this.proxyUrl = 'https://api.allorigins.win/raw?url=';
        this.steamUrl = `https://steamcommunity.com/id/${steamId}`;
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
        
        // Extract the specific profile_customization div with data-panel attribute
        const customEl = doc.querySelector('div[data-panel*="PanelGroup"].profile_customization');
        
        if (customEl) {
            return customEl.outerHTML;
        }
        
        // Fallback to any profile_customization div
        const fallbackEl = doc.querySelector('.profile_customization');
        return fallbackEl ? fallbackEl.outerHTML : this.getFallbackContent();
    }

    getFallbackContent() {
        // Return the specific profile customization content provided by user
        return `<div data-panel="{&quot;type&quot;:&quot;PanelGroup&quot;}" class="profile_customization">
            <div class="profile_customization_header ellipsis">
                ☰⠀Steam 社区 :: ANGJustinl⠀⠀⠀⠀⠀    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ─⠀❐⠀✖
            </div>
            <div class="profile_customization_block">
                <div class="customtext_showcase">
                    <div class="showcase_content_bg showcase_notes">
                        🡸 🡺 ⭮ | 🔒 h​ttp​s​:// steamcоmmunity.cоm/id/ANGJustinl/<br> <hr> <br><div class="bb_h1">🔒 User Profile OS v2.3.3 | 兼容性: Steam Level ∞</div><div class="bb_h2">💾 UserData.sys</div> <b><br>╔═════════════════════════════╗<br>║ [OS Alert] 用户类型检测中...                            ║<br>║ ▶ 物种：应该是人类 (♂)                                  ║<br>║ ▶ 运行时长：18 cycles                                    ║<br>║ ▶ 当前任务：大学-材料科学.exe (85% CPU)  ║<br>║ ▶ 隐藏进程：SteamTools_Ultimate                 ║<br>╚═════════════════════════════╝<br><br>[System Notice] <br>核心驱动偏好加载：<br>✔️ 沙盒引擎.dll<br>✔️ 解密算法.bin<br>✔️ 解密演算.sys<br>⚠️ 注意：耐心模块需定期更新<br><br>[Multiplayer Protocol] <br>✅ 被动社交模式已激活<br>🕹️ 兼容性：CO-OP &gt; PvP<br>🔥 推荐运行：派对游戏</b> <br> <hr> <br><div class="bb_h2">🛠️ Hardware Diagnostics</div> <b><br>[CPU-Z Report]<br>┌──────────────┬──────────────────────┐<br>│ 便携终端                     │ 玄派 星耀 R7-8845H                       │<br>│ GPU Renderer           │ RTX 4070TI Super                          │<br>│ Memory                      │ 32GB DDR5 @4400MHz               │<br>└──────────────┴──────────────────────┘<br><br>[Legacy Device]<br>⚠️ Tesla P40 已进入博物馆模式<br>⚡ 电力供应：长城650W (超频警告！)<br>💾 存储矩阵：4TB (AI模型占98%)</b> <br> <hr> <br><div class="bb_h2">📡 Connection Status</div> <a class="bb_link" href="https://steamcommunity.com/id/ANGJustin/#commentthread_Profile_76561198344849298_area" target="_blank" rel="">📨 收件箱 (新消息待处理)</a> <br>📡 正在监听端口：多人游戏信号..
                    </div>
                </div>
            </div>
        </div>`;
    }

    renderCustomization(content, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = content;
        container.classList.remove('steam-profile-loading');
    }
}

// Initialize and fetch Steam profile customization
document.addEventListener('DOMContentLoaded', async () => {
    const steamProfile = new SteamProfileCustomization('ANGJustinl');
    const customizationContent = await steamProfile.fetchCustomization();
    
    steamProfile.renderCustomization(customizationContent, 'steam-profile-container');
});