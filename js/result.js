/**
 * 采购谈判风格测试 - 结果页逻辑
 */

// 测试结果数据
let resultData = null;
let styleData = null;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    loadResult();
});

/**
 * 加载并显示测试结果
 */
function loadResult() {
    // 获取保存的答案
    const answers = getSavedAnswers();
    
    if (!answers || answers.length !== 28) {
        // 没有答案，跳转回首页
        window.location.href = 'index.html';
        return;
    }
    
    // 计算结果
    resultData = calculateResult(answers);
    styleData = getStyleByCode(resultData.styleCode);
    
    if (!styleData) {
        alert('计算结果出错，请重新测试');
        window.location.href = 'index.html';
        return;
    }
    
    // 显示结果
    displayResult();
    drawRadarChart();
}

/**
 * 显示测试结果
 */
function displayResult() {
    // 风格代码和名称
    document.getElementById('styleCode').textContent = styleData.code;
    document.getElementById('styleName').textContent = styleData.name;
    document.getElementById('styleRole').textContent = styleData.role;
    document.getElementById('styleAnimal').textContent = styleData.animal + ' ' + styleData.animalName;
    
    // 关键指标
    document.getElementById('savingPotential').textContent = styleData.savingPotential;
    document.getElementById('rarity').textContent = styleData.rarity;
    
    // 算命维度
    document.getElementById('fortuneNegotiation').textContent = styleData.fortune.negotiation;
    document.getElementById('fortuneWealth').textContent = styleData.fortune.wealth;
    document.getElementById('fortuneMatch').textContent = styleData.fortune.match;
    document.getElementById('fortuneTag').textContent = styleData.fortune.tag;
    document.getElementById('fortuneAdvice').textContent = styleData.fortune.advice;
    
    // 添加动画效果
    const resultMain = document.querySelector('.result-main');
    resultMain.classList.add('fade-in');
}

/**
 * 绘制雷达图
 */
function drawRadarChart() {
    const canvas = document.getElementById('radarChart');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 40;
    
    // 清空画布
    ctx.clearRect(0, 0, width, height);
    
    // 维度标签和颜色
    const dimensions = [
        { label: '决策风格', value: resultData.dimensions.AI.percentage, color: '#4CAF50' },
        { label: '关系导向', value: resultData.dimensions.RT.percentage, color: '#2196F3' },
        { label: '风险态度', value: resultData.dimensions.CB.percentage, color: '#FF9800' },
        { label: '沟通方式', value: resultData.dimensions.DP.percentage, color: '#E91E63' }
    ];
    
    // 绘制背景网格（5 层）
    for (let i = 1; i <= 5; i++) {
        const gridRadius = (radius / 5) * i;
        ctx.beginPath();
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 1;
        
        for (let j = 0; j < 4; j++) {
            const angle = (Math.PI / 2) * j - Math.PI / 2;
            const x = centerX + Math.cos(angle) * gridRadius;
            const y = centerY + Math.sin(angle) * gridRadius;
            
            if (j === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.stroke();
    }
    
    // 绘制轴线
    dimensions.forEach((dim, index) => {
        const angle = (Math.PI / 2) * index - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.strokeStyle = '#d1d5db';
        ctx.lineWidth = 1;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
    });
    
    // 绘制数据区域
    ctx.beginPath();
    ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2;
    
    dimensions.forEach((dim, index) => {
        const angle = (Math.PI / 2) * index - Math.PI / 2;
        const dataRadius = (dim.value / 100) * radius;
        const x = centerX + Math.cos(angle) * dataRadius;
        const y = centerY + Math.sin(angle) * dataRadius;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // 绘制数据点
    dimensions.forEach((dim, index) => {
        const angle = (Math.PI / 2) * index - Math.PI / 2;
        const dataRadius = (dim.value / 100) * radius;
        const x = centerX + Math.cos(angle) * dataRadius;
        const y = centerY + Math.sin(angle) * dataRadius;
        
        ctx.beginPath();
        ctx.fillStyle = dim.color;
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // 绘制百分比数值
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const labelRadius = dataRadius + 20;
        const labelX = centerX + Math.cos(angle) * labelRadius;
        const labelY = centerY + Math.sin(angle) * labelRadius;
        ctx.fillText(dim.value + '%', labelX, labelY);
    });
    
    // 绘制维度标签
    dimensions.forEach((dim, index) => {
        const angle = (Math.PI / 2) * index - Math.PI / 2;
        const labelRadius = radius + 35;
        const x = centerX + Math.cos(angle) * labelRadius;
        const y = centerY + Math.sin(angle) * labelRadius;
        
        ctx.fillStyle = '#6b7280';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(dim.label, x, y);
    });
}

/**
 * 生成分享海报
 */
function generatePoster() {
    if (!styleData) return;
    
    // 调用 poster.js 的生成函数
    createPoster(styleData, resultData);
}

/**
 * 复制分享文案
 */
function copyResult() {
    if (!styleData) return;
    
    const shareText = `🎯 我的采购谈判风格是【${styleData.code} - ${styleData.name}】
    
🦉 角色：${styleData.role}
💰 年省潜力：${styleData.savingPotential}
⭐ 稀有度：${styleData.rarity}

🔮 谈判运势：${styleData.fortune.negotiation}

快来测测你的谈判风格吧！`;
    
    // 复制到剪贴板
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('分享文案已复制！');
        }).catch(() => {
            fallbackCopy(shareText);
        });
    } else {
        fallbackCopy(shareText);
    }
}

/**
 * 降级复制方案
 */
function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('分享文案已复制！');
}

/**
 * 重新测试
 */
function restartTest() {
    if (confirm('确定要重新测试吗？当前结果将丢失。')) {
        clearSavedAnswers();
        window.location.href = 'index.html';
    }
}
