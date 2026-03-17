/**
 * 采购谈判风格测试 - 28 道测试题目
 * 
 * 维度分布：
 * - 题 1-7：维度 1（决策风格 A/I）- A=分析型，I=直觉型
 * - 题 8-14：维度 2（关系导向 R/T）- R=关系型，T=任务型
 * - 题 15-21：维度 3（风险态度 C/B）- C=谨慎型，B=大胆型
 * - 题 22-28：维度 4（沟通方式 D/P）- D=直接型，P=说服型
 */

const questions = [
    // 维度 1：决策风格（A/I）- 题 1-7
    {
        id: 1,
        dimension: 'AI',
        text: '在供应商选择时，你更倾向于：',
        options: [
            { label: 'A', text: '详细分析所有数据，对比多家供应商的优劣势', score: 'A' },
            { label: 'B', text: '相信自己的行业经验和直觉判断', score: 'I' },
            { label: 'C', text: '参考同行推荐和口碑评价', score: 'I' },
            { label: 'D', text: '建立评估模型，量化各项指标后决策', score: 'A' }
        ]
    },
    {
        id: 2,
        dimension: 'AI',
        text: '面对新的采购品类，你会：',
        options: [
            { label: 'A', text: '先做充分的市场调研和技术分析', score: 'A' },
            { label: 'B', text: '快速尝试，在实践中学习和调整', score: 'I' },
            { label: 'C', text: '找专家咨询，听取专业意见', score: 'I' },
            { label: 'D', text: '制定详细的评估标准和流程', score: 'A' }
        ]
    },
    {
        id: 3,
        dimension: 'AI',
        text: '谈判前准备，你通常会：',
        options: [
            { label: 'A', text: '收集大量数据，做详尽的准备工作', score: 'A' },
            { label: 'B', text: '把握大方向，细节随机应变', score: 'I' },
            { label: 'C', text: '依靠过往经验，快速制定策略', score: 'I' },
            { label: 'D', text: '列出所有可能的情况和应对方案', score: 'A' }
        ]
    },
    {
        id: 4,
        dimension: 'AI',
        text: '当供应商报价超出预算时，你首先：',
        options: [
            { label: 'A', text: '分析成本结构，找出可优化的部分', score: 'A' },
            { label: 'B', text: '凭经验判断是否有水分，直接砍价', score: 'I' },
            { label: 'C', text: '询问市场行情，对比其他供应商', score: 'I' },
            { label: 'D', text: '要求对方提供详细的成本 breakdown', score: 'A' }
        ]
    },
    {
        id: 5,
        dimension: 'AI',
        text: '做采购决策时，你最看重：',
        options: [
            { label: 'A', text: '客观数据和事实依据', score: 'A' },
            { label: 'B', text: '整体感觉和大方向正确', score: 'I' },
            { label: 'C', text: '业内专家的意见建议', score: 'I' },
            { label: 'D', text: '系统化的评估结果', score: 'A' }
        ]
    },
    {
        id: 6,
        dimension: 'AI',
        text: '面对复杂的采购项目，你会：',
        options: [
            { label: 'A', text: '分解成多个子项目，逐一分析', score: 'A' },
            { label: 'B', text: '把握核心关键点，其他灵活处理', score: 'I' },
            { label: 'C', text: '找有经验的同事一起讨论', score: 'I' },
            { label: 'D', text: '建立完整的项目管理框架', score: 'A' }
        ]
    },
    {
        id: 7,
        dimension: 'AI',
        text: '当数据与直觉冲突时，你更相信：',
        options: [
            { label: 'A', text: '数据，它不会说谎', score: 'A' },
            { label: 'B', text: '直觉，多年经验积累的判断', score: 'I' },
            { label: 'C', text: '综合考量，但直觉权重更大', score: 'I' },
            { label: 'D', text: '重新验证数据，确保准确性', score: 'A' }
        ]
    },

    // 维度 2：关系导向（R/T）- 题 8-14
    {
        id: 8,
        dimension: 'RT',
        text: '与供应商合作，你认为最重要的是：',
        options: [
            { label: 'A', text: '建立长期信任的伙伴关系', score: 'R' },
            { label: 'B', text: '确保每次交易都获得最优条件', score: 'T' },
            { label: 'C', text: '保持良好沟通，互利共赢', score: 'R' },
            { label: 'D', text: '严格按合同执行，结果导向', score: 'T' }
        ]
    },
    {
        id: 9,
        dimension: 'RT',
        text: '当供应商出现交付问题时，你会：',
        options: [
            { label: 'A', text: '先了解原因，一起想办法解决', score: 'R' },
            { label: 'B', text: '按合同条款追究责任', score: 'T' },
            { label: 'C', text: '考虑长期合作，适度宽容', score: 'R' },
            { label: 'D', text: '评估影响，启动备选方案', score: 'T' }
        ]
    },
    {
        id: 10,
        dimension: 'RT',
        text: '选择供应商时，关系因素占多大权重：',
        options: [
            { label: 'A', text: '很重要，关系好合作更顺畅', score: 'R' },
            { label: 'B', text: '不重要，只看能力和价格', score: 'T' },
            { label: 'C', text: '比较重要，但非决定因素', score: 'R' },
            { label: 'D', text: '次要因素，业绩才是关键', score: 'T' }
        ]
    },
    {
        id: 11,
        dimension: 'RT',
        text: '谈判中，你更倾向于：',
        options: [
            { label: 'A', text: '营造友好氛围，寻求双赢', score: 'R' },
            { label: 'B', text: '直奔主题，高效解决问题', score: 'T' },
            { label: 'C', text: '先建立关系，再谈业务', score: 'R' },
            { label: 'D', text: '聚焦目标，不被情感影响', score: 'T' }
        ]
    },
    {
        id: 12,
        dimension: 'RT',
        text: '对于老供应商，你会：',
        options: [
            { label: 'A', text: '给予一定优先权和信任', score: 'R' },
            { label: 'B', text: '每次都要重新评估竞争力', score: 'T' },
            { label: 'C', text: '维护关系，但保持适度竞争', score: 'R' },
            { label: 'D', text: '用绩效说话，优胜劣汰', score: 'T' }
        ]
    },
    {
        id: 13,
        dimension: 'RT',
        text: '与供应商的沟通频率，你倾向于：',
        options: [
            { label: 'A', text: '经常沟通，保持紧密联系', score: 'R' },
            { label: 'B', text: '有事说事，不必频繁打扰', score: 'T' },
            { label: 'C', text: '定期沟通，维护关系', score: 'R' },
            { label: 'D', text: '按需要沟通，效率优先', score: 'T' }
        ]
    },
    {
        id: 14,
        dimension: 'RT',
        text: '当价格与关系冲突时，你会：',
        options: [
            { label: 'A', text: '适当让步，维护长期关系', score: 'R' },
            { label: 'B', text: '坚持价格，商业归商业', score: 'T' },
            { label: 'C', text: '寻找平衡点，兼顾双方', score: 'R' },
            { label: 'D', text: '用数据说服对方调整', score: 'T' }
        ]
    },

    // 维度 3：风险态度（C/B）- 题 15-21
    {
        id: 15,
        dimension: 'CB',
        text: '面对新的供应商，你的态度是：',
        options: [
            { label: 'A', text: '谨慎评估，充分验证后再合作', score: 'C' },
            { label: 'B', text: '大胆尝试，快速建立合作', score: 'B' },
            { label: 'C', text: '小批量试单，逐步扩大', score: 'C' },
            { label: 'D', text: '抓住机会，抢先建立优势', score: 'B' }
        ]
    },
    {
        id: 16,
        dimension: 'CB',
        text: '对于创新技术方案，你会：',
        options: [
            { label: 'A', text: '充分验证成熟度后再采用', score: 'C' },
            { label: 'B', text: '积极尝试，抢占先机', score: 'B' },
            { label: 'C', text: '观望一段时间，看市场反馈', score: 'C' },
            { label: 'D', text: '快速试点，迭代优化', score: 'B' }
        ]
    },
    {
        id: 17,
        dimension: 'CB',
        text: '谈判中遇到不确定因素，你会：',
        options: [
            { label: 'A', text: '暂停谈判，先搞清楚再说', score: 'C' },
            { label: 'B', text: '边谈边调整，灵活应对', score: 'B' },
            { label: 'C', text: '设置保护条款，降低风险', score: 'C' },
            { label: 'D', text: '相信直觉，果断决策', score: 'B' }
        ]
    },
    {
        id: 18,
        dimension: 'CB',
        text: '对于单一供应商依赖，你的看法是：',
        options: [
            { label: 'A', text: '风险太大，必须开发备选', score: 'C' },
            { label: 'B', text: '深度绑定，换取更好条件', score: 'B' },
            { label: 'C', text: '保持警惕，逐步降低依赖', score: 'C' },
            { label: 'D', text: '看情况，有时集中更优', score: 'B' }
        ]
    },
    {
        id: 19,
        dimension: 'CB',
        text: '市场波动时，你的采购策略是：',
        options: [
            { label: 'A', text: '保守观望，等待趋势明朗', score: 'C' },
            { label: 'B', text: '逆势操作，抓住机会', score: 'B' },
            { label: 'C', text: '分批采购，分散风险', score: 'C' },
            { label: 'D', text: '快速决策，灵活调整', score: 'B' }
        ]
    },
    {
        id: 20,
        dimension: 'CB',
        text: '签订长期合同时，你会：',
        options: [
            { label: 'A', text: '详细约定各种情况和条款', score: 'C' },
            { label: 'B', text: '把握大框架，细节可调整', score: 'B' },
            { label: 'C', text: '加入退出机制，保留灵活性', score: 'C' },
            { label: 'D', text: '快速签约，抢占资源', score: 'B' }
        ]
    },
    {
        id: 21,
        dimension: 'CB',
        text: '面对高风险高回报的项目，你会：',
        options: [
            { label: 'A', text: '谨慎评估，可能放弃', score: 'C' },
            { label: 'B', text: '愿意冒险，博取高回报', score: 'B' },
            { label: 'C', text: '控制投入，限制风险敞口', score: 'C' },
            { label: 'D', text: '快速决策，全力投入', score: 'B' }
        ]
    },

    // 维度 4：沟通方式（D/P）- 题 22-28
    {
        id: 22,
        dimension: 'DP',
        text: '谈判开场，你通常会：',
        options: [
            { label: 'A', text: '直接表明立场和要求', score: 'D' },
            { label: 'B', text: '先寒暄，营造轻松氛围', score: 'P' },
            { label: 'C', text: '简明扼要说明来意', score: 'D' },
            { label: 'D', text: '从共同话题切入，拉近距离', score: 'P' }
        ]
    },
    {
        id: 23,
        dimension: 'DP',
        text: '表达不同意见时，你会：',
        options: [
            { label: 'A', text: '直接指出，不绕弯子', score: 'D' },
            { label: 'B', text: '委婉表达，照顾对方感受', score: 'P' },
            { label: 'C', text: '清晰说明，但注意语气', score: 'D' },
            { label: 'D', text: '先肯定，再提出建议', score: 'P' }
        ]
    },
    {
        id: 24,
        dimension: 'DP',
        text: '谈判陷入僵局时，你会：',
        options: [
            { label: 'A', text: '直接提出解决方案', score: 'D' },
            { label: 'B', text: '缓和气氛，换个角度沟通', score: 'P' },
            { label: 'C', text: '明确底线，推动决策', score: 'D' },
            { label: 'D', text: '寻找共同点，重建共识', score: 'P' }
        ]
    },
    {
        id: 25,
        dimension: 'DP',
        text: '与供应商讨价还价，你的风格是：',
        options: [
            { label: 'A', text: '直接给出目标价，不浪费时间', score: 'D' },
            { label: 'B', text: '逐步引导，让对方主动让步', score: 'P' },
            { label: 'C', text: '明确表达期望，坚持立场', score: 'D' },
            { label: 'D', text: '用数据和逻辑说服对方', score: 'P' }
        ]
    },
    {
        id: 26,
        dimension: 'DP',
        text: '反馈供应商表现时，你会：',
        options: [
            { label: 'A', text: '直接指出问题和不足', score: 'D' },
            { label: 'B', text: '先表扬，再提改进建议', score: 'P' },
            { label: 'C', text: '坦诚沟通，对事不对人', score: 'D' },
            { label: 'D', text: '用建设性方式表达', score: 'P' }
        ]
    },
    {
        id: 27,
        dimension: 'DP',
        text: '团队内部讨论采购策略，你倾向于：',
        options: [
            { label: 'A', text: '直接表达观点，快速决策', score: 'D' },
            { label: 'B', text: '倾听大家意见，协调共识', score: 'P' },
            { label: 'C', text: '明确表达自己的立场', score: 'D' },
            { label: 'D', text: '用影响力说服团队成员', score: 'P' }
        ]
    },
    {
        id: 28,
        dimension: 'DP',
        text: '结束谈判时，你会：',
        options: [
            { label: 'A', text: '明确总结达成的共识和下一步', score: 'D' },
            { label: 'B', text: '感谢对方，保持良好关系', score: 'P' },
            { label: 'C', text: '确认关键条款，避免误解', score: 'D' },
            { label: 'D', text: '表达合作期待，展望未来', score: 'P' }
        ]
    }
];

// 导出题目数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}
