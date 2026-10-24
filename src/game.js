/* ---------- language ---------- */
// Bilingual text is written as [english, greek]; tr() picks the active one.
const isEl=()=>S.lang==='el';
const tr=v=>Array.isArray(v)?v[isEl()?1:0]:v;

/* ---------- data ---------- */
const HEROES={
  athena:{name:['Athena','Αθηνά'],trait:['Wise','Σοφή'],tunic:'#ffffff',trim:'#2f6fd6',hair:'#3b2416',style:'long',pet:'🦉',petName:['Glafka the Owl','Γλαύκα η κουκουβάγια'],cheer:[['Wise thinking!','So clever!','Bravo!'],['Πολύ σοφά!','Τι έξυπνα!','Μπράβο!']]},
  hercules:{name:['Hercules','Ηρακλής'],trait:['Strong','Δυνατός'],tunic:'#e0533d',trim:'#f2b632',hair:'#5a3519',style:'curly',pet:'🦁',petName:['Leo the Lion Cub','Λέων το λιονταράκι'],cheer:[['Super strong!','Mighty job!','Opa!'],['Πανίσχυρα!','Τέλεια δουλειά!','Ώπα!']]},
  hermes:{name:['Hermes','Ερμής'],trait:['Fast','Γρήγορος'],tunic:'#2bb3a3',trim:'#ffffff',hair:'#e2b14a',style:'curly',pet:'🐢',petName:['Tito the Tortoise','Τίτος η χελώνα'],cheer:[['Lightning fast!','Zoom! Well done!','Bravo!'],['Σαν αστραπή!','Γρήγορα και σωστά!','Μπράβο!']]},
  artemis:{name:['Artemis','Άρτεμις'],trait:['Brave','Γενναία'],tunic:'#6aa84f',trim:'#f7e7b4',hair:'#b5532a',style:'pony',pet:'🦌',petName:['Dora the Deer','Δώρα το ελαφάκι'],cheer:[['Right on target!','Brave and smart!','Opa!'],['Στον στόχο!','Γενναία και έξυπνη!','Ώπα!']]}
};
const SKINS=['#f8dcc2','#eab48c','#c68a5e','#8d5a3b'];
const ITEMS=[
  {id:'laurel',slot:'head',name:['Laurel Wreath','Δάφνινο στεφάνι'],cost:10},
  {id:'helmet',slot:'head',name:['Bronze Helmet','Χάλκινο κράνος'],cost:25},
  {id:'wingcap',slot:'head',name:['Winged Cap','Φτερωτό καπέλο'],cost:30},
  {id:'crown',slot:'head',name:['Golden Crown','Χρυσό στέμμα'],cost:45},
  {id:'capeBlue',slot:'cape',name:['Sea Blue Cape','Γαλάζια κάπα'],cost:10,color:'#2f6fd6'},
  {id:'capeRed',slot:'cape',name:['Spartan Red Cape','Σπαρτιάτικη κάπα'],cost:15,color:'#c8322b'},
  {id:'capePurple',slot:'cape',name:['Royal Purple Cape','Βασιλική μωβ κάπα'],cost:35,color:'#7b3fa0'},
  {id:'olive',slot:'hand',name:['Olive Branch','Κλαδί ελιάς'],cost:5},
  {id:'lyre',slot:'hand',name:['Golden Lyre','Χρυσή λύρα'],cost:20},
  {id:'shield',slot:'hand',name:['Owl Shield','Ασπίδα με κουκουβάγια'],cost:30},
  {id:'torch',slot:'hand',name:['Olympic Torch','Ολυμπιακή δάδα'],cost:40},
  {id:'sandals',slot:'feet',name:['Winged Sandals','Φτερωτά σανδάλια'],cost:25}
];
const SLOTS=[['head',['Hats','Καπέλα']],['cape',['Capes','Κάπες']],['hand',['Hands','Χέρια']],['feet',['Feet','Πόδια']]];
const GAMES=[
  {id:'count',name:['Olive Grove','Ελαιώνας'],skill:['Counting','Αρίθμηση'],x:17,y:40,levels:[['Count to 5','Μέχρι το 5'],['Count to 10','Μέχρι το 10'],['Add olives','Πρόσθεση']]},
  {id:'letters',name:['Temple of Letters','Ναός των Γραμμάτων'],skill:['Letters','Γράμματα'],x:37,y:20,levels:[['Listen & find','Άκου και βρες'],['First sounds','Πρώτος ήχος'],['Big & small','Κεφαλαία & μικρά']]},
  {id:'sizes',name:['Mount Olympus','Όρος Όλυμπος'],skill:['Big & Small','Μεγάλο & Μικρό'],x:64,y:17,levels:[['Biggest','Το μεγαλύτερο'],['Smallest','Το μικρότερο'],['Small to big','Από μικρό σε μεγάλο']]},
  {id:'shapes',name:['Agora Market','Αγορά'],skill:['Colors & Shapes','Χρώματα & Σχήματα'],x:84,y:42,levels:[['Colors','Χρώματα'],['Shapes','Σχήματα'],['Color + shape','Χρώμα + σχήμα']]},
  {id:'odd',name:['Olympic Stadium','Ολυμπιακό Στάδιο'],skill:['Odd One Out','Το διαφορετικό'],x:53,y:46,levels:[['Easy','Εύκολο'],['Tricky','Δύσκολο'],['Super tricky','Πολύ δύσκολο']]},
  {id:'pattern',name:['Pottery Workshop','Εργαστήρι Αγγείων'],skill:['Patterns','Μοτίβα'],x:30,y:69,levels:[['A B A B','Α Β Α Β'],['A A B','Α Α Β'],['A B C','Α Β Γ']]},
  {id:'compare',name:['Fishing Harbour','Λιμάνι των Ψαράδων'],skill:['More & Fewer','Περισσότερα & Λιγότερα'],x:11,y:79,levels:[['More','Περισσότερα'],['Fewer','Λιγότερα'],['Biggest number','Μεγαλύτερος αριθμός']]},
  {id:'memory',name:['Aegean Sea','Αιγαίο Πέλαγος'],skill:['Memory','Μνήμη'],x:88,y:80,levels:[['3 pairs','3 ζευγάρια'],['4 pairs','4 ζευγάρια'],['6 pairs','6 ζευγάρια']]}
];
const BADGES=[
  {id:'first',icon:'👣',name:['First Steps','Πρώτα βήματα'],desc:['Finish your first level','Τελείωσε το πρώτο σου επίπεδο'],test:s=>doneCount(s)>=1},
  {id:'perfect',icon:'⭐',name:['Perfect!','Τέλειο!'],desc:['Get 3 stars on a level','Πάρε 3 αστέρια σε ένα επίπεδο'],test:s=>Object.values(s.stars).some(a=>a.includes(3))},
  {id:'count',icon:'🫒',name:['Olive Counter','Μετρητής ελιών'],desc:['Finish all of the Olive Grove','Τελείωσε όλο τον Ελαιώνα'],test:s=>gameDone(s,'count')},
  {id:'letters',icon:'📜',name:['Letter Scholar','Σοφός των γραμμάτων'],desc:['Finish all of the Temple','Τελείωσε όλο τον Ναό'],test:s=>gameDone(s,'letters')},
  {id:'sizes',icon:'🏔️',name:['Giant & Tiny','Γίγαντας & Νάνος'],desc:['Finish all of Mount Olympus','Τελείωσε όλο τον Όλυμπο'],test:s=>gameDone(s,'sizes')},
  {id:'shapes',icon:'🔺',name:['Agora Expert','Ειδικός της Αγοράς'],desc:['Finish all of the Agora','Τελείωσε όλη την Αγορά'],test:s=>gameDone(s,'shapes')},
  {id:'odd',icon:'👀',name:['Sharp Eyes','Μάτια αετού'],desc:['Finish all of the Stadium','Τελείωσε όλο το Στάδιο'],test:s=>gameDone(s,'odd')},
  {id:'pattern',icon:'🏺',name:['Master Potter','Μάστορας αγγειοπλάστης'],desc:['Finish all of the Pottery','Τελείωσε όλο το Εργαστήρι'],test:s=>gameDone(s,'pattern')},
  {id:'compare',icon:'⚓',name:['Harbour Master','Λιμενάρχης'],desc:['Finish all of the Harbour','Τελείωσε όλο το Λιμάνι'],test:s=>gameDone(s,'compare')},
  {id:'memory',icon:'🐬',name:['Friend of the Sea','Φίλος της θάλασσας'],desc:['Finish all of the Aegean Sea','Τελείωσε όλο το Αιγαίο'],test:s=>gameDone(s,'memory')},
  {id:'shop',icon:'👑',name:['Hero Style','Στιλ ήρωα'],desc:['Get your first hero item','Πάρε το πρώτο σου αντικείμενο'],test:s=>s.owned.length>=1},
  {id:'stars30',icon:'🌟',name:['Star Collector','Συλλέκτης αστεριών'],desc:['Collect 30 stars','Μάζεψε 30 αστέρια'],test:s=>starTotal(s)>=30},
  {id:'olympus',icon:'⚡',name:['Hero of Olympus','Ήρωας του Ολύμπου'],desc:['Finish every level','Τελείωσε όλα τα επίπεδα'],test:s=>doneCount(s)>=GAMES.length*3}
];
// [id, hex, english, greek for masculine/neuter, greek for feminine]
const COLORS=[['red','#e53935','red','κόκκινο','κόκκινη'],['blue','#1e6fd9','blue','μπλε','μπλε'],['yellow','#fbc02d','yellow','κίτρινο','κίτρινη'],['green','#43a047','green','πράσινο','πράσινη'],['orange','#fb8c00','orange','πορτοκαλί','πορτοκαλί'],['purple','#8e44ad','purple','μωβ','μωβ']];
// Greek accusative noun + article; heart is feminine
const SHAPES=['circle','square','triangle','star','heart'];
const SHAPE_EL={circle:['τον','κύκλο'],square:['το','τετράγωνο'],triangle:['το','τρίγωνο'],star:['το','αστέρι'],heart:['την','καρδιά']};
const colorEl=(c,shape)=>shape==='heart'?c[4]:c[3];
const WORDS_EN=[['A','Apple','🍎'],['B','Ball','⚽'],['C','Cat','🐱'],['D','Dolphin','🐬'],['E','Egg','🥚'],['F','Fish','🐟'],['G','Goat','🐐'],['H','Hat','🎩'],['I','Ice cream','🍦'],['J','Juice','🧃'],['K','Kite','🪁'],['L','Lion','🦁'],['M','Moon','🌙'],['N','Nose','👃'],['O','Owl','🦉'],['P','Pig','🐷'],['Q','Queen','👑'],['R','Rainbow','🌈'],['S','Sun','☀️'],['T','Tree','🌳'],['U','Umbrella','☂️'],['V','Violin','🎻'],['W','Whale','🐳'],['Y','Yo-yo','🪀'],['Z','Zebra','🦓']];
// [capital, small, spoken name, word, picture]
const GREEK=[['Α','α','άλφα','Αστέρι','⭐'],['Β','β','βήτα','Βάρκα','⛵'],['Γ','γ','γάμμα','Γάτα','🐱'],['Δ','δ','δέλτα','Δελφίνι','🐬'],['Ε','ε','έψιλον','Ελέφαντας','🐘'],['Ζ','ζ','ζήτα','Ζέβρα','🦓'],['Η','η','ήτα','Ήλιος','☀️'],['Θ','θ','θήτα','Θησαυρός','💎'],['Ι','ι','γιώτα','Ιπποπόταμος','🦛'],['Κ','κ','κάπα','Καρπούζι','🍉'],['Λ','λ','λάμδα','Λιοντάρι','🦁'],['Μ','μ','μι','Μήλο','🍎'],['Ν','ν','νι','Νερό','💧'],['Ξ','ξ','ξι','Ξυπνητήρι','⏰'],['Ο','ο','όμικρον','Ομπρέλα','☂️'],['Π','π','πι','Πεταλούδα','🦋'],['Ρ','ρ','ρο','Ρολόι','⌚'],['Σ','σ','σίγμα','Σκύλος','🐶'],['Τ','τ','ταυ','Τυρί','🧀'],['Υ','υ','ύψιλον','Ύπνος','😴'],['Φ','φ','φι','Φεγγάρι','🌙'],['Χ','χ','χι','Χελώνα','🐢'],['Ψ','ψ','ψι','Ψάρι','🐟'],['Ω','ω','ωμέγα','Ωκεανός','🌊']];
const SEA=[['🐬',['Dolphin','Δελφίνι']],['🐙',['Octopus','Χταπόδι']],['🐢',['Sea turtle','Θαλάσσια χελώνα']],['🦀',['Crab','Καβούρι']],['🐟',['Fish','Ψάρι']],['🐚',['Shell','Κοχύλι']],['🦑',['Squid','Καλαμάρι']],['🐳',['Whale','Φάλαινα']],['⛵',['Sailboat','Ιστιοφόρο']]];
const CATS=[
  {name:['fruits','φρούτα'],items:['🍎','🍌','🍇','🍓','🍊','🍉','🍐','🍒']},
  {name:['animals','ζώα'],items:['🐶','🐱','🐮','🐷','🐸','🐴','🐑','🐔']},
  {name:['vehicles','οχήματα'],items:['🚗','🚌','🚲','✈️','🚂','🚜','🚒']},
  {name:['clothes','ρούχα'],items:['👕','👗','👟','🧢','🧦','🧤','👖']},
  {name:['toys','παιχνίδια'],items:['🧸','🪀','🪁','🎈','🧩','🪅','🎲']}
];
const SIZE_THINGS=['🦉','🐢','🫒','⭐','🐬','🍎','🏛️','⛵','🐑','🌻'];
const ABC='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const TEACH={
  count:['Counting objects 1–10 and simple addition up to 10. Tapping each olive counts it aloud.','Μέτρηση αντικειμένων 1–10 και απλή πρόσθεση έως το 10. Κάθε ελιά που πατιέται μετριέται φωναχτά.'],
  letters:['English: capital letters by sound, first sounds, capital to small. Greek: the same with Α Β Γ.','Αγγλικά: κεφαλαία γράμματα από τον ήχο, πρώτος ήχος, κεφαλαία-μικρά. Ελληνικά: το ίδιο με Α Β Γ.'],
  sizes:['Comparing sizes: biggest, smallest, and ordering from small to big.','Σύγκριση μεγεθών: μεγαλύτερο, μικρότερο και σειρά από μικρό σε μεγάλο.'],
  shapes:['Naming six colours and five shapes, then combining both.','Έξι χρώματα και πέντε σχήματα, και μετά συνδυασμός τους.'],
  odd:['Sorting into groups (fruits, animals, vehicles, clothes, toys) and spotting what does not belong.','Ομαδοποίηση (φρούτα, ζώα, οχήματα, ρούχα, παιχνίδια) και εντοπισμός του διαφορετικού.'],
  pattern:['Spotting and continuing AB, AAB/ABB and ABC patterns, an early maths skill.','Εντοπισμός και συνέχεια μοτίβων ΑΒ, ΑΑΒ/ΑΒΒ και ΑΒΓ, πρώιμη μαθηματική δεξιότητα.'],
  compare:['More and fewer by counting fish, then comparing written numbers.','Περισσότερα και λιγότερα μετρώντας ψάρια, μετά σύγκριση αριθμών.'],
  memory:['Visual memory and concentration with Aegean sea creatures.','Οπτική μνήμη και συγκέντρωση με ζώα του Αιγαίου.']
};
const TX={
  title:['Little Hero','Μικρός Ήρωας'],title2:['of Olympus','του Ολύμπου'],
  choose:['Choose your hero, then explore the island!','Διάλεξε τον ήρωά σου και εξερεύνησε το νησί!'],
  namePh:['Hero name (grown-ups can type)','Όνομα ήρωα (το γράφει ένας μεγάλος)'],
  go:["Let's go!",'Πάμε!'],
  backIsland:['Back to the island','Πίσω στο νησί'],island:['Island','Νησί'],playAgain:['Play again','Ξαναπαίξε'],next:['Next level','Επόμενο επίπεδο'],
  bravo:[['Bravo!','Opa! Well done!','You did it!'],['Μπράβο!','Ώπα! Τα κατάφερες!','Τέλεια!']],newBadge:['New badge!','Νέο παράσημο!'],
  tryAgain:['Try again!','Ξαναδοκίμασε!'],
  myHero:['My Hero','Ο ήρωάς μου'],myHeroSub:['Buy and wear hero gear with your coins','Αγόρασε και φόρεσε εξοπλισμό με τα νομίσματά σου'],
  wear:['Wear','Φόρεσε'],takeOff:['Take off','Βγάλε'],needCoins:['Play more games to earn coins!','Παίξε κι άλλα παιχνίδια για να κερδίσεις νομίσματα!'],
  badgesT:['Hall of Badges','Αίθουσα Παρασήμων'],
  grown:['Grown-ups: press and hold','Γονείς: πατήστε παρατεταμένα'],grownT:["Grown-ups' corner",'Γωνιά γονέων'],grownSub:['Progress and settings','Πρόοδος και ρυθμίσεις'],
  intro:['Each place on the island practises one skill with 3 levels of 5 questions. Mistakes never block progress; they only lower the stars. Stars earn coins, and coins buy hero gear. Use the EN / ΕΛ switch to change the narrator and all the text between English and Greek. Progress saves on this device.','Κάθε μέρος του νησιού εξασκεί μία δεξιότητα, με 3 επίπεδα των 5 ερωτήσεων. Τα λάθη δεν σταματούν την πρόοδο, απλώς δίνουν λιγότερα αστέρια. Τα αστέρια δίνουν νομίσματα και τα νομίσματα αγοράζουν εξοπλισμό. Ο διακόπτης EN / ΕΛ αλλάζει τον αφηγητή και όλα τα κείμενα στα Αγγλικά ή στα Ελληνικά. Η πρόοδος αποθηκεύεται σε αυτή τη συσκευή.'],
  place:['Place','Μέρος'],teaches:['What it teaches','Τι διδάσκει'],lv:['Level','Επίπεδο'],
  heroName:['Hero name','Όνομα ήρωα'],saveName:['Save name','Αποθήκευση'],nameSaved:['Name saved','Το όνομα αποθηκεύτηκε'],
  eraseQ:['Erase all stars, coins and badges?','Να σβηστούν όλα τα αστέρια, νομίσματα και παράσημα;'],eraseYes:['Yes, start over','Ναι, από την αρχή'],keep:['Keep progress','Κράτα την πρόοδο'],startOver:['Start over…','Από την αρχή…'],
  findPairs:['Find the pairs!','Βρες τα ζευγάρια!'],
  coins:['Coins','Νομίσματα'],stars:['Stars','Αστέρια']
};
const t=k=>tr(TX[k]);
const SAY={
  welcome:n=>[`Kalimera, ${n}! Welcome to the island. Tap a place to play!`,`Καλημέρα, ${n}! Καλώς ήρθες στο νησί. Πάτα ένα μέρος για να παίξεις!`],
  hero:h=>[`${h.name[0]}! ${h.trait[0]}. And ${h.petName[0]}!`,`${h.name[1]}! ${h.trait[1]}. Και ${h.petName[1]}!`],
  pick:g=>[`${g.name[0]}. Let's learn ${g.skill[0]}! Pick a level.`,`${g.name[1]}! Διάλεξε επίπεδο.`],
  result:(n,s,c,b)=>[`Bravo ${n}! You got ${s} ${s===1?'star':'stars'} and ${c} coins!${b?' And a new badge!':''}`,`Μπράβο ${n}! Κέρδισες ${s} ${s===1?'αστέρι':'αστέρια'} και ${c} νομίσματα!${b?' Και ένα νέο παράσημο!':''}`],
  memory:['Find the matching sea friends. Tap two cards!','Βρες τους ίδιους θαλασσινούς φίλους. Πάτα δύο κάρτες!'],
  match:[['A match!','Great memory!','Two the same!'],['Ζευγάρι!','Τι μνήμη!','Ίδια!']],
  wow:n=>[`Wow! ${n}!`,`Ουάου! ${n}!`]
};
const sayL=v=>say(tr(v));

/* ---------- state ---------- */
const KEY='little-hero-olympus-v1';
const fresh=()=>({v:2,started:false,name:'',lang:'en',hero:'athena',skin:0,coins:5,owned:[],equip:{head:null,cape:null,hand:null,feet:null},stars:Object.fromEntries(GAMES.map(g=>[g.id,[0,0,0]])),badges:[],music:true,sound:true,updatedAt:0});
function normalize(s){const f=fresh();s=Object.assign(f,s||{});s.equip=Object.assign(fresh().equip,s.equip||{});s.stars=Object.assign(fresh().stars,s.stars||{});return s}
let S=fresh();
try{const raw=localStorage.getItem(KEY);if(raw)S=normalize(JSON.parse(raw))}catch(e){}
let ui={screen:S.started?'map':'welcome',tab:'head',modal:null};
let remoteDoc=null,saveTimer=null;
function save(){
  S.updatedAt=Date.now();
  try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}
  clearTimeout(saveTimer);
  saveTimer=setTimeout(()=>{if(remoteDoc)remoteDoc.set({json:JSON.stringify(S),updatedAt:S.updatedAt}).catch(()=>{})},1200);
}
// Inside claude.ai the page also keeps progress in the signed-in viewer's private store; elsewhere (GitHub Pages) it is device-only.
async function connectRemote(){
  try{
    if(!window.claude||!window.claude.use)return;
    const [db,user]=await Promise.all([claude.use('db'),claude.use('user')]);
    if(!db||!user)return;
    const id=await user.id();if(!id)return;
    remoteDoc=db.collection('data/users/'+id).doc('progress');
    const snap=await remoteDoc.get();
    const d=snap.exists?snap.data():null;
    if(d&&d.json&&(d.updatedAt||0)>(S.updatedAt||0)){
      S=normalize(JSON.parse(d.json));
      try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}
      if(S.started&&ui.screen==='welcome')ui.screen='map';
      if(ui.screen!=='game')render();
    }else if(S.started)save();
  }catch(e){}
}
const doneCount=s=>Object.values(s.stars).reduce((n,a)=>n+a.filter(x=>x>0).length,0);
const starTotal=s=>Object.values(s.stars).reduce((n,a)=>n+a.reduce((x,y)=>x+y,0),0);
const gameDone=(s,g)=>s.stars[g].every(x=>x>0);
const heroName=()=>S.name||tr(HEROES[S.hero].name);

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const rand=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const I={
  coin:'<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#f2b632" stroke="#c98a12" stroke-width="3"/><path d="M11 22V10l5 6 5-6v12" fill="none" stroke="#c98a12" stroke-width="2.6" stroke-linejoin="round"/></svg>',
  star:(on=true)=>`<svg viewBox="0 0 32 32"><path d="M16 2.5l4.2 8.6 9.4 1.3-6.8 6.6 1.6 9.4L16 24l-8.4 4.4 1.6-9.4L2.4 12.4l9.4-1.3z" fill="${on?'#f2b632':'#dfe5ee'}" stroke="${on?'#c98a12':'#b7bfcc'}" stroke-width="2" stroke-linejoin="round"/></svg>`,
  speaker:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',
  music:'<svg viewBox="0 0 24 24" fill="none" stroke="#1c2a48" stroke-width="2.4" stroke-linecap="round"><path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.8" fill="#1c2a48"/><circle cx="17.5" cy="16" r="2.8" fill="#1c2a48"/></svg>',
  sound:'<svg viewBox="0 0 24 24" fill="none" stroke="#1c2a48" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z" fill="#1c2a48"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="#1c2a48" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/></svg>',
  medal:'<svg viewBox="0 0 24 24"><path d="M7 2h4l2 6H9zM13 2h4l-2 6h-4z" fill="#2f6fd6"/><circle cx="12" cy="15" r="7" fill="#f2b632" stroke="#c98a12" stroke-width="2"/><path d="M12 11.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z" fill="#fff8dc"/></svg>',
  hanger:'<svg viewBox="0 0 24 24" fill="none" stroke="#1c2a48" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7a2 2 0 1 1 2-2c0 1.2-2 1.6-2 3v1l9 6.5a1 1 0 0 1-.6 1.8H3.6a1 1 0 0 1-.6-1.8L12 9"/></svg>',
  lock:'<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#4b5a78" stroke-width="2.4"><rect x="5" y="11" width="14" height="10" rx="2" fill="#4b5a78"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="#1c2a48" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>'
};
const starsRow=(n,big)=>`<div class="stars${big?' big':''}">${[1,2,3].map(i=>I.star(i<=n)).join('')}</div>`;
const langSwitch=()=>`<div class="lang" role="group" aria-label="Language"><button class="${isEl()?'':'sel'}" data-act="lang" data-v="en">EN</button><button class="${isEl()?'sel':''}" data-act="lang" data-v="el">ΕΛ</button></div>`;

/* ---------- avatar ---------- */
function avatar(heroId,skinIdx,equip,cls='avatar'){
  const h=HEROES[heroId]||HEROES.athena, sk=SKINS[skinIdx]||SKINS[0], e=equip||{};
  const cape=ITEMS.find(i=>i.id===e.cape);
  let o=`<svg class="${cls}" viewBox="0 0 200 262" xmlns="http://www.w3.org/2000/svg">`;
  if(cape)o+=`<path d="M70 118Q100 108 130 118L158 236Q100 252 42 236Z" fill="${cape.color}"/><path d="M70 118Q100 108 130 118L158 236Q100 252 42 236Z" fill="#000" opacity=".12" transform="translate(4 0)"/>`;
  if(h.style==='long')o+=`<path d="M62 74Q60 32 100 32Q140 32 138 74L146 152Q100 164 54 152Z" fill="${h.hair}"/>`;
  if(h.style==='pony')o+=`<path d="M124 48Q172 46 164 126Q152 94 130 78Z" fill="${h.hair}"/>`;
  o+=`<rect x="82" y="200" width="14" height="40" rx="7" fill="${sk}"/><rect x="104" y="200" width="14" height="40" rx="7" fill="${sk}"/>
  <ellipse cx="88" cy="244" rx="12" ry="7" fill="#8a5a2b"/><ellipse cx="112" cy="244" rx="12" ry="7" fill="#8a5a2b"/>
  <path d="M82 230l14 6M118 230l-14 6" stroke="#8a5a2b" stroke-width="3"/>`;
  if(e.feet==='sandals')o+=`<path d="M80 232Q62 222 60 210Q70 216 74 214Q70 222 82 228Z" fill="#fff" stroke="#9fb3c8" stroke-width="2"/><path d="M120 232Q138 222 140 210Q130 216 126 214Q130 222 118 228Z" fill="#fff" stroke="#9fb3c8" stroke-width="2"/>`;
  o+=`<path d="M72 128L50 174M128 128L150 174" stroke="${sk}" stroke-width="15" stroke-linecap="round"/>`;
  o+=`<path d="M68 120Q100 110 132 120L144 214Q100 226 56 214Z" fill="${h.tunic}" stroke="#00000018" stroke-width="2"/>
  <path d="M58 207Q100 219 142 207" stroke="${h.trim}" stroke-width="7" fill="none"/>
  <path d="M64 160Q100 170 136 160" stroke="#a8742c" stroke-width="6" fill="none"/>
  <circle cx="76" cy="122" r="5" fill="#f2b632"/><circle cx="124" cy="122" r="5" fill="#f2b632"/>`;
  o+=`<circle cx="50" cy="178" r="9" fill="${sk}"/><circle cx="150" cy="178" r="9" fill="${sk}"/>`;
  o+=`<rect x="92" y="104" width="16" height="16" fill="${sk}"/><circle cx="64" cy="80" r="7" fill="${sk}"/><circle cx="136" cy="80" r="7" fill="${sk}"/><circle cx="100" cy="76" r="36" fill="${sk}"/>`;
  if(h.style==='curly'){for(let a=-170;a<=-10;a+=20){const r=a*Math.PI/180;o+=`<circle cx="${(100+34*Math.cos(r)).toFixed(1)}" cy="${(70+30*Math.sin(r)).toFixed(1)}" r="13" fill="${h.hair}"/>`}}
  else o+=`<path d="M64 72Q64 38 100 38Q136 38 136 72Q122 52 100 54Q78 52 64 72Z" fill="${h.hair}"/>`;
  if(h.style==='pony')o+=`<circle cx="128" cy="52" r="5" fill="#f2b632"/>`;
  o+=`<circle cx="87" cy="80" r="5" fill="#1c2a48"/><circle cx="113" cy="80" r="5" fill="#1c2a48"/><circle cx="88.6" cy="78.4" r="1.7" fill="#fff"/><circle cx="114.6" cy="78.4" r="1.7" fill="#fff"/>
  <circle cx="78" cy="91" r="6" fill="#ff7f7f" opacity=".4"/><circle cx="122" cy="91" r="6" fill="#ff7f7f" opacity=".4"/>
  <path d="M89 92Q100 103 111 92" stroke="#1c2a48" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  if(e.head==='laurel'){const leaves=[];for(const side of [-1,1])for(let k=0;k<6;k++){const a=(side<0?-168+k*13:-12-k*13)*Math.PI/180;const x=100+38*Math.cos(a),y=72+34*Math.sin(a);leaves.push(`<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="4.5" ry="10" fill="${k%2?'#6f9f45':'#4f7f2f'}" transform="rotate(${(a*180/Math.PI+90+side*30).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`)}o+=leaves.join('')}
  if(e.head==='helmet')o+=`<path d="M64 40Q100 -8 136 40Q100 24 64 40Z" fill="#d63a2f"/><path d="M60 80Q58 34 100 32Q142 34 140 80L132 80Q130 54 100 52Q70 54 68 80Z" fill="#c98b2b" stroke="#8a5a17" stroke-width="3"/>`;
  if(e.head==='wingcap')o+=`<path d="M64 54Q38 30 26 44Q42 46 38 58Q52 56 64 62Z" fill="#fff" stroke="#9fb3c8" stroke-width="2"/><path d="M136 54Q162 30 174 44Q158 46 162 58Q148 56 136 62Z" fill="#fff" stroke="#9fb3c8" stroke-width="2"/><path d="M66 60Q68 34 100 32Q132 34 134 60Z" fill="#d9b25c"/><ellipse cx="100" cy="60" rx="46" ry="7" fill="#c49a3f"/>`;
  if(e.head==='crown')o+=`<polygon points="66,56 66,32 80,44 92,24 100,38 108,24 120,44 134,32 134,56" fill="#f2b632" stroke="#c98a12" stroke-width="3" stroke-linejoin="round"/><circle cx="100" cy="48" r="4" fill="#e53935"/><circle cx="82" cy="50" r="3" fill="#1e6fd9"/><circle cx="118" cy="50" r="3" fill="#1e6fd9"/>`;
  if(e.hand==='shield')o+=`<circle cx="48" cy="176" r="30" fill="#c98b2b" stroke="#8a5a17" stroke-width="4"/><circle cx="48" cy="176" r="20" fill="#2f6fd6"/><circle cx="41" cy="172" r="6" fill="#fff"/><circle cx="55" cy="172" r="6" fill="#fff"/><circle cx="41" cy="172" r="2.6" fill="#1c2a48"/><circle cx="55" cy="172" r="2.6" fill="#1c2a48"/><path d="M45 180h6l-3 6z" fill="#f2b632"/>`;
  if(e.hand==='olive')o+=`<path d="M150 180Q160 150 170 112" stroke="#7a5a2a" stroke-width="4" fill="none"/>${[[156,160,-30],[166,146,40],[160,134,-35],[172,124,35],[168,112,-10]].map(([x,y,r])=>`<ellipse cx="${x}" cy="${y}" rx="4" ry="10" fill="#7fa65a" transform="rotate(${r} ${x} ${y})"/>`).join('')}<circle cx="162" cy="150" r="4" fill="#3d4f1f"/><circle cx="170" cy="134" r="4" fill="#3d4f1f"/>`;
  if(e.hand==='lyre')o+=`<path d="M140 176Q130 132 146 116M164 176Q174 132 158 116" stroke="#f2b632" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M142 124H162M138 178H166" stroke="#c98a12" stroke-width="5" stroke-linecap="round"/><path d="M147 124V176M152 124V176M157 124V176" stroke="#fff3c9" stroke-width="1.6"/>`;
  if(e.hand==='torch')o+=`<path d="M146 186L150 132H158L154 186Z" fill="#8a5a2b"/><path d="M142 132H166L162 122H146Z" fill="#f2b632"/><path d="M154 124Q138 108 150 90Q152 104 158 98Q156 86 162 78Q174 102 162 120Q158 126 154 124Z" fill="#ff8c1a"/><path d="M154 122Q146 112 152 102Q156 110 160 106Q164 116 154 122Z" fill="#ffe14a"/>`;
  return o+'</svg>';
}

/* ---------- scene houses ---------- */
(function(){let g='';const hs=[[40,520,70,60],[120,500,60,70],[190,525,80,55],[275,540,60,50],[90,575,90,60],[200,585,70,55],[300,590,80,60],[400,600,70,55],[30,630,80,60]];
  hs.forEach(([x,y,w,hh],i)=>{g+=`<rect x="${x}" y="${y}" width="${w}" height="${hh}" fill="#fff" stroke="#e3dccb" stroke-width="2"/>`;
    if(i%3===0)g+=`<path d="M${x+w*.15} ${y}a${w*.35} ${w*.35} 0 0 1 ${w*.7} 0z" fill="#2f6fd6"/><path d="M${x+w/2} ${y-w*.35}v-14M${x+w/2-6} ${y-w*.35-8}h12" stroke="#2f6fd6" stroke-width="3"/>`;
    g+=`<rect x="${x+w*.2}" y="${y+hh*.35}" width="${w*.18}" height="${hh*.3}" rx="3" fill="#2f6fd6"/><rect x="${x+w*.6}" y="${y+hh*.35}" width="${w*.18}" height="${hh*.4}" rx="3" fill="#2f6fd6"/>`});
  document.getElementById('houses').innerHTML=g})();

/* ---------- audio ---------- */
let ac=null,sfxG,musG,musicTimer=null,step=0,nextT=0;
function initAudio(){
  try{
    if(!ac){ac=new (window.AudioContext||window.webkitAudioContext)();
      const m=ac.createGain();m.gain.value=.9;m.connect(ac.destination);
      sfxG=ac.createGain();sfxG.gain.value=.45;sfxG.connect(m);
      musG=ac.createGain();musG.gain.value=.11;musG.connect(m);
      const d=ac.createDelay();d.delayTime.value=.33;const fb=ac.createGain();fb.gain.value=.28;musG.connect(d);d.connect(fb);fb.connect(d);d.connect(m);}
    if(ac.state==='suspended')ac.resume();
    if(S.music)startMusic();
  }catch(e){}
}
const mtof=n=>440*Math.pow(2,(n-69)/12);
function tone(f,t,dur,dest,type='triangle',vol=.6,glide){
  const o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(glide)o.frequency.exponentialRampToValueAtTime(glide,t+dur);
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(g);g.connect(dest);o.start(t);o.stop(t+dur+.05);
}
// A gentle Greek-flavoured tune in D minor, plucked like a bouzouki
const MEL=[62,65,69,69,67,65,64,62,64,67,70,69,67,65,64,0, 69,72,74,72,70,69,67,65,64,65,67,64,62,0,62,0];
function startMusic(){if(!ac||musicTimer)return;nextT=ac.currentTime+.1;musicTimer=setInterval(()=>{
  while(nextT<ac.currentTime+.4){const n=MEL[step%MEL.length];if(n){tone(mtof(n),nextT,.45,musG,'triangle',.5);tone(mtof(n+12),nextT,.2,musG,'sine',.12)}
    if(step%4===0)tone(mtof(step%8===0?50:45),nextT,.8,musG,'sine',.55);
    if(step%4===2)tone(mtof(57),nextT,.25,musG,'triangle',.25);
    step++;nextT+=.3}},100)}
function stopMusic(){clearInterval(musicTimer);musicTimer=null}
function sfx(kind){
  if(!ac||!S.sound)return;const t=ac.currentTime+.01;
  if(kind==='tap')tone(880,t,.08,sfxG,'sine',.4);
  if(kind==='flip')tone(500,t,.15,sfxG,'sine',.4,900);
  if(kind==='good')[72,76,79,84].forEach((n,i)=>tone(mtof(n),t+i*.08,.35,sfxG,'sine',.5));
  if(kind==='bad'){tone(220,t,.18,sfxG,'triangle',.4);tone(185,t+.16,.25,sfxG,'triangle',.4)}
  if(kind==='coin'){tone(988,t,.1,sfxG,'square',.12);tone(1319,t+.09,.3,sfxG,'square',.12)}
  if(kind==='win')[60,64,67,72,67,72,76].forEach((n,i)=>tone(mtof(n),t+i*.12,i===6?.8:.25,sfxG,'triangle',.5));
}
// Narrator: picks an English or Greek voice to match the chosen language
const voices={};
function findVoice(lang){
  const vs=speechSynthesis.getVoices();
  if(lang==='el')return vs.find(v=>/^el/i.test(v.lang))||null;
  return vs.find(v=>/en[-_]GB/i.test(v.lang)&&/female|samantha|serena|libby|sonia/i.test(v.name))||vs.find(v=>/^en/i.test(v.lang))||null;
}
if('speechSynthesis' in window)speechSynthesis.onvoiceschanged=()=>{delete voices.en;delete voices.el};
function say(text){
  if(!S.sound||!('speechSynthesis' in window))return;
  try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);const L=S.lang;
    if(!voices[L])voices[L]=findVoice(L);
    if(voices[L])u.voice=voices[L];u.lang=voices[L]?voices[L].lang:(L==='el'?'el-GR':'en-GB');u.rate=.9;u.pitch=1.15;speechSynthesis.speak(u)}catch(e){}
}

/* ---------- particles ---------- */
const fx=$('#fx'),fctx=fx.getContext('2d');let parts=[],fxRun=false;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function burst(x,y,n=40){if(reduce)return;fx.width=innerWidth*devicePixelRatio;fx.height=innerHeight*devicePixelRatio;
  for(let i=0;i<n;i++)parts.push({x,y,vx:(Math.random()-.5)*12,vy:-Math.random()*12-3,r:Math.random()*Math.PI,s:6+Math.random()*8,c:pick(['#f2b632','#2f6fd6','#5f8f3a','#ffffff','#e53935']),k:Math.random()<.5,life:70+Math.random()*30});
  if(!fxRun){fxRun=true;requestAnimationFrame(tick)}}
function tick(){const d=devicePixelRatio;fctx.setTransform(d,0,0,d,0,0);fctx.clearRect(0,0,innerWidth,innerHeight);
  parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.35;p.r+=.15;p.life--;fctx.save();fctx.translate(p.x,p.y);fctx.rotate(p.r);fctx.fillStyle=p.c;
    if(p.k){fctx.beginPath();fctx.ellipse(0,0,p.s*.45,p.s,0,0,Math.PI*2);fctx.fill()}else fctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);fctx.restore()});
  parts=parts.filter(p=>p.life>0&&p.y<innerHeight+40);if(parts.length)requestAnimationFrame(tick);else{fxRun=false;fctx.clearRect(0,0,innerWidth,innerHeight)}}

/* ---------- shapes ---------- */
function shapePath(sh,c){
  const st='stroke="rgba(0,0,0,.25)" stroke-width="3" stroke-linejoin="round"';
  if(sh==='circle')return `<circle cx="50" cy="50" r="38" fill="${c}" ${st}/>`;
  if(sh==='square')return `<rect x="14" y="14" width="72" height="72" rx="6" fill="${c}" ${st}/>`;
  if(sh==='triangle')return `<polygon points="50,10 92,86 8,86" fill="${c}" ${st}/>`;
  if(sh==='heart')return `<path d="M50 88C18 66 6 46 12 30C18 14 42 12 50 30C58 12 82 14 88 30C94 46 82 66 50 88Z" fill="${c}" ${st}/>`;
  if(sh==='star'){let p=[];for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?18:42;p.push((50+r*Math.cos(a)).toFixed(1)+','+(54+r*Math.sin(a)).toFixed(1))}return `<polygon points="${p.join(' ')}" fill="${c}" ${st}/>`}
}
const shapeSVG=(sh,c)=>`<svg viewBox="0 0 100 100">${shapePath(sh,c)}</svg>`;
const vaseSVG=c=>`<svg viewBox="0 0 100 120"><path d="M42 24Q20 22 22 48M58 24Q80 22 78 48" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M38 8L62 8L62 14Q58 16 58 22Q58 28 68 34Q86 46 86 70Q86 92 72 104Q68 108 68 112L32 112Q32 108 28 104Q14 92 14 70Q14 46 32 34Q42 28 42 22Q42 16 38 14Z" fill="${c}" stroke="rgba(0,0,0,.25)" stroke-width="3"/><path d="M18 62H82M17 76H83" stroke="rgba(0,0,0,.28)" stroke-width="4"/><path d="M30 46Q34 40 40 40" stroke="#fff" stroke-opacity=".55" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`;
const hullSVG='<svg viewBox="0 0 160 52"><path d="M80 2V18" stroke="#7a5a2a" stroke-width="3"/><path d="M4 18H156L136 48H24Z" fill="#c8643b"/><path d="M12 28H148" stroke="#fff" stroke-width="4"/><path d="M18 36H142" stroke="#2f6fd6" stroke-width="4"/></svg>';

/* ---------- map art ---------- */
const ART={
  count:`<svg class="art" viewBox="0 0 100 100"><ellipse cx="50" cy="92" rx="30" ry="6" fill="#00000022"/><path d="M46 92Q44 70 40 58Q50 64 52 56Q56 70 54 92Z" fill="#7a5a2a"/><circle cx="34" cy="44" r="20" fill="#8fb36a"/><circle cx="58" cy="34" r="22" fill="#9cc46b"/><circle cx="68" cy="54" r="17" fill="#86ab5f"/><circle cx="44" cy="58" r="15" fill="#9cc46b"/>${[[30,40],[54,30],[66,50],[44,56],[62,40]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="4" ry="5" fill="#3d4f1f"/>`).join('')}</svg>`,
  letters:`<svg class="art" viewBox="0 0 100 100"><path d="M50 8L92 30H8Z" fill="#fffaf0" stroke="#d8ccb0" stroke-width="2"/><rect x="10" y="30" width="80" height="8" fill="#f1e9d8"/>${[16,34,52,70].map(x=>`<rect x="${x}" y="40" width="10" height="42" fill="#fffaf0" stroke="#d8ccb0" stroke-width="1.5"/>`).join('')}<rect x="6" y="82" width="88" height="6" fill="#f1e9d8"/><rect x="2" y="88" width="96" height="6" fill="#e6dcc4"/><text x="50" y="27" text-anchor="middle" font-family="Fredoka,sans-serif" font-weight="700" font-size="12" fill="#2f6fd6">ΑΒΓ</text></svg>`,
  sizes:`<svg class="art" viewBox="0 0 100 100"><path d="M4 90L40 20L58 50L68 36L96 90Z" fill="#8f9db2"/><path d="M40 20L30 40L38 36L44 42L50 32Z" fill="#fff"/><path d="M68 36L62 48L68 46L74 48Z" fill="#fff"/><ellipse cx="30" cy="20" rx="16" ry="7" fill="#fff"/><ellipse cx="74" cy="22" rx="14" ry="6" fill="#fff"/><path d="M56 6L48 22H55L50 34L64 16H56L60 6Z" fill="#f2b632" stroke="#c98a12" stroke-width="1.5"/></svg>`,
  shapes:`<svg class="art" viewBox="0 0 100 100"><rect x="14" y="40" width="72" height="48" fill="#fffaf0" stroke="#d8ccb0" stroke-width="2"/><rect x="16" y="40" width="6" height="48" fill="#c8a46a"/><rect x="78" y="40" width="6" height="48" fill="#c8a46a"/><path d="M8 40L18 18H82L92 40Z" fill="#2f6fd6"/>${[0,1,2,3,4].map(i=>`<path d="M${18+i*12.8} 18L${14+i*15.6} 40H${21.8+i*15.6}L${24.4+i*12.8} 18Z" fill="#fff"/>`).join('')}<circle cx="34" cy="64" r="9" fill="#e53935"/><polygon points="52,54 62,72 42,72" fill="#fbc02d"/><rect x="64" y="56" width="15" height="15" fill="#43a047"/></svg>`,
  odd:`<svg class="art" viewBox="0 0 100 100"><ellipse cx="50" cy="60" rx="46" ry="30" fill="#e9d8a6"/><ellipse cx="50" cy="60" rx="40" ry="24" fill="#d9643b"/><ellipse cx="50" cy="60" rx="32" ry="17" fill="none" stroke="#fff" stroke-width="2"/><ellipse cx="50" cy="60" rx="24" ry="11" fill="#7fb45a"/><path d="M50 10V30" stroke="#7a5a2a" stroke-width="2"/><path d="M50 10L66 15L50 20Z" fill="#2f6fd6"/><circle cx="50" cy="60" r="6" fill="#f2b632"/></svg>`,
  pattern:`<svg class="art" viewBox="0 0 100 100"><ellipse cx="50" cy="94" rx="26" ry="4" fill="#00000022"/><g transform="translate(18 4) scale(.64 .76)">${vaseSVG('#c8643b').replace(/<\/?svg[^>]*>/g,'')}</g><path d="M31 52H69" stroke="#1c2a48" stroke-width="3" stroke-dasharray="4 3"/></svg>`,
  compare:`<svg class="art" viewBox="0 0 100 100"><path d="M24 92Q30 76 50 74Q70 76 76 92Z" fill="#8f9db2"/><path d="M40 76L44 26H56L60 76Z" fill="#fff"/><path d="M42 40H58L57 50H43ZM41 60H59L59.6 70H40.4Z" fill="#2f6fd6"/><rect x="42" y="16" width="16" height="10" fill="#ffe14a"/><path d="M40 16L50 6L60 16Z" fill="#c8643b"/><path d="M58 18L92 8V28ZM42 18L8 8V28Z" fill="#fff59a" opacity=".7"/></svg>`,
  memory:`<svg class="art" viewBox="0 0 100 100"><path d="M24 70H82L74 84H32Z" fill="#c8643b"/><path d="M52 14V68" stroke="#7a5a2a" stroke-width="3"/><path d="M54 16Q78 40 54 64Z" fill="#fff"/><path d="M50 22Q30 44 50 64Z" fill="#fff"/><path d="M56 30H66M56 44H70" stroke="#2f6fd6" stroke-width="4"/><path d="M8 88q8-6 16 0t16 0 16 0 16 0 16 0" stroke="#fff" stroke-width="3" fill="none"/></svg>`
};
const MAP_SVG=`<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="mSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3aa0e8"/><stop offset="1" stop-color="#1665b0"/></linearGradient></defs>
<rect width="1000" height="700" fill="url(#mSea)"/>
<g stroke="#bfe6ff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".55"><path d="M60 80q15-8 30 0t30 0"/><path d="M880 130q15-8 30 0t30 0"/><path d="M300 650q15-8 30 0t30 0"/><path d="M640 660q15-8 30 0t30 0"/><path d="M920 420q15-8 30 0t30 0"/></g>
<path d="M170 160C260 60 520 40 700 90C860 130 930 260 880 400C840 520 700 600 520 590C340 610 160 560 120 430C80 320 100 230 170 160Z" fill="#f3dfae"/>
<path d="M200 180C280 96 520 80 690 120C830 156 890 270 846 390C808 494 690 560 520 552C350 570 190 530 156 420C124 330 140 240 200 180Z" fill="#a8cf74"/>
<g stroke="#e9d39b" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="2 18"><path d="M190 280Q260 180 370 150"/><path d="M380 150Q500 110 630 120"/><path d="M650 130Q780 200 820 290"/><path d="M200 300Q230 420 290 470"/><path d="M310 470Q420 420 520 340"/><path d="M540 330Q680 320 800 300"/></g>
<g>${[[640,440],[680,420],[720,445],[670,470],[710,480],[750,460]].map(([x,y],i)=>`<rect x="${x}" y="${y}" width="34" height="28" fill="#fff" stroke="#e3dccb"/>${i%2?'':`<path d="M${x+5} ${y}a12 12 0 0 1 24 0z" fill="#2f6fd6"/>`}<rect x="${x+12}" y="${y+12}" width="9" height="16" fill="#2f6fd6"/>`).join('')}</g>
<g fill="#7fa65a">${[[260,230],[480,230],[760,230],[800,380],[450,500],[200,400],[560,470]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="16"/><circle cx="${x+14}" cy="${y-8}" r="12"/>`).join('')}</g>
<circle cx="930" cy="62" r="34" fill="#ffd34a"/>
</svg>`;

/* ---------- rendering ---------- */
const app=$('#app');
function topbar(){
  return `<div class="topbar">
    <button class="me" data-act="room" aria-label="${t('myHero')}"><span class="face">${avatar(S.hero,S.skin,S.equip,'')}</span><b>${esc(heroName())}</b></button>
    <div class="pill" aria-label="${t('coins')}">${I.coin}<span>${S.coins}</span></div>
    <div class="pill" aria-label="${t('stars')}">${I.star(true)}<span>${starTotal(S)}</span></div>
    <div class="spacer"></div>
    ${langSwitch()}
    <button class="icon-btn" data-act="badges" aria-label="${t('badgesT')}">${I.medal}</button>
    <button class="icon-btn" data-act="room" aria-label="${t('myHero')}">${I.hanger}</button>
    <button class="icon-btn ${S.music?'':'off'}" data-act="music" aria-label="Music">${I.music}</button>
    <button class="icon-btn ${S.sound?'':'off'}" data-act="sound" aria-label="Voice">${I.sound}</button>
  </div>`;
}
function render(){
  document.documentElement.lang=S.lang;
  const s=ui.screen;
  if(s==='welcome')app.innerHTML=welcomeHTML();
  if(s==='map')app.innerHTML=`<div class="screen">${topbar()}<div class="map-wrap"><div class="map">${MAP_SVG}${GAMES.map(g=>{const st=S.stars[g.id].reduce((a,b)=>a+b,0);return `<button class="loc" data-act="open" data-g="${g.id}" style="left:${g.x}%;top:${g.y}%" aria-label="${tr(g.name)}">${ART[g.id]}<span class="tag">${tr(g.name)}<small>★ ${st}/9</small></span></button>`}).join('')}</div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn white small hold" data-hold="parents">${t('grown')}<i></i></button></div></div>`;
  if(s==='room')app.innerHTML=roomHTML();
  if(s==='badges')app.innerHTML=badgesHTML();
  if(s==='parents')app.innerHTML=parentsHTML();
  if(s==='game')renderGame();
  renderModal();
}
function welcomeHTML(){
  return `<div class="screen welcome">
    <div class="welcome-top">${langSwitch()}</div>
    <div class="logo">${t('title')} <span>${t('title2')}</span></div>
    <p class="sub">${t('choose')}</p>
    <div class="heroes">${Object.entries(HEROES).map(([id,h])=>`<button class="hero-card ${S.hero===id?'sel':''}" data-act="hero" data-h="${id}" aria-label="${tr(h.name)}">${avatar(id,S.skin,{})}<h3>${tr(h.name)}</h3><span class="trait">${tr(h.trait)}</span><span class="petline">${h.pet} ${tr(h.petName)}</span></button>`).join('')}</div>
    <div class="row">${SKINS.map((c,i)=>`<button class="skin ${S.skin===i?'sel':''}" style="background:${c}" data-act="skin" data-i="${i}" aria-label="Skin tone ${i+1}"></button>`).join('')}</div>
    <input id="kidname" class="name-in" maxlength="16" placeholder="${t('namePh')}" value="${esc(S.name)}" autocomplete="off">
    <button class="btn blue" data-act="start" style="font-size:1.7rem;padding:16px 44px">${t('go')}</button>
  </div>`;
}
function roomHTML(){
  const items=ITEMS.filter(i=>i.slot===ui.tab);
  return `<div class="screen">
    <div class="gbar"><button class="icon-btn" data-act="map" aria-label="${t('backIsland')}">${I.back}</button><div class="gtitle"><h2>${t('myHero')}</h2><div>${t('myHeroSub')}</div></div><div class="pill">${I.coin}<span>${S.coins}</span></div></div>
    <div class="room">
      <div class="stagebox panel">${avatar(S.hero,S.skin,S.equip)}<div class="row" style="gap:6px"><span class="pet" style="font-size:2.4rem">${HEROES[S.hero].pet}</span><b style="font-family:var(--display);font-size:1.2rem">${esc(heroName())}</b></div>
        <div class="mini-heroes">${Object.keys(HEROES).map(id=>`<button class="${S.hero===id?'sel':''}" data-act="hero" data-h="${id}" aria-label="${tr(HEROES[id].name)}">${avatar(id,S.skin,{},'')}</button>`).join('')}</div>
        <div class="row" style="gap:8px">${SKINS.map((c,i)=>`<button class="skin ${S.skin===i?'sel':''}" style="background:${c};width:40px;height:40px" data-act="skin" data-i="${i}" aria-label="Skin tone ${i+1}"></button>`).join('')}</div>
      </div>
      <div class="shop">
        <div class="tabs">${SLOTS.map(([k,l])=>`<button class="tab ${ui.tab===k?'sel':''}" data-act="tab" data-t="${k}">${tr(l)}</button>`).join('')}</div>
        <div class="items">${items.map(it=>{const own=S.owned.includes(it.id),worn=S.equip[it.slot]===it.id;
          const btn=worn?`<button class="btn small white" data-act="unwear" data-id="${it.id}">${t('takeOff')}</button>`:own?`<button class="btn small blue" data-act="wear" data-id="${it.id}">${t('wear')}</button>`:`<button class="btn small" data-act="buy" data-id="${it.id}" ${S.coins<it.cost?'disabled':''}>${I.coin}${it.cost}</button>`;
          const eq=Object.assign({},S.equip,{[it.slot]:it.id});
          return `<div class="item ${worn?'worn':''}">${avatar(S.hero,S.skin,eq,'thumb')}<b>${tr(it.name)}</b>${btn}</div>`}).join('')}</div>
      </div>
    </div></div>`;
}
function badgesHTML(){
  return `<div class="screen"><div class="gbar"><button class="icon-btn" data-act="map" aria-label="${t('backIsland')}">${I.back}</button><div class="gtitle"><h2>${t('badgesT')}</h2><div>${S.badges.length} / ${BADGES.length}</div></div></div>
  <div class="badges">${BADGES.map(b=>{const has=S.badges.includes(b.id);return `<div class="badge ${has?'':'locked'}"><div class="medal">${b.icon}</div><b>${tr(b.name)}</b><span>${tr(b.desc)}</span></div>`}).join('')}</div></div>`;
}
function parentsHTML(){
  return `<div class="screen"><div class="gbar"><button class="icon-btn" data-act="map" aria-label="${t('backIsland')}">${I.back}</button><div class="gtitle"><h2>${t('grownT')}</h2><div>${t('grownSub')}</div></div>${langSwitch()}</div>
  <div class="parents">
    <p>${t('intro')}</p>
    <div style="overflow-x:auto"><table><thead><tr><th>${t('place')}</th><th>${t('teaches')}</th><th>1</th><th>2</th><th>3</th></tr></thead><tbody>
    ${GAMES.map(g=>`<tr><td><b>${tr(g.name)}</b></td><td>${tr(TEACH[g.id])}</td>${S.stars[g.id].map(n=>`<td>${n?'★'.repeat(n):'–'}</td>`).join('')}</tr>`).join('')}
    </tbody></table></div>
    <div class="row" style="justify-content:flex-start"><label for="pname"><b>${t('heroName')}</b></label><input id="pname" class="name-in" maxlength="16" value="${esc(S.name)}" style="text-align:left"><button class="btn small blue" data-act="rename">${t('saveName')}</button></div>
    <div class="row" style="justify-content:flex-start">${ui.confirmReset?`<b>${t('eraseQ')}</b><button class="btn small" style="background:var(--bad);color:#fff;box-shadow:0 6px 0 #a33" data-act="reset2">${t('eraseYes')}</button><button class="btn small white" data-act="reset0">${t('keep')}</button>`:`<button class="btn small white" data-act="reset1">${t('startOver')}</button>`}</div>
  </div></div>`;
}

/* ---------- level picker & results ---------- */
function renderModal(){
  let v=$('.veil');if(v)v.remove();const m=ui.modal;if(!m)return;
  let h='';
  if(m.type==='levels'){const g=GAMES.find(x=>x.id===m.g),st=S.stars[g.id];
    h=`<h2>${tr(g.name)}</h2><div class="sub">${tr(g.skill)}</div><div class="levels">${g.levels.map((name,i)=>{const open=i===0||st[i-1]>0;
      return `<button class="lvl ${open?'':'locked'}" ${open?`data-act="play" data-g="${g.id}" data-l="${i}"`:'disabled'}><b>${i+1}</b>${open?starsRow(st[i]):I.lock}<span>${tr(name)}</span></button>`}).join('')}</div>
      <button class="btn white small" data-act="close">${t('backIsland')}</button>`}
  if(m.type==='result'){const g=GAMES.find(x=>x.id===m.g),h0=HEROES[S.hero];
    h=`<h2>${pick(t('bravo'))}</h2>${starsRow(m.stars,true)}
    <div class="row">${avatar(S.hero,S.skin,S.equip).replace('class="avatar"','class="avatar" style="width:120px;height:auto"')}<span class="pet" style="font-size:3.4rem">${h0.pet}</span></div>
    <div class="earn">+${m.coins} ${I.coin}</div>
    ${m.newBadges.length?`<div><b style="font-family:var(--display);font-size:1.3rem">${t('newBadge')}</b><div class="row" style="margin-top:8px">${m.newBadges.map(id=>{const b=BADGES.find(x=>x.id===id);return `<div class="badge" style="box-shadow:none;background:none"><div class="medal">${b.icon}</div><b>${tr(b.name)}</b></div>`}).join('')}</div></div>`:''}
    <div class="row"><button class="btn white" data-act="close">${t('island')}</button><button class="btn blue" data-act="play" data-g="${g.id}" data-l="${m.l}">${t('playAgain')}</button>${m.l<2?`<button class="btn" data-act="play" data-g="${g.id}" data-l="${m.l+1}">${t('next')}</button>`:''}</div>`}
  const d=document.createElement('div');d.className='veil';d.innerHTML=`<div class="modal" role="dialog" aria-modal="true">${h}</div>`;document.body.appendChild(d);
}

/* ---------- question generators ---------- */
// Each returns {text, say, stage?, options:[{html, ok, say?, after?, rank?}], big?, order?}
function numOpts(n,k,min,max){const s=new Set([n]);let guard=0;while(s.size<k&&guard++<99){const v=n+rand(-3,3);if(v>=min&&v<=max)s.add(v)}return [...s].sort((a,b)=>a-b)}
const olivesEl=n=>n===1?'μία ελιά':`${n} ελιές`;
function oliveBranch(n){
  let o=`<svg viewBox="0 0 420 230"><path d="M10 64Q200 20 410 70" stroke="#7a5a2a" stroke-width="12" fill="none" stroke-linecap="round"/>`;
  for(let i=0;i<9;i++){const x=40+i*44,y=48+Math.sin(i)*6;o+=`<ellipse cx="${x}" cy="${y-14}" rx="7" ry="20" fill="#8fb36a" transform="rotate(${i%2?50:-50} ${x} ${y})"/>`}
  for(let i=0;i<n;i++){const x=30+(i+.5)*(360/n),y=n>5?(i%2?160:118):135;o+=`<g class="olive" data-act="olive"><path d="M${x} ${y-20}L${x} 58" stroke="#7a5a2a" stroke-width="3"/><ellipse class="body" cx="${x}" cy="${y}" rx="17" ry="22" fill="#4a5d23"/><ellipse cx="${x-6}" cy="${y-8}" rx="4" ry="6" fill="#fff" opacity=".35"/><text x="${x}" y="${y+7}" text-anchor="middle"></text></g>`}
  return o+'</svg>';
}
function bowls(a,b){
  const bowl=(cx,n)=>{let s=`<path d="M${cx-80} 120H${cx+80}Q${cx+70} 190 ${cx} 192Q${cx-70} 190 ${cx-80} 120Z" fill="#c8643b"/><path d="M${cx-74} 150H${cx+74}" stroke="#1c2a48" stroke-width="5" stroke-dasharray="10 6"/>`;
    for(let i=0;i<n;i++){const x=cx-50+(i%3)*50,y=100-Math.floor(i/3)*38;s+=`<g class="olive" data-act="olive"><ellipse class="body" cx="${x}" cy="${y}" rx="17" ry="21" fill="#4a5d23"/><ellipse cx="${x-6}" cy="${y-8}" rx="4" ry="6" fill="#fff" opacity=".35"/><text x="${x}" y="${y+7}" text-anchor="middle"></text></g>`}return s};
  return `<svg viewBox="0 0 520 210">${bowl(120,a)}<text x="260" y="150" text-anchor="middle" font-family="Fredoka,sans-serif" font-weight="700" font-size="70" fill="#0f4f8f">+</text>${bowl(400,b)}</svg>`;
}
const numOpt=(v,n)=>({html:`<span class="num">${v}</span>`,ok:v===n,say:String(v)});
const distinct=(pool,t,k)=>shuffle([t,...shuffle(pool.filter(x=>x!==t)).slice(0,k)]);
const GEN={
  count(l){
    if(l<2){const max=l?10:5,n=rand(1,max);return {text:tr(['How many olives?','Πόσες ελιές;']),say:tr(['How many olives are on the branch? Tap each olive to count!','Πόσες ελιές έχει το κλαδί; Πάτα κάθε ελιά για να μετρήσεις!']),stage:`<div class="panel" style="width:min(100%,640px)">${oliveBranch(n)}</div>`,
      options:numOpts(n,l?4:3,1,max).map(v=>numOpt(v,n))}}
    const a=rand(1,5),b=rand(1,Math.min(5,10-a)),n=a+b;
    return {text:`${a} + ${b} = ?`,say:tr([`${a} olives plus ${b} olives. How many olives altogether?`,`${olivesEl(a)} και ${olivesEl(b)}. Πόσες ελιές είναι όλες μαζί;`]),stage:`<div class="panel" style="width:min(100%,640px)">${bowls(a,b)}</div>`,options:numOpts(n,4,2,10).map(v=>numOpt(v,n))};
  },
  letters(l){
    if(isEl()){
      const w=pick(GREEK),opts=distinct(GREEK,w,2);
      if(l===0)return {text:'Άκου και βρες το γράμμα',say:`Βρες το γράμμα ${w[2]}.`,stage:`<button class="listen" data-act="repeat" aria-label="Άκου ξανά">${I.speaker}</button>`,options:opts.map(x=>({html:`<span class="let">${x[0]}</span>`,ok:x===w}))};
      if(l===1)return {text:'Ποιο γράμμα λείπει;',say:`${w[3]}! Με ποιο γράμμα αρχίζει η λέξη ${w[3]};`,stage:`<div class="panel scroll"><div class="pic">${w[4]}</div><div class="bigword"><u>?</u>${esc(w[3].slice(1))}</div></div>`,options:opts.map(x=>({html:`<span class="let">${x[0]}</span>`,ok:x===w,after:`${x[2]}, όπως ${w[3]}!`}))};
      return {text:'Βρες το μικρό γράμμα',say:`Αυτό είναι το κεφαλαίο ${w[2]}. Βρες το μικρό ${w[2]}.`,stage:`<div class="panel scroll" style="padding:10px 40px"><div class="letter-xl">${w[0]}</div></div>`,options:opts.map(x=>({html:`<span class="let">${x[1]}</span>`,ok:x===w}))};
    }
    if(l===0){const t0=pick([...ABC]),opts=distinct([...ABC],t0,2);
      return {text:'Listen and find the letter',say:`Find the letter ${t0}.`,stage:`<button class="listen" data-act="repeat" aria-label="Hear it again">${I.speaker}</button>`,options:opts.map(v=>({html:`<span class="let">${v}</span>`,ok:v===t0,say:v}))}}
    if(l===1){const w=pick(WORDS_EN),opts=distinct([...ABC],w[0],2);
      return {text:'Which letter is missing?',say:`${w[1]}! Which letter does ${w[1]} start with?`,stage:`<div class="panel scroll"><div class="pic">${w[2]}</div><div class="bigword"><u>?</u>${esc(w[1].slice(1))}</div></div>`,options:opts.map(v=>({html:`<span class="let">${v}</span>`,ok:v===w[0],say:v,after:`${v} for ${w[1]}!`}))}}
    const t0=pick([...ABC]),opts=distinct([...ABC],t0,2);
    return {text:'Find the small letter',say:`This is big ${t0}. Find the small ${t0}.`,stage:`<div class="panel scroll" style="padding:10px 40px"><div class="letter-xl">${t0}</div></div>`,options:opts.map(v=>({html:`<span class="let">${v.toLowerCase()}</span>`,ok:v===t0,say:v.toLowerCase()}))};
  },
  shapes(l){
    const colName=(c,s)=>isEl()?colorEl(c,s):c[2];
    if(l===0){const cs=shuffle(COLORS).slice(0,3),c=pick(cs);
      return {text:tr([`Tap the <span style="color:${c[1]}">${c[2]}</span> vase`,`Πάτα το <span style="color:${c[1]}">${c[3]}</span> βάζο`]),say:tr([`Tap the ${c[2]} vase.`,`Πάτα το ${c[3]} βάζο.`]),big:true,options:cs.map(x=>({html:vaseSVG(x[1]),ok:x===c,say:x[2]}))}}
    if(l===1){const ss=shuffle(SHAPES).slice(0,4),s=pick(ss),c=pick(COLORS)[1],el=SHAPE_EL[s].join(' ');
      return {text:tr([`Tap the ${s}`,`Πάτα ${el}`]),say:tr([`Tap the ${s}.`,`Πάτα ${el}.`]),big:true,options:ss.map(x=>({html:shapeSVG(x,c),ok:x===s,say:x}))}}
    const tc=pick(COLORS),ts=pick(SHAPES),oc=pick(COLORS.filter(c=>c!==tc)),os=pick(SHAPES.filter(s=>s!==ts));
    const set=[[ts,tc],[ts,oc],[os,tc],[pick(SHAPES.filter(s=>s!==ts)),pick(COLORS.filter(c=>c!==tc))]];
    const [art,noun]=SHAPE_EL[ts];
    return {text:tr([`Tap the <span style="color:${tc[1]}">${tc[2]}</span> ${ts}`,`Πάτα ${art} <span style="color:${tc[1]}">${colName(tc,ts)}</span> ${noun}`]),say:tr([`Tap the ${tc[2]} ${ts}.`,`Πάτα ${art} ${colName(tc,ts)} ${noun}.`]),big:true,options:shuffle(set).map(([s,c])=>({html:shapeSVG(s,c[1]),ok:s===ts&&c===tc,say:`${c[2]} ${s}`}))};
  },
  pattern(l){
    let units,len;
    if(l===0){const cs=shuffle(COLORS).slice(0,2);units=cs.map(c=>['circle',c[1]]);len=2}
    else if(l===1){const a=[pick(SHAPES),pick(COLORS)[1]];let b;do b=[pick(SHAPES),pick(COLORS)[1]];while(b[0]===a[0]);units=Math.random()<.5?[a,a,b]:[a,b,b];len=3}
    else{const ss=shuffle(SHAPES).slice(0,3),cs=shuffle(COLORS).slice(0,3);units=ss.map((s,i)=>[s,cs[i][1]]);len=3}
    const show=l===0?rand(4,6):rand(4,7),seq=[];for(let i=0;i<=show;i++)seq.push(units[i%len]);
    const ans=seq[show],uniq=[];units.forEach(u=>{if(!uniq.some(x=>x[0]===u[0]&&x[1]===u[1]))uniq.push(u)});
    while(uniq.length<3){const c=[l===0?'circle':pick(SHAPES),pick(COLORS)[1]];if(!uniq.some(x=>x[0]===c[0]&&x[1]===c[1]))uniq.push(c)}
    const cell=56,w=(show+1)*cell+20;
    let band=`<svg viewBox="0 0 ${w} 96"><rect x="0" y="4" width="${w}" height="88" rx="18" fill="#c8643b"/><path d="M8 14H${w-8}M8 82H${w-8}" stroke="#1c2a48" stroke-width="4" stroke-dasharray="12 6"/>`;
    seq.slice(0,show).forEach((u,i)=>{band+=`<g transform="translate(${14+i*cell} 24) scale(.48)">${shapePath(u[0],u[1])}</g>`});
    band+=`<g transform="translate(${14+show*cell} 24)"><rect width="48" height="48" rx="10" fill="#fffaf0" stroke="#1c2a48" stroke-width="3" stroke-dasharray="6 4"/><text x="24" y="37" text-anchor="middle" font-family="Fredoka,sans-serif" font-weight="700" font-size="34" fill="#1c2a48">?</text></g></svg>`;
    return {text:tr(['What comes next?','Τι ακολουθεί;']),say:tr(['Look at the pattern on the vase. What comes next?','Κοίτα το μοτίβο στο βάζο. Τι ακολουθεί;']),stage:`<div style="width:min(100%,720px)">${band}</div>`,options:shuffle(uniq.slice(0,3)).map(u=>({html:shapeSVG(u[0],u[1]),ok:u[0]===ans[0]&&u[1]===ans[1]}))};
  },
  compare(l){
    if(l<2){let a,b;do{a=rand(1,7);b=rand(1,7)}while(Math.abs(a-b)<(l?1:2));
      const n=l?Math.min(a,b):Math.max(a,b),fish=pick(['🐟','🐠','🐡']);
      const boat=k=>`<div class="boat"><div class="fish">${fish.repeat(k)}</div>${hullSVG}</div>`;
      return {text:tr(l?['Which boat has fewer fish?','Ποια βάρκα έχει λιγότερα ψάρια;']:['Which boat has more fish?','Ποια βάρκα έχει περισσότερα ψάρια;']),
        say:tr(l?['Which fishing boat has fewer fish?','Ποια βάρκα έχει λιγότερα ψάρια;']:['Which fishing boat has more fish?','Ποια βάρκα έχει περισσότερα ψάρια;']),
        options:[a,b].map(k=>({html:boat(k),ok:k===n,after:tr([`${k} fish! ${l?'Fewer':'More'}!`,`${k} ψάρια! ${l?'Λιγότερα':'Περισσότερα'}!`])}))}}
    const s=new Set();while(s.size<3)s.add(rand(1,l===2?20:10));const nums=[...s],n=Math.max(...nums);
    return {text:tr(['Tap the biggest number','Πάτα τον μεγαλύτερο αριθμό']),say:tr(['Which number is the biggest?','Ποιος αριθμός είναι ο μεγαλύτερος;']),options:shuffle(nums).map(v=>numOpt(v,n))};
  },
  odd(l){
    const [c1,c2]=shuffle(CATS),odd=pick(c2.items);let same;
    if(l===0){const e=pick(c1.items);same=[e,e,e]}else same=shuffle(c1.items).slice(0,l===1?3:4);
    const after=l===0?null:tr([`Yes! The others are all ${c1.name[0]}.`,`Ναι! Τα άλλα είναι όλα ${c1.name[1]}.`]);
    return {text:tr(['Which one is different?','Ποιο είναι διαφορετικό;']),say:tr(['Which one does not belong? Tap it!','Ποιο δεν ταιριάζει με τα άλλα; Πάτα το!']),
      options:shuffle([...same.map(e=>({html:`<span class="emo">${e}</span>`,ok:false})),{html:`<span class="emo">${odd}</span>`,ok:true,after}])};
  },
  sizes(l){
    const e=pick(SIZE_THINGS),scales=l===1?[.35,.55,.78,1]:shuffle([[.4,.7,1],[.35,.65,1],[.45,.72,1]])[0];
    const opts=shuffle(scales.map((s,i)=>({html:`<span class="sz" style="font-size:${(s*5.6).toFixed(2)}rem">${e}</span>`,rank:i,ok:l===0?i===scales.length-1:l===1?i===0:true})));
    if(l===2)return {text:tr(['Tap from smallest to biggest','Πάτα από το μικρότερο στο μεγαλύτερο']),say:tr(['Tap them in order, from the smallest to the biggest!','Πάτα τα με τη σειρά, από το μικρότερο στο μεγαλύτερο!']),order:true,tall:true,options:opts};
    return {text:tr(l?['Tap the smallest','Πάτα το μικρότερο']:['Tap the biggest','Πάτα το μεγαλύτερο']),say:tr(l?['Which one is the smallest?','Ποιο είναι το μικρότερο;']:['Which one is the biggest?','Ποιο είναι το μεγαλύτερο;']),tall:true,options:opts};
  }
};

/* ---------- game flow ---------- */
let run=null;
function startLevel(g,l){
  ui.modal=null;ui.screen='game';
  run={g,l,q:0,total:g==='memory'?[3,4,6][l]:5,mistakes:0,busy:false,nextRank:0};
  if(g==='memory')setupMemory();else run.cur=GEN[g](l);
  render();speakPrompt();
}
function speakPrompt(){if(!run)return;const s=run.g==='memory'?tr(SAY.memory):run.cur.say;setTimeout(()=>say(s),250)}
function setupMemory(){const pairs=shuffle(SEA).slice(0,run.total);run.cards=shuffle([...pairs,...pairs]).map((p,i)=>({i,e:p[0],n:p[1],up:false,done:false}));run.open=[];run.found=0}
function renderGame(){
  const g=GAMES.find(x=>x.id===run.g),h=HEROES[S.hero];
  const prog=run.g==='memory'?run.found:run.q;
  let body;
  if(run.g==='memory'){const n=run.cards.length,cols=n<=6?3:4;
    body=`<div class="stage"><div class="mem" style="grid-template-columns:repeat(${cols},minmax(0,1fr));width:min(100%,${cols*150}px,calc((100dvh - 230px) / ${Math.ceil(n/cols)} * .75 * ${cols} + ${(cols-1)*12}px))">${run.cards.map(c=>`<button class="card ${c.up?'up':''} ${c.done?'done':''}" data-act="card" data-i="${c.i}" aria-label="${c.up||c.done?tr(c.n):'?'}"><div class="in"><div class="b"><span>Ω</span></div><div class="f">${c.e}</div></div></button>`).join('')}</div></div>`}
  else{const c=run.cur,cls=c.big?'big':c.tall?'tall':'';
    body=`${c.stage?`<div class="stage">${c.stage}</div>`:''}<div class="options" style="${c.stage?'':'flex:1;align-items:center'}">${c.options.map((o,i)=>`<button class="opt ${cls}" data-act="ans" data-i="${i}">${o.html}</button>`).join('')}</div>`}
  app.innerHTML=`<div class="screen">
    <div class="gbar"><button class="icon-btn" data-act="map" aria-label="${t('backIsland')}">${I.home}</button>
      <div class="gtitle"><h2>${tr(g.name)}</h2><div>${t('lv')} ${run.l+1} · ${tr(g.levels[run.l])}</div></div>
      <div class="dots">${Array.from({length:run.total},(_,i)=>`<i class="${i<prog?'done':i===prog?'now':''}"></i>`).join('')}</div></div>
    <div class="prompt"><span class="pet" id="pet">${h.pet}</span><div class="bubble"><span>${run.g==='memory'?t('findPairs'):run.cur.text}</span><button class="icon-btn" data-act="repeat" aria-label="Repeat">${I.speaker}</button></div></div>
    ${body}</div>`;
}
function success(btn,after){
  run.busy=true;sfx('good');const r=btn.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2);
  $('#pet')?.classList.add('happy');say(after||pick(tr(HEROES[S.hero].cheer)));
  setTimeout(()=>{run.q++;run.busy=false;if(run.q>=run.total)return finishLevel();run.cur=GEN[run.g](run.l);run.nextRank=0;renderGame();speakPrompt()},1600);
}
function answer(btn,i){
  if(run.busy)return;const c=run.cur,o=c.options[i];if(btn.classList.contains('wrong')||btn.classList.contains('right'))return;
  if(c.order){
    if(o.rank===run.nextRank){btn.classList.add('right');btn.insertAdjacentHTML('beforeend',`<em class="rank">${o.rank+1}</em>`);run.nextRank++;
      if(run.nextRank>=c.options.length)return success(btn);
      sfx('tap');say(String(run.nextRank));}
    else{run.mistakes++;sfx('bad');btn.classList.remove('shake');void btn.offsetWidth;btn.classList.add('shake');say(t('tryAgain'))}
    return;
  }
  if(o.ok){btn.classList.add('right');success(btn,o.after)}
  else{run.mistakes++;sfx('bad');btn.classList.add('shake','wrong');say(!isEl()&&o.say?`That's ${o.say}. Try again!`:t('tryAgain'))}
}
function flip(i){
  const c=run.cards[i];if(run.busy||c.up||c.done)return;
  c.up=true;run.open.push(c);sfx('flip');say(tr(c.n));
  document.querySelector(`.card[data-i="${i}"]`).classList.add('up');
  if(run.open.length===2){const [a,b]=run.open;run.busy=true;
    setTimeout(()=>{if(a.e===b.e){a.done=b.done=true;run.found++;sfx('good');const el=document.querySelector(`.card[data-i="${b.i}"]`).getBoundingClientRect();burst(el.left+el.width/2,el.top+el.height/2,25);say(pick(tr(SAY.match)))}
      else{a.up=b.up=false;run.mistakes++}
      run.open=[];run.busy=false;renderGame();if(run.found>=run.total)setTimeout(finishLevel,700)},a.e===b.e?500:1100)}
}
function finishLevel(){
  const m=run.mistakes,stars=run.g==='memory'?(m<=run.total?3:m<=run.total*2?2:1):(m===0?3:m<=2?2:1);
  const first=S.stars[run.g][run.l]===0,coins=2+stars*2+(first?3:0);
  S.stars[run.g][run.l]=Math.max(S.stars[run.g][run.l],stars);S.coins+=coins;
  const nb=checkBadges();save();sfx('win');setTimeout(()=>sfx('coin'),900);
  burst(innerWidth/2,innerHeight/3,80);
  sayL(SAY.result(heroName(),stars,coins,nb.length));
  ui.modal={type:'result',g:run.g,l:run.l,stars,coins,newBadges:nb};renderModal();
}
function checkBadges(){const nb=[];BADGES.forEach(b=>{if(!S.badges.includes(b.id)&&b.test(S)){S.badges.push(b.id);nb.push(b.id)}});return nb}
let toastT;function toast(x){let el=$('.toast');if(!el){el=document.createElement('div');el.className='toast';document.body.appendChild(el)}el.textContent=x;clearTimeout(toastT);toastT=setTimeout(()=>el.remove(),2200)}

/* ---------- events ---------- */
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act;
  initAudio();
  if(a!=='ans'&&a!=='card'&&a!=='olive')sfx('tap');
  switch(a){
    case 'lang':{if(S.lang===b.dataset.v)break;S.lang=b.dataset.v;save();
      if(ui.screen==='game'&&run&&run.g!=='memory'){run.cur=GEN[run.g](run.l);run.nextRank=0}
      render();if(ui.screen==='game')speakPrompt();else say(isEl()?'Ελληνικά!':'English!');break}
    case 'hero':S.hero=b.dataset.h;sayL(SAY.hero(HEROES[S.hero]));save();render();break;
    case 'skin':S.skin=+b.dataset.i;save();render();break;
    case 'start':{const n=$('#kidname');S.name=(n&&n.value.trim())||'';S.started=true;save();ui.screen='map';render();sayL(SAY.welcome(heroName()));break}
    case 'map':run=null;ui.screen='map';ui.modal=null;ui.confirmReset=false;render();break;
    case 'room':ui.screen='room';render();break;
    case 'badges':ui.screen='badges';render();break;
    case 'tab':ui.tab=b.dataset.t;render();break;
    case 'music':S.music=!S.music;S.music?startMusic():stopMusic();save();render();break;
    case 'sound':S.sound=!S.sound;if(!S.sound&&'speechSynthesis' in window)speechSynthesis.cancel();save();render();break;
    case 'open':{const g=GAMES.find(x=>x.id===b.dataset.g);ui.modal={type:'levels',g:g.id};renderModal();sayL(SAY.pick(g));break}
    case 'close':ui.modal=null;if(ui.screen==='game'){run=null;ui.screen='map';render()}else renderModal();break;
    case 'play':startLevel(b.dataset.g,+b.dataset.l);break;
    case 'repeat':speakPrompt();break;
    case 'ans':answer(b,+b.dataset.i);break;
    case 'card':flip(+b.dataset.i);break;
    case 'olive':{if(b.classList.contains('counted'))break;const n=document.querySelectorAll('.olive.counted').length+1;b.classList.add('counted');b.querySelector('text').textContent=n;sfx('tap');say(String(n));break}
    case 'buy':{const it=ITEMS.find(x=>x.id===b.dataset.id);if(S.coins<it.cost){say(t('needCoins'));break}S.coins-=it.cost;S.owned.push(it.id);S.equip[it.slot]=it.id;sfx('coin');const nb=checkBadges();save();render();const r=b.getBoundingClientRect();burst(r.left+r.width/2,r.top,40);sayL(SAY.wow(tr(it.name)));if(nb.length)toast(t('newBadge')+' '+tr(BADGES.find(x=>x.id===nb[0]).name));break}
    case 'wear':{const it=ITEMS.find(x=>x.id===b.dataset.id);S.equip[it.slot]=it.id;save();render();say(tr(it.name));break}
    case 'unwear':{const it=ITEMS.find(x=>x.id===b.dataset.id);S.equip[it.slot]=null;save();render();break}
    case 'rename':{const n=$('#pname');S.name=n.value.trim();save();toast(t('nameSaved'));break}
    case 'reset1':ui.confirmReset=true;render();break;
    case 'reset0':ui.confirmReset=false;render();break;
    case 'reset2':{const keep={music:S.music,sound:S.sound,lang:S.lang};S=Object.assign(fresh(),keep);save();ui.confirmReset=false;ui.screen='welcome';render();break}
  }
});
// press-and-hold to open the grown-ups corner
let holdT=null;
document.addEventListener('pointerdown',e=>{const b=e.target.closest('[data-hold]');if(!b)return;const bar=b.querySelector('i');bar.style.transition='width 1.5s linear';bar.style.width='100%';
  holdT=setTimeout(()=>{ui.screen='parents';render()},1500)});
['pointerup','pointercancel'].forEach(ev=>document.addEventListener(ev,()=>{if(!holdT)return;clearTimeout(holdT);holdT=null;const bar=document.querySelector('[data-hold] i');if(bar){bar.style.transition='none';bar.style.width='0'}},true));

/* ---------- boot ---------- */
function start(data){
  if(data&&data.state){S=normalize(data.state);if(data.screen&&data.screen!=='game')ui.screen=data.screen}
  render();connectRemote();
}
window.claude?.hot?.snapshot?.(()=>({state:S,screen:ui.screen}));
window.claude?.hot?.ready?window.claude.hot.ready(start):start(window.claude?.hot?.data??{});
