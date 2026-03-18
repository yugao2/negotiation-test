# 采购谈判风格测试 API 项目

**创建日期:** 2026-03-18  
**版本:** v1.0  
**状态:** 设计完成

---

## 项目概述

本项目将采购谈判风格测试系统 API 化，提供 5 个核心 API 服务，支持商业化运营。

### 核心 API

| API | 端点 | 价格 | 说明 |
|-----|------|------|------|
| 完整版评估 | POST /api/v1/assessment | ¥2/次 | 28 题完整评估 |
| 简化版评估 | POST /api/v1/assessment/quick | ¥1/次 | 12 题快速评估 |
| 团队分析 | POST /api/v1/team/analysis | ¥50/次 | 团队画像分析 |
| 风格匹配 | POST /api/v1/match | ¥0.5/次 | 双方匹配度 |
| 课程推荐 | POST /api/v1/recommend/course | ¥0.2/次 | 个性化课程 |

---

## 文档目录

```
api/
├── README.md                    # 本文件
├── 技术架构白皮书.md             # 总体架构设计
├── docs/
│   ├── API 架构设计文档.md       # API 详细规范
│   ├── 技术栈选型报告.md         # 技术选型对比
│   └── 开发时间表.md            # 2 周 MVP 计划
├── security/
│   └── 安全合规清单.md          # 等保三级/GDPR
└── specs/                       # OpenAPI 规范（待补充）
```

---

## 快速导航

- 📋 [API 设计规范](./docs/API 架构设计文档.md) - 请求/响应格式、错误码、限流
- 🛠️ [技术栈选型](./docs/技术栈选型报告.md) - Kong + PostgreSQL + Redis
- 📅 [开发计划](./docs/开发时间表.md) - 2 周 MVP 时间表
- 🔒 [安全合规](./security/安全合规清单.md) - 等保三级、GDPR
- 📖 [架构白皮书](./技术架构白皮书.md) - 完整技术架构

---

## 技术栈总览

```
API 网关：Kong
应用框架：Node.js (NestJS)
数据库：PostgreSQL 15
缓存：Redis 7
部署：Docker + Kubernetes
云厂商：阿里云
```

---

## 关键指标

| 指标 | 目标 |
|------|------|
| API 可用性 | 99.9% |
| 响应时间 (P95) | < 500ms |
| 并发能力 | 1000+ QPS |
| 数据安全 | 等保三级、GDPR |
| 初期成本 | ¥1,800/月 |

---

## 下一步行动

1. ✅ 完成架构设计文档
2. ⏳ 项目初始化（Day 1-2）
3. ⏳ 评估引擎开发（Day 3-4）
4. ⏳ API 开发（Day 5-9）
5. ⏳ 测试与上线（Day 10-14）

---

## 联系方式

**技术负责人:** CTO Office  
**安全事件:** security@negotiation-test.com  
**数据保护:** dpo@negotiation-test.com

---

**最后更新:** 2026-03-18
