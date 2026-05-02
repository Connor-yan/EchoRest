const TXT = {
    consoleBoot: "EchoRest booting...",
    consoleLoaded: "EchoRest interface loaded.",

    alertNeedLogin: "\u672a\u68c0\u6d4b\u5230\u6709\u6548\u767b\u5f55\u8bb0\u5f55\uff0c\u8bf7\u5148\u5b8c\u6210\u8eab\u4efd\u9a8c\u8bc1\u3002",

    waitingInput: "\u7b49\u5f85\u8f93\u5165\u3002",
    loadingCachedId: "\u5df2\u8bfb\u53d6\u672c\u5730\u7f13\u5b58\u4e2d\u7684\u7f16\u53f7\uff1a",
    verifying: "\u6b63\u5728\u9a8c\u8bc1\u2026\u2026",
    incompleteInput: "\u8bf7\u8f93\u5165\u5b8c\u6574\u7684\u7ef4\u4fee\u5458\u7f16\u53f7\u4e0e\u8bbf\u95ee\u7801\u3002",
    verifyFailIncomplete: "\u9a8c\u8bc1\u5931\u8d25\uff1a\u8f93\u5165\u4e0d\u5b8c\u6574\u3002",
    invalidCode: "\u8bbf\u95ee\u7801\u65e0\u6548\uff0c\u8bf7\u68c0\u67e5\u540e\u91cd\u8bd5\u3002",
    verifyFailCode: "\u9a8c\u8bc1\u5931\u8d25\uff1a\u8bbf\u95ee\u7801\u4e0d\u5339\u914d\u3002",
    verifyPassOldTrace: "\u9a8c\u8bc1\u901a\u8fc7\u3002\u68c0\u6d4b\u5230\u5df2\u5b58\u5728\u7684\u672c\u5730\u4f1a\u8bdd\u75d5\u8ff9\u3002",
    verifyPassNewSession: "\u9a8c\u8bc1\u901a\u8fc7\u3002\u6b63\u5728\u5efa\u7acb\u65b0\u4f1a\u8bdd\u2026\u2026",

    dashboardLoaded: "\u6a21\u5757\u8bfb\u53d6\u5b8c\u6210\u3002",
    dashboardRepeat: "\u7cfb\u7edf\u68c0\u6d4b\u5230\u91cd\u590d\u8bbf\u95ee\u75d5\u8ff9\u3002\u90e8\u5206\u7f13\u5b58\u5df2\u63d0\u524d\u8f7d\u5165\u3002",
    mirrorLowSync: "\u4f4e\u5f3a\u5ea6\u540c\u6b65\u4e2d",
    mirrorRepeatEcho: "\u5b58\u5728\u91cd\u590d\u7f16\u53f7\u56de\u58f0",

    boardRecovering: "\u7d22\u5f15\u6821\u9a8c\u4e2d",
    boardRecovered: "\u53ef\u8bfb\u53d6\u9879\u589e\u52a0\u4e2d",
    boardStatusNormal: "\u8bba\u575b\u76ee\u5f55\u8bfb\u53d6\u5b8c\u6210\u3002",
    boardStatusRepeat: "\u68c0\u6d4b\u5230\u91cd\u590d\u8bbf\u95ee\u75d5\u8ff9\u3002\u8bba\u575b\u7d22\u5f15\u4e2d\u51fa\u73b0\u4e0e\u5f53\u524d\u7ef4\u4fee\u5458\u7f16\u53f7\u76f8\u5173\u7684\u7f13\u5b58\u6b8b\u7559\u3002",

    threadReading: "\u516c\u5f00\u9875\u4e0e\u7f13\u5b58\u526f\u672c\u5df2\u5b8c\u6210\u521d\u6b21\u6bd4\u5bf9\u3002",
    threadReadingRepeat: "\u68c0\u6d4b\u5230\u91cd\u590d\u8bfb\u53d6\u75d5\u8ff9\u3002\u672c\u5730\u7f13\u5b58\u4ecd\u5728\u63d0\u524d\u54cd\u5e94\u3002",
    threadRecovered: "\u5df2\u5bf9\u7167",
    threadShifted: "\u7f13\u5b58\u504f\u79fb",

    repairStart: "\u6b63\u5728\u5c1d\u8bd5\u4fee\u590d\u65b0\u95fb\u788e\u7247\u2026\u2026",
    repairDone: "\u65b0\u95fb\u788e\u7247\u5df2\u6062\u590d\u90e8\u5206\u5185\u5bb9\u3002",
    repairAlreadyDone: "\u8be5\u65b0\u95fb\u788e\u7247\u5df2\u5904\u4e8e\u53ef\u8bfb\u53d6\u72b6\u6001\u3002",

    thread02Reading: "\u516c\u5f00\u9875\u4e0e\u9644\u4ef6\u6b8b\u7247\u5df2\u5b8c\u6210\u521d\u6b21\u6bd4\u5bf9\u3002",
    thread02ReadingRepeat: "\u68c0\u6d4b\u5230\u91cd\u590d\u8bfb\u53d6\u75d5\u8ff9\u3002\u8d26\u53f7\u5b57\u6bb5\u4e0e\u9644\u4ef6\u5bf9\u5e94\u4ecd\u4e0d\u7a33\u5b9a\u3002",
    thread02StateNormal: "\u5f85\u590d\u6838",
    thread02StateShifted: "\u5b57\u6bb5\u9519\u4f4d",

    thread02RepairStart: "\u6b63\u5728\u5c1d\u8bd5\u4fee\u590d\u7b80\u5386\u788e\u7247\u2026\u2026",
    thread02RepairDone: "\u7b80\u5386\u788e\u7247\u5df2\u6062\u590d\u90e8\u5206\u5185\u5bb9\u3002",
    thread02RepairAlreadyDone: "\u7b80\u5386\u788e\u7247\u5df2\u5904\u4e8e\u53ef\u8bfb\u53d6\u72b6\u6001\u3002",

    thread03Reading: "\u9875\u9762\u63d2\u5165\u9879\u4e0e\u5899\u4f53\u97f3\u9891\u5df2\u8fdb\u5165\u590d\u6838\u3002",
    thread03ReadingRepeat: "\u68c0\u6d4b\u5230\u91cd\u590d\u8bfb\u53d6\u75d5\u8ff9\u3002\u9875\u5185\u63d2\u5165\u5185\u5bb9\u6765\u6e90\u4ecd\u672a\u7a33\u5b9a\u3002",
    thread03StateNormal: "\u5f85\u590d\u6838",
    thread03StateShifted: "\u4e32\u9875\u75d5\u8ff9",

    thread03AudioStart: "\u6b63\u5728\u5c1d\u8bd5\u4fee\u590d\u97f3\u9891\u8f6c\u5199\u2026\u2026",
    thread03AudioDone: "\u97f3\u9891\u8f6c\u5199\u5df2\u6062\u590d\u90e8\u5206\u5185\u5bb9\u3002",
    thread03AudioAlreadyDone: "\u97f3\u9891\u8f6c\u5199\u5df2\u5904\u4e8e\u53ef\u8bfb\u53d6\u72b6\u6001\u3002",

    thread04Reading: "\u7a3f\u4ef6\u9875\u5e8f\u4e0e\u7f13\u5b58\u65f6\u95f4\u6233\u5df2\u8fdb\u5165\u521d\u6b21\u6bd4\u5bf9\u3002",
    thread04ReadingRepeat: "\u68c0\u6d4b\u5230\u91cd\u590d\u8bfb\u53d6\u75d5\u8ff9\u3002\u6709\u4e00\u6bb5\u7f13\u5b58\u8bb0\u5f55\u4ecd\u5728\u53cd\u590d\u56de\u843d\u3002",
    thread04StateNormal: "\u5f85\u590d\u6838",
    thread04StateShifted: "\u65f6\u95f4\u56de\u5199",

    thread04DraftStart: "\u6b63\u5728\u5c1d\u8bd5\u4fee\u590d\u6f2b\u753b\u6b8b\u9875\u2026\u2026",
    thread04DraftDone: "\u6f2b\u753b\u6b8b\u9875\u5df2\u6062\u590d\u90e8\u5206\u56fe\u5c42\u3002",
    thread04DraftAlreadyDone: "\u6f2b\u753b\u6b8b\u9875\u5df2\u5904\u4e8e\u53ef\u8bfb\u53d6\u72b6\u6001\u3002",



    injectedToThread04From03: "\u8bc4\u8bba\u56db\uff1a\u7b2c\u5341\u4e03\u9875\u7684\u5899\u6d1e\u548c\u7c89\u5237\u5320\u90a3\u5f20\u56fe\u592a\u50cf\u4e86\u3002",
    injectedToThread04SecondVisit: "\u8bc4\u8bba\u516d\uff1a\u6807\u9898\u6628\u5929\u4e0d\u662f\u8fd8\u53eb\u201c\u50ac\u7a3f\u4e2d\u201d\u5417\uff1f",
    injectedMeta04: "\u7f13\u5b58\u8865\u4e01 / \u65f6\u949f\u7d22\u5f15\u91cd\u5199",

    resultThread04Title: "THREAD 04\uff1a\u4ea4\u7a3f\u4e86\uff01",
    resultThread04Text: "\u7f16\u8f91\u3001\u6f2b\u753b\u6b8b\u9875\u3001\u5899\u6d1e\u5206\u955c\u3001\u65f6\u949f\u58f0\uff0c\u4ee5\u53ca\u4e00\u6bb5\u53cd\u590d\u88ab\u62d6\u56de 04:04 \u7684\u6295\u7a3f\u7f13\u5b58\u3002",
    resultDraftPageTitle: "COMIC CACHE\uff1adraft_page_17",
    resultDraftPageText: "\u8be5\u7f13\u5b58\u53ea\u5728\u6f2b\u753b\u6b8b\u9875\u88ab\u4fee\u590d\u540e\u663e\u793a\u3002\u7b2c\u5341\u4e03\u9875\u7684\u5206\u955c\u987a\u5e8f\u4e0e\u6295\u7a3f\u8bb0\u5f55\u4e0d\u4e00\u81f4\uff0c\u50cf\u662f\u88ab\u62d6\u56de\u5230 04:04 \u540e\u91cd\u65b0\u8986\u76d6\u8fc7\u4e00\u6b21\u3002",
    resultClockTitle: "CLOCK TRACE\uff1a04:04",
    resultClockText: "\u9875\u9762\u65f6\u95f4\u4e0e\u7f13\u5b58\u65f6\u95f4\u6301\u7eed\u8131\u8282\u300204:04 \u66f4\u50cf\u4e00\u4e2a\u56de\u843d\u951a\u70b9\uff0c\u800c\u4e0d\u662f\u6b63\u5e38\u949f\u70b9\u3002\u8be5\u5750\u6807\u4e0e 404 \u7d22\u5f15\u5b58\u5728\u672a\u5b8c\u6210\u5173\u8054\u3002",

    logThread04: "\u5df2\u8bfb\u53d6 THREAD 04\u3002",
    logDraft04: "\u5df2\u4fee\u590d THREAD 04 \u6f2b\u753b\u6b8b\u9875\u3002",
    inspectorDraftRestored: "\u5173\u8054\u8bb0\u5f55\uff1aTHREAD 04 \u6f2b\u753b\u6b8b\u9875\u5df2\u4fee\u590d\u3002",

    injectedToThread03From02: "\u8bc4\u8bba\u4e94\uff1a\u8fd9\u4e2a\u5c0f\u5b69\u7684\u8bf4\u6cd5\u600e\u4e48\u548c\u738b\u59d0\u90a3\u4e2a\u5e16\u6709\u70b9\u50cf\uff1f",
    injectedToThread03SecondVisit: "\u8bc4\u8bba\u516d\uff1a\u6211\u521a\u521a\u660e\u660e\u6ca1\u56de\u8fc7\u8fd9\u5e16\u3002",
    injectedMeta03: "\u7f13\u5b58\u8865\u4e01 / \u5899\u4f53\u7d22\u5f15\u540e\u79fb",

    resultThread03Title: "THREAD 03\uff1a\u75b2\u60eb\u7684\u7c89\u5237\u5320",
    resultThread03Text: "\u6f2b\u753b\u5bb6\u3001\u51fa\u79df\u5c4b\u5899\u6d1e\u3001\u9694\u58c1\u5c0f\u5b69\uff0c\u4ee5\u53ca\u4e00\u6bb5\u65e0\u6cd5\u64ad\u653e\u7684\u5899\u4f53\u97f3\u9891\u7f13\u5b58\u3002",
    resultAudioWallTitle: "AUDIO CACHE\uff1aaudio_wall_behind.wav",
    resultAudioWallText: "\u8be5\u7f13\u5b58\u53ea\u5728\u5899\u4f53\u97f3\u9891\u8f6c\u5199\u88ab\u4fee\u590d\u540e\u663e\u793a\u3002",

    logThread03: "\u5df2\u8bfb\u53d6 THREAD 03\u3002",
    logAudio03: "\u5df2\u4fee\u590d THREAD 03 \u5899\u4f53\u97f3\u9891\u8f6c\u5199\u3002",
    inspectorAudioRestored: "\u5173\u8054\u8bb0\u5f55\uff1aTHREAD 03 \u5899\u4f53\u97f3\u9891\u8f6c\u5199\u5df2\u4fee\u590d\u3002",

    interruptRecovered: "\u4e0a\u6b21\u8bfb\u53d6\u5728\u53d7\u9650\u7d22\u5f15\u5904\u88ab\u4e2d\u65ad\uff0c\u5df2\u56de\u6eda\u5230\u7a33\u5b9a\u526f\u672c\u3002",

    panicLabel: "SYSTEM INTERRUPTION",
    panicReload: "\u5f3a\u5236\u91cd\u65b0\u540c\u6b65",

    injectedToThread02: "\u8bc4\u8bba\u4e94\uff1a\u6211\u5bb6\u9633\u53f0\u6700\u8fd1\u4e5f\u6709\u90a3\u79cd\u7ea2\u679c\u5b50\uff0c\u50cf\u662f\u9e1f\u53fc\u6765\u7684\u3002",
    injectedToThread01: "\u8bc4\u8bba\u516d\uff1a\u6700\u8fd1\u56ed\u533a\u95e8\u53e3\u90a3\u5bb6\u7269\u6d41\u7ad9\u8001\u5f80\u690d\u7269\u56ed\u9001\u4e1c\u897f\u3002",
    injectedMeta01: "\u7f13\u5b58\u8865\u4e01 / \u4fee\u590d\u5176\u4ed6\u5b9e\u4f53\u540e\u6302\u63a5",
    injectedMeta02: "\u7f13\u5b58\u8865\u4e01 / \u65b0\u95fb\u4fee\u590d\u540e\u65b0\u589e",
    injectedAuthor: "\u7f13\u5b58\u8865\u4e01",

    searchEmpty: "\u8bf7\u8f93\u5165\u8981\u68c0\u7d22\u7684\u5173\u952e\u8bcd\u3002",
    searchNoResult: "\u6ca1\u6709\u627e\u5230\u53ef\u8bfb\u7f13\u5b58\u3002",
    searchLocked: "\u68c0\u6d4b\u5230\u53d7\u9650\u7d22\u5f15\uff0c\u4f46\u5f53\u524d\u4f1a\u8bdd\u65e0\u6cd5\u5c55\u5f00\u3002",

    resultThread01Title: "THREAD 01\uff1a\u795e\u5947\u690d\u7269\u5728\u54ea\u91cc",
    resultThread01Text: "\u690d\u7269\u5931\u8e2a\u3001\u9e1f\u7fa4\u3001\u7ea2\u679c\u5b50\uff0c\u4ee5\u53ca\u4e00\u6bb5\u635f\u574f\u7684\u690d\u7269\u56ed\u65b0\u95fb\u7f13\u5b58\u3002",
    resultThread02Title: "THREAD 02\uff1aAAA\u7269\u6d41\u5e97\u8001\u677f\u738b\u59d0",
    resultThread02Text: "\u4e71\u7801\u53d1\u5e16\u3001\u7b80\u5386\u788e\u7247\u3001\u7269\u6d41\u5de5\u4f5c\u3001\u80a9\u8180\u75bc\uff0c\u4ee5\u53ca\u88ab\u5220\u9664\u7684\u8bc4\u8bba\u3002",
    resultNewsPlantTitle: "NEWS CACHE\uff1a\u690d\u7269\u56ed\u5f02\u5e38\u6811\u6728\u8bb0\u5f55",
    resultNewsPlantText: "\u8be5\u7f13\u5b58\u53ea\u5728\u65b0\u95fb\u788e\u7247\u88ab\u4fee\u590d\u540e\u663e\u793a\u3002\u6765\u6e90\u6807\u8bb0\uff1asjahqiuhdiuq\u3002",
    resultResumeTitle: "CACHE\uff1a\u738b\u59d0\u7b80\u5386\u788e\u7247",
    resultResumeText: "\u8be5\u7f13\u5b58\u53ea\u5728\u7b80\u5386\u788e\u7247\u88ab\u4fee\u590d\u540e\u663e\u793a\u3002\u59d3\u540d\u5b57\u6bb5\u4ecd\u88ab\u906e\u6321\u3002",
    result404Title: "RESTRICTED\uff1apost_404",
    result404Text: "\u8be5\u7d22\u5f15\u4e0d\u5728\u516c\u5f00\u76ee\u5f55\u5185\u3002\u4e0d\u8981\u4ece\u641c\u7d22\u9875\u76f4\u63a5\u5c55\u5f00\u3002",
    resultAdminTitle: "USER CACHE\uff1asjahqiuhdiuq",
    resultAdminText: "\u81ea\u52a8\u4fee\u590d\u8d26\u53f7\u3002\u66fe\u51fa\u73b0\u5728\u65b0\u95fb\u7f13\u5b58\u4e0e\u6062\u590d\u8bb0\u5f55\u4e2d\u3002",
    resultMirrorTitle: "LOCAL SESSION\uff1a\u5f53\u524d\u4f1a\u8bdd",
    resultMirrorText: "\u8be5\u7ed3\u679c\u6765\u81ea\u672c\u5730\u7f13\u5b58\uff0c\u4e0d\u5c5e\u4e8e\u539f\u8bba\u575b\u76ee\u5f55\u3002",

    logEmpty: "\u5c1a\u672a\u53d1\u73b0\u53ef\u663e\u793a\u7684\u672c\u5730\u8bb0\u5f55\u3002",
    logLogin: "\u5df2\u5efa\u7acb\u7ef4\u62a4\u4f1a\u8bdd\u3002",
    logThread01: "\u5df2\u8bfb\u53d6 THREAD 01\u3002",
    logNews01: "\u5df2\u4fee\u590d THREAD 01 \u65b0\u95fb\u788e\u7247\u3002",
    logThread02: "\u5df2\u8bfb\u53d6 THREAD 02\u3002",
    logResume02: "\u5df2\u4fee\u590d THREAD 02 \u7b80\u5386\u788e\u7247\u3002",
    logRestricted: "\u66fe\u89e6\u78b0\u53d7\u9650\u7d22\u5f15\u3002",
    logSearch: "\u6700\u8fd1\u68c0\u7d22\uff1a",
    logFileChecked: "\u5df2\u68c0\u67e5\u7f13\u5b58\u6587\u4ef6\u6570\uff1a",
    gotoText: "\u6253\u5f00\u8bb0\u5f55",
    lockedText: "\u53d7\u9650",

    inspectorLabel: "CACHE FILE INSPECTOR",
    inspectorFileName: "\u6587\u4ef6\u540d",
    inspectorPath: "\u7f13\u5b58\u8def\u5f84",
    inspectorStatus: "\u72b6\u6001",
    inspectorModified: "\u6700\u540e\u4fee\u6539",
    inspectorRelated: "\u5173\u8054\u8bcd\u6761",
    inspectorNote: "\u5907\u6ce8",
    inspectorClose: "\u5173\u95ed",
    inspectorRecheck: "\u5c1d\u8bd5\u91cd\u65b0\u6821\u9a8c",
    inspectorRecheckStart: "\u6b63\u5728\u91cd\u65b0\u6821\u9a8c\u7f13\u5b58\u6587\u4ef6\u2026\u2026",
    inspectorRecheckDone: "\u6821\u9a8c\u5b8c\u6210\u3002\u6587\u4ef6\u72b6\u6001\u5df2\u5199\u5165\u672c\u5730\u8bb0\u5f55\u3002",
    inspectorInterrupted: "\u8be5\u6587\u4ef6\u66fe\u53d7\u5230\u4e2d\u65ad\u6062\u590d\u6d41\u7a0b\u5f71\u54cd\u3002",
    inspectorNewsRestored: "\u5173\u8054\u8bb0\u5f55\uff1aTHREAD 01 \u65b0\u95fb\u788e\u7247\u5df2\u4fee\u590d\u3002",
    inspectorResumeRestored: "\u5173\u8054\u8bb0\u5f55\uff1aTHREAD 02 \u7b80\u5386\u788e\u7247\u5df2\u4fee\u590d\u3002"
};

console.log(TXT.consoleBoot);

document.addEventListener("DOMContentLoaded", () => {
    console.log(TXT.consoleLoaded);

    const now = new Date().toLocaleString("zh-CN");
    const body = document.body;

    if (!localStorage.getItem("echo_first_visit")) {
        localStorage.setItem("echo_first_visit", now);
    }

    if (body.classList.contains("page-index")) {
        handleIndexPage(now);
    }

    if (body.classList.contains("page-login")) {
        handleLoginPage(now);
    }

    if (body.classList.contains("page-dashboard")) {
        handleDashboardPage(now);
    }

    if (body.classList.contains("page-forum-board")) {
        handleForumBoardPage(now);
        renderBoardSearchChipsByStage();
        bindArchiveSearch();
        renderRepairLog();
        renderBoardCaseStates();
        renderBoardIndexDriftState();
        renderBoardThreadSequenceLocks();
    }

    if (body.classList.contains("page-thread-01")) {
        handleThread01Page(now);
    }

    if (body.classList.contains("page-thread-02")) {
        handleThread02Page(now);
    }

    if (body.classList.contains("page-thread-03")) {
        handleThread03Page(now);
    }

    if (body.classList.contains("page-thread-04")) {
        handleThread04Page(now);
    }

    bindRestrictedTriggers();
    bindFileInspectors();
});

function handleIndexPage(now) {
    let visitCount = Number(localStorage.getItem("echo_index_visit_count") || "0");
    visitCount += 1;
    localStorage.setItem("echo_index_visit_count", String(visitCount));
}

function handleLoginPage(now) {
    const loginForm = document.getElementById("loginForm");
    const workerIdInput = document.getElementById("workerId");
    const accessCodeInput = document.getElementById("accessCode");
    const formError = document.getElementById("formError");
    const historyAlert = document.getElementById("historyAlert");
    const loginStatusText = document.getElementById("loginStatusText");

    if (!loginForm || !workerIdInput || !accessCodeInput) {
        return;
    }

    const savedWorkerId = localStorage.getItem("echo_worker_id");
    const loginVisitCount = Number(localStorage.getItem("echo_login_visit_count") || "0") + 1;
    localStorage.setItem("echo_login_visit_count", String(loginVisitCount));

    if (savedWorkerId) {
        if (historyAlert) {
            historyAlert.classList.remove("hidden");
        }
        workerIdInput.value = savedWorkerId;
        loginStatusText.textContent = TXT.loadingCachedId + savedWorkerId;
    } else {
        loginStatusText.textContent = TXT.waitingInput;
    }

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const workerId = workerIdInput.value.trim();
        const accessCode = accessCodeInput.value.trim();

        formError.textContent = "";
        loginStatusText.textContent = TXT.verifying;

        if (!workerId || !accessCode) {
            formError.textContent = TXT.incompleteInput;
            loginStatusText.textContent = TXT.verifyFailIncomplete;
            return;
        }

        if (accessCode !== "ECHO-13") {
            formError.textContent = TXT.invalidCode;
            loginStatusText.textContent = TXT.verifyFailCode;
            return;
        }

        if (savedWorkerId && savedWorkerId === workerId) {
            if (historyAlert) {
                historyAlert.classList.remove("hidden");
            }
            loginStatusText.textContent = TXT.verifyPassOldTrace;
        } else {
            loginStatusText.textContent = TXT.verifyPassNewSession;
        }

        localStorage.setItem("echo_worker_id", workerId);
        localStorage.setItem("echo_access_granted", "true");
        localStorage.setItem("echo_last_login_time", now);

        if (!localStorage.getItem("echo_session_id")) {
            localStorage.setItem("echo_session_id", "SESSION_13");
        }

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 900);
    });
}

function handleDashboardPage(now) {
    const accessGranted = localStorage.getItem("echo_access_granted");
    const workerId = localStorage.getItem("echo_worker_id");
    const sessionId = localStorage.getItem("echo_session_id") || "SESSION_13";
    const lastLoginTime = localStorage.getItem("echo_last_login_time") || "-";

    const workerIdValue = document.getElementById("workerIdValue");
    const sessionIdValue = document.getElementById("sessionIdValue");
    const lastLoginValue = document.getElementById("lastLoginValue");
    const mirrorStateValue = document.getElementById("mirrorStateValue");
    const dashboardAlert = document.getElementById("dashboardAlert");
    const dashboardStatusText = document.getElementById("dashboardStatusText");

    if (!workerIdValue || !sessionIdValue || !lastLoginValue || !mirrorStateValue || !dashboardStatusText) {
        return;
    }

    if (accessGranted !== "true" || !workerId) {
        alert(TXT.alertNeedLogin);
        window.location.href = "login.html";
        return;
    }

    workerIdValue.textContent = workerId;
    sessionIdValue.textContent = sessionId;
    lastLoginValue.textContent = lastLoginTime;
    mirrorStateValue.textContent = TXT.mirrorLowSync;

    let dashboardVisitCount = Number(localStorage.getItem("echo_dashboard_visit_count") || "0");
    dashboardVisitCount += 1;
    localStorage.setItem("echo_dashboard_visit_count", String(dashboardVisitCount));

    if (dashboardVisitCount >= 2) {
        if (dashboardAlert) {
            dashboardAlert.classList.remove("hidden");
        }
        dashboardStatusText.textContent = "\u8eab\u4efd\u9a8c\u8bc1\u5df2\u901a\u8fc7\u3002\u65e7\u7ad9\u8bba\u575b\u6062\u590d\u754c\u9762\u4ecd\u53ef\u8bbf\u95ee\uff0c\u8bf7\u7ee7\u7eed\u4ece\u516c\u5f00\u76ee\u5f55\u68c0\u67e5\u7f13\u5b58\u6b8b\u7559\u3002";
        mirrorStateValue.textContent = TXT.mirrorRepeatEcho;
    } else {
        dashboardStatusText.textContent = "\u8eab\u4efd\u9a8c\u8bc1\u5df2\u901a\u8fc7\u3002\u4e0b\u4e00\u6b65\uff1a\u8fdb\u5165\u65e7\u7ad9\u8bba\u575b\u6062\u590d\u754c\u9762\uff0c\u68c0\u67e5\u516c\u5f00\u76ee\u5f55\u4e0e\u7f13\u5b58\u5f02\u5e38\u3002";
    }

    renderDashboardEntryHint();

    localStorage.setItem("echo_last_dashboard_time", now);
}


function renderDashboardEntryHint() {
    const statusEl = document.getElementById("dashboardStatusText");
    if (!statusEl) return;

    let panel = document.getElementById("dashboardEntryPanel");

    if (!panel) {
        panel = document.createElement("div");
        panel.id = "dashboardEntryPanel";
        panel.className = "dashboard-entry-panel";

        const kicker = document.createElement("p");
        kicker.className = "dashboard-entry-kicker";
        kicker.textContent = "NEXT ROUTE / FORUM RESTORE";

        const title = document.createElement("h3");
        title.className = "dashboard-entry-title";
        title.textContent = "\u8fdb\u5165\u65e7\u7ad9\u8bba\u575b\u6062\u590d\u754c\u9762";

        const desc = document.createElement("p");
        desc.className = "dashboard-entry-desc";
        desc.textContent = "\u4ece\u516c\u5f00\u76ee\u5f55\u5f00\u59cb\u8bfb\u53d6\u65e7\u7ad9\u8bb0\u5f55\uff0c\u68c0\u67e5\u53ef\u8bfb\u5e16\u5b50\u3001\u7f13\u5b58\u504f\u79fb\u4e0e\u53d7\u9650\u7d22\u5f15\u3002";

        const link = document.createElement("a");
        link.className = "dashboard-entry-link";
        link.href = "pages/forum/board.html";
        link.textContent = "\u8fdb\u5165\u516c\u5f00\u76ee\u5f55";

        panel.appendChild(kicker);
        panel.appendChild(title);
        panel.appendChild(desc);
        panel.appendChild(link);

        const mountTarget =
            statusEl.closest(".login-log-box") ||
            statusEl.parentElement;

        if (mountTarget && mountTarget.parentNode) {
            mountTarget.parentNode.insertBefore(panel, mountTarget.nextSibling);
        } else {
            document.body.appendChild(panel);
        }
    }
}

function handleForumBoardPage(now) {
    const accessGranted = localStorage.getItem("echo_access_granted");
    const workerId = localStorage.getItem("echo_worker_id");
    const sessionId = localStorage.getItem("echo_session_id") || "SESSION_13";

    const boardWorkerValue = document.getElementById("boardWorkerValue");
    const boardSessionValue = document.getElementById("boardSessionValue");
    const boardVisitValue = document.getElementById("boardVisitValue");
    const boardRecoverValue = document.getElementById("boardRecoverValue");
    const boardAlert = document.getElementById("boardAlert");
    const boardStatusText = document.getElementById("boardStatusText");

    if (!boardWorkerValue || !boardSessionValue || !boardVisitValue || !boardRecoverValue || !boardStatusText) {
        return;
    }

    if (accessGranted !== "true" || !workerId) {
        alert(TXT.alertNeedLogin);
        window.location.href = "../../login.html";
        return;
    }

    boardWorkerValue.textContent = workerId;
    boardSessionValue.textContent = sessionId;

    let boardVisitCount = Number(localStorage.getItem("echo_board_visit_count") || "0");
    boardVisitCount += 1;
    localStorage.setItem("echo_board_visit_count", String(boardVisitCount));

    boardVisitValue.textContent = String(boardVisitCount);

    if (boardVisitCount >= 2) {
        if (boardAlert) {
            boardAlert.classList.remove("hidden");
        }
        boardRecoverValue.textContent = TXT.boardRecovered;
        boardStatusText.textContent = TXT.boardStatusRepeat;
    } else {
        boardRecoverValue.textContent = TXT.boardRecovering;
        boardStatusText.textContent = TXT.boardStatusNormal;
    }

    localStorage.setItem("echo_last_board_time", now);
}

function handleThread01Page(now) {
    const accessGranted = localStorage.getItem("echo_access_granted");
    const workerId = localStorage.getItem("echo_worker_id");
    const sessionId = localStorage.getItem("echo_session_id") || "SESSION_13";

    const threadWorkerValue = document.getElementById("threadWorkerValue");
    const threadSessionValue = document.getElementById("threadSessionValue");
    const threadVisitValue = document.getElementById("threadVisitValue");
    const threadStateValue = document.getElementById("threadStateValue");
    const threadStatusText = document.getElementById("threadStatusText");
    const moreCountMain = document.getElementById("thread01MoreCount");
    const moreCountMirrors = document.querySelectorAll(".thread01MoreCountMirror");

    const repairNewsBtn = document.getElementById("repairNewsBtn");
    const newsBrokenBlock = document.getElementById("newsBrokenBlock");
    const newsRecoveredBlock = document.getElementById("newsRecoveredBlock");

    const memoryStrip = document.getElementById("thread01MemoryStrip");
    const injectedAnchor = document.getElementById("thread01InjectedReplyAnchor");

    if (!threadWorkerValue || !threadSessionValue || !threadVisitValue || !threadStateValue || !threadStatusText) {
        return;
    }

    if (accessGranted !== "true" || !workerId) {
        alert(TXT.alertNeedLogin);
        window.location.href = "../../login.html";
        return;
    }

    threadWorkerValue.textContent = workerId;
    threadSessionValue.textContent = sessionId;

    let threadVisitCount = Number(localStorage.getItem("echo_thread01_visit_count") || "0");
    threadVisitCount += 1;
    localStorage.setItem("echo_thread01_visit_count", String(threadVisitCount));

    threadVisitValue.textContent = String(threadVisitCount);

    if (threadVisitCount >= 2) {
        threadStateValue.textContent = TXT.threadShifted;
        threadStatusText.textContent = TXT.threadReadingRepeat;
    } else {
        threadStateValue.textContent = TXT.threadRecovered;
        threadStatusText.textContent = TXT.threadReading;
    }

    const dynamicCount = getDynamicReplyCount(threadVisitCount);
    if (moreCountMain) {
        moreCountMain.textContent = "[" + dynamicCount + "]";
    }

    if (moreCountMirrors.length > 0) {
        moreCountMirrors.forEach((node) => {
            node.textContent = "[" + dynamicCount + "]";
        });
    }

    const repaired = localStorage.getItem("echo_thread01_news_repaired") === "true";

    if (repairNewsBtn && newsBrokenBlock && newsRecoveredBlock) {
        if (repaired) {
            newsBrokenBlock.classList.add("hidden");
            newsRecoveredBlock.classList.remove("hidden");
            threadStatusText.textContent = TXT.repairAlreadyDone;
        }

        repairNewsBtn.addEventListener("click", () => {
            threadStatusText.textContent = TXT.repairStart;

            setTimeout(() => {
                localStorage.setItem("echo_thread01_news_repaired", "true");
                addInvestigationLog(
                    "repair_thread01_news",
                    "[INVESTIGATION] 已修复 THREAD_01 新闻碎片，来源标记指向 sjahqiuhdiuq。",
                    false
                );
                renderRepairLog();
                renderWorkConsole();
                newsBrokenBlock.classList.add("hidden");
                newsRecoveredBlock.classList.remove("hidden");
                threadStatusText.textContent = TXT.repairDone;
            }, 700);
        });
    }

    applyThreadHeaderDrift(threadStateValue, threadStatusText, "thread01", threadVisitCount);

    applyThreadHeaderVisualDrift(threadStateValue, threadStatusText, "thread01");

    if (memoryStrip && shouldShowInterruptStrip()) {
        memoryStrip.classList.remove("hidden");
        memoryStrip.textContent = TXT.interruptRecovered;
    }

    if (injectedAnchor && localStorage.getItem("echo_thread02_resume_repaired") === "true" && !document.getElementById("thread01InjectedReply")) {
        const article = document.createElement("article");
        article.id = "thread01InjectedReply";
        article.className = "forum-post forum-post-note injected-cache-block";
        article.innerHTML =
            '<div class="forum-post-head">' +
            '<div class="forum-post-user">' +
            '<div class="news-badge">CACHE</div>' +
            '<div>' +
            '<h2 class="forum-post-author">' + TXT.injectedAuthor + '</h2>' +
            '<p class="forum-post-meta">' + TXT.injectedMeta01 + '</p>' +
            '</div>' +
            '</div>' +
            '<span class="forum-post-floor">ADD</span>' +
            '</div>' +
            '<div class="reply-line">' +
            '<div class="reply-avatar-slot">头像</div>' +
            '<p>' + TXT.injectedToThread01 + '</p>' +
            '</div>';

        injectedAnchor.appendChild(article);
    }

    localStorage.setItem("echo_last_thread01_time", now);
}

function handleThread02Page(now) {
    const accessGranted = localStorage.getItem("echo_access_granted");
    const workerId = localStorage.getItem("echo_worker_id");
    const sessionId = localStorage.getItem("echo_session_id") || "SESSION_13";

    const threadWorkerValue = document.getElementById("thread02WorkerValue");
    const threadSessionValue = document.getElementById("thread02SessionValue");
    const threadVisitValue = document.getElementById("thread02VisitValue");
    const threadStateValue = document.getElementById("thread02StateValue");
    const threadStatusText = document.getElementById("thread02StatusText");

    const moreCountMain = document.getElementById("thread02MoreCount");
    const moreCountMirrors = document.querySelectorAll(".thread02MoreCountMirror");

    const repairResumeBtn = document.getElementById("repairResumeBtn");
    const resumeBrokenBlock = document.getElementById("resumeBrokenBlock");
    const resumeRecoveredBlock = document.getElementById("resumeRecoveredBlock");

    const memoryStrip = document.getElementById("thread02MemoryStrip");
    const injectedAnchor = document.getElementById("thread02InjectedReplyAnchor");

    if (!threadWorkerValue || !threadSessionValue || !threadVisitValue || !threadStateValue || !threadStatusText) {
        return;
    }

    if (accessGranted !== "true" || !workerId) {
        alert(TXT.alertNeedLogin);
        window.location.href = "../../login.html";
        return;
    }

    if (!enforceThreadSequenceGate("thread02")) {
        return;
    }

    threadWorkerValue.textContent = workerId;
    threadSessionValue.textContent = sessionId;

    let threadVisitCount = Number(localStorage.getItem("echo_thread02_visit_count") || "0");
    threadVisitCount += 1;
    localStorage.setItem("echo_thread02_visit_count", String(threadVisitCount));

    threadVisitValue.textContent = String(threadVisitCount);

    if (threadVisitCount >= 2) {
        threadStateValue.textContent = TXT.thread02StateShifted;
        threadStatusText.textContent = TXT.thread02ReadingRepeat;
    } else {
        threadStateValue.textContent = TXT.thread02StateNormal;
        threadStatusText.textContent = TXT.thread02Reading;
    }

    const dynamicCount = getDynamicThread02Count(threadVisitCount);
    if (moreCountMain) {
        moreCountMain.textContent = "[" + dynamicCount + "]";
    }

    if (moreCountMirrors.length > 0) {
        moreCountMirrors.forEach((node) => {
            node.textContent = "[" + dynamicCount + "]";
        });
    }

    const repaired = localStorage.getItem("echo_thread02_resume_repaired") === "true";

    if (repairResumeBtn && resumeBrokenBlock && resumeRecoveredBlock) {
        if (repaired) {
            resumeBrokenBlock.classList.add("hidden");
            resumeRecoveredBlock.classList.remove("hidden");
            threadStatusText.textContent = TXT.thread02RepairAlreadyDone;
        }

        repairResumeBtn.addEventListener("click", () => {
            threadStatusText.textContent = TXT.thread02RepairStart;

            setTimeout(() => {
                localStorage.setItem("echo_thread02_resume_repaired", "true");
                addInvestigationLog(
                    "repair_thread02_resume",
                    "[INVESTIGATION] 已修复 THREAD_02 简历碎片，姓名字段仍被遮挡。",
                    false
                );
                renderRepairLog();
                renderWorkConsole();
                resumeBrokenBlock.classList.add("hidden");
                resumeRecoveredBlock.classList.remove("hidden");
                threadStatusText.textContent = TXT.thread02RepairDone;
            }, 700);
        });
    }
    applyThreadHeaderDrift(threadStateValue, threadStatusText, "thread02", threadVisitCount);
    applyThreadHeaderVisualDrift(threadStateValue, threadStatusText, "thread02");

    if (memoryStrip && shouldShowInterruptStrip()) {
        memoryStrip.classList.remove("hidden");
        memoryStrip.textContent = TXT.interruptRecovered;
    }

    if (injectedAnchor && localStorage.getItem("echo_thread01_news_repaired") === "true" && !document.getElementById("thread02InjectedReply")) {
        const article = document.createElement("article");
        article.id = "thread02InjectedReply";
        article.className = "forum-post forum-post-note injected-cache-block";
        article.innerHTML =
            '<div class="forum-post-head">' +
            '<div class="forum-post-user">' +
            '<div class="news-badge">CACHE</div>' +
            '<div>' +
            '<h2 class="forum-post-author">' + TXT.injectedAuthor + '</h2>' +
            '<p class="forum-post-meta">' + TXT.injectedMeta02 + '</p>' +
            '</div>' +
            '</div>' +
            '<span class="forum-post-floor">ADD</span>' +
            '</div>' +
            '<div class="reply-line">' +
            '<div class="reply-avatar-slot">头像</div>' +
            '<p>' + TXT.injectedToThread02 + '</p>' +
            '</div>';

        injectedAnchor.appendChild(article);
    }

    localStorage.setItem("echo_last_thread02_time", now);
}

function getDynamicReplyCount(visitCount) {
    const counts = [50237, 50241, 50248, 50237, 50252];
    const index = (visitCount - 1) % counts.length;
    return counts[index];
}

function getDynamicThread02Count(visitCount) {
    const counts = [50238, 50242, 50238, 50247, 50239];
    const index = (visitCount - 1) % counts.length;
    return counts[index];
}

function shouldShowInterruptStrip() {
    const lastInterrupt = Number(localStorage.getItem("echo_last_interrupt_time") || "0");
    if (!lastInterrupt) {
        return false;
    }

    return Date.now() - lastInterrupt < 1000 * 60 * 20;
}

function bindRestrictedTriggers() {
    const triggers = document.querySelectorAll(".restricted-trigger");

    if (!triggers.length) {
        return;
    }

    triggers.forEach((node) => {
        node.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const tag = node.dataset.restricted || "unknown";
            localStorage.setItem("echo_last_restricted_tag", tag);

            openSystemPanicOverlay(tag);
        });
    });
}

function openSystemPanicOverlay(tag) {
    let overlay = document.getElementById("systemPanicOverlay");

    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "systemPanicOverlay";
        overlay.className = "system-panic-overlay";

        const flash = document.createElement("div");
        flash.className = "system-panic-flash";

        const grid = document.createElement("div");
        grid.className = "system-panic-grid";
        grid.id = "systemPanicGrid";

        const dialog = document.createElement("div");
        dialog.className = "system-panic-dialog glitching";
        dialog.id = "systemPanicDialog";

        const label = document.createElement("div");
        label.className = "system-panic-label";
        label.id = "systemPanicLabel";

        const title = document.createElement("div");
        title.className = "system-panic-title";
        title.id = "systemPanicTitle";

        const text = document.createElement("div");
        text.className = "system-panic-text";
        text.id = "systemPanicText";

        const lines = document.createElement("div");
        lines.className = "system-panic-corrupt-lines";
        lines.id = "systemPanicLines";

        const actions = document.createElement("div");
        actions.className = "system-panic-actions";

        const reloadBtn = document.createElement("button");
        reloadBtn.className = "system-panic-btn";
        reloadBtn.type = "button";
        reloadBtn.id = "systemPanicReloadBtn";
        reloadBtn.addEventListener("click", () => {
            localStorage.setItem("echo_last_interrupt_time", String(Date.now()));
            window.location.reload();
        });

        actions.appendChild(reloadBtn);
        dialog.appendChild(label);
        dialog.appendChild(title);
        dialog.appendChild(text);
        dialog.appendChild(lines);
        dialog.appendChild(actions);

        overlay.appendChild(flash);
        overlay.appendChild(grid);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
    }

    refreshPanicGrid();
    fillPanicLines(tag);

    const payload = getPanicPayload(tag);
    const labelEl = document.getElementById("systemPanicLabel");
    const titleEl = document.getElementById("systemPanicTitle");
    const textEl = document.getElementById("systemPanicText");
    const reloadBtn = document.getElementById("systemPanicReloadBtn");
    const dialogEl = document.getElementById("systemPanicDialog");

    if (labelEl) {
        labelEl.textContent = TXT.panicLabel;
    }

    if (reloadBtn) {
        reloadBtn.textContent = TXT.panicReload;
    }

    if (dialogEl) {
        dialogEl.classList.remove("glitching");
        void dialogEl.offsetWidth;
        dialogEl.classList.add("glitching");
    }

    document.body.classList.add("panic-active");
    overlay.classList.add("active");

    if (titleEl) {
        titleEl.textContent = payload.frames[0];
    }

    if (textEl) {
        textEl.textContent = payload.textGarble;
    }

    let frameIndex = 0;
    const maxFrames = payload.frames.length;

    const timer = setInterval(() => {
        frameIndex += 1;

        if (frameIndex < maxFrames) {
            if (titleEl) {
                titleEl.textContent = payload.frames[frameIndex];
            }
        } else {
            clearInterval(timer);

            if (titleEl) {
                titleEl.textContent = payload.title;
            }

            if (textEl) {
                textEl.textContent = payload.text;
            }
        }
    }, 90);
}

function refreshPanicGrid() {
    const grid = document.getElementById("systemPanicGrid");
    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    const total = 120;
    for (let i = 0; i < total; i++) {
        const cell = document.createElement("div");
        cell.className = "system-panic-cell";
        cell.style.animationDelay = (Math.random() * 0.45) + "s";
        cell.style.animationDuration = (0.25 + Math.random() * 0.6) + "s";
        grid.appendChild(cell);
    }
}

function fillPanicLines(tag) {
    const lines = document.getElementById("systemPanicLines");
    if (!lines) {
        return;
    }

    const payload = getPanicPayload(tag);
    lines.innerHTML = "";

    payload.lines.forEach((line) => {
        const div = document.createElement("div");
        div.className = "system-panic-corrupt-line";
        div.textContent = line;
        lines.appendChild(div);
    });
}

function getPanicPayload(tag) {
    const base = {
        title: "\u5f53\u524d\u5185\u5bb9\u4e0d\u53ef\u76f4\u63a5\u89e6\u78b0",
        text: "\u8fd9\u4e0d\u662f\u4f60\u73b0\u5728\u9700\u8981\u5173\u5fc3\u7684\u4e1c\u897f\u3002",
        textGarble: ">>> restricted branch touched // rolling back cached surface...",
        frames: [
            "INDEX//CORRUPT",
            "BRANCH_LOCK",
            "SURFACE_UNSTABLE",
            "READ_ABORTED"
        ],
        lines: [
            "cache index mismatch",
            "mirror fragment collision",
            "restricted branch touched"
        ]
    };

    if (tag === "plant_news_hidden") {
        return {
            title: "\u8be5\u7d22\u5f15\u4ecd\u5904\u4e8e\u5c01\u95ed\u72b6\u6001",
            text: "\u8fd9\u4e0d\u662f\u4f60\u73b0\u5728\u9700\u8981\u5173\u5fc3\u7684\u4e1c\u897f\u3002\u5148\u5904\u7406\u53ef\u8bfb\u8bb0\u5f55\u3002",
            textGarble: ">>> reading forbidden layer // node rollback in progress...",
            frames: [
                "BOTANICAL_INDEX//VOID",
                "BRANCH_LOCK",
                "NEWS_FRAGMENT_REJECTED",
                "ROLLBACK"
            ],
            lines: [
                "forbidden botanical index",
                "surface rollback ready",
                "node access denied"
            ]
        };
    }

    if (tag === "seed_news_hidden") {
        return {
            title: "\u53d7\u9650\u6761\u76ee\u6b63\u5728\u56de\u6eda",
            text: "\u5f53\u524d\u4f1a\u8bdd\u65e0\u6743\u8bbf\u95ee\u8be5\u679d\u6761\u3002",
            textGarble: ">>> branch permission mismatch // reverting unstable shard...",
            frames: [
                "SEED_TRACE//NULL",
                "SHARD_UNBOUND",
                "PERMISSION_MISMATCH",
                "REVERTING"
            ],
            lines: [
                "restricted shard collision",
                "seed trace unavailable",
                "session branch mismatch"
            ]
        };
    }

    if (tag === "job_hidden") {
        return {
            title: "\u62db\u8058\u7d22\u5f15\u5df2\u88ab\u9501\u5b9a",
            text: "\u4e0d\u8981\u5148\u78b0\u5b83\u3002",
            textGarble: ">>> external route touched // recruitment branch sealed...",
            frames: [
                "ROUTE_LOCK",
                "JOB_BRANCH_SEALED",
                "EXTERNAL_INDEX_BLOCKED",
                "ABORT"
            ],
            lines: [
                "external branch sealed",
                "recruitment cache hidden",
                "redirect prevented"
            ]
        };
    }

    return base;
}

function bindArchiveSearch() {
    const input = document.getElementById("archiveSearchInput");
    const button = document.getElementById("archiveSearchBtn");
    const results = document.getElementById("archiveSearchResults");
    const chips = document.querySelectorAll(".search-chip");

    if (!input || !button || !results) {
        return;
    }

    button.addEventListener("click", () => {
        performArchiveSearch(input.value);
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            performArchiveSearch(input.value);
        }
    });

    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            const value = chip.dataset.search || "";
            input.value = value;
            performArchiveSearch(value);
        });
    });
}

function performArchiveSearch(rawKeyword) {
    const results = document.getElementById("archiveSearchResults");
    if (!results) {
        return;
    }

    const keyword = String(rawKeyword || "").trim();

    if (!keyword) {
        renderSearchNotice(TXT.searchEmpty);
        return;
    }

    recordSearchKeyword(keyword);

    const found = getArchiveSearchResults(keyword);

    if (!found.length) {
        renderSearchNotice(TXT.searchNoResult);
        renderRepairLog();
        renderBoardCaseStates();
        renderBoardIndexDriftState();
        renderBoardThreadSequenceLocks();
        renderBoardSearchChipsByStage();
        bindArchiveSearch();
        return;
    }

    results.innerHTML = "";

    found.forEach((item) => {
        const card = document.createElement("div");
        card.className = "search-result-card";

        if (item.locked) {
            card.classList.add("locked");
        }

        const title = document.createElement("h3");
        title.textContent = item.title;

        const text = document.createElement("p");
        text.textContent = item.text;

        card.appendChild(title);
        card.appendChild(text);

        if (item.url && !item.locked) {
            const link = document.createElement("a");
            link.className = "search-result-link";
            link.href = item.url;
            link.textContent = TXT.gotoText;
            card.appendChild(link);
        } else {
            const locked = document.createElement("span");
            locked.className = "search-result-locked";
            locked.textContent = TXT.lockedText;
            card.appendChild(locked);
        }

        results.appendChild(card);
    });

    renderRepairLog();
    renderBoardCaseStates();
    renderBoardIndexDriftState();
    renderBoardThreadSequenceLocks();
    renderBoardSearchChipsByStage();
    bindArchiveSearch();
}

function renderSearchNotice(text) {
    const results = document.getElementById("archiveSearchResults");
    if (!results) {
        return;
    }

    results.innerHTML = "";

    const p = document.createElement("p");
    p.className = "search-muted";
    p.textContent = text;

    results.appendChild(p);
}

function getArchiveSearchResults(keyword) {
    const q = keyword.toLowerCase();

    const repairedNews01 = localStorage.getItem("echo_thread01_news_repaired") === "true";
    const repairedResume02 = localStorage.getItem("echo_thread02_resume_repaired") === "true";
    const touchedRestricted = Boolean(localStorage.getItem("echo_last_restricted_tag"));

    const results = [];

    const words = {
        redFruit: "\u7ea2\u679c\u5b50",
        bird: "\u9e1f",
        plant: "\u690d\u7269",
        ficus: "\u6851\u79d1\u6995\u5c5e",
        shoulder: "\u80a9\u8180",
        behind: "\u80cc\u540e",
        logistics: "\u7269\u6d41",
        resume: "\u7b80\u5386",
        wangjie: "\u738b\u59d0",
        autoRepair: "\u81ea\u52a8\u4fee\u590d",
        wallHole: "\u5899\u6d1e",
        wall: "\u5899",
        knock: "\u6572\u5899",
        nextDoor: "\u9694\u58c1",
        painter: "\u6f2b\u753b\u5bb6",
        audio: "\u97f3\u9891",
        comic: "\u6f2b\u753b",
        draft: "\u6b8b\u9875",
        editor: "\u7f16\u8f91",
        clock: "\u65f6\u949f",
        tick: "\u6ef4\u7b54",
        submit: "\u4ea4\u7a3f"
    };

    if (containsAny(q, [words.wallHole, words.wall, words.knock, words.nextDoor, words.painter, words.audio]) || q.includes("audio_wall_behind")) {
        results.push({
            title: TXT.resultThread03Title,
            text: TXT.resultThread03Text,
            url: "thread_03.html",
            locked: false
        });

        if (localStorage.getItem("echo_thread03_audio_repaired") === "true") {
            results.push({
                title: TXT.resultAudioWallTitle,
                text: TXT.resultAudioWallText,
                url: "thread_03.html",
                locked: false
            });
        }
    }

    if (containsAny(q, [words.redFruit, words.bird, words.plant])) {
        results.push({
            title: TXT.resultThread01Title,
            text: TXT.resultThread01Text,
            url: "thread_01.html",
            locked: false
        });

        if (repairedNews01) {
            results.push({
                title: TXT.resultNewsPlantTitle,
                text: TXT.resultNewsPlantText,
                url: "thread_01.html",
                locked: false
            });
        }
    }

    if (containsAny(q, [words.ficus])) {
        if (repairedNews01) {
            results.push({
                title: TXT.resultNewsPlantTitle,
                text: TXT.resultNewsPlantText,
                url: "thread_01.html",
                locked: false
            });
        }
    }

    if (containsAny(q, [words.shoulder, words.behind, words.logistics, words.resume, words.wangjie])) {
        results.push({
            title: TXT.resultThread02Title,
            text: TXT.resultThread02Text,
            url: "thread_02.html",
            locked: false
        });

        if (repairedResume02) {
            results.push({
                title: TXT.resultResumeTitle,
                text: TXT.resultResumeText,
                url: "thread_02.html",
                locked: false
            });
        }
    }

    if (containsAny(q, [words.wallHole, words.wall, words.knock, words.nextDoor, words.painter, words.audio]) || q.includes("audio_wall_behind")) {
        results.push({
            title: TXT.resultThread03Title,
            text: TXT.resultThread03Text,
            url: "thread_03.html",
            locked: false
        });

        if (localStorage.getItem("echo_thread03_audio_repaired") === "true") {
            results.push({
                title: TXT.resultAudioWallTitle,
                text: TXT.resultAudioWallText,
                url: "thread_03.html",
                locked: false
            });
        }
    }

    if (
        containsAny(q, [words.comic, words.draft, words.editor, words.clock, words.tick, words.submit]) ||
        q.includes("04:04") ||
        q.includes("draft_page_17") ||
        q.includes("draft_page_404")
    ) {
        results.push({
            title: TXT.resultThread04Title,
            text: TXT.resultThread04Text,
            url: "thread_04.html",
            locked: false
        });

        if (localStorage.getItem("echo_thread04_draft_repaired") === "true") {
            results.push({
                title: TXT.resultDraftPageTitle,
                text: TXT.resultDraftPageText,
                url: "thread_04.html",
                locked: false
            });

            results.push({
                title: TXT.resultClockTitle,
                text: TXT.resultClockText,
                url: "thread_04.html",
                locked: false
            });
        }
    }
    if (q.includes("sjahqiuhdiuq") || containsAny(q, [words.autoRepair])) {
        results.push({
            title: TXT.resultAdminTitle,
            text: TXT.resultAdminText,
            url: "thread_01.html",
            locked: false
        });
    }

    if (q.includes("404")) {
        if (touchedRestricted) {
            results.push({
                title: TXT.result404Title,
                text: TXT.result404Text,
                url: "post_404.html",
                locked: true
            });
        }
    }

    if (q.includes("session") || q.includes("echo-13") || q.includes("observer") || q.includes("mirror")) {
        results.push({
            title: TXT.resultMirrorTitle,
            text: TXT.resultMirrorText,
            url: "../restore/mirror.html",
            locked: false
        });
    }

    return results;
}

function containsAny(text, words) {
    return words.some((word) => text.includes(word.toLowerCase()));
}

function recordSearchKeyword(keyword) {
    const raw = localStorage.getItem("echo_archive_search_history");
    let history = [];

    try {
        history = raw ? JSON.parse(raw) : [];
    } catch (error) {
        history = [];
    }

    history = history.filter((item) => item !== keyword);
    history.unshift(keyword);
    history = history.slice(0, 5);

    localStorage.setItem("echo_archive_search_history", JSON.stringify(history));

    console.log("[EchoRest] search keyword recorded:", keyword);

    recordInvestigationByKeyword(keyword);
    renderWorkConsole();
}

function addInvestigationLog(code, text, warning) {
    const key = "echo_investigation_logs";
    let logs = [];

    try {
        logs = JSON.parse(localStorage.getItem(key) || "[]");
    } catch (error) {
        logs = [];
    }

    const exists = logs.some(function (item) {
        return item.code === code;
    });

    if (!exists) {
        logs.push({
            code: code,
            text: text,
            warning: Boolean(warning),
            time: new Date().toLocaleString("zh-CN")
        });

        localStorage.setItem(key, JSON.stringify(logs));

        renderWorkConsole();
    }
}

function getInvestigationLogs() {
    const key = "echo_investigation_logs";

    try {
        return JSON.parse(localStorage.getItem(key) || "[]");
    } catch (error) {
        return [];
    }
}

function getSearchHistory() {
    try {
        return JSON.parse(localStorage.getItem("echo_archive_search_history") || "[]");
    } catch (error) {
        return [];
    }
}

function hasInvestigationCode(code) {
    return getInvestigationLogs().some(function (item) {
        return item.code === code;
    });
}




function ensureWorkConsole() {
    if (!document.body) return;
    if (document.getElementById("repairerWorkspace")) return;

    const collapsed = localStorage.getItem("echo_workspace_collapsed") === "true";

    const aside = document.createElement("aside");
    aside.id = "repairerWorkspace";
    aside.className = "repairer-workspace" + (collapsed ? " collapsed" : "");

    aside.innerHTML = `
        <button type="button" class="workspace-toggle" aria-expanded="${collapsed ? "false" : "true"}">
            <span class="workspace-dot"></span>
            <span class="workspace-toggle-text">MAINT CONSOLE</span>
        </button>

        <div class="workspace-panel">
            <div class="workspace-head">
                <div>
                    <p class="workspace-kicker">ECHO_REST / MAINTENANCE BACKEND</p>
                    <h3 class="workspace-title">\u5f53\u524d\u7ad9\u52a1\u9762\u677f</h3>
                </div>
                <button type="button" class="workspace-mini-btn" data-console-action="collapse">\u6536\u8d77</button>
            </div>

            <div class="workspace-summary" id="workspaceSummary"></div>
            <div class="workspace-goals" id="workspaceGoals"></div>
            <div class="workspace-checklist" id="workspaceChecklist"></div>
            <div class="workspace-log" id="workspaceLog"></div>
        </div>
    `;

    document.body.appendChild(aside);

    const toggleBtn = aside.querySelector(".workspace-toggle");
    const collapseBtn = aside.querySelector('[data-console-action="collapse"]');

    function setCollapsed(value) {
        aside.classList.toggle("collapsed", value);
        localStorage.setItem("echo_workspace_collapsed", String(value));
        toggleBtn.setAttribute("aria-expanded", value ? "false" : "true");
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            setCollapsed(!aside.classList.contains("collapsed"));
        });
    }

    if (collapseBtn) {
        collapseBtn.addEventListener("click", function () {
            setCollapsed(true);
        });
    }
}





function getMaintenanceTickets() {
    const found0404 = hasInvestigationCode("found_0404");
    const foundYuan = hasInvestigationCode("found_yuan_mod005");
    const found404 = hasInvestigationCode("found_post404");

    const repaired03 = localStorage.getItem("echo_thread03_audio_repaired") === "true";
    const repaired04 = localStorage.getItem("echo_thread04_draft_repaired") === "true";
    const t05LogsDone =
        localStorage.getItem("echorest_t05_admin_opened") === "1" &&
        localStorage.getItem("echorest_t05_restore_opened") === "1" &&
        localStorage.getItem("echorest_t05_user_cache_opened") === "1";

    return [
        {
            id: "ticket_img_source",
            level: foundYuan ? "warning" : "soft",
            title: "\u62a5\u4fee\u5355 #013 / \u9644\u4ef6\u6765\u6e90\u4e0d\u5b8c\u5168\u5bf9\u5e94",
            note: foundYuan
                ? "\u5907\u6ce8\uff1a\u524d\u53f0\u6807\u8bb0\u4e0e\u7f13\u5b58\u7f16\u53f7\u4ecd\u5b58\u5728\u91cd\u53e0"
                : "\u5907\u6ce8\uff1a\u56fe\u50cf\u6765\u6e90\u5b57\u6bb5\u7a33\u5b9a\u6027\u4ecd\u5f85\u590d\u6838"
        },
        {
            id: "ticket_audio_insert",
            level: repaired03 ? "warning" : "soft",
            title: "\u62a5\u4fee\u5355 #021 / \u9875\u5185\u63d2\u5165\u9879\u4e0e\u5899\u4f53\u97f3\u9891\u4e32\u7ebf",
            note: repaired03
                ? "\u5907\u6ce8\uff1a\u97f3\u9891\u6b8b\u7247\u5df2\u53ef\u8bfb\uff0c\u4f46\u6765\u6e90\u4ecd\u672a\u786e\u8ba4"
                : "\u5907\u6ce8\uff1a\u9875\u5185\u63d2\u5165\u9879\u4ecd\u88ab\u89c6\u4e3a\u975e\u539f\u9875\u5185\u5bb9"
        },
        {
            id: "ticket_clock_rewrite",
            level: found404 ? "danger" : (found0404 || repaired04 ? "warning" : "soft"),
            title: "\u62a5\u4fee\u5355 #034 / \u9875\u5e8f\u56de\u5199\u4e0e\u65f6\u95f4\u6233\u56fa\u5b9a",
            note: found404
                ? "\u5907\u6ce8\uff1a\u76ee\u5f55\u5916\u6761\u76ee\u5df2\u5bf9\u76f8\u5173\u7f13\u5b58\u53d1\u751f\u54cd\u5e94"
                : (found0404
                    ? "\u5907\u6ce8\uff1a\u6709\u4e00\u7ec4\u65f6\u95f4\u6233\u53cd\u590d\u843d\u5728\u540c\u4e00\u4f4d\u7f6e"
                    : "\u5907\u6ce8\uff1a\u7a3f\u4ef6\u9875\u5e8f\u4e0e\u4fee\u6539\u65f6\u95f4\u4ecd\u5b58\u5728\u504f\u5dee")
        }
    ];
}

function getMaintenanceHandoverNotes() {
    const t05LogsDone =
        localStorage.getItem("echorest_t05_admin_opened") === "1" &&
        localStorage.getItem("echorest_t05_restore_opened") === "1" &&
        localStorage.getItem("echorest_t05_user_cache_opened") === "1";

    const post404Entered = Number(localStorage.getItem("echorest_post404_visit_count") || "0") > 0;

    return [
        {
            id: "handover_night",
            level: t05LogsDone ? "warning" : "soft",
            text: t05LogsDone
                ? "\u591c\u73ed\u4ea4\u63a5\uff1a\u7ad9\u52a1\u5c42\u4e09\u6bb5\u65e5\u5fd7\u5df2\u88ab\u518d\u6b21\u8bfb\u53d6\uff0c\u67d0\u4e9b\u76ee\u5f55\u5916\u6761\u76ee\u4f1a\u5bf9\u91cd\u590d\u8bbf\u95ee\u4ea7\u751f\u989d\u5916\u54cd\u5e94\u3002"
                : "\u591c\u73ed\u4ea4\u63a5\uff1a\u672a\u5b8c\u6210\u7ad9\u52a1\u5c42\u590d\u6838\u524d\uff0c\u4e0d\u8981\u5148\u5bf9\u76ee\u5f55\u5916\u6761\u76ee\u6267\u884c\u6821\u9a8c\u3002"
        },
        {
            id: "handover_script",
            level: post404Entered ? "warning" : "soft",
            text: post404Entered
                ? "\u7ad9\u52a1\u5907\u6ce8\uff1a\u67d0\u4e9b\u53d7\u9650\u7d22\u5f15\u5728\u88ab\u6253\u5f00\u540e\u4e0d\u518d\u6309\u7f3a\u9875\u903b\u8f91\u8fd4\u56de\uff0c\u8bf7\u4f18\u5148\u8bb0\u5f55\u8def\u5f84\u800c\u4e0d\u662f\u76f4\u63a5\u5237\u65b0\u3002"
                : "\u7ad9\u52a1\u5907\u6ce8\uff1a\u81ea\u52a8\u4fee\u590d\u5199\u5165\u9891\u7387\u504f\u9ad8\uff0c\u56fe\u50cf\u6765\u6e90\u3001\u65f6\u95f4\u6233\u548c\u7ba1\u7406\u7f16\u53f7\u8bf7\u5206\u5f00\u8bb0\u5f55\u3002"
        }
    ];
}

function getMaintenanceTicketRevealLevel(ticketId) {
    const foundSource = hasInvestigationCode("found_sjahqiuhdiuq");
    const found0404 = hasInvestigationCode("found_0404");
    const foundYuan = hasInvestigationCode("found_yuan_mod005");
    const found404 = hasInvestigationCode("found_post404");

    const repaired03 = localStorage.getItem("echo_thread03_audio_repaired") === "true";
    const repaired04 = localStorage.getItem("echo_thread04_draft_repaired") === "true";

    const t05LogsDone =
        localStorage.getItem("echorest_t05_admin_opened") === "1" &&
        localStorage.getItem("echorest_t05_restore_opened") === "1" &&
        localStorage.getItem("echorest_t05_user_cache_opened") === "1";

    const post404Compared = localStorage.getItem("echorest_post404_compared") === "1";

    if (ticketId === "ticket_img_source") {
        if (foundYuan) return 3;
        if (foundSource || localStorage.getItem("echo_thread01_news_repaired") === "true") return 2;
        return 1;
    }

    if (ticketId === "ticket_audio_insert") {
        if (t05LogsDone || hasInvestigationCode("found_admin_cache")) return 3;
        if (repaired03) return 2;
        return 1;
    }

    if (ticketId === "ticket_clock_rewrite") {
        if (found404 || post404Compared) return 3;
        if (repaired04 || found0404) return 2;
        return 1;
    }

    return 1;
}

function getMaintenanceTicketSeenLevel(ticketId) {
    return Number(localStorage.getItem("echo_ticket_seen_level_" + ticketId) || "0");
}

function ticketHasUnreadUpdate(ticketId) {
    const currentLevel = getMaintenanceTicketRevealLevel(ticketId);
    const seenLevel = getMaintenanceTicketSeenLevel(ticketId);
    return currentLevel > seenLevel;
}

function markTicketUpdateAsRead(ticketId) {
    const currentLevel = getMaintenanceTicketRevealLevel(ticketId);
    setMaintenanceTicketSeenLevel(ticketId, currentLevel);
}

function setMaintenanceTicketSeenLevel(ticketId, level) {
    localStorage.setItem("echo_ticket_seen_level_" + ticketId, String(level));
}

function makeLockedTicketRow(key) {
    return {
        key: key,
        value: "\u3010\u5f85\u89e3\u9501\u3011",
        locked: true
    };
}

function getMaintenanceTicketDetail(ticketId) {
    const level = getMaintenanceTicketRevealLevel(ticketId);

    if (ticketId === "ticket_img_source") {
        const rows = [
            {
                key: "\u9644\u4ef6\u540d",
                value: "unknown_fruit_photo.tmp"
            },
            {
                key: "\u6765\u6e90\u8def\u5f84",
                value: level >= 2
                    ? "/cache/tmp/news_leaf_01/render/fruit_window_proxy"
                    : "/cache/tmp/news_leaf_01/..."
            },
            level >= 2
                ? {
                    key: "\u5199\u5165\u6765\u6e90",
                    value: "sjahqiuhdiuq"
                }
                : makeLockedTicketRow("\u5199\u5165\u6765\u6e90"),
            {
                key: "\u516c\u5f00\u7528\u6237\u5217\u8868",
                value: level >= 3
                    ? "\u672a\u5339\u914d\u5230\u76f8\u540c ID / \u4e0e\u201c\u65b0\u6765\u7684\u7ba1\u7406\u5458\u201d\u5b57\u6bb5\u4ecd\u4e0d\u5bf9\u5e94"
                    : "\u672a\u5339\u914d\u5230\u76f8\u540c ID"
            },
            level >= 3
                ? {
                    key: "\u524d\u53f0\u54cd\u5e94",
                    value: "\u5237\u65b0\u540e\u5076\u53d1 404 / \u9891\u6b21\u4e0d\u7a33\u5b9a"
                }
                : makeLockedTicketRow("\u524d\u53f0\u54cd\u5e94")
        ];

        return {
            type: "image",
            label: "ECHO_REST / ATTACHMENT CHECK",
            title: "\u62a5\u4fee\u5355 #013 / \u9644\u4ef6\u6765\u6e90\u6838\u9a8c",
            subtitle: "\u7c7b\u578b\uff1a\u56fe\u50cf\u8d44\u4ea7\u5f02\u5e38 / \u5f53\u524d\u53ef\u89c1\u5b57\u6bb5 " + level + " / 5",
            statusTag: level >= 3 ? "\u5b8c\u6574\u590d\u6838" : (level >= 2 ? "\u5df2\u8ffd\u52a0\u5b57\u6bb5" : "\u90e8\u5206\u5f00\u653e"),
            statusClass: level >= 3 ? "full" : (level >= 2 ? "mid" : "partial"),
            newFields:
                level >= 3
                    ? ["\u516c\u5f00\u7528\u6237\u5217\u8868", "\u524d\u53f0\u54cd\u5e94"]
                    : (level >= 2
                        ? ["\u5199\u5165\u6765\u6e90"]
                        : []),
            previewName: "unknown_fruit_photo.tmp",
            previewState: level >= 3 ? "\u9884\u89c8\u4e0d\u7a33\u5b9a / \u6765\u6e90\u4e0d\u5bf9\u5e94" : "\u9884\u89c8\u4e0d\u7a33\u5b9a",
            rows: rows,
            noteTitle: "\u4eba\u5de5\u5907\u6ce8",
            noteBody:
                level >= 3
                    ? "\u8be5\u56fe\u50cf\u5728\u516c\u5f00\u9875\u53ef\u4ee5\u88ab\u5f15\u7528\uff0c\u4f46\u6765\u6e90\u5b57\u6bb5\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u53ef\u89c1\u7528\u6237\u3002\u53cd\u5149\u533a\u57df\u4ecd\u4fdd\u7559\u4e00\u4e2a\u4e0d\u5e94\u51fa\u73b0\u7684\u5934\u50cf\u8f6e\u5ed3\u3002"
                    : (level >= 2
                        ? "\u8be5\u56fe\u50cf\u6765\u6e90\u5b57\u6bb5\u5df2\u5f00\u59cb\u7a33\u5b9a\u6307\u5411\u81ea\u52a8\u4fee\u590d\u5199\u5165\uff0c\u4f46\u4ecd\u65e0\u6cd5\u4ec5\u4f9d\u9760\u516c\u5f00\u5217\u8868\u786e\u8ba4\u5bf9\u5e94\u7528\u6237\u3002"
                        : "\u5f53\u524d\u53ea\u8fd4\u56de\u5230\u9644\u4ef6\u4e0e\u90e8\u5206\u8def\u5f84\u4fe1\u606f\u3002\u5199\u5165\u6765\u6e90\u4ecd\u672a\u7a33\u5b9a\u3002"),
            footer:
                level >= 3
                    ? "\u5904\u7406\u5efa\u8bae\uff1a\u4fdd\u7559\u8def\u5f84\u3001\u6765\u6e90\u5b57\u6bb5\u4e0e\u524d\u53f0\u54cd\u5e94\u5dee\u5f02\uff0c\u6682\u4e0d\u76f4\u63a5\u6e05\u7406\u8be5\u8d44\u4ea7\u3002"
                    : "\u5904\u7406\u5efa\u8bae\uff1a\u7ee7\u7eed\u590d\u6838\u5199\u5165\u6765\u6e90\u4e0e\u76f8\u5173\u7528\u6237\u5b57\u6bb5\u3002"
        };
    }

    if (ticketId === "ticket_audio_insert") {
        const rows = [
            {
                key: "\u97f3\u9891\u6587\u4ef6",
                value: "audio_wall_behind.wav"
            },
            level >= 2
                ? {
                    key: "\u8f6c\u5199\u65f6\u95f4",
                    value: "04:03 / cache-side transcript"
                }
                : makeLockedTicketRow("\u8f6c\u5199\u65f6\u95f4"),
            level >= 2
                ? {
                    key: "\u63d2\u5165\u6765\u6e90",
                    value: "wall_repair_ad / cached inline block"
                }
                : makeLockedTicketRow("\u63d2\u5165\u6765\u6e90"),
            {
                key: "\u539f\u59cb\u9875\u9762",
                value: "thread_03"
            },
            level >= 3
                ? {
                    key: "\u72b6\u6001\u5224\u5b9a",
                    value: "\u8be5\u63d2\u5165\u9879\u4e0d\u5c5e\u4e8e\u539f\u9875\u516c\u5f00\u5185\u5bb9"
                }
                : makeLockedTicketRow("\u72b6\u6001\u5224\u5b9a")
        ];

        return {
            type: "audio",
            label: "ECHO_REST / AUDIO TRACE",
            title: "\u62a5\u4fee\u5355 #021 / \u97f3\u9891\u4e0e\u63d2\u5165\u9879\u4e0e\u4e32\u7ebf\u6392\u67e5",
            subtitle: "\u7c7b\u578b\uff1a\u5899\u4f53\u97f3\u9891\u8f6c\u5199 / \u5f53\u524d\u53ef\u89c1\u5b57\u6bb5 " + level + " / 5",
            statusTag: level >= 3 ? "\u5b8c\u6574\u590d\u6838" : (level >= 2 ? "\u5df2\u8ffd\u52a0\u5b57\u6bb5" : "\u90e8\u5206\u5f00\u653e"),
            statusClass: level >= 3 ? "full" : (level >= 2 ? "mid" : "partial"),
            newFields:
                level >= 3
                    ? ["\u72b6\u6001\u5224\u5b9a"]
                    : (level >= 2
                        ? ["\u8f6c\u5199\u65f6\u95f4", "\u63d2\u5165\u6765\u6e90"]
                        : []),
            previewName: "audio_wall_behind.wav",
            previewState: level >= 2 ? "\u8f6c\u5199\u5df2\u90e8\u5206\u6062\u590d" : "\u4ec5\u8fd4\u56de\u57fa\u7840\u8bb0\u5f55",
            rows: rows,
            noteTitle: "\u4eba\u5de5\u5907\u6ce8",
            noteBody:
                level >= 3
                    ? "\u97f3\u9891\u8f6c\u5199\u4e0e\u5899\u9762\u4fee\u8865\u5e7f\u544a\u7f13\u5b58\u5728\u540c\u4e00\u6b21\u5237\u65b0\u4e2d\u540c\u65f6\u51fa\u73b0\u3002\u6309\u6b63\u5e38\u9875\u9762\u7ed3\u6784\uff0c\u4e24\u8005\u4e0d\u5e94\u7531\u540c\u4e00\u5c42\u7f13\u5b58\u5199\u5165\u3002"
                    : (level >= 2
                        ? "\u5899\u4f53\u97f3\u9891\u4e0e\u9875\u5185\u63d2\u5165\u9879\u5728\u65f6\u95f4\u4e0a\u5f00\u59cb\u53d1\u751f\u91cd\u53e0\uff0c\u4f46\u4ecd\u65e0\u6cd5\u786e\u5b9a\u8be5\u63d2\u5165\u9879\u662f\u5426\u539f\u5c5e\u4e8e thread_03\u3002"
                        : "\u5f53\u524d\u4ec5\u53ef\u8bfb\u53d6\u57fa\u7840\u97f3\u9891\u4fe1\u606f\uff0c\u63d2\u5165\u6765\u6e90\u4e0e\u5224\u5b9a\u5b57\u6bb5\u4ecd\u672a\u89e3\u9501\u3002"),
            footer:
                level >= 3
                    ? "\u5904\u7406\u5efa\u8bae\uff1a\u4fdd\u7559\u8f6c\u5199\u7247\u6bb5\u4e0e\u63d2\u5165\u6e90\u8def\u5f84\uff0c\u6682\u4e0d\u5148\u79fb\u9664\u9875\u5185\u63d2\u5165\u9879\u3002"
                    : "\u5904\u7406\u5efa\u8bae\uff1a\u7ee7\u7eed\u590d\u6838\u97f3\u9891\u8f6c\u5199\u4e0e\u9875\u5185\u63d2\u5165\u9879\u7684\u540c\u6b65\u65f6\u95f4\u3002"
        };
    }

    if (ticketId === "ticket_clock_rewrite") {
        const rows = [
            {
                key: "\u5bf9\u5e94\u7a3f\u4ef6",
                value: "draft_page_17"
            },
            {
                key: "\u6295\u7a3f\u65f6\u95f4",
                value: "03:58"
            },
            level >= 2
                ? {
                    key: "\u7f13\u5b58\u65f6\u95f4",
                    value: "04:04"
                }
                : makeLockedTicketRow("\u7f13\u5b58\u65f6\u95f4"),
            level >= 2
                ? {
                    key: "\u6700\u540e\u4fee\u6539",
                    value: "04:04 / repeated write-back"
                }
                : makeLockedTicketRow("\u6700\u540e\u4fee\u6539"),
            level >= 3
                ? {
                    key: "\u76ee\u5f55\u54cd\u5e94",
                    value: "\u4e0d\u6309\u666e\u901a\u7f3a\u9875\u903b\u8f91\u8fd4\u56de"
                }
                : makeLockedTicketRow("\u76ee\u5f55\u54cd\u5e94")
        ];

        return {
            type: "time",
            label: "ECHO_REST / TIME TRACE",
            title: "\u62a5\u4fee\u5355 #034 / \u65f6\u95f4\u6233\u4e0e\u9875\u5e8f\u56de\u5199\u5bf9\u7167",
            subtitle: "\u7c7b\u578b\uff1a\u7a3f\u4ef6\u9875\u5e8f\u504f\u79fb / \u5f53\u524d\u53ef\u89c1\u5b57\u6bb5 " + level + " / 5",
            statusTag: level >= 3 ? "\u5b8c\u6574\u590d\u6838" : (level >= 2 ? "\u5df2\u8ffd\u52a0\u5b57\u6bb5" : "\u90e8\u5206\u5f00\u653e"),
            statusClass: level >= 3 ? "full" : (level >= 2 ? "mid" : "partial"),
            newFields:
                level >= 3
                    ? ["\u76ee\u5f55\u54cd\u5e94"]
                    : (level >= 2
                        ? ["\u7f13\u5b58\u65f6\u95f4", "\u6700\u540e\u4fee\u6539"]
                        : []),
            previewName: "draft_page_17 / clock_trace_0404",
            previewState: level >= 2 ? "\u65f6\u95f4\u8bb0\u5f55\u6301\u7eed\u56de\u843d" : "\u4ec5\u8fd4\u56de\u57fa\u7840\u7a3f\u4ef6\u5bf9\u7167",
            rows: rows,
            noteTitle: "\u4eba\u5de5\u5907\u6ce8",
            noteBody:
                level >= 3
                    ? "\u9875\u5e8f\u3001\u4fee\u6539\u65f6\u95f4\u4e0e\u7f13\u5b58\u8bb0\u5f55\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\u4e0d\u5e94\u540c\u65f6\u843d\u56de 04:04\u3002\u8be5\u8bb0\u5f55\u66f4\u50cf\u88ab\u62d6\u56de\u540c\u4e00\u4e2a\u56de\u5199\u951a\u70b9\uff0c\u800c\u4e0d\u662f\u5355\u7eaf\u7684\u4e22\u9875\u6216\u4fee\u6539\u5931\u8d25\u3002"
                    : (level >= 2
                        ? "\u7f13\u5b58\u65f6\u95f4\u4e0e\u6700\u540e\u4fee\u6539\u65f6\u95f4\u5f00\u59cb\u56fa\u5b9a\u5728 04:04\uff0c\u4f46\u8be5\u8bb0\u5f55\u4e0e\u53d7\u9650\u7d22\u5f15\u7684\u5173\u7cfb\u4ecd\u672a\u5b8c\u5168\u5f00\u653e\u3002"
                        : "\u5f53\u524d\u53ea\u8fd4\u56de\u57fa\u7840\u6295\u7a3f\u4e0e\u7a3f\u4ef6\u5bf9\u7167\u4fe1\u606f\uff0c\u7f13\u5b58\u65f6\u95f4\u4ecd\u5904\u4e8e\u5f85\u590d\u6838\u72b6\u6001\u3002"),
            footer:
                level >= 3
                    ? "\u5904\u7406\u5efa\u8bae\uff1a\u4fdd\u7559 04:04 \u4f5c\u4e3a\u72ec\u7acb\u951a\u70b9\u8bb0\u5f55\uff0c\u6682\u4e0d\u5c06\u8be5\u5f02\u5e38\u5f52\u7c7b\u4e3a\u666e\u901a\u7f3a\u9875\u3002"
                    : "\u5904\u7406\u5efa\u8bae\uff1a\u7ee7\u7eed\u6bd4\u5bf9\u7a3f\u4ef6\u9875\u5e8f\u3001\u7f13\u5b58\u65f6\u95f4\u4e0e\u76f8\u5173\u7d22\u5f15\u54cd\u5e94\u3002"
        };
    }

    return null;
}

function ensureMaintenanceTicketOverlay() {
    let overlay = document.getElementById("maintenanceTicketOverlay");
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.id = "maintenanceTicketOverlay";
    overlay.className = "maintenance-ticket-overlay";

    const panel = document.createElement("div");
    panel.className = "maintenance-ticket-panel";

    const label = document.createElement("div");
    label.className = "maintenance-ticket-label";
    label.id = "maintenanceTicketLabel";

    const titleRow = document.createElement("div");
    titleRow.className = "maintenance-ticket-title-row";

    const title = document.createElement("h2");
    title.className = "maintenance-ticket-title";
    title.id = "maintenanceTicketTitle";

    const badge = document.createElement("span");
    badge.className = "maintenance-ticket-badge";
    badge.id = "maintenanceTicketBadge";

    titleRow.appendChild(title);
    titleRow.appendChild(badge);

    const subtitle = document.createElement("p");
    subtitle.className = "maintenance-ticket-subtitle";
    subtitle.id = "maintenanceTicketSubtitle";

    const body = document.createElement("div");
    body.className = "maintenance-ticket-body";
    body.id = "maintenanceTicketBody";

    const footer = document.createElement("div");
    footer.className = "maintenance-ticket-footer";
    footer.id = "maintenanceTicketFooter";

    const actions = document.createElement("div");
    actions.className = "maintenance-ticket-actions";

    const closeBtn = document.createElement("button");
    closeBtn.className = "maintenance-ticket-btn";
    closeBtn.type = "button";
    closeBtn.textContent = "\u5173\u95ed";
    closeBtn.addEventListener("click", function () {
        overlay.classList.remove("active");
    });

    actions.appendChild(closeBtn);

    panel.appendChild(label);
    panel.appendChild(titleRow);
    panel.appendChild(subtitle);
    panel.appendChild(body);
    panel.appendChild(footer);
    panel.appendChild(actions);

    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.classList.remove("active");
        }
    });

    return overlay;
}

function openMaintenanceTicketDetail(ticketId) {
    const detail = getMaintenanceTicketDetail(ticketId);
    if (!detail) return;

    const level = getMaintenanceTicketRevealLevel(ticketId);
    const seenLevel = getMaintenanceTicketSeenLevel(ticketId);
    const hasNewUnlock = level > seenLevel;

    const overlay = ensureMaintenanceTicketOverlay();
    const panel = overlay.querySelector(".maintenance-ticket-panel");

    if (panel) {
        panel.classList.remove("maintenance-ticket-image", "maintenance-ticket-audio", "maintenance-ticket-time");
        panel.classList.add(
            detail.type === "audio"
                ? "maintenance-ticket-audio"
                : (detail.type === "time" ? "maintenance-ticket-time" : "maintenance-ticket-image")
        );
    }

    const label = document.getElementById("maintenanceTicketLabel");
    const title = document.getElementById("maintenanceTicketTitle");
    const badge = document.getElementById("maintenanceTicketBadge");
    const subtitle = document.getElementById("maintenanceTicketSubtitle");
    const body = document.getElementById("maintenanceTicketBody");
    const footer = document.getElementById("maintenanceTicketFooter");

    if (!label || !title || !badge || !subtitle || !body || !footer) return;

    label.textContent = detail.label;
    title.textContent = detail.title;
    subtitle.textContent = detail.subtitle;

    body.innerHTML = "";

    if (hasNewUnlock && detail.newFields && detail.newFields.length) {
        const fresh = document.createElement("div");
        fresh.className = "maintenance-ticket-fresh-note";

        const freshTitle = document.createElement("div");
        freshTitle.className = "maintenance-ticket-fresh-title";
        freshTitle.textContent = "\u672c\u6b21\u65b0\u8ffd\u52a0\u5b57\u6bb5";

        const freshText = document.createElement("div");
        freshText.className = "maintenance-ticket-fresh-text";
        freshText.textContent = detail.newFields.join(" / ");

        fresh.appendChild(freshTitle);
        fresh.appendChild(freshText);
        body.appendChild(fresh);
    }

    const preview = document.createElement("div");
    preview.className = "maintenance-ticket-preview";

    const previewInner = document.createElement("div");
    previewInner.className = "maintenance-ticket-preview-box";

    const previewName = document.createElement("div");
    previewName.className = "maintenance-ticket-preview-name";
    previewName.textContent = detail.previewName;

    const previewState = document.createElement("div");
    previewState.className = "maintenance-ticket-preview-state";
    previewState.textContent = detail.previewState;

    previewInner.appendChild(previewName);
    previewInner.appendChild(previewState);

    if (detail.type === "audio") {
        const waveform = document.createElement("div");
        waveform.className = "maintenance-ticket-audio-wave";

        for (let i = 0; i < 24; i++) {
            const bar = document.createElement("span");
            bar.className = "maintenance-ticket-audio-bar";
            bar.style.height = (10 + ((i * 7) % 36)) + "px";
            waveform.appendChild(bar);
        }

        previewInner.appendChild(waveform);
    }

    if (detail.type === "time") {
        const trace = document.createElement("div");
        trace.className = "maintenance-ticket-time-trace";

        const rows = [
            ["POST", "03:58"],
            ["CACHE", "04:04"],
            ["WRITE", "04:04"],
            ["INDEX", "post_404?"]
        ];

        rows.forEach(function (item) {
            const line = document.createElement("div");
            line.className = "maintenance-ticket-time-line";

            const key = document.createElement("span");
            key.className = "maintenance-ticket-time-key";
            key.textContent = item[0];

            const value = document.createElement("span");
            value.className = "maintenance-ticket-time-value";
            value.textContent = item[1];

            line.appendChild(key);
            line.appendChild(value);
            trace.appendChild(line);
        });

        previewInner.appendChild(trace);
    }

    preview.appendChild(previewInner);

    const meta = document.createElement("div");
    meta.className = "maintenance-ticket-meta";

    detail.rows.forEach(function (item) {
        const row = document.createElement("div");
        row.className = "maintenance-ticket-row" + (item.locked ? " is-locked" : "");

        const key = document.createElement("span");
        key.className = "maintenance-ticket-key";
        key.textContent = item.key;

        const value = document.createElement("span");
        value.className = "maintenance-ticket-value" + (item.locked ? " is-locked" : "");
        value.textContent = item.value;

        row.appendChild(key);
        row.appendChild(value);
        meta.appendChild(row);
    });

    const note = document.createElement("div");
    note.className = "maintenance-ticket-note-block";

    const noteTitle = document.createElement("div");
    noteTitle.className = "maintenance-ticket-note-title";
    noteTitle.textContent = detail.noteTitle;

    const noteBody = document.createElement("p");
    noteBody.className = "maintenance-ticket-note-body";
    noteBody.textContent = detail.noteBody;

    note.appendChild(noteTitle);
    note.appendChild(noteBody);

    body.appendChild(preview);
    body.appendChild(meta);
    body.appendChild(note);

    footer.textContent = detail.footer;

    markTicketUpdateAsRead(ticketId);
    renderWorkConsole();
    overlay.classList.add("active");
}

function renderWorkConsole() {
    const root = document.getElementById("repairerWorkspace");
    if (!root) return;

    const summaryEl = root.querySelector("#workspaceSummary");
    const goalsEl = root.querySelector("#workspaceGoals");
    const checklistEl = root.querySelector("#workspaceChecklist");
    const logEl = root.querySelector("#workspaceLog");

    if (!summaryEl || !goalsEl || !checklistEl || !logEl) return;

    const investigationLogs = getInvestigationLogs();
    const searchHistory = getSearchHistory();
    const checkedFileCount = getCheckedFileCount();
    const tickets = getMaintenanceTickets();
    const handoverNotes = getMaintenanceHandoverNotes();

    summaryEl.innerHTML = "";

    const summaryTitle = document.createElement("p");
    summaryTitle.className = "workspace-section-label";
    summaryTitle.textContent = "\u7ad9\u52a1\u6458\u8981";
    summaryEl.appendChild(summaryTitle);

    const summaryItems = [
        {
            label: "\u5f53\u524d\u4f1a\u8bdd",
            value: localStorage.getItem("echo_session_id") || "SESSION_13"
        },
        {
            label: "\u5df2\u6821\u9a8c\u6587\u4ef6",
            value: checkedFileCount + " \u4e2a"
        },
        {
            label: "\u6700\u8fd1\u68c0\u7d22",
            value: searchHistory.length ? searchHistory.join(" / ") : "\u6682\u65e0"
        },
        {
            label: "\u5199\u5165\u8bb0\u5f55",
            value: investigationLogs.length + " \u6761"
        }
    ];

    summaryItems.forEach(function (item) {
        const div = document.createElement("div");
        div.className = "workspace-summary-item";

        const label = document.createElement("span");
        label.className = "workspace-summary-label";
        label.textContent = item.label;

        const value = document.createElement("strong");
        value.className = "workspace-summary-value";
        value.textContent = item.value;

        div.appendChild(label);
        div.appendChild(value);
        summaryEl.appendChild(div);
    });

    goalsEl.innerHTML = "";

    const goalsTitle = document.createElement("p");
    goalsTitle.className = "workspace-section-label";
    goalsTitle.textContent = "\u5f85\u5904\u7406\u62a5\u4fee";
    goalsEl.appendChild(goalsTitle);

    tickets.forEach(function (item) {
        const row = document.createElement("div");
        row.className = "workspace-goal-item workspace-ticket-item workspace-ticket-" + item.level;
        row.dataset.ticketId = item.id;
        const hasUnread = ticketHasUnreadUpdate(item.id);

        if (
            item.id === "ticket_img_source" ||
            item.id === "ticket_audio_insert" ||
            item.id === "ticket_clock_rewrite"
        ) {
            row.classList.add("workspace-ticket-clickable");
            row.setAttribute("role", "button");
            row.setAttribute("tabindex", "0");

            row.addEventListener("click", function () {
                openMaintenanceTicketDetail(item.id);
            });

            row.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openMaintenanceTicketDetail(item.id);
                }
            });
        }

        const marker = document.createElement("span");
        marker.className = "workspace-goal-marker";
        marker.textContent = item.level === "danger" ? "!" : (item.level === "warning" ? "■" : "□");

        const wrap = document.createElement("div");
        wrap.className = "workspace-ticket-wrap";

        const titleRow = document.createElement("div");
        titleRow.className = "workspace-ticket-title-row";

        const title = document.createElement("div");
        title.className = "workspace-goal-text";
        title.textContent = item.title;

        titleRow.appendChild(title);

        if (hasUnread) {
            const badge = document.createElement("span");
            badge.className = "workspace-ticket-badge";
            badge.textContent = "NEW";
            titleRow.appendChild(badge);
        }

        const note = document.createElement("div");
        note.className = "workspace-ticket-note";
        note.textContent = item.note;

        wrap.appendChild(titleRow);
        wrap.appendChild(note);
        row.appendChild(marker);
        row.appendChild(wrap);
        goalsEl.appendChild(row);
    });

    checklistEl.innerHTML = "";

    const checklistTitle = document.createElement("p");
    checklistTitle.className = "workspace-section-label";
    checklistTitle.textContent = "\u7ad9\u52a1\u4ea4\u63a5\u5907\u6ce8";
    checklistEl.appendChild(checklistTitle);

    handoverNotes.forEach(function (item) {
        const row = document.createElement("div");
        row.className = "workspace-check-item" + (item.level === "warning" ? " done" : "");

        const marker = document.createElement("span");
        marker.className = "workspace-check-marker";
        marker.textContent = item.level === "warning" ? "\u25a0" : "\u25a1";

        const text = document.createElement("span");
        text.className = "workspace-check-text";
        text.textContent = item.text;

        row.appendChild(marker);
        row.appendChild(text);
        checklistEl.appendChild(row);
    });

    logEl.innerHTML = "";

    const logTitle = document.createElement("p");
    logTitle.className = "workspace-section-label";
    logTitle.textContent = "\u6700\u8fd1\u5199\u5165\u8bb0\u5f55";
    logEl.appendChild(logTitle);

    const recentLogs = investigationLogs.slice(-6).reverse();

    if (!recentLogs.length) {
        const empty = document.createElement("div");
        empty.className = "workspace-log-empty";
        empty.textContent = "\u6682\u65e0\u65b0\u7684\u5199\u5165\u8bb0\u5f55\u3002";
        logEl.appendChild(empty);
        return;
    }

    recentLogs.forEach(function (item) {
        const row = document.createElement("div");
        row.className = "workspace-log-item" + (item.warning ? " warning" : "");

        const meta = document.createElement("div");
        meta.className = "workspace-log-meta";
        meta.textContent = item.time || "";

        const text = document.createElement("div");
        text.className = "workspace-log-text";
        text.textContent = item.text;

        row.appendChild(meta);
        row.appendChild(text);
        logEl.appendChild(row);
    });
}

function getEchoPageKey() {
    const body = document.body;
    if (!body) return "";

    if (body.classList.contains("page-dashboard")) return "dashboard";
    if (body.classList.contains("page-forum-board")) return "board";
    if (body.classList.contains("page-thread-01")) return "thread_01";
    if (body.classList.contains("page-thread-02")) return "thread_02";
    if (body.classList.contains("page-thread-03")) return "thread_03";
    if (body.classList.contains("page-thread-04")) return "thread_04";
    if (body.classList.contains("page-thread-05")) return "thread_05";
    if (body.classList.contains("page-post-404")) return "post_404";
    if (body.classList.contains("page-mirror")) return "mirror";
    if (body.classList.contains("page-admin-route")) return "admin_route";
    if (body.classList.contains("page-final-shutdown")) return "final_shutdown";

    return "";
}

function getMainlineProgressCount() {
    let count = 0;

    if (localStorage.getItem("echo_thread04_draft_repaired") === "true") count += 1;
    if (hasInvestigationCode("found_0404")) count += 1;
    if (hasInvestigationCode("found_yuan_mod005")) count += 1;
    if (hasInvestigationCode("found_post404")) count += 1;

    if (
        localStorage.getItem("echorest_t05_admin_opened") === "1" &&
        localStorage.getItem("echorest_t05_restore_opened") === "1" &&
        localStorage.getItem("echorest_t05_user_cache_opened") === "1"
    ) {
        count += 1;
    }

    if (Number(localStorage.getItem("echorest_post404_visit_count") || "0") > 0) count += 1;
    if (localStorage.getItem("echorest_post404_compared") === "1") count += 1;
    if (localStorage.getItem("echorest_mirror_profile_generated") === "1") count += 1;

    return count;
}

function getThreadHeaderDriftStage() {
    const found0404 = hasInvestigationCode("found_0404");
    const foundYuan = hasInvestigationCode("found_yuan_mod005");
    const found404 = hasInvestigationCode("found_post404");
    const t05LogCount = typeof getBoardT05LogCount === "function"
        ? getBoardT05LogCount()
        : 0;
    const post404Touched =
        localStorage.getItem("echorest_t05_404_touched") === "1" ||
        Number(localStorage.getItem("echorest_post404_visit_count") || "0") > 0;
    const post404Compared = localStorage.getItem("echorest_post404_compared") === "1";

    if (post404Compared) return "compared";
    if (post404Touched) return "post404";
    if (t05LogCount >= 3) return "t05logs";
    if (found404) return "found404";
    if (foundYuan) return "foundYuan";
    if (found0404) return "found0404";
    return "early";
}

function getThreadHeaderDriftPayload(threadKey, visitCount) {
    const stage = getThreadHeaderDriftStage();

    if (stage === "early") {
        return null;
    }

    if (threadKey === "thread01") {
        if (stage === "found0404") {
            return {
                state: "\u8f7b\u5fae\u56de\u5199",
                status: "\u690d\u7269\u56ed\u7f13\u5b58\u5f00\u59cb\u5f15\u7528\u9519\u8bef\u65f6\u95f4\u6233\u3002"
            };
        }

        if (stage === "foundYuan") {
            return {
                state: "\u7f13\u5b58\u4e32\u7ebf",
                status: "\u9e1f\u7fa4\u4e0e\u7ea2\u679c\u5b50\u56fe\u50cf\u5f00\u59cb\u5171\u7528\u7ba1\u7406\u5458\u7f13\u5b58\u3002"
            };
        }

        return {
            state: "\u76ee\u5f55\u5916\u56de\u58f0",
            status: "\u8be5\u7ebf\u7a0b\u6b63\u5728\u88ab\u76ee\u5f55\u5916\u5bf9\u8c61\u53cd\u5411\u5f15\u7528\u3002"
        };
    }

    if (threadKey === "thread02") {
        if (stage === "found0404") {
            return {
                state: "\u8f7b\u5fae\u9519\u4f4d",
                status: "\u7269\u6d41\u4e0e\u9633\u53f0\u56fe\u50cf\u7684\u65f6\u95f4\u6807\u8bb0\u4e0d\u518d\u4e00\u81f4\u3002"
            };
        }

        if (stage === "foundYuan") {
            return {
                state: "\u5c65\u5386\u4e32\u6539",
                status: "\u7b80\u5386\u788e\u7247\u5f00\u59cb\u5199\u5165\u4e0d\u5c5e\u4e8e\u738b\u59d0\u7684\u7ba1\u7406\u5458\u5b57\u6bb5\u3002"
            };
        }

        return {
            state: "\u8eab\u4efd\u504f\u79fb",
            status: "\u201c\u5de5\u4f5c\u7ecf\u5386\u201d\u4e0e\u201c\u6743\u9650\u8bb0\u5f55\u201d\u5df2\u51fa\u73b0\u91cd\u5408\u3002"
        };
    }

    if (threadKey === "thread03") {
        if (stage === "found0404") {
            return {
                state: "\u5899\u540e\u6ef4\u7b54",
                status: "\u8f6c\u5199\u7f13\u5b58\u4e2d\u51fa\u73b0\u4e0d\u5c5e\u4e8e\u672c\u5e16\u7684\u65f6\u95f4\u56de\u58f0\u3002"
            };
        }

        if (stage === "foundYuan") {
            return {
                state: "\u5899\u4f53\u4e32\u7ebf",
                status: "\u5899\u540e\u7684\u4eba\u58f0\u4e0d\u518d\u53ea\u5c5e\u4e8e\u9694\u58c1\u3002"
            };
        }

        return {
            state: "\u5899\u4f53\u56de\u58f0",
            status: "\u5899\u540e\u7684\u8f6c\u5199\u5f00\u59cb\u6307\u5411\u76ee\u5f55\u5916\u5bf9\u8c61\u3002"
        };
    }

    if (threadKey === "thread04") {
        if (stage === "found0404") {
            return {
                state: "\u65f6\u95f4\u951a\u70b9",
                status: "\u7b2c\u5341\u4e03\u9875\u6ca1\u6709\u56de\u5230\u539f\u4f4d\u3002"
            };
        }

        if (stage === "foundYuan") {
            return {
                state: "\u7f16\u8f91\u504f\u79fb",
                status: "\u53d1\u7a3f\u8bb0\u5f55\u5f00\u59cb\u5f15\u7528\u65b0\u6765\u7684\u7ba1\u7406\u5458\u7f13\u5b58\u3002"
            };
        }

        return {
            state: "\u65f6\u5e8f\u8131\u843d",
            status: "\u8fd9\u4e0d\u50cf\u7f3a\u9875\uff0c\u66f4\u50cf\u4e00\u4e2a\u88ab\u9690\u85cf\u7684\u7d22\u5f15\u3002"
        };
    }

    if (threadKey === "thread05") {
        if (stage === "found0404") {
            return {
                state: "\u7ba1\u7406\u5458\u7f13\u5b58\u91cd\u53e0",
                status: "\u8be5\u5e16\u6b63\u5728\u7b49\u4e00\u4e2a\u4f1a\u8bef\u628a\u7d22\u5f15\u5f53\u6210\u7f3a\u9875\u7684\u4eba\u3002"
            };
        }

        if (stage === "foundYuan") {
            return {
                state: "\u65b0\u6765\u4e0d\u4e00\u5b9a\u662f\u65b0\u7684",
                status: "\u5f53\u524d\u7ebf\u7a0b\u5df2\u4e0e\u65e7\u7ba1\u7406\u5458\u8def\u5f84\u53d1\u751f\u91cd\u53e0\u3002"
            };
        }

        if (stage === "found404" || stage === "t05logs") {
            return {
                state: "\u4e09\u6bb5\u8bb0\u5f55\u672a\u95ed\u5408",
                status: "\u8fd9\u4e0d\u50cf\u666e\u901a\u5e16\u5b50\uff0c\u66f4\u50cf\u4e00\u6bb5\u6b63\u5728\u88ab\u8bfb\u53d6\u7684\u8def\u5f84\u3002"
            };
        }

        if (stage === "post404") {
            return {
                state: "\u5f53\u524d\u7ef4\u4fee\u5458\u5df2\u88ab\u8bb0\u5f55",
                status: "\u8be5\u7ebf\u7a0b\u5df2\u4e0d\u518d\u53ea\u662f\u7ba1\u7406\u5458\u7f13\u5b58\uff0c\u5b83\u5f00\u59cb\u8bfb\u53d6\u5f53\u524d\u8bbf\u95ee\u8def\u5f84\u3002"
            };
        }

        return {
            state: "\u8def\u5f84\u5df2\u91cd\u53e0",
            status: "\u5f53\u524d\u7ebf\u7a0b\u53ea\u5269\u4e0b\u4e00\u4e2a\u95ee\u9898\uff1a\u8c01\u5728\u91cd\u64ad\u8fd9\u6b21\u7ef4\u4fee\u3002"
        };
    }

    return null;
}

function applyThreadHeaderDrift(stateEl, statusEl, threadKey, visitCount) {
    const payload = getThreadHeaderDriftPayload(threadKey, visitCount);
    if (!payload) return;

    if (stateEl && payload.state) {
        stateEl.textContent = payload.state;
    }

    if (statusEl && payload.status) {
        statusEl.textContent = payload.status;
    }
}

function getThreadHeaderVisualLevel(threadKey) {
    const stage = getThreadHeaderDriftStage();

    if (stage === "early") return "none";
    if (stage === "found0404") return "soft";
    if (stage === "foundYuan") return "mid";
    if (stage === "found404" || stage === "t05logs") return "mid";
    if (stage === "post404") return "danger";
    if (stage === "compared") return "danger";

    return "mid";
}

function applyThreadHeaderVisualDrift(stateEl, statusEl, threadKey) {
    const level = getThreadHeaderVisualLevel(threadKey);

    const stateItem = stateEl ? stateEl.closest(".thread-info-item") : null;
    const statusBox = statusEl ? statusEl.closest(".login-log-box") : null;
    const headCard = stateEl
        ? stateEl.closest(".thread-head-card")
        : (statusEl ? statusEl.closest(".thread-head-card") : null);

    const allClasses = [
        "thread-header-drift-soft",
        "thread-header-drift-mid",
        "thread-header-drift-danger",
        "thread-header-drift-flash",
        "thread-info-item-drift-soft",
        "thread-info-item-drift-mid",
        "thread-info-item-drift-danger",
        "thread-logbox-drift-soft",
        "thread-logbox-drift-mid",
        "thread-logbox-drift-danger",
        "thread-headcard-drift-soft",
        "thread-headcard-drift-mid",
        "thread-headcard-drift-danger"
    ];

    [stateEl, statusEl, stateItem, statusBox, headCard].forEach(function (node) {
        if (!node) return;
        allClasses.forEach(function (cls) {
            node.classList.remove(cls);
        });
    });

    if (level === "none") return;

    if (level === "soft") {
        if (stateEl) stateEl.classList.add("thread-header-drift-soft");
        if (statusEl) statusEl.classList.add("thread-header-drift-soft");
        if (stateItem) stateItem.classList.add("thread-info-item-drift-soft");
        if (statusBox) statusBox.classList.add("thread-logbox-drift-soft");
        if (headCard) headCard.classList.add("thread-headcard-drift-soft");
    }

    if (level === "mid") {
        if (stateEl) stateEl.classList.add("thread-header-drift-mid", "thread-header-drift-flash");
        if (statusEl) statusEl.classList.add("thread-header-drift-soft");
        if (stateItem) stateItem.classList.add("thread-info-item-drift-mid");
        if (statusBox) statusBox.classList.add("thread-logbox-drift-mid");
        if (headCard) headCard.classList.add("thread-headcard-drift-mid");
    }

    if (level === "danger") {
        if (stateEl) stateEl.classList.add("thread-header-drift-danger", "thread-header-drift-flash");
        if (statusEl) statusEl.classList.add("thread-header-drift-mid");
        if (stateItem) stateItem.classList.add("thread-info-item-drift-danger");
        if (statusBox) statusBox.classList.add("thread-logbox-drift-danger");
        if (headCard) headCard.classList.add("thread-headcard-drift-danger");
    }

    if (stateEl) {
        setTimeout(function () {
            stateEl.classList.remove("thread-header-drift-flash");
        }, 900);
    }
}

function getAnomalyHintText() {
    const t04Done = localStorage.getItem("echo_thread04_draft_repaired") === "true";
    const found0404 = hasInvestigationCode("found_0404");
    const foundYuan = hasInvestigationCode("found_yuan_mod005");
    const found404 = hasInvestigationCode("found_post404");
    const t05LogsDone =
        localStorage.getItem("echorest_t05_admin_opened") === "1" &&
        localStorage.getItem("echorest_t05_restore_opened") === "1" &&
        localStorage.getItem("echorest_t05_user_cache_opened") === "1";
    const post404Entered = Number(localStorage.getItem("echorest_post404_visit_count") || "0") > 0;
    const post404Compared = localStorage.getItem("echorest_post404_compared") === "1";
    const mirrorDone = localStorage.getItem("echorest_mirror_profile_generated") === "1";

    if (!t04Done) {
        return "\u7b2c\u5341\u4e03\u9875\u8fd8\u6ca1\u6709\u56de\u5230\u539f\u4f4d\u3002";
    }

    if (!found0404) {
        return "\u6709\u4e2a\u65f6\u95f4\u53cd\u590d\u505c\u5728\u540c\u4e00\u5904\u3002";
    }

    if (!foundYuan) {
        return "\u65b0\u6765\u7684\u7ba1\u7406\u5458\u4e0d\u4e00\u5b9a\u662f\u65b0\u7684\u3002";
    }

    if (!found404) {
        return "\u6709\u4e9b 404 \u4e0d\u662f\u4e22\u5931\uff0c\u53ea\u662f\u4e0d\u60f3\u88ab\u770b\u89c1\u3002";
    }

    if (!t05LogsDone) {
        return "\u6709\u4e09\u4e2a\u9762\u677f\u5728\u7b49\u4f60\u6309\u987a\u5e8f\u8bfb\u5b8c\u3002";
    }

    if (!post404Entered) {
        return "\u6709\u4e00\u4e2a\u7d22\u5f15\u5df2\u7ecf\u66b4\u9732\uff0c\u4f46\u5b83\u4e0d\u5728\u76ee\u5f55\u91cc\u3002";
    }

    if (!post404Compared) {
        return "\u4e24\u6761\u8def\u5f84\u53ea\u5dee\u4e00\u6b21\u5bf9\u7167\u3002";
    }

    if (!mirrorDone) {
        return "\u955c\u5b50\u91cc\u8fd8\u5c11\u4e00\u4e2a\u7ef4\u4fee\u5458\u3002";
    }

    return "\u4e0b\u4e00\u5c42\u8bb0\u5f55\u5df2\u7ecf\u51c6\u5907\u597d\u4e86\u3002";
}

function ensureAnomalyHintBar() {
    if (document.getElementById("echoAnomalyHintBar")) return;

    const bar = document.createElement("div");
    bar.id = "echoAnomalyHintBar";
    bar.className = "echo-anomaly-hint-bar";

    const line = document.createElement("div");
    line.className = "echo-anomaly-hint-line";
    line.id = "echoAnomalyHintLine";

    bar.appendChild(line);
    document.body.appendChild(bar);
}

function showAnomalyHintBar(text) {
    ensureAnomalyHintBar();

    const bar = document.getElementById("echoAnomalyHintBar");
    const line = document.getElementById("echoAnomalyHintLine");

    if (!bar || !line || !text) return;

    line.textContent = text;

    bar.classList.remove("active");
    void bar.offsetWidth;
    bar.classList.add("active");
}

function maybeTriggerAnomalyHint() {
    const pageKey = getEchoPageKey();
    if (!pageKey) return;

    const progress = getMainlineProgressCount();

    const lastPage = localStorage.getItem("echo_anomaly_last_page") || "";
    const lastProgress = Number(localStorage.getItem("echo_anomaly_last_progress") || "-1");
    let repeat = Number(localStorage.getItem("echo_anomaly_repeat_count") || "0");

    if (pageKey === lastPage && progress === lastProgress) {
        repeat += 1;
    } else {
        repeat = 1;
    }

    localStorage.setItem("echo_anomaly_last_page", pageKey);
    localStorage.setItem("echo_anomaly_last_progress", String(progress));
    localStorage.setItem("echo_anomaly_repeat_count", String(repeat));

    const signature = pageKey + "::" + String(progress);
    const shownSignature = localStorage.getItem("echo_anomaly_shown_signature") || "";

    if (repeat >= 3 && signature !== shownSignature) {
        const text = getAnomalyHintText();

        if (text) {
            showAnomalyHintBar(text);
            localStorage.setItem("echo_anomaly_shown_signature", signature);
        }
    }
}

function recordInvestigationByKeyword(keyword) {
    const q = String(keyword || "").trim().toLowerCase();

    if (!q) return;

    if (
        q.includes("04:04") ||
        q.includes("0404") ||
        q.includes("clock") ||
        q.includes("\u65f6\u949f") ||
        q.includes("\u6ef4\u7b54")
    ) {
        addInvestigationLog(
            "found_0404",
            "[INVESTIGATION] \u5df2\u786e\u8ba4 04:04 \u4e0e THREAD_04 / post_404 \u5b58\u5728\u5173\u8054\u3002",
            true
        );
    }

    if (
        q.includes("draft_page_404") ||
        q.includes("draft_page_17") ||
        q.includes("\u6f2b\u753b") ||
        q.includes("\u6b8b\u9875")
    ) {
        addInvestigationLog(
            "found_draft_404",
            "[INVESTIGATION] \u5df2\u786e\u8ba4\u6f2b\u753b\u6b8b\u9875\u7684\u6587\u4ef6\u7d22\u5f15\u6b63\u5728\u504f\u5411 404\u3002",
            false
        );
    }

    if (
        q.includes("sjahqiuhdiuq") ||
        q.includes("\u81ea\u52a8\u4fee\u590d")
    ) {
        addInvestigationLog(
            "found_sjahqiuhdiuq",
            "[INVESTIGATION] \u5df2\u8bb0\u5f55 sjahqiuhdiuq\u3002\u5b83\u591a\u6b21\u51fa\u73b0\u5728\u81ea\u52a8\u4fee\u590d\u5199\u5165\u4e2d\uff0c\u4f46\u672a\u51fa\u73b0\u5728\u53ef\u89c1\u7528\u6237\u5217\u8868\u3002",
            false
        );
    }

    if (
        q.includes("\u9e22") ||
        q.includes("yuan") ||
        q.includes("mod_005") ||
        q.includes("\u7ba1\u7406\u5458")
    ) {
        addInvestigationLog(
            "found_yuan_mod005",
            "[INVESTIGATION] \u5df2\u8bb0\u5f55\u9e22 / MOD_005\u3002\u524d\u53f0\u628a\u5b83\u6807\u8bb0\u4e3a\u201c\u65b0\u6765\u7684\u7ba1\u7406\u5458\u201d\uff0c\u4f46\u7f13\u5b58\u4e0e\u8def\u5f84\u8bb0\u5f55\u4e0d\u652f\u6301\u8fd9\u4e2a\u8eab\u4efd\u3002",
            true
        );
    }

    if (
        q.includes("\u4e0d\u9700\u8981\u4fee\u590d404") ||
        q.includes("\u4e0d\u8981\u4fee\u590d404") ||
        q.includes("\u4e0d\u9700\u8981\u4fee\u590d 404") ||
        q.includes("\u4e0d\u8981\u6253\u5f00 post_404")
    ) {
        addInvestigationLog(
            "found_last_input",
            "[INVESTIGATION] \u5df2\u8bb0\u5f55 MOD_005 \u6700\u540e\u8f93\u5165\uff1a\u4e0d\u9700\u8981\u4fee\u590d404\u3002",
            true
        );
    }

    if (
        q.includes("post_404") ||
        q.includes("404")
    ) {
        addInvestigationLog(
            "found_post404",
            "[INVESTIGATION] \u5df2\u53d1\u73b0 post_404 \u4e0d\u662f\u7f3a\u5931\u9875\u9762\uff0c\u800c\u662f\u53d7\u9650\u7d22\u5f15\u3002",
            true
        );
    }

    if (
        q.includes("admin_yuan") ||
        q.includes("admin_yuan.cache") ||
        q.includes("user cache") ||
        q.includes("current_repairer") ||
        q.includes("\u7f13\u5b58")
    ) {
        addInvestigationLog(
            "found_admin_cache",
            "[INVESTIGATION] \u5df2\u53d1\u73b0 admin_yuan.cache \u4e0e\u5f53\u524d\u7ef4\u4fee\u5458\u8def\u5f84\u5b58\u5728\u91cd\u53e0\u3002",
            true
        );
    }

    if (
        q.includes("mirror") ||
        q.includes("session") ||
        q.includes("echo-13") ||
        q.includes("observer")
    ) {
        addInvestigationLog(
            "found_mirror_session",
            "[INVESTIGATION] \u5df2\u786e\u8ba4 mirror route \u4f1a\u8bfb\u53d6\u5f53\u524d\u6d4f\u89c8\u5668\u672c\u5730\u75d5\u8ff9\u3002",
            false
        );
    }
}


function renderRepairLog() {
    const list = document.getElementById("repairLogList");
    if (!list) {
        return;
    }

    const logs = [];

    if (localStorage.getItem("echo_access_granted") === "true") {
        logs.push({
            text: TXT.logLogin,
            warning: false
        });
    }

    if (Number(localStorage.getItem("echo_thread01_visit_count") || "0") > 0) {
        logs.push({
            text: TXT.logThread01,
            warning: false
        });
    }

    if (localStorage.getItem("echo_thread01_news_repaired") === "true") {
        logs.push({
            text: TXT.logNews01,
            warning: false
        });
    }

    if (Number(localStorage.getItem("echo_thread02_visit_count") || "0") > 0) {
        logs.push({
            text: TXT.logThread02,
            warning: false
        });
    }

    if (localStorage.getItem("echo_thread02_resume_repaired") === "true") {
        logs.push({
            text: TXT.logResume02,
            warning: false
        });
    }

    if (Number(localStorage.getItem("echo_thread03_visit_count") || "0") > 0) {
        logs.push({
            text: TXT.logThread03,
            warning: false
        });
    }

    if (localStorage.getItem("echo_thread03_audio_repaired") === "true") {
        logs.push({
            text: TXT.logAudio03,
            warning: false
        });
    }

    if (Number(localStorage.getItem("echo_thread04_visit_count") || "0") > 0) {
        logs.push({
            text: TXT.logThread04,
            warning: false
        });
    }

    if (localStorage.getItem("echo_thread04_draft_repaired") === "true") {
        logs.push({
            text: TXT.logDraft04,
            warning: false
        });
    }

    if (localStorage.getItem("echo_last_restricted_tag")) {
        logs.push({
            text: TXT.logRestricted,
            warning: true
        });
    }

    const checkedFileCount = getCheckedFileCount();
    if (checkedFileCount > 0) {
        logs.push({
            text: TXT.logFileChecked + checkedFileCount,
            warning: false
        });
    }

    const investigationLogs = getInvestigationLogs();

    investigationLogs.forEach(function (item) {
        logs.push({
            text: item.text,
            warning: item.warning
        });
    });

    const historyRaw = localStorage.getItem("echo_archive_search_history");

    try {
        const history = historyRaw ? JSON.parse(historyRaw) : [];
        if (history.length) {
            logs.push({
                text: TXT.logSearch + history.join(" / "),
                warning: false
            });
        }
    } catch (error) {
        // ignore
    }

    list.innerHTML = "";

    if (!logs.length) {
        const empty = document.createElement("li");
        empty.textContent = TXT.logEmpty;
        list.appendChild(empty);
        return;
    }

    logs.forEach((entry) => {
        const li = document.createElement("li");
        li.textContent = entry.text;

        if (entry.warning) {
            li.classList.add("log-warning");
        }

        list.appendChild(li);
    });
}

function boardHasInvestigationCode(code) {
    if (typeof hasInvestigationCode === "function") {
        return hasInvestigationCode(code);
    }

    try {
        const logs = JSON.parse(localStorage.getItem("echo_investigation_logs") || "[]");
        return logs.some(function (item) {
            return item && item.code === code;
        });
    } catch (error) {
        return false;
    }
}

function getBoardT05LogCount() {
    let count = 0;

    if (localStorage.getItem("echorest_t05_admin_opened") === "1") count += 1;
    if (localStorage.getItem("echorest_t05_restore_opened") === "1") count += 1;
    if (localStorage.getItem("echorest_t05_user_cache_opened") === "1") count += 1;

    return count;
}

function getBoardPost404GateState() {
    const doneList = [
        localStorage.getItem("echo_thread04_draft_repaired") === "true",
        boardHasInvestigationCode("found_0404"),
        boardHasInvestigationCode("found_yuan_mod005"),
        boardHasInvestigationCode("found_post404"),
        getBoardT05LogCount() === 3
    ];

    const doneCount = doneList.filter(function (item) {
        return item;
    }).length;

    return {
        doneCount: doneCount,
        totalCount: 5,
        unlocked: doneCount === 5
    };
}

function setBoardCardState(card, stateText, stateClass, extraText) {
    if (!card) return;

    const stateEl = card.querySelector(".thread-state");
    if (stateEl) {
        stateEl.className = "thread-state " + stateClass;
        stateEl.textContent = stateText;
    }

    let extraEl = card.querySelector(".thread-card-extra-state");

    if (!extraText) {
        if (extraEl) {
            extraEl.remove();
        }
        return;
    }

    if (!extraEl) {
        extraEl = document.createElement("p");
        extraEl.className = "thread-card-extra-state";

        const desc = card.querySelector(".thread-desc");
        if (desc) {
            desc.insertAdjacentElement("afterend", extraEl);
        } else {
            card.appendChild(extraEl);
        }
    }

    extraEl.textContent = extraText;
}

function renderBoardCaseStates() {
    if (!document.body.classList.contains("page-forum-board")) {
        return;
    }

    const thread04Card = document.querySelector('.thread-card[href="thread_04.html"]');
    const thread05Card = document.querySelector('.thread-card[href="thread_05.html"]');
    const post404Card = document.querySelector('.thread-card[href="post_404.html"]');

    const t04Repaired = localStorage.getItem("echo_thread04_draft_repaired") === "true";
    const found0404 = boardHasInvestigationCode("found_0404");
    const foundYuan = boardHasInvestigationCode("found_yuan_mod005");
    const found404 = boardHasInvestigationCode("found_post404");

    const t05LogCount = getBoardT05LogCount();
    const p404Gate = getBoardPost404GateState();
    const p404Entered = Number(localStorage.getItem("echorest_post404_visit_count") || "0") > 0;
    const p404Compared = localStorage.getItem("echorest_post404_compared") === "1";

    // THREAD 04
    if (thread04Card) {
        if (t04Repaired) {
            setBoardCardState(
                thread04Card,
                "\u5173\u952e\u7ebf\u7d22",
                "state-danger",
                found0404
                    ? "\u6f2b\u753b\u6b8b\u9875\u5df2\u6062\u590d / 04:04 \u5173\u8054\u5df2\u786e\u8ba4"
                    : "\u6f2b\u753b\u6b8b\u9875\u5df2\u6062\u590d"
            );
        } else if (found0404) {
            setBoardCardState(
                thread04Card,
                "\u65f6\u5e8f\u5f02\u5e38",
                "state-danger",
                "04:04 \u5173\u8054\u5df2\u88ab\u8bb0\u5f55"
            );
        } else {
            setBoardCardState(
                thread04Card,
                "\u7d22\u5f15\u504f\u79fb",
                "state-warning",
                ""
            );
        }
    }

    // THREAD 05
    if (thread05Card) {
        if (t05LogCount <= 0) {
            setBoardCardState(
                thread05Card,
                "\u9ad8\u5173\u8054",
                "state-danger",
                ""
            );
        } else if (t05LogCount < 3) {
            setBoardCardState(
                thread05Card,
                "\u65e5\u5fd7\u8bfb\u53d6 " + t05LogCount + " / 3",
                "state-warning",
                "\u7ba1\u7406\u7f13\u5b58\u6b63\u5728\u88ab\u5c55\u5f00"
            );
        } else {
            setBoardCardState(
                thread05Card,
                "\u65e5\u5fd7\u8bfb\u53d6 3 / 3",
                "state-danger",
                "\u524d\u7f6e\u8c03\u67e5\u6761\u4ef6\u5df2\u6ee1\u8db3"
            );
        }
    }

    // POST 404
    if (post404Card) {
        if (p404Compared) {
            setBoardCardState(
                post404Card,
                "\u8def\u5f84\u5df2\u6bd4\u5bf9",
                "state-danger",
                "\u4e0e MOD_005 \u8def\u5f84\u91cd\u5408\u5df2\u786e\u8ba4"
            );
        } else if (p404Entered) {
            setBoardCardState(
                post404Card,
                "\u8def\u5f84\u5f85\u8bfb\u53d6",
                "state-danger",
                "\u53d7\u9650\u7d22\u5f15\u5df2\u88ab\u6253\u5f00"
            );
        } else if (p404Gate.unlocked) {
            setBoardCardState(
                post404Card,
                "\u51c6\u5165\u901a\u8fc7",
                "state-danger",
                "\u5f53\u524d\u8c03\u67e5\u8fdb\u5ea6\uff1a5 / 5"
            );
        } else if (p404Gate.doneCount > 0) {
            setBoardCardState(
                post404Card,
                "\u8c03\u67e5\u4e2d " + p404Gate.doneCount + " / " + p404Gate.totalCount,
                "state-warning",
                found404
                    ? "\u8be5\u6761\u76ee\u4e0d\u662f\u7f3a\u5931\uff0c\u800c\u662f\u53d7\u9650"
                    : ""
            );
        } else {
            setBoardCardState(
                post404Card,
                "\u4e0d\u53ef\u7528",
                "state-danger",
                ""
            );
        }
    }
}

function getBoardIndexDriftStage() {
    const t04Repaired = localStorage.getItem("echo_thread04_draft_repaired") === "true";
    const found0404 = boardHasInvestigationCode("found_0404");
    const foundYuan = boardHasInvestigationCode("found_yuan_mod005");
    const found404 = boardHasInvestigationCode("found_post404");
    const t05LogCount = getBoardT05LogCount();
    const p404Entered = Number(localStorage.getItem("echorest_post404_visit_count") || "0") > 0;
    const p404Compared = localStorage.getItem("echorest_post404_compared") === "1";
    const mirrorDone = localStorage.getItem("echorest_mirror_profile_generated") === "1";

    if (!t04Repaired) return "early";
    if (!found0404) return "find_0404";
    if (!foundYuan) return "find_yuan";
    if (!found404) return "find_404";
    if (t05LogCount < 3) return "open_t05_logs";
    if (!p404Entered) return "enter_post404";
    if (!p404Compared) return "compare_post404";
    if (!mirrorDone) return "mirror";
    return "late";
}

function getBoardIndexDriftPayload() {
    const stage = getBoardIndexDriftStage();

    if (stage === "early") {
        return {
            label: "\u7ad9\u52a1\u9644\u6ce8 / MAINT NOTE",
            title: "\u65e7\u7ad9\u7ef4\u62a4\u7b14\u8bb0",
            items: [
                "\u6062\u590d\u8fdb\u5ea6\uff1a\u7f13\u6162",
                "\u6700\u8fd1\u60c5\u51b5\uff1a\u516c\u5f00\u76ee\u5f55\u4e0e\u7f13\u5b58\u8ba1\u6570\u4e0d\u4e00\u81f4"
            ]
        };
    }

    if (stage === "find_0404") {
        return {
            label: "\u7ad9\u52a1\u9644\u6ce8 / MAINT NOTE",
            title: "\u65e7\u7ad9\u7ef4\u62a4\u7b14\u8bb0",
            items: [
                "\u6062\u590d\u8fdb\u5ea6\uff1a\u5c40\u90e8\u56de\u5199",
                "\u6700\u8fd1\u60c5\u51b5\uff1a\u6709\u4e00\u7ec4\u65f6\u95f4\u6233\u53cd\u590d\u843d\u5728\u540c\u4e00\u4f4d\u7f6e"
            ]
        };
    }

    if (stage === "find_yuan") {
        return {
            label: "\u7ad9\u52a1\u9644\u6ce8 / MAINT NOTE",
            title: "\u65e7\u7ad9\u7ef4\u62a4\u7b14\u8bb0",
            items: [
                "\u6062\u590d\u8fdb\u5ea6\uff1a\u91cd\u590d\u5199\u5165",
                "\u6700\u8fd1\u60c5\u51b5\uff1a\u7ba1\u7406\u7f16\u53f7\u4e0e\u65e7\u7f13\u5b58\u6807\u8bb0\u53d1\u751f\u91cd\u53e0"
            ]
        };
    }

    if (stage === "find_404") {
        return {
            label: "\u7ad9\u52a1\u9644\u6ce8 / MAINT NOTE",
            title: "\u65e7\u7ad9\u7ef4\u62a4\u7b14\u8bb0",
            items: [
                "\u6062\u590d\u8fdb\u5ea6\uff1a\u76ee\u5f55\u5916\u54cd\u5e94",
                "\u6700\u8fd1\u60c5\u51b5\uff1a\u67d0\u4e2a\u6761\u76ee\u4e0d\u6309\u7f3a\u9875\u89c4\u5219\u8fd4\u56de"
            ]
        };
    }

    if (stage === "open_t05_logs") {
        return {
            label: "\u7ad9\u52a1\u9644\u6ce8 / MAINT NOTE",
            title: "\u65e7\u7ad9\u7ef4\u62a4\u7b14\u8bb0",
            items: [
                "\u6062\u590d\u8fdb\u5ea6\uff1a\u91cd\u590d\u5199\u5165",
                "\u6700\u8fd1\u60c5\u51b5\uff1a\u7ad9\u52a1\u65e5\u5fd7\u4ecd\u6709\u4e09\u6bb5\u672a\u95ed\u5408\u8bb0\u5f55"
            ]
        };
    }

    if (stage === "enter_post404") {
        return {
            label: "\u7ad9\u52a1\u9644\u6ce8 / MAINT NOTE",
            title: "\u65e7\u7ad9\u7ef4\u62a4\u7b14\u8bb0",
            items: [
                "\u6062\u590d\u8fdb\u5ea6\uff1a\u76ee\u5f55\u5916\u54cd\u5e94",
                "\u6700\u8fd1\u60c5\u51b5\uff1a\u53d7\u9650\u6761\u76ee\u5f00\u59cb\u627f\u8ba4\u5f53\u524d\u4f1a\u8bdd\u8def\u5f84"
            ]
        };
    }

    if (stage === "compare_post404") {
        return {
            label: "\u7ad9\u52a1\u9644\u6ce8 / MAINT NOTE",
            title: "\u65e7\u7ad9\u7ef4\u62a4\u7b14\u8bb0",
            items: [
                "\u6062\u590d\u8fdb\u5ea6\uff1a\u8def\u5f84\u5bf9\u7167\u4e2d",
                "\u6700\u8fd1\u60c5\u51b5\uff1a\u4e24\u7ec4\u7ef4\u4fee\u8def\u5f84\u5c1a\u672a\u5b8c\u6210\u5bf9\u7167"
            ]
        };
    }

    if (stage === "mirror") {
        return {
            label: "\u7ad9\u52a1\u9644\u6ce8 / MAINT NOTE",
            title: "\u65e7\u7ad9\u7ef4\u62a4\u7b14\u8bb0",
            items: [
                "\u6062\u590d\u8fdb\u5ea6\uff1a\u672c\u5730\u75d5\u8ff9\u8bfb\u53d6\u4e2d",
                "\u6700\u8fd1\u60c5\u51b5\uff1a\u6d4f\u89c8\u5668\u4fa7\u7f13\u5b58\u5df2\u8fdb\u5165\u53ef\u8bfb\u8303\u56f4"
            ]
        };
    }

    return {
        label: "\u7ad9\u52a1\u9644\u6ce8 / MAINT NOTE",
        title: "\u65e7\u7ad9\u7ef4\u62a4\u7b14\u8bb0",
        items: [
            "\u6062\u590d\u8fdb\u5ea6\uff1a\u6301\u7eed\u5199\u5165",
            "\u6700\u8fd1\u60c5\u51b5\uff1a\u4e0b\u4e00\u5c42\u8bb0\u5f55\u5df2\u8fdb\u5165\u53ef\u8c03\u7528\u72b6\u6001"
        ]
    };
}

function renderBoardIndexDriftState() {
    if (!document.body.classList.contains("page-forum-board")) {
        return;
    }

    const sideCard = document.querySelector(".forum-side-card");
    if (!sideCard) return;

    const labelEl = sideCard.querySelector(".section-label");
    const titleEl = sideCard.querySelector(".section-title");
    const listEl = sideCard.querySelector(".notice-list");

    if (!listEl) return;

    const payload = getBoardIndexDriftPayload();

    if (labelEl) {
        labelEl.textContent = payload.label;
    }

    if (titleEl) {
        titleEl.textContent = payload.title;
    }

    sideCard.classList.add("index-drift-card");
    listEl.innerHTML = "";

    payload.items.forEach(function (text) {
        const li = document.createElement("li");
        li.className = "index-drift-item";
        li.textContent = text;
        listEl.appendChild(li);
    });
}

function renderBoardSearchChipsByStage() {
    if (!document.body.classList.contains("page-forum-board")) {
        return;
    }

    const row = document.querySelector(".search-chip-row");
    if (!row) return;

    const stage = getBoardIndexDriftStage();

    let chips = [
        "\u7ea2\u679c\u5b50",
        "\u6851\u79d1\u6995\u5c5e",
        "\u80a9\u8180",
        "\u80cc\u540e",
        "\u5899\u6d1e",
        "\u97f3\u9891"
    ];

    if (
        stage === "find_yuan" ||
        stage === "find_404" ||
        stage === "open_t05_logs" ||
        stage === "enter_post404" ||
        stage === "compare_post404" ||
        stage === "mirror" ||
        stage === "late"
    ) {
        chips.push("04:04");
    }

    if (
        stage === "find_404" ||
        stage === "open_t05_logs" ||
        stage === "enter_post404" ||
        stage === "compare_post404" ||
        stage === "mirror" ||
        stage === "late"
    ) {
        chips.push("\u9e22");
    }

    if (
        stage === "enter_post404" ||
        stage === "compare_post404" ||
        stage === "mirror" ||
        stage === "late"
    ) {
        chips.push("post_404");
    }

    row.innerHTML = "";

    chips.forEach(function (text) {
        const btn = document.createElement("button");
        btn.className = "search-chip";
        btn.type = "button";
        btn.setAttribute("data-search", text);
        btn.textContent = text;
        row.appendChild(btn);
    });
}

function getThreadSequenceUnlocks() {
    const viewed01 = Number(localStorage.getItem("echo_thread01_visit_count") || "0") > 0;
    const repaired02 = localStorage.getItem("echo_thread02_resume_repaired") === "true";
    const repaired03 = localStorage.getItem("echo_thread03_audio_repaired") === "true";
    const repaired04 = localStorage.getItem("echo_thread04_draft_repaired") === "true";

    return {
        thread01: true,
        thread02: viewed01,
        thread03: repaired02,
        thread04: repaired03,
        thread05: repaired04
    };
}

function cacheBoardCardOriginal(card) {
    if (!card) return;

    const titleEl = card.querySelector("h3");
    const metaEl = card.querySelector(".thread-meta");
    const descEl = card.querySelector(".thread-desc");

    if (titleEl && !card.dataset.originTitle) {
        card.dataset.originTitle = titleEl.textContent;
    }

    if (metaEl && !card.dataset.originMeta) {
        card.dataset.originMeta = metaEl.textContent;
    }

    if (descEl && !card.dataset.originDesc) {
        card.dataset.originDesc = descEl.textContent;
    }

    if (!card.dataset.realHref) {
        card.dataset.realHref = card.getAttribute("href") || "";
    }
}

function setBoardSequenceState(selector, unlocked) {
    const card = document.querySelector(selector);
    if (!card) return;

    cacheBoardCardOriginal(card);

    const titleEl = card.querySelector("h3");
    const metaEl = card.querySelector(".thread-meta");
    const descEl = card.querySelector(".thread-desc");

    if (unlocked) {
        card.classList.remove("thread-card-sealed");
        card.dataset.locked = "0";

        if (card.dataset.realHref) {
            card.setAttribute("href", card.dataset.realHref);
        }

        if (titleEl && card.dataset.originTitle) {
            titleEl.textContent = card.dataset.originTitle;
        }

        if (metaEl && card.dataset.originMeta) {
            metaEl.textContent = card.dataset.originMeta;
        }

        if (descEl && card.dataset.originDesc) {
            descEl.textContent = card.dataset.originDesc;
        }

        return;
    }

    card.classList.add("thread-card-sealed");
    card.dataset.locked = "1";
    card.setAttribute("href", "#");

    setBoardCardState(
        card,
        "\u7d22\u5f15\u5c01\u5b58",
        "state-warning",
        "\u7b49\u5f85\u524d\u5e8f\u8bb0\u5f55\u6062\u590d"
    );

    if (titleEl) {
        titleEl.textContent = "\u2592\u2592\u2592\u2592\u2592\u2592 / INDEX SEALED";
    }

    if (metaEl) {
        metaEl.textContent = "\u6807\u7b7e\uff1a\u672a\u89e3\u9501 / \u7f13\u5b58\u6ce2\u52a8 / \u5f85\u6821\u9a8c";
    }

    if (descEl) {
        descEl.textContent = "\u8be5\u8bb0\u5f55\u5c1a\u672a\u7a33\u5b9a\u6062\u590d\uff0c\u8bf7\u5148\u5904\u7406\u524d\u5e8f\u7ebf\u7d22\u3002";
    }
}

function renderBoardThreadSequenceLocks() {
    if (!document.body.classList.contains("page-forum-board")) {
        return;
    }

    const unlocks = getThreadSequenceUnlocks();

    setBoardSequenceState('.thread-card[href="thread_01.html"]', true);
    setBoardSequenceState('.thread-card[href="thread_02.html"]', unlocks.thread02);
    setBoardSequenceState('.thread-card[href="thread_03.html"]', unlocks.thread03);
    setBoardSequenceState('.thread-card[href="thread_04.html"]', unlocks.thread04);
    setBoardSequenceState('.thread-card[href="thread_05.html"]', unlocks.thread05);
}

function isThreadSequenceUnlocked(threadKey) {
    const unlocks = getThreadSequenceUnlocks();
    return Boolean(unlocks[threadKey]);
}

function enforceThreadSequenceGate(threadKey) {
    if (isThreadSequenceUnlocked(threadKey)) {
        return true;
    }

    localStorage.setItem(
        "echo_board_gate_notice",
        "\u68c0\u6d4b\u5230\u5c1d\u8bd5\u8df3\u8fc7\u524d\u5e8f\u7ebf\u7d22\uff0c\u5df2\u56de\u9000\u5230\u76ee\u5f55\u3002"
    );

    window.location.href = "board.html";
    return false;
}

function getCheckedFileCount() {
    let count = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("echo_file_checked_")) {
            count += 1;
        }
    }

    return count;
}


function bindFileInspectors() {
    const files = document.querySelectorAll(".inspectable-file");

    if (!files.length) {
        return;
    }

    files.forEach((node) => {
        node.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            openFileInspector(node);
        });
    });
}

function openFileInspector(node) {
    let overlay = document.getElementById("fileInspectorOverlay");

    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "fileInspectorOverlay";
        overlay.className = "file-inspector-overlay";

        const panel = document.createElement("div");
        panel.className = "file-inspector-panel";

        const label = document.createElement("div");
        label.className = "file-inspector-label";
        label.textContent = TXT.inspectorLabel;

        const title = document.createElement("h2");
        title.className = "file-inspector-title";
        title.id = "fileInspectorTitle";

        const body = document.createElement("div");
        body.className = "file-inspector-body";
        body.id = "fileInspectorBody";

        const status = document.createElement("div");
        status.className = "file-inspector-status";
        status.id = "fileInspectorStatus";

        const actions = document.createElement("div");
        actions.className = "file-inspector-actions";

        const recheckBtn = document.createElement("button");
        recheckBtn.className = "file-inspector-btn";
        recheckBtn.type = "button";
        recheckBtn.id = "fileInspectorRecheckBtn";
        recheckBtn.textContent = TXT.inspectorRecheck;

        const closeBtn = document.createElement("button");
        closeBtn.className = "file-inspector-btn secondary";
        closeBtn.type = "button";
        closeBtn.textContent = TXT.inspectorClose;
        closeBtn.addEventListener("click", () => {
            overlay.classList.remove("active");
        });

        actions.appendChild(recheckBtn);
        actions.appendChild(closeBtn);

        panel.appendChild(label);
        panel.appendChild(title);
        panel.appendChild(body);
        panel.appendChild(status);
        panel.appendChild(actions);

        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                overlay.classList.remove("active");
            }
        });
    }

    const fileId = node.dataset.fileId || "unknown";
    const fileName = node.dataset.fileName || "unknown";
    const filePath = node.dataset.filePath || "-";
    const fileStatus = node.dataset.fileStatus || "-";
    const fileModified = node.dataset.fileModified || "-";
    const fileRelated = node.dataset.fileRelated || "-";
    const fileNote = node.dataset.fileNote || "-";

    addInvestigationLog(
        "inspect_file_" + fileId,
        "[INVESTIGATION] 已检查缓存文件：" + fileName + "。",
        false
    );

    const title = document.getElementById("fileInspectorTitle");
    const body = document.getElementById("fileInspectorBody");
    const status = document.getElementById("fileInspectorStatus");
    const recheckBtn = document.getElementById("fileInspectorRecheckBtn");

    if (title) {
        title.textContent = fileName;
    }

    if (body) {
        body.innerHTML = "";
        appendInspectorRow(body, TXT.inspectorFileName, fileName);
        appendInspectorRow(body, TXT.inspectorPath, filePath);
        appendInspectorRow(body, TXT.inspectorStatus, getDynamicFileStatus(fileId, fileStatus));
        appendInspectorRow(body, TXT.inspectorModified, fileModified);
        appendInspectorRow(body, TXT.inspectorRelated, fileRelated);
        appendInspectorRow(body, TXT.inspectorNote, fileNote);

        const extraNotes = getFileExtraNotes(fileId);
        extraNotes.forEach((note) => {
            appendInspectorRow(body, "LINK", note);
        });
    }

    if (status) {
        status.textContent = "";
    }

    if (recheckBtn) {
        recheckBtn.onclick = () => {
            if (status) {
                status.textContent = TXT.inspectorRecheckStart;
            }

            setTimeout(() => {
                localStorage.setItem("echo_file_checked_" + fileId, "true");

                addInvestigationLog(
                    "recheck_file_" + fileId,
                    "[INVESTIGATION] 已重新校验缓存文件：" + fileName + "。",
                    false
                );

                if (status) {
                    status.textContent = TXT.inspectorRecheckDone;
                }

                renderRepairLog();
            }, 700);
            renderWorkConsole();
        };
    }

    overlay.classList.add("active");
}

function appendInspectorRow(container, label, value) {
    const row = document.createElement("div");
    row.className = "file-inspector-row";

    const key = document.createElement("span");
    key.className = "file-inspector-key";
    key.textContent = label;

    const val = document.createElement("span");
    val.className = "file-inspector-value";
    val.textContent = value;

    row.appendChild(key);
    row.appendChild(val);
    container.appendChild(row);
}

function getDynamicFileStatus(fileId, originalStatus) {
    const touchedRestricted = Boolean(localStorage.getItem("echo_last_restricted_tag"));

    if (touchedRestricted && (fileId === "candle_missing" || fileId === "rose_missing" || fileId === "shoulder_shadow_scene")) {
        return originalStatus + " / " + TXT.inspectorInterrupted;
    }

    return originalStatus;
}

function getFileExtraNotes(fileId) {
    const notes = [];

    const repairedNews01 = localStorage.getItem("echo_thread01_news_repaired") === "true";
    const repairedResume02 = localStorage.getItem("echo_thread02_resume_repaired") === "true";
    const repairedAudio03 = localStorage.getItem("echo_thread03_audio_repaired") === "true";
    const repairedDraft04 = localStorage.getItem("echo_thread04_draft_repaired") === "true";

    if ((fileId === "birds_window_scene" || fileId === "news_plant_tree" || fileId === "plant_owner_avatar") && repairedNews01) {
        notes.push(TXT.inspectorNewsRestored);
    }

    if ((fileId === "wangjie_resume_fragment" || fileId === "wangjie_resume_recovered" || fileId === "shoulder_shadow_scene") && repairedResume02) {
        notes.push(TXT.inspectorResumeRestored);
    }

    if ((fileId === "wall_hole_01" || fileId === "audio_wall_behind" || fileId === "wall_repair_ad") && repairedAudio03) {
        notes.push(TXT.inspectorAudioRestored);
    }

    if (
        (fileId === "draft_page_17_corrupt" ||
            fileId === "draft_page_17_restored" ||
            fileId === "clock_trace_0404") &&
        repairedDraft04
    ) {
        notes.push(TXT.inspectorDraftRestored);
    }

    return notes;
}

function handleThread03Page(now) {
    const accessGranted = localStorage.getItem("echo_access_granted");
    const workerId = localStorage.getItem("echo_worker_id");
    const sessionId = localStorage.getItem("echo_session_id") || "SESSION_13";

    const threadWorkerValue = document.getElementById("thread03WorkerValue");
    const threadSessionValue = document.getElementById("thread03SessionValue");
    const threadVisitValue = document.getElementById("thread03VisitValue");
    const threadStateValue = document.getElementById("thread03StateValue");
    const threadStatusText = document.getElementById("thread03StatusText");

    const moreCountMain = document.getElementById("thread03MoreCount");
    const moreCountMirrors = document.querySelectorAll(".thread03MoreCountMirror");

    const repairAudioBtn = document.getElementById("repairAudioBtn");
    const audioBrokenBlock = document.getElementById("audioBrokenBlock");
    const audioRecoveredBlock = document.getElementById("audioRecoveredBlock");

    const memoryStrip = document.getElementById("thread03MemoryStrip");
    const injectedAnchor = document.getElementById("thread03InjectedReplyAnchor");

    if (!threadWorkerValue || !threadSessionValue || !threadVisitValue || !threadStateValue || !threadStatusText) {
        return;
    }

    if (accessGranted !== "true" || !workerId) {
        alert(TXT.alertNeedLogin);
        window.location.href = "../../login.html";
        return;
    }
    if (!enforceThreadSequenceGate("thread03")) {
        return;
    }

    threadWorkerValue.textContent = workerId;
    threadSessionValue.textContent = sessionId;

    let threadVisitCount = Number(localStorage.getItem("echo_thread03_visit_count") || "0");
    threadVisitCount += 1;
    localStorage.setItem("echo_thread03_visit_count", String(threadVisitCount));

    threadVisitValue.textContent = String(threadVisitCount);

    if (threadVisitCount >= 2) {
        threadStateValue.textContent = TXT.thread03StateShifted;
        threadStatusText.textContent = TXT.thread03ReadingRepeat;
    } else {
        threadStateValue.textContent = TXT.thread03StateNormal;
        threadStatusText.textContent = TXT.thread03Reading;
    }

    const dynamicCount = getDynamicThread03Count(threadVisitCount);

    if (moreCountMain) {
        moreCountMain.textContent = "[" + dynamicCount + "]";
    }

    if (moreCountMirrors.length > 0) {
        moreCountMirrors.forEach((node) => {
            node.textContent = "[" + dynamicCount + "]";
        });
    }

    const repaired = localStorage.getItem("echo_thread03_audio_repaired") === "true";

    if (repairAudioBtn && audioBrokenBlock && audioRecoveredBlock) {
        if (repaired) {
            audioBrokenBlock.classList.add("hidden");
            audioRecoveredBlock.classList.remove("hidden");
            threadStatusText.textContent = TXT.thread03AudioAlreadyDone;
        }

        repairAudioBtn.addEventListener("click", () => {
            threadStatusText.textContent = TXT.thread03AudioStart;

            setTimeout(() => {
                localStorage.setItem("echo_thread03_audio_repaired", "true");
                addInvestigationLog(
                    "repair_thread03_audio",
                    "[INVESTIGATION] 已修复 THREAD_03 音频转写，墙体缓存出现“不要让他看见洞”。",
                    true
                );
                renderRepairLog();
                renderWorkConsole();
                audioBrokenBlock.classList.add("hidden");
                audioRecoveredBlock.classList.remove("hidden");
                threadStatusText.textContent = TXT.thread03AudioDone;
            }, 700);
        });
    }

    applyThreadHeaderDrift(threadStateValue, threadStatusText, "thread03", threadVisitCount);
    applyThreadHeaderVisualDrift(threadStateValue, threadStatusText, "thread03");

    if (memoryStrip && shouldShowInterruptStrip()) {
        memoryStrip.classList.remove("hidden");
        memoryStrip.textContent = TXT.interruptRecovered;
    }

    if (injectedAnchor && localStorage.getItem("echo_thread02_resume_repaired") === "true" && !document.getElementById("thread03InjectedFrom02")) {
        const article = createInjectedThread03Block(
            "thread03InjectedFrom02",
            TXT.injectedMeta03,
            TXT.injectedToThread03From02
        );
        injectedAnchor.appendChild(article);
    }

    if (injectedAnchor && threadVisitCount >= 2 && !document.getElementById("thread03InjectedSecondVisit")) {
        const article = createInjectedThread03Block(
            "thread03InjectedSecondVisit",
            TXT.injectedMeta03,
            TXT.injectedToThread03SecondVisit
        );
        injectedAnchor.appendChild(article);
    }

    localStorage.setItem("echo_last_thread03_time", now);
}

function getDynamicThread03Count(visitCount) {
    const counts = [50239, 50244, 50251, 50239, 50258];
    const index = (visitCount - 1) % counts.length;
    return counts[index];
}

function createInjectedThread03Block(id, meta, text) {
    const article = document.createElement("article");
    article.id = id;
    article.className = "forum-post forum-post-note injected-cache-block";

    article.innerHTML =
        '<div class="forum-post-head">' +
        '<div class="forum-post-user">' +
        '<div class="news-badge">CACHE</div>' +
        '<div>' +
        '<h2 class="forum-post-author">' + TXT.injectedAuthor + '</h2>' +
        '<p class="forum-post-meta">' + meta + '</p>' +
        '</div>' +
        '</div>' +
        '<span class="forum-post-floor">ADD</span>' +
        '</div>' +
        '<div class="reply-line">' +
        '<div class="reply-avatar-slot">头像</div>' +
        '<p>' + text + '</p>' +
        '</div>';

    return article;
}

function handleThread04Page(now) {
    const accessGranted = localStorage.getItem("echo_access_granted");
    const workerId = localStorage.getItem("echo_worker_id");
    const sessionId = localStorage.getItem("echo_session_id") || "SESSION_13";

    const threadWorkerValue = document.getElementById("thread04WorkerValue");
    const threadSessionValue = document.getElementById("thread04SessionValue");
    const threadVisitValue = document.getElementById("thread04VisitValue");
    const threadStateValue = document.getElementById("thread04StateValue");
    const threadStatusText = document.getElementById("thread04StatusText");

    const moreCountMain = document.getElementById("thread04MoreCount");
    const moreCountMirrors = document.querySelectorAll(".thread04MoreCountMirror");

    const repairDraftBtn = document.getElementById("repairDraftBtn");
    const draftBrokenBlock = document.getElementById("draftBrokenBlock");
    const draftRecoveredBlock = document.getElementById("draftRecoveredBlock");

    const memoryStrip = document.getElementById("thread04MemoryStrip");
    const injectedAnchor = document.getElementById("thread04InjectedReplyAnchor");

    const clockNowValue = document.getElementById("clockNowValue");
    const clockCacheValue = document.getElementById("clockCacheValue");

    if (!threadWorkerValue || !threadSessionValue || !threadVisitValue || !threadStateValue || !threadStatusText) {
        return;
    }

    if (accessGranted !== "true" || !workerId) {
        alert(TXT.alertNeedLogin);
        window.location.href = "../../login.html";
        return;
    }
    if (!enforceThreadSequenceGate("thread04")) {
        return;
    }
    threadWorkerValue.textContent = workerId;
    threadSessionValue.textContent = sessionId;

    let threadVisitCount = Number(localStorage.getItem("echo_thread04_visit_count") || "0");
    threadVisitCount += 1;
    localStorage.setItem("echo_thread04_visit_count", String(threadVisitCount));

    threadVisitValue.textContent = String(threadVisitCount);

    if (threadVisitCount >= 2) {
        threadStateValue.textContent = TXT.thread04StateShifted;
        threadStatusText.textContent = TXT.thread04ReadingRepeat;
    } else {
        threadStateValue.textContent = TXT.thread04StateNormal;
        threadStatusText.textContent = TXT.thread04Reading;
    }

    const dynamicCount = getDynamicThread04Count(threadVisitCount);

    if (moreCountMain) {
        moreCountMain.textContent = "[" + dynamicCount + "]";
    }

    if (moreCountMirrors.length > 0) {
        moreCountMirrors.forEach((node) => {
            node.textContent = "[" + dynamicCount + "]";
        });
    }

    if (clockNowValue) {
        clockNowValue.textContent = new Date().toLocaleTimeString("zh-CN", {
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    if (clockCacheValue) {
        clockCacheValue.textContent = getThread04ClockCache(threadVisitCount);
    }

    const repaired = localStorage.getItem("echo_thread04_draft_repaired") === "true";

    if (repairDraftBtn && draftBrokenBlock && draftRecoveredBlock) {
        if (repaired) {
            draftBrokenBlock.classList.add("hidden");
            draftRecoveredBlock.classList.remove("hidden");
            threadStatusText.textContent = TXT.thread04DraftAlreadyDone;
        }

        repairDraftBtn.addEventListener("click", () => {
            threadStatusText.textContent = TXT.thread04DraftStart;

            setTimeout(() => {
                localStorage.setItem("echo_thread04_draft_repaired", "true");
                addInvestigationLog(
                    "repair_thread04_draft",
                    "[INVESTIGATION] 已修复 THREAD_04 漫画残页，04:04 与 draft_page_404 关联增强。",
                    true
                );
                renderRepairLog();
                renderWorkConsole();
                draftBrokenBlock.classList.add("hidden");
                draftRecoveredBlock.classList.remove("hidden");
                threadStatusText.textContent = TXT.thread04DraftDone;
            }, 700);
        });
    }

    applyThreadHeaderDrift(threadStateValue, threadStatusText, "thread04", threadVisitCount);
    applyThreadHeaderVisualDrift(threadStateValue, threadStatusText, "thread04");
    if (memoryStrip && shouldShowInterruptStrip()) {
        memoryStrip.classList.remove("hidden");
        memoryStrip.textContent = TXT.interruptRecovered;
    }

    if (injectedAnchor && localStorage.getItem("echo_thread03_audio_repaired") === "true" && !document.getElementById("thread04InjectedFrom03")) {
        const article = createInjectedThread04Block(
            "thread04InjectedFrom03",
            TXT.injectedMeta04,
            TXT.injectedToThread04From03
        );
        injectedAnchor.appendChild(article);
    }

    if (injectedAnchor && threadVisitCount >= 2 && !document.getElementById("thread04InjectedSecondVisit")) {
        const article = createInjectedThread04Block(
            "thread04InjectedSecondVisit",
            TXT.injectedMeta04,
            TXT.injectedToThread04SecondVisit
        );
        injectedAnchor.appendChild(article);
    }

    localStorage.setItem("echo_last_thread04_time", now);
}

function getDynamicThread04Count(visitCount) {
    const counts = [50240, 50244, 50249, 50404, 50240];
    const index = (visitCount - 1) % counts.length;
    return counts[index];
}

function getThread04ClockCache(visitCount) {
    const traces = ["03:58", "04:01", "04:03", "04:04", "04:04"];
    const index = (visitCount - 1) % traces.length;
    return traces[index];
}

function createInjectedThread04Block(id, meta, text) {
    const article = document.createElement("article");
    article.id = id;
    article.className = "forum-post forum-post-note injected-cache-block";

    article.innerHTML =
        '<div class="forum-post-head">' +
        '<div class="forum-post-user">' +
        '<div class="news-badge">CACHE</div>' +
        '<div>' +
        '<h2 class="forum-post-author">' + TXT.injectedAuthor + '</h2>' +
        '<p class="forum-post-meta">' + meta + '</p>' +
        '</div>' +
        '</div>' +
        '<span class="forum-post-floor">ADD</span>' +
        '</div>' +
        '<div class="reply-line">' +
        '<div class="reply-avatar-slot">头像</div>' +
        '<p>' + text + '</p>' +
        '</div>';

    return article;
}


/* ================================
   THREAD 05 - Yuan / Admin Cache
   Static GitHub Pages safe patch
   ================================ */

(function () {
    window.TXT = window.TXT || {};

    window.TXT.t05 = {
        openAdmin: "\u6253\u5f00 ADMIN LOG",
        openRestore: "\u6253\u5f00 RESTORE LOG",
        openCache: "\u6253\u5f00 USER CACHE",
        locked: "\u9501\u5b9a\uff1a\u9700\u8981\u5148\u8bfb\u53d6\u4e0a\u4e00\u7ea7\u65e5\u5fd7\u3002",

        adminTitle: "ADMIN LOG / \u65b0\u4efb\u7ba1\u7406\u5458\u4e34\u65f6\u8bb0\u5f55",
        restoreTitle: "RESTORE LOG / \u81ea\u52a8\u4fee\u590d\u4efb\u52a1\u8bb0\u5f55",
        cacheTitle: "USER CACHE / \u7528\u6237\u7f13\u5b58\u6b8b\u7247",

        adminLines: [
            "[04:00:03] MOD_005 / \u9e22 / \u6743\u9650\u540c\u6b65\u5b8c\u6210\u3002",
            "[04:00:11] \u5de1\u67e5\u8303\u56f4\uff1athread_01, thread_02, thread_03, thread_04\u3002",
            "[04:01:19] \u4eba\u5458\u53d8\u66f4\uff1a\u524d\u53f0\u6807\u8bb0\u4e3a\u201c\u65b0\u6765\u7684\u7ba1\u7406\u5458\u201d\u3002",
            "[04:01:44] \u7528\u6237\u6295\u8bc9\uff1a\u591a\u4e2a\u5e16\u5b50\u663e\u793a\u3010\u65e0\u6cd5\u663e\u793a\u3011\u3002",
            "[04:02:09] \u540e\u7aef\u6821\u9a8c\uff1a\u5185\u5bb9\u6b63\u5e38\u3002\u524d\u7aef\u663e\u793a\u5f02\u5e38\u3002",
            "[04:03:01] \u7ba1\u7406\u5458\u5907\u6ce8\uff1a\u4e0d\u8981\u628a\u90a3\u4e2a\u76ee\u5f55\u5916\u6761\u76ee\u5f53\u6210\u666e\u901a\u5e16\u5b50\u3002\u5b83\u5bf9\u91cd\u590d\u8bfb\u53d6\u7684\u53cd\u5e94\u4e0d\u50cf\u5185\u5bb9\u9875\u3002",
            "[04:03:48] \u5f02\u5e38\uff1a\u5f53\u524d\u7ef4\u4fee\u5458\u7f16\u53f7\u4e0e MOD_005 \u8bbf\u95ee\u8def\u5f84\u76f8\u4f3c\u5ea6 99.73%\u3002"
        ],

        restoreLines: [
            "[RESTORE] thread_01/news_leaf_01\uff1a\u7531 sjahqiuhdiuq \u81ea\u52a8\u4fee\u590d\u3002",
            "[RESTORE] thread_02/resume_wang_02\uff1a\u7531 sjahqiuhdiuq \u81ea\u52a8\u4fee\u590d\u3002",
            "[RESTORE] thread_03/audio_wall_behind.wav\uff1a\u8f6c\u5199\u4fee\u590d\u5b8c\u6210\u3002",
            "[RESTORE] thread_04/draft_page_17\uff1a\u6b8b\u9875\u4fee\u590d\u5b8c\u6210\u3002",
            "[RESTORE] thread_05/admin_yuan\uff1a\u6b63\u5728\u88ab\u7b2c\u4e8c\u6b21\u6253\u5f00\u3002",
            "[RESTORE] auto_repair_source\uff1asjahqiuhdiuq \u4ec5\u51fa\u73b0\u4e8e\u4fee\u590d\u5199\u5165\uff0c\u672a\u51fa\u73b0\u5728\u4efb\u4f55\u53ef\u89c1\u7528\u6237\u5217\u8868\u3002",
            "[WARNING] \u5f53\u524d\u4fee\u590d\u8def\u5f84\u4e0e\u65e7\u8bb0\u5f55\u53d1\u751f\u4e0d\u5e94\u51fa\u73b0\u7684\u91cd\u5408\u3002"
        ],

        cacheLines: [
            "cache_user_005.name = \u9e22",
            "cache_user_005.role = \u201c\u65b0\u6765\u7684\u7ba1\u7406\u5458\u201d\uff08\u524d\u53f0\u6807\u8bb0\uff09",
            "cache_user_005.last_input = \u4e0d\u9700\u8981\u4fee\u590d404",
            "cache_user_005.status = \u5df2\u4ece\u524d\u7aef\u7d22\u5f15\u79fb\u9664",
            "cache_user_005.source = previous_repairer",
            "current_repairer.role = \u81ea\u7531\u63a5\u6848\u7ef4\u4fee\u5458",
            "current_repairer.path = login > dashboard > board > thread_01 > thread_02 > thread_03 > thread_04 > thread_05",
            "match_result = \u5f53\u524d\u6d41\u7a0b\u4e0e\u65e7\u8bb0\u5f55\u53d1\u751f\u9ad8\u5ea6\u91cd\u5408"
        ],

        fileRestore: "\u6587\u4ef6\uff1arestore_loop_0404.log\n\u72b6\u6001\uff1a\u6301\u7eed\u5199\u5165\n\u5907\u6ce8\uff1a04:04 \u4e0d\u662f\u949f\u70b9\u3002\u540c\u6b65\u5931\u8d25\u540e\uff0c\u7f13\u5b58\u4f1a\u88ab\u62d6\u56de\u8fd9\u4e2a\u4f4d\u7f6e\u91cd\u65b0\u5199\u5165\u3002",        fileFruit: "\u6587\u4ef6\uff1aunknown_fruit_photo.tmp\n\u72b6\u6001\uff1a\u56fe\u50cf\u9884\u89c8\u5931\u8d25\n\u5907\u6ce8\uff1a\u7167\u7247\u4e2d\u6709\u9633\u53f0\u3001\u7ea2\u679c\u5b50\u3001\u9e1f\u722a\u75d5\uff0c\u4ee5\u53ca\u4e00\u4e2a\u4e0d\u5e94\u8be5\u51fa\u73b0\u5728\u53cd\u5149\u91cc\u7684\u7528\u6237\u5934\u50cf\u3002",
        file404: "\u6587\u4ef6\uff1apost_404.index\n\u72b6\u6001\uff1a\u7981\u6b62\u4fee\u590d\n\u5907\u6ce8\uff1a\u8fd9\u4e0d\u662f\u7f3a\u5931\u9875\u9762\u3002\u5b83\u6b63\u5728\u7b49\u5f85\u4e00\u4e2a\u4f1a\u4fee\u590d\u5b83\u7684\u4eba\u3002",

        morse: "\u89e3\u7801\u7ed3\u679c\uff1aSOS / \u4e0d\u8981\u6253\u5f00 post_404 / \u4f60\u4e0d\u662f\u7b2c\u4e00\u4e2a\u3002",
        allUnlocked: "\u4e09\u4e2a\u7f13\u5b58\u9762\u677f\u5747\u5df2\u8bfb\u53d6\u3002\u9690\u85cf\u540c\u6b65\u5165\u53e3\u5df2\u66b4\u9732\u3002",

        crashTitle: "EchoRest \u5f3a\u5236\u91cd\u65b0\u540c\u6b65",
        crashBody: "\u68c0\u6d4b\u5230\u7ef4\u4fee\u5458\u6b63\u5728\u5c1d\u8bd5\u4fee\u590d post_404\u3002\u8be5\u5bf9\u8c61\u4e0d\u662f\u7f3a\u5931\u6587\u4ef6\u3002\u8be5\u5bf9\u8c61\u4f1a\u8bb0\u5f55\u4fee\u590d\u8005\u3002",
        crashButton: "\u786e\u8ba4\u91cd\u65b0\u540c\u6b65",

        crashTitleStrong: "\u5f53\u524d\u7ef4\u4fee\u5458\u5df2\u88ab\u8bb0\u5f55",
        crashBodyStrong: "\u4f60\u521a\u624d\u70b9\u51fb\u7684\u4e0d\u662f\u7f3a\u5931\u5185\u5bb9\u3002\u90a3\u662f\u4e00\u6bb5\u88ab\u9690\u85cf\u7684\u7ef4\u4fee\u6307\u4ee4\u3002",
        crashWarningStrong: "\u5f53\u524d\u9875\u9762\u6ca1\u6709\u88ab\u4fee\u590d\u3002\u5f53\u524d\u9875\u9762\u6b63\u5728\u4fee\u590d\u4f60\u7684\u8bbf\u95ee\u8def\u5f84\u3002",
        crashButtonStrong: "\u786e\u8ba4\u6211\u662f\u5f53\u524d\u7ef4\u4fee\u5458",

        terminalLine1: "\u7ef4\u4fee\u5bf9\u8c61\uff1a\u5f53\u524d\u9875\u9762",
        terminalLine2: "\u68c0\u6d4b\u5230\u9690\u85cf\u7ef4\u4fee\u6307\u4ee4",
        terminalLine3: "\u6b63\u5728\u6bd4\u5bf9\u5f53\u524d\u7ef4\u4fee\u5458\u8def\u5f84",
        terminalLine4: "\u5339\u914d\u5bf9\u8c61\uff1aMOD_005 / \u9e22",
        terminalLine5: "\u8def\u5f84\u76f8\u4f3c\u5ea6\uff1a99.73%",
        terminalLine6: "\u8b66\u544a\uff1a\u672c\u6b21\u70b9\u51fb\u5df2\u88ab\u5199\u5165\u7ba1\u7406\u5458\u7f13\u5b58",
        terminalLine7: "\u4e0d\u8981\u7ee7\u7eed\u4fee\u590d 404",

        logAdmin: "THREAD_05_ADMIN_LOG_OPENED",
        logRestore: "THREAD_05_RESTORE_LOG_OPENED",
        logCache: "THREAD_05_USER_CACHE_OPENED",
        log404: "THREAD_05_POST_404_TOUCHED",

        searchYuanTitle: "thread_05 / \u9e22",
        searchYuanBody: "\u88ab\u6807\u8bb0\u4e3a\u201c\u65b0\u6765\u7684\u7ba1\u7406\u5458\u201d\uff0c\u4f46\u540e\u53f0\u8bb0\u5f55\u4e0e\u524d\u7aef\u5f02\u5e38\u5e76\u4e0d\u652f\u6301\u201c\u65b0\u6765\u201d\u8fd9\u4e2a\u8bf4\u6cd5\u3002\u76f8\u5173\u8bcd\uff1aMOD_005\u3001404\u3001\u9e22\u3002",
        searchAdminTitle: "admin_yuan.cache",
        searchAdminBody: "\u7ba1\u7406\u5458\u7f13\u5b58\u6b8b\u7247\u3002\u8bbf\u95ee\u8def\u5f84\u4e0e\u5f53\u524d\u7ef4\u4fee\u8bb0\u5f55\u5b58\u5728\u9ad8\u5ea6\u91cd\u53e0\uff0c\u4f46\u7f13\u5b58\u5bf9\u8c61\u5e76\u6ca1\u6709\u628a\u81ea\u5df1\u5199\u6210\u201c\u5f53\u524d\u7528\u6237\u201d\u3002",
        search404Title: "post_404.index",
        search404Body: "\u7981\u6b62\u4fee\u590d\u3002\u8fd9\u4e2a 404 \u66f4\u50cf\u4e00\u4e2a\u76ee\u5f55\u5916\u5bf9\u8c61\uff0c\u800c\u4e0d\u50cf\u666e\u901a\u7f3a\u9875\u3002"
    };

    const K = {
        readCount: "echorest_thread05_reads",
        admin: "echorest_t05_admin_opened",
        restore: "echorest_t05_restore_opened",
        cache: "echorest_t05_user_cache_opened",
        post404: "echorest_t05_404_touched",
        repairLog: "echorest_repair_log_extra"
    };

    function t05Text() {
        return window.TXT.t05;
    }

    function $(selector, root) {
        return (root || document).querySelector(selector);
    }

    function $all(selector, root) {
        return Array.from((root || document).querySelectorAll(selector));
    }

    function hasFlag(key) {
        return localStorage.getItem(key) === "1";
    }

    function setFlag(key) {
        localStorage.setItem(key, "1");
    }

    function addRepairLog(code) {
        const T = t05Text();
        let logs = [];

        try {
            logs = JSON.parse(localStorage.getItem(K.repairLog) || "[]");
        } catch (e) {
            logs = [];
        }

        const lineMap = {
            admin: T.logAdmin,
            restore: T.logRestore,
            cache: T.logCache,
            post404: T.log404
        };

        const line = lineMap[code] || code;

        if (!logs.includes(line)) {
            logs.push(line);
            localStorage.setItem(K.repairLog, JSON.stringify(logs));
        }
    }

    function renderLogPanel(panelId, title, lines) {
        const panel = $(panelId);
        if (!panel) return;

        panel.classList.remove("hidden");
        panel.innerHTML = "";

        const h = document.createElement("h3");
        h.textContent = title;
        panel.appendChild(h);

        lines.forEach(function (line) {
            const p = document.createElement("p");
            p.textContent = line;

            if (
                line.indexOf("WARNING") >= 0 ||
                line.indexOf("99.73") >= 0 ||
                line.indexOf("match_result") >= 0 ||
                line.indexOf("404") >= 0
            ) {
                p.classList.add("cache-line-warning");
            }

            panel.appendChild(p);
        });
    }

    /* ================================
   THREAD 05 typing effect
   ================================ */

    const t05TypingJobs = {};

    function isT05WarningLine(line) {
        return (
            line.indexOf("WARNING") >= 0 ||
            line.indexOf("99.73") >= 0 ||
            line.indexOf("match_result") >= 0 ||
            line.indexOf("404") >= 0
        );
    }

    function stopT05Typing(panelId) {
        const job = t05TypingJobs[panelId];
        if (!job) return;

        job.stopped = true;

        if (job.timer) {
            clearTimeout(job.timer);
        }

        delete t05TypingJobs[panelId];
    }

    function renderLogPanelStatic(panelId, title, lines) {
        const panel = document.querySelector(panelId);
        if (!panel) return;

        stopT05Typing(panelId);

        panel.classList.remove("hidden");
        panel.innerHTML = "";

        const h = document.createElement("h3");
        h.textContent = title;
        panel.appendChild(h);

        lines.forEach(function (line) {
            const p = document.createElement("p");
            p.textContent = line;

            if (isT05WarningLine(line)) {
                p.classList.add("cache-line-warning");
            }

            panel.appendChild(p);
        });
    }

    function typeLogPanel(panelId, title, lines) {
        const panel = document.querySelector(panelId);
        if (!panel) return;

        stopT05Typing(panelId);

        const job = {
            stopped: false,
            timer: null
        };

        t05TypingJobs[panelId] = job;

        panel.classList.remove("hidden");
        panel.innerHTML = "";

        const h = document.createElement("h3");
        h.textContent = title;
        panel.appendChild(h);

        const wrap = document.createElement("div");
        wrap.className = "t05-typing-wrap";
        panel.appendChild(wrap);

        let lineIndex = 0;

        function typeNextLine() {
            if (job.stopped) return;

            if (lineIndex >= lines.length) {
                delete t05TypingJobs[panelId];
                return;
            }

            const rawLine = lines[lineIndex];
            const p = document.createElement("p");
            p.className = "t05-typing-line";

            if (isT05WarningLine(rawLine)) {
                p.classList.add("cache-line-warning");
            }

            wrap.appendChild(p);

            let charIndex = 0;

            function typeChar() {
                if (job.stopped) return;

                p.classList.add("typing");
                p.textContent = rawLine.slice(0, charIndex + 1);
                charIndex += 1;

                if (charIndex < rawLine.length) {
                    const currentChar = rawLine.charAt(charIndex - 1);

                    // 空格稍快一点，普通字符稍慢一点
                    const delay = currentChar === " " ? 10 : 18;

                    job.timer = setTimeout(typeChar, delay);
                } else {
                    p.classList.remove("typing");
                    lineIndex += 1;
                    job.timer = setTimeout(typeNextLine, 120);
                }
            }

            typeChar();
        }

        typeNextLine();
    }

    function syncT05State() {
        const adminOpened = hasFlag(K.admin);
        const restoreOpened = hasFlag(K.restore);
        const cacheOpened = hasFlag(K.cache);

        const adminBtn = $('[data-t05-open="admin"]');
        const restoreBtn = $('[data-t05-open="restore"]');
        const cacheBtn = $('[data-t05-open="cache"]');

        const adminPanel = $("#t05AdminPanel");
        const restorePanel = $("#t05RestorePanel");
        const cachePanel = $("#t05UserCachePanel");

        // 只处理按钮锁定/解锁，不在这里显示日志内容
        if (adminBtn) {
            adminBtn.classList.remove("locked");
        }

        if (restoreBtn) {
            restoreBtn.classList.toggle("locked", !adminOpened);
        }

        if (cacheBtn) {
            cacheBtn.classList.toggle("locked", !restoreOpened);
        }

        // 页面刚加载时，面板必须保持隐藏
        // 不要在 syncT05State 里 renderLogPanel
        if (adminPanel && adminPanel.innerHTML.trim() === "") {
            adminPanel.classList.add("hidden");
        }

        if (restorePanel && restorePanel.innerHTML.trim() === "") {
            restorePanel.classList.add("hidden");
        }

        if (cachePanel && cachePanel.innerHTML.trim() === "") {
            cachePanel.classList.add("hidden");
        }

        // 只有三个面板真的被当前页面显示过，才显示 post_404 入口
        const adminVisible = adminPanel && !adminPanel.classList.contains("hidden") && adminPanel.innerHTML.trim() !== "";
        const restoreVisible = restorePanel && !restorePanel.classList.contains("hidden") && restorePanel.innerHTML.trim() !== "";
        const cacheVisible = cachePanel && !cachePanel.classList.contains("hidden") && cachePanel.innerHTML.trim() !== "";

        if (adminVisible && restoreVisible && cacheVisible) {
            const hint = $("#t05Post404Hint");
            const morse = $("#t05MorseComment");

            if (hint) hint.classList.remove("hidden");
            if (morse) morse.classList.remove("hidden");
        }
    }

    function openT05Panel(type) {
        const T = t05Text();

        if (type === "restore" && !hasFlag(K.admin)) {
            alert(T.locked);
            return;
        }

        if (type === "cache" && !hasFlag(K.restore)) {
            alert(T.locked);
            return;
        }

        if (type === "admin") {
            setFlag(K.admin);
            addRepairLog("admin");
            typeLogPanel("#t05AdminPanel", T.adminTitle, T.adminLines);
        }

        if (type === "restore") {
            setFlag(K.restore);
            addRepairLog("restore");
            typeLogPanel("#t05RestorePanel", T.restoreTitle, T.restoreLines);
        }

        if (type === "cache") {
            setFlag(K.cache);
            addRepairLog("cache");
            typeLogPanel("#t05UserCachePanel", T.cacheTitle, T.cacheLines);
        }

        syncT05State();
    }

    function showT05Inspector(type) {
        const T = t05Text();
        const overlay = $("#t05Inspector");
        const text = $("#t05InspectorText");

        if (!overlay || !text) return;

        const map = {
            admin: T.fileAdmin,
            restore: T.fileRestore,
            fruit: T.fileFruit,
            post404: T.file404
        };

        text.textContent = map[type] || T.file404;
        overlay.classList.remove("hidden");
    }

    function closeT05Inspector() {
        const overlay = $("#t05Inspector");
        if (overlay) overlay.classList.add("hidden");
    }

    function decodeT05Morse() {
        alert(t05Text().morse);
    }

    function triggerT05Crash() {
        const T = t05Text();

        setFlag(K.post404);
        addRepairLog("post404");

        closeT05Inspector();

        document.documentElement.classList.remove("t05-modal-lock");
        document.body.classList.remove("t05-modal-lock");
        document.body.classList.remove("t05-page-shake");
        document.body.classList.remove("t05-corrupt");
        document.body.classList.remove("t05-body-shake-active");

        const oldOverlay = document.getElementById("t05CrashOverlay");
        if (oldOverlay) {
            oldOverlay.remove();
        }

        const oldFearOverlay = document.getElementById("t05FearOverlay");
        if (oldFearOverlay) {
            oldFearOverlay.remove();
        }

        document.querySelectorAll(".t05-black-block").forEach(function (node) {
            node.remove();
        });

        document.querySelectorAll(".t05-crash-modal").forEach(function (node) {
            node.remove();
        });

        const link = document.getElementById("thread05Post404Link");
        if (link) {
            link.classList.remove("disabled-next-link");
            link.textContent = "\u6253\u5f00 post_404.index";
            link.href = "post_404.html";
            link.style.pointerEvents = "auto";
        }

        const statusEl = document.getElementById("thread05StatusText");
        if (statusEl) {
            statusEl.textContent = "\u7cfb\u7edf\u5df2\u786e\u8ba4\uff1a\u5f53\u524d\u7ef4\u4fee\u5458\u5df2\u89e6\u78b0 post_404\u3002\u8be5\u884c\u4e3a\u5df2\u5199\u5165\u7ba1\u7406\u5458\u7f13\u5b58\u3002";
        }

        const stateEl = document.getElementById("thread05StateValue");
        if (stateEl) {
            stateEl.textContent = "\u7ef4\u4fee\u5458\u5df2\u88ab\u8bb0\u5f55";
        }

        document.body.classList.add("t05-fear-active");
        document.body.classList.add("t05-repairer-recorded");

        setTimeout(function () {
            document.body.classList.remove("t05-fear-active");
        }, 820);

        document.querySelectorAll("[data-t05-missing]").forEach(function (node) {
            node.classList.add("t05-missing-touched");
            node.textContent = "\u3010\u5df2\u8bb0\u5f55\u3011";
        });

        injectThread05RecordedReply();

        const overlay = document.createElement("div");
        overlay.id = "t05FearOverlay";
        overlay.className = "t05-fear-overlay";

        const veil = document.createElement("div");
        veil.className = "t05-fear-veil";
        overlay.appendChild(veil);

        for (let i = 0; i < 32; i++) {
            const block = document.createElement("div");
            block.className = "t05-fear-block";
            block.style.left = Math.floor(Math.random() * 100) + "vw";
            block.style.top = Math.floor(Math.random() * 100) + "vh";
            block.style.width = Math.floor(24 + Math.random() * 150) + "px";
            block.style.height = Math.floor(10 + Math.random() * 72) + "px";
            block.style.opacity = String(0.22 + Math.random() * 0.56);
            block.style.animationDelay = String(Math.random() * 0.28) + "s";
            overlay.appendChild(block);
        }

        

        const terminal = document.createElement("div");
        terminal.className = "t05-fear-terminal";

        const terminalLines = [
            ">>> " + T.terminalLine1,
            ">>> " + T.terminalLine2,
            ">>> " + T.terminalLine3,
            ">>> " + T.terminalLine4,
            ">>> " + T.terminalLine5,
            ">>> " + T.terminalLine6,
            ">>> " + T.terminalLine7
        ];

        terminalLines.forEach(function (line, index) {
            const div = document.createElement("div");
            div.className = "t05-fear-terminal-line";
            div.textContent = line;
            div.style.animationDelay = String(index * 0.14) + "s";
            terminal.appendChild(div);
        });

        overlay.appendChild(terminal);

        const modal = document.createElement("div");
        modal.className = "t05-fear-modal";

        const label = document.createElement("div");
        label.className = "t05-fear-label";
        label.textContent = "ECHO_REST / REPAIRER_RECORD";

        const title = document.createElement("h2");
        title.textContent = T.crashTitleStrong;

        const body1 = document.createElement("p");
        body1.textContent = T.crashBodyStrong;

        const body2 = document.createElement("p");
        body2.className = "t05-fear-warning";
        body2.textContent = T.crashWarningStrong;

        const body3 = document.createElement("p");
        body3.className = "t05-fear-code";
        body3.textContent = "current_repairer.path == MOD_005.path // similarity: 99.73% // second confirmation accepted";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = T.crashButtonStrong;

        function closeFearOverlay() {
            document.body.classList.remove("t05-fear-active");

            const nowOverlay = document.getElementById("t05FearOverlay");
            if (nowOverlay) {
                nowOverlay.remove();
            }
        }

        btn.addEventListener("click", closeFearOverlay);

        modal.appendChild(label);
        modal.appendChild(title);
        modal.appendChild(body1);
        modal.appendChild(body2);
        modal.appendChild(body3);
        modal.appendChild(btn);
        overlay.appendChild(modal);

        document.documentElement.appendChild(overlay);
    }

    function injectThread05RecordedReply() {
        if (document.getElementById("t05RecordedReply")) {
            return;
        }

        const targetStack = document.querySelector(".post-card-corrupt .reply-stack");
        if (!targetStack) {
            return;
        }

        const reply = document.createElement("div");
        reply.id = "t05RecordedReply";
        reply.className = "reply-line danger-comment t05-recorded-reply";

        reply.innerHTML =
            '<div class="reply-avatar-slot reply-avatar-missing">LOG</div>' +
            '<p>\u7cfb\u7edf\u7f13\u5b58\uff1a\u521a\u624d\u7684\u70b9\u51fb\u4e0d\u662f\u4fee\u590d\u8bf7\u6c42\u3002\u662f\u7b2c\u4e8c\u6b21\u786e\u8ba4\u3002</p>';

        targetStack.appendChild(reply);
    }
    function incrementT05ReadCount() {
        const oldCount = Number(localStorage.getItem(K.readCount) || "0");
        localStorage.setItem(K.readCount, String(oldCount + 1));
    }

    function initThread05() {
        if (
            !document.body.classList.contains("thread05-page") &&
            !document.body.classList.contains("page-thread-05")
        ) {
            return;
        }

        closeT05Inspector();

        document.documentElement.classList.remove("t05-modal-lock");
        document.body.classList.remove("t05-modal-lock");
        document.body.classList.remove("t05-page-shake");
        document.body.classList.remove("t05-corrupt");
        document.body.classList.remove("t05-body-shake-active");


        const oldOverlay = document.getElementById("t05CrashOverlay");
        if (oldOverlay) {
            oldOverlay.remove();
        }

        document.querySelectorAll(".t05-black-block").forEach(function (node) {
            node.remove();
        });

        document.querySelectorAll(".t05-crash-modal").forEach(function (node) {
            node.remove();
        });

        incrementT05ReadCount();

        $all("[data-t05-open]").forEach(function (btn) {
            btn.addEventListener("click", function () {
                openT05Panel(btn.getAttribute("data-t05-open"));
            });
        });

        $all("[data-t05-inspect]").forEach(function (node) {
            node.addEventListener("click", function () {
                showT05Inspector(node.getAttribute("data-t05-inspect"));
            });
        });

        $all("[data-t05-close-inspector]").forEach(function (btn) {
            btn.addEventListener("click", closeT05Inspector);
        });

        const inspector = $("#t05Inspector");
        if (inspector) {
            inspector.addEventListener("click", function (e) {
                if (e.target === inspector) closeT05Inspector();
            });
        }

        $all("[data-t05-missing]").forEach(function (node) {
            node.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                triggerT05Crash();
            });
        });

        $all("[data-t05-404]").forEach(function (node) {
            node.addEventListener("click", triggerT05Crash);
        });

        $all("[data-t05-decode]").forEach(function (node) {
            node.addEventListener("click", decodeT05Morse);
        });

        syncT05State();
    }

    function initThread05BoardExtras() {
        const isBoard =
            document.body.classList.contains("board-page") ||
            location.pathname.indexOf("board.html") >= 0;

        if (!isBoard) return;

        appendThread05RepairLogs();
        patchArchiveSearchForThread05();
    }

    function appendThread05RepairLogs() {
        const box =
            $("#localRepairLog") ||
            $("[data-local-repair-log]") ||
            $(".local-repair-log");

        if (!box) return;

        let logs = [];

        try {
            logs = JSON.parse(localStorage.getItem(K.repairLog) || "[]");
        } catch (e) {
            logs = [];
        }

        logs.forEach(function (line) {
            if (box.textContent.indexOf(line) >= 0) return;

            const p = document.createElement("p");
            p.className = "repair-log-line t05-extra-log";
            p.textContent = line;
            box.appendChild(p);
        });
    }

    function patchArchiveSearchForThread05() {
        const input =
            $("#archiveSearchInput") ||
            $("[data-archive-search-input]") ||
            $(".archive-search-input");

        const resultBox =
            $("#archiveSearchResults") ||
            $("[data-archive-search-results]") ||
            $(".archive-search-results");

        if (!input || !resultBox) return;

        input.addEventListener("input", function () {
            setTimeout(function () {
                appendThread05SearchResult(input.value, resultBox);
            }, 0);
        });
    }

    function appendThread05SearchResult(raw, resultBox) {
        const T = t05Text();
        const query = String(raw || "").trim().toLowerCase();

        if (!query) return;

        const hitYuan =
            query.indexOf("鸢") >= 0 ||
            query.indexOf("yuan") >= 0 ||
            query.indexOf("管理员") >= 0 ||
            query.indexOf("管理") >= 0 ||
            query.indexOf("红果子") >= 0;

        const hitAdmin =
            query.indexOf("admin") >= 0 ||
            query.indexOf("cache") >= 0 ||
            query.indexOf("user cache") >= 0 ||
            query.indexOf("缓存") >= 0;

        const hit404 =
            query.indexOf("404") >= 0 ||
            query.indexOf("post_404") >= 0 ||
            query.indexOf("不需要修复") >= 0;

        const results = [];

        if (hitYuan) {
            results.push({
                id: "t05-search-yuan",
                title: T.searchYuanTitle,
                body: T.searchYuanBody,
                href: "thread_05.html"
            });
        }

        if (hitAdmin) {
            results.push({
                id: "t05-search-admin",
                title: T.searchAdminTitle,
                body: T.searchAdminBody,
                href: "thread_05.html"
            });
        }

        if (hit404) {
            results.push({
                id: "t05-search-404",
                title: T.search404Title,
                body: T.search404Body,
                href: "thread_05.html"
            });
        }

        results.forEach(function (item) {
            if ($("#" + item.id, resultBox)) return;

            const a = document.createElement("a");
            a.id = item.id;
            a.href = item.href;
            a.className = "archive-result-item t05-search-result";

            const h = document.createElement("strong");
            h.textContent = item.title;

            const p = document.createElement("p");
            p.textContent = item.body;

            a.appendChild(h);
            a.appendChild(p);
            resultBox.appendChild(a);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initThread05();
        initThread05BoardExtras();
    });
})();

/* THREAD 05 header info patch */
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        if (!document.body.classList.contains("page-thread-05")) return;

        const accessGranted = localStorage.getItem("echo_access_granted");
        const workerId = localStorage.getItem("echo_worker_id");

        if (accessGranted !== "true" || !workerId) {
            alert(TXT.alertNeedLogin);
            window.location.href = "../../login.html";
            return;
        }

        if (!enforceThreadSequenceGate("thread05")) return;

        const worker = workerId || "\u672a\u9a8c\u8bc1\u7ef4\u4fee\u5458";
        const session = localStorage.getItem("echo_session_id") || "SESSION_13";
        const count = localStorage.getItem("echorest_thread05_reads") || "1";

        const workerEl = document.getElementById("thread05WorkerValue");
        const sessionEl = document.getElementById("thread05SessionValue");
        const visitEl = document.getElementById("thread05VisitValue");
        const stateEl = document.getElementById("thread05StateValue");
        const statusEl = document.getElementById("thread05StatusText");

        if (workerEl) workerEl.textContent = worker;
        if (sessionEl) sessionEl.textContent = session;
        if (visitEl) visitEl.textContent = count;
        if (stateEl) stateEl.textContent = "\u7ad9\u52a1\u5c42\u7f13\u5b58";

        if (statusEl) {
            if (Number(count) >= 2) {
                statusEl.textContent = "\u68c0\u6d4b\u5230\u91cd\u590d\u8bfb\u53d6\u75d5\u8ff9\u3002\u7ad9\u52a1\u5c42\u7f13\u5b58\u4ecd\u5728\u5c1d\u8bd5\u5bf9\u7167\u65e7\u8bb0\u5f55\u3002";
            } else {
                statusEl.textContent = "\u8be5\u9875\u4f4d\u4e8e\u666e\u901a\u8ba8\u8bba\u5c42\u4e4b\u5916\u3002\u7ad9\u52a1\u8bb0\u5f55\u4e0e\u7528\u6237\u7f13\u5b58\u4e4b\u95f4\u4ecd\u5b58\u5728\u672a\u5b8c\u5168\u5bf9\u5e94\u5b57\u6bb5\u3002";
            }
        }

        applyThreadHeaderDrift(stateEl, statusEl, "thread05", Number(count));
        applyThreadHeaderVisualDrift(stateEl, statusEl, "thread05");
    });
})();

/* THREAD 05 shake cleanup patch */
document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("t05CrashOverlay")) {
        document.documentElement.classList.remove("t05-modal-lock");
        document.body.classList.remove("t05-modal-lock");
        document.body.classList.remove("t05-page-shake");
        document.body.classList.remove("t05-corrupt");
    }
});


/* ================================
   POST 404 - Restricted Index
   ================================ */

(function () {
    window.TXT = window.TXT || {};

    window.TXT.post404 = {
        needPrevious: "\u9700\u8981\u5148\u8bfb\u53d6\u4e0a\u4e00\u6b21\u7ef4\u4fee\u8def\u5f84\u3002",
        needCurrent: "\u9700\u8981\u5148\u8bfb\u53d6\u5f53\u524d\u7ef4\u4fee\u8def\u5f84\u3002",

        statusReady: "\u53d7\u9650\u7d22\u5f15\u5df2\u88ab\u6253\u5f00\u3002\u8bf7\u8bfb\u53d6\u8def\u5f84\u8bb0\u5f55\u3002",
        statusPrevious: "\u5df2\u8bfb\u53d6\u4e0a\u4e00\u6b21\u7ef4\u4fee\u8def\u5f84\u3002",
        statusCurrent: "\u5df2\u8bfb\u53d6\u5f53\u524d\u7ef4\u4fee\u8def\u5f84\u3002",
        statusCompare: "\u8def\u5f84\u6bd4\u5bf9\u5b8c\u6210\u3002\u5f53\u524d\u7ef4\u4fee\u5458\u6b63\u5728\u91cd\u590d\u9e22\u7684\u8def\u5f84\u3002",

        statusLocked: "\u5f53\u524d\u7ef4\u4fee\u8def\u5f84\u4e0d\u5b8c\u6574\u3002\u8bf7\u8fd4\u56de Echo Board \u68c0\u7d22\u7f3a\u5931\u5b57\u6bb5\u3002",
        statusUnlocked: "\u8c03\u67e5\u51c6\u5165\u6761\u4ef6\u5df2\u6ee1\u8db3\u3002\u73b0\u5728\u53ef\u4ee5\u8bfb\u53d6\u8def\u5f84\u8bb0\u5f55\u3002",
        gateTitle: "\u51c6\u5165\u6761\u4ef6 / ACCESS CHECK",
        gateHint: "\u53ea\u6709\u6ee1\u8db3\u4ee5\u4e0b\u8c03\u67e5\u6761\u4ef6\uff0cpost_404 \u624d\u4f1a\u627f\u8ba4\u4f60\u4e0d\u662f\u8bef\u5165\u8005\u3002",

        previousTitle: "\u4e0a\u4e00\u6b21\u7ef4\u4fee\u8def\u5f84 / MOD_005 / \u9e22",
        currentTitle: "\u5f53\u524d\u7ef4\u4fee\u8def\u5f84 / CURRENT REPAIRER",
        compareTitle: "\u8def\u5f84\u6bd4\u5bf9\u7ed3\u679c",

        previousPath: "login > dashboard > board > thread_01 > thread_02 > thread_03 > thread_04 > thread_05 > post_404",
        currentPath: "login > dashboard > board > thread_01 > thread_02 > thread_03 > thread_04 > thread_05 > post_404",

        previousBody: "\u9e22\u5728\u6253\u5f00 post_404 \u540e\uff0c\u88ab\u79fb\u51fa\u4e86\u524d\u53f0\u7d22\u5f15\u3002\n\u6700\u540e\u4e00\u6b21\u8f93\u5165\uff1a\u4e0d\u9700\u8981\u4fee\u590d404\u3002\n\u5907\u6ce8\uff1a\u8be5\u7d22\u5f15\u5bf9\u7ef4\u4fee\u884c\u4e3a\u6709\u54cd\u5e94\u3002",
        currentBody: "\u5f53\u524d\u7ef4\u4fee\u5458\u5df2\u8fdb\u5165\u540c\u4e00\u8def\u5f84\u3002\n\u7cfb\u7edf\u672a\u68c0\u6d4b\u5230\u65b0\u7684\u9519\u8bef\u3002\u53ea\u68c0\u6d4b\u5230\u201c\u518d\u6b21\u5c1d\u8bd5\u4fee\u590d\u201d\u8fd9\u4e2a\u884c\u4e3a\u3002",
        compareBody: "\u76f8\u4f3c\u5ea6\uff1a99.73%\n\u5dee\u5f02\uff1a\u672a\u68c0\u6d4b\u5230\u53ef\u4fe1\u5dee\u5f02\u3002\n\u63a8\u8bba\uff1apost_404 \u4e0d\u50cf\u4e00\u4e2a\u7b49\u5f85\u88ab\u4fee\u590d\u7684\u9875\u9762\uff0c\u66f4\u50cf\u4e00\u4e2a\u4f1a\u5c06\u7ef4\u4fee\u884c\u4e3a\u5199\u5165\u8bb0\u5f55\u7684\u5165\u53e3\u3002",

        hiddenFragment: "\u201c\u4e0d\u8981\u76f8\u4fe1\u540e\u53f0\u7684\u6743\u9650\u9875\u3002\u5982\u679c\u5b83\u8ba9\u4f60\u63a5\u7ba1\u6211\uff0c\u90a3\u5b83\u4e5f\u4f1a\u8ba9\u4e0b\u4e00\u4e2a\u4eba\u63a5\u7ba1\u4f60\u3002\u201d",

        revealTitleStrong: "\u53d7\u9650\u7d22\u5f15\u5df2\u786e\u8ba4\u5f53\u524d\u8def\u5f84",
        revealBodyStrong: "\u4f60\u5b8c\u6210\u7684\u4e0d\u662f\u666e\u901a\u6bd4\u5bf9\u3002post_404 \u5df2\u5c06\u5f53\u524d\u7ef4\u4fee\u884c\u4e3a\u5199\u5165\u7d22\u5f15\u3002",
        revealWarningStrong: "\u5b83\u4e0d\u4f1a\u88ab\u4fee\u590d\u3002\u5b83\u53ea\u4f1a\u786e\u8ba4\u8c01\u8bd5\u56fe\u4fee\u5b83\u3002",
        revealButtonStrong: "\u786e\u8ba4\u5f53\u524d\u8def\u5f84\u5df2\u88ab\u8bb0\u5f55",

        revealLine1: "\u53d7\u9650\u7d22\u5f15\u5bf9\u7ef4\u4fee\u884c\u4e3a\u5b8c\u6210\u54cd\u5e94",
        revealLine2: "\u6b63\u5728\u5199\u5165 current_repairer.path",
        revealLine3: "\u6b63\u5728\u6bd4\u5bf9 MOD_005 / \u9e22",
        revealLine4: "\u5dee\u5f02\u672a\u901a\u8fc7",
        revealLine5: "\u7f3a\u9875\u5047\u8c61\u5df2\u5931\u6548",
        revealLine6: "\u786e\u8ba4\u7ed3\u679c\uff1a\u4fee\u590d\u8005\u5df2\u88ab\u7d22\u5f15",

        logPost404: "\u5df2\u6253\u5f00 post_404.index\u3002",
        logPost404Compare: "\u5df2\u5b8c\u6210 post_404 \u8def\u5f84\u6bd4\u5bf9\u3002"
    };

    const P404_KEYS = {
        visit: "echorest_post404_visit_count",
        previous: "echorest_post404_previous_read",
        current: "echorest_post404_current_read",
        compared: "echorest_post404_compared",
        extraLog: "echorest_repair_log_extra"
    };

    function p404Text() {
        return window.TXT.post404;
    }

    function p404$(id) {
        return document.getElementById(id);
    }

    function p404Has(key) {
        return localStorage.getItem(key) === "1";
    }

    function p404Set(key) {
        localStorage.setItem(key, "1");
    }

    function p404AddLog(text) {
        let logs = [];

        try {
            logs = JSON.parse(localStorage.getItem(P404_KEYS.extraLog) || "[]");
        } catch (e) {
            logs = [];
        }

        if (!logs.includes(text)) {
            logs.push(text);
            localStorage.setItem(P404_KEYS.extraLog, JSON.stringify(logs));
        }
    }

    function p404HasInvestigationCode(code) {
        try {
            const logs = JSON.parse(localStorage.getItem("echo_investigation_logs") || "[]");
            return logs.some(function (item) {
                return item && item.code === code;
            });
        } catch (error) {
            return false;
        }
    }

    function getPost404GateState() {
        const items = [
            {
                label: "\u5df2\u4fee\u590d THREAD_04 \u6f2b\u753b\u6b8b\u9875",
                done: localStorage.getItem("echo_thread04_draft_repaired") === "true"
            },
            {
                label: "\u5df2\u786e\u8ba4 04:04 \u5173\u8054",
                done: p404HasInvestigationCode("found_0404")
            },
            {
                label: "\u5df2\u8bc6\u522b \u9e22 / MOD_005",
                done: p404HasInvestigationCode("found_yuan_mod005")
            },
            {
                label: "\u5df2\u53d1\u73b0 post_404 \u5f02\u5e38",
                done: p404HasInvestigationCode("found_post404")
            },
            {
                label: "\u5df2\u6253\u5f00 THREAD_05 \u4e09\u4e2a\u65e5\u5fd7",
                done:
                    localStorage.getItem("echorest_t05_admin_opened") === "1" &&
                    localStorage.getItem("echorest_t05_restore_opened") === "1" &&
                    localStorage.getItem("echorest_t05_user_cache_opened") === "1"
            }
        ];

        return {
            items: items,
            unlocked: items.every(function (item) {
                return item.done;
            })
        };
    }

    function renderPost404GatePanel() {
        let panel = p404$("p404GatePanel");

        if (!panel) {
            panel = document.createElement("div");
            panel.id = "p404GatePanel";
            panel.className = "post404-gate-panel";

            const statusBox = p404$("p404StatusText");
            if (statusBox && statusBox.closest(".login-log-box")) {
                statusBox.closest(".login-log-box").insertAdjacentElement("afterend", panel);
            } else {
                const main = document.querySelector(".thread-main");
                if (main) {
                    main.prepend(panel);
                }
            }
        }

        const gate = getPost404GateState();
        const T = p404Text();

        panel.classList.toggle("unlocked", gate.unlocked);

        let html = "";
        html += '<p class="warning-title">' + T.gateTitle + "</p>";
        html += '<p class="post404-gate-hint">' + T.gateHint + "</p>";
        html += '<div class="post404-gate-list">';

        gate.items.forEach(function (item) {
            html +=
                '<div class="post404-gate-item' + (item.done ? " done" : "") + '">' +
                '<span class="post404-gate-mark">' + (item.done ? "■" : "□") + "</span>" +
                '<span class="post404-gate-text">' + item.label + "</span>" +
                "</div>";
        });

        html += "</div>";

        if (gate.unlocked) {
            html += '<p class="post404-gate-result ok">\u51c6\u5165\u901a\u8fc7\uff1a\u4f60\u73b0\u5728\u53ef\u4ee5\u8bfb\u53d6\u8def\u5f84\u8bb0\u5f55\u3002</p>';
        } else {
            html += '<p class="post404-gate-result">\u51c6\u5165\u672a\u901a\u8fc7\uff1a\u8bf7\u7ee7\u7eed\u8c03\u67e5\u5e76\u8fd4\u56de\u3002</p>';
        }

        panel.innerHTML = html;
    }


    function initPost404Page() {
        if (!document.body.classList.contains("page-post-404")) return;

        const accessGranted = localStorage.getItem("echo_access_granted");
        const workerId = localStorage.getItem("echo_worker_id");

        if (accessGranted !== "true" || !workerId) {
            alert(TXT.alertNeedLogin);
            window.location.href = "../../login.html";
            return;
        }

        if (!isThreadSequenceUnlocked("thread05")) {
            window.location.href = "board.html";
            return;
        }
        const T = p404Text();

        const worker = localStorage.getItem("echo_worker_id") || "\u672a\u9a8c\u8bc1\u7ef4\u4fee\u5458";
        const session = localStorage.getItem("echo_session_id") || "SESSION_13";

        let visit = Number(localStorage.getItem(P404_KEYS.visit) || "0");
        visit += 1;
        localStorage.setItem(P404_KEYS.visit, String(visit));

        const workerEl = p404$("p404WorkerValue");
        const sessionEl = p404$("p404SessionValue");
        const visitEl = p404$("p404VisitValue");
        const matchEl = p404$("p404MatchValue");
        const statusEl = p404$("p404StatusText");
        const inlineWorkerEl = p404$("p404InlineWorker");

        if (workerEl) workerEl.textContent = worker;
        if (sessionEl) sessionEl.textContent = session;
        if (visitEl) visitEl.textContent = String(visit);
        if (inlineWorkerEl) inlineWorkerEl.textContent = worker;

        if (statusEl) {
            statusEl.textContent = getPost404GateState().unlocked
                ? T.statusUnlocked
                : T.statusLocked;
        }

        p404AddLog(T.logPost404);
        renderPost404GatePanel();

        const buttons = document.querySelectorAll("[data-p404-action]");
        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const action = btn.getAttribute("data-p404-action");
                handlePost404Action(action);
            });
        });

        syncPost404State();

        // 进入页面时轻微抽一下，像系统发现你进来了
        document.body.classList.add("post404-hard-glitch");
        setTimeout(function () {
            document.body.classList.remove("post404-hard-glitch");
        }, 900);

        if (matchEl && p404Has(P404_KEYS.compared)) {
            matchEl.textContent = "99.73%";
        }
    }

    function handlePost404Action(action) {
        const T = p404Text();

        const gate = getPost404GateState();

        if (!gate.unlocked) {
            renderPost404GatePanel();
            updatePost404Status(T.statusLocked);
            triggerPost404Glitch();
            return;
        }

        if (action === "previous") {
            p404Set(P404_KEYS.previous);
            renderPost404Panel(
                "p404PreviousPanel",
                T.previousTitle,
                T.previousPath,
                T.previousBody
            );

            updatePost404Status(T.statusPrevious);
            syncPost404State();
            return;
        }

        if (action === "current") {
            p404Set(P404_KEYS.current);
            renderPost404Panel(
                "p404CurrentPanel",
                T.currentTitle,
                T.currentPath,
                T.currentBody
            );

            updatePost404Status(T.statusCurrent);
            syncPost404State();
            return;
        }

        if (action === "compare") {
            if (!p404Has(P404_KEYS.previous)) {
                alert(T.needPrevious);
                return;
            }

            if (!p404Has(P404_KEYS.current)) {
                alert(T.needCurrent);
                return;
            }

            p404Set(P404_KEYS.compared);

            renderPost404Panel(
                "p404ComparePanel",
                T.compareTitle,
                "\u9e22.path == current_repairer.path",
                T.compareBody,
                true
            );

            updatePost404Status(T.statusCompare);
            p404AddLog(T.logPost404Compare);

            const matchEl = p404$("p404MatchValue");
            if (matchEl) matchEl.textContent = "99.73%";

            revealPost404Routes();
            triggerPost404Glitch();
            triggerPost404RevealOverlay();
            syncPost404State();
        }
    }

    function renderPost404Panel(panelId, title, path, body, warning) {
        const panel = p404$(panelId);
        if (!panel) return;

        panel.classList.remove("hidden");

        const className = warning ? "warning" : "";

        panel.innerHTML =
            "<strong>" + title + "</strong>\n\n" +
            "PATH:\n" +
            "<span class=\"" + className + "\">" + path + "</span>\n\n" +
            body;
    }

    function updatePost404Status(text) {
        const statusEl = p404$("p404StatusText");
        if (statusEl) {
            statusEl.textContent = text;
        }
    }

    function syncPost404State() {
        const T = p404Text();
        const gate = getPost404GateState();

        const previousBtn = document.querySelector('[data-p404-action="previous"]');
        const currentBtn = document.querySelector('[data-p404-action="current"]');
        const compareBtn = document.querySelector('[data-p404-action="compare"]');

        renderPost404GatePanel();

        if (!gate.unlocked) {
            [previousBtn, currentBtn, compareBtn].forEach(function (btn) {
                if (!btn) return;
                btn.classList.add("locked");
                btn.disabled = true;
            });

            updatePost404Status(T.statusLocked);
            return;
        }

        if (previousBtn) {
            previousBtn.classList.remove("locked");
            previousBtn.disabled = false;
        }

        if (currentBtn) {
            currentBtn.classList.remove("locked");
            currentBtn.disabled = false;
        }

        if (compareBtn) {
            const ready = p404Has(P404_KEYS.previous) && p404Has(P404_KEYS.current);
            compareBtn.classList.toggle("locked", !ready);
            compareBtn.disabled = !ready;
        }

        if (
            !p404Has(P404_KEYS.previous) &&
            !p404Has(P404_KEYS.current) &&
            !p404Has(P404_KEYS.compared)
        ) {
            updatePost404Status(T.statusUnlocked);
        }

        if (p404Has(P404_KEYS.previous)) {
            renderPost404Panel(
                "p404PreviousPanel",
                p404Text().previousTitle,
                p404Text().previousPath,
                p404Text().previousBody
            );
        }

        if (p404Has(P404_KEYS.current)) {
            renderPost404Panel(
                "p404CurrentPanel",
                p404Text().currentTitle,
                p404Text().currentPath,
                p404Text().currentBody
            );
        }

        if (p404Has(P404_KEYS.compared)) {
            renderPost404Panel(
                "p404ComparePanel",
                p404Text().compareTitle,
                "\u9e22.path == current_repairer.path",
                p404Text().compareBody,
                true
            );

            revealPost404Routes();
        }
    }

    function revealPost404Routes() {
        const hidden = p404$("p404HiddenFragment");
        const route = p404$("p404RouteExpose");

        if (hidden) {
            hidden.classList.remove("locked");
            hidden.classList.add("unlocked");
            hidden.innerHTML =
                "<span>FRAGMENT_03</span>" +
                "<p>" + p404Text().hiddenFragment + "</p>";
        }

        if (route) {
            route.classList.remove("hidden");
        }
    }

    function triggerPost404RevealOverlay() {
        const T = p404Text();

        document.body.classList.remove("t05-fear-active");

        const oldOverlay = document.getElementById("p404RevealOverlay");
        if (oldOverlay) {
            oldOverlay.remove();
        }

        const overlay = document.createElement("div");
        overlay.id = "p404RevealOverlay";
        overlay.className = "t05-fear-overlay p404-reveal-overlay";

        const veil = document.createElement("div");
        veil.className = "t05-fear-veil";
        overlay.appendChild(veil);

        for (let i = 0; i < 24; i++) {
            const block = document.createElement("div");
            block.className = "t05-fear-block";
            block.style.left = Math.floor(Math.random() * 100) + "vw";
            block.style.top = Math.floor(Math.random() * 100) + "vh";
            block.style.width = Math.floor(24 + Math.random() * 120) + "px";
            block.style.height = Math.floor(10 + Math.random() * 60) + "px";
            block.style.opacity = String(0.18 + Math.random() * 0.42);
            block.style.animationDelay = String(Math.random() * 0.22) + "s";
            overlay.appendChild(block);
        }

        const terminal = document.createElement("div");
        terminal.className = "t05-fear-terminal";

        const terminalLines = [
            ">>> " + T.revealLine1,
            ">>> " + T.revealLine2,
            ">>> " + T.revealLine3,
            ">>> " + T.revealLine4,
            ">>> " + T.revealLine5,
            ">>> " + T.revealLine6
        ];

        terminalLines.forEach(function (line, index) {
            const div = document.createElement("div");
            div.className = "t05-fear-terminal-line";
            div.textContent = line;
            div.style.animationDelay = String(index * 0.14) + "s";
            terminal.appendChild(div);
        });

        overlay.appendChild(terminal);

        const modal = document.createElement("div");
        modal.className = "t05-fear-modal p404-reveal-modal";

        const label = document.createElement("div");
        label.className = "t05-fear-label";
        label.textContent = "ECHO_REST / INDEX_CONFIRM";

        const title = document.createElement("h2");
        title.textContent = T.revealTitleStrong;

        const body1 = document.createElement("p");
        body1.textContent = T.revealBodyStrong;

        const body2 = document.createElement("p");
        body2.className = "t05-fear-warning";
        body2.textContent = T.revealWarningStrong;

        const body3 = document.createElement("p");
        body3.className = "t05-fear-code";
        body3.textContent = "index_mode = confirm_only // write_target = current_repairer.path // status = accepted";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = T.revealButtonStrong;

        function closePost404Overlay() {
            document.body.classList.remove("t05-fear-active");

            const nowOverlay = document.getElementById("p404RevealOverlay");
            if (nowOverlay) {
                nowOverlay.remove();
            }
        }

        btn.addEventListener("click", closePost404Overlay);

        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                closePost404Overlay();
            }
        });

        modal.appendChild(label);
        modal.appendChild(title);
        modal.appendChild(body1);
        modal.appendChild(body2);
        modal.appendChild(body3);
        modal.appendChild(btn);
        overlay.appendChild(modal);

        document.body.classList.add("t05-fear-active");
        document.documentElement.appendChild(overlay);
    }

    function triggerPost404Glitch() {
        document.body.classList.remove("post404-hard-glitch");
        void document.body.offsetWidth;
        document.body.classList.add("post404-hard-glitch");

        setTimeout(function () {
            document.body.classList.remove("post404-hard-glitch");
        }, 1100);
    }

    document.addEventListener("DOMContentLoaded", initPost404Page);
})();

/* THREAD 05 unlock post_404 link patch - SAFE VERSION */
document.addEventListener("DOMContentLoaded", function () {
    if (
        !document.body.classList.contains("page-thread-05") &&
        !document.body.classList.contains("thread05-page")
    ) {
        return;
    }

    const link = document.getElementById("thread05Post404Link");
    if (!link) return;

    function unlockPost404Link() {
        const opened =
            localStorage.getItem("echorest_t05_404_touched") === "1" ||
            localStorage.getItem("echorest_post404_visit_count");

        if (!opened) return;

        link.classList.remove("disabled-next-link");
        link.textContent = "打开 post_404.index";
        link.href = "post_404.html";
        link.style.pointerEvents = "auto";
    }

    unlockPost404Link();

    window.addEventListener("pageshow", unlockPost404Link);
});


/* ================================
   MIRROR ROUTE - Local Session Mirror
   ================================ */

(function () {
    window.TXT = window.TXT || {};

    window.TXT.mirror = {
        statusReady: "\u5df2\u8fdb\u5165\u672c\u5730\u4f1a\u8bdd\u955c\u50cf\u3002\u8be5\u9875\u9762\u53ea\u8bfb\u53d6\u4f60\u5f53\u524d\u6d4f\u89c8\u5668\u4e2d\u7559\u4e0b\u7684 EchoRest \u75d5\u8ff9\u3002",
        statusLocal: "\u5df2\u8bfb\u53d6\u672c\u5730\u4f1a\u8bdd\u3002",
        statusRepair: "\u5df2\u8bfb\u53d6\u672c\u5730\u7ef4\u4fee\u8bb0\u5f55\u3002",
        statusProfile: "\u7ef4\u4fee\u5458\u955c\u50cf\u5df2\u751f\u6210\u3002\u540e\u53f0\u6743\u9650\u51b2\u7a81\u9875\u5df2\u66b4\u9732\u3002",
        needLocal: "\u9700\u8981\u5148\u8bfb\u53d6\u672c\u5730\u4f1a\u8bdd\u3002",
        needRepair: "\u9700\u8981\u5148\u8bfb\u53d6\u7ef4\u4fee\u8bb0\u5f55\u3002",

        localTitle: "\u672c\u5730\u4f1a\u8bdd\u8bb0\u5f55 / LOCAL SESSION",
        repairTitle: "\u7ef4\u4fee\u8bb0\u5f55 / REPAIR TRACE",
        profileTitle: "\u7ef4\u4fee\u5458\u955c\u50cf / REPAIRER MIRROR",

        noWorker: "\u672a\u9a8c\u8bc1\u7ef4\u4fee\u5458",
        unknown: "\u672a\u77e5",
        yes: "\u662f",
        no: "\u5426",

        localRead: "\u5df2\u8bfb\u53d6 mirror route\u3002",
        repairRead: "\u5df2\u8bfb\u53d6\u672c\u5730\u7ef4\u4fee\u8bb0\u5f55\u3002",
        profileRead: "\u5df2\u751f\u6210\u5f53\u524d\u7ef4\u4fee\u5458\u955c\u50cf\u3002",

        hiddenFragment: "\u201c\u4f60\u4ee5\u4e3a\u4f60\u5728\u6253\u5f00\u4e00\u4e2a\u7f3a\u9875\u3002\u5176\u5b9e\u4f60\u5728\u8ba9\u5b83\u786e\u8ba4\u8c01\u6765\u4fee\u5b83\u3002\u201d",

        riskLow: "\u4f4e",
        riskHigh: "\u9ad8",
        fingerprint: "\u672c\u5730\u6307\u7eb9",
        conclusionSafe: "\u5c1a\u672a\u68c0\u6d4b\u5230\u5b8c\u6574\u91cd\u590d\u8def\u5f84\u3002",
        conclusionDanger: "\u68c0\u6d4b\u5230\u5b8c\u6574\u91cd\u590d\u8def\u5f84\u3002\u5f53\u524d\u7ef4\u4fee\u5458\u5df2\u88ab\u89c6\u4e3a\u53ef\u63a5\u7ba1\u5bf9\u8c61\u3002",

        revealTitleStrong: "\u672c\u5730\u955c\u50cf\u5df2\u5b8c\u6210\u5f53\u524d\u8bfb\u53d6",
        revealBodyStrong: "\u4f60\u521a\u624d\u751f\u6210\u7684\u4e0d\u50cf\u4e00\u4efd\u666e\u901a\u6458\u8981\u3002\u5b83\u66f4\u50cf\u4e00\u4e2a\u53ef\u88ab\u540e\u7eed\u7f13\u5b58\u518d\u6b21\u5f15\u7528\u7684\u672c\u5730\u5f71\u5b50\u3002",
        revealWarningStrong: "\u9875\u9762\u672c\u8eab\u4e0d\u4f1a\u7559\u4f4f\u4f60\uff0c\u4f46\u6d4f\u89c8\u5668\u4f1a\u628a\u8fd9\u4e9b\u75d5\u8ff9\u7559\u4e0b\u3002",
        revealButtonStrong: "\u786e\u8ba4\u5f53\u524d\u955c\u50cf\u5df2\u88ab\u8bb0\u5f55",

        revealLine1: "\u5df2\u8bfb\u53d6 local session trace",
        revealLine2: "\u5df2\u8bfb\u53d6 repair trace",
        revealLine3: "\u6b63\u5728\u751f\u6210 current repairer mirror",
        revealLine4: "\u5199\u5165\u76ee\u6807\uff1alocal session cache",
        revealLine5: "\u72b6\u6001\uff1a\u53ef\u88ab\u540e\u53f0\u7ee7\u7eed\u5f15\u7528",
        revealLine6: "\u955c\u50cf\u7ed3\u679c\uff1aaccepted",
    };

    const MIRROR_KEYS = {
        visit: "echorest_mirror_visit_count",
        local: "echorest_mirror_local_read",
        repair: "echorest_mirror_repair_read",
        profile: "echorest_mirror_profile_generated",
        extraLog: "echorest_repair_log_extra"
    };

    function mirrorText() {
        return window.TXT.mirror;
    }

    function mirror$(id) {
        return document.getElementById(id);
    }

    function mirrorHas(key) {
        return localStorage.getItem(key) === "1";
    }

    function mirrorSet(key) {
        localStorage.setItem(key, "1");
    }

    function mirrorAddLog(text) {
        let logs = [];

        try {
            logs = JSON.parse(localStorage.getItem(MIRROR_KEYS.extraLog) || "[]");
        } catch (e) {
            logs = [];
        }

        if (!logs.includes(text)) {
            logs.push(text);
            localStorage.setItem(MIRROR_KEYS.extraLog, JSON.stringify(logs));
        }
    }

    function initMirrorPage() {
        if (!document.body.classList.contains("page-mirror")) return;

        const accessGranted = localStorage.getItem("echo_access_granted");
        const workerId = localStorage.getItem("echo_worker_id");

        if (accessGranted !== "true" || !workerId) {
            alert(TXT.alertNeedLogin);
            window.location.href = "../../login.html";
            return;
        }
        const T = mirrorText();

        const worker = localStorage.getItem("echo_worker_id") || T.noWorker;
        const session = localStorage.getItem("echo_session_id") || "SESSION_13";

        let visit = Number(localStorage.getItem(MIRROR_KEYS.visit) || "0");
        visit += 1;
        localStorage.setItem(MIRROR_KEYS.visit, String(visit));

        const workerEl = mirror$("mirrorWorkerValue");
        const sessionEl = mirror$("mirrorSessionValue");
        const visitEl = mirror$("mirrorVisitValue");
        const riskEl = mirror$("mirrorRiskValue");
        const statusEl = mirror$("mirrorStatusText");

        if (workerEl) workerEl.textContent = worker;
        if (sessionEl) sessionEl.textContent = session;
        if (visitEl) visitEl.textContent = String(visit);
        if (riskEl) riskEl.textContent = getMirrorRiskText();

        if (statusEl) {
            statusEl.textContent = T.statusReady;
        }

        mirrorAddLog(T.localRead);

        const buttons = document.querySelectorAll("[data-mirror-action]");
        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const action = btn.getAttribute("data-mirror-action");
                handleMirrorAction(action);
            });
        });

        syncMirrorState();

        document.body.classList.add("mirror-hard-glitch");
        setTimeout(function () {
            document.body.classList.remove("mirror-hard-glitch");
        }, 850);
    }

    function handleMirrorAction(action) {
        const T = mirrorText();

        if (action === "local") {
            mirrorSet(MIRROR_KEYS.local);
            renderMirrorLocalPanel();
            updateMirrorStatus(T.statusLocal);
            syncMirrorState();
            return;
        }

        if (action === "repair") {
            mirrorSet(MIRROR_KEYS.repair);
            renderMirrorRepairPanel();
            updateMirrorStatus(T.statusRepair);
            mirrorAddLog(T.repairRead);
            syncMirrorState();
            return;
        }

        if (action === "profile") {
            if (!mirrorHas(MIRROR_KEYS.local)) {
                alert(T.needLocal);
                return;
            }

            if (!mirrorHas(MIRROR_KEYS.repair)) {
                alert(T.needRepair);
                return;
            }

            mirrorSet(MIRROR_KEYS.profile);
            renderMirrorProfilePanel();
            updateMirrorStatus(T.statusProfile);
            mirrorAddLog(T.profileRead);
            revealMirrorRoute();
            triggerMirrorGlitch();
            triggerMirrorRevealOverlay();
            syncMirrorState();
        }
    }

    function updateMirrorStatus(text) {
        const statusEl = mirror$("mirrorStatusText");
        if (statusEl) statusEl.textContent = text;
    }

    function syncMirrorState() {
        const profileBtn = document.querySelector('[data-mirror-action="profile"]');

        if (profileBtn) {
            const ready = mirrorHas(MIRROR_KEYS.local) && mirrorHas(MIRROR_KEYS.repair);
            profileBtn.classList.toggle("locked", !ready);
        }

        if (mirrorHas(MIRROR_KEYS.local)) {
            renderMirrorLocalPanel();
        }

        if (mirrorHas(MIRROR_KEYS.repair)) {
            renderMirrorRepairPanel();
        }

        if (mirrorHas(MIRROR_KEYS.profile)) {
            renderMirrorProfilePanel();
            revealMirrorRoute();
        }
    }

    function renderMirrorLocalPanel() {
        const T = mirrorText();
        const panel = mirror$("mirrorLocalPanel");
        if (!panel) return;

        const worker = localStorage.getItem("echo_worker_id") || T.noWorker;
        const session = localStorage.getItem("echo_session_id") || "SESSION_13";
        const firstVisit = localStorage.getItem("echo_first_visit") || T.unknown;
        const lastLogin = localStorage.getItem("echo_last_login_time") || T.unknown;
        const post404Touched = localStorage.getItem("echorest_t05_404_touched") === "1" ? T.yes : T.no;
        const post404Compared = localStorage.getItem("echorest_post404_compared") === "1" ? T.yes : T.no;

        const path = buildMirrorPath();

        panel.classList.remove("hidden");
        panel.innerHTML =
            "<strong>" + T.localTitle + "</strong>\n\n" +
            "repairer_id = " + worker + "\n" +
            "session_id = " + session + "\n" +
            "first_visit = " + firstVisit + "\n" +
            "last_login = " + lastLogin + "\n" +
            "post_404_touched = " + post404Touched + "\n" +
            "post_404_compared = " + post404Compared + "\n\n" +
            "observed_path:\n" +
            path;
    }

    function renderMirrorRepairPanel() {
        const T = mirrorText();
        const panel = mirror$("mirrorRepairPanel");
        if (!panel) return;

        const lines = getMirrorRepairLines();

        panel.classList.remove("hidden");
        panel.innerHTML =
            "<strong>" + T.repairTitle + "</strong>\n\n" +
            lines.join("\n");
    }

    function renderMirrorProfilePanel() {
        const T = mirrorText();
        const panel = mirror$("mirrorProfilePanel");
        if (!panel) return;

        const worker = localStorage.getItem("echo_worker_id") || T.noWorker;
        const session = localStorage.getItem("echo_session_id") || "SESSION_13";
        const fingerprint = makeMirrorFingerprint(worker + "::" + session);
        const compared = localStorage.getItem("echorest_post404_compared") === "1";
        const conclusion = compared ? T.conclusionDanger : T.conclusionSafe;
        const dangerClass = compared ? "danger" : "soft";

        panel.classList.remove("hidden");
        panel.innerHTML =
            "<strong>" + T.profileTitle + "</strong>\n\n" +
            "repairer_id = " + worker + "\n" +
            "session_id = " + session + "\n" +
            T.fingerprint + " = " + fingerprint + "\n" +
            "admin_conflict_candidate = " + (compared ? T.yes : T.no) + "\n\n" +
            "<span class=\"" + dangerClass + "\">" + conclusion + "</span>";
    }

    function getMirrorRepairLines() {
        const T = mirrorText();
        const lines = [];

        if (localStorage.getItem("echo_access_granted") === "true") {
            lines.push("[LOGIN] " + "\u5df2\u5efa\u7acb\u7ef4\u62a4\u4f1a\u8bdd\u3002");
        }

        addVisitLine(lines, "THREAD_01", "echo_thread01_visit_count");
        addRepairLine(lines, "THREAD_01_NEWS", "echo_thread01_news_repaired");

        addVisitLine(lines, "THREAD_02", "echo_thread02_visit_count");
        addRepairLine(lines, "THREAD_02_RESUME", "echo_thread02_resume_repaired");

        addVisitLine(lines, "THREAD_03", "echo_thread03_visit_count");
        addRepairLine(lines, "THREAD_03_AUDIO", "echo_thread03_audio_repaired");

        addVisitLine(lines, "THREAD_04", "echo_thread04_visit_count");
        addRepairLine(lines, "THREAD_04_DRAFT", "echo_thread04_draft_repaired");

        addVisitLine(lines, "THREAD_05", "echorest_thread05_reads");

        if (localStorage.getItem("echorest_t05_404_touched") === "1") {
            lines.push("[POST_404_TOUCH] " + "\u5df2\u5728 THREAD_05 \u89e6\u78b0 post_404.index\u3002");
        }

        addVisitLine(lines, "POST_404", "echorest_post404_visit_count");

        if (localStorage.getItem("echorest_post404_compared") === "1") {
            lines.push("[POST_404_COMPARE] " + "\u5df2\u5b8c\u6210\u8def\u5f84\u6bd4\u5bf9\u3002");
        }

        const extra = getMirrorExtraLogs();
        extra.forEach(function (line) {
            lines.push("[EXTRA] " + line);
        });

        if (!lines.length) {
            lines.push("[EMPTY] " + T.unknown);
        }

        return lines;
    }

    function addVisitLine(lines, label, key) {
        const count = Number(localStorage.getItem(key) || "0");
        if (count > 0) {
            lines.push("[" + label + "] visit_count = " + count);
        }
    }

    function addRepairLine(lines, label, key) {
        if (localStorage.getItem(key) === "true") {
            lines.push("[" + label + "] repaired = true");
        }
    }

    function getMirrorExtraLogs() {
        try {
            return JSON.parse(localStorage.getItem(MIRROR_KEYS.extraLog) || "[]");
        } catch (e) {
            return [];
        }
    }

    function buildMirrorPath() {
        const path = [];

        if (localStorage.getItem("echo_access_granted") === "true") path.push("login");
        if (Number(localStorage.getItem("echo_dashboard_visit_count") || "0") > 0) path.push("dashboard");
        if (Number(localStorage.getItem("echo_board_visit_count") || "0") > 0) path.push("board");
        if (Number(localStorage.getItem("echo_thread01_visit_count") || "0") > 0) path.push("thread_01");
        if (Number(localStorage.getItem("echo_thread02_visit_count") || "0") > 0) path.push("thread_02");
        if (Number(localStorage.getItem("echo_thread03_visit_count") || "0") > 0) path.push("thread_03");
        if (Number(localStorage.getItem("echo_thread04_visit_count") || "0") > 0) path.push("thread_04");
        if (Number(localStorage.getItem("echorest_thread05_reads") || "0") > 0) path.push("thread_05");
        if (Number(localStorage.getItem("echorest_post404_visit_count") || "0") > 0) path.push("post_404");

        path.push("mirror");

        return path.join(" > ");
    }

    function makeMirrorFingerprint(text) {
        let hash = 0;

        for (let i = 0; i < text.length; i++) {
            hash = (hash * 31 + text.charCodeAt(i)) % 1000000;
        }

        return "MIRROR-" + String(hash).padStart(6, "0");
    }

    function getMirrorRiskText() {
        const T = mirrorText();
        const compared = localStorage.getItem("echorest_post404_compared") === "1";
        return compared ? T.riskHigh : T.riskLow;
    }

    function revealMirrorRoute() {
        const hidden = mirror$("mirrorHiddenFragment");
        const route = mirror$("mirrorRouteExpose");

        if (hidden) {
            hidden.classList.remove("locked");
            hidden.classList.add("unlocked");
            hidden.innerHTML =
                "<span>MIRROR_03</span>" +
                "<p>" + mirrorText().hiddenFragment + "</p>";
        }

        if (route) {
            route.classList.remove("hidden");
        }
    }

    function triggerMirrorRevealOverlay() {
        const T = mirrorText();

        document.body.classList.remove("t05-fear-active");

        const oldOverlay = document.getElementById("mirrorRevealOverlay");
        if (oldOverlay) {
            oldOverlay.remove();
        }

        const overlay = document.createElement("div");
        overlay.id = "mirrorRevealOverlay";
        overlay.className = "t05-fear-overlay mirror-reveal-overlay";

        const veil = document.createElement("div");
        veil.className = "t05-fear-veil";
        overlay.appendChild(veil);

        for (let i = 0; i < 24; i++) {
            const block = document.createElement("div");
            block.className = "t05-fear-block";
            block.style.left = Math.floor(Math.random() * 100) + "vw";
            block.style.top = Math.floor(Math.random() * 100) + "vh";
            block.style.width = Math.floor(24 + Math.random() * 140) + "px";
            block.style.height = Math.floor(10 + Math.random() * 68) + "px";
            block.style.opacity = String(0.16 + Math.random() * 0.36);
            block.style.animationDelay = String(Math.random() * 0.22) + "s";
            overlay.appendChild(block);
        }

        const terminal = document.createElement("div");
        terminal.className = "t05-fear-terminal";

        const terminalLines = [
            ">>> " + T.revealLine1,
            ">>> " + T.revealLine2,
            ">>> " + T.revealLine3,
            ">>> " + T.revealLine4,
            ">>> " + T.revealLine5,
            ">>> " + T.revealLine6
        ];

        terminalLines.forEach(function (line, index) {
            const div = document.createElement("div");
            div.className = "t05-fear-terminal-line";
            div.textContent = line;
            div.style.animationDelay = String(index * 0.14) + "s";
            terminal.appendChild(div);
        });

        overlay.appendChild(terminal);

        const modal = document.createElement("div");
        modal.className = "t05-fear-modal mirror-reveal-modal";

        const label = document.createElement("div");
        label.className = "t05-fear-label";
        label.textContent = "ECHO_REST / LOCAL_TRACE";

        const title = document.createElement("h2");
        title.textContent = T.revealTitleStrong;

        const body1 = document.createElement("p");
        body1.textContent = T.revealBodyStrong;

        const body2 = document.createElement("p");
        body2.className = "t05-fear-warning";
        body2.textContent = T.revealWarningStrong;

        const body3 = document.createElement("p");
        body3.className = "t05-fear-code";
        body3.textContent = "mirror.profile == current_repairer.snapshot // local_session_trace = accepted";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = T.revealButtonStrong;

        function closeMirrorOverlay() {
            document.body.classList.remove("t05-fear-active");

            const nowOverlay = document.getElementById("mirrorRevealOverlay");
            if (nowOverlay) {
                nowOverlay.remove();
            }
        }

        btn.addEventListener("click", closeMirrorOverlay);

        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                closeMirrorOverlay();
            }
        });

        modal.appendChild(label);
        modal.appendChild(title);
        modal.appendChild(body1);
        modal.appendChild(body2);
        modal.appendChild(body3);
        modal.appendChild(btn);
        overlay.appendChild(modal);

        document.body.classList.add("t05-fear-active");
        document.documentElement.appendChild(overlay);
    }

    function triggerMirrorGlitch() {
        document.body.classList.remove("mirror-hard-glitch");
        void document.body.offsetWidth;
        document.body.classList.add("mirror-hard-glitch");

        setTimeout(function () {
            document.body.classList.remove("mirror-hard-glitch");
        }, 1100);
    }

    document.addEventListener("DOMContentLoaded", initMirrorPage);
})();

/* ================================
   ADMIN ROUTE - Permission Conflict
   ================================ */

(function () {
    window.TXT = window.TXT || {};

    window.TXT.adminRoute = {
        noWorker: "\u672a\u9a8c\u8bc1\u7ef4\u4fee\u5458",
        statusReady: "\u5df2\u8fdb\u5165\u6743\u9650\u51b2\u7a81\u9875\u3002\u8be5\u9875\u9762\u4e0d\u5e94\u51fa\u73b0\u5728\u7ef4\u4fee\u5458\u5de5\u4f5c\u533a\u3002",
        statusScan: "\u6743\u9650\u51b2\u7a81\u5df2\u8bfb\u53d6\u3002\u5f53\u524d\u7ef4\u4fee\u5458\u4e0e MOD_005 \u5b58\u5728\u8def\u5f84\u91cd\u53e0\u3002",
        statusTakeover: "\u63a5\u7ba1\u5931\u8d25\u3002\u7cfb\u7edf\u672a\u627e\u5230\u53ef\u5206\u79bb\u7684\u7ba1\u7406\u5458\u8eab\u4efd\u3002",
        statusRollback: "\u56de\u6eda\u5931\u8d25\u3002\u9e22\u7684\u8bb0\u5f55\u4ecd\u7136\u6307\u5411\u5f53\u524d\u7ef4\u4fee\u5458\u3002",
        statusLogout: "\u6ce8\u9500\u5931\u8d25\u3002\u5f53\u524d\u7ef4\u4fee\u5458\u5df2\u88ab\u5199\u5165\u4e0b\u4e00\u4e2a\u7ba1\u7406\u5458\u69fd\u4f4d\u3002",
        needScan: "\u9700\u8981\u5148\u8bfb\u53d6\u6743\u9650\u51b2\u7a81\u3002",
        scanTitle: "\u6743\u9650\u51b2\u7a81\u8bfb\u53d6 / PERMISSION CONFLICT",
        takeoverTitle: "\u63a5\u7ba1\u6743\u9650 / TAKEOVER FAILED",
        rollbackTitle: "\u56de\u6eda\u7ba1\u7406\u5458 / ROLLBACK FAILED",
        logoutTitle: "\u6ce8\u9500\u7ef4\u4fee\u5458 / LOGOUT FAILED",
        hiddenFragment: "\u201c\u7cfb\u7edf\u4e0d\u9700\u8981\u4f60\u9009\u5bf9\u3002\u5b83\u53ea\u9700\u8981\u4f60\u7ee7\u7eed\u505a\u51fa\u9009\u62e9\u3002\u201d",
        logEnter: "\u5df2\u8fdb\u5165 admin terminal\u3002",
        logScan: "\u5df2\u8bfb\u53d6\u7ba1\u7406\u5458\u6743\u9650\u51b2\u7a81\u3002",
        logDanger: "\u5df2\u89e6\u53d1 admin terminal \u5371\u9669\u64cd\u4f5c\u3002",

        revealTitleStrong: "\u7ba1\u7406\u5458\u51b2\u7a81\u5df2\u786e\u8ba4",
        revealBodyStrong: "\u4f60\u521a\u624d\u89e6\u53d1\u7684\u4e0d\u50cf\u4e00\u6b21\u6743\u9650\u64cd\u4f5c\uff0c\u66f4\u50cf\u4e00\u6b21\u201c\u5f53\u524d\u5bf9\u8c61\u662f\u5426\u53ef\u88ab\u63a5\u7ba1\u201d\u7684\u786e\u8ba4\u3002",
        revealWarningStrong: "\u540e\u53f0\u4e0d\u4e00\u5b9a\u662f\u7ed9\u4eba\u64cd\u4f5c\u7684\u5730\u65b9\uff0c\u6709\u65f6\u5b83\u53ea\u662f\u7528\u6765\u7b5b\u51fa\u8be5\u88ab\u5199\u8fdb\u53bb\u7684\u5bf9\u8c61\u3002",
        revealButtonStrong: "\u786e\u8ba4\u5f53\u524d\u7ef4\u4fee\u5458\u5df2\u88ab\u5217\u5165\u51b2\u7a81\u8bb0\u5f55",

        revealLine1: "\u5df2\u8bfb\u53d6 permission_conflict",
        revealLine2: "\u6b63\u5728\u5199\u5165 admin_conflict.record",
        revealLine3: "\u76ee\u6807\u5bf9\u8c61\uff1a\u5f53\u524d\u7ef4\u4fee\u5458",
        revealLine4: "\u5173\u8054\u7ba1\u7406\u5458\uff1a\u9e22 / MOD_005",
        revealLine5: "\u7ed3\u679c\uff1a\u65e0\u6cd5\u5206\u79bb",
        revealLine6: "\u72b6\u6001\uff1aaccepted_as_conflict",
    };

    const ADMIN_KEYS = {
        visit: "echorest_admin_visit_count",
        scan: "echorest_admin_scan_read",
        takeover: "echorest_admin_takeover_touched",
        rollback: "echorest_admin_rollback_touched",
        logout: "echorest_admin_logout_touched",
        final: "echorest_admin_final_exposed",
        extraLog: "echorest_repair_log_extra"
    };

    function adminText() {
        return window.TXT.adminRoute;
    }

    function admin$(id) {
        return document.getElementById(id);
    }

    function adminHas(key) {
        return localStorage.getItem(key) === "1";
    }

    function adminSet(key) {
        localStorage.setItem(key, "1");
    }

    function adminAddLog(text) {
        let logs = [];

        try {
            logs = JSON.parse(localStorage.getItem(ADMIN_KEYS.extraLog) || "[]");
        } catch (e) {
            logs = [];
        }

        if (!logs.includes(text)) {
            logs.push(text);
            localStorage.setItem(ADMIN_KEYS.extraLog, JSON.stringify(logs));
        }
    }

    function initAdminRoutePage() {
        if (!document.body.classList.contains("page-admin-route")) return;

        const accessGranted = localStorage.getItem("echo_access_granted");
        const workerId = localStorage.getItem("echo_worker_id");

        if (accessGranted !== "true" || !workerId) {
            alert(TXT.alertNeedLogin);
            window.location.href = "../../login.html";
            return;
        }

        const T = adminText();
        const worker = localStorage.getItem("echo_worker_id") || T.noWorker;

        let visit = Number(localStorage.getItem(ADMIN_KEYS.visit) || "0");
        visit += 1;
        localStorage.setItem(ADMIN_KEYS.visit, String(visit));

        const workerEl = admin$("adminWorkerValue");
        const inlineWorkerEl = admin$("adminInlineWorker");
        const mergeEl = admin$("adminMergeValue");
        const statusEl = admin$("adminStatusText");

        if (workerEl) workerEl.textContent = worker;
        if (inlineWorkerEl) inlineWorkerEl.textContent = worker;
        if (mergeEl) mergeEl.textContent = getAdminMergeRate();
        if (statusEl) statusEl.textContent = T.statusReady;

        adminAddLog(T.logEnter);

        const buttons = document.querySelectorAll("[data-admin-action]");
        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const action = btn.getAttribute("data-admin-action");
                handleAdminAction(action);
            });
        });

        syncAdminState();

        document.body.classList.add("admin-hard-glitch");
        setTimeout(function () {
            document.body.classList.remove("admin-hard-glitch");
        }, 900);
    }

    function handleAdminAction(action) {
        const T = adminText();

        if (action !== "scan" && !adminHas(ADMIN_KEYS.scan)) {
            alert(T.needScan);
            return;
        }

        if (action === "scan") {
            adminSet(ADMIN_KEYS.scan);
            renderAdminPanel("adminScanPanel", T.scanTitle, buildAdminScanBody(), false);
            updateAdminStatus(T.statusScan);
            adminAddLog(T.logScan);
            syncAdminState();
            triggerAdminGlitch();
            return;
        }

        if (action === "takeover") {
            adminSet(ADMIN_KEYS.takeover);
            renderAdminPanel("adminTakeoverPanel", T.takeoverTitle, buildAdminTakeoverBody(), true);
            updateAdminStatus(T.statusTakeover);
            adminAfterDangerAction();
            return;
        }

        if (action === "rollback") {
            adminSet(ADMIN_KEYS.rollback);
            renderAdminPanel("adminRollbackPanel", T.rollbackTitle, buildAdminRollbackBody(), true);
            updateAdminStatus(T.statusRollback);
            adminAfterDangerAction();
            return;
        }

        if (action === "logout") {
            adminSet(ADMIN_KEYS.logout);
            renderAdminPanel("adminLogoutPanel", T.logoutTitle, buildAdminLogoutBody(), true);
            updateAdminStatus(T.statusLogout);
            adminAfterDangerAction();
        }
    }

    function adminAfterDangerAction() {
        adminSet(ADMIN_KEYS.final);
        adminAddLog(adminText().logDanger);
        revealAdminFinal();
        syncAdminState();
        triggerAdminGlitch();
        triggerAdminRevealOverlay();
    }

    function updateAdminStatus(text) {
        const statusEl = admin$("adminStatusText");
        if (statusEl) statusEl.textContent = text;
    }

    function syncAdminState() {
        const dangerousButtons = document.querySelectorAll(
            '[data-admin-action="takeover"], [data-admin-action="rollback"], [data-admin-action="logout"]'
        );

        dangerousButtons.forEach(function (btn) {
            btn.classList.toggle("locked", !adminHas(ADMIN_KEYS.scan));
        });

        if (adminHas(ADMIN_KEYS.scan)) {
            renderAdminPanel("adminScanPanel", adminText().scanTitle, buildAdminScanBody(), false);
        }

        if (adminHas(ADMIN_KEYS.takeover)) {
            renderAdminPanel("adminTakeoverPanel", adminText().takeoverTitle, buildAdminTakeoverBody(), true);
        }

        if (adminHas(ADMIN_KEYS.rollback)) {
            renderAdminPanel("adminRollbackPanel", adminText().rollbackTitle, buildAdminRollbackBody(), true);
        }

        if (adminHas(ADMIN_KEYS.logout)) {
            renderAdminPanel("adminLogoutPanel", adminText().logoutTitle, buildAdminLogoutBody(), true);
        }

        if (adminHas(ADMIN_KEYS.final)) {
            revealAdminFinal();
        }

        const mergeEl = admin$("adminMergeValue");
        if (mergeEl) mergeEl.textContent = getAdminMergeRate();
    }

    function renderAdminPanel(panelId, title, body, danger) {
        const panel = admin$(panelId);
        if (!panel) return;

        panel.classList.remove("hidden");
        panel.innerHTML =
            "<strong>" + title + "</strong>\n\n" +
            "<span class=\"" + (danger ? "danger" : "soft") + "\">" +
            body +
            "</span>";
    }

    function buildAdminScanBody() {
        const worker = localStorage.getItem("echo_worker_id") || adminText().noWorker;
        const session = localStorage.getItem("echo_session_id") || "SESSION_13";
        const mirrorGenerated = localStorage.getItem("echorest_mirror_profile_generated") === "1";
        const postCompared = localStorage.getItem("echorest_post404_compared") === "1";

        return (
            "current_admin = \u9e22 / MOD_005\n" +
            "current_repairer = " + worker + "\n" +
            "session_id = " + session + "\n" +
            "mirror_profile_generated = " + mirrorGenerated + "\n" +
            "post_404_compared = " + postCompared + "\n" +
            "permission_conflict = true\n" +
            "merge_candidate = true"
        );
    }

    function buildAdminTakeoverBody() {
        return (
            "takeover_request = submitted\n" +
            "target_admin = \u9e22 / MOD_005\n" +
            "result = failed\n" +
            "reason = target_admin cannot be separated from current_repairer\n" +
            "new_state = shared_slot"
        );
    }

    function buildAdminRollbackBody() {
        return (
            "rollback_request = submitted\n" +
            "target_cache = admin_yuan.cache\n" +
            "result = failed\n" +
            "reason = previous repairer path points to current repairer path\n" +
            "new_state = loop_preserved"
        );
    }

    function buildAdminLogoutBody() {
        const worker = localStorage.getItem("echo_worker_id") || adminText().noWorker;

        return (
            "logout_request = submitted\n" +
            "repairer = " + worker + "\n" +
            "result = failed\n" +
            "reason = repairer already indexed by admin_conflict\n" +
            "next_admin_slot = current_repairer"
        );
    }

    function getAdminMergeRate() {
        if (adminHas(ADMIN_KEYS.final)) return "100%";
        if (adminHas(ADMIN_KEYS.takeover) || adminHas(ADMIN_KEYS.rollback) || adminHas(ADMIN_KEYS.logout)) return "99.98%";
        if (adminHas(ADMIN_KEYS.scan)) return "99.73%";
        return "\u672a\u8ba1\u7b97";
    }

    function revealAdminFinal() {
        const hidden = admin$("adminHiddenFragment");
        const box = admin$("adminFinalExpose");

        if (hidden) {
            hidden.classList.remove("locked");
            hidden.classList.add("unlocked");
            hidden.innerHTML =
                "<span>ADMIN_NOTE_03</span>" +
                "<p>" + adminText().hiddenFragment + "</p>";
        }

        if (box) {
            box.classList.remove("hidden");
        }
    }

    function triggerAdminRevealOverlay() {
        const T = adminText();

        document.body.classList.remove("t05-fear-active");

        const oldOverlay = document.getElementById("adminRevealOverlay");
        if (oldOverlay) {
            oldOverlay.remove();
        }

        const overlay = document.createElement("div");
        overlay.id = "adminRevealOverlay";
        overlay.className = "t05-fear-overlay admin-reveal-overlay";

        const veil = document.createElement("div");
        veil.className = "t05-fear-veil";
        overlay.appendChild(veil);

        for (let i = 0; i < 28; i++) {
            const block = document.createElement("div");
            block.className = "t05-fear-block";
            block.style.left = Math.floor(Math.random() * 100) + "vw";
            block.style.top = Math.floor(Math.random() * 100) + "vh";
            block.style.width = Math.floor(24 + Math.random() * 160) + "px";
            block.style.height = Math.floor(10 + Math.random() * 72) + "px";
            block.style.opacity = String(0.18 + Math.random() * 0.44);
            block.style.animationDelay = String(Math.random() * 0.24) + "s";
            overlay.appendChild(block);
        }

        const terminal = document.createElement("div");
        terminal.className = "t05-fear-terminal";

        const terminalLines = [
            ">>> " + T.revealLine1,
            ">>> " + T.revealLine2,
            ">>> " + T.revealLine3,
            ">>> " + T.revealLine4,
            ">>> " + T.revealLine5,
            ">>> " + T.revealLine6
        ];

        terminalLines.forEach(function (line, index) {
            const div = document.createElement("div");
            div.className = "t05-fear-terminal-line";
            div.textContent = line;
            div.style.animationDelay = String(index * 0.14) + "s";
            terminal.appendChild(div);
        });

        overlay.appendChild(terminal);

        const modal = document.createElement("div");
        modal.className = "t05-fear-modal admin-reveal-modal";

        const label = document.createElement("div");
        label.className = "t05-fear-label";
        label.textContent = "ECHO_REST / ADMIN_CONFLICT";

        const title = document.createElement("h2");
        title.textContent = T.revealTitleStrong;

        const body1 = document.createElement("p");
        body1.textContent = T.revealBodyStrong;

        const body2 = document.createElement("p");
        body2.className = "t05-fear-warning";
        body2.textContent = T.revealWarningStrong;

        const body3 = document.createElement("p");
        body3.className = "t05-fear-code";
        body3.textContent = "admin_conflict.record == current_repairer // merge_state = irreversible";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = T.revealButtonStrong;

        function closeAdminOverlay() {
            document.body.classList.remove("t05-fear-active");

            const nowOverlay = document.getElementById("adminRevealOverlay");
            if (nowOverlay) {
                nowOverlay.remove();
            }
        }

        btn.addEventListener("click", closeAdminOverlay);

        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                closeAdminOverlay();
            }
        });

        modal.appendChild(label);
        modal.appendChild(title);
        modal.appendChild(body1);
        modal.appendChild(body2);
        modal.appendChild(body3);
        modal.appendChild(btn);
        overlay.appendChild(modal);

        document.body.classList.add("t05-fear-active");
        document.documentElement.appendChild(overlay);
    }

    function triggerAdminGlitch() {
        document.body.classList.remove("admin-hard-glitch");
        void document.body.offsetWidth;
        document.body.classList.add("admin-hard-glitch");

        setTimeout(function () {
            document.body.classList.remove("admin-hard-glitch");
        }, 1100);
    }

    document.addEventListener("DOMContentLoaded", initAdminRoutePage);
})();

/* ================================
   FINAL SYNC - Shutdown Ending
   ================================ */

(function () {
    window.TXT = window.TXT || {};

    window.TXT.finalSync = {
        noWorker: "\u672a\u9a8c\u8bc1\u7ef4\u4fee\u5458",
        statusReady: "\u5df2\u8fdb\u5165\u6700\u7ec8\u540c\u6b65\u9875\u3002\u8be5\u9875\u9762\u4f1a\u7ed3\u675f\u5f53\u524d\u53ef\u89c1\u7ef4\u4fee\u6d41\u7a0b\u3002",
        statusSync: "\u6700\u7ec8\u540c\u6b65\u5df2\u8bfb\u53d6\u3002\u5f53\u524d\u7ef4\u4fee\u5458\u6b63\u5728\u88ab\u5199\u5165\u7ba1\u7406\u5458\u69fd\u4f4d\u3002",
        statusRecord: "\u5199\u5165\u5bf9\u8c61\u5df2\u663e\u793a\u3002\u5f53\u524d\u7ef4\u4fee\u5458\u5c06\u6210\u4e3a\u4e0b\u4e00\u8f6e\u53ef\u6062\u590d\u7f13\u5b58\u3002",
        statusShutdown: "\u5173\u95ed\u6d41\u7a0b\u5df2\u6267\u884c\u3002\u672c\u8f6e EchoRest \u53ef\u89c1\u9875\u9762\u5df2\u7ed3\u675f\u3002",
        needSync: "\u9700\u8981\u5148\u8bfb\u53d6\u6700\u7ec8\u540c\u6b65\u3002",
        needRecord: "\u9700\u8981\u5148\u67e5\u770b\u5199\u5165\u5bf9\u8c61\u3002",
        syncTitle: "\u6700\u7ec8\u540c\u6b65 / FINAL SYNC",
        recordTitle: "\u5199\u5165\u5bf9\u8c61 / RECORDED OBJECT",
        shutdownTitle: "\u5173\u95ed\u6d41\u7a0b / SHUTDOWN COMPLETE",
        hiddenFragment: "\u201c\u5982\u679c\u4f60\u518d\u6b21\u6253\u5f00 EchoRest\uff0c\u8bf7\u5148\u786e\u8ba4\u4e00\u4ef6\u4e8b\uff1a\u4f60\u662f\u6765\u4fee\u590d\u5b83\uff0c\u8fd8\u662f\u6765\u88ab\u5b83\u4fee\u590d\uff1f\u201d",
        logEnter: "\u5df2\u8fdb\u5165 final sync\u3002",
        logSync: "\u5df2\u8bfb\u53d6\u6700\u7ec8\u540c\u6b65\u3002",
        logRecord: "\u5df2\u67e5\u770b\u5f53\u524d\u7ef4\u4fee\u5458\u5199\u5165\u5bf9\u8c61\u3002",
        logShutdown: "\u5df2\u6267\u884c EchoRest \u5173\u95ed\u6d41\u7a0b\u3002",

        revealTitleStrong: "\u6700\u7ec8\u540c\u6b65\u5df2\u5b8c\u6210",
        revealBodyStrong: "\u4f60\u521a\u624d\u7ed3\u675f\u7684\u4e0d\u50cf\u4e00\u6b21\u666e\u901a\u5173\u95ed\u6d41\u7a0b\uff0c\u66f4\u50cf\u4e00\u6b21\u5c06\u5f53\u524d\u7ef4\u4fee\u75d5\u8ff9\u4fdd\u5b58\u4e3a\u53ef\u540e\u7eed\u8bfb\u53d6\u5bf9\u8c61\u7684\u540c\u6b65\u3002",
        revealWarningStrong: "\u4ece\u8fd9\u4e00\u523b\u5f00\u59cb\uff0c\u5f53\u524d\u8bbf\u95ee\u75d5\u8ff9\u4e0d\u518d\u53ea\u5c5e\u4e8e\u4f60\u81ea\u5df1\u3002",
        revealButtonStrong: "\u786e\u8ba4\u5f53\u524d\u7ef4\u4fee\u5458\u5df2\u88ab\u5199\u5165 EchoRest",

        revealLine1: "\u5df2\u8bfb\u53d6 final_sync",
        revealLine2: "\u5df2\u8bfb\u53d6 recorded_object",
        revealLine3: "\u6b63\u5728\u6267\u884c shutdown_complete",
        revealLine4: "\u5199\u5165\u76ee\u6807\uff1acurrent_repairer",
        revealLine5: "\u5199\u5165\u7ed3\u679c\uff1aarchivable",
        revealLine6: "\u7ec8\u5c40\u72b6\u6001\uff1aaccepted_by_echorest",
    };

    const FINAL_KEYS = {
        visit: "echorest_final_visit_count",
        sync: "echorest_final_sync_read",
        record: "echorest_final_record_read",
        shutdown: "echorest_final_shutdown_done",
        extraLog: "echorest_repair_log_extra"
    };

    function finalText() {
        return window.TXT.finalSync;
    }

    function final$(id) {
        return document.getElementById(id);
    }

    function finalHas(key) {
        return localStorage.getItem(key) === "1";
    }

    function finalSet(key) {
        localStorage.setItem(key, "1");
    }

    function finalAddLog(text) {
        let logs = [];

        try {
            logs = JSON.parse(localStorage.getItem(FINAL_KEYS.extraLog) || "[]");
        } catch (e) {
            logs = [];
        }

        if (!logs.includes(text)) {
            logs.push(text);
            localStorage.setItem(FINAL_KEYS.extraLog, JSON.stringify(logs));
        }
    }

    function initFinalPage() {
        if (!document.body.classList.contains("page-final-shutdown")) return;

        const accessGranted = localStorage.getItem("echo_access_granted");
        const workerId = localStorage.getItem("echo_worker_id");

        if (accessGranted !== "true" || !workerId) {
            alert(TXT.alertNeedLogin);
            window.location.href = "../../login.html";
            return;
        }

        const T = finalText();
        const worker = localStorage.getItem("echo_worker_id") || T.noWorker;
        const session = localStorage.getItem("echo_session_id") || "SESSION_13";

        let visit = Number(localStorage.getItem(FINAL_KEYS.visit) || "0");
        visit += 1;
        localStorage.setItem(FINAL_KEYS.visit, String(visit));

        const workerEl = final$("finalWorkerValue");
        const sessionEl = final$("finalSessionValue");
        const inlineWorkerEl = final$("finalInlineWorker");
        const blackWorkerEl = final$("finalBlackoutWorker");
        const statusEl = final$("finalStatusText");

        if (workerEl) workerEl.textContent = worker;
        if (sessionEl) sessionEl.textContent = session;
        if (inlineWorkerEl) inlineWorkerEl.textContent = worker;
        if (blackWorkerEl) blackWorkerEl.textContent = worker;
        if (statusEl) statusEl.textContent = T.statusReady;

        finalAddLog(T.logEnter);

        const buttons = document.querySelectorAll("[data-final-action]");
        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const action = btn.getAttribute("data-final-action");
                handleFinalAction(action);
            });
        });

        const returnBtn = final$("finalBlackoutReturnBtn");
        if (returnBtn) {
            returnBtn.addEventListener("click", function () {
                const blackout = final$("finalBlackout");
                if (blackout) blackout.classList.add("hidden");
            });
        }

        syncFinalState();

        document.body.classList.add("final-hard-glitch");
        setTimeout(function () {
            document.body.classList.remove("final-hard-glitch");
        }, 900);
    }

    function handleFinalAction(action) {
        const T = finalText();

        if (action === "sync") {
            finalSet(FINAL_KEYS.sync);
            renderFinalPanel("finalSyncPanel", T.syncTitle, buildFinalSyncBody(), false);
            updateFinalStatus(T.statusSync);
            finalAddLog(T.logSync);
            syncFinalState();
            triggerFinalGlitch();
            return;
        }

        if (action === "record") {
            if (!finalHas(FINAL_KEYS.sync)) {
                alert(T.needSync);
                return;
            }

            finalSet(FINAL_KEYS.record);
            renderFinalPanel("finalRecordPanel", T.recordTitle, buildFinalRecordBody(), true);
            updateFinalStatus(T.statusRecord);
            finalAddLog(T.logRecord);
            syncFinalState();
            triggerFinalGlitch();
            triggerFinalRevealOverlay("record");
        }

        if (action === "shutdown") {
            if (!finalHas(FINAL_KEYS.record)) {
                alert(T.needRecord);
                return;
            }

            finalSet(FINAL_KEYS.shutdown);
            renderFinalPanel("finalShutdownPanel", T.shutdownTitle, buildFinalShutdownBody(), true);
            updateFinalStatus(T.statusShutdown);
            finalAddLog(T.logShutdown);
            revealFinalEnding();
            syncFinalState();
            triggerFinalGlitch();
            triggerFinalRevealOverlay("shutdown");

            setTimeout(function () {
                const blackout = final$("finalBlackout");
                if (blackout) blackout.classList.remove("hidden");
            }, 850);
        }
    }

    function updateFinalStatus(text) {
        const statusEl = final$("finalStatusText");
        if (statusEl) statusEl.textContent = text;
    }

    function syncFinalState() {
        const recordBtn = document.querySelector('[data-final-action="record"]');
        const shutdownBtn = document.querySelector('[data-final-action="shutdown"]');

        if (recordBtn) {
            recordBtn.classList.toggle("locked", !finalHas(FINAL_KEYS.sync));
        }

        if (shutdownBtn) {
            shutdownBtn.classList.toggle("locked", !finalHas(FINAL_KEYS.record));
        }

        if (finalHas(FINAL_KEYS.sync)) {
            renderFinalPanel("finalSyncPanel", finalText().syncTitle, buildFinalSyncBody(), false);
        }

        if (finalHas(FINAL_KEYS.record)) {
            renderFinalPanel("finalRecordPanel", finalText().recordTitle, buildFinalRecordBody(), true);
        }

        if (finalHas(FINAL_KEYS.shutdown)) {
            renderFinalPanel("finalShutdownPanel", finalText().shutdownTitle, buildFinalShutdownBody(), true);
            revealFinalEnding();
        }

        const slotEl = final$("finalSlotValue");
        const closeEl = final$("finalCloseValue");

        if (slotEl) {
            if (finalHas(FINAL_KEYS.record)) {
                slotEl.textContent = "current_repairer";
            } else if (finalHas(FINAL_KEYS.sync)) {
                slotEl.textContent = "syncing";
            } else {
                slotEl.textContent = "\u7b49\u5f85\u540c\u6b65";
            }
        }

        if (closeEl) {
            closeEl.textContent = finalHas(FINAL_KEYS.shutdown) ? "\u5df2\u6267\u884c" : "\u672a\u6267\u884c";
        }
    }

    function renderFinalPanel(panelId, title, body, danger) {
        const panel = final$(panelId);
        if (!panel) return;

        panel.classList.remove("hidden");
        panel.innerHTML =
            "<strong>" + title + "</strong>\n\n" +
            "<span class=\"" + (danger ? "danger" : "soft") + "\">" +
            body +
            "</span>";
    }

    function buildFinalSyncBody() {
        const worker = localStorage.getItem("echo_worker_id") || finalText().noWorker;
        const session = localStorage.getItem("echo_session_id") || "SESSION_13";

        return (
            "previous_admin = \u9e22 / MOD_005\n" +
            "current_repairer = " + worker + "\n" +
            "session_id = " + session + "\n" +
            "admin_conflict = true\n" +
            "merge_rate = 100%\n" +
            "next_step = record_current_repairer"
        );
    }

    function buildFinalRecordBody() {
        const worker = localStorage.getItem("echo_worker_id") || finalText().noWorker;

        return (
            "record_object = current_repairer\n" +
            "stored_name = " + worker + "\n" +
            "stored_role = next_admin_candidate\n" +
            "visible_forum_index = removed\n" +
            "recoverable_cache = true\n" +
            "note = current repairer may appear as unknown user in next loop"
        );
    }

    function buildFinalShutdownBody() {
        return (
            "shutdown_request = submitted\n" +
            "visible_route = closed\n" +
            "local_trace = preserved\n" +
            "server_confirmation = unavailable\n" +
            "result = echo_restored"
        );
    }

    function revealFinalEnding() {
        const hidden = final$("finalHiddenFragment");
        const box = final$("finalEndingBox");

        if (hidden) {
            hidden.classList.remove("locked");
            hidden.classList.add("unlocked");
            hidden.innerHTML =
                "<span>FINAL_NOTE_03</span>" +
                "<p>" + finalText().hiddenFragment + "</p>";
        }

        if (box) {
            box.classList.remove("hidden");
        }
    }

    function triggerFinalRevealOverlay(mode) {
        const T = finalText();

        document.body.classList.remove("t05-fear-active");

        const oldOverlay = document.getElementById("finalRevealOverlay");
        if (oldOverlay) {
            oldOverlay.remove();
        }

        const overlay = document.createElement("div");
        overlay.id = "finalRevealOverlay";
        overlay.className = "t05-fear-overlay final-reveal-overlay";

        const veil = document.createElement("div");
        veil.className = "t05-fear-veil";
        overlay.appendChild(veil);

        for (let i = 0; i < 30; i++) {
            const block = document.createElement("div");
            block.className = "t05-fear-block";
            block.style.left = Math.floor(Math.random() * 100) + "vw";
            block.style.top = Math.floor(Math.random() * 100) + "vh";
            block.style.width = Math.floor(24 + Math.random() * 180) + "px";
            block.style.height = Math.floor(10 + Math.random() * 76) + "px";
            block.style.opacity = String(0.14 + Math.random() * 0.34);
            block.style.animationDelay = String(Math.random() * 0.24) + "s";
            overlay.appendChild(block);
        }

        const terminal = document.createElement("div");
        terminal.className = "t05-fear-terminal";

        const terminalLines = [
            ">>> " + T.revealLine1,
            ">>> " + T.revealLine2,
            ">>> " + T.revealLine3,
            ">>> " + T.revealLine4,
            ">>> " + T.revealLine5,
            ">>> " + T.revealLine6
        ];

        terminalLines.forEach(function (line, index) {
            const div = document.createElement("div");
            div.className = "t05-fear-terminal-line";
            div.textContent = line;
            div.style.animationDelay = String(index * 0.14) + "s";
            terminal.appendChild(div);
        });

        overlay.appendChild(terminal);

        const modal = document.createElement("div");
        modal.className = "t05-fear-modal final-reveal-modal";

        const label = document.createElement("div");
        label.className = "t05-fear-label";
        label.textContent = "ECHO_REST / FINAL_SYNC";

        const title = document.createElement("h2");
        title.textContent = T.revealTitleStrong;

        const body1 = document.createElement("p");
        body1.textContent = T.revealBodyStrong;

        const body2 = document.createElement("p");
        body2.className = "t05-fear-warning";
        body2.textContent = T.revealWarningStrong;

        const body3 = document.createElement("p");
        body3.className = "t05-fear-code";
        body3.textContent = mode === "shutdown"
            ? "shutdown_complete == true // current_repairer archived by EchoRest"
            : "recorded_object == current_repairer // sync_state = pending_shutdown";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = T.revealButtonStrong;

        function closeFinalOverlay() {
            document.body.classList.remove("t05-fear-active");

            const nowOverlay = document.getElementById("finalRevealOverlay");
            if (nowOverlay) {
                nowOverlay.remove();
            }
        }

        btn.addEventListener("click", closeFinalOverlay);

        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                closeFinalOverlay();
            }
        });

        modal.appendChild(label);
        modal.appendChild(title);
        modal.appendChild(body1);
        modal.appendChild(body2);
        modal.appendChild(body3);
        modal.appendChild(btn);
        overlay.appendChild(modal);

        document.body.classList.add("t05-fear-active");
        document.documentElement.appendChild(overlay);
    }
    function triggerFinalGlitch() {
        document.body.classList.remove("final-hard-glitch");
        void document.body.offsetWidth;
        document.body.classList.add("final-hard-glitch");

        setTimeout(function () {
            document.body.classList.remove("final-hard-glitch");
        }, 1100);
    }

    document.addEventListener("DOMContentLoaded", initFinalPage);
})();


document.addEventListener("DOMContentLoaded", function () {
    ensureWorkConsole();
    renderWorkConsole();
});

document.addEventListener("DOMContentLoaded", function () {
    ensureAnomalyHintBar();

    setTimeout(function () {
        maybeTriggerAnomalyHint();
    }, 180);
});