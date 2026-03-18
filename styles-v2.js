// 采购谈判风格测试 2.0 - 16 种风格详细数据（精简行动版）
// 核心变革：从"算命"转向"行动指导"，每个模块都有 actionable 内容

var styles = {
    ARCD: {
        animal: '🦉',
        name: '战略架构师',
        role: '战略策划者',
        saving: '15-25%',
        rarity: '约 5%',
        // === 新增核心模块 ===
        strengths: [
            '擅长从海量数据中发现隐藏的降本机会',
            '谈判前准备充分，让对方无懈可击',
            '老板最放心的"守门员"，从不冲动决策'
        ],
        weaknesses: [
            '容易被"真诚"的供应商打动，理性防线出现裂缝',
            '过度分析导致错失最佳采购时机',
            '太相信数据，忽视人情世故的价值'
        ],
        actions: [
            '设定决策截止时间，超过时限就行动（完美是完成的敌人）',
            '建立"人情账户"，适当给供应商留面子',
            '学习《快速决策法》，在"足够好"和"完美"间找平衡'
        ],
        course: {
            name: '《成本结构分析与高级谈判策略》',
            teacher: '姜宏锋',
            price: '1999 元',
            link: 'https://youlian.com/course/cost-analysis'
        },
        book: '《谈判力》- 罗杰·费希尔',
        consult: '预约战略采购优化咨询（400-XXX-XXXX）',
        // === 保留的精华内容 ===
        celebrity: '诸葛亮',
        celebrityDesc: '谋定后动，运筹帷幄',
        quotes: [
            { text: '这个价格，你自己信吗？', scene: '当供应商报价明显高于市场价时' },
            { text: '我需要再对比一下', scene: '不直接拒绝，给自己留足分析时间' },
            { text: '长期合作，但要双赢', scene: '表达合作意愿，同时坚守底线' }
        ],
        beatPercent: 87,
        rank: 3247
    },
    ARCP: {
        animal: '🐬',
        name: '关系建筑师',
        role: '信任建立者',
        saving: '10-18%',
        rarity: '约 8%',
        strengths: [
            '供应商愿意为你破例，关键时刻有人脉支援',
            '擅长化解供应商纠纷，是团队的"情绪稳定器"',
            '长期主义思维，能建立 5 年 + 的战略合作'
        ],
        weaknesses: [
            '太讲人情，不好意思砍价',
            '担心强硬破坏关系，KPI 里"和谐"权重过高',
            '容易被供应商的"故事"打动，忽视商业本质'
        ],
        actions: [
            '把砍价重新定义为"共同优化成本"，减少心理负担',
            '建立"关系 - 价格"矩阵，定期评估供应商性价比',
            '学习《强势谈判法》，在维护关系的同时完成 KPI'
        ],
        course: {
            name: '《供应商关系管理与长期协议谈判》',
            teacher: '姜宏锋',
            price: '1699 元',
            link: 'https://youlian.com/course/supplier-relations'
        },
        book: '《影响力》- 罗伯特·西奥迪尼',
        consult: '预约关系型采购优化咨询（400-XXX-XXXX）',
        celebrity: '刘备',
        celebrityDesc: '仁义服人，得人心者得天下',
        quotes: [
            { text: '咱们老朋友了，给个实在价', scene: '用关系拉近，但不直接砍价' },
            { text: '这次帮帮忙，下次一定优先', scene: '用未来承诺换取当前优惠' },
            { text: '关系比价格重要', scene: '表明立场，但可能错失降本机会' }
        ],
        beatPercent: 72,
        rank: 8521
    },
    ARBD: {
        animal: '🐢',
        name: '谨慎守护者',
        role: '风险管控者',
        saving: '8-15%',
        rarity: '约 7%',
        strengths: [
            '善于隐藏意图，在谈判中不轻易亮出底牌',
            '合同条款审查细致，避免 90% 的潜在风险',
            '善于等待最佳时机，一击制胜'
        ],
        weaknesses: [
            '过度谨慎，错失最佳采购时机',
            '每个条款都要反复推敲，供应商觉得你难缠',
            '市场不等人，有时速度比完美更重要'
        ],
        actions: [
            '建立风险分级机制：低风险快速决策，高风险深度分析',
            '学会计算"等待成本"——快速试错比缓慢完美更划算',
            '设定"决策时限"，超时强制行动'
        ],
        course: {
            name: '《采购风险管理与合同审核实务》',
            teacher: '姜宏锋',
            price: '1499 元',
            link: 'https://youlian.com/course/risk-management'
        },
        book: '《黑天鹅》- 纳西姆·塔勒布',
        consult: '预约风险管控优化咨询（400-XXX-XXXX）',
        celebrity: '司马懿',
        celebrityDesc: '隐忍待机，一击必中',
        quotes: [
            { text: '这个条款还需要再斟酌', scene: '发现潜在风险时的本能反应' },
            { text: '最坏的情况是什么？', scene: '习惯性做最坏打算' },
            { text: '先小人后君子', scene: '把丑话说在前面，避免后续纠纷' }
        ],
        beatPercent: 65,
        rank: 12043
    },
    ARBP: {
        animal: '🐑',
        name: '温和协调者',
        role: '共识促成者',
        saving: '5-12%',
        rarity: '约 10%',
        strengths: [
            '擅长跨部门协调，是团队的"润滑剂"',
            '用温和的力量化解冲突，供应商愿意配合',
            '寻找双赢方案的能力强，长期合作稳定'
        ],
        weaknesses: [
            '太容易妥协，立场不够坚定',
            '天生讨厌冲突，成为供应商眼中的"软柿子"',
            'KPI 里"和谐"的权重可能比"降本"还高'
        ],
        actions: [
            '在核心利益上学会说"不"，非核心事项可灵活',
            '真正的双赢不是一味退让，而是找到价值最大化平衡点',
            '学习《强势沟通术》，温和但坚定'
        ],
        course: {
            name: '《跨部门协作与供应商纠纷调解》',
            teacher: '姜宏锋',
            price: '1299 元',
            link: 'https://youlian.com/course/conflict-resolution'
        },
        book: '《非暴力沟通》- 马歇尔·卢森堡',
        consult: '预约协调能力提升咨询（400-XXX-XXXX）',
        celebrity: '鲁肃',
        celebrityDesc: '忠厚长者，调和鼎鼐',
        quotes: [
            { text: '大家都不容易', scene: '表达理解，缓和紧张气氛' },
            { text: '找个折中方案', scene: '习惯性地寻求中间地带' },
            { text: '和气生财', scene: '相信良好关系能带来长期价值' }
        ],
        beatPercent: 58,
        rank: 18762
    },
    ATCD: {
        animal: '🐜',
        name: '效率优化师',
        role: '流程专家',
        saving: '12-20%',
        rarity: '约 12%',
        strengths: [
            '用标准化和流程化打造高效采购体系',
            'SOP 执行严格，团队效率提升 30%+',
            '相信好的制度胜过好人，体系化思维强'
        ],
        weaknesses: [
            '太迷信流程，缺乏灵活性',
            '业务部门急需采购时，你还在要求填完所有表单',
            '流程是为人服务的，不要本末倒置'
        ],
        actions: [
            '建立"绿色通道"机制，对紧急事项简化流程',
            '定期审视现有流程，删除不创造价值的环节',
            '最好的流程是让人感觉不到流程的存在'
        ],
        course: {
            name: '《采购流程优化与数字化系统实施》',
            teacher: '姜宏锋',
            price: '1799 元',
            link: 'https://youlian.com/course/process-optimization'
        },
        book: '《精益思想》- 詹姆斯·沃麦克',
        consult: '预约流程优化咨询（400-XXX-XXXX）',
        celebrity: '商鞅',
        celebrityDesc: '变法图强，制度至上',
        quotes: [
            { text: '按流程走', scene: '面对任何采购需求的第一反应' },
            { text: '这个有 SOP 吗？', scene: '习惯性地寻找标准作业程序' },
            { text: '效率就是成本', scene: '坚信流程优化能带来真金白银' }
        ],
        beatPercent: 79,
        rank: 6234
    },
    ATCP: {
        animal: '🦎',
        name: '数据驱动者',
        role: '量化分析师',
        saving: '10-18%',
        rarity: '约 9%',
        strengths: [
            '用数据说话，谈判时有理有据',
            '擅长从历史数据中发现降本机会',
            '每一个小数点都是钱，精细化能力强'
        ],
        weaknesses: [
            '只看数字，忽视人情世故',
            '用 Excel 模型算出"合理价格"时，忽略供应商实际困难',
            '给人留面子，就是给自己留后路'
        ],
        actions: [
            '在数据分析之外，增加"人情维度"的考量',
            '学会读懂数字背后的故事，理解供应商立场',
            '数据是工具，不是目的'
        ],
        course: {
            name: '《采购数据分析与成本建模实战》',
            teacher: '姜宏锋',
            price: '1599 元',
            link: 'https://youlian.com/course/data-analysis'
        },
        book: '《数据化决策》- 道格拉斯·哈伯德',
        consult: '预约数据分析能力提升咨询（400-XXX-XXXX）',
        celebrity: '韩信',
        celebrityDesc: '多多益善，数据为王',
        quotes: [
            { text: '数据不会说谎', scene: '用数据支撑自己的观点' },
            { text: '给我看历史走势', scene: '习惯性地要求数据支持' },
            { text: '算笔账给你听', scene: '用数字说服对方' }
        ],
        beatPercent: 75,
        rank: 9871
    },
    ATBD: {
        animal: '🦅',
        name: '果断执行者',
        role: '结果导向者',
        saving: '15-22%',
        rarity: '约 8%',
        strengths: [
            '雷厉风行，说一不二，谈判气场强大',
            '能抓住稍纵即逝的机会，决策速度快',
            '时间就是金钱，执行效率行业领先'
        ],
        weaknesses: [
            '太强势，容易得罪供应商',
            '供应商怕你，但也躲着你',
            '需要他们"救火"时，可能电话打不通'
        ],
        actions: [
            '在强势之外增加一点温度，谈判后一句感谢可能比砍价 1% 更有价值',
            '给供应商留面子，他们会给你里子',
            '学习《柔性领导力》，刚柔并济'
        ],
        course: {
            name: '《高压谈判与快速决策》',
            teacher: '姜宏锋',
            price: '1899 元',
            link: 'https://youlian.com/course/high-pressure-negotiation'
        },
        book: '《原则》- 瑞·达利欧',
        consult: '预约领导力优化咨询（400-XXX-XXXX）',
        celebrity: '曹操',
        celebrityDesc: '宁我负人，勿人负我',
        quotes: [
            { text: '今天必须定', scene: '设定明确截止时间，逼迫决策' },
            { text: '就这个价', scene: '直接亮出底线，不留讨价还价空间' },
            { text: '别废话', scene: '不耐烦的表现，可能伤害关系' }
        ],
        beatPercent: 82,
        rank: 4521
    },
    ATBP: {
        animal: '🐴',
        name: '团队推动者',
        role: '项目管理者',
        saving: '10-16%',
        rarity: '约 11%',
        strengths: [
            '善于协调各方资源，让团队高效运转',
            '相信团队力量大于个人，集思广益',
            '在背后默默推动项目前进'
        ],
        weaknesses: [
            '太依赖团队，个人决断力弱',
            '需要快速决策时，习惯性"开个会对齐"',
            '没有团队支持时显得手足无措'
        ],
        actions: [
            '培养独立决策能力：小事自己定，大事再讨论',
            '区分"需要共识"和"可以独断"的事项',
            '一个正确的独断胜过十个错误的共识'
        ],
        course: {
            name: '《采购项目统筹与跨部门协作》',
            teacher: '姜宏锋',
            price: '1399 元',
            link: 'https://youlian.com/course/project-management'
        },
        book: '《团队协作的五大障碍》- 帕特里克·兰西奥尼',
        consult: '预约团队管理能力咨询（400-XXX-XXXX）',
        celebrity: '萧何',
        celebrityDesc: '镇国家，抚百姓，给馈饷',
        quotes: [
            { text: '大家商量一下', scene: '习惯性地寻求团队意见' },
            { text: '开个会对齐', scene: '用会议推动项目进展' },
            { text: '分工协作', scene: '相信团队力量大于个人' }
        ],
        beatPercent: 68,
        rank: 11234
    },
    IRCD: {
        animal: '🦊',
        name: '创新探索者',
        role: '变革推动者',
        saving: '12-20%',
        rarity: '约 6%',
        strengths: [
            '不满足于现状，总想尝试新方法',
            '善于发现新供应商、新技术、新模式',
            '相信创新能带来突破性进展'
        ],
        weaknesses: [
            '太激进，风险意识不足',
            '踩过不少坑，有时为创新而创新',
            '老供应商的"老"是经过时间验证的可靠'
        ],
        actions: [
            '建立"创新沙盒"机制：小规模试点验证后再推广',
            '平衡创新与稳健，既不错过机会也不盲目冒险',
            '学习《精益创业》，快速试错，低成本验证'
        ],
        course: {
            name: '《新供应商开发与创新采购模式》',
            teacher: '姜宏锋',
            price: '1699 元',
            link: 'https://youlian.com/course/innovation-procurement'
        },
        book: '《创新者的窘境》- 克莱顿·克里斯坦森',
        consult: '预约创新策略咨询（400-XXX-XXXX）',
        celebrity: '王安石',
        celebrityDesc: '天变不足畏，祖宗不足法',
        quotes: [
            { text: '试试新的', scene: '面对传统方案时的本能反应' },
            { text: '为什么不能改？', scene: '挑战现有规则的勇气' },
            { text: '创新才有机会', scene: '坚信变革能带来突破' }
        ],
        beatPercent: 71,
        rank: 7823
    },
    IRCP: {
        animal: '🐕',
        name: '社交联结者',
        role: '人脉拓展者',
        saving: '8-15%',
        rarity: '约 10%',
        strengths: [
            '善于结交各方人士，build 起庞大的人脉网络',
            '消息灵通，在关键时刻总有人帮你',
            '饭局上能听到真话，信息渠道广'
        ],
        weaknesses: [
            '太依赖关系，专业能力不足',
            '花在社交上的时间比钻研业务还多',
            '行业变革来临时，人脉可能救不了你'
        ],
        actions: [
            '平衡社交与学习时间：每周至少 5 小时深度学习',
            '人脉是放大器，专业能力才是基数',
            '建立"人脉 - 能力"双轮驱动模型'
        ],
        course: {
            name: '《供应商关系拓展与行业资源整合》',
            teacher: '姜宏锋',
            price: '1499 元',
            link: 'https://youlian.com/course/networking'
        },
        book: '《人脉力》- 克林顿·凯利',
        consult: '预约人脉资源优化咨询（400-XXX-XXXX）',
        celebrity: '孟尝君',
        celebrityDesc: '门客三千，广结善缘',
        quotes: [
            { text: '我认识一个人', scene: '习惯性地用人脉解决问题' },
            { text: '饭桌上聊', scene: '相信非正式场合能谈成事' },
            { text: '圈内人都知道', scene: '用行业内部消息建立信任' }
        ],
        beatPercent: 63,
        rank: 15432
    },
    IRBD: {
        animal: '🦁',
        name: '风险投资者',
        role: '机会赌手',
        saving: '15-30%',
        rarity: '约 4%',
        strengths: [
            '敢于在关键时刻 all in，用超常规决策换取超额回报',
            '能抓住别人不敢碰的机会，收益惊人',
            '相信"撑死胆大的"，敢为人先'
        ],
        weaknesses: [
            '赌性太重，采购生涯像过山车',
            '一次豪赌成功让你封神，十次豪赌失败让你失业',
            '市场专治各种不服'
        ],
        actions: [
            '建立"赌注上限"机制：单次决策风险不超过总预算的 X%',
            '用小赌试探，大赌慎重',
            '活得久比赢得多更重要'
        ],
        course: {
            name: '《战略投资型采购与新市场开拓》',
            teacher: '姜宏锋',
            price: '2199 元',
            link: 'https://youlian.com/course/strategic-investment'
        },
        book: '《对赌》- 安妮·杜克',
        consult: '预约风险投资策略咨询（400-XXX-XXXX）',
        celebrity: '项羽',
        celebrityDesc: '破釜沉舟，背水一战',
        quotes: [
            { text: '梭哈', scene: '面对重大机会时的决断' },
            { text: '搏一搏', scene: '愿意为高回报承担高风险' },
            { text: '富贵险中求', scene: '坚信高风险才有高回报' }
        ],
        beatPercent: 91,
        rank: 1823
    },
    IRBP: {
        animal: '🦜',
        name: '魅力影响者',
        role: '说服艺术家',
        saving: '10-18%',
        rarity: '约 7%',
        strengths: [
            '善于用语言和气场影响他人',
            '在谈判桌上不战而屈人之兵',
            '供应商都被你说得心服口服'
        ],
        weaknesses: [
            '说得多做得少，落地能力弱',
            '擅长"画饼"，但饼能不能吃到嘴里是另一回事',
            '承诺的优惠可能大打折扣'
        ],
        actions: [
            '建立"承诺追踪"机制：每项条款都要书面确认并定期跟进',
            '把口头承诺转化为合同条款',
            '说得再好，不如白纸黑字'
        ],
        course: {
            name: '《核心谈判代表与高层对接技巧》',
            teacher: '姜宏锋',
            price: '1999 元',
            link: 'https://youlian.com/course/influencer'
        },
        book: '《说服力》- 罗伯特·西奥迪尼',
        consult: '预约影响力提升咨询（400-XXX-XXXX）',
        celebrity: '苏秦',
        celebrityDesc: '合纵连横，三寸不烂之舌',
        quotes: [
            { text: '你听我说', scene: '习惯性地主导对话' },
            { text: '相信我', scene: '用个人魅力建立信任' },
            { text: '包在我身上', scene: '慷慨承诺，但可能无法兑现' }
        ],
        beatPercent: 77,
        rank: 5672
    },
    ITCD: {
        animal: '🦈',
        name: '市场洞察者',
        role: '趋势分析师',
        saving: '12-22%',
        rarity: '约 6%',
        strengths: [
            '善于洞察市场周期，在价格低谷时囤货',
            '预判正确能省大钱，用时间换空间',
            '花大量时间研究市场趋势和宏观环境'
        ],
        weaknesses: [
            '过度分析，行动迟缓',
            '因为"时机未到"错过最佳入场点',
            '市场永远是对的，分析再完美不行动也等于零'
        ],
        actions: [
            '设定"分析 - 行动"比例：30% 时间分析，70% 时间行动',
            '建立触发机制：指标达到阈值时自动执行预设策略',
            '不再犹豫，行动才是王道'
        ],
        course: {
            name: '《市场价格预测与大宗商品采购》',
            teacher: '姜宏锋',
            price: '1899 元',
            link: 'https://youlian.com/course/market-forecast'
        },
        book: '《周期》- 霍华德·马克斯',
        consult: '预约市场趋势分析咨询（400-XXX-XXXX）',
        celebrity: '范蠡',
        celebrityDesc: '旱则资舟，水则资车',
        quotes: [
            { text: '趋势不对', scene: '用宏观分析支撑决策' },
            { text: '再等等', scene: '习惯性地等待更好时机' },
            { text: '时机未到', scene: '相信正确的时机比正确的决策更重要' }
        ],
        beatPercent: 84,
        rank: 3892
    },
    ITCP: {
        animal: '🐆',
        name: '机会捕捉者',
        role: '敏捷反应者',
        saving: '10-20%',
        rarity: '约 7%',
        strengths: [
            '反应敏捷，行动迅速',
            '在机会出现时能第一时间抓住',
            '擅长打遭遇战，手慢无是真的'
        ],
        weaknesses: [
            '太急躁，缺乏长远规划',
            '经常陷入"捡了芝麻丢西瓜"的困境',
            '擅长打遭遇战，但不擅长打持久战'
        ],
        actions: [
            '建立"机会评估"框架：用 5 分钟快速判断机会的价值和风险',
            '区分"真机会"和"伪机会"',
            '有时候，错过一个机会比抓住一个错误机会更好'
        ],
        course: {
            name: '《市场波动应对与紧急议价技巧》',
            teacher: '姜宏锋',
            price: '1599 元',
            link: 'https://youlian.com/course/opportunity-capture'
        },
        book: '《闪电式扩张》- 里德·霍夫曼',
        consult: '预约敏捷决策能力咨询（400-XXX-XXXX）',
        celebrity: '霍去病',
        celebrityDesc: '封狼居胥，闪电战专家',
        quotes: [
            { text: '先拿下再说', scene: '面对机会时的第一反应' },
            { text: '手慢无', scene: '相信速度是竞争的关键' },
            { text: '机会不等人', scene: '用行动证明果断的价值' }
        ],
        beatPercent: 73,
        rank: 8234
    },
    ITBD: {
        animal: '🐲',
        name: '快速决策者',
        role: '直觉行动派',
        saving: '12-18%',
        rarity: '约 5%',
        strengths: [
            '决策速度快得惊人，凭多年积累的直觉',
            '在紧急情况下表现出色',
            '相信直觉，敢于拍板'
        ],
        weaknesses: [
            '太依赖直觉，缺乏数据支撑',
            '犯过一些"低级错误"',
            '直觉是经验的结晶，但没有数据验证的直觉只是猜测'
        ],
        actions: [
            '建立"快速验证"机制：直觉决策后用 10 分钟收集关键数据验证',
            '在"快"和"准"之间找平衡',
            '有时候，慢 10 分钟能避免 10 天的麻烦'
        ],
        course: {
            name: '《快速采购项目与应急响应》',
            teacher: '姜宏锋',
            price: '1499 元',
            link: 'https://youlian.com/course/rapid-decision'
        },
        book: '《思考，快与慢》- 丹尼尔·卡尼曼',
        consult: '预约决策能力提升咨询（400-XXX-XXXX）',
        celebrity: '李云龙',
        celebrityDesc: '狭路相逢勇者胜',
        quotes: [
            { text: '就这么定了', scene: '快速拍板的标志性语言' },
            { text: '别想太多', scene: '相信过度思考会错失良机' },
            { text: '先干再说', scene: '用行动代替犹豫' }
        ],
        beatPercent: 80,
        rank: 4123
    },
    ITBP: {
        animal: '🐙',
        name: '灵活适应者',
        role: '变通专家',
        saving: '8-15%',
        rarity: '约 9%',
        strengths: [
            '适应能力极强，什么环境都能生存',
            '善于根据形势调整策略',
            '没有固定套路就是最好的套路'
        ],
        weaknesses: [
            '太圆滑，缺乏原则',
            '显得没有立场，供应商摸不清你的底线',
            '今天可以这样，明天可以那样，结果是谁都不怕你'
        ],
        actions: [
            '建立"核心原则清单"：明确哪些事项可以灵活，哪些必须坚守',
            '在原则问题上学会说"不"，非原则事项展现灵活',
            '有原则的灵活，才是智慧'
        ],
        course: {
            name: '《多变环境采购与应急方案制定》',
            teacher: '姜宏锋',
            price: '1399 元',
            link: 'https://youlian.com/course/flexible-procurement'
        },
        book: '《反脆弱》- 纳西姆·塔勒布',
        consult: '预约灵活性与原则性平衡咨询（400-XXX-XXXX）',
        celebrity: '韦小宝',
        celebrityDesc: '见风使舵，左右逢源',
        quotes: [
            { text: '看情况', scene: '习惯性地保留选择空间' },
            { text: '都可以', scene: '用灵活避免冲突' },
            { text: '再说吧', scene: '拖延决策，等待形势明朗' }
        ],
        beatPercent: 61,
        rank: 16782
    }
};
