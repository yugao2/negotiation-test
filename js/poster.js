/**
 * 采购谈判风格测试 - 海报生成
 * 使用 Canvas 绘制分享海报
 */

/**
 * 创建并下载海报
 * @param {Object} styleData - 风格数据
 * @param {Object} resultData - 结果数据
 */
function createPoster(styleData, resultData) {
    const canvas = document.getElementById('posterCanvas');
    const ctx = canvas.getContext('2d');
    
    // 设置画布尺寸（适合手机分享）
    const width = 600;
    const height = 800;
    canvas.width = width;
    canvas.height = height;
    
    // 绘制背景渐变
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // 绘制顶部装饰
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.arc(width - 100, -50, 200, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.arc(-50, 100, 150, 0, Math.PI * 2);
    ctx.fill();
    
    // 标题
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('我的采购谈判风格', width / 2, 60);
    
    // 风格代码（大字）
    ctx.font = 'bold 80px sans-serif';
    const codeGradient = ctx.createLinearGradient(0, 100, width, 100);
    codeGradient.addColorStop(0, '#ffffff');
    codeGradient.addColorStop(1, '#e0e7ff');
    ctx.fillStyle = codeGradient;
    ctx.fillText(styleData.code, width / 2, 150);
    
    // 风格名称
    ctx.font = 'bold 32px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(styleData.name, width / 2, 200);
    
    // 角色定位
    ctx.font = '18px sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText(styleData.role, width / 2, 230);
    
    // 动物标签
    ctx.font = '60px sans-serif';
    ctx.fillText(styleData.animal, width / 2, 300);
    ctx.font = '16px sans-serif';
    ctx.fillText(styleData.animalName, width / 2, 330);
    
    // 关键指标卡片
    const cardY = 380;
    const cardWidth = 240;
    const cardHeight = 100;
    const cardGap = 30;
    
    // 左侧卡片 - 年省潜力
    drawMetricCard(ctx, (width - cardWidth * 2 - cardGap) / 2, cardY, cardWidth, cardHeight, {
        icon: '💰',
        label: '年省潜力',
        value: styleData.savingPotential,
        color: '#10b981'
    });
    
    // 右侧卡片 - 稀有度
    drawMetricCard(ctx, (width - cardWidth * 2 - cardGap) / 2 + cardWidth + cardGap, cardY, cardWidth, cardHeight, {
        icon: '⭐',
        label: '稀有度',
        value: styleData.rarity,
        color: '#f59e0b'
    });
    
    // 雷达图区域
    const radarY = 510;
    const radarSize = 180;
    const radarCenterX = width / 2;
    const radarCenterY = radarY + radarSize / 2;
    const radarRadius = radarSize / 2 - 20;
    
    // 绘制雷达图背景
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.beginPath();
    ctx.arc(radarCenterX, radarCenterY, radarSize / 2, 0, Math.PI * 2);
    ctx.fill();
    
    // 绘制雷达图
    drawRadarOnPoster(ctx, radarCenterX, radarCenterY, radarRadius, resultData);
    
    // 雷达图标题
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#374151';
    ctx.textAlign = 'center';
    ctx.fillText('四维度能力分析', width / 2, radarY - 10);
    
    // 算命维度
    const fortuneY = 710;
    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText('🔮 ' + styleData.fortune.tag, width / 2, fortuneY);
    
    // 底部提示
    ctx.font = '14px sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText('扫码测测你的谈判风格', width / 2, fortuneY + 35);
    
    // 生成二维码（简化版 - 实际项目中应使用二维码库）
    drawQRCode(ctx, width / 2, fortuneY + 55, 80);
    
    // 转换为图片并下载
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `谈判风格-${styleData.code}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        
        // 显示提示
        setTimeout(() => {
            alert('海报已生成并下载！');
        }, 100);
    }, 'image/png');
}

/**
 * 绘制指标卡片
 */
function drawMetricCard(ctx, x, y, width, height, data) {
    // 卡片背景
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, 12);
    ctx.fill();
    
    // 图标
    ctx.font = '28px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(data.icon, x + 15, y + 35);
    
    // 标签
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.fillText(data.label, x + 50, y + 30);
    
    // 数值
    ctx.font = 'bold 20px sans-serif';
    ctx.fillStyle = data.color;
    ctx.fillText(data.value, x + 50, y + 60);
}

/**
 * 在海报上绘制雷达图
 */
function drawRadarOnPoster(ctx, centerX, centerY, radius, resultData) {
    const dimensions = [
        { label: '决策', value: resultData.dimensions.AI.percentage, color: '#4CAF50' },
        { label: '关系', value: resultData.dimensions.RT.percentage, color: '#2196F3' },
        { label: '风险', value: resultData.dimensions.CB.percentage, color: '#FF9800' },
        { label: '沟通', value: resultData.dimensions.DP.percentage, color: '#E91E63' }
    ];
    
    // 绘制背景网格
    for (let i = 1; i <= 3; i++) {
        const gridRadius = (radius / 3) * i;
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
    ctx.fillStyle = 'rgba(99, 102, 241, 0.3)';
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
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    });
}

/**
 * 绘制简化的二维码（示意）
 * 实际项目中应使用二维码生成库如 qrcode.js
 */
function drawQRCode(ctx, x, y, size) {
    // 这是一个简化的二维码示意
    // 实际使用时应集成二维码生成库
    
    const qrSize = size;
    const qrX = x - qrSize / 2;
    const qrY = y - qrSize / 2;
    
    // 白色背景
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(qrX, qrY, qrSize, qrSize);
    
    // 黑色边框
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.strokeRect(qrX, qrY, qrSize, qrSize);
    
    // 三个定位点
    const dotSize = qrSize / 7;
    const positions = [
        { x: qrX + dotSize, y: qrY + dotSize },
        { x: qrX + qrSize - dotSize * 2, y: qrY + dotSize },
        { x: qrX + dotSize, y: qrY + qrSize - dotSize * 2 }
    ];
    
    ctx.fillStyle = '#000000';
    positions.forEach(pos => {
        // 外框
        ctx.fillRect(pos.x, pos.y, dotSize * 2, dotSize * 2);
        // 内白
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(pos.x + dotSize * 0.4, pos.y + dotSize * 0.4, dotSize * 1.2, dotSize * 1.2);
        // 内黑
        ctx.fillStyle = '#000000';
        ctx.fillRect(pos.x + dotSize * 0.7, pos.y + dotSize * 0.7, dotSize * 0.6, dotSize * 0.6);
        ctx.fillStyle = '#000000';
    });
    
    // 中间图案（简化）
    ctx.fillStyle = '#000000';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (Math.random() > 0.5) {
                ctx.fillRect(
                    qrX + qrSize * 0.3 + i * (qrSize * 0.08),
                    qrY + qrSize * 0.3 + j * (qrSize * 0.08),
                    qrSize * 0.06,
                    qrSize * 0.06
                );
            }
        }
    }
    
    // 提示文字
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#666666';
    ctx.textAlign = 'center';
    ctx.fillText('扫码测试', x, y + qrSize / 2 + 12);
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createPoster };
}
