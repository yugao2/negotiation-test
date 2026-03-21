// 采购谈判风格测试 3.0 - 完整合并版
// 所有逻辑合并到一个文件，避免依赖冲突

// ==================== 1. 风格定义 ====================
var styles = {
    ARCD: { animal: '🦉', name: '战略架构师', role: '用数据构建战略，用关系维护生态', mbti: 'ISTJ · 检查者型', percent: '约占人群的 12%' },
    ARCP: { animal: '🦉', name: '关系建筑师', role: '用数据支撑关系，用合作建立信任', mbti: 'ISFJ · 保护者型', percent: '约占人群的 10%' },
    ARBD: { animal: '🦉', name: '创新探索者', role: '用分析评估风险，用直觉探索机会', mbti: 'INFJ · 咨询师型', percent: '约占人群的 8%' },
    ARBP: { animal: '🦉', name: '团队推动者', role: '用分析优化流程，用合作推动执行', mbti: 'ENFJ · 教导者型', percent: '约占人群的 11%' },
    ATCD: { animal: '🦅', name: '市场洞察者', role: '用数据洞察市场，用竞争赢得优势', mbti: 'INTJ · 战略家型', percent: '约占人群的 9%' },
    ATCP: { animal: '🦅', name: '快速决策者', role: '用分析支持决策，用执行达成目标', mbti: 'ENTJ · 指挥官型', percent: '约占人群的 7%' },
    ATBD: { animal: '🦅', name: '战略架构师', role: '用逻辑构建体系，用创新优化流程', mbti: 'INTP · 逻辑学家型', percent: '约占人群的 6%' },
    ATBP: { animal: '🦅', name: '效率优化师', role: '用分析提升效率，用合作优化结果', mbti: 'ESTJ · 监督者型', percent: '约占人群的 10%' },
    IRCD: { animal: '🦊', name: '数据驱动者', role: '用直觉发现机会，用数据验证判断', mbti: 'ENFP · 倡导者型', percent: '约占人群的 8%' },
    IRCP: { animal: '🦊', name: '关系联结者', role: '用直觉捕捉机会，用关系实现价值', mbti: 'INFP · 治愈者型', percent: '约占人群的 7%' },
    IRBD: { animal: '🦊', name: '果断执行者', role: '用直觉判断方向，用关系推动执行', mbti: 'ESFJ · 供应者型', percent: '约占人群的 9%' },
    IRBP: { animal: '🦊', name: '温和协调者', role: '用直觉感知变化，用协调平衡各方', mbti: 'ISFP · 艺术家型', percent: '约占人群的 8%' },
    ITCD: { animal: '🐺', name: '灵活适应者', role: '用直觉适应变化，用任务达成目标', mbti: 'ENTP · 发明家型', percent: '约占人群的 6%' },
    ITCP: { animal: '🐺', name: '社交联结者', role: '用直觉感知需求，用执行联结资源', mbti: 'ESFP · 表演者型', percent: '约占人群的 7%' },
    ITBD: { animal: '🐺', name: '谨慎守护者', role: '用直觉评估风险，用任务守护底线', mbti: 'ISTP · 手艺人型', percent: '约占人群的 5%' },
    ITBP: { animal: '🐺', name: '愿景推动者', role: '用直觉感知趋势，用执行推动愿景', mbti: 'ESTP · 企业家型', percent: '约占人群的 6%' }
};

// ==================== 2. 最佳搭档 ====================
var bestMatchDeep = {
    ARCD: { match: 'ARBP', matchName: '团队推动者', role: '军师 + 外交官', why: '你负责「数据和战略」，他负责「关系和氛围」。\n你容易太硬，他帮你软化。\n他容易妥协，你帮他坚守。', scenarios: '✅ 联合谈判：你主谈条款，他主谈关系\n✅ 内部协调：你出方案，他去沟通\n✅ 冲突处理：你分析利弊，他调解情绪', pitfalls: '⚠️ 你觉得他"太软"时，想想没有他你早就把关系搞僵了\n⚠️ 他觉得你"太冷"时，提醒他你的数据是在保护团队', tips: '对他说话，先肯定再建议。\n"这个方案很好，如果再加一条数据支撑就更完美了"', goldenQuote: '数据我来守护，关系你来维系' },
    ARCP: { match: 'ATBD', matchName: '战略架构师', role: '规划师 + 指挥官', why: '你负责「战略和双赢」，他负责「执行和决断」。\n你容易想太多，他帮你拍板。\n他容易独断，你帮他周全。', scenarios: '✅ 项目启动：你做规划，他定方向\n✅ 团队管理：你凝聚人心，他推动执行', pitfalls: '⚠️ 你觉得他"独裁"时，想想没有他你可能还在开会\n⚠️ 他觉得你"优柔"时，提醒他你的周全是在避免踩坑', tips: '给他清晰的选项，不要给开放性问题。\n"方案 A 和方案 B，你选哪个？今天下班前定"', goldenQuote: '你负责拍板，我负责让大家都支持这个决定' },
    ARBD: { match: 'ATCP', matchName: '快速决策者', role: '守护者 + 战士', why: '你负责「谨慎和关系」，他负责「竞争和理性」。\n你容易退缩，他帮你争取。\n他容易强硬，你帮他缓冲。', scenarios: '✅ 供应商谈判：你维护长期关系，他争取短期利益\n✅ 内部博弈：你拉拢人心，他正面交锋', pitfalls: '⚠️ 你觉得他"太凶"时，想想没有他你可能已经吃亏了\n⚠️ 他觉得你"太软"时，提醒他关系是为了更好的长期合作', tips: '让他冲在前面，你跟在后面修复关系。\n"他去谈条款，我去维护关系，分工合作"', goldenQuote: '你负责攻城略地，我负责长治久安' },
    ARBP: { match: 'ARCD', matchName: '战略架构师', role: '外交官 + 军师', why: '你负责「关系和氛围」，他负责「数据和战略」。\n你容易妥协，他帮你坚守。\n他容易太硬，你帮他软化。', scenarios: '✅ 联合谈判：他主谈条款，你主谈关系\n✅ 内部协调：他出方案，你去沟通', pitfalls: '⚠️ 你觉得他"冷血"时，想想没有他团队可能已经亏钱了\n⚠️ 他觉得你"没原则"时，提醒他关系是为了更好的合作', tips: '给他时间分析，给他数据支撑。\n"我理解你的担心，这是对方给的具体条件，你看看是否可行"', goldenQuote: '关系我来维系，利益你来守护' },
    ATCD: { match: 'ARBP', matchName: '团队推动者', role: '军师 + 外交官', why: '你负责「数据和竞争」，他负责「关系和合作」。\n你容易树敌，他帮你修复。\n他容易妥协，你帮他争取。', scenarios: '✅ 供应商谈判：你压价，他维护关系\n✅ 内部推动：你出数据说服老板，他拉拢同事支持', pitfalls: '⚠️ 你觉得他"老好人"时，想想没有他你可能已经被孤立了\n⚠️ 他觉得你"冷血"时，提醒他你的数据是在保护公司利益', tips: '你谈判后，让他去收尾。\n"条款我谈好了，关系你去维护一下"', goldenQuote: '利益我来争取，关系你来修复' },
    ATCP: { match: 'ARBD', matchName: '创新探索者', role: '战士 + 守护者', why: '你负责「理性和竞争」，他负责「谨慎和关系」。\n你容易冒进，他帮你踩刹车。\n他容易保守，你帮他突破。', scenarios: '✅ 谈判策略：你制定进攻方案，他识别风险\n✅ 供应商管理：你淘汰差的，他维护好的', pitfalls: '⚠️ 你觉得他"胆小"时，想想没有他你可能已经踩坑了\n⚠️ 他觉得你"激进"时，提醒他你的竞争是在争取最大利益', tips: '给他风险评估的时间，不要催他。\n"这个风险你评估一下，明天给我结论"', goldenQuote: '你负责踩刹车，我负责踩油门' },
    ATBD: { match: 'ARCP', matchName: '关系建筑师', role: '指挥官 + 规划师', why: '你负责「独立和决断」，他负责「战略和协调」。\n你容易独断，他帮你凝聚。\n他容易犹豫，你帮他拍板。', scenarios: '✅ 项目决策：你拍板，他协调资源\n✅ 团队管理：你定方向，他凝聚人心', pitfalls: '⚠️ 你觉得他"磨叽"时，想想没有他你可能已经众叛亲离了\n⚠️ 他觉得你"独裁"时，提醒他你的决断是在推动事情前进', tips: '给他协调的时间，他会让你的决策更容易执行。\n"我决定这么做，你去协调一下资源"', goldenQuote: '你负责凝聚人心，我负责拍板决定' },
    ATBP: { match: 'IRCD', matchName: '数据驱动者', role: '落地者 + 创新者', why: '你负责「务实和协调」，他负责「创新和竞争」。\n你容易保守，他帮你突破。\n他容易冒进，你帮他落地。', scenarios: '✅ 新项目：他提创意，你做可行性分析\n✅ 流程优化：他提想法，你协调落地', pitfalls: '⚠️ 你觉得他"不靠谱"时，想想没有他你可能还在用老方法\n⚠️ 他觉得你"保守"时，提醒他你的务实是在避免浪费', tips: '给他的创意做可行性分析，帮他落地。\n"这个想法很好，我来算算成本和风险"', goldenQuote: '你负责画饼，我负责烙饼' },
    IRCD: { match: 'ATBP', matchName: '效率优化师', role: '创新者 + 落地者', why: '你负责「创新和竞争」，他负责「务实和协调」。\n你出创意，他做落地。\n你容易冒进，他帮你踩刹车。', scenarios: '✅ 新业务拓展：你找方向，他做落地计划\n✅ 团队创新：你提想法，他协调资源', pitfalls: '⚠️ 你觉得他"没想象力"时，想想没有他你的想法可能只是空想\n⚠️ 他觉得你"不靠谱"时，提醒他你的创新是在寻找突破点', tips: '给他具体的落地计划，不要只给想法。\n"这个方向我来定，具体怎么落地你来规划"', goldenQuote: '你负责烙饼，我负责画饼' },
    IRCP: { match: 'ITBD', matchName: '谨慎守护者', role: '愿景家 + 实干家', why: '你负责「愿景和合作」，他负责「执行和创新」。\n你画愿景，他定计划。\n你容易空想，他帮你实干。', scenarios: '✅ 战略规划：你画愿景，他定执行计划\n✅ 团队建设：你凝聚人心，他推动创新', pitfalls: '⚠️ 你觉得他"没格局"时，想想没有他你的愿景可能只是空话\n⚠️ 他觉得你"画大饼"时，提醒他你的愿景是在指引方向', tips: '给他清晰的愿景，他会帮你实现。\n"未来三年我们要做到 XX，具体怎么干你来规划"', goldenQuote: '你负责低头拉车，我负责抬头看路' },
    IRBD: { match: 'ITCP', matchName: '社交联结者', role: '人脉王 + 执行者', why: '你负责「人脉和冒险」，他负责「任务和执行」。\n你找资源，他做事情。\n你容易冒险，他帮你落地。', scenarios: '✅ 业务拓展：你找关系，他做执行\n✅ 新项目：你拉资源，他干实事', pitfalls: '⚠️ 你觉得他"没情商"时，想想没有他你可能已经欠了一堆人情债\n⚠️ 他觉得你"太飘"时，提醒他你的人脉是团队的资源', tips: '给他明确的任务，他会帮你完成。\n"这个人我去搞定，具体事情你来执行"', goldenQuote: '你负责做事情，我负责搞关系' },
    IRBP: { match: 'ITCD', matchName: '灵活适应者', role: '信任 builder + 数据猎手', why: '你负责「信任和合作」，他负责「数据和竞争」。\n你建信任，他做背调。\n你容易信人，他帮你验证。', scenarios: '✅ 供应商合作：你建信任，他做背调\n✅ 谈判策略：你营造氛围，他准备数据', pitfalls: '⚠️ 你觉得他"多疑"时，想想没有他你可能已经被骗了\n⚠️ 他觉得你"太天真"时，提醒他你的信任是在降低交易成本', tips: '让他准备数据，你准备人情。\n"数据你来验证，关系我来维护"', goldenQuote: '你负责验证数据，我负责建立信任' },
    ITCD: { match: 'IRBP', matchName: '温和协调者', role: '数据猎手 + 信任 builder', why: '你负责「数据和竞争」，他负责「信任和合作」。\n你验证数据，他建立信任。\n你容易树敌，他帮你修复。', scenarios: '✅ 供应商谈判：你压价，他维护关系\n✅ 绩效考核：你算数据，他做思想工作', pitfalls: '⚠️ 你觉得他"老好人"时，想想没有他你可能已经被孤立了\n⚠️ 他觉得你"冷血"时，提醒他你的数据是在保护公司利益', tips: '你谈判后，让他去收尾。\n"条款我谈好了，关系你去维护一下"', goldenQuote: '你负责建立信任，我负责验证数据' },
    ITCP: { match: 'ARCD', matchName: '战略架构师', role: '将军 + 军师', why: '你负责「执行和竞争」，他负责「战略和数据」。\n你冲锋陷阵，他出谋划策。\n你容易冲动，他帮你谋划。', scenarios: '✅ 谈判执行：他准备数据，你台前交锋\n✅ 项目推进：他做计划，你快速执行', pitfalls: '⚠️ 你觉得他"墨迹"时，想想没有他你可能已经踩坑了\n⚠️ 他觉得你"鲁莽"时，提醒他你的执行力是团队需要的', tips: '给他时间准备数据，他会帮你赢。\n"我需要你今天下午 3 点前给我分析，我 4 点去谈"', goldenQuote: '你负责出谋划策，我负责冲锋陷阵' },
    ITBD: { match: 'IRCP', matchName: '关系联结者', role: '实干家 + 愿景家', why: '你负责「创新和竞争」，他负责「愿景和合作」。\n你做创新，他描绘愿景。\n你容易埋头，他帮你抬头。', scenarios: '✅ 产品开发：你做创新，他描绘愿景\n✅ 团队建设：你推动创新，他凝聚人心', pitfalls: '⚠️ 你觉得他"画大饼"时，想想没有他你可能已经迷失方向了\n⚠️ 他觉得你"没格局"时，提醒他你的创新是在推动事情前进', tips: '给他创新的自由，他会帮你实现愿景。\n"愿景你来描绘，具体怎么创新我来干"', goldenQuote: '你负责抬头看路，我负责低头拉车' },
    ITBP: { match: 'IRBD', matchName: '果断执行者', role: '愿景推动者 + 人脉冒险家', why: '你负责「愿景和执行」，他负责「人脉和冒险」。\n你做事情，他搞关系。\n你容易保守，他帮你突破。', scenarios: '✅ 业务拓展：你定方向，他找资源\n✅ 新项目：你做计划，他拉关系', pitfalls: '⚠️ 你觉得他"太飘"时，想想没有他你可能已经错过机会了\n⚠️ 他觉得你"太保守"时，提醒他你的执行是在确保成功', tips: '给他明确的方向，他会帮你找资源。\n"方向我来定，资源你去搞定"', goldenQuote: '你负责搞关系，我负责做事情' }
};

// ==================== 3. 合作指南（256 种组合）====================
var cooperationGuides = {
    "ARCD-ARBP": { type: "最佳搭档", role: "军师 + 外交官", yourRole: "数据和战略", theirRole: "关系和氛围", advantages: ["你理性分析，他温和协调——决策既有依据又有人情味", "你容易太硬，他帮你软化——避免关系破裂", "他容易妥协，你帮他坚守——保护核心利益"], conflicts: "你觉得他太软时，想想没有他你早就把关系搞僵了；他觉得你太冷时，提醒他你的数据是在保护团队", solution: "对他说话，先肯定再建议：这个方案很好，如果再加一条数据支撑就更完美了", quote: "数据我来守护，关系你来维系" },
    "ITBP-IRBD": { type: "最佳搭档", role: "愿景推动者 + 人脉冒险家", yourRole: "愿景和执行", theirRole: "人脉和冒险", advantages: ["你做事情，他搞关系——资源充足", "你容易保守，他帮你突破——不错过机会", "他容易冒险，你帮他落地——不是瞎折腾"], conflicts: "你觉得他太飘时，想想没有他你可能已经错过机会了；他觉得你太保守时，提醒他你的执行是在确保成功", solution: "给他明确的方向，他会帮你找资源：方向我来定，资源你去搞定", quote: "你负责搞关系，我负责做事情" }
};

function getCooperationGuide(code1, code2) {
    var key = code1 + '-' + code2;
    if (cooperationGuides[key]) return cooperationGuides[key];
    return { type: "普通组合", role: "合作", yourRole: styles[code1] ? styles[code1].role : '', theirRole: styles[code2] ? styles[code2].role : '', advantages: ["互相学习", "互补优势"], conflicts: "需要磨合", solution: "多沟通", quote: "合作愉快" };
}

// ==================== 4. 全局函数 ====================
function selectPartnerCode(code) {
    console.log('选择风格代码:', code);
    var myResult = window.currentResult || window.currentUserResult || null;
    if (!myResult) {
        try { myResult = JSON.parse(localStorage.getItem('myTestResult')); } catch(e) {}
    }
    if (!myResult || !myResult.code) {
        alert('请先完成测试，查看您的风格类型后再查询合作指南');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    queryCooperationGuide(myResult.code, code);
}

function queryCooperationGuide(myCode, partnerCode) {
    console.log('查询合作指南:', myCode, partnerCode);
    var guide = getCooperationGuide(myCode, partnerCode);
    var myStyle = styles[myCode] || { name: '未知' };
    var partnerStyle = styles[partnerCode] || { name: '未知' };
    
    var resultDiv = document.getElementById('cooperationResult');
    if (!resultDiv) return;
    
    var html = '<div id="cooperationGuideTitle" style="background:linear-gradient(135deg, #0071e3, #005bb5);padding:16px;margin-bottom:20px;border-radius:12px;">';
    html += '<div style="font-size:17px;font-weight:800;color:#fff;margin-bottom:6px;">📋 ' + myCode + ' × ' + partnerCode + ' 合作指南</div>';
    html += '<div style="display:inline-block;padding:4px 10px;background:rgba(255,255,255,0.2);border-radius:980px;font-size:11px;color:#fff;font-weight:600;">' + guide.type + ' · ' + guide.role + '</div></div>';
    
    html += '<div style="margin-bottom:20px;"><div style="font-size:12px;font-weight:700;color:#666;margin-bottom:10px;">角色分工</div>';
    html += '<div style="background:#1c1c1e;padding:14px;border-radius:10px;border:1px solid #333;">';
    html += '<div style="margin-bottom:10px;"><span style="color:#0071e3;font-weight:600;">你</span> <span style="color:#86868b;font-size:12px;">（' + myCode + ' ' + myStyle.name + '）</span><div style="color:#e0e0e0;font-size:14px;line-height:1.7;margin-top:6px;">' + myStyle.role + '</div></div>';
    html += '<div><span style="color:#34c759;font-weight:600;">他</span> <span style="color:#86868b;font-size:12px;">（' + partnerCode + ' ' + partnerStyle.name + '）</span><div style="color:#e0e0e0;font-size:14px;line-height:1.7;margin-top:6px;">' + partnerStyle.role + '</div></div>';
    html += '</div></div>';
    
    html += '<div style="margin-bottom:20px;"><div style="font-size:12px;font-weight:700;color:#666;margin-bottom:10px;">合作优势</div>';
    html += '<div style="background:#1c1c1e;padding:14px;border-radius:10px;border:1px solid #333;">';
    guide.advantages.forEach(function(a) { html += '<div style="font-size:14px;color:#fff;line-height:1.6;margin:6px 0;">✅ ' + a + '</div>'; });
    html += '</div></div>';
    
    html += '<div style="margin-bottom:20px;"><div style="font-size:12px;font-weight:700;color:#666;margin-bottom:10px;">冲突预警</div>';
    html += '<div style="background:rgba(245,166,35,0.08);padding:14px;border-radius:10px;border:1px solid rgba(245,166,35,0.3);">';
    html += '<div style="font-size:14px;color:#fff;line-height:1.6;">⚠️ ' + guide.conflicts + '</div></div></div>';
    
    html += '<div style="margin-bottom:20px;"><div style="font-size:12px;font-weight:700;color:#666;margin-bottom:10px;">合作秘籍</div>';
    html += '<div style="background:rgba(0,113,227,0.08);padding:14px;border-radius:10px;border:1px solid rgba(0,113,227,0.3);">';
    html += '<div style="font-size:14px;color:#0071e3;line-height:1.6;font-weight:600;">💡 ' + guide.solution + '</div></div></div>';
    
    html += '<div style="text-align:center;padding:20px;background:linear-gradient(135deg, rgba(0,113,227,0.1), rgba(91,200,250,0.05));border-radius:12px;border:1px dashed rgba(0,113,227,0.4);">';
    html += '<div style="font-size:11px;color:#666;margin-bottom:8px;">金句</div>';
    html += '<div style="font-size:16px;font-weight:700;color:#0071e3;line-height:1.5;font-style:italic;">"' + guide.quote + '"</div></div>';
    
    resultDiv.innerHTML = html;
    resultDiv.classList.remove('hidden');
    
    setTimeout(function() {
        var titleEl = document.getElementById('cooperationGuideTitle');
        if (titleEl) { titleEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }, 100);
}

function renderBestMatchOptimized(code) {
    var bestMatchData = bestMatchDeep[code];
    var el = document.getElementById('bestMatch');
    if (!el || !bestMatchData) return;
    
    var html = '<div style="background:linear-gradient(135deg, #34c759, #30b35a);padding:20px;border-radius:12px;margin-bottom:24px;">';
    html += '<div style="font-size:20px;font-weight:800;color:#fff;margin-bottom:6px;">🤝 ' + bestMatchData.match + ' ' + bestMatchData.matchName + '</div>';
    html += '<div style="display:inline-block;padding:4px 12px;background:rgba(255,255,255,0.2);border-radius:980px;font-size:12px;color:#fff;font-weight:600;">角色：' + bestMatchData.role + '</div></div>';
    
    html += '<div style="margin:24px 0 16px;display:flex;align-items:center;gap:12px;">';
    html += '<div style="flex:1;height:1px;background:linear-gradient(90deg, transparent, #333, transparent);"></div>';
    html += '<div style="font-size:12px;color:#666;text-transform:uppercase;letter-spacing:1px;">合作指南</div>';
    html += '<div style="flex:1;height:1px;background:linear-gradient(90deg, transparent, #333, transparent);"></div></div>';
    
    html += '<div style="background:#1c1c1e;padding:16px;border-radius:12px;margin-bottom:14px;border:1px solid #333;">';
    html += '<div style="font-size:13px;font-weight:700;color:#0071e3;margin-bottom:10px;">💡 为什么是你们</div>';
    html += '<div style="font-size:14px;color:#e0e0e0;line-height:2;white-space:pre-line;">' + bestMatchData.why + '</div></div>';
    
    html += '<div style="background:#1c1c1e;padding:16px;border-radius:12px;margin-bottom:14px;border:1px solid #333;">';
    html += '<div style="font-size:13px;font-weight:700;color:#5ac8fa;margin-bottom:10px;">✅ 合作场景</div>';
    html += '<div style="font-size:14px;color:#e0e0e0;line-height:2;white-space:pre-line;">' + bestMatchData.scenarios + '</div></div>';
    
    html += '<div style="background:#1c1c1e;padding:16px;border-radius:12px;margin-bottom:14px;border:1px solid #333;">';
    html += '<div style="font-size:13px;font-weight:700;color:#f5a623;margin-bottom:10px;">⚠️ 小心踩坑</div>';
    html += '<div style="font-size:14px;color:#e0e0e0;line-height:2;white-space:pre-line;">' + bestMatchData.pitfalls + '</div></div>';
    
    html += '<div style="background:#1c1c1e;padding:16px;border-radius:12px;margin-bottom:20px;border:1px solid #333;">';
    html += '<div style="font-size:13px;font-weight:700;color:#34c759;margin-bottom:10px;">💬 沟通秘籍</div>';
    html += '<div style="font-size:14px;color:#e0e0e0;line-height:2;white-space:pre-line;">' + bestMatchData.tips + '</div></div>';
    
    html += '<div style="text-align:center;padding:24px;background:linear-gradient(135deg, rgba(52,199,89,0.1), rgba(48,179,90,0.05));border-radius:12px;border:1px dashed rgba(52,199,89,0.4);">';
    html += '<div style="font-size:11px;color:#666;margin-bottom:10px;letter-spacing:2px;text-transform:uppercase;">💎 合作金句</div>';
    html += '<div style="font-size:16px;font-weight:700;color:#34c759;line-height:1.6;font-style:italic;">"' + bestMatchData.goldenQuote + '"</div></div>';
    
    el.innerHTML = html;
}

// 暴露到全局
window.styles = styles;
window.bestMatchDeep = bestMatchDeep;
window.selectPartnerCode = selectPartnerCode;
window.queryCooperationGuide = queryCooperationGuide;
window.renderBestMatchOptimized = renderBestMatchOptimized;
window.getCooperationGuide = getCooperationGuide;

console.log('✅ 所有函数已加载到全局');
