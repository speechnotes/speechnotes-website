/*  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
	The following JavaScript functions are written by Patrick 劉肇庭 (patrick@MarcomApp.com) at Taipei City
	♥ Version : 2017/03/03 Fri 12:28PM Taipei GMT+8
	▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
*/

var confirmed_FixCantoneseInput = false;

function fixCantoneseInput() {
	var confirmBox = document.getElementById('fixCantoneseInput');
	var checkAskOnceOnly = document.getElementById('chkAskFixCantoneseInput').checked;

	if(confirmed_FixCantoneseInput==false && checkAskOnceOnly==true) {
		confirmBox.style.display = '';
	}
	else if(confirmed_FixCantoneseInput==true && checkAskOnceOnly==false) {
		//已選 : 只有在第一次使用時才顯示本確認視窗 = False
		confirmBox.style.display = '';
	}
	else if(confirmed_FixCantoneseInput==true && checkAskOnceOnly==true) {
		//已選 : 只有在第一次使用時才顯示本確認視窗 = True
		confirmRemoveTextSpace();
	}
} //End Function
function confirmFixCantoneseInput() {
	confirmed_FixCantoneseInput = true;	//已選
	closeFixCantoneseInput();
	confirmFinetuneResultBox();
	confirmRemoveTextSpace();
} //End Function
function confirmRemoveTextSpace() {
	var doJob = true;
	if(doJob==true) {
		var tBox = document.getElementById('results_box');
		var tVal = Trim(tBox.value);
		tVal = tVal.replace(/	/g, " ");
		tVal = tVal.replace(/	/g, " ");
		tVal = tVal.replace(/	/g, " ");
		tVal = tVal.replace(/	/g, " ");
		tVal = tVal.replace(/   /g, " ");
		tVal = tVal.replace(/  /g, " ");
		tVal = tVal.replace(/1 /g, '1~~~');	tVal = tVal.replace(/ 1/g, '~~~1');
		tVal = tVal.replace(/2 /g, '2~~~');	tVal = tVal.replace(/ 2/g, '~~~2');
		tVal = tVal.replace(/3 /g, '3~~~');	tVal = tVal.replace(/ 3/g, '~~~3');
		tVal = tVal.replace(/4 /g, '4~~~');	tVal = tVal.replace(/ 4/g, '~~~4');
		tVal = tVal.replace(/5 /g, '5~~~');	tVal = tVal.replace(/ 5/g, '~~~5');
		tVal = tVal.replace(/6 /g, '6~~~');	tVal = tVal.replace(/ 6/g, '~~~6');
		tVal = tVal.replace(/7 /g, '7~~~');	tVal = tVal.replace(/ 7/g, '~~~7');
		tVal = tVal.replace(/8 /g, '8~~~');	tVal = tVal.replace(/ 8/g, '~~~8');
		tVal = tVal.replace(/9 /g, '9~~~');	tVal = tVal.replace(/ 9/g, '~~~9');
		tVal = tVal.replace(/0 /g, '0~~~');	tVal = tVal.replace(/ 0/g, '~~~0');
		tVal = tVal.replace(/a /g, 'a~~~');	tVal = tVal.replace(/ a/g, '~~~a');
		tVal = tVal.replace(/b /g, 'b~~~');	tVal = tVal.replace(/ b/g, '~~~b');
		tVal = tVal.replace(/c /g, 'c~~~');	tVal = tVal.replace(/ c/g, '~~~c');
		tVal = tVal.replace(/d /g, 'd~~~');	tVal = tVal.replace(/ d/g, '~~~d');
		tVal = tVal.replace(/e /g, 'e~~~');	tVal = tVal.replace(/ e/g, '~~~e');
		tVal = tVal.replace(/f /g, 'f~~~');	tVal = tVal.replace(/ f/g, '~~~f');
		tVal = tVal.replace(/g /g, 'g~~~');	tVal = tVal.replace(/ g/g, '~~~g');
		tVal = tVal.replace(/h /g, 'h~~~');	tVal = tVal.replace(/ h/g, '~~~h');
		tVal = tVal.replace(/i /g, 'i~~~');	tVal = tVal.replace(/ i/g, '~~~i');
		tVal = tVal.replace(/j /g, 'j~~~');	tVal = tVal.replace(/ j/g, '~~~j');
		tVal = tVal.replace(/k /g, 'k~~~');	tVal = tVal.replace(/ k/g, '~~~k');
		tVal = tVal.replace(/l /g, 'l~~~');	tVal = tVal.replace(/ l/g, '~~~l');
		tVal = tVal.replace(/m /g, 'm~~~');	tVal = tVal.replace(/ m/g, '~~~m');
		tVal = tVal.replace(/n /g, 'n~~~');	tVal = tVal.replace(/ n/g, '~~~n');
		tVal = tVal.replace(/o /g, 'o~~~');	tVal = tVal.replace(/ o/g, '~~~o');
		tVal = tVal.replace(/p /g, 'p~~~');	tVal = tVal.replace(/ p/g, '~~~p');
		tVal = tVal.replace(/q /g, 'q~~~');	tVal = tVal.replace(/ q/g, '~~~q');
		tVal = tVal.replace(/r /g, 'r~~~');	tVal = tVal.replace(/ r/g, '~~~r');
		tVal = tVal.replace(/s /g, 's~~~');	tVal = tVal.replace(/ s/g, '~~~s');
		tVal = tVal.replace(/t /g, 't~~~');	tVal = tVal.replace(/ t/g, '~~~t');
		tVal = tVal.replace(/u /g, 'u~~~');	tVal = tVal.replace(/ u/g, '~~~u');
		tVal = tVal.replace(/v /g, 'v~~~');	tVal = tVal.replace(/ v/g, '~~~v');
		tVal = tVal.replace(/w /g, 'w~~~');	tVal = tVal.replace(/ w/g, '~~~w');
		tVal = tVal.replace(/x /g, 'x~~~');	tVal = tVal.replace(/ x/g, '~~~x');
		tVal = tVal.replace(/y /g, 'y~~~');	tVal = tVal.replace(/ y/g, '~~~y');
		tVal = tVal.replace(/z /g, 'z~~~');	tVal = tVal.replace(/ z/g, '~~~z');
		tVal = tVal.replace(/A /g, 'A~~~');	tVal = tVal.replace(/ A/g, '~~~A');
		tVal = tVal.replace(/B /g, 'B~~~');	tVal = tVal.replace(/ B/g, '~~~B');
		tVal = tVal.replace(/C /g, 'C~~~');	tVal = tVal.replace(/ C/g, '~~~C');
		tVal = tVal.replace(/D /g, 'D~~~');	tVal = tVal.replace(/ D/g, '~~~D');
		tVal = tVal.replace(/E /g, 'E~~~');	tVal = tVal.replace(/ E/g, '~~~E');
		tVal = tVal.replace(/F /g, 'F~~~');	tVal = tVal.replace(/ F/g, '~~~F');
		tVal = tVal.replace(/G /g, 'G~~~');	tVal = tVal.replace(/ G/g, '~~~G');
		tVal = tVal.replace(/H /g, 'H~~~');	tVal = tVal.replace(/ H/g, '~~~H');
		tVal = tVal.replace(/I /g, 'I~~~');	tVal = tVal.replace(/ I/g, '~~~I');
		tVal = tVal.replace(/J /g, 'J~~~');	tVal = tVal.replace(/ J/g, '~~~J');
		tVal = tVal.replace(/K /g, 'K~~~');	tVal = tVal.replace(/ K/g, '~~~K');
		tVal = tVal.replace(/L /g, 'L~~~');	tVal = tVal.replace(/ L/g, '~~~L');
		tVal = tVal.replace(/M /g, 'M~~~');	tVal = tVal.replace(/ M/g, '~~~M');
		tVal = tVal.replace(/N /g, 'N~~~');	tVal = tVal.replace(/ N/g, '~~~N');
		tVal = tVal.replace(/O /g, 'O~~~');	tVal = tVal.replace(/ O/g, '~~~O');
		tVal = tVal.replace(/P /g, 'P~~~');	tVal = tVal.replace(/ P/g, '~~~P');
		tVal = tVal.replace(/Q /g, 'Q~~~');	tVal = tVal.replace(/ Q/g, '~~~Q');
		tVal = tVal.replace(/R /g, 'R~~~');	tVal = tVal.replace(/ R/g, '~~~R');
		tVal = tVal.replace(/S /g, 'S~~~');	tVal = tVal.replace(/ S/g, '~~~S');
		tVal = tVal.replace(/T /g, 'T~~~');	tVal = tVal.replace(/ T/g, '~~~T');
		tVal = tVal.replace(/U /g, 'U~~~');	tVal = tVal.replace(/ U/g, '~~~U');
		tVal = tVal.replace(/V /g, 'V~~~');	tVal = tVal.replace(/ V/g, '~~~V');
		tVal = tVal.replace(/W /g, 'W~~~');	tVal = tVal.replace(/ W/g, '~~~W');
		tVal = tVal.replace(/X /g, 'X~~~');	tVal = tVal.replace(/ X/g, '~~~X');
		tVal = tVal.replace(/Y /g, 'Y~~~');	tVal = tVal.replace(/ Y/g, '~~~Y');
		tVal = tVal.replace(/Z /g, 'Z~~~');	tVal = tVal.replace(/ Z/g, '~~~Z');
		tVal = tVal.replace(/, /g, ',~~~');
		tVal = tVal.replace(/\. /g, '\.~~~');
		tVal = tVal.replace(/\? /g, '\?~~~');
		tVal = tVal.replace(/! /g, '!~~~');
		tVal = tVal.replace(/ /g, '');
		tVal = tVal.replace(/~~~/g, ' ');
		document.getElementById('results_box').value = tVal;
	}
} //End Function
function confirmFinetuneResultBox() {
	var doJob = true;
	if(doJob==true) {
		var tBox = document.getElementById('results_box');
		var tVal = Trim(tBox.value);
		tVal = tVal.replace(/	/g, " ");
		tVal = tVal.replace(/	/g, " ");
		tVal = tVal.replace(/	/g, " ");
		tVal = tVal.replace(/	/g, " ");
		tVal = tVal.replace(/   /g, " ");
		tVal = tVal.replace(/  /g, " ");
		tVal = tVal.replace(/,,,/g, "，");
		tVal = tVal.replace(/,,/g, "，");
		tVal = tVal.replace(/，,/g, "，");
		tVal = tVal.replace(/,，/g, "，");
		tVal = tVal.replace(/\.\.\.\.\.\./g, "……");
		tVal = tVal.replace(/\.\.\./g, "…");
		tVal = tVal.replace(/\.\./g, "。");
		tVal = tVal.replace(/'''/g, "、");
		tVal = tVal.replace(/''/g, "、");
		tVal = tVal.replace(/、'/g, "、");
		tVal = tVal.replace(/'、/g, "、");
		tVal = tVal.replace(/:::/g, "：");
		tVal = tVal.replace(/::/g, "：");
		tVal = tVal.replace(/;;;/g, "；");
		tVal = tVal.replace(/;;/g, "；");
		tVal = tVal.replace(/\?\?\?/g, "？");
		tVal = tVal.replace(/\?\?/g, "？");
		tVal = tVal.replace(/!!!/g, "！");
		tVal = tVal.replace(/!!/g, "！");
		tVal = tVal.replace(/ ，/g, "，");
		tVal = tVal.replace(/， /g, "，");
		tVal = tVal.replace(/ 、/g, "、");
		tVal = tVal.replace(/、 /g, "、");
		tVal = tVal.replace(/ 。/g, "。");
		tVal = tVal.replace(/。 /g, "。");
		tVal = tVal.replace(/ ：/g, "：");
		tVal = tVal.replace(/： /g, "：");
		tVal = tVal.replace(/ ；/g, "；");
		tVal = tVal.replace(/； /g, "；");
		tVal = tVal.replace(/ ？/g, "？");
		tVal = tVal.replace(/？ /g, "？");
		tVal = tVal.replace(/ ！/g, "！");
		tVal = tVal.replace(/！ /g, "！");
		tVal = tVal.replace(/ …/g, "…");
		tVal = tVal.replace(/… /g, "…");
		tVal = tVal.replace(/ 「/g, "「");
		tVal = tVal.replace(/「 /g, "「");
		tVal = tVal.replace(/ 」/g, "」");
		tVal = tVal.replace(/」 /g, "」");
		tVal = tVal.replace(/ 『/g, "『");
		tVal = tVal.replace(/『 /g, "『");
		tVal = tVal.replace(/ 』/g, "』");
		tVal = tVal.replace(/』 /g, "』");
		tVal = tVal.replace(/ （/g, "（");
		tVal = tVal.replace(/（ /g, "（");
		tVal = tVal.replace(/ ）/g, "）");
		tVal = tVal.replace(/） /g, "）");
		tVal = tVal.replace(/ 《/g, "《");
		tVal = tVal.replace(/《 /g, "《");
		tVal = tVal.replace(/ 》/g, "》");
		tVal = tVal.replace(/》 /g, "》");
		tVal = tVal.replace(/ 【/g, "【");
		tVal = tVal.replace(/【 /g, "【");
		tVal = tVal.replace(/ 】/g, "】");
		tVal = tVal.replace(/】 /g, "】");
		tVal = tVal.replace(new RegExp('o下','gm'),'吓');
		tVal = tVal.replace(new RegExp('ｏ下','gm'),'吓');
		tVal = tVal.replace(new RegExp('o丫','gm'),'吖');
		tVal = tVal.replace(new RegExp('ｏ丫','gm'),'吖');
		tVal = tVal.replace(new RegExp('o乍','gm'),'咋');
		tVal = tVal.replace(new RegExp('ｏ乍','gm'),'咋');
		tVal = tVal.replace(new RegExp('o左','gm'),'咗');
		tVal = tVal.replace(new RegExp('ｏ左','gm'),'咗');
		tVal = tVal.replace(new RegExp('o甘','gm'),'咁');
		tVal = tVal.replace(new RegExp('ｏ甘','gm'),'咁');
		tVal = tVal.replace(new RegExp('o地','gm'),'哋');
		tVal = tVal.replace(new RegExp('ｏ地','gm'),'哋');
		tVal = tVal.replace(new RegExp('o抖','gm'),'唞');
		tVal = tVal.replace(new RegExp('ｏ抖','gm'),'唞');
		tVal = tVal.replace(new RegExp('o更','gm'),'哽');
		tVal = tVal.replace(new RegExp('ｏ更','gm'),'哽');
		tVal = tVal.replace(new RegExp('o車','gm'),'唓');
		tVal = tVal.replace(new RegExp('ｏ車','gm'),'唓');
		tVal = tVal.replace(new RegExp('o卦','gm'),'啩');
		tVal = tVal.replace(new RegExp('ｏ卦','gm'),'啩');
		tVal = tVal.replace(new RegExp('o岩','gm'),'啱');
		tVal = tVal.replace(new RegExp('ｏ岩','gm'),'啱');
		tVal = tVal.replace(new RegExp('o波','gm'),'啵');
		tVal = tVal.replace(new RegExp('ｏ波','gm'),'啵');
		tVal = tVal.replace(new RegExp('o的','gm'),'啲');
		tVal = tVal.replace(new RegExp('ｏ的','gm'),'啲');
		tVal = tVal.replace(new RegExp('o者','gm'),'啫');
		tVal = tVal.replace(new RegExp('ｏ者','gm'),'啫');
		tVal = tVal.replace(new RegExp('o采','gm'),'啋');
		tVal = tVal.replace(new RegExp('ｏ采','gm'),'啋');
		tVal = tVal.replace(new RegExp('o係','gm'),'喺');
		tVal = tVal.replace(new RegExp('ｏ係','gm'),'喺');
		tVal = tVal.replace(new RegExp('o屋','gm'),'喔');
		tVal = tVal.replace(new RegExp('ｏ屋','gm'),'喔');
		tVal = tVal.replace(new RegExp('o既','gm'),'嘅');
		tVal = tVal.replace(new RegExp('ｏ既','gm'),'嘅');
		tVal = tVal.replace(new RegExp('o查','gm'),'喳');
		tVal = tVal.replace(new RegExp('ｏ查','gm'),'喳');
		tVal = tVal.replace(new RegExp('o個','gm'),'嗰');
		tVal = tVal.replace(new RegExp('ｏ個','gm'),'嗰');
		tVal = tVal.replace(new RegExp('o徒','gm'),'嘥');
		tVal = tVal.replace(new RegExp('ｏ徒','gm'),'嘥');
		tVal = tVal.replace(new RegExp('o拿','gm'),'嗱');
		tVal = tVal.replace(new RegExp('ｏ拿','gm'),'嗱');
		tVal = tVal.replace(new RegExp('o勒','gm'),'嘞');
		tVal = tVal.replace(new RegExp('ｏ勒','gm'),'嘞');
		tVal = tVal.replace(new RegExp('o庶','gm'),'嗻');
		tVal = tVal.replace(new RegExp('ｏ庶','gm'),'嗻');
		tVal = tVal.replace(new RegExp('o都','gm'),'嘟');
		tVal = tVal.replace(new RegExp('ｏ都','gm'),'嘟');
		tVal = tVal.replace(new RegExp('o野','gm'),'嘢');
		tVal = tVal.replace(new RegExp('ｏ野','gm'),'嘢');
		tVal = tVal.replace(new RegExp('o麥','gm'),'嘜');
		tVal = tVal.replace(new RegExp('ｏ麥','gm'),'嘜');
		tVal = tVal.replace(new RegExp('o尋','gm'),'噚');
		tVal = tVal.replace(new RegExp('ｏ尋','gm'),'噚');
		tVal = tVal.replace(new RegExp('o番','gm'),'噃');
		tVal = tVal.replace(new RegExp('ｏ番','gm'),'噃');
		tVal = tVal.replace(new RegExp('o翕','gm'),'噏');
		tVal = tVal.replace(new RegExp('ｏ翕','gm'),'噏');
		tVal = tVal.replace(new RegExp('o鞋','gm'),'嚡');
		tVal = tVal.replace(new RegExp('ｏ鞋','gm'),'嚡');
		tVal = tVal.replace(new RegExp('o黎','gm'),'嚟');
		tVal = tVal.replace(new RegExp('ｏ黎','gm'),'嚟');
		tVal = tVal.replace(new RegExp('o舊','gm'),'嚿');
		tVal = tVal.replace(new RegExp('ｏ舊','gm'),'嚿');
		tVal = tVal.replace(new RegExp('o架','gm'),'㗎');
		tVal = tVal.replace(new RegExp('ｏ架','gm'),'㗎');
		tVal = tVal.replace(new RegExp('o依','gm'),'𠵱');
		tVal = tVal.replace(new RegExp('ｏ依','gm'),'𠵱');
		tVal = tVal.replace(new RegExp('o娥','gm'),'𠹷');
		tVal = tVal.replace(new RegExp('ｏ娥','gm'),'𠹷');
		tVal = tVal.replace(new RegExp('o蝦','gm'),'㗇');
		tVal = tVal.replace(new RegExp('ｏ蝦','gm'),'㗇');
		tVal = tVal.replace(new RegExp('o靚','gm'),'𡃁');
		tVal = tVal.replace(new RegExp('ｏ靚','gm'),'𡃁');
		tVal = tVal.replace(new RegExp('門小','gm'),'𨳒');
		tVal = tVal.replace(new RegExp('門九','gm'),'𨳊');
		tVal = tVal.replace(new RegExp('門七','gm'),'𨳍');
		tVal = tVal.replace(new RegExp('門西','gm'),'閪');
		tVal = tVal.replace(new RegExp('門能','gm'),'𨶙');
		tVal = tVal.replace(new RegExp('孑貝','gm'),'孭');
		tVal = tVal.replace(new RegExp('乙水','gm'),'氹');
		tVal = tVal.replace(new RegExp('深水步','gm'),'深水埗');
		tVal = tVal.replace(new RegExp('深水涉','gm'),'深水埗');
		tVal = tVal.replace(new RegExp('深水土步','gm'),'深水埗');
		tVal = tVal.replace(new RegExp('才丙','gm'),'抦');
		tVal = tVal.replace(new RegExp('才泵','gm'),'揼');
		tVal = tVal.replace(new RegExp('支力','gm'),'攰');
		tVal = tVal.replace(new RegExp('也母','gm'),'乸');
		tVal = tVal.replace(new RegExp('食送','gm'),'餸');
		tVal = tVal.replace(new RegExp('乙水','gm'),'氹');
		tVal = tVal.replace(new RegExp('目訓','gm'),'瞓');
		tVal = tVal.replace(new RegExp('女麻','gm'),'嫲');
		tVal = tVal.replace(new RegExp('著數','gm'),'着數');
		tVal = tVal.replace(new RegExp('訓覺','gm'),'瞓覺');
		tVal = tVal.replace(new RegExp('痴線','gm'),'黐線');
		tVal = tVal.replace(new RegExp('陶吉吉','gm'),'陶喆');
		tVal = tVal.replace(new RegExp('痴X線','gm'),'黐X線');
		tVal = tVal.replace(new RegExp('痴撚線','gm'),'黐撚線');
		tVal = tVal.replace(new RegExp('痴咗線','gm'),'黐咗線');
		tVal = tVal.replace(new RegExp('on居','gm'),'戇居');
		document.getElementById('results_box').value = tVal;
	}
} //End Function
function clickAbcBox(letter, box) {
	closeBrief();
	abcInput = letter;
	document.getElementById('abcBox_common').className = 'abcBox';
	document.getElementById('abcBox_a').className = 'abcBox';
	document.getElementById('abcBox_b').className = 'abcBox';
	document.getElementById('abcBox_c').className = 'abcBox';
	document.getElementById('abcBox_d').className = 'abcBox';
	document.getElementById('abcBox_e').className = 'abcBox';
	document.getElementById('abcBox_f').className = 'abcBox';
	document.getElementById('abcBox_g').className = 'abcBox';
	document.getElementById('abcBox_h').className = 'abcBox';
	document.getElementById('abcBox_i').className = 'abcBox';
	document.getElementById('abcBox_j').className = 'abcBox';
	document.getElementById('abcBox_k').className = 'abcBox';
	document.getElementById('abcBox_l').className = 'abcBox';
	document.getElementById('abcBox_m').className = 'abcBox';
	document.getElementById('abcBox_n').className = 'abcBox';
	document.getElementById('abcBox_o').className = 'abcBox';
	document.getElementById('abcBox_p').className = 'abcBox';
	document.getElementById('abcBox_s').className = 'abcBox';
	document.getElementById('abcBox_t').className = 'abcBox';
	document.getElementById('abcBox_u').className = 'abcBox';
	document.getElementById('abcBox_w').className = 'abcBox';
	document.getElementById('abcBox_y').className = 'abcBox';
	document.getElementById('abcBox_z').className = 'abcBox';
	box.className = 'abcBoxSel';
	var title = abcInput.toUpperCase();
	if(letter=='common') {
		title = '常用廣東字';
		document.getElementById('spanCanWordTitle').className = 'zh';
		document.getElementById('spanCanWordTitle').style.fontSize = '13px';
	} else {
		document.getElementById('spanCanWordTitle').className = 'mono';
		document.getElementById('spanCanWordTitle').style.fontSize = '15px';
	}
	document.getElementById('spanCanWordTitle').innerHTML = title;
	if(document.getElementById('spanCanWordTitle').style.display=='none') {
		document.getElementById('spanCanWordTitle').style.display = '';
	}
	fillWord(letter);
} //End Function
//22 letters, each of theme contains max 33 rows
//upper bound ~~ wordList.length;
function fillWord(letter) {
	if(letter=='common') { var wordList = new Array('哋','喺','啲','嚟','咗','嘅','嗰','嘢','吓','攞'); }
	else if(letter=='a') { var wordList = new Array('吖','嗌','嗌交','拗頸','搲','搲頭','啱','啱啱好','翳','閉翳','屙','屙尿','屙屎'); }
	else if(letter=='b') { var wordList = new Array('俾','畀','抦','抦一鑊','抦鑊甘','啵','噃','埗','深水埗'); }
	else if(letter=='c') { var wordList = new Array('唓','嘈','嘈喧巴閉','睺實','嚫','昅實','盵嘢','焯','擢樣','𨳍'); }
	else if(letter=='d') { var wordList = new Array('哋','掟','掟嘢','啲','尐','唞','嘟','兜','兜灣','兜口兜臉','趸','躉','擁躉','茅躉','揼骨','戥你唔底','沓水','頭耷耷','凳','籴米','肏','𨳒'); }
	else if(letter=='e') { var wordList = new Array('咦','𠵱','𠵱家'); }
	else if(letter=='f') { var wordList = new Array('瞓','瞓覺','瞓醒','瞓唔着','揈','吊吊揈'); }
	else if(letter=='g') { var wordList = new Array('嘅','嗰','嗰啲','嗰個','嗰陣','啩','梘','嘎','哽','揸','揸流灘','咁','噤','喼','嘎','甴','甴曱','嚿','大嚿','胳肋底','盵嘢','篋','皮篋','勼','尻','黃黚黚'); }
	else if(letter=='h') { var wordList = new Array('吓','慳','慳啲','喺','喺嗰度','喺邊度','冚','冚家拎','冚家剷','㗇','㗇㗇霸霸','扻頭埋牆','迆','囧','呷醋','乞嗤','嚡','閪'); }
	else if(letter=='i') { var wordList = new Array('吖','嗌','嗌交','翳','閉翳'); }
	else if(letter=='j') { var wordList = new Array('着','着數','咗','咋','揸','曱','甴曱','啫','啫喱','啫啫','嗻','喳嘛','嗟','噚日','噚晚','噱頭','擳出嚟','擳牙膏','擳新聞','走趲','喆','騭','陰騭'); }
	else if(letter=='k') { var wordList = new Array('佢','佢哋','佢嘅','攰','撳掣','撳錢','噤'); }
	else if(letter=='l') { var wordList = new Array('嚟','嗱','嘞','冧','諗','瀨','瀨嘢','脷','靚','𡃁','躝','躝癱','嬲','嫐','拎','掅起','邋','污糟邋遢','罅','叻','喱','囖囖攣','攞','轆','轆卡','俹簁','捩手掉咗佢',' 瞓捩頸','撩交打','淥菜','佗手褦腳','攣毛','碌葛','撚'); }
	else if(letter=='m') { var wordList = new Array('冇','咩','孭','孭鑊','乜','乜嘢','踎','踎監','掹','嘜','嘜頭','踎低','慳','搣死你','嫲嫲'); }
	else if(letter=='n') { var wordList = new Array('嗱','嗱嗱淋','乸','乸型','蛤乸','老虎乸','淆底'); }
	else if(letter=='o') { var wordList = new Array('戇','戇居居','戇尻','戇撚尻','戇尻尻','拗','拗頸','吽哣','發吽哣'); }
	else if(letter=='p') { var wordList = new Array('樖','一樖樹','仆','仆街','扑','扑你個頭'); }
	else if(letter=='s') { var wordList = new Array('餸','餸菜','嗮','嗮錢','嗮氣','嘥','嘥錢','嘥氣'); }
	else if(letter=='t') { var wordList = new Array('氹','氹掂','劏','劏猪凳','唞','唞吓','糴米','軚','轉軚'); }
	else if(letter=='u') { var wordList = new Array('噏','亂噏','狗噏','亂噏廿四','罨','罨山草藥','悒','心悒悒'); }
	else if(letter=='w') { var wordList = new Array('揾','揾笨','揾笨柒','喔','喎','污糟','污糟邋遢','搲','搲銀','搲着數','搲爛塊面'); }
	else if(letter=='y') { var wordList = new Array('嘢','咦','𠵱','喫','么心么肺'); }
	else if(letter=='z') { var wordList = new Array('黐','黐線','揸','揸流灘','咋','柒','砸','砸死蟹','嚫','擳','擳牙膏','擳出嚟','擳新聞'); }
	var u = wordList.length;
	if(u>0) {
		var objName;
		for (var i = 0; i < 35; i++) {
			objName = 'btnCanWord' + i;
			document.getElementById(objName).value = '';
			document.getElementById(objName).style.display = 'none';
		}
		for (var i = 0; i < u; i++) {
			objName = 'btnCanWord' + i;
			if(wordList[i]!='') {
				document.getElementById(objName).value = wordList[i];
				document.getElementById(objName).title = wordList[i];
				document.getElementById(objName).style.display = '';
			}
		}
	}
	document.getElementById('divCanWord').style.display = '';
} //End Function
function insertWord(obj) {
	var selWord = obj.value;
	if(selWord!='') { insertSymbol(selWord); }
} //End Function
function setCantonese() {
	var t = document.getElementById('cell_line').innerHTML;
	if(t!='開新行') {
		document.getElementById('cell_line').innerHTML = '開新行';
		document.getElementById('cell_paragraph').innerHTML = '開新段';
        document.getElementById('cell_open').innerHTML = '（';
        document.getElementById('cell_close').innerHTML = '）';
        timer1 = setTimeout(setCantonese, 20000);
	}
	else {
		timer1 = setTimeout(setCantonese, 10000);
	}
} //End Function
function convCantoneseKW() {
	var myValue1;
	var myValue2;
	var startPos;
	var endPos;
	var sel;
	var textTypePad = document.getElementById('results_box');
	if (document.selection) {
		//in effect we are creating a text range with zero
		//length at the cursor location and replacing it with str1
		sel = document.selection.createRange();
		str1 = sel.text;
		//Mozilla/Firefox/Netscape 7+ support
	}
	else if (textTypePad.selectionStart || parseInt(textTypePad.selectionStart)==0) {
		startPos = textTypePad.selectionStart;
		endPos   = textTypePad.selectionEnd;
		str1 = textTypePad.value.substring(parseInt(startPos)-1,parseInt(endPos),1);
		startPos = textTypePad.selectionStart;
		endPos   = textTypePad.selectionEnd;
		str2 = textTypePad.value.substring(parseInt(startPos)-2,parseInt(endPos),1);
	}
	var convStr = '';
		 if(str2=='o下')	{ convStr = '吓'; }
	else if(str2=='ｏ下')   { convStr = '吓'; }
	else if(str2=='o丫')	{ convStr = '吖'; }
	else if(str2=='ｏ丫')   { convStr = '吖'; }
	else if(str2=='o乍')	{ convStr = '咋'; }
	else if(str2=='ｏ乍')   { convStr = '咋'; }
	else if(str2=='o左')	{ convStr = '咗'; }
	else if(str2=='ｏ左')   { convStr = '咗'; }
	else if(str2=='o甘')	{ convStr = '咁'; }
	else if(str2=='ｏ甘')   { convStr = '咁'; }
	else if(str2=='o地')	{ convStr = '哋'; }
	else if(str2=='ｏ地')   { convStr = '哋'; }
	else if(str2=='o抖')	{ convStr = '唞'; }
	else if(str2=='ｏ抖')   { convStr = '唞'; }
	else if(str2=='o更')	{ convStr = '哽'; }
	else if(str2=='ｏ更')   { convStr = '哽'; }
	else if(str2=='o車')	{ convStr = '唓'; }
	else if(str2=='ｏ車')   { convStr = '唓'; }
	else if(str2=='o卦')	{ convStr = '啩'; }
	else if(str2=='ｏ卦')   { convStr = '啩'; }
	else if(str2=='o岩')	{ convStr = '啱'; }
	else if(str2=='ｏ岩')   { convStr = '啱'; }
	else if(str2=='o波')	{ convStr = '啵'; }
	else if(str2=='ｏ波')   { convStr = '啵'; }
	else if(str2=='o的')	{ convStr = '啲'; }
	else if(str2=='ｏ的')   { convStr = '啲'; }
	else if(str2=='o者')	{ convStr = '啫'; }
	else if(str2=='ｏ者')   { convStr = '啫'; }
	else if(str2=='o采')	{ convStr = '啋'; }
	else if(str2=='ｏ采')   { convStr = '啋'; }
	else if(str2=='o係')	{ convStr = '喺'; }
	else if(str2=='ｏ係')   { convStr = '喺'; }
	else if(str2=='o屋')	{ convStr = '喔'; }
	else if(str2=='ｏ屋')   { convStr = '喔'; }
	else if(str2=='o既')	{ convStr = '嘅'; }
	else if(str2=='ｏ既')   { convStr = '嘅'; }
	else if(str2=='o查')	{ convStr = '喳'; }
	else if(str2=='ｏ查')   { convStr = '喳'; }
	else if(str2=='o個')	{ convStr = '嗰'; }
	else if(str2=='ｏ個')   { convStr = '嗰'; }
	else if(str2=='o徒')	{ convStr = '嘥'; }
	else if(str2=='ｏ徒')   { convStr = '嘥'; }
	else if(str2=='o拿')	{ convStr = '嗱'; }
	else if(str2=='ｏ拿')   { convStr = '嗱'; }
	else if(str2=='o勒')	{ convStr = '嘞'; }
	else if(str2=='ｏ勒')   { convStr = '嘞'; }
	else if(str2=='o庶')	{ convStr = '嗻'; }
	else if(str2=='ｏ庶')   { convStr = '嗻'; }
	else if(str2=='o都')	{ convStr = '嘟'; }
	else if(str2=='ｏ都')   { convStr = '嘟'; }
	else if(str2=='o野')	{ convStr = '嘢'; }
	else if(str2=='ｏ野')   { convStr = '嘢'; }
	else if(str2=='o麥')	{ convStr = '嘜'; }
	else if(str2=='ｏ麥')   { convStr = '嘜'; }
	else if(str2=='o尋')	{ convStr = '噚'; }
	else if(str2=='ｏ尋')   { convStr = '噚'; }
	else if(str2=='o番')	{ convStr = '噃'; }
	else if(str2=='ｏ番')   { convStr = '噃'; }
	else if(str2=='o翕')	{ convStr = '噏'; }
	else if(str2=='ｏ翕')   { convStr = '噏'; }
	else if(str2=='o鞋')	{ convStr = '嚡'; }
	else if(str2=='ｏ鞋')   { convStr = '嚡'; }
	else if(str2=='o黎')	{ convStr = '嚟'; }
	else if(str2=='ｏ黎')   { convStr = '嚟'; }
	else if(str2=='o舊')	{ convStr = '嚿'; }
	else if(str2=='ｏ舊')   { convStr = '嚿'; }
	else if(str2=='o架')	{ convStr = '㗎'; }
	else if(str2=='ｏ架')   { convStr = '㗎'; }
	else if(str2=='o依')	{ convStr = '𠵱'; }
	else if(str2=='ｏ依')   { convStr = '𠵱'; }
	else if(str2=='o娥')	{ convStr = '𠹷'; }
	else if(str2=='ｏ娥')   { convStr = '𠹷'; }
	else if(str2=='o蝦')	{ convStr = '㗇'; }
	else if(str2=='ｏ蝦')   { convStr = '㗇'; }
	else if(str2=='o靚')	{ convStr = '𡃁'; }
	else if(str2=='ｏ靚')   { convStr = '𡃁'; }
	else if(str2=='痴線')   { convStr = '黐線'; }
	else if(str2=='門小')   { convStr = '𨳒'; }
	else if(str2=='門九')   { convStr = '𨳊'; }
	else if(str2=='門七')   { convStr = '𨳍'; }
	else if(str2=='門西')   { convStr = '閪'; }
	else if(str2=='水步')   { convStr = '水埗'; }
	else if(str2=='才丙')   { convStr = '抦'; }
	else if(str2=='才泵')   { convStr = '揼'; }
	else if(str2=='目訓')   { convStr = '瞓'; }
	else if(str2=='支力')   { convStr = '攰'; }
	else if(str2=='也母')   { convStr = '乸'; }
	else if(str2=='乙水')   { convStr = '氹'; }
	else if(str2=='著數')   { convStr = '着數'; }
	else if(str2=='孑貝')   { convStr = '孭鑊'; }
	else if(str2=='女麻')   { convStr = '嫲'; }
	else if(str2=='吉吉')   { convStr = '喆'; }
	else if(str2=='->') 	{ convStr = '→ '; }
	else if(str2=='<-') 	{ convStr = '← '; }
	else if(str2=='[[') 	{ convStr = '「 '; }
	else if(str2==']]') 	{ convStr = '」'; }
	else if(str2=='((') 	{ convStr = '（'; }
	else if(str2=='))') 	{ convStr = '）'; }
	else if(str2=='{{') 	{ convStr = '【 '; }
	else if(str2=='}}') 	{ convStr = '】'; }
	else if(str2=='<<') 	{ convStr = '《 '; }
	else if(str2=='>>') 	{ convStr = '》'; }
	else if(str2==',,') 	{ convStr = '，'; }
	else if(str2==';;') 	{ convStr = '；'; }
	else if(str2=='::') 	{ convStr = '：'; }
	else if(str2=='!!') 	{ convStr = '！'; }
	else if(str2=='?') 		{ convStr = '？'; }
	else if(str2=='??') 	{ convStr = '？'; }
	else if(str2=='..') 	{ convStr = '。'; }
	else if(str2=='\'\'') 	{ convStr = '、'; }
	else if(str2=='， ') 	{ convStr = '，'; }
	else if(str2=='。 ') 	{ convStr = '。'; }
	else if(str2=='！ ') 	{ convStr = '！'; }
	else if(str2=='？ ') 	{ convStr = '？'; }
	else if(str2=='： ') 	{ convStr = '：'; }
	else if(str2=='、 ') 	{ convStr = '、'; }
	else if(str2==' ，') 	{ convStr = '，'; }
	else if(str2==' 。') 	{ convStr = '。'; }
	else if(str2==' ！') 	{ convStr = '！'; }
	else if(str2==' ？') 	{ convStr = '？'; }
	else if(str2==' ：') 	{ convStr = '：'; }
	else if(str2==' 、') 	{ convStr = '、'; }
	else if(str2=='，，') 	{ convStr = '，'; }
	else if(str2=='。。') 	{ convStr = '。'; }
	else if(str2=='？！') 	{ convStr = '！'; }
	else if(str2=='？？') 	{ convStr = '？'; }
	else if(str2=='：：') 	{ convStr = '：'; }
	else if(str2=='、、') 	{ convStr = '、'; }
	if(convStr!='') {
		var textTypePad;
		textTypePad = document.getElementById('results_box');
		textTypePad.focus();
		var startPos = textTypePad.selectionStart-2;
		var endPos   = textTypePad.selectionEnd;
		textTypePad.value = textTypePad.value.substring(0, startPos) + convStr + textTypePad.value.substring(endPos, textTypePad.value.length);
		textTypePad.setSelectionRange(endPos+convStr.length-2, endPos+convStr.length-2);
	}
} //End Function
function closeBrief() {
	if(document.getElementById('helpBox').style.display!='none') {
		document.getElementById('helpBox').style.display = 'none';
		document.getElementById('tdShowBrief').innerHTML = '<img src="images/icon_info_01.gif"> 顯示使用說明';
	}
} //End Function
function closeRemoveTextSpaceBox() {
	document.getElementById('removeTextSpaceBox').style.display = 'none';
} //End Function
function closeFinetuneResultBox() {
	document.getElementById('finetuneResultBox').style.display = 'none';
} //End Function
function closeFixCantoneseInput() {
	document.getElementById('fixCantoneseInput').style.display = 'none';
} //End Function
function showHideBrief() {
	if(document.getElementById('helpBox').style.display=='none') {
		document.getElementById('helpBox').style.display = '';
		document.getElementById('tdShowBrief').innerHTML = '<img src="images/icon_info_01.gif">  隱藏使用說明';
	}
	else {
		document.getElementById('helpBox').style.display = 'none';
		document.getElementById('tdShowBrief').innerHTML = '<img src="images/icon_info_01.gif">  顯示使用說明';
	}
} //End Function
function cantoneseRef(n) {
	if(n==1) {
		//Wikipedia 粵語用辭
		top.location = 'https://zh-yue.wikipedia.org/wiki/Wikipedia:%E7%B2%B5%E8%AA%9E%E7%94%A8%E8%BE%AD';
	}
	else if(n==2) {
		//Wikipedia 粵語本字表
		top.location = 'https://zh-yue.wikipedia.org/wiki/Wikipedia:%E7%B2%B5%E8%AA%9E%E6%9C%AC%E5%AD%97%E8%A1%A8';
	}
	else if(n==3) {
		//Wikipedia 各區用字習慣
		top.location = 'https://zh-yue.wikipedia.org/wiki/Wikipedia:%E5%94%94%E5%90%8C%E7%B2%B5%E8%AA%9E%E5%9C%B0%E5%8D%80%E7%94%A8%E5%AD%97%E7%BF%92%E6%85%A3';
	}
	else if(n==4) {
		//香港中大粵語審音配詞字庫
		top.location = 'http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/';
	}
} //End Function

function Trim(instr) {
	if(instr!='' && instr!=null) {
		instr = instr.replace(/^[\s]*/gi,"");
		instr = instr.replace(/[\s]*$/gi,"");
		return instr;
	}
	else {
		return instr;
	}
} //End Function

var timer1 = setTimeout(setCantonese, 2888); //Please do not delete