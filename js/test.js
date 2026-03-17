/**
 * 采购谈判风格测试 - 测试页交互逻辑
 */

// 当前题目索引（0-based）
let currentQuestionIndex = 0;

// 用户答案数组
let userAnswers = [];

// 初始化测试页
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否有未完成的答案
    const savedAnswers = getSavedAnswers();
    const savedIndex = localStorage.getItem('currentQuestionIndex');
    
    if (savedAnswers && savedAnswers.length > 0 && savedIndex !== null) {
        userAnswers = savedAnswers;
        currentQuestionIndex = parseInt(savedIndex);
        
        // 如果已经完成所有题目，跳转到结果页
        if (currentQuestionIndex >= 28) {
            window.location.href = 'result.html';
            return;
        }
    }
    
    // 渲染当前题目
    renderQuestion();
    updateProgress();
    updateNavigation();
});

/**
 * 渲染当前题目
 */
function renderQuestion() {
    const question = questions[currentQuestionIndex];
    const questionCard = document.getElementById('questionCard');
    
    // 添加动画效果
    questionCard.classList.remove('fade-in');
    void questionCard.offsetWidth; // 触发重绘
    questionCard.classList.add('fade-in');
    
    // 更新题目文本
    document.getElementById('questionText').textContent = question.text;
    
    // 生成选项 HTML
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionItem = document.createElement('div');
        optionItem.className = 'option-item';
        optionItem.dataset.option = option.label;
        optionItem.onclick = () => selectOption(option.label);
        
        // 如果已选择，添加选中状态
        if (userAnswers[currentQuestionIndex] === option.score) {
            optionItem.classList.add('selected');
        }
        
        optionItem.innerHTML = `
            <div class="option-label">${option.label}</div>
            <div class="option-text">${option.text}</div>
        `;
        
        optionsContainer.appendChild(optionItem);
    });
}

/**
 * 选择选项
 * @param {string} optionLabel - 选项标签（A/B/C/D）
 */
function selectOption(optionLabel) {
    // 移除所有选项的选中状态
    const optionItems = document.querySelectorAll('.option-item');
    optionItems.forEach(item => item.classList.remove('selected'));
    
    // 添加当前选项的选中状态
    const selectedItem = document.querySelector(`[data-option="${optionLabel}"]`);
    if (selectedItem) {
        selectedItem.classList.add('selected');
    }
    
    // 保存答案
    const question = questions[currentQuestionIndex];
    const selectedOption = question.options.find(opt => opt.label === optionLabel);
    userAnswers[currentQuestionIndex] = selectedOption.score;
    
    // 自动进入下一题（延迟 300ms 让用户看到选择效果）
    setTimeout(() => {
        if (currentQuestionIndex < 27) {
            nextQuestion();
        }
    }, 300);
}

/**
 * 上一题
 */
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateProgress();
        updateNavigation();
        saveProgress();
    }
}

/**
 * 下一题
 */
function nextQuestion() {
    // 检查是否已选择答案
    if (!userAnswers[currentQuestionIndex]) {
        alert('请先选择一个选项');
        return;
    }
    
    if (currentQuestionIndex < 27) {
        currentQuestionIndex++;
        renderQuestion();
        updateProgress();
        updateNavigation();
        saveProgress();
    } else {
        // 完成所有题目，跳转到结果页
        finishTest();
    }
}

/**
 * 更新进度条
 */
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / 28) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
}

/**
 * 更新导航按钮状态
 */
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // 上一题按钮
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // 下一题按钮文本
    if (currentQuestionIndex === 27) {
        nextBtn.innerHTML = '查看结果 →';
    } else {
        nextBtn.innerHTML = '下一题 →';
    }
}

/**
 * 保存进度到本地存储
 */
function saveProgress() {
    saveAnswers(userAnswers);
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
}

/**
 * 完成测试
 */
function finishTest() {
    // 验证答案完整性
    if (userAnswers.length !== 28) {
        alert('请完成所有题目');
        return;
    }
    
    // 保存最终答案
    saveAnswers(userAnswers);
    
    // 记录完成时间
    const startTime = localStorage.getItem('testStartTime');
    if (startTime) {
        const duration = Math.round((Date.now() - parseInt(startTime)) / 1000);
        localStorage.setItem('testDuration', duration);
    }
    
    // 跳转到结果页
    window.location.href = 'result.html';
}

/**
 * 键盘导航支持
 */
document.addEventListener('keydown', function(e) {
    // 数字键 1-4 选择选项
    if (e.key >= '1' && e.key <= '4') {
        const question = questions[currentQuestionIndex];
        const optionIndex = parseInt(e.key) - 1;
        if (question.options[optionIndex]) {
            selectOption(question.options[optionIndex].label);
        }
    }
    
    // 左右方向键切换题目
    if (e.key === 'ArrowLeft') {
        prevQuestion();
    }
    if (e.key === 'ArrowRight') {
        nextQuestion();
    }
});
