/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "/ Save:": "/ 保存：",
    "A full sized apartment with a living room, dining room, kitchen, and two bedrooms.": "全尺寸公寓，设有客厅、餐厅、厨房和两间卧室。",
    "A small condo for someone just starting out. High purchase cost but no rent price.": "适合刚起步的人的小公寓。购买成本高，但没有租金价格。",
    "A very small apartment with a separate kitchen. You no longer need to heat your cup ramen in the same room you eat it in!": "一个非常小的公寓，有一个独立的厨房。您不再需要在吃拉面的同一个房间里加热杯子拉面！",
    "A Work Project allows you to provide worth for your company. Do well, make sure it's good, and you'll get a big promotion boost!": "工作项目允许您为公司提供价值。做得好，确保它是好的，你会得到很大的提升！",
    "Action": "行动",
    "An incredibly small apartment. There's a separate room for the toilet, so it's technically two rooms! Cockroaches incl. at no cost.": "一个令人难以置信的小公寓。厕所有一个单独的房间，所以从技术上讲它是两个房间！蟑螂包括。免费。",
    "Auto Adv.": "自动进阶。",
    "Auto Advance": "自动前进",
    "Auto advance will move on to the next step of the project at a set level. You can change the level on the right side of the action when Auto Advance is enabled.": "自动前进将在设定的级别进入项目的下一步。启用自动前进时，您可以更改操作右侧的级别。",
    "Azusa": "梓",
    "Bathtub": "浴缸",
    "Become a more driven person: Motivation gain +10% per": "成为一个更有动力的人：每增加 10% 的动力",
    "Bed": "床",
    "Begin": "开始",
    "Begin New Work Project": "开始新的工作项目",
    "Boss": "老板",
    "Boss Opinion": "老板意见",
    "Build Motivational Habits": "建立激励习惯",
    "Buy": "买",
    "Buy Furniture": "购买家具",
    "Buying vs Renting": "购买与租赁",
    "Category:": "类别：",
    "Change Log": "更改日志",
    "Charcoal Kotatsu": "木炭被炉",
    "Cheap Bathtub": "便宜的浴缸",
    "Cheap Kitchen": "便宜的厨房",
    "Cheap Kitchen Wide": "便宜的厨房宽",
    "Cheap Kotatsu": "便宜的被炉",
    "Cheap Toilet": "便宜的厕所",
    "Chiba": "千叶",
    "Chinatsu": "千夏",
    "Comfort": "舒适",
    "Commute:": "通勤：",
    "Computer": "计算机",
    "Convenience": "方便",
    "Cost:": "成本：",
    "Coworker": "同事",
    "Coworker Opinion": "同事意见",
    "Daily Promotion Points:": "每日晋升点数：",
    "Delete": "删除",
    "Design": "设计",
    "Design your project, boosting Implementation by 10% per level": "设计您的项目，每级提高 10% 的实施",
    "Design:5": "设计：5",
    "Develop Skill Learning Strategies": "制定技能学习策略",
    "Dining Kotatsu": "餐饮 被炉",
    "Disable Auto Advance": "禁用自动前进",
    "Discord": "Discord",
    "Efficiency:": "效率：",
    "Enable Auto Advance": "启用自动前进",
    "Enter a Dynasty Name:": "输入王朝名称：",
    "Enter Crackers Market": "进入饼干市场",
    "Excellent Bathtub": "优秀的浴缸",
    "Excellent Toilet": "优秀的厕所",
    "Exp To Go": "Exp To Go",
    "Exp/Day": "经验/天",
    "Extreme PC for Real Salarymen": "真正工薪族的极限个人电脑",
    "Family": "家庭",
    "Father": "父亲",
    "Filter": "筛选",
    "for suggestions, guides, and community": "获取建议、指南和社区",
    "Free Space:": "可用空间：",
    "Free Time:": "空闲时间：",
    "gained": "获得",
    "Grow in spirit, Ganbaru. +7%": "在精神上成长，努力。 +7%",
    "Grow Your Yaruki": "成长你的动机",
    "Half Bath": "半浴",
    "High Grade Kitchen": "高档厨房",
    "High Grade Kitchen x 4": "高档厨房 x 4",
    "Home Computer for the Thrifty Spender": "适合节俭消费者的家用电脑",
    "House": "房子",
    "House:": "房子：",
    "Implement": "实施",
    "Implement your project, increases Promotion Progress by 6% per level": "实施您的项目，每级增加 6% 的推广进度",
    "Implement:5": "实施：5",
    "Interest:": "兴趣：",
    "Ippanshain": "伊潘沙因",
    "Ishii": "石井",
    "Ito": "伊藤",
    "Japanese Pension Idle": "日本养老金放置",
    "Job Focuses": "工作重点",
    "Join the": "加入",
    "Jukichi": "重吉",
    "Kakarichou": "卡卡里奇",
    "Kanako": "加奈子",
    "Kanoko": "鹿子",
    "Kitchen": "厨房",
    "Kiyokazu": "清和",
    "Kuriko": "栗子",
    "Large 2LDK Apartment": "大型 2LDK 公寓",
    "Large 2LDK Condo": "大型 2LDK 公寓",
    "Last Save:": "最后保存：",
    "Last Save:Never": "最后保存：从不",
    "Layout:": "布局：",
    "Learn to learn: Skill gain +10% per": "学会学习：技能增益+10%",
    "Learn to use your time at work more effectively. 1% More work done per hour per level.": "学会更有效地利用工作时间。每个级别每小时完成的工作量增加 1%。",
    "Legacy Level": "旧版级别",
    "Level": "等级",
    "Level / Max Level": "等级/最高等级",
    "Loading Game Data...": "正在加载游戏数据...",
    "Long Kotatsu": "长被炉",
    "Luxurious 4LDK": "豪华4LDK",
    "Matsui": "松井",
    "MAX": "最大",
    "Mayu": "马玉",
    "Medium 1K Condo": "中型 1K 公寓",
    "Medium 2LDK Condo": "中型 2LDK 公寓",
    "Meet a new coworker": "认识一位新同事",
    "Meet Boss": "认识老板",
    "Meet Coworkers": "认识同事",
    "Meet your boss": "见见你的老板",
    "Misumi": "三隅",
    "Modern Home PC Setup": "现代家庭 PC 设置",
    "Monthly Expenses:": "每月花费：",
    "Monthly Income:": "月收入：",
    "Monthly Pension Payment:": "每月养老金支付：",
    "Morita": "森田",
    "Mother": "母亲",
    "Net Income:": "净利：",
    "New Rest ARDH": "新休息 ARDH",
    "New Rest ARDX Super": "新休息 ARDX 超级",
    "Nice Toilet": "漂亮的厕所",
    "No Filter": "无过滤器",
    "Office": "办公室",
    "One Room Apartment": "一室公寓",
    "Optimize Time Use": "优化时间使用",
    "Other": "其他",
    "Overflow:": "溢出：",
    "Owned:": "拥有：",
    "Parent's House": "父母之家",
    "Patreon": "Patreon",
    "Pause": "暂停",
    "Pension": "养老金",
    "Pension Total:": "养老金总额：",
    "Penthouse Suite": "顶楼套房",
    "Plan": "计划",
    "Plan your project, increasing Design speed 5% per level": "规划您的项目，每级提高 5% 的设计速度",
    "Plan:5": "计划：5",
    "Playfab ID:": "Playfab ID：",
    "Please consider supporting development on": "请考虑支持开发",
    "Please select one of the actions from the list before beginning your new life.": "在开始新生活之前，请从列表中选择一项行动。",
    "Points for Completion:100": "完成点数：100",
    "Points for Completion:176.23416832": "完成点数：176.23416832",
    "Polyethylene Bathtub": "聚乙烯浴缸",
    "Project:": "项目：",
    "Promotion": "晋升",
    "Promotion Points": "晋升点数",
    "Promotion points are the total level of all your job focuses. Every day you'll gain this many promotion points toward your next promotion. You can mouse over the progress bar above to see how many points you still need.": "晋升点是你所有工作重点的总水平。每天您都会在下次晋升时获得这么多晋升点数。您可以将鼠标悬停在上面的进度条上，以查看您还需要多少分。",
    "Regular pension payments are 9% of your income per month. Player skills and laws of the land can modify that amount.": "定期养老金支付是您每月收入的 9%。玩家技能和土地法律可以修改该数量。",
    "Relationships": "关系",
    "Relationships:": "关系：",
    "Rent": "租",
    "Rent:": "租：",
    "Requires:": "要求：",
    "Return": "返回",
    "Revise": "修订",
    "Revise your project, increases Implementation and Design speed by 4% per level": "修改您的项目，每级将实施和设计速度提高 4%",
    "Roll Random": "随机生成",
    "Salary:": "薪水：",
    "Salaryman": "工薪族",
    "Saving...": "保存...",
    "See Available Houses": "查看可用房屋",
    "Select a job focus below to begin improving aspects of your work abilities. Every level you gain earns you promotion points to rise in rank at your company, but every level takes more ganbaru points than the previous.": "在下面选择一个工作重点，开始提高您工作能力的各个方面。您获得的每个级别都会为您赢得晋升点以在您的公司中提升排名，但每个级别都会比前一个级别获得更多的 ganbaru 点数。",
    "Select a job focus from below to begin working toward your first promotion!": "从下面选择一个工作重点，开始为您的第一次晋升而努力！",
    "Shinyuusha": "新游社",
    "Sidewalks But Larger": "人行道但更大",
    "Skill": "技能",
    "Skill is one of the three stats that improve your Job Performance. Grow in skill to gain promotions more quickly! Impress your friends and colleagues with how skilled you are at being a Salaryman.": "技能是提高工作绩效的三个统计数据之一。提高技能以更快地获得晋升！以你作为工薪阶层的技能给你的朋友和同事留下深刻印象。",
    "Sleep:": "睡觉：",
    "Small 1K Condo": "小型 1K 公寓",
    "Small 2DK Condo": "小型 2DK 公寓",
    "Son of Jukichi and Kanoko": "重吉和鹿子的儿子",
    "Standard Grade Kitchen": "标准级厨房",
    "Standard Grade Kitchen x 3": "标准级厨房 x 3",
    "Start New Game": "开始新游戏",
    "Submit": "提交",
    "Submit your project, difficulty and time are based on project size": "提交您的项目，难度和时间取决于项目大小",
    "Super High Grade Kitchen": "超高档厨房",
    "Super High Grade Kitchen x 4": "超高级厨房 x 4",
    "Suzuki": "铃木",
    "Table": "桌子",
    "Tanaka": "田中",
    "The highest level anyone of the family line has reached.": "家族中任何人都达到的最高水平。",
    "The office is where you get work done. Get to know who you work with, accelerate your promotion growth, and complete work projects for promotion boosts.": "办公室是您完成工作的地方。了解您的合作伙伴，加速您的晋升增长，并完成工作项目以促进晋升。",
    "Time Management": "时间管理",
    "Toilet": "洗手间",
    "Ueno": "上野",
    "Ultra Grade Kitchen": "超高档厨房",
    "Version:": "版本：",
    "Work": "工作",
    "Work per day:\nBase:10.40\nEfficiency: x1.40\nOptimize Time Use: x1.10\nLegacy: x1.00\nPlayer Traits: x1.00\nTotal Multiplier: x1.79\nTotal:18.56": "每天工作：\n基础：10.40\n效率：x1.40\n优化时间使用：x1.10\n传统：x1.00\n玩家特征：x1.00\n总乘数：x1.79\n总计：18.56",
    "Work:": "工作：",
    "You can't afford this yet.": "你还买不起这个。",
    "You completed a work project! This has earned you an extra 176.23416832 promotion points.": "你完成了一个工作项目！这为您赢得了额外的 176.23416832 晋升点数。",
    "You currently get a Relationship Point boost of 0.03 per day by spending 00:30 at home.": "目前，您在家中消费 00:30 可获得每天 0.03 的关系点提升。",
    "You currently get an Efficiency boost of x1.00 from the comfortability of your home.": "目前，您从舒适的家中获得了 x1.00 的效率提升。",
    "You don't have a Bathtub yet.": "你还没有浴缸。",
    "You don't have a Bed yet.": "你还没有床。",
    "You don't have a Computer yet.": "你还没有电脑。",
    "You don't have a Kitchen yet.": "你还没有厨房。",
    "You don't have a Table yet.": "您还没有表格。",
    "You don't have a Toilet yet.": "你还没有厕所。",
    "You've unlocked job focuses! Click the cyan tab below and select a focus to begin improving your job performance.": "你已经解锁了工作重点！单击下面的青色选项卡并选择一个重点以开始提高您的工作绩效。",
    "Your boss' opinion of your ability as an employee. It will reset when you are promoted past your current boss.": "您的老板对您作为员工的能力的看法。当你被提升超过现任老板时，它将重置。",
    "Your coworkers' opinion of you as a worker. Build this up to appear as a super-salaryman to your peers.": "你的同事对你作为工人的看法。建立这个，在你的同龄人面前表现为一个超级工薪族。",
    "Your house is where your heart is. You can buy furniture, get a more expensive house and spend time improving it to improve your overall enjoyment of life.": "你的房子就是你的心所在的地方。你可以买家具，买更贵的房子，花时间改善它，以提高你的整体生活享受。",
    "Your job is where you do your work. Focus on aspects of your job to get promoted and become the CEO!": "你的工作就是你工作的地方。专注于您工作的各个方面，以升职并成为首席执行官！",
    "Your pension builds up over time as you work. Every generation can choose to withdraw the pension to fund their heir, or deposit it into the Family Vault.": "随着您的工作，您的养老金会随着时间的推移而增加。每一代人都可以选择提取养老金来资助他们的继承人，或者将其存入家庭保险库。",
    "Your salary is paid every two weeks, and it increases every year you work at a company, as well as every promotion you receive.": "您的薪水每两周支付一次，并且随着您在公司工作以及获得的每一次晋升，薪水每年都会增加。",
    "Your total monthly income. This includes your two paychecks, and the rent and pension payments you make.": "您的每月总收入。这包括您的两份薪水，以及您支付的租金和养老金。",
    "Zippers For Plants": "植物拉链",
    "-chan": "-chan",
    ", including artists Lorc, Delapouite, Skoll, and sbed.": "，包括艺术家 Lorc、Delapouite、Skoll 和 sbed。",
    "A decent sized apartment, perfect for more than one person to live in at the same time.": "一间大小适中的公寓，非常适合多人同时居住。",
    "A full sized apartment with a living room, dining room, kitchen, and three bedrooms. Good for a growing family.": "全尺寸公寓，设有客厅、餐厅、厨房和三间卧室。适合成长中的家庭。",
    "A massive apartment with 4 bedrooms located in downtown Tokyo.": "位于东京市中心的大型公寓，有 4 间卧室。",
    "A must for any large family to each have their own space.": "任何大家庭都必须拥有自己的空间。",
    "A regular condo with enough space for all of the basic amenities.": "一个普通的公寓，有足够的空间容纳所有的基本设施。",
    "A space closer to work but not sacrificing any comforts.": "一个更接近工作但不牺牲任何舒适的空间。",
    "A very spacious 2LDK, perfect for a wealthy couple with no kids.": "非常宽敞的 2LDK，非常适合没有孩子的富裕夫妇。",
    "About Me": "关于我",
    "Actions": "行动",
    "Age:": "年龄：",
    "Age:???": "年龄：？？？",
    "All icons were sourced from": "所有图标均来自",
    "An apartment with two rooms and a kitchen. What will you do with all that extra space?": "有两个房间和一个厨房的公寓。你会用这些额外的空间做什么？",
    "An extremely luxurious apartment for a wealthy businessman.": "为富商打造的极其豪华的公寓。",
    "Being strong sometimes means being really strong. +5 Strength levels to anything that checks or requires Strength.": "坚强有时意味着非常坚强。任何检查或需要力量的东西 +5 力量等级。",
    "Best Friends": "最好的朋友",
    "Build strength to build a better you. 15% faster Strength, Charisma, and Intelligence gain.": "增强力量，打造更好的自己。力量、魅力和智力获得速度加快 15%。",
    "Charisma": "魅力",
    "Chat With Azusa": "与梓聊天",
    "Chat With Chinatsu": "与千夏聊天",
    "Chat With Jukichi": "与树吉聊天",
    "Chat With Kanako": "与加奈子聊天",
    "Chat With Kanoko": "与鹿子聊天",
    "Chat With Kunimasa": "与国正聊天",
    "Chat With Kuriko": "与栗子聊天",
    "Chat With Mayu": "与马玉聊天",
    "Chat With Misumi": "与美美聊天",
    "Chat With Moeka": "与萌卡聊天",
    "Cheap Futon": "便宜的蒲团",
    "Clear Mind": "清醒的头脑",
    "Clever Clogs": "聪明的木屐",
    "Congratulations! You can't get any better than this.": "恭喜！你没有比这更好的了。",
    "Convince your mother to hold off on an arranged marriage for an extra 5 years.": "说服你的母亲将包办婚姻再推迟 5 年。",
    "Current Version:": "当前版本：",
    "Efficient Brain": "高效大脑",
    "Exp": "经验",
    "Exp/天": "经验/天",
    "Extra Strong": "超强",
    "Free Time": "空闲时间",
    "Free Time is a necessary part of life, but you don't need very much of it to stay happy. The number will change red if you're too low on free time, and your efficiency will suffer as a result. Required:01:00": "空闲时间是生活中必不可少的一部分，但你不需要太多时间来保持快乐。如果您的空闲时间太少，该数字将变为红色，您的效率将因此受到影响。要求：01:00",
    "Free time is for the lesser minded. You can go with the bare minimum to keep yourself sane. -25% Freetime Required.": "空闲时间是为那些思想较弱的人准备的。你可以用最低限度来保持自己的理智。需要 -25% 的空闲时间。",
    "Friendly": "友谊赛",
    "Friends": "朋友们",
    "Gain the power of people liking you more. Relationships improve 15% faster.": "获得更喜欢你的人的力量。人际关系的改善速度提高了 15%。",
    "Game-icons.net": "游戏图标网",
    "Giant, Friendly": "巨人，友善",
    "Good Friends": "好朋友们",
    "Healthy Lifestyle": "健康的生活方式",
    "I Can Do It Myself, Mom!": "我可以自己做，妈妈！",
    "I've heard you need one of these to get a 5 star rating.": "我听说您需要其中之一才能获得 5 星评级。",
    "Improve relations with Azusa": "改善与梓的关系",
    "Improve relations with Chinatsu": "改善与Chinatsu的关系",
    "Improve relations with Jukichi": "改善与重吉的关系",
    "Improve relations with Kanako": "改善与加奈子的关系",
    "Improve relations with Kanoko": "改善与鹿子的关系",
    "Improve relations with Kunimasa": "改善与国政的关系",
    "Improve relations with Kuriko": "改善与栗子的关系",
    "Improve relations with Mayu": "改善与Mayu的关系",
    "Improve relations with Misumi": "改善与Misumi的关系",
    "Improve relations with Moeka": "改善与萌家的关系",
    "Increasing your Boss Opinion Job Focus now gives +25% exp per Ganbaru Point.": "增加你的 Boss Opinion Job Focus 现在每个 Ganbaru 点都会提供 +25% exp。",
    "Increasing your Coworker Opinion Job Focus now gives +25% exp per Ganbaru Point.": "增加你的同事意见工作重点现在每 Ganbaru 点提供 +25% exp。",
    "Info": "信息",
    "Intelligence": "智力",
    "Intimidate everyone you meet with your superior Strength. Boosts Promotion Speed by 5%.": "用你卓越的力量恐吓你遇到的每一个人。提升 5% 的推广速度。",
    "Intimidation": "恐吓",
    "Investor": "投资者",
    "Ironman": "钢铁侠",
    "Kachou": "嘉周",
    "Kachoudairi": "嘉长取",
    "Kunimasa": "国正",
    "Large 2LDK 住宅": "大型2LDK住宅",
    "Lazy, Lucky": "懒惰，幸运",
    "Learn the stock market, and invest a portion of your money every month. Gain +3% of your current Yen every month.": "了解股票市场，每月投资一部分资金。每月获得当前日元的 +3%。",
    "Life Expectancy:": "预期寿命：",
    "Likable at a Distance": "远方讨人喜欢",
    "Link Kongregate Account": "链接 Kongregate 帐户",
    "Load Game": "加载游戏",
    "Manual Save": "手动保存",
    "Marriage Material": "结婚材料",
    "Mediate": "调解",
    "Medium 1K 公寓": "中1K公寓",
    "Mind Reader": "读心者",
    "Moeka": "萌香",
    "Mute": "沉默的",
    "Next Level": "下一级",
    "No Time Wasted": "没有时间浪费",
    "Office Hero": "办公室英雄",
    "Once you have enough money, space no longer seems so precious.": "一旦你有足够的钱，空间就不再那么珍贵了。",
    "One Room 住宅": "一室住宅",
    "Pension Pusher": "养老金推动者",
    "People like you before ever meeting you. Start relationships with 250 Relationship Points": "人们在遇见你之前就喜欢你。用 250 个关系点开始关系",
    "Pin Point Focus": "针点对焦",
    "Planner": "规划师",
    "Plans are useless, but planning is essential. +15% Faster Planning in Work Projects.": "计划是无用的，但计划是必不可少的。 +15% 更快地规划工作项目。",
    "Powerful Sleeper": "强力卧铺",
    "Price Comparer": "价格比较器",
    "Recommended Sleep:": "推荐睡眠：",
    "Rent is paid every 4 weeks if you live in an apartment.": "如果您住在公寓里，则每 4 周支付一次租金。",
    "Required Freetime:": "所需的空闲时间：",
    "Required Sleep:": "所需睡眠：",
    "Retirement Age:": "退休年龄：",
    "Self": "自己",
    "Self:": "自己：",
    "Son": "儿子",
    "Son:": "儿子：",
    "Space enough for a couple who like to live comfortably.": "对于喜欢舒适生活的夫妇来说，空间足够了。",
    "Space is very limited but at least there are 2 bedrooms.": "空间非常有限，但至少有 2 间卧室。",
    "Speed Dating": "快速约会",
    "Spend time growing and improving your base stats. More options for self-improvement can be unlocked by buying furniture and more expensive houses.": "花时间增长和改善你的基本数据。通过购买家具和更昂贵的房屋，可以解锁更多自我提升的选择。",
    "Strength": "力量",
    "Strong Leader": "强大的领导者",
    "Strong leaders inspire those beneath themselves to rise up to greater heights. Boosts promotion speed by the number of times you've been promoted.": "强大的领导者会激励那些低于自己的人上升到更高的高度。通过您被提升的次数来提高提升速度。",
    "The Boss Likes You Now": "老板现在喜欢你",
    "The game saves automatically every in-game year, as well as cloud saves once every Life.": "游戏每个游戏年都会自动保存，并且每个生命都会云保存一次。",
    "This allows players who were playing on the standalone site to connect their PlayFab backups to their Kongregate accounts.": "这允许在独立站点上玩的玩家将他们的 PlayFab 备份连接到他们的 Kongregate 帐户。",
    "Time spent at home.\nWork from home bonus:00:01": "在家度过的时间。\n在家工作奖金：00:01",
    "Time spent on self improvement.": "花在自我提升上的时间。",
    "Time spent sleeping.\nRecommended:08:00": "睡眠时间。\n推荐时间:08:00",
    "Time spent with others. Currently:Nothing": "与他人相处的时间。目前：没有",
    "Total Exp.": "总经验。",
    "Traits:": "性状：",
    "Traits:???": "特点：？？？",
    "Unlocking this trait instantly pairs you with two new marriage candidates.": "解锁此特性会立即将您与两个新的婚姻候选人配对。",
    "Who wouldn't want to marry you? Marriage success odds +30%": "谁不想嫁给你？婚姻成功几率+30%",
    "Wife": "妻子",
    "Work Hard, Sleep Hard. Reduce required sleep time by 10%": "努力工作，努力睡觉。将所需的睡眠时间减少 10%",
    "Years old. (Birthday:": "岁。 （生日：",
    "You don't have any time invested in Self, so your skill isn't growing!": "你没有时间投入到自我身上，所以你的技能没有增长！",
    "You realize the only way to pay off the yakuza and free your family from debt is to pump money into your pension. +15% Monthly Pension Payments. (This does lower your take-home pay.)": "您意识到偿还黑帮并使您的家人免于债务的唯一方法是将钱注入您的养老金。 +15% 每月养老金支付。 （这确实会降低您的实得工资。）",
    "You're a know-it-all and you know it. +10% faster Skill (Job Focus) gain.": "你是个无所不知的人，你知道的。 +10% 更快的技能（工作专注）增益。",
    "You're strong and healthy. Extends your life by 5 years. (Note:This does not affect retirement age.)": "你很强壮，很健康。延长您的寿命5年。 （注：这不影响退休年龄。）",
    "You've gotten to know enough people that reading them has become second nature. Know more things about the people around you.": "你已经认识了足够多的人，以至于阅读他们已经成为第二天性。了解更多关于你周围人的事情。",
    "You've learned to do your research before buying anything. 10% Cost reduction on anything you buy.": "您已经学会在购买任何东西之前进行研究。您购买的任何商品都可降低 10% 的成本。",
    "You've researched the science of sleep, and how to make sure every hour counts the most. -10% Required Sleep.": "您研究了睡眠科学，以及如何确保每一小时都最重要。 -10% 需要睡眠。",
    "Your intelligence has grown to become more efficient by its very nature. +8% Efficiency.": "你的智慧就其本质而言已经变得更加高效。 +8% 效率。",
    "Your massive brain can focus on one thing better than a regular person. +15% Job Focus Gain per Ganbaru Point.": "你庞大的大脑可以比普通人更专注于一件事。每个 Ganbaru 点 +15% 工作专注增益。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Comfort is a measure of how comfortable your home is. Homes have a base comfort, and adding furniture can increase it. Be careful, though, duplicate furniture provides diminishing returns! A more comfortable home makes you more efficient in your relaxation and in your work.": "舒适度是衡量您家的舒适程度的标准。 家有一个基本的舒适度，增加家具可以增加它。 但是要小心，重复的家具会带来收益递减！ 更舒适的家让您在放松和工作中更有效率。",
    "Convenience is a measure of how efficient you can be at home. More expensive furniture can really add to the convenience of your home and make your time at home much better spent. It works as a direct multiplier to the relationship growth you gain by spending time at home with your family.": "便利性是衡量您在家工作效率的标准。 更昂贵的家具确实可以为您的家增添便利，让您在家中度过更美好的时光。 它可以作为您通过在家与家人共度时光而获得的关系增长的直接乘数。",
    "It all started with an innocent trip to the local pachinko parlor. By the end of the night, you fell into insane debt!\n            This isn't the kind of money you can make back in one lifetime. The yakuza boss put a curse on you until your family line\n            builds a large enough pension fund to repay it all!": "这一切都始于对当地弹球店的一次无辜之旅。 到了晚上，你陷入了疯狂的债务之中！\n这不是你一辈子都能赚回来的钱。 黑帮老大诅咒你，直到你的家族\n建立足够大的养老基金来偿还一切！",
    "There are a few factors to consider in buying a house or renting an apartment. Firstly, apartments have a monthly income requirement, while houses only cost money up front. Houses tend to have worse commuting times if you commute to your job, and heirs won't inherit their parent's apartment, but they will inherit a house.": "在买房或租房时需要考虑几个因素。 首先，住宅有月收入要求，而房屋只需要预付费用。 如果你通勤上班，房子的通勤时间往往会更糟，继承人不会继承父母的住宅，但他们会继承房子。",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'm': 'm',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "To Level:": "到等级：",
    "You don't have enough yen! (Requires ": "你没有足够的日元！ （需要",
    "You're a regular employee now! But if you work hard you can become a Section Chief:Kakarichou.": "你现在是正式员工了！但如果你努力工作，你可以成为科长：卡卡里丘。",
    "Level:": "等级:",
    "Wife:": "妻子:",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/Day": "/天",
    "Giant, Friendly": "伟人，友善",
    "Lazy, Lucky": "懒惰，幸运",
    "Frugal, Tiny": "节俭，渺小",
    "Extravagant, Hardworking": "奢侈，勤奋",
    "Heavy Sleeper, Evil": "沉睡者，邪恶",
    "Evil, Introverted": "邪恶，内向",
    "Points:": "点数：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)K\/([\d\.]+)K$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^等级(.+)$/,
    /^你没有(.+)$/,
    /^你的(.+)$/,
    /^到等级(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You\'re a new recruit to the office. Get to know your coworkers and boss to reach the next level of Ippanshain:a regular employee.\nProgress:(.+)\nNext Promotion:(.+)\nCurrent Points:(.+)\nDaily Points:(.+)$/, '你是办公室的新人。 认识你的同事和老板，让 普通员工 更上一层楼：正式员工。\n进度：$1\n下一次晋升：$2\n当前点数：$3\n每日点数：$4'],
    [/^\nProgress:(.+)\nNext Promotion:(.+)\nCurrent Points:(.+)\nDaily Points:(.+)$/, '\n进度：$1\n下一次晋升：$2\n当前点数：$3\n每日点数：$4'],
    [/^Your income is too low to afford this apartment! \(Current:(.+)\/Required (.+)\)$/, '你的收入太低，买不起这间住宅！ （当前：$1\/需要 $2）'],
    [/^Work:(.+)\nCommute:(.+)\nWorking From Home:(.+)\nTime At Work:(.+)$/, '工作：$1\n通勤：$2\n在家工作：$3\n工作时间：$4'],
    [/^Well done, you've reached a true management position. But with more effort you could be promoted to a full-fledged Manager:Kachou.\nProgress:(.+)\nNext Promotion:(.+)\nCurrent Points:(.+)\nDaily Points:(.+)$/, '干得好，你已经达到了真正的管理职位。但只要付出更多努力，您就可以晋升为成熟的经理：经理。\n进度：$1\n下一次晋升：$2\n当前点数：$3\n每日点数：$4'],
    [/^Sleep: x(.+)\nFree Time: x(.+)\n\(Education\)Intelligence: x(.+)\nHouse Comfort: x(.+)\nTraits: x(.+)$/, '睡眠：x$1\n空闲时间：x$2\n（教育）智力：x$3\n家居舒适度：x$4\n特质：x$5'],
    [/^You are (.+) levels from your next perk.\nCurrent Level:(.+)\nExp to Next Level:(.+)$/, '你距离下一个福利还有 $1 级。\n当前等级：$2\n经验到下一级:$3'],
    [/^Work per day:\nBase:(.+)\nEfficiency: x(.+)\nOptimize Time Use: x(.+)\nLegacy: x(.+)\nPlayer Traits: x(.+)\nTotal Multiplier: x(.+)\nTotal:(.+)$/, '每天工作：\n基础：$1\n效率：x$2\n优化时间使用：x$3\n遗留：x$4\n玩家特征：x$5\n总乘数：x$6\n总计：$7'],
    [/^Small (.+) Condo$/, '小型 $1 公寓'],
    [/^Medium (.+) Condo$/, '中型 $1 公寓'],
    [/^Large (.+) Condo$/, '大型 $1 公寓'],
    [/^(.+) Condo$/, '$1 公寓'],
    [/^(.+) Mansion$/, '$1 豪宅'],
    [/^Age:(.+)\nRelationship Points:(.+)\n$/, '年龄：$1\n关系点数：$2\n'],
    [/^One Room Apartment$/, '一室住宅'],
    [/^Large (.+) Apartment$/, '大型 $1 住宅'],
    [/^(.+) Apartment$/, '$1 住宅'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^October ([\d\.,]+), ([\d\.,]+)$/, '$2年 10月 $1日'],
    [/^March ([\d\.,]+), ([\d\.,]+)$/, '$2年 3月 $1日'],
    [/^January ([\d\.,]+), ([\d\.,]+)$/, '$2年 1月 $1日'],
    [/^February ([\d\.,]+), ([\d\.,]+)$/, '$2年 2月 $1日'],
    [/^December ([\d\.,]+), ([\d\.,]+)$/, '$2年 12月 $1日'],
    [/^April ([\d\.,]+), ([\d\.,]+)$/, '$2年 4月 $1日'],
    [/^August ([\d\.,]+), ([\d\.,]+)$/, '$2年 8月 $1日'],
    [/^July ([\d\.,]+), ([\d\.,]+)$/, '$2年 7月 $1日'],
    [/^June ([\d\.,]+), ([\d\.,]+)$/, '$2年 6月 $1日'],
    [/^May ([\d\.,]+), ([\d\.,]+)$/, '$2年 5月 $1日'],
    [/^November ([\d\.,]+), ([\d\.,]+)$/, '$2年 11月 $1日'],
    [/^September ([\d\.,]+), ([\d\.,]+)$/, '$2年 9月 $1日'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);