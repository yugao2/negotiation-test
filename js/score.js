/**
 * 采购谈判风格测试 - 计分逻辑
 * 
 * 计分规则：
 * - 维度 1（决策风格）：A≥4 为分析型 (A)，否则为直觉型 (I)
 * - 维度 2（关系导向）：R≥4 为关系型 (R)，否则为任务型 (T)
 * - 维度 3（风险态度）：C≥4 为谨慎型 (C)，否则为大胆型 (B)
 * - 维度 4（沟通方式）：D≥4 为直接型 (D)，否则为说服型 (P)
 */

/**
 * 计算测试结果的函数
 * @param {Array} answers - 用户答案数组，每个元素是选项的 score 值
 * @returns {Object} 包含风格代码和详细得分的对象
 */
function calculateResult(answers) {
    // 初始化各维度计数器
    const dimensions = {
        AI: { A: 0, I: 0 },  // 决策风格
        RT: { R: 0, T: 0 },  // 关系导向
        CB: { C: 0, B: 0 },  // 风险态度
        DP: { D: 0, P: 0 }   // 沟通方式
    };

    // 统计各维度得分
    answers.forEach((answer, index) => {
        if (index < 7) {
            // 维度 1：决策风格 (题 1-7)
            dimensions.AI[answer]++;
        } else if (index < 14) {
            // 维度 2：关系导向 (题 8-14)
            dimensions.RT[answer]++;
        } else if (index < 21) {
            // 维度 3：风险态度 (题 15-21)
            dimensions.CB[answer]++;
        } else {
            // 维度 4：沟通方式 (题 22-28)
            dimensions.DP[answer]++;
        }
    });

    // 确定每个维度的类型
    const type1 = dimensions.AI.A >= 4 ? 'A' : 'I';  // 分析型 vs 直觉型
    const type2 = dimensions.RT.R >= 4 ? 'R' : 'T';  // 关系型 vs 任务型
    const type3 = dimensions.CB.C >= 4 ? 'C' : 'B';  // 谨慎型 vs 大胆型
    const type4 = dimensions.DP.D >= 4 ? 'D' : 'P';  // 直接型 vs 说服型

    // 组合成 4 字母代码
    const styleCode = type1 + type2 + type3 + type4;

    // 返回结果
    return {
        styleCode: styleCode,
        dimensions: {
            AI: {
                type: type1,
                A: dimensions.AI.A,
                I: dimensions.AI.I,
                percentage: Math.round((dimensions.AI.A / 7) * 100)
            },
            RT: {
                type: type2,
                R: dimensions.RT.R,
                T: dimensions.RT.T,
                percentage: Math.round((dimensions.RT.R / 7) * 100)
            },
            CB: {
                type: type3,
                C: dimensions.CB.C,
                B: dimensions.CB.B,
                percentage: Math.round((dimensions.CB.C / 7) * 100)
            },
            DP: {
                type: type4,
                D: dimensions.DP.D,
                P: dimensions.DP.P,
                percentage: Math.round((dimensions.DP.D / 7) * 100)
            }
        },
        rawScores: dimensions
    };
}

/**
 * 根据风格代码获取风格详情
 * @param {string} code - 4 字母风格代码
 * @returns {Object|null} 风格详情对象
 */
function getStyleByCode(code) {
    if (typeof styles !== 'undefined' && styles[code]) {
        return styles[code];
    }
    return null;
}

/**
 * 验证答案是否完整
 * @param {Array} answers - 答案数组
 * @returns {boolean} 是否完整
 */
function validateAnswers(answers) {
    return answers && answers.length === 28;
}

/**
 * 保存答案到本地存储
 * @param {Array} answers - 答案数组
 */
function saveAnswers(answers) {
    localStorage.setItem('testAnswers', JSON.stringify(answers));
}

/**
 * 从本地存储获取答案
 * @returns {Array|null} 答案数组
 */
function getSavedAnswers() {
    const saved = localStorage.getItem('testAnswers');
    return saved ? JSON.parse(saved) : null;
}

/**
 * 清除保存的答案
 */
function clearSavedAnswers() {
    localStorage.removeItem('testAnswers');
    localStorage.removeItem('testStartTime');
    localStorage.removeItem('currentQuestionIndex');
}

// 导出函数（用于 Node.js 环境）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateResult,
        getStyleByCode,
        validateAnswers,
        saveAnswers,
        getSavedAnswers,
        clearSavedAnswers
    };
}
