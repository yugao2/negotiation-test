// 核心价值、稀有度、适配场景生成器

// 1. 核心价值 - 根据风格定义独特商业价值
function getCoreValue(code) {
    var coreValues = {
        ARCD: {
            title: '数据驱动的降本专家',
            desc: '你擅长从海量数据中发现隐藏的降本机会，用分析能力为公司创造真实价值。老板最放心的"守门员"。',
            value: '年省潜力：中高（约 12-20%）'
        },
        ARCP: {
            title: '供应商关系专家',
            desc: '你能让供应商心甘情愿让利，建立 5 年 + 的战略合作。关键时刻总有人脉支援。',
            value: '年省潜力：中（约 8-15%）+ 隐性价值高'
        },
        ARBD: {
            title: '风险管控专家',
            desc: '你避免的损失可能比省下的钱更多。合同审查细致，能避开 90% 的潜在风险。',
            value: '年省潜力：中（约 8-15%）+ 风险规避价值高'
        },
        ARBP: {
            title: '跨部门协作专家',
            desc: '你能化解采购与业务、财务的矛盾，让复杂项目顺利推进。团队的"情绪稳定器"。',
            value: '年省潜力：中低（约 5-12%）+ 协作价值高'
        },
        ATCD: {
            title: '流程优化专家',
            desc: '你建立的采购体系能让效率提升 30%+。流程是你的武器，标准化是你的信仰。',
            value: '年省潜力：中（约 10-18%）+ 效率价值高'
        },
        ATCP: {
            title: '成本分析专家',
            desc: '你能把成本拆到原子级别，让供应商无处遁形。量化管控是你的超能力。',
            value: '年省潜力：高（约 15-25%）'
        },
        ATBD: {
            title: '结果导向的执行者',
            desc: '老板说降本 15%，你就能做到 15%。你的字典里没有"困难"，只有"完成"。',
            value: '年省潜力：高（约 15-25%）'
        },
        ATBP: {
            title: '项目落地专家',
            desc: '再复杂的采购项目，你都能落地。你是老板决策的执行者，团队信赖的推进器。',
            value: '年省潜力：中（约 10-18%）'
        },
        IRCD: {
            title: '供应链创新者',
            desc: '你能发现别人看不到的创新机会，用颠覆思维重新定义采购价值。',
            value: '年省潜力：不确定（可能 0% 或 50%）+ 创新价值高'
        },
        IRCP: {
            title: '资源整合专家',
            desc: '你的人脉就是钱脉。你能整合上下游资源，创造 1+1>2 的价值。',
            value: '年省潜力：中（约 10-18%）+ 资源价值高'
        },
        IRBD: {
            title: '战略机会捕手',
            desc: '你敢在别人不敢的时候下注，抓住别人抓不住的机会。赌徒 + 先知。',
            value: '年省潜力：不确定（可能 -10% 或 100%）'
        },
        IRBP: {
            title: '影响力领导者',
            desc: '你靠魅力和影响力推动事情，能激励团队和供应商一起向前。天生的领导者。',
            value: '年省潜力：中（约 10-18%）+ 领导力价值高'
        },
        ITCD: {
            title: '市场趋势洞察者',
            desc: '你能预判市场走向，提前布局。你的洞察能让公司避开风险、抓住机会。',
            value: '年省潜力：中高（约 12-22%）+ 预判价值高'
        },
        ITCP: {
            title: '敏捷响应专家',
            desc: '变化是你的朋友。你能在紧急情况下快速找到解决方案，是团队的"救火队长"。',
            value: '年省潜力：中（约 8-15%）+ 响应价值高'
        },
        ITBD: {
            title: '变革推动者',
            desc: '你敢打破现状，推动别人不敢推动的变革。你的勇气能带来突破性进展。',
            value: '年省潜力：不确定（可能 -5% 或 40%）'
        },
        ITBP: {
            title: '平衡型管理者',
            desc: '你能在复杂环境中找到最优解，驾驭多方利益。平衡是你的艺术。',
            value: '年省潜力：中（约 10-18%）'
        }
    };
    
    return coreValues[code] || { title: '独特的采购专家', desc: '你有自己的独特价值', value: '年省潜力：中' };
}

// 2. 稀有度 - 根据极端维度数量计算
function calculateRarity(scores) {
    var extremeCount = 0;
    var dimensions = ['A', 'I', 'R', 'T', 'C', 'B', 'D', 'P'];
    
    // 计算两两组合的维度
    var pairs = [
        {name: '决策风格', dims: ['A', 'I']},
        {name: '关系导向', dims: ['R', 'T']},
        {name: '风险态度', dims: ['C', 'B']},
        {name: '沟通方式', dims: ['D', 'P']}
    ];
    
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var total = (scores[pair.dims[0]] || 0) + (scores[pair.dims[1]] || 0);
        if (total === 0) continue;
        
        var percent1 = (scores[pair.dims[0]] / total) * 100;
        var percent2 = 100 - percent1;
        
        // 任一维度超过 80% 或低于 20% 算极端
        if (percent1 >= 80 || percent1 <= 20 || percent2 >= 80 || percent2 <= 20) {
            extremeCount++;
        }
    }
    
    // 根据极端数量定级
    if (extremeCount >= 4) {
        return {
            show: true,
            text: '万里挑一',
            percent: '<0.1%',
            beatPercent: 99.9,
            rank: '前 100',
            reason: '四个维度都极度偏向，这种组合极其罕见'
        };
    } else if (extremeCount >= 3) {
        return {
            show: true,
            text: '千里挑一',
            percent: '约 1%',
            beatPercent: 99,
            rank: '前 1,000',
            reason: '三个维度极度偏向，这种组合非常罕见'
        };
    } else if (extremeCount >= 2) {
        return {
            show: true,
            text: '百里挑一',
            percent: '约 5%',
            beatPercent: 95,
            rank: '前 5,000',
            reason: '两个维度极度偏向，这种组合比较少见'
        };
    } else {
        // 不显示稀有度
        return { show: false };
    }
}

// 3. 适配场景 - 根据维度匹配
function getFitScenes(code, scores) {
    // 计算各维度得分比例
    var aiTotal = (scores.A || 0) + (scores.I || 0);
    var rtTotal = (scores.R || 0) + (scores.T || 0);
    var cbTotal = (scores.C || 0) + (scores.B || 0);
    var dpTotal = (scores.D || 0) + (scores.P || 0);
    
    var aPercent = aiTotal > 0 ? (scores.A / aiTotal) * 100 : 50;
    var rPercent = rtTotal > 0 ? (scores.R / rtTotal) * 100 : 50;
    var cPercent = cbTotal > 0 ? (scores.C / cbTotal) * 100 : 50;
    var dPercent = dpTotal > 0 ? (scores.D / dpTotal) * 100 : 50;
    
    var fitScenes = {
        good: [],  // 擅长场景
        avoid: []  // 避免场景
    };
    
    // 根据主导维度添加场景
    if (aPercent >= 60) {
        fitScenes.good.push('成本分析与建模');
        fitScenes.good.push('供应商评估与选择');
        fitScenes.avoid.push('紧急采购（需要快速决策）');
    }
    if (aPercent <= 40) {
        fitScenes.good.push('机会捕捉与快速决策');
        fitScenes.good.push('创新项目采购');
        fitScenes.avoid.push('需要详细数据分析的复杂谈判');
    }
    
    if (rPercent >= 60) {
        fitScenes.good.push('长期战略合作谈判');
        fitScenes.good.push('供应商纠纷调解');
        fitScenes.good.push('跨部门协作项目');
        fitScenes.avoid.push('强硬立场的最后通牒');
    }
    if (rPercent <= 40) {
        fitScenes.good.push('结果导向的降本任务');
        fitScenes.good.push('短期交易型采购');
        fitScenes.avoid.push('需要耐心维护的长期关系');
    }
    
    if (cPercent >= 60) {
        fitScenes.good.push('合同审核与风险管控');
        fitScenes.good.push('合规审查');
        fitScenes.good.push('高金额/高风险采购');
        fitScenes.avoid.push('需要快速决策的紧急场景');
    }
    if (cPercent <= 40) {
        fitScenes.good.push('新供应商开发');
        fitScenes.good.push('创新合作模式探索');
        fitScenes.avoid.push('高风险、高金额采购');
    }
    
    if (dPercent >= 60) {
        fitScenes.good.push('价格谈判（强硬立场）');
        fitScenes.good.push('供应商施压');
        fitScenes.good.push('最后通牒场景');
        fitScenes.avoid.push('需要委婉的关系维护');
    }
    if (dPercent <= 40) {
        fitScenes.good.push('双赢谈判');
        fitScenes.good.push('长期协议签署');
        fitScenes.good.push('影响力驱动的项目');
        fitScenes.avoid.push('需要强硬立场的对抗性谈判');
    }
    
    // 限制数量，各取前 3-4 个
    fitScenes.good = fitScenes.good.slice(0, 4);
    fitScenes.avoid = fitScenes.avoid.slice(0, 3);
    
    return fitScenes;
}
