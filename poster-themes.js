// 海报配色主题 - 16 种风格，16 种独特配色
// 让每种风格的海报都有符合气质的视觉设计

var posterThemes = {
    // === R 系（关系型）===
    ARCD: {
        name: '战略架构师',
        gradient: ['linear-gradient(135deg, #1e3c72, #2a5298)', 'linear-gradient(135deg, #f093fb, #f5576c)'],
        primary: '#1e3c72',
        secondary: '#FFD700',
        accent: '#ffffff',
        style: '睿智、高端、可信赖'
    },
    ARCP: {
        name: '关系建筑师',
        gradient: ['linear-gradient(135deg, #FF9966, #FF5E62)', 'linear-gradient(135deg, #ffecd2, #fcb69f)'],
        primary: '#FF9966',
        secondary: '#FFB6C1',
        accent: '#ffffff',
        style: '温暖、亲和、治愈'
    },
    ARBD: {
        name: '远见守护者',
        gradient: ['linear-gradient(135deg, #667eea, #764ba2)', 'linear-gradient(135deg, #e0c3fc, #8ec5fc)'],
        primary: '#667eea',
        secondary: '#C0C0C0',
        accent: '#ffffff',
        style: '神秘、远见、深邃'
    },
    ARBP: {
        name: '和谐维系者',
        gradient: ['linear-gradient(135deg, #56ab2f, #a8e063)', 'linear-gradient(135deg, #d4fc79, #96e6a1)'],
        primary: '#56ab2f',
        secondary: '#40E0D0',
        accent: '#ffffff',
        style: '温和、生长、治愈'
    },
    
    // === T 系（任务型）===
    ATCD: {
        name: '流程工程师',
        gradient: ['linear-gradient(135deg, #434343, #2c3e50)', 'linear-gradient(135deg, #bdc3c7, #2c3e50)'],
        primary: '#434343',
        secondary: '#4682B4',
        accent: '#ffffff',
        style: '严谨、专业、可靠'
    },
    ATCP: {
        name: '数据分析师',
        gradient: ['linear-gradient(135deg, #141E30, #243B55)', 'linear-gradient(135deg, #e0eafc, #cfdef3)'],
        primary: '#141E30',
        secondary: '#ffffff',
        accent: '#00d2ff',
        style: '精确、清晰、理性'
    },
    ATBD: {
        name: '目标执行者',
        gradient: ['linear-gradient(135deg, #cb2d3e, #ef473a)', 'linear-gradient(135deg, #000000, #434343)'],
        primary: '#cb2d3e',
        secondary: '#000000',
        accent: '#ffffff',
        style: '强势、果断、力量'
    },
    ATBP: {
        name: '协作推进者',
        gradient: ['linear-gradient(135deg, #FF8008, #FFC837)', 'linear-gradient(135deg, #808080, #4a4a4a)'],
        primary: '#FF8008',
        secondary: '#808080',
        accent: '#ffffff',
        style: '可靠、务实、温暖'
    },
    
    // === I 系（直觉型）===
    IRCD: {
        name: '颠覆创新者',
        gradient: ['linear-gradient(135deg, #11998e, #38ef7d)', 'linear-gradient(135deg, #FFD700, #FFA500)'],
        primary: '#11998e',
        secondary: '#FFD700',
        accent: '#ffffff',
        style: '创新、突破、颠覆'
    },
    IRCP: {
        name: '魅力连接者',
        gradient: ['linear-gradient(135deg, #ee9ca7, #ffdde1)', 'linear-gradient(135deg, #667eea, #764ba2)'],
        primary: '#ee9ca7',
        secondary: '#9370DB',
        accent: '#ffffff',
        style: '魅力、连接、优雅'
    },
    IRBD: {
        name: '战略冒险家',
        gradient: ['linear-gradient(135deg, #FFD700, #FF8C00)', 'linear-gradient(135deg, #cb2d3e, #ef473a)'],
        primary: '#FFD700',
        secondary: '#cb2d3e',
        accent: '#000000',
        style: '冒险、激情、远见'
    },
    IRBP: {
        name: '愿景影响者',
        gradient: ['linear-gradient(135deg, #667eea, #764ba2)', 'linear-gradient(135deg, #f093fb, #f5576c)', 'linear-gradient(135deg, #4facfe, #00f2fe)'],
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#ffffff',
        style: '影响、多元、魅力'
    },
    
    // === IT 系（直觉 + 任务）===
    ITCD: {
        name: '趋势洞察者',
        gradient: ['linear-gradient(135deg, #0f2027, #203a43)', 'linear-gradient(135deg, #C0C0C0, #808080)'],
        primary: '#0f2027',
        secondary: '#C0C0C0',
        accent: '#00d2ff',
        style: '洞察、深度、睿智'
    },
    ITCP: {
        name: '敏捷应对者',
        gradient: ['linear-gradient(135deg, #4facfe, #00f2fe)', 'linear-gradient(135deg, #43e97b, #38f9d7)'],
        primary: '#4facfe',
        secondary: '#43e97b',
        accent: '#ffffff',
        style: '灵活、适应、活力'
    },
    ITBD: {
        name: '直觉开创者',
        gradient: ['linear-gradient(135deg, #FF8008, #FFC837)', 'linear-gradient(135deg, #fa709a, #fee140)'],
        primary: '#FF8008',
        secondary: '#FFC837',
        accent: '#ffffff',
        style: '行动、活力、热情'
    },
    ITBP: {
        name: '智慧平衡者',
        gradient: ['linear-gradient(135deg, #4facfe, #43e97b)', 'linear-gradient(135deg, #a8edea, #fed6e3)'],
        primary: '#4facfe',
        secondary: '#43e97b',
        accent: '#ffffff',
        style: '平衡、和谐、智慧'
    }
};

// 获取风格配色方案
function getPosterTheme(code) {
    return posterThemes[code] || posterThemes.ARCD;
}

// 获取渐变背景（随机选一个）
function getGradientBackground(code) {
    var theme = getPosterTheme(code);
    var gradients = theme.gradient;
    var index = Math.floor(Math.random() * gradients.length);
    return gradients[index];
}
