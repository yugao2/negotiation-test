// 提取的内联 JS 代码
var currentTeam = null;
var teamMembers = [];
var currentUserResult = null;

function goHome() {
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('testPage').classList.add('hidden');
    document.getElementById('resultPage').classList.add('hidden');
    document.getElementById('teamPage').classList.add('hidden');
    document.getElementById('myPage').classList.add('hidden');
    document.getElementById('topNav').style.display = 'flex';
    document.getElementById('navMyBtn').style.display = 'block';
}

function showTopNav() {
    document.getElementById('topNav').style.display = 'flex';
}

function hideTopNav() {
    document.getElementById('topNav').style.display = 'none';
}

function updateMyPage() {
    var savedResult = localStorage.getItem('myTestResult');
    if (savedResult) {
        currentUserResult = JSON.parse(savedResult);
        document.getElementById('myStyleCode').textContent = currentUserResult.code;
        document.getElementById('myStyleName').textContent = currentUserResult.name;
        document.getElementById('myResultAnimal').textContent = currentUserResult.animal;
    }
    var savedTeam = localStorage.getItem('currentTeam');
    if (savedTeam) {
        currentTeam = JSON.parse(savedTeam);
        document.getElementById('myTeamText').innerHTML = '<strong>' + currentTeam.name + '</strong><br>邀请码：' + currentTeam.inviteCode;
        document.getElementById('createOrJoinBtn').textContent = '📊 查看';
    }
}

function showCreateTeamSuccessModal() {
    document.getElementById('createTeamModal').style.display = 'none';
    document.getElementById('createTeamSuccessModal').style.display = 'flex';
    document.getElementById('teamNameSuccess').textContent = currentTeam.name;
    document.getElementById('inviteCodeSuccess').textContent = currentTeam.inviteCode;
}

function showJoinTeamModal() {
    document.getElementById('joinTeamModal').style.display = 'flex';
    document.getElementById('inviteCodeInput').value = '';
}

function joinTeam() {
    var code = document.getElementById('inviteCodeInput').value.trim().toUpperCase();
    if (!code || code.length !== 8) {
        alert('请输入 8 位邀请码');
        return;
    }
    currentTeam = {
        name: '团队-' + code,
        inviteCode: code,
        members: []
    };
    localStorage.setItem('currentTeam', JSON.stringify(currentTeam));
    document.getElementById('joinTeamModal').style.display = 'none';
    alert('✅ 加入团队成功！');
    updateMyPage();
}

function createTeamFromResult() {
    var code = currentUserResult ? currentUserResult.code : 'ARCD';
    var name = '谈判风格团队-' + code;
    var inviteCode = code + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    currentTeam = {
        name: name,
        inviteCode: inviteCode,
        members: [currentUserResult || {code: code, name: '用户'}]
    };
    localStorage.setItem('currentTeam', JSON.stringify(currentTeam));
    showCreateTeamSuccessModal();
}

function showResult(code) {
    document.getElementById('testPage').classList.add('hidden');
    document.getElementById('resultPage').classList.remove('hidden');
    hideTopNav();
}

function generateAndShare(mode) {
    var code = document.getElementById('code').textContent;
    var style = styles[code];
    var canvas = document.getElementById('posterCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 800;
    var gradient = ctx.createLinearGradient(0, 0, 0, 800);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 800);
}

function retakeTest() {
    answers = [];
    dimensionScores = { A: 0, I: 0, R: 0, T: 0, C: 0, B: 0, D: 0, P: 0 };
    currentIndex = 0;
    document.getElementById('resultPage').classList.add('hidden');
    document.getElementById('homePage').classList.remove('hidden');
}

function updateProgress() {
    var pct = ((currentIndex + 1) / 28) * 100;
    var progressBar = document.getElementById('progressBar');
    progressBar.style.width = pct + '%';
    if ((currentIndex + 1) % 7 === 1 && currentIndex > 0) {
        progressBar.classList.add('milestone');
    }
    var stage = Math.floor(currentIndex / 7) + 1;
    document.getElementById('progressText').innerHTML = '<strong>' + (currentIndex + 1) + '</strong> / 28 · 第 ' + stage + ' 阶段/共 4 阶段';
}

function updateNav() {
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').innerHTML = currentIndex === 27 ? '查看结果 →' : '下一题 →';
}

function clearAllData() {
    if (confirm('确定要清除所有数据吗？')) {
        localStorage.clear();
        location.reload();
    }
}

var currentIndex = 0;
var answers = [];
var dimensionScores = { A: 0, I: 0, R: 0, T: 0, C: 0, B: 0, D: 0, P: 0 };

function startTest() {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('testPage').classList.remove('hidden');
    hideTopNav();
    renderQuestion();
    updateProgress();
}

function renderQuestion() {
    var q = questions[currentIndex];
    document.getElementById('questionText').innerHTML = q.q;
    var container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    for (var i = 0; i < q.options.length; i++) {
        var opt = q.options[i];
        var div = document.createElement('div');
        div.className = 'option';
        if (answers[currentIndex] === opt.dim) div.classList.add('selected');
        div.innerHTML = '<span class="option-text">' + opt.text + '</span>';
        div.onclick = function() { selectOption(this, opt.dim); };
        container.appendChild(div);
    }
}

function selectOption(el, dim) {
    var options = document.querySelectorAll('.option');
    options.forEach(function(o) { o.classList.remove('selected'); });
    el.classList.add('selected');
    answers[currentIndex] = dim;
    dimensionScores[dim]++;
    setTimeout(function() {
        if (currentIndex < 27) {
            currentIndex++;
            renderQuestion();
            updateProgress();
            updateNav();
        } else {
            calculateResult();
        }
    }, 300);
}

function calculateResult() {
    var maxA = Math.max(dimensionScores.A, dimensionScores.I);
    var maxR = Math.max(dimensionScores.R, dimensionScores.T);
    var maxC = Math.max(dimensionScores.C, dimensionScores.B);
    var maxD = Math.max(dimensionScores.D, dimensionScores.P);
    var code = '';
    code += dimensionScores.A >= dimensionScores.I ? 'A' : 'I';
    code += dimensionScores.R >= dimensionScores.T ? 'R' : 'T';
    code += dimensionScores.C >= dimensionScores.B ? 'C' : 'B';
    code += dimensionScores.D >= dimensionScores.P ? 'D' : 'P';
    showResult(code);
}

window.onload = function() {
    console.log('采购谈判风格测试 v2.1 已加载');
    var savedTeam = localStorage.getItem('currentTeam');
    if (savedTeam) {
        currentTeam = JSON.parse(savedTeam);
        console.log('已加载团队：', currentTeam.name);
    }
};
