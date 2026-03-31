// 采购谈判风格测试 - 场景对话版 v4.0
// 8 场景 × 7 轮 = 56 轮对话
// 每轮二选一，测量 4 个维度（A/I, R/T, C/B, D/P）

var scenes = [
    // ========== 场景 1：价格谈判 ==========
    {
        id: 1,
        name: '价格谈判',
        background: '合作 2 年的核心供应商"宏达电子"突然发来涨价通知，因原材料上涨，所有元器件涨价 20%。你是采购经理，需要处理这次涨价危机。',
        opponent: '宏达电子销售总监 - 张总',
        rounds: [
            {
                dim: 'AI',
                opponent: '合作 2 年了，我也不绕弯子。铜价涨了 30%，我们实在扛不住，所有元器件涨价 20%，下月 1 号生效。',
                options: [
                    { text: '铜价我天天看，没涨这么多吧？', score: 'A' },
                    { text: '这价格虚高，咱俩都清楚。', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '哎呀，你可能只看期货价。我们实际采购含运费、关税，涨得更多。这是成本表。',
                options: [
                    { text: '理解你们难处，但 20% 太高了，再商量商量？', score: 'R' },
                    { text: '商业归商业，按数据说话。', score: 'T' }
                ]
            },
            {
                dim: 'CB',
                opponent: '现在供应链紧张，很多客户排队要货。我是优先保你们。',
                options: [
                    { text: '那我们得评估风险，开发备选供应商了。', score: 'C' },
                    { text: '行，我相信你，说说具体方案。', score: 'B' }
                ]
            },
            {
                dim: 'DP',
                opponent: '备选供应商？现在哪家产能不紧张？',
                options: [
                    { text: '不试试怎么知道？我们有的是选择。', score: 'D' },
                    { text: '一起找解决方案呗，比如签年度合同锁价？', score: 'P' }
                ]
            },
            {
                dim: 'AI',
                opponent: '年度合同可以，但价格得按 18% 涨。',
                options: [
                    { text: '18% 不可能，最多 10%。', score: 'A' },
                    { text: '行，你算算成本，给我个实在价。', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '10%... 让我跟公司争取一下。这样，我看看成本结构哪里能优化。',
                options: [
                    { text: '张总费心了，等你好消息。', score: 'R' },
                    { text: '好，记得提供详细成本分析。', score: 'T' }
                ]
            },
            {
                dim: 'CB',
                opponent: '争取到了，14% 涨价，但预付款从 30% 提到 40%。',
                options: [
                    { text: '14% 可以，预付款我得跟财务商量。', score: 'C' },
                    { text: '行，就按你说的办。', score: 'B' }
                ]
            }
        ]
    },

    // ========== 场景 2：交付危机 ==========
    {
        id: 2,
        name: '交付危机',
        background: '供应商因机器故障无法按时交货，产线面临停工。你是采购经理，需要紧急处理这次交付危机。',
        opponent: '供应商生产总监 - 李总',
        rounds: [
            {
                dim: 'DP',
                opponent: '王经理，出事了。机器故障，这批货得延期一周。',
                options: [
                    { text: '一周？我们产线得停工！损失谁承担？', score: 'D' },
                    { text: '先别急，一起想想补救办法。', score: 'P' }
                ]
            },
            {
                dim: 'AI',
                opponent: '我们正在抢修，但配件得从德国运。',
                options: [
                    { text: '配件型号发我，我帮你们找现货。', score: 'A' },
                    { text: '德国运过来得多久？有准信吗？', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '大概 5 天。王经理，这次真是意外。',
                options: [
                    { text: '意外归意外，合同条款得按约定来。', score: 'T' },
                    { text: '理解，谁都有困难时候。', score: 'R' }
                ]
            },
            {
                dim: 'CB',
                opponent: '那... 能不能先把合格的那 30% 发了？',
                options: [
                    { text: '行，但剩下 70% 得给确切时间。', score: 'C' },
                    { text: '30% 不够，至少得 60%。', score: 'B' }
                ]
            },
            {
                dim: 'DP',
                opponent: '60% 真做不到，机器还没修好。',
                options: [
                    { text: '做不到也得做，这是你们的责任。', score: 'D' },
                    { text: '那这样，我帮你们联系同行借产能？', score: 'P' }
                ]
            },
            {
                dim: 'AI',
                opponent: '这... 要是能借到当然好。',
                options: [
                    { text: '我现在就打几个电话问问。', score: 'A' },
                    { text: '你们自己没同行资源吗？', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '有是有，但人家也得排期。',
                options: [
                    { text: '行，我等你消息，尽快回复我。', score: 'R' },
                    { text: '别等了，直接要他们联系方式。', score: 'T' }
                ]
            }
        ]
    },

    // ========== 场景 3：降本压力 ==========
    {
        id: 3,
        name: '降本压力',
        background: '老板要求今年降本 15%，供应商说已经到底了。你是采购经理，需要完成这个艰巨目标。',
        opponent: '供应商总经理 - 陈总',
        rounds: [
            {
                dim: 'CB',
                opponent: '老板要求今年降本 15%，你们得配合。',
                options: [
                    { text: '15% 太高了，真做不到。', score: 'C' },
                    { text: '行，我看看哪里能优化。', score: 'B' }
                ]
            },
            {
                dim: 'DP',
                opponent: '真不是不配合，利润已经压到最低了。',
                options: [
                    { text: '最低也得再降，不然我没法交差。', score: 'D' },
                    { text: '一起想想办法，比如优化包装？', score: 'P' }
                ]
            },
            {
                dim: 'AI',
                opponent: '包装优化... 大概能省 2% 吧。',
                options: [
                    { text: '2% 不够，还有其他空间吗？', score: 'A' },
                    { text: '行，2% 先定下来，继续找。', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '物流也能优化，但得改运输方式。',
                options: [
                    { text: '改运输方式风险大吗？', score: 'R' },
                    { text: '可以试试，你出方案。', score: 'T' }
                ]
            },
            {
                dim: 'CB',
                opponent: '风险有一点，但可控。',
                options: [
                    { text: '那得先做小批量测试。', score: 'C' },
                    { text: '行，直接上，有问题再调整。', score: 'B' }
                ]
            },
            {
                dim: 'AI',
                opponent: '测试得多久？',
                options: [
                    { text: '一周够了，我盯着。', score: 'A' },
                    { text: '看你安排，尽快就行。', score: 'I' }
                ]
            },
            {
                dim: 'DP',
                opponent: '那... 先这样定？',
                options: [
                    { text: '行，但 15% 目标还差得远，继续找。', score: 'D' },
                    { text: '好，有进展随时沟通。', score: 'P' }
                ]
            }
        ]
    },

    // ========== 场景 4：合同条款 ==========
    {
        id: 4,
        name: '合同条款',
        background: '新供应商要求预付款 50%，公司规定最多 30%。你是采购经理，需要敲定这个合同。',
        opponent: '供应商销售总监 - 刘总',
        rounds: [
            {
                dim: 'RT',
                opponent: '新合作，公司规定预付款 50%。',
                options: [
                    { text: '50% 太高了，我们最多 30%。', score: 'T' },
                    { text: '行，我走内部审批流程。', score: 'R' }
                ]
            },
            {
                dim: 'CB',
                opponent: '30% 真不行，原材料得现款采购。',
                options: [
                    { text: '那得先看看你们财务状况。', score: 'C' },
                    { text: '40% 怎么样？各退一步。', score: 'B' }
                ]
            },
            {
                dim: 'DP',
                opponent: '40%... 我得跟老板商量。',
                options: [
                    { text: '行，等你们消息。', score: 'D' },
                    { text: '要不现在打个电话问问？', score: 'P' }
                ]
            },
            {
                dim: 'AI',
                opponent: '老板说最低 45%，不能再低了。',
                options: [
                    { text: '45% 可以，但价格得再降 2%。', score: 'A' },
                    { text: '行，45% 就 45%。', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '价格真降不了了，利润太薄。',
                options: [
                    { text: '理解，那预付款还是按 30% 吧。', score: 'R' },
                    { text: '行，那价格就这样。', score: 'T' }
                ]
            },
            {
                dim: 'CB',
                opponent: '这... 要不 35%？',
                options: [
                    { text: '35% 可以，但得写进合同。', score: 'C' },
                    { text: '行，听你的。', score: 'B' }
                ]
            },
            {
                dim: 'DP',
                opponent: '好，35% 预付款，价格不变。',
                options: [
                    { text: '成交，合同发我审核。', score: 'D' },
                    { text: '合作愉快！', score: 'P' }
                ]
            }
        ]
    },

    // ========== 场景 5：质量争议 ==========
    {
        id: 5,
        name: '质量争议',
        background: '到货检验发现 30% 产品不合格，供应商说符合标准。你是采购经理，需要处理这次质量争议。',
        opponent: '供应商质量总监 - 赵总',
        rounds: [
            {
                dim: 'AI',
                opponent: '你们说 30% 不合格，有检测报告吗？',
                options: [
                    { text: '报告在这，逐项检测数据。', score: 'A' },
                    { text: '凭经验看，这批次确实有问题。', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '这... 我们出厂检验是合格的。',
                options: [
                    { text: '那可能是运输问题？一起查查。', score: 'R' },
                    { text: '合格不可能，返工吧。', score: 'T' }
                ]
            },
            {
                dim: 'CB',
                opponent: '运输我们有保险，但得第三方鉴定。',
                options: [
                    { text: '行，找第三方，费用谁出？', score: 'C' },
                    { text: '不用那么麻烦，直接返工。', score: 'B' }
                ]
            },
            {
                dim: 'DP',
                opponent: '费用... 一人一半？',
                options: [
                    { text: '凭什么一半？明明是你们的问题。', score: 'D' },
                    { text: '行，一人一半，赶紧处理。', score: 'P' }
                ]
            },
            {
                dim: 'AI',
                opponent: '第三方下周来，得等 5 天。',
                options: [
                    { text: '5 天太久，产线等不了。', score: 'A' },
                    { text: '行，那就等 5 天。', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '要不这样，先补发一批合格的？',
                options: [
                    { text: '可以，但费用得你们承担。', score: 'T' },
                    { text: '好，尽快安排。', score: 'R' }
                ]
            },
            {
                dim: 'CB',
                opponent: '没问题，明天就发。',
                options: [
                    { text: '行，发货单发我确认。', score: 'C' },
                    { text: '好，相信你。', score: 'B' }
                ]
            }
        ]
    },

    // ========== 场景 6：独家协议 ==========
    {
        id: 6,
        name: '独家协议',
        background: '供应商想签 3 年独家协议，换取价格优惠 15%。你是采购经理，需要评估这个长期协议。',
        opponent: '供应商总经理 - 孙总',
        rounds: [
            {
                dim: 'RT',
                opponent: '签个 3 年独家，给你们 15% 优惠。',
                options: [
                    { text: '3 年太长，风险太大。', score: 'T' },
                    { text: '15% 优惠... 具体怎么算？', score: 'R' }
                ]
            },
            {
                dim: 'CB',
                opponent: '每年采购额达 5000 万，返 15%。',
                options: [
                    { text: '5000 万太高，3000 万怎么样？', score: 'C' },
                    { text: '行，5000 万可以。', score: 'B' }
                ]
            },
            {
                dim: 'DP',
                opponent: '3000 万... 我得跟公司申请。',
                options: [
                    { text: '行，等你们消息。', score: 'D' },
                    { text: '要不现在问问？', score: 'P' }
                ]
            },
            {
                dim: 'AI',
                opponent: '公司说 3000 万也行，但独家得签。',
                options: [
                    { text: '独家可以，但得加退出条款。', score: 'A' },
                    { text: '行，独家就独家。', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '退出条款... 这个不太好操作。',
                options: [
                    { text: '不签退出，我没法跟老板交代。', score: 'T' },
                    { text: '行，那先不签退出。', score: 'R' }
                ]
            },
            {
                dim: 'CB',
                opponent: '这样，加个业绩不达标自动解除？',
                options: [
                    { text: '可以，写进合同。', score: 'C' },
                    { text: '行，听你的。', score: 'B' }
                ]
            },
            {
                dim: 'DP',
                opponent: '好，那就这么定？',
                options: [
                    { text: '合同发我，审核完签字。', score: 'D' },
                    { text: '合作愉快！', score: 'P' }
                ]
            }
        ]
    },

    // ========== 场景 7：新供应商 ==========
    {
        id: 7,
        name: '新供应商',
        background: '主要供应商垄断，你想引入备选供应商打破被动。你是采购经理，需要处理这个微妙局面。',
        opponent: '现有供应商销售总监 - 周总',
        rounds: [
            {
                dim: 'DP',
                opponent: '听说你们在接触其他供应商？',
                options: [
                    { text: '多元化供应，这是公司策略。', score: 'D' },
                    { text: '随便聊聊，还没定。', score: 'P' }
                ]
            },
            {
                dim: 'AI',
                opponent: '我们合作 5 年了，这有点不厚道吧？',
                options: [
                    { text: '5 年归 5 年，得看数据和绩效。', score: 'A' },
                    { text: '我也觉得，但上面有要求。', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '那我们得重新谈谈合作条件了。',
                options: [
                    { text: '可以，拿具体方案出来。', score: 'T' },
                    { text: '行，你说说看。', score: 'R' }
                ]
            },
            {
                dim: 'CB',
                opponent: '价格再降 5%，我保证优先供你们。',
                options: [
                    { text: '5% 可以，但得签保供协议。', score: 'C' },
                    { text: '行，5% 定了。', score: 'B' }
                ]
            },
            {
                dim: 'AI',
                opponent: '保供协议得明确违约条款。',
                options: [
                    { text: '条款我让法务起草。', score: 'A' },
                    { text: '行，相信你。', score: 'I' }
                ]
            },
            {
                dim: 'DP',
                opponent: '违约按合同金额 20% 赔付？',
                options: [
                    { text: '20% 太低，至少 50%。', score: 'D' },
                    { text: '行，20% 可以。', score: 'P' }
                ]
            },
            {
                dim: 'CB',
                opponent: '50%... 行，就这样。',
                options: [
                    { text: '合同发我审核。', score: 'C' },
                    { text: '合作愉快！', score: 'B' }
                ]
            }
        ]
    },

    // ========== 场景 8：技术升级 ==========
    {
        id: 8,
        name: '技术升级',
        background: '供应商推荐新技术，能降本 20%，但未经验证。你是采购经理，需要评估是否采用。',
        opponent: '供应商技术总监 - 吴总',
        rounds: [
            {
                dim: 'AI',
                opponent: '我们有新技术，能帮你们降本 20%。',
                options: [
                    { text: '有案例吗？发我看看。', score: 'A' },
                    { text: '20%？说说具体原理。', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '案例有，但签了保密协议。',
                options: [
                    { text: '理解，那能安排参观吗？', score: 'R' },
                    { text: '保密协议签了就能看？', score: 'T' }
                ]
            },
            {
                dim: 'CB',
                opponent: '可以，但得先交保证金。',
                options: [
                    { text: '保证金多少？能退吗？', score: 'C' },
                    { text: '行，多少？我安排。', score: 'B' }
                ]
            },
            {
                dim: 'DP',
                opponent: '10 万，测试完全额退。',
                options: [
                    { text: '10 万太多，5 万吧。', score: 'D' },
                    { text: '行，10 万就 10 万。', score: 'P' }
                ]
            },
            {
                dim: 'AI',
                opponent: '5 万... 行，测试多久？',
                options: [
                    { text: '一周够了，我盯着。', score: 'A' },
                    { text: '看你安排，尽快就行。', score: 'I' }
                ]
            },
            {
                dim: 'RT',
                opponent: '一周有点紧，得两周。',
                options: [
                    { text: '行，两周就两周。', score: 'R' },
                    { text: '太久了，一周必须出结果。', score: 'T' }
                ]
            },
            {
                dim: 'DP',
                opponent: '那... 先交保证金？',
                options: [
                    { text: '合同发我，审核完打款。', score: 'D' },
                    { text: '好，账号发我。', score: 'P' }
                ]
            }
        ]
    }
];

// 4 个场景包，每包确保 A7+R7+C7+D7
var scenePackages = [
    [1, 2, 3, 4],  // 包 1：经典包
    [5, 6, 7, 8],  // 包 2：进阶包
    [1, 6, 7, 4],  // 包 3：混合包 A
    [5, 2, 3, 8]   // 包 4：混合包 B
];

// 导出场景数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { scenes, scenePackages };
}
