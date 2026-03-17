/**
 * 采购谈判风格测试 - 16 种风格完整数据
 * 
 * 代码规则：
 * - 第 1 位：A=分析型 (Analytical), I=直觉型 (Intuitive) - 决策风格
 * - 第 2 位：R=关系型 (Relationship), T=任务型 (Task) - 关系导向
 * - 第 3 位：C=谨慎型 (Cautious), B=大胆型 (Bold) - 风险态度
 * - 第 4 位：D=直接型 (Direct), P=说服型 (Persuasive) - 沟通方式
 */

const styles = {
    // ========== 分析型 (A) 系列 ==========
    
    'ARCD': {
        code: 'ARCD',
        name: '战略架构师',
        role: '战略策划者',
        animal: '🦉',
        animalName: '猫头鹰',
        savingPotential: '15-25%',
        rarity: '约 5% 的采购人员',
        fortune: {
            negotiation: '今年是你的"布局之年"，适合搭建长期供应商体系',
            wealth: '★★★★☆ 通过系统优化可显著降本',
            match: '与 ITCP（机会捕捉者）互补性最强',
            tag: '深谋远虑的布局者',
            advice: '发挥分析优势，但注意不要过度分析而错失良机'
        },
        description: '你善于从全局视角规划采购战略，用数据驱动决策，是团队中的智囊角色。',
        strengths: ['战略规划能力强', '数据分析能力出色', '风险识别敏锐'],
        tips: '在快速变化的市场中，适当提升决策速度会让你更具竞争力'
    },
    
    'ARCP': {
        code: 'ARCP',
        name: '关系建筑师',
        role: '信任建立者',
        animal: '🐬',
        animalName: '海豚',
        savingPotential: '10-18%',
        rarity: '约 8% 的采购人员',
        fortune: {
            negotiation: '贵人运旺盛，老供应商会给你带来意外惊喜',
            wealth: '★★★★☆ 关系红利持续释放',
            match: '与 ATBD（果断执行者）配合默契',
            tag: '人脉王',
            advice: '维护关系的同时，别忘了用数据说话'
        },
        description: '你擅长建立和维护供应商关系，相信长期合作的价值，是团队中的粘合剂。',
        strengths: ['关系管理能力强', '沟通协调能力出色', '共赢思维'],
        tips: '在关键谈判中，适度展现强硬姿态会获得更多尊重'
    },
    
    'ARBD': {
        code: 'ARBD',
        name: '谨慎守护者',
        role: '风险管控者',
        animal: '🐢',
        animalName: '乌龟',
        savingPotential: '8-15%',
        rarity: '约 7% 的采购人员',
        fortune: {
            negotiation: '稳字当头，避开陷阱就是最大的收获',
            wealth: '★★★☆☆ 稳健型收益，避免大起大落',
            match: '与 IRBP（魅力影响者）形成互补',
            tag: '安全卫士',
            advice: '在可控范围内，可以尝试一些创新方案'
        },
        description: '你重视风险管控，做事谨慎稳妥，是团队中的安全阀。',
        strengths: ['风险意识强', '细节把控到位', '合规意识好'],
        tips: '适度承担风险可能带来超额回报，不必事事求稳'
    },
    
    'ARBP': {
        code: 'ARBP',
        name: '温和协调者',
        role: '共识促成者',
        animal: '🐑',
        animalName: '绵羊',
        savingPotential: '5-12%',
        rarity: '约 10% 的采购人员',
        fortune: {
            negotiation: '以和为贵，协调各方利益达成平衡',
            wealth: '★★★☆☆ 细水长流型',
            match: '与 ATCD（效率优化师）合作愉快',
            tag: '和平使者',
            advice: '在原则问题上，学会坚定立场'
        },
        description: '你性格温和，善于协调各方利益，是团队中的润滑剂。',
        strengths: ['协调能力强', '亲和力好', '团队意识强'],
        tips: '必要时展现决断力，会让你获得更多话语权'
    },
    
    // ========== 任务型 (T) 系列 ==========
    
    'ATCD': {
        code: 'ATCD',
        name: '效率优化师',
        role: '流程专家',
        animal: '🐜',
        animalName: '蚂蚁',
        savingPotential: '12-20%',
        rarity: '约 12% 的采购人员',
        fortune: {
            negotiation: '流程优化带来效率红利，事半功倍',
            wealth: '★★★★☆ 通过效率提升创造价值',
            match: '与 IRCD（创新探索者）碰撞火花',
            tag: '效率达人',
            advice: '在追求效率的同时，关注人的因素'
        },
        description: '你注重流程和效率，善于优化采购体系，是团队中的效率专家。',
        strengths: ['流程优化能力强', '执行力出色', '系统化思维'],
        tips: '灵活应对突发情况，不要过于依赖既定流程'
    },
    
    'ATCP': {
        code: 'ATCP',
        name: '数据驱动者',
        role: '量化分析师',
        animal: '🦎',
        animalName: '蜥蜴',
        savingPotential: '10-18%',
        rarity: '约 9% 的采购人员',
        fortune: {
            negotiation: '数据是你最强大的武器，用数字说话',
            wealth: '★★★★☆ 量化管理带来稳定收益',
            match: '与 ARCP（关系建筑师）互补',
            tag: '数据控',
            advice: '有些时候，直觉和经验也很重要'
        },
        description: '你相信数据的力量，善于用量化方法解决问题，是团队中的分析师。',
        strengths: ['数据分析能力强', '逻辑思维清晰', '客观理性'],
        tips: '适当关注人情世故，会让你的建议更容易被接受'
    },
    
    'ATBD': {
        code: 'ATBD',
        name: '果断执行者',
        role: '结果导向者',
        animal: '🦅',
        animalName: '鹰',
        savingPotential: '15-22%',
        rarity: '约 8% 的采购人员',
        fortune: {
            negotiation: '雷厉风行，快速拿下关键战役',
            wealth: '★★★★★ 结果导向带来高回报',
            match: '与 ARCP（关系建筑师）配合默契',
            tag: '行动派',
            advice: '关注过程管理，避免欲速则不达'
        },
        description: '你目标明确，执行力强，是团队中的攻坚手。',
        strengths: ['执行力强', '目标导向', '决断力好'],
        tips: '适当倾听他人意见，会让决策更全面'
    },
    
    'ATBP': {
        code: 'ATBP',
        name: '团队推动者',
        role: '项目管理者',
        animal: '🐴',
        animalName: '马',
        savingPotential: '10-16%',
        rarity: '约 11% 的采购人员',
        fortune: {
            negotiation: '团队协作是你的王牌，凝聚力量成大事',
            wealth: '★★★☆☆ 稳定发展中求突破',
            match: '与 ARBP（温和协调者）合作愉快',
            tag: '团队核心',
            advice: '在推动项目时，注意节奏把控'
        },
        description: '你善于推动团队前进，协调资源达成目标，是团队中的推动者。',
        strengths: ['项目管理能力强', '资源整合好', '推动力强'],
        tips: '给团队更多自主空间，可能会收获惊喜'
    },
    
    // ========== 直觉型 (I) 系列 ==========
    
    'IRCD': {
        code: 'IRCD',
        name: '创新探索者',
        role: '变革推动者',
        animal: '🦊',
        animalName: '狐狸',
        savingPotential: '12-20%',
        rarity: '约 6% 的采购人员',
        fortune: {
            negotiation: '创新思维带来突破，敢于尝试新路径',
            wealth: '★★★★☆ 创新红利可期',
            match: '与 ATCD（效率优化师）碰撞火花',
            tag: '创新先锋',
            advice: '创新的同时做好风险评估'
        },
        description: '你思维活跃，善于创新，是团队中的创意源泉。',
        strengths: ['创新思维强', '适应力好', '学习能力强'],
        tips: '将创意落地需要系统性思考，注意执行细节'
    },
    
    'IRCP': {
        code: 'IRCP',
        name: '社交联结者',
        role: '人脉拓展者',
        animal: '🐕',
        animalName: '狗',
        savingPotential: '8-15%',
        rarity: '约 10% 的采购人员',
        fortune: {
            negotiation: '人脉即财脉，社交带来新机会',
            wealth: '★★★☆☆ 关系网络创造价值',
            match: '与 ATCP（数据驱动者）互补',
            tag: '社交达人',
            advice: '深度关系比广度更重要，精选核心伙伴'
        },
        description: '你善于社交，人脉广泛，是团队中的连接器。',
        strengths: ['社交能力强', '人脉资源广', '信息灵敏'],
        tips: '将人脉转化为实际价值需要系统性跟进'
    },
    
    'IRBD': {
        code: 'IRBD',
        name: '风险投资者',
        role: '机会赌手',
        animal: '🦁',
        animalName: '狮子',
        savingPotential: '15-30%',
        rarity: '约 4% 的采购人员',
        fortune: {
            negotiation: '高风险高回报，大胆布局关键机会',
            wealth: '★★★★★ 胆识带来超额收益',
            match: '与 ARBD（谨慎守护者）形成平衡',
            tag: '冒险王',
            advice: '设置止损线，控制风险敞口'
        },
        description: '你敢于冒险，善于把握大机会，是团队中的开拓者。',
        strengths: ['机会识别能力强', '决断力好', '抗压能力强'],
        tips: '建立风险评估机制，避免冲动决策'
    },
    
    'IRBP': {
        code: 'IRBP',
        name: '魅力影响者',
        role: '说服艺术家',
        animal: '🦜',
        animalName: '鹦鹉',
        savingPotential: '10-18%',
        rarity: '约 7% 的采购人员',
        fortune: {
            negotiation: '魅力是你的武器，用影响力达成目标',
            wealth: '★★★★☆ 软实力创造硬价值',
            match: '与 ARBD（谨慎守护者）互补',
            tag: '魅力领袖',
            advice: '用数据支撑你的说服力，效果更佳'
        },
        description: '你富有魅力，善于影响他人，是团队中的意见领袖。',
        strengths: ['影响力强', '表达能力好', '感染力强'],
        tips: '在关键问题上，用事实和数据增强说服力'
    },
    
    // ========== 直觉任务型 (IT) 系列 ==========
    
    'ITCD': {
        code: 'ITCD',
        name: '市场洞察者',
        role: '趋势分析师',
        animal: '🦈',
        animalName: '鲨鱼',
        savingPotential: '12-22%',
        rarity: '约 6% 的采购人员',
        fortune: {
            negotiation: '洞察先机，把握市场脉搏',
            wealth: '★★★★☆ 趋势判断带来收益',
            match: '与 ARCP（关系建筑师）配合默契',
            tag: '市场猎手',
            advice: '深度分析+快速行动=最佳组合'
        },
        description: '你对市场敏感，善于洞察趋势，是团队中的侦察兵。',
        strengths: ['市场敏感度高', '趋势判断准', '反应速度快'],
        tips: '将洞察转化为行动计划，创造价值'
    },
    
    'ITCP': {
        code: 'ITCP',
        name: '机会捕捉者',
        role: '敏捷反应者',
        animal: '🐆',
        animalName: '猎豹',
        savingPotential: '10-20%',
        rarity: '约 7% 的采购人员',
        fortune: {
            negotiation: '敏捷是你的优势，快速抓住稍纵即逝的机会',
            wealth: '★★★★☆ 速度带来溢价',
            match: '与 ARCD（战略架构师）互补',
            tag: '速度之王',
            advice: '在快速行动中保持方向感'
        },
        description: '你反应敏捷，善于捕捉机会，是团队中的快速反应部队。',
        strengths: ['反应速度快', '机会捕捉能力强', '适应力好'],
        tips: '建立机会评估框架，提高命中率'
    },
    
    'ITBD': {
        code: 'ITBD',
        name: '快速决策者',
        role: '直觉行动派',
        animal: '🐲',
        animalName: '龙',
        savingPotential: '12-18%',
        rarity: '约 5% 的采购人员',
        fortune: {
            negotiation: '相信直觉，快速出击拿下目标',
            wealth: '★★★★☆ 决断力创造价值',
            match: '与 ARCD（战略架构师）形成互补',
            tag: '决策高手',
            advice: '重大决策前，适当收集更多信息'
        },
        description: '你决策果断，行动迅速，是团队中的突击手。',
        strengths: ['决策速度快', '行动力强', '直觉准确'],
        tips: '在复杂情况下，适当放慢速度做全面评估'
    },
    
    'ITBP': {
        code: 'ITBP',
        name: '灵活适应者',
        role: '变通专家',
        animal: '🐙',
        animalName: '章鱼',
        savingPotential: '8-15%',
        rarity: '约 9% 的采购人员',
        fortune: {
            negotiation: '灵活应变是你的超能力，以变制胜',
            wealth: '★★★☆☆ 灵活策略带来稳定收益',
            match: '与 ATCD（效率优化师）合作愉快',
            tag: '变通大师',
            advice: '在灵活的同时，坚守核心原则'
        },
        description: '你灵活多变，善于适应环境，是团队中的多面手。',
        strengths: ['适应能力强', '灵活性好', '多任务处理'],
        tips: '建立核心原则，在灵活中保持定力'
    }
};

// 导出风格数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = styles;
}
