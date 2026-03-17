# 🚀 快速部署指南

## 本地测试（已完成 ✅）

项目已在本地启动，访问地址：**http://localhost:8080**

## 部署方式

### 方式 1：GitHub Pages（推荐，免费）

1. **创建 GitHub 仓库**
   ```bash
   cd /root/.openclaw/workspace/negotiation-test
   git init
   git add .
   git commit -m "🎉 采购谈判风格测试系统 - 初始版本"
   ```

2. **创建 GitHub 仓库并推送**
   - 在 GitHub 创建新仓库（如 `negotiation-style-test`）
   - 执行以下命令：
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/negotiation-style-test.git
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 `main` 分支，`/ (root)` 文件夹
   - 点击 Save
   - 几分钟后访问：`https://YOUR_USERNAME.github.io/negotiation-style-test/`

### 方式 2：Vercel 部署（推荐，免费）

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **部署**
   ```bash
   cd /root/.openclaw/workspace/negotiation-test
   vercel
   ```
   - 按提示登录/注册
   - 其他选项直接回车使用默认值
   - 获得生产环境链接

### 方式 3：Netlify Drop（最简单）

1. 访问 https://app.netlify.com/drop
2. 将 `/root/.openclaw/workspace/negotiation-test` 文件夹拖入页面
3. 获得即时部署链接

### 方式 4：腾讯云 COS（企业级）

1. 登录腾讯云控制台
2. 创建 COS 存储桶
3. 上传所有文件到存储桶
4. 开启静态网站托管
5. 配置自定义域名（可选）

### 方式 5：企业微信/钉钉集成

1. 将项目部署到公司服务器或云平台
2. 在企业微信/钉钉工作台添加"网页应用"
3. 填入部署后的 URL
4. 员工可直接从工作台访问

## 自定义配置

### 修改参与人数

编辑 `index.html`，找到：
```html
<span class="stat-number">10,000+</span>
```
修改为你想要的数字。

### 修改底部版权信息

编辑 `index.html`，找到：
```html
<p>© 2024 采购谈判风格测试 | 优链学堂出品</p>
```
修改为你的机构名称。

### 添加真实二维码

编辑 `js/poster.js`，找到 `drawQRCode` 函数，可以：
1. 使用二维码生成库（如 qrcode.js）
2. 或直接使用在线二维码生成服务
3. 替换为你的测试链接

### 添加数据统计

在 `result.html` 的 `<head>` 中添加统计代码：

**百度统计：**
```html
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?YOUR_TOKEN";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
```

**Google Analytics：**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 性能优化建议

### 1. 启用 Gzip 压缩

**Nginx 配置：**
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
```

### 2. 添加缓存头

**Nginx 配置：**
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 3. 使用 CDN

将静态资源托管到 CDN 加速访问。

## 安全建议

1. **HTTPS**：始终使用 HTTPS 协议
2. **CSP**：添加内容安全策略头
3. **定期备份**：定期备份代码和数据

## 后续迭代建议

### 功能增强
- [ ] 添加用户登录，保存历史测试结果
- [ ] 增加团队对比功能
- [ ] 添加详细的能力提升建议
- [ ] 支持导出 PDF 报告
- [ ] 增加视频解读

### 数据优化
- [ ] 收集真实用户数据，优化风格分布
- [ ] A/B 测试题目顺序
- [ ] 根据行业定制题目

### 体验优化
- [ ] 添加题目解析
- [ ] 增加测试进度提醒
- [ ] 优化海报模板（多套可选）
- [ ] 添加动画过渡效果

## 问题排查

### 页面无法加载
1. 检查服务器是否运行
2. 检查文件路径是否正确
3. 查看浏览器控制台错误

### 结果计算错误
1. 检查 `score.js` 计分逻辑
2. 确认答案保存完整（28 题）
3. 清除浏览器缓存重试

### 海报无法生成
1. 检查浏览器是否支持 Canvas
2. 确认 poster.js 正确加载
3. 查看浏览器控制台错误

## 联系支持

如有问题，请联系开发者。

---

**最后更新**: 2024 年
**版本**: 1.0.0
