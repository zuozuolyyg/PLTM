// 理论力学 - 个性化学习平台 公共脚本

// 兴趣领域数据
const interestsData = [
    { id: "honor", name: "王者荣耀", description: "游戏技能背后的力学原理，英雄移动、技能弹道与物理引擎", icon: "Gamepad2", emoji: "🎮", color: "#f59e0b", gradient: "from-amber-500 to-yellow-600", image: "./images/honor-kings.jpg" },
    { id: "valorant", name: "无畏契约", description: "射击游戏中的弹道力学，后坐力、抛物线与精准计算", icon: "Target", emoji: "🔫", color: "#06b6d4", gradient: "from-cyan-500 to-blue-600", image: "./images/valorant-game.jpg" },
    { id: "anime", name: "二次元世界", description: "柯南、石纪元、三体、少女与战车中的物理知识", icon: "Sparkles", emoji: "✨", color: "#ec4899", gradient: "from-pink-500 to-rose-600", image: "./images/anime-conan.jpg" },
    { id: "movie", name: "电影电视剧", description: "揭秘大片中的物理特效，从爆炸场景到科幻设定的力学原理", icon: "Film", emoji: "🎬", color: "#ef4444", gradient: "from-red-500 to-rose-600", image: "./images/movie-cinema.jpg" },
    { id: "sports", name: "体育运动", description: "解析运动中的力与运动规律，从跳高到游泳的力学分析", icon: "Trophy", emoji: "⚽", color: "#f97316", gradient: "from-orange-500 to-red-600", image: "./images/sports-athletics.jpg" },
    { id: "racing", name: "速度与激情", description: "赛车、超跑与无人驾驶中的速度、加速度与空气动力学", icon: "Car", emoji: "🏎️", color: "#dc2626", gradient: "from-red-600 to-orange-600", image: "./images/racing-speed.jpg" },
    { id: "music", name: "音乐艺术", description: "探索声音与振动的力学奥秘，从乐器到音响的物理原理", icon: "Music", emoji: "🎵", color: "#a855f7", gradient: "from-purple-500 to-violet-600", image: "./images/music-guitar.jpg" },
    { id: "money", name: "赚钱理财", description: "用经济学视角理解力学原理，探索投资中的风险平衡与杠杆效应", icon: "TrendingUp", emoji: "💰", color: "#22c55e", gradient: "from-green-500 to-emerald-600", image: "./images/money-finance.jpg" },
    { id: "tech", name: "科技前沿", description: "航天与工程中的力学应用，火箭发射到自动驾驶", icon: "Rocket", emoji: "🚀", color: "#3b82f6", gradient: "from-blue-500 to-indigo-600", image: "./images/tech-rocket.jpg" },
    { id: "geek", name: "极客制造", description: "手工耿、稚晖君、何同学的创意发明中的力学智慧", icon: "Cpu", emoji: "🔧", color: "#6366f1", gradient: "from-indigo-500 to-purple-600", image: "./images/geek-robot.jpg" }
];

// 课程数据
const coursesData = [
    { id: "intro", name: "第一课：绪论", description: "理论力学的研究对象、范畴与重要性", duration: "约30分钟", order: 1 },
    { id: "statics", name: "第二课：静力学基础", description: "力的平衡、受力分析与力矩计算", duration: "约45分钟", order: 2 },
    { id: "kinematics", name: "第三课：运动学", description: "点的运动、刚体运动与轨迹分析", duration: "约50分钟", order: 3 },
    { id: "dynamics", name: "第四课：动力学", description: "牛顿定律、动量定理与能量守恒", duration: "约55分钟", order: 4 },
    { id: "energy", name: "第五课：能量方法", description: "功与能、动能定理与势能计算", duration: "约40分钟", order: 5 },
    { id: "vibration", name: "第六课：振动基础", description: "简谐振动、阻尼振动与共振现象", duration: "约35分钟", order: 6 }
];

// 初始化Lucide图标
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// 生成导航栏
function generateNavbar(currentPage = '') {
    return `
        <nav class="navbar">
            <div class="navbar-content">
                <a href="./index.html" class="navbar-brand">
                    <span class="gradient-text">理论力学</span>
                </a>
                <ul class="navbar-nav">
                    <li><a href="./index.html" ${currentPage === 'home' ? 'style="color: #00d4ff;"' : ''}>首页</a></li>
                    <li><a href="./interest/money.html" ${currentPage === 'money' ? 'style="color: #00d4ff;"' : ''}>赚钱理财</a></li>
                    <li><a href="./interest/music.html" ${currentPage === 'music' ? 'style="color: #00d4ff;"' : ''}>音乐艺术</a></li>
                    <li><a href="./interest/sports.html" ${currentPage === 'sports' ? 'style="color: #00d4ff;"' : ''}>体育运动</a></li>
                    <li><a href="./interest/movie.html" ${currentPage === 'movie' ? 'style="color: #00d4ff;"' : ''}>电影</a></li>
                    <li><a href="./interest/honor.html" ${currentPage === 'honor' ? 'style="color: #00d4ff;"' : ''}>王者荣耀</a></li>
                </ul>
            </div>
        </nav>
    `;
}

// 生成页脚
function generateFooter() {
    return `
        <footer class="footer">
            <p>理论力学 · 个性化学习平台</p>
            <p style="font-size: 0.8rem; margin-top: 0.5rem;">用兴趣点燃学习热情</p>
        </footer>
    `;
}

// 生成课程卡片
function generateCourseCard(course, interestId) {
    return `
        <div class="course-card">
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <p style="font-size: 0.8rem; color: #00d4ff;">⏱️ ${course.duration}</p>
            <a href="./course/${interestId}/${course.id}.html" class="btn-primary" style="margin-top: 1rem;">
                开始学习
                <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
            </a>
        </div>
    `;
}

// 生成面包屑导航
function generateBreadcrumb(items) {
    let html = '<div style="padding: 1rem 0; color: rgba(255,255,255,0.5);">';
    items.forEach((item, index) => {
        if (index > 0) {
            html += ' <span style="margin: 0 0.5rem;">/</span> ';
        }
        if (item.url) {
            html += `<a href="${item.url}" style="color: #00d4ff; text-decoration: none;">${item.name}</a>`;
        } else {
            html += `<span>${item.name}</span>`;
        }
    });
    html += '</div>';
    return html;
}

// 返回按钮
function generateBackButton(url, text = "返回") {
    return `
        <a href="${url}" class="btn-secondary" style="margin-bottom: 2rem; display: inline-flex;">
            <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
            ${text}
        </a>
    `;
}

// 获取URL参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 重新初始化Lucide图标（对于动态生成的内容）
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
