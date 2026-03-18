// 采购谈判风格测试 2.0 - 28 道场景化题目
// 设计原则：真实采购场景、避免社会期许偏差、高代入感

var questions = [
    // ========== 维度 1: 决策风格 (A/I) - 分析型 vs 直觉型 ==========
    {
        id: 1,
        scene: "核心供应商突然通知涨价 15%，理由是原材料上涨",
        text: "你的第一反应是？",
        options: [
            { label: 'A', text: '要求对方提供成本明细，逐项分析是否合理', score: 'A' },
            { label: 'B', text: '凭经验判断，这个涨幅明显高于市场行情', score: 'I' },
            { label: 'C', text: '先稳住对方，同时联系备选供应商', score: 'C' },
            { label: 'D', text: '直接告诉对方："这个价格我们不可能接受"', score: 'D' }
        ]
    },
    {
        id: 2,
        scene: "选择一个新供应商时",
        text: "以下哪个因素最重要？",
        options: [
            { label: 'A', text: '详细的历史数据和绩效记录', score: 'A' },
            { label: 'B', text: '行业口碑和同行推荐', score: 'I' },
            { label: 'C', text: '对方展现的合作诚意', score: 'R' },
            { label: 'D', text: '价格是否有足够竞争力', score: 'T' }
        ]
    },
    {
        id: 3,
        scene: "谈判前",
        text: "你通常花多少时间准备？",
        options: [
            { label: 'A', text: '至少 3 天，收集所有可能的信息', score: 'A' },
            { label: 'B', text: '1 天左右，把握核心要点即可', score: 'I' },
            { label: 'C', text: '看情况，重要谈判多准备，日常谈判少准备', score: 'C' },
            { label: 'D', text: '很少专门准备，靠临场发挥', score: 'I' }
        ]
    },
    {
        id: 4,
        scene: "当供应商报价超出预算时",
        text: "你首先做什么？",
        options: [
            { label: 'A', text: '分析成本结构，找出可优化的部分', score: 'A' },
            { label: 'B', text: '凭经验判断是否有水分，直接砍价', score: 'I' },
            { label: 'C', text: '询问市场行情，对比其他供应商', score: 'I' },
            { label: 'D', text: '要求对方提供详细的成本 breakdown', score: 'A' }
        ]
    },
    {
        id: 5,
        scene: "做采购决策时",
        text: "你最看重什么？",
        options: [
            { label: 'A', text: '客观数据和事实依据', score: 'A' },
            { label: 'B', text: '整体感觉和大方向正确', score: 'I' },
            { label: 'C', text: '业内专家的意见建议', score: 'I' },
            { label: 'D', text: '系统化的评估结果', score: 'A' }
        ]
    },
    {
        id: 6,
        scene: "当数据与直觉冲突时",
        text: "你更相信哪个？",
        options: [
            { label: 'A', text: '数据，它不会说谎', score: 'A' },
            { label: 'B', text: '直觉，多年经验积累的判断', score: 'I' },
            { label: 'C', text: '综合考量，但直觉权重更大', score: 'I' },
            { label: 'D', text: '重新验证数据，确保准确性', score: 'A' }
        ]
    },
    {
        id: 7,
        scene: "面对复杂的采购项目",
        text: "你会如何处理？",
        options: [
            { label: 'A', text: '分解成多个子项目，逐一分析', score: 'A' },
            { label: 'B', text: '把握核心关键点，其他灵活处理', score: 'I' },
            { label: 'C', text: '找有经验的同事一起讨论', score: 'I' },
            { label: 'D', text: '建立完整的项目管理框架', score: 'A' }
        ]
    },
    
    // ========== 维度 2: 关系导向 (R/T) - 关系型 vs 任务型 ==========
    {
        id: 8,
        scene: "与供应商合作",
        text: "你认为最重要的是什么？",
        options: [
            { label: 'A', text: '建立长期信任的伙伴关系', score: 'R' },
            { label: 'B', text: '确保每次交易都获得最优条件', score: 'T' },
            { label: 'C', text: '保持良好沟通，互利共赢', score: 'R' },
            { label: 'D', text: '严格按合同执行，结果导向', score: 'T' }
        ]
    },
    {
        id: 9,
        scene: "合作 3 年的老供应商这次报价比新供应商高 8%",
        text: "你会怎么做？",
        options: [
            { label: 'A', text: '选择新供应商，价格优先', score: 'T' },
            { label: 'B', text: '和老供应商沟通，看能否降价匹配', score: 'R' },
            { label: 'C', text: '分析老供应商的其他价值（服务、账期等）再决定', score: 'A' },
            { label: 'D', text: '各给 50% 订单，平衡关系', score: 'R' }
        ]
    },
    {
        id: 10,
        scene: "当供应商出现交付问题时",
        text: "你会如何处理？",
        options: [
            { label: 'A', text: '先了解原因，一起想办法解决', score: 'R' },
            { label: 'B', text: '按合同条款追究责任', score: 'T' },
            { label: 'C', text: '考虑长期合作，适度宽容', score: 'R' },
            { label: 'D', text: '评估影响，启动备选方案', score: 'T' }
        ]
    },
    {
        id: 11,
        scene: "选择供应商时",
        text: "关系因素占多大权重？",
        options: [
            { label: 'A', text: '很重要，关系好合作更顺畅', score: 'R' },
            { label: 'B', text: '不重要，只看能力和价格', score: 'T' },
            { label: 'C', text: '比较重要，但非决定因素', score: 'R' },
            { label: 'D', text: '次要因素，业绩才是关键', score: 'T' }
        ]
    },
    {
        id: 12,
        scene: "谈判中",
        text: "你更倾向于哪种方式？",
        options: [
            { label: 'A', text: '营造友好氛围，寻求双赢', score: 'R' },
            { label: 'B', text: '直奔主题，高效解决问题', score: 'T' },
            { label: 'C', text: '先建立关系，再谈业务', score: 'R' },
            { label: 'D', text: '聚焦目标，不被情感影响', score: 'T' }
        ]
    },
    {
        id: 13,
        scene: "对于老供应商",
        text: "你会如何对待？",
        options: [
            { label: 'A', text: '给予一定优先权和信任', score: 'R' },
            { label: 'B', text: '每次都要重新评估竞争力', score: 'T' },
            { label: 'C', text: '维护关系，但保持适度竞争', score: 'R' },
            { label: 'D', text: '用绩效说话，优胜劣汰', score: 'T' }
        ]
    },
    {
        id: 14,
        scene: "与供应商的沟通频率",
        text: "你倾向于？",
        options: [
            { label: 'A', text: '经常沟通，保持紧密联系', score: 'R' },
            { label: 'B', text: '有事说事，不必频繁打扰', score: 'T' },
            { label: 'C', text: '定期沟通，维护关系', score: 'R' },
            { label: 'D', text: '按需要沟通，效率优先', score: 'T' }
        ]
    },
    
    // ========== 维度 3: 风险态度 (C/B) - 谨慎型 vs 冒险型 ==========
    {
        id: 15,
        scene: "面对新的供应商",
        text: "你的态度是？",
        options: [
            { label: 'A', text: '谨慎评估，充分验证后再合作', score: 'C' },
            { label: 'B', text: '大胆尝试，快速建立合作', score: 'B' },
            { label: 'C', text: '小批量试单，逐步扩大', score: 'C' },
            { label: 'D', text: '抓住机会，抢先建立优势', score: 'B' }
        ]
    },
    {
        id: 16,
        scene: "对于创新技术方案",
        text: "你会如何处理？",
        options: [
            { label: 'A', text: '充分验证成熟度后再采用', score: 'C' },
            { label: 'B', text: '积极尝试，抢占先机', score: 'B' },
            { label: 'C', text: '观望一段时间，看市场反馈', score: 'C' },
            { label: 'D', text: '快速试点，迭代优化', score: 'B' }
        ]
    },
    {
        id: 17,
        scene: "谈判中遇到不确定因素",
        text: "你会怎么做？",
        options: [
            { label: 'A', text: '暂停谈判，先搞清楚再说', score: 'C' },
            { label: 'B', text: '边谈边调整，灵活应对', score: 'B' },
            { label: 'C', text: '设置保护条款，降低风险', score: 'C' },
            { label: 'D', text: '相信直觉，果断决策', score: 'B' }
        ]
    },
    {
        id: 18,
        scene: "对于单一供应商依赖",
        text: "你的看法是？",
        options: [
            { label: 'A', text: '风险太大，必须开发备选', score: 'C' },
            { label: 'B', text: '深度绑定，换取更好条件', score: 'B' },
            { label: 'C', text: '保持警惕，逐步降低依赖', score: 'C' },
            { label: 'D', text: '看情况，有时集中更优', score: 'B' }
        ]
    },
    {
        id: 19,
        scene: "市场波动时",
        text: "你的采购策略是？",
        options: [
            { label: 'A', text: '保守观望，等待趋势明朗', score: 'C' },
            { label: 'B', text: '逆势操作，抓住机会', score: 'B' },
            { label: 'C', text: '分批采购，分散风险', score: 'C' },
            { label: 'D', text: '快速决策，灵活调整', score: 'B' }
        ]
    },
    {
        id: 20,
        scene: "签订长期合同时",
        text: "你会如何处理？",
        options: [
            { label: 'A', text: '详细约定各种情况和条款', score: 'C' },
            { label: 'B', text: '把握大框架，细节可调整', score: 'B' },
            { label: 'C', text: '加入退出机制，保留灵活性', score: 'C' },
            { label: 'D', text: '快速签约，抢占资源', score: 'B' }
        ]
    },
    {
        id: 21,
        scene: "面对高风险高回报的项目",
        text: "你会怎么做？",
        options: [
            { label: 'A', text: '谨慎评估，可能放弃', score: 'C' },
            { label: 'B', text: '愿意冒险，博取高回报', score: 'B' },
            { label: 'C', text: '控制投入，限制风险敞口', score: 'C' },
            { label: 'D', text: '快速决策，全力投入', score: 'B' }
        ]
    },
    
    // ========== 维度 4: 沟通方式 (D/P) - 直接型 vs 温和型 ==========
    {
        id: 22,
        scene: "谈判开场",
        text: "你通常会如何开始？",
        options: [
            { label: 'A', text: '直接表明立场和要求', score: 'D' },
            { label: 'B', text: '先寒暄，营造轻松氛围', score: 'P' },
            { label: 'C', text: '简明扼要说明来意', score: 'D' },
            { label: 'D', text: '从共同话题切入，拉近距离', score: 'P' }
        ]
    },
    {
        id: 23,
        scene: "表达不同意见时",
        text: "你会如何表达？",
        options: [
            { label: 'A', text: '直接指出，不绕弯子', score: 'D' },
            { label: 'B', text: '委婉表达，照顾对方感受', score: 'P' },
            { label: 'C', text: '清晰说明，但注意语气', score: 'D' },
            { label: 'D', text: '先肯定，再提出建议', score: 'P' }
        ]
    },
    {
        id: 24,
        scene: "谈判陷入僵局时",
        text: "你会怎么做？",
        options: [
            { label: 'A', text: '直接提出解决方案', score: 'D' },
            { label: 'B', text: '缓和气氛，换个角度沟通', score: 'P' },
            { label: 'C', text: '明确底线，推动决策', score: 'D' },
            { label: 'D', text: '寻找共同点，重建共识', score: 'P' }
        ]
    },
    {
        id: 25,
        scene: "与供应商讨价还价",
        text: "你的风格是？",
        options: [
            { label: 'A', text: '直接给出目标价，不浪费时间', score: 'D' },
            { label: 'B', text: '逐步引导，让对方主动让步', score: 'P' },
            { label: 'C', text: '明确表达期望，坚持立场', score: 'D' },
            { label: 'D', text: '用数据和逻辑说服对方', score: 'P' }
        ]
    },
    {
        id: 26,
        scene: "反馈供应商表现时",
        text: "你会如何沟通？",
        options: [
            { label: 'A', text: '直接指出问题和不足', score: 'D' },
            { label: 'B', text: '先表扬，再提改进建议', score: 'P' },
            { label: 'C', text: '坦诚沟通，对事不对人', score: 'D' },
            { label: 'D', text: '用建设性方式表达', score: 'P' }
        ]
    },
    {
        id: 27,
        scene: "团队内部讨论采购策略",
        text: "你倾向于？",
        options: [
            { label: 'A', text: '直接表达观点，快速决策', score: 'D' },
            { label: 'B', text: '倾听大家意见，协调共识', score: 'P' },
            { label: 'C', text: '明确表达自己的立场', score: 'D' },
            { label: 'D', text: '用影响力说服团队成员', score: 'P' }
        ]
    },
    {
        id: 28,
        scene: "结束谈判时",
        text: "你会如何收尾？",
        options: [
            { label: 'A', text: '明确总结达成的共识和下一步', score: 'D' },
            { label: 'B', text: '感谢对方，保持良好关系', score: 'P' },
            { label: 'C', text: '确认关键条款，避免误解', score: 'D' },
            { label: 'D', text: '表达合作期待，展望未来', score: 'P' }
        ]
    }
];
