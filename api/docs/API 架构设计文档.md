# 采购谈判风格测试 API 架构设计文档

**版本:** v1.0  
**日期:** 2026-03-18  
**作者:** CTO Office

---

## 一、API 概览

| API | 端点 | 价格 | 用途 |
|-----|------|------|------|
| 完整版评估 | POST /api/v1/assessment | ¥2/次 | 28 题完整评估 |
| 简化版评估 | POST /api/v1/assessment/quick | ¥1/次 | 12 题快速评估 |
| 团队分析 | POST /api/v1/team/analysis | ¥50/次 | 团队画像分析 |
| 风格匹配 | POST /api/v1/match | ¥0.5/次 | 双方匹配度 |
| 课程推荐 | POST /api/v1/recommend/course | ¥0.2/次 | 个性化课程 |

---

## 二、API 详细规范

### 2.1 POST /api/v1/assessment（完整版评估）

**请求格式:**
```json
{
  "user_id": "string",
  "answers": [
    {
      "question_id": 1,
      "option": "A"
    }
  ],
  "metadata": {
    "industry": "manufacturing",
    "role": "procurement_manager",
    "experience_years": 5
  }
}
```

**响应格式:**
```json
{
  "code": 200,
  "data": {
    "assessment_id": "asm_xxx",
    "style_profile": {
      "primary": "collaborative",
      "secondary": "analytical",
      "scores": {
        "collaborative": 85,
        "competitive": 45,
        "accommodating": 60,
        "avoiding": 30,
        "compromising": 70
      }
    },
    "report_url": "https://...",
    "valid_until": "2026-03-25T00:00:00Z"
  },
  "billing": {
    "amount": 2.00,
    "currency": "CNY",
    "transaction_id": "txn_xxx"
  }
}
```

---

### 2.2 POST /api/v1/assessment/quick（简化版）

**请求格式:**
```json
{
  "user_id": "string",
  "answers": [
    {"question_id": 1, "option": "B"},
    {"question_id": 2, "option": "A"}
  ]
}
```

**响应格式:**
```json
{
  "code": 200,
  "data": {
    "assessment_id": "qsm_xxx",
    "style_profile": {
      "primary": "competitive",
      "confidence": 0.75
    },
    "upgrade_available": true,
    "upgrade_price": 1.00
  },
  "billing": {
    "amount": 1.00,
    "currency": "CNY"
  }
}
```

---

### 2.3 POST /api/v1/team/analysis（团队分析）

**请求格式:**
```json
{
  "team_id": "team_xxx",
  "member_ids": ["user_001", "user_002", "user_003"],
  "analysis_depth": "standard",
  "include_recommendations": true
}
```

**响应格式:**
```json
{
  "code": 200,
  "data": {
    "team_profile": {
      "dominant_style": "collaborative",
      "diversity_score": 0.68,
      "risk_areas": ["conflict_avoidance"],
      "strengths": ["consensus_building"]
    },
    "member_breakdown": [...],
    "recommendations": [...]
  },
  "billing": {
    "amount": 50.00,
    "currency": "CNY"
  }
}
```

---

### 2.4 POST /api/v1/match（风格匹配）

**请求格式:**
```json
{
  "user_a_id": "user_001",
  "user_b_id": "user_002",
  "context": "supplier_negotiation"
}
```

**响应格式:**
```json
{
  "code": 200,
  "data": {
    "match_score": 0.82,
    "compatibility": "high",
    "potential_conflicts": ["pace_mismatch"],
    "synergy_areas": ["problem_solving"],
    "tips": [...]
  },
  "billing": {
    "amount": 0.50,
    "currency": "CNY"
  }
}
```

---

### 2.5 POST /api/v1/recommend/course（课程推荐）

**请求格式:**
```json
{
  "user_id": "user_001",
  "assessment_id": "asm_xxx",
  "learning_goals": ["conflict_management"],
  "budget_range": "medium"
}
```

**响应格式:**
```json
{
  "code": 200,
  "data": {
    "courses": [
      {
        "course_id": "crs_001",
        "title": "谈判冲突管理",
        "relevance_score": 0.95,
        "price": 299,
        "duration_hours": 4
      }
    ],
    "learning_path": [...]
  },
  "billing": {
    "amount": 0.20,
    "currency": "CNY"
  }
}
```

---

## 三、错误码规范

| 错误码 | 含义 | 处理建议 |
|--------|------|----------|
| 200 | 成功 | - |
| 400 | 请求参数错误 | 检查必填字段 |
| 401 | 认证失败 | 检查 API Key |
| 403 | 权限不足/余额不足 | 充值或升级 |
| 404 | 资源不存在 | 检查 ID |
| 429 | 请求超限 | 等待后重试 |
| 500 | 服务器内部错误 | 联系支持 |
| 503 | 服务不可用 | 稍后重试 |

**错误响应格式:**
```json
{
  "code": 400,
  "error": {
    "type": "INVALID_PARAMETER",
    "message": "answers 数组不能为空",
    "field": "answers",
    "request_id": "req_xxx"
  }
}
```

---

## 四、限流策略

| 套餐 | 请求/分钟 | 请求/天 | 并发 |
|------|-----------|---------|------|
| 免费试用 | 10 | 50 | 2 |
| 基础版 | 60 | 1000 | 10 |
| 专业版 | 300 | 10000 | 50 |
| 企业版 | 1000 | 不限 | 200 |

**限流响应头:**
```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1710748800
Retry-After: 60
```

---

## 五、认证方式

### 5.1 API Key 认证（推荐）

**请求头:**
```
Authorization: Bearer sk_live_xxxxxxxxxxxxx
X-API-Version: v1
```

### 5.2 OAuth 2.0（企业集成）

```
授权端点：https://api.negotiation-test.com/oauth/authorize
令牌端点：https://api.negotiation-test.com/oauth/token
```

### 5.3 JWT（会话认证）

```
有效期：2 小时
刷新令牌：7 天
```

---

## 六、幂等性保证

对于计费相关 API，支持幂等性：

**请求头:**
```
Idempotency-Key: unique_request_id
```

**行为:**
- 相同 Key 的请求在 24 小时内返回相同结果
- 不重复扣费
- 不重复创建资源

---

## 七、版本管理

- URL 版本：/api/v1/, /api/v2/
- 弃用周期：新版本发布后 12 个月
- 弃用通知：响应头 `Deprecation: true`, `Sunset: <date>`

---

**文档结束**
