/* ---------- language ---------- */
// Bilingual text is written as [english, greek]; tr() picks the active one.
const isEl=()=>S.lang==='el';
const tr=v=>Array.isArray(v)?v[isEl()?1:0]:v;

/* ---------- data ---------- */
const HEROES={
  athena:{petAcc:'τη Γλαύκα την κουκουβάγια',name:['Athena','Αθηνά'],voc:'Αθηνά',trait:['Wise','Σοφή'],tunic:'#ffffff',trim:'#2f6fd6',hair:'#3b2416',style:'long',pet:'🦉',petName:['Glafka the Owl','Γλαύκα η κουκουβάγια'],cheer:[['Wise thinking!','So clever!','Bravo!'],['Πολύ σοφά!','Τι έξυπνα!','Μπράβο!']]},
  hercules:{petAcc:'τον Λέοντα το λιονταράκι',name:['Hercules','Ηρακλής'],voc:'Ηρακλή',trait:['Strong','Δυνατός'],tunic:'#e0533d',trim:'#f2b632',hair:'#5a3519',style:'curly',pet:'🦁',petName:['Leo the Lion Cub','Λέων το λιονταράκι'],cheer:[['Super strong!','Mighty job!','Awesome!'],['Πανίσχυρα!','Τέλεια δουλειά!','Μπράβο!']]},
  hermes:{petAcc:'τον Τίτο τη χελώνα',name:['Hermes','Ερμής'],voc:'Ερμή',trait:['Fast','Γρήγορος'],tunic:'#2bb3a3',trim:'#ffffff',hair:'#e2b14a',style:'curly',pet:'🐢',petName:['Tito the Tortoise','Τίτος η χελώνα'],cheer:[['Lightning fast!','Zoom! Well done!','Bravo!'],['Σαν αστραπή!','Γρήγορα και σωστά!','Μπράβο!']]},
  artemis:{petAcc:'τη Δώρα το ελαφάκι',name:['Artemis','Άρτεμις'],voc:'Άρτεμη',trait:['Brave','Γενναία'],tunic:'#6aa84f',trim:'#f7e7b4',hair:'#b5532a',style:'pony',pet:'🦌',petName:['Dora the Deer','Δώρα το ελαφάκι'],cheer:[['Right on target!','Brave and smart!','Awesome!'],['Στον στόχο!','Γενναία και έξυπνη!','Μπράβο!']]}
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
  {id:'sizes',name:['Mount Olympus','Όρος Όλυμπος'],skill:['Big & Small','Μεγάλο & Μικρό'],x:64,y:17,gate:{coins:10},levels:[['Biggest','Το μεγαλύτερο'],['Smallest','Το μικρότερο'],['Small to big','Από μικρό σε μεγάλο']]},
  {id:'shapes',name:['Agora Market','Αγορά'],skill:['Colors & Shapes','Χρώματα & Σχήματα'],x:84,y:42,levels:[['Colors','Χρώματα'],['Shapes','Σχήματα'],['Color + shape','Χρώμα + σχήμα']]},
  {id:'odd',name:['Olympic Stadium','Ολυμπιακό Στάδιο'],skill:['Odd One Out','Το διαφορετικό'],x:53,y:46,gate:{coins:15},levels:[['Easy','Εύκολο'],['Tricky','Δύσκολο'],['Super tricky','Πολύ δύσκολο']]},
  {id:'pattern',name:['Pottery Workshop','Εργαστήρι Αγγείων'],skill:['Patterns','Μοτίβα'],x:30,y:69,levels:[['A B A B','Α Β Α Β'],['A A B','Α Α Β'],['A B C','Α Β Γ']]},
  {id:'compare',name:['Fishing Harbour','Λιμάνι των Ψαράδων'],skill:['More & Fewer','Περισσότερα & Λιγότερα'],x:11,y:79,gate:{coins:20},levels:[['More','Περισσότερα'],['Fewer','Λιγότερα'],['Biggest number','Μεγαλύτερος αριθμός']]},
  {id:'memory',name:['Aegean Sea','Αιγαίο Πέλαγος'],skill:['Memory','Μνήμη'],x:88,y:80,levels:[['3 pairs','3 ζευγάρια'],['4 pairs','4 ζευγάρια'],['6 pairs','6 ζευγάρια']]},
  {id:'puzzle',name:['Riddle Cave','Σπηλιά των Γρίφων'],skill:['Puzzles','Γρίφοι'],x:91,y:14,gate:{badges:3},levels:[['Labyrinth','Λαβύρινθος'],['Tower of 2 discs','Πύργος με 2 δίσκους'],['Wolf, sheep & grass','Λύκος, πρόβατο, χόρτο'],['Labyrinth & key','Λαβύρινθος με κλειδί'],['Tower of 3 discs','Πύργος με 3 δίσκους'],['The Minotaur wakes up','Ο Μινώταυρος ξύπνησε'],['Tower of 4 discs','Πύργος με 4 δίσκους'],['The giant labyrinth','Ο γιγάντιος λαβύρινθος']]}
];
GAMES.splice(GAMES.length-1,0,{id:'music',name:['Music Odeon','Μουσικό Ωδείο'],skill:['Music','Μουσική'],x:66,y:70,gate:{coins:25},levels:[['Twinkle Twinkle','Το αστεράκι'],['Ode to Joy','Ωδή στη Χαρά'],['Lullaby','Νανούρισμα'],['Morning Mood','Πρωινή Διάθεση'],['Minuet','Μενουέτο']]});
const PUZZLES=[{type:'maze',n:6},{type:'hanoi',n:2},{type:'river'},{type:'maze',n:8,key:true},{type:'hanoi',n:3},{type:'maze',n:9,key:true,mino:true},{type:'hanoi',n:4},{type:'maze',n:11,key:true,mino:true}];
const isOpen=g=>!g.gate||S.unlocked.includes(g.id)||S.stars[g.id].some(x=>x>0);
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
  {id:'music',icon:'🎼',name:['Little Maestro','Μικρός Μαέστρος'],desc:['Play every song in the Odeon','Παίξε όλα τα κομμάτια του Ωδείου'],test:s=>gameDone(s,'music')},
  {id:'puzzle',icon:'🧩',name:['Puzzle Master','Λύτης γρίφων'],desc:['Solve every riddle in the Cave','Λύσε όλους τους γρίφους της Σπηλιάς'],test:s=>gameDone(s,'puzzle')},
  {id:'explorer',icon:'🗝️',name:['Explorer','Εξερευνητής'],desc:['Open a locked place','Άνοιξε ένα κλειδωμένο μέρος'],test:s=>s.unlocked.length>=1},
  {id:'shop',icon:'👑',name:['Hero Style','Στιλ ήρωα'],desc:['Get your first hero item','Πάρε το πρώτο σου αντικείμενο'],test:s=>s.owned.length>=1},
  {id:'stars30',icon:'🌟',name:['Star Collector','Συλλέκτης αστεριών'],desc:['Collect 30 stars','Μάζεψε 30 αστέρια'],test:s=>starTotal(s)>=30},
  {id:'olympus',icon:'⚡',name:['Hero of Olympus','Ήρωας του Ολύμπου'],desc:['Finish every level','Τελείωσε όλα τα επίπεδα'],test:s=>doneCount(s)>=GAMES.reduce((n,g)=>n+g.levels.length,0)}
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
  memory:['Visual memory and concentration with Aegean sea creatures.','Οπτική μνήμη και συγκέντρωση με ζώα του Αιγαίου.'],
  music:['A running game: catch coloured notes in order to play famous melodies by Mozart, Beethoven, Brahms, Grieg and Bach. Teaches listening, note names (Do Re Mi) and memory for tunes.','Παιχνίδι τρεξίματος: ο ήρωας μαζεύει χρωματιστές νότες με τη σειρά και παίζει γνωστές μελωδίες του Μότσαρτ, του Μπετόβεν, του Μπραμς, του Γκριγκ και του Μπαχ. Μαθαίνει ακρόαση, ονόματα νοτών (Ντο Ρε Μι) και μνήμη μελωδιών.'],
  puzzle:['Problem solving with pictures: the Minotaur labyrinth, the Tower puzzle and the wolf, sheep and grass river crossing. The light-bulb button gives a spoken hint.','Επίλυση προβλημάτων με εικόνες: ο λαβύρινθος του Μινώταυρου, ο Πύργος και το πέρασμα του λύκου, του προβάτου και του χόρτου. Το κουμπί με τη λάμπα δίνει βοήθεια.']
};
const TX={
  title:['Little Hero','Μικρός Ήρωας'],title2:['of Olympus','του Ολύμπου'],
  choose:['Choose your hero, then explore the island!','Διάλεξε τον ήρωά σου και εξερεύνησε το νησί!'],
  namePh:['Hero name (grown-ups can type)','Όνομα ήρωα (το γράφει ένας μεγάλος)'],
  go:["Let's go!",'Πάμε!'],
  backIsland:['Back to the island','Πίσω στο νησί'],island:['Island','Νησί'],playAgain:['Play again','Ξαναπαίξε'],next:['Next level','Επόμενο επίπεδο'],
  bravo:[['Bravo!','Well done!','You did it!'],['Μπράβο!','Τα κατάφερες!','Τέλεια!']],newBadge:['New badge!','Νέο παράσημο!'],
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
  coins:['Coins','Νομίσματα'],
  resetG:['Reset','Μηδένισε'],resetYes:['Yes, reset','Ναι, μηδένισε'],
  voiceL:['Narrator voice','Φωνή αφηγήτριας'],vtest:['Try it','Δοκίμασε'],noVoice:['No voice found on this device','Δεν βρέθηκε φωνή σε αυτή τη συσκευή'],
  voiceTip:['For a warmer voice: on iPad go to Settings → Accessibility → Spoken Content → Voices → English and download an "Enhanced" or "Premium" voice. On Android: Settings → Text-to-speech → Google → install voice data. Then pick it here.','Για πιο ζεστή φωνή: σε iPad πηγαίνετε Ρυθμίσεις → Προσβασιμότητα → Εκφωνούμενο περιεχόμενο → Φωνές → Ελληνικά και κατεβάστε τη «Μελίνα (Βελτιωμένη)». Σε Android: Ρυθμίσεις → Μετατροπή κειμένου σε ομιλία → Google → εγκατάσταση δεδομένων φωνής για Ελληνικά. Μετά διαλέξτε τη φωνή εδώ.'],

  locked:['Locked','Κλειδωμένο'],open:['Open it!','Άνοιξέ το!'],
  gateCoins:(g,c)=>[`${g} opens for ${c} coins.`,`«${g}»: ανοίγει με ${c} νομίσματα.`],
  gateBadges:(g,c)=>[`${g} opens when you have ${c} badges.`,`«${g}»: ανοίγει όταν έχεις ${c} παράσημα.`],
  youHave:(n,w)=>[`You have ${n}.`,`Έχεις ${n}.`],
stars:['Stars','Αστέρια']
};
const t=(k,...a)=>{const v=TX[k];return tr(typeof v==='function'?v(...a):v)};
const SAY={
  welcome:n=>[`Kalimera, ${n}! Welcome to the island. Tap a place to play!`,`Καλημέρα, ${vocEl(n)}! Καλώς ήρθες στο νησί. Πάτα ένα μέρος για να παίξεις!`],
  hero:h=>[`${h.name[0]}! ${h.trait[0]}. And ${h.petName[0]}!`,`${h.name[1]}! ${h.trait[1]}! Μαζί με ${h.petAcc}!`],
  pick:g=>[`${g.name[0]}. Let's learn ${g.skill[0]}! Pick a level.`,`${g.name[1]}! Διάλεξε επίπεδο.`],
  result:(n,s,c,b)=>[`Bravo ${n}! You got ${s} ${s===1?'star':'stars'} and ${c} coins!${b?' And a new badge!':''}`,`Μπράβο ${vocEl(n)}! Κέρδισες ${numEl(s,'n')} ${s===1?'αστέρι':'αστέρια'} και ${numEl(c,'n')} νομίσματα!${b?' Και ένα νέο παράσημο!':''}`],
  memory:['Find the matching sea friends. Tap two cards!','Βρες τους ίδιους θαλασσινούς φίλους. Πάτα δύο κάρτες!'],
  match:[['A match!','Great memory!','Two the same!'],['Ζευγάρι!','Τι μνήμη!','Ίδια!']],
  wow:n=>[`Wow! ${n}!`,`Ουάου! ${n}!`]
};
const sayL=v=>say(tr(v));
const NUM_EL=['μηδέν','ένα','δύο','τρία','τέσσερα','πέντε','έξι','επτά','οκτώ','εννιά','δέκα','έντεκα','δώδεκα','δεκατρία','δεκατέσσερα','δεκαπέντε','δεκαέξι','δεκαεπτά','δεκαοκτώ','δεκαεννιά','είκοσι'];
// number words agree with the noun: μία ελιά, τρεις ελιές, τρία ψάρια
function numEl(n,g){if(n>20)return String(n);
  if(g==='f'){if(n===1)return 'μία';if(n===3)return 'τρεις';if(n===4)return 'τέσσερις';if(n===13)return 'δεκατρείς';if(n===14)return 'δεκατέσσερις'}
  return NUM_EL[n]}
// στην before vowels and κ π τ ξ ψ (and μπ ντ γκ τσ τζ), otherwise στη
const stin=w=>/^([αάεέηήιίοόυύωώ]|[κπτξψ]|μπ|ντ|γκ|τσ|τζ)/i.test(w)?'στην '+w:'στη '+w;
// Greek vocative for names: Ηρακλής→Ηρακλή, Γιώργος→Γιώργο, Αλέξανδρος→Αλέξανδρε
function vocEl(name){
  const h=Object.values(HEROES).find(x=>x.name[1]===name);if(h)return h.voc;
  if(!/[α-ωά-ώ]ς$/i.test(name))return name;
  if(!/ος$/.test(name))return name.slice(0,-1);
  if(/ιος$/.test(name))return name.slice(0,-2)+'ε';
  const v=name.toLowerCase().replace(/ι(?=[αάεέοόωώουύ])/g,'').match(/(α[ιί]|ε[ιί]|ο[ιί]|ο[υύ]|α[υύ]|ε[υύ]|[αάεέηήιίϊΐοόυύϋΰωώ])/g)||[];
  const acc=v.findIndex(x=>/[άέήίΐόύΰώ]/.test(x));
  return name.slice(0,-2)+(acc>=0&&v.length-acc>=3?'ε':'ο');
}

/* ---------- state ---------- */
const KEY='little-hero-olympus-v1';
const fresh=()=>({v:2,started:false,name:'',lang:'en',hero:'athena',skin:0,coins:5,owned:[],unlocked:[],equip:{head:null,cape:null,hand:null,feet:null},stars:Object.fromEntries(GAMES.map(g=>[g.id,g.levels.map(()=>0)])),badges:[],music:true,sound:true,voice:{},updatedAt:0});
function normalize(s){const f=fresh();s=Object.assign(f,s||{});s.equip=Object.assign(fresh().equip,s.equip||{});s.stars=Object.assign(fresh().stars,s.stars||{});GAMES.forEach(g=>{const a=s.stars[g.id];s.stars[g.id]=g.levels.map((_,i)=>a[i]||0)});return s}
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

/* ---------- blocky drawing helpers ---------- */
const shade=(hex,a)=>{const n=parseInt(hex.slice(1),16),f=v=>Math.max(0,Math.min(255,Math.round(a>0?v+(255-v)*a:v*(1+a))));return '#'+((1<<24)|(f(n>>16)<<16)|(f(n>>8&255)<<8)|f(n&255)).toString(16).slice(1)};
// an oblique block: front face, lighter top, darker right side
function cube(x,y,w,h,d,c){const k=d*.6;return `<path d="M${x} ${y}l${d} ${-k}h${w}l${-d} ${k}z" fill="${shade(c,.3)}"/><path d="M${x+w} ${y}l${d} ${-k}v${h}l${-d} ${k}z" fill="${shade(c,-.28)}"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/>`}

/* ---------- avatar (blocky figure) ---------- */
function avatar(heroId,skinIdx,equip,cls='avatar'){
  const h=HEROES[heroId]||HEROES.athena, sk=SKINS[skinIdx]||SKINS[0], e=equip||{};
  const cape=ITEMS.find(i=>i.id===e.cape),legC=shade(h.trim==='#ffffff'?h.tunic:h.trim,-.15);
  let o=`<svg class="${cls}" viewBox="0 -14 200 276" xmlns="http://www.w3.org/2000/svg"><g stroke="rgba(0,0,0,.16)" stroke-width="1.2" stroke-linejoin="round">`;
  if(cape)o+=cube(50,92,100,134,10,cape.color);
  if(h.style==='long')o+=cube(58,18,84,102,12,h.hair);
  if(h.style==='pony')o+=cube(142,26,20,58,8,h.hair);
  // legs and shoes
  o+=cube(64,172,34,62,8,legC)+cube(102,172,34,62,8,legC)+cube(62,228,38,12,8,'#6d4c2f')+cube(100,228,38,12,8,'#6d4c2f');
  if(e.feet==='sandals')o+=`<rect x="48" y="222" width="14" height="8" fill="#fff"/><rect x="40" y="214" width="12" height="8" fill="#fff"/><rect x="146" y="222" width="14" height="8" fill="#fff"/><rect x="156" y="214" width="12" height="8" fill="#fff"/>`;
  // left arm, body, right arm
  o+=cube(32,96,26,52,8,h.tunic)+cube(32,146,26,24,8,sk);
  o+=cube(58,94,84,80,12,h.tunic)+`<rect x="58" y="160" width="84" height="14" fill="${h.trim}"/><rect x="58" y="130" width="84" height="8" fill="#a8742c"/><rect x="66" y="98" width="10" height="10" fill="#f2b632"/><rect x="124" y="98" width="10" height="10" fill="#f2b632"/>`;
  o+=cube(154,96,26,52,8,h.tunic)+cube(154,146,26,24,8,sk);
  // head and face
  o+=cube(66,22,68,66,12,sk);
  o+=`<rect x="84" y="44" width="10" height="14" rx="2" fill="#1c2a48"/><rect x="106" y="44" width="10" height="14" rx="2" fill="#1c2a48"/><rect x="86" y="46" width="4" height="4" fill="#fff" stroke="none"/><rect x="108" y="46" width="4" height="4" fill="#fff" stroke="none"/>
  <rect x="72" y="62" width="10" height="6" fill="#ff8a8a" opacity=".5" stroke="none"/><rect x="118" y="62" width="10" height="6" fill="#ff8a8a" opacity=".5" stroke="none"/>
  <path d="M86 68Q100 80 114 68" stroke="#1c2a48" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  // hair on top
  if(h.style==='curly')o+=cube(62,10,76,20,12,h.hair)+cube(64,4,18,8,6,shade(h.hair,.12))+cube(90,2,18,8,6,shade(h.hair,.12))+cube(116,4,18,8,6,shade(h.hair,.12));
  else o+=cube(62,12,76,20,12,h.hair)+`<rect x="62" y="30" width="10" height="${h.style==='long'?40:16}" fill="${h.hair}"/><rect x="128" y="30" width="10" height="${h.style==='long'?40:16}" fill="${h.hair}"/>`;
  if(h.style==='pony')o+=`<rect x="140" y="22" width="10" height="10" fill="#f2b632"/>`;
  // hats
  if(e.head==='laurel')for(let i=0;i<6;i++)o+=cube(58+i*14,i===0||i===5?18:12,12,10,6,i%2?'#6f9f45':'#4f7f2f');
  if(e.head==='helmet')o+=cube(60,6,80,36,12,'#c98b2b')+`<rect x="95" y="42" width="10" height="20" fill="#c98b2b"/>`+cube(78,-6,44,12,10,'#d63a2f');
  if(e.head==='wingcap')o+=`<rect x="40" y="12" width="22" height="9" fill="#fff"/><rect x="30" y="4" width="18" height="9" fill="#fff"/><rect x="146" y="12" width="22" height="9" fill="#fff"/><rect x="160" y="4" width="18" height="9" fill="#fff"/>`+cube(62,6,76,20,12,'#d9b25c')+cube(54,24,92,6,12,'#c49a3f');
  if(e.head==='crown')o+=`<rect x="64" y="-6" width="10" height="12" fill="#f2b632"/><rect x="95" y="-10" width="10" height="16" fill="#f2b632"/><rect x="126" y="-6" width="10" height="12" fill="#f2b632"/>`+cube(64,4,72,16,10,'#f2b632')+`<rect x="96" y="8" width="8" height="8" fill="#e53935"/><rect x="74" y="8" width="7" height="7" fill="#1e6fd9"/><rect x="119" y="8" width="7" height="7" fill="#1e6fd9"/>`;
  // things held
  if(e.hand==='shield')o+=cube(12,126,46,54,6,'#c98b2b')+`<rect x="20" y="134" width="30" height="38" fill="#2f6fd6"/><rect x="24" y="142" width="9" height="9" fill="#fff"/><rect x="37" y="142" width="9" height="9" fill="#fff"/><rect x="27" y="145" width="4" height="4" fill="#1c2a48"/><rect x="40" y="145" width="4" height="4" fill="#1c2a48"/><rect x="32" y="156" width="6" height="6" fill="#f2b632"/>`;
  if(e.hand==='olive')o+=`<rect x="165" y="98" width="6" height="66" fill="#7a5a2a"/>`+[[155,104],[173,114],[153,124],[173,136],[157,144]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="7" fill="#7fa65a"/>`).join('')+`<rect x="160" y="116" width="6" height="6" fill="#3d4f1f"/><rect x="171" y="128" width="6" height="6" fill="#3d4f1f"/>`;
  if(e.hand==='lyre')o+=`<rect x="154" y="104" width="7" height="60" fill="#f2b632"/><rect x="179" y="104" width="7" height="60" fill="#f2b632"/><rect x="154" y="104" width="32" height="7" fill="#c98a12"/><rect x="150" y="160" width="40" height="7" fill="#c98a12"/><path d="M165 111V160M170 111V160M175 111V160" stroke="#fff3c9" stroke-width="2"/>`;
  if(e.hand==='torch')o+=`<rect x="163" y="108" width="9" height="60" fill="#8a5a2b"/>`+cube(157,100,21,10,6,'#f2b632')+cube(158,80,18,20,6,'#ff8c1a')+`<rect x="163" y="86" width="8" height="12" fill="#ffe14a" stroke="none"/>`;
  return o+'</g></svg>';
}
const avatarImage=()=>{const img=new Image();img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(avatar(S.hero,S.skin,S.equip,''));return img};


/* ---------- scene houses ---------- */
(function(){const hs=[[40,520,70,60],[120,500,60,70],[190,525,80,55],[275,540,60,50],[90,575,90,60],[200,585,70,55],[300,590,80,60],[400,600,70,55],[30,630,80,60]];
  document.getElementById('houses').innerHTML='<g stroke="rgba(0,0,0,.12)">'+hs.map(([x,y,w,hh],i)=>cube(x,y,w,hh,16,'#ffffff')+(i%3===0?cube(x+w*.2,y-22,w*.6,14,12,'#2f6fd6'):'')+`<rect x="${x+w*.2}" y="${y+hh*.35}" width="${w*.18}" height="${hh*.3}" fill="#2f6fd6"/><rect x="${x+w*.6}" y="${y+hh*.35}" width="${w*.18}" height="${hh*.4}" fill="#2f6fd6"/>`).join('')+'</g>'})();

/* ---------- audio ---------- */
let ac=null,sfxG,musG,musicTimer=null,step=0,nextT=0;
function initAudio(){
  try{
    if(!ac){ac=new (window.AudioContext||window.webkitAudioContext)();
      const m=ac.createGain();m.gain.value=.75;m.connect(ac.destination);
      const lp1=ac.createBiquadFilter();lp1.type='lowpass';lp1.frequency.value=3000;lp1.connect(m);
      const lp2=ac.createBiquadFilter();lp2.type='lowpass';lp2.frequency.value=1600;lp2.connect(m);
      sfxG=ac.createGain();sfxG.gain.value=.32;sfxG.connect(lp1);
      musG=ac.createGain();musG.gain.value=.07;musG.connect(lp2);
      const d=ac.createDelay();d.delayTime.value=.33;const fb=ac.createGain();fb.gain.value=.28;musG.connect(d);d.connect(fb);fb.connect(d);d.connect(m);}
    if(ac.state==='suspended')ac.resume();
    if(S.music)startMusic();
  }catch(e){}
}
const mtof=n=>440*Math.pow(2,(n-69)/12);
function tone(f,t,dur,dest,type='triangle',vol=.6,glide){
  const o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(glide)o.frequency.exponentialRampToValueAtTime(glide,t+dur);
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.025);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(g);g.connect(dest);o.start(t);o.stop(t+dur+.05);
}
// A gentle Greek-flavoured tune in D minor, plucked like a bouzouki
const MEL=[62,65,69,69,67,65,64,62,64,67,70,69,67,65,64,0, 69,72,74,72,70,69,67,65,64,65,67,64,62,0,62,0];
function startMusic(){if(!ac||musicTimer)return;nextT=ac.currentTime+.1;musicTimer=setInterval(()=>{
  while(nextT<ac.currentTime+.5){const n=MEL[step%MEL.length];if(n){tone(mtof(n),nextT,.9,musG,'sine',.5);tone(mtof(n+12),nextT,.5,musG,'sine',.08)}
    if(step%4===0)tone(mtof(step%8===0?50:45),nextT,1.6,musG,'sine',.45);
    step++;nextT+=.38}},120)}
function stopMusic(){clearInterval(musicTimer);musicTimer=null}
function sfx(kind){
  if(!ac||!S.sound)return;const t=ac.currentTime+.01;
  if(kind==='tap')tone(660,t,.12,sfxG,'sine',.22);
  if(kind==='flip')tone(520,t,.2,sfxG,'sine',.2,700);
  if(kind==='good')[72,76,79].forEach((n,i)=>{tone(mtof(n),t+i*.09,.6,sfxG,'sine',.4);tone(mtof(n+12),t+i*.09,.3,sfxG,'sine',.06)});
  if(kind==='bad')tone(330,t,.35,sfxG,'sine',.22,262);
  if(kind==='coin'){tone(1319,t,.3,sfxG,'sine',.16);tone(1760,t+.08,.45,sfxG,'sine',.13)}
  if(kind==='win')[60,64,67,72,76,79].forEach((n,i)=>{tone(mtof(n),t+i*.13,i===5?1.4:.6,sfxG,'sine',.38);tone(mtof(n+12),t+i*.13,.4,sfxG,'sine',.05)});
}
// Narrator: picks an English or Greek voice to match the chosen language
const voices={};
const langVoices=lang=>('speechSynthesis' in window?speechSynthesis.getVoices():[]).filter(v=>lang==='el'?/^el/i.test(v.lang):/^en/i.test(v.lang));
// Prefer natural/enhanced voices and warm female narrators (Melina, Athina, Sonia, Libby…)
function voiceScore(v){let s=0;const n=v.name;
  if(/natural|neural|premium|enhanced|online|siri/i.test(n))s+=10;
  if(/google/i.test(n))s+=5;
  if(/melina|athina|μελίνα|αθηνά|sonia|libby|serena|samantha|martha|kate|female/i.test(n))s+=4;
  if(/compact|espeak/i.test(n))s-=8;
  if(/en[-_]GB/i.test(v.lang))s+=1;return s}
function findVoice(lang){
  const vs=langVoices(lang),want=S.voice&&S.voice[lang];
  return vs.find(v=>v.name===want)||vs.sort((a,b)=>voiceScore(b)-voiceScore(a))[0]||null;
}
if('speechSynthesis' in window)speechSynthesis.onvoiceschanged=()=>{delete voices.en;delete voices.el};
let utter=null;
function say(text){return new Promise(res=>{
  if(!S.sound||!('speechSynthesis' in window))return res();
  try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);const L=S.lang;
    if(!voices[L])voices[L]=findVoice(L);
    if(voices[L])u.voice=voices[L];u.lang=voices[L]?voices[L].lang:(L==='el'?'el-GR':'en-GB');u.rate=.92;u.pitch=1.05;
    let done=false;const fin=()=>{if(!done){done=true;res()}};u.onend=fin;u.onerror=fin;setTimeout(fin,1500+text.length*120);
    utter=u;speechSynthesis.speak(u)}catch(e){res()}
})}
const wait=ms=>new Promise(r=>setTimeout(r,ms));

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

/* ---------- map art (blocks) ---------- */
const svgArt=inner=>`<svg class="art" viewBox="0 0 100 100"><g stroke="rgba(0,0,0,.15)" stroke-width=".8" stroke-linejoin="round">${inner}</g></svg>`;
const ART={
  count:svgArt(cube(44,58,12,32,6,'#7a5a2a')+cube(22,36,26,22,10,'#7fa65a')+cube(46,26,28,24,10,'#8fbf62')+cube(34,14,26,18,10,'#9cc46b')+[[28,42],[52,32],[62,44],[40,20]].map(([x,y])=>`<rect x="${x}" y="${y}" width="6" height="6" fill="#3d4f1f"/>`).join('')),
  letters:svgArt(cube(8,84,80,8,8,'#e6dcc4')+[14,32,50,68].map(x=>cube(x,42,12,42,5,'#fffaf0')).join('')+cube(8,30,80,12,8,'#f1e9d8')+cube(20,20,56,10,8,'#f1e9d8')+`<text x="48" y="40" text-anchor="middle" font-family="Ubuntu,sans-serif" font-weight="700" font-size="10" fill="#2f6fd6" stroke="none">ΑΒΓ</text>`),
  sizes:svgArt(cube(6,70,80,20,10,'#8f9db2')+cube(16,50,60,20,10,'#a3b0c2')+cube(26,32,40,18,10,'#b8c3d2')+cube(34,20,24,12,8,'#ffffff')+cube(62,4,10,10,4,'#f2b632')+cube(56,14,10,10,4,'#f2b632')),
  shapes:svgArt(cube(14,48,66,40,10,'#c8a46a')+[0,1,2,3,4].map(i=>cube(10+i*14.8,32,14.8,14,10,i%2?'#ffffff':'#2f6fd6')).join('')+cube(20,56,14,14,5,'#e53935')+cube(42,56,14,14,5,'#fbc02d')+cube(62,56,12,14,5,'#43a047')),
  odd:svgArt(cube(6,60,82,24,10,'#d9643b')+`<rect x="16" y="64" width="62" height="16" fill="#7fb45a"/><rect x="16" y="70" width="62" height="3" fill="#fff"/>`+`<rect x="46" y="22" width="4" height="40" fill="#7a5a2a"/><rect x="50" y="22" width="18" height="12" fill="#2f6fd6"/>`),
  pattern:svgArt(cube(30,84,40,8,6,'#a54d2a')+cube(24,56,52,28,8,'#c8643b')+`<rect x="24" y="66" width="52" height="7" fill="#1c2a48"/>`+cube(30,40,40,16,8,'#c8643b')+cube(40,24,20,16,6,'#c8643b')+cube(36,16,28,8,6,'#a54d2a')),
  compare:svgArt(cube(16,82,64,10,8,'#8f9db2')+[0,1,2,3].map(i=>cube(32,66-i*14,30,14,8,i%2?'#2f6fd6':'#ffffff')).join('')+cube(30,12,34,12,8,'#ffe14a')+cube(28,4,38,8,8,'#c8643b')),
  memory:svgArt(cube(16,66,64,16,10,'#c8643b')+`<rect x="46" y="14" width="4" height="52" fill="#7a5a2a"/>`+cube(52,18,26,40,4,'#ffffff')+`<rect x="56" y="28" width="18" height="5" fill="#2f6fd6"/><rect x="56" y="40" width="18" height="5" fill="#2f6fd6"/>`+`<rect x="4" y="88" width="16" height="5" fill="#fff"/><rect x="40" y="90" width="16" height="5" fill="#fff"/><rect x="76" y="88" width="16" height="5" fill="#fff"/>`),
  puzzle:svgArt(cube(6,40,84,50,12,'#7d8899')+cube(16,22,60,18,12,'#8f9db2')+`<rect x="34" y="58" width="28" height="32" fill="#1c2a48"/><text x="48" y="84" text-anchor="middle" font-family="Ubuntu,sans-serif" font-weight="700" font-size="22" fill="#f2b632" stroke="none">?</text>`),
  music:svgArt(cube(6,74,84,16,10,'#b98d63')+cube(14,60,68,14,10,'#d7b48e')+cube(24,48,48,12,10,'#e9cfa8')+cube(34,38,28,10,8,'#f6ead2')+`<rect x="58" y="6" width="5" height="26" fill="#1c2a48"/><rect x="58" y="6" width="18" height="6" fill="#1c2a48"/><rect x="50" y="28" width="12" height="9" fill="#1c2a48"/><rect x="72" y="6" width="4" height="22" fill="#1c2a48"/><rect x="64" y="24" width="12" height="9" fill="#1c2a48"/>`)
};
// The island is a baseplate of studded blocks
function islandTiles(){
  let o='';const T=34;
  const inside=(x,y,cx,cy,rx,ry)=>{const a=Math.atan2(y-cy,x-cx),w=1+.07*Math.sin(3*a)+.04*Math.cos(5*a);return ((x-cx)/rx)**2+((y-cy)/ry)**2<w*w};
  for(let y=T/2;y<700;y+=T)for(let x=T/2;x<1000;x+=T){
    let col=null;
    if(inside(x,y,515,330,400,265))col=inside(x,y,515,330,350,222)?((x/T+y/T)%2<1?'#7cc35a':'#74bb52'):'#f0d79c';
    else if(inside(x,y,910,150,92,40))col='#9aa7b8';
    if(col)o+=`<rect x="${x-T/2}" y="${y-T/2}" width="${T}" height="${T}" fill="${col}"/><circle cx="${x}" cy="${y}" r="7" fill="${shade(col,.18)}"/><circle cx="${x}" cy="${y+1.5}" r="7" fill="none" stroke="${shade(col,-.15)}" stroke-width="1.5" opacity=".6"/>`;
  }
  return o;
}
const MAP_SVG=`<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="mSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3aa0e8"/><stop offset="1" stop-color="#1665b0"/></linearGradient></defs>
<rect width="1000" height="700" fill="url(#mSea)"/>
<g fill="#bfe6ff" opacity=".5">${[[60,80],[880,260],[300,650],[640,660],[920,420],[40,520]].map(([x,y])=>`<rect x="${x}" y="${y}" width="26" height="6"/><rect x="${x+20}" y="${y-6}" width="18" height="6"/>`).join('')}</g>
${islandTiles()}
<g fill="#e3c27e">${[[190,280,370,150],[380,150,630,120],[650,130,820,290],[200,300,290,470],[310,470,520,340],[540,330,800,300]].map(([a,b,c,d])=>{let s='';for(let t=0;t<=1;t+=.07)s+=`<rect x="${(a+(c-a)*t-6).toFixed(0)}" y="${(b+(d-b)*t-6).toFixed(0)}" width="12" height="12"/>`;return s}).join('')}</g>
<g stroke="rgba(0,0,0,.15)" stroke-width="1">${[[440,500],[480,480],[520,505],[470,530],[510,540],[550,520]].map(([x,y],i)=>cube(x,y,30,26,10,'#ffffff')+(i%2?'':cube(x+7,y-10,16,8,6,'#2f6fd6'))+`<rect x="${x+11}" y="${y+10}" width="8" height="16" fill="#2f6fd6"/>`).join('')}
${[[260,230],[480,230],[760,230],[800,380],[200,400],[600,460]].map(([x,y])=>cube(x-4,y,8,14,4,'#7a5a2a')+cube(x-14,y-22,28,22,8,'#5f9e3c')).join('')}</g>
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
  if(ac&&S.music&&!(ui.screen==='game'&&run&&run.g==='music'))startMusic();
  document.documentElement.lang=S.lang;
  const s=ui.screen;
  if(s==='welcome')app.innerHTML=welcomeHTML();
  if(s==='map')app.innerHTML=`<div class="screen">${topbar()}<div class="map-wrap"><div class="map">${MAP_SVG}${GAMES.map(g=>{const st=S.stars[g.id].reduce((a,b)=>a+b,0),open=isOpen(g);
      const chip=open?`★ ${st}/${g.levels.length*3}`:g.gate.coins?`🔒 ${g.gate.coins} ${I.coin}`:`🔒 ${g.gate.badges} 🏅`;
      return `<button class="loc ${open?'':'locked'}" data-act="open" data-g="${g.id}" style="left:${g.x}%;top:${g.y}%" aria-label="${tr(g.name)}">${ART[g.id]}<span class="tag">${tr(g.name)}<small>${chip}</small></span></button>`}).join('')}</div></div>
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
    <div style="overflow-x:auto"><table><thead><tr><th>${t('place')}</th><th>${t('teaches')}</th>${[1,2,3,4,5,6,7,8].map(i=>`<th>${i}</th>`).join('')}<th></th></tr></thead><tbody>
    ${GAMES.map(g=>`<tr><td><b>${tr(g.name)}</b></td><td>${tr(TEACH[g.id])}</td>${[0,1,2,3,4,5,6,7].map(i=>`<td>${i<g.levels.length?(S.stars[g.id][i]?'★'.repeat(S.stars[g.id][i]):'–'):''}</td>`).join('')}<td>${S.stars[g.id].some(x=>x)?(ui.confirmG===g.id?`<button class="btn small" style="background:var(--bad);color:#fff;box-shadow:0 5px 0 #a33;white-space:nowrap" data-act="resetg2" data-g="${g.id}">${t('resetYes')}</button>`:`<button class="btn small white" style="white-space:nowrap" data-act="resetg" data-g="${g.id}">↺ ${t('resetG')}</button>`):''}</td></tr>`).join('')}
    </tbody></table></div>
    <div class="row" style="justify-content:flex-start"><label for="vsel"><b>${t('voiceL')}</b></label><select id="vsel" class="name-in" style="text-align:left;width:auto;max-width:100%">${(()=>{const vs=langVoices(S.lang),cur=findVoice(S.lang);return vs.length?vs.map(v=>`<option ${cur&&cur.name===v.name?'selected':''}>${esc(v.name)}</option>`).join(''):`<option>${t('noVoice')}</option>`})()}</select><button class="btn small blue" data-act="vtest">▶ ${t('vtest')}</button></div>
    <p style="color:var(--ink-soft)">${t('voiceTip')}</p>
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
  if(m.type==='gate'){const g=GAMES.find(x=>x.id===m.g),c=g.gate.coins,need=c||g.gate.badges,have=c?S.coins:S.badges.length,ok=have>=need;
    h=`<h2>${tr(g.name)}</h2><div style="width:160px;margin:0 auto;filter:grayscale(.6)">${ART[g.id]}</div>
    <div class="earn">🔒 ${c?`${c} ${I.coin}`:`${need} 🏅`}</div>
    <p class="sub">${c?t('gateCoins',tr(g.name),c):t('gateBadges',tr(g.name),need)} ${t('youHave',have)}</p>
    <div class="row"><button class="btn white" data-act="close">${t('backIsland')}</button>${ok?`<button class="btn" data-act="unlock" data-g="${g.id}">${t('open')}</button>`:''}</div>`}
  if(m.type==='result'){const g=GAMES.find(x=>x.id===m.g),h0=HEROES[S.hero];
    h=`<h2>${pick(t('bravo'))}</h2>${starsRow(m.stars,true)}
    <div class="row">${avatar(S.hero,S.skin,S.equip).replace('class="avatar"','class="avatar" style="width:120px;height:auto"')}<span class="pet" style="font-size:3.4rem">${h0.pet}</span></div>
    <div class="earn">+${m.coins} ${I.coin}</div>
    ${m.newBadges.length?`<div><b style="font-family:var(--display);font-size:1.3rem">${t('newBadge')}</b><div class="row" style="margin-top:8px">${m.newBadges.map(id=>{const b=BADGES.find(x=>x.id===id);return `<div class="badge" style="box-shadow:none;background:none"><div class="medal">${b.icon}</div><b>${tr(b.name)}</b></div>`}).join('')}</div></div>`:''}
    <div class="row"><button class="btn white" data-act="close">${t('island')}</button><button class="btn blue" data-act="play" data-g="${g.id}" data-l="${m.l}">${t('playAgain')}</button>${m.l<g.levels.length-1?`<button class="btn" data-act="play" data-g="${g.id}" data-l="${m.l+1}">${t('next')}</button>`:''}</div>`}
  const d=document.createElement('div');d.className='veil';d.innerHTML=`<div class="modal" role="dialog" aria-modal="true">${h}</div>`;document.body.appendChild(d);
}

/* ---------- question generators ---------- */
// Each returns {text, say, stage?, options:[{html, ok, say?, after?, rank?}], big?, order?}
function numOpts(n,k,min,max){const s=new Set([n]);let guard=0;while(s.size<k&&guard++<99){const v=n+rand(-3,3);if(v>=min&&v<=max)s.add(v)}return [...s].sort((a,b)=>a-b)}
const olivesEl=n=>n===1?'μία ελιά':`${numEl(n,'f')} ελιές`;
function oliveBranch(n){
  let o=`<svg viewBox="0 0 420 230"><path d="M10 64Q200 20 410 70" stroke="#7a5a2a" stroke-width="12" fill="none" stroke-linecap="round"/>`;
  for(let i=0;i<9;i++){const x=40+i*44,y=48+Math.sin(i)*6;o+=`<ellipse cx="${x}" cy="${y-14}" rx="7" ry="20" fill="#8fb36a" transform="rotate(${i%2?50:-50} ${x} ${y})"/>`}
  for(let i=0;i<n;i++){const x=30+(i+.5)*(360/n),y=n>5?(i%2?160:118):135;o+=`<g class="olive" data-act="olive"><path d="M${x} ${y-20}L${x} 58" stroke="#7a5a2a" stroke-width="3"/><ellipse class="body" cx="${x}" cy="${y}" rx="17" ry="22" fill="#4a5d23"/><ellipse cx="${x-6}" cy="${y-8}" rx="4" ry="6" fill="#fff" opacity=".35"/><text x="${x}" y="${y+7}" text-anchor="middle"></text></g>`}
  return o+'</svg>';
}
function bowls(a,b){
  const bowl=(cx,n)=>{let s=`<path d="M${cx-80} 120H${cx+80}Q${cx+70} 190 ${cx} 192Q${cx-70} 190 ${cx-80} 120Z" fill="#c8643b"/><path d="M${cx-74} 150H${cx+74}" stroke="#1c2a48" stroke-width="5" stroke-dasharray="10 6"/>`;
    for(let i=0;i<n;i++){const x=cx-50+(i%3)*50,y=100-Math.floor(i/3)*38;s+=`<g class="olive" data-act="olive"><ellipse class="body" cx="${x}" cy="${y}" rx="17" ry="21" fill="#4a5d23"/><ellipse cx="${x-6}" cy="${y-8}" rx="4" ry="6" fill="#fff" opacity=".35"/><text x="${x}" y="${y+7}" text-anchor="middle"></text></g>`}return s};
  return `<svg viewBox="0 0 520 210">${bowl(120,a)}<text x="260" y="150" text-anchor="middle" font-family="Ubuntu,sans-serif" font-weight="700" font-size="70" fill="#0f4f8f">+</text>${bowl(400,b)}</svg>`;
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
    band+=`<g transform="translate(${14+show*cell} 24)"><rect width="48" height="48" rx="10" fill="#fffaf0" stroke="#1c2a48" stroke-width="3" stroke-dasharray="6 4"/><text x="24" y="37" text-anchor="middle" font-family="Ubuntu,sans-serif" font-weight="700" font-size="34" fill="#1c2a48">?</text></g></svg>`;
    return {text:tr(['What comes next?','Τι ακολουθεί;']),say:tr(['Look at the pattern on the vase. What comes next?','Κοίτα το μοτίβο στο βάζο. Τι ακολουθεί;']),stage:`<div style="width:min(100%,720px)">${band}</div>`,options:shuffle(uniq.slice(0,3)).map(u=>({html:shapeSVG(u[0],u[1]),ok:u[0]===ans[0]&&u[1]===ans[1]}))};
  },
  compare(l){
    if(l<2){let a,b;do{a=rand(1,7);b=rand(1,7)}while(Math.abs(a-b)<(l?1:2));
      const n=l?Math.min(a,b):Math.max(a,b),fish=pick(['🐟','🐠','🐡']);
      const boat=k=>`<div class="boat"><div class="fish">${fish.repeat(k)}</div>${hullSVG}</div>`;
      return {text:tr(l?['Which boat has fewer fish?','Ποια βάρκα έχει λιγότερα ψάρια;']:['Which boat has more fish?','Ποια βάρκα έχει περισσότερα ψάρια;']),
        say:tr(l?['Which fishing boat has fewer fish?','Ποια βάρκα έχει λιγότερα ψάρια;']:['Which fishing boat has more fish?','Ποια βάρκα έχει περισσότερα ψάρια;']),
        options:[a,b].map(k=>({html:boat(k),ok:k===n,after:tr([`${k} fish! ${l?'Fewer':'More'}!`,`${k===1?'Ένα ψάρι':numEl(k,'n')+' ψάρια'}! ${l?'Λιγότερα':'Περισσότερα'}!`])}))}}
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

/* ---------- puzzles (Riddle Cave) ---------- */
const PZ_TEXT={
  maze:{text:['Find the way out!','Βρες την έξοδο!'],say:['This is the labyrinth of the Minotaur. Put your finger on your hero and drag it along the paths to the door!','Αυτός είναι ο λαβύρινθος του Μινώταυρου. Βάλε το δάχτυλο πάνω στον ήρωα και σύρε τον στους διαδρόμους μέχρι την πόρτα!']},
  mazeMino:{text:['Watch out for the Minotaur!','Πρόσεχε τον Μινώταυρο!'],say:['The Minotaur is awake and walking around! Find the key, then the door, and do not let him catch you!','Ο Μινώταυρος ξύπνησε και περπατάει! Βρες το κλειδί και μετά την πόρτα, και μην τον αφήσεις να σε πιάσει!']},
  mazeKey:{text:['Key first, then the door!','Πρώτα το κλειδί, μετά η πόρτα!'],say:['The door is locked. Drag your hero to the key first, then to the door!','Η πόρτα είναι κλειδωμένη. Σύρε τον ήρωα πρώτα στο κλειδί και μετά στην πόρτα!']},
  hanoi:{text:['Move the tower to the ⭐ column','Μετέφερε τον πύργο στην κολόνα με το ⭐'],say:['Move all the discs to the column with the star. Tap a column to lift its top disc, then tap where to put it. A big disc can never go on a small one!','Μετέφερε όλους τους δίσκους στην κολόνα με το αστέρι. Πάτα μια κολόνα για να σηκώσεις τον πάνω δίσκο και μετά πάτα πού θα τον βάλεις. Ο μεγάλος δίσκος δεν μπαίνει ποτέ πάνω στον μικρό!']},
  river:{text:['Take everyone across the river!','Πέρασέ τους όλους απέναντι!'],say:['Take the wolf, the sheep and the grass to the other side. The boat has room for only one, plus you. If you leave the wolf alone with the sheep, the wolf eats the sheep. If you leave the sheep alone with the grass, the sheep eats the grass! Tap one to put it in the boat, then tap Cross.','Πέρασε τον λύκο, το πρόβατο και το χόρτο στην απέναντι όχθη. Η βάρκα χωράει μόνο έναν μαζί σου. Αν μείνουν μόνοι τους ο λύκος με το πρόβατο, ο λύκος τρώει το πρόβατο. Αν μείνουν μόνοι τους το πρόβατο με το χόρτο, το πρόβατο τρώει το χόρτο! Πάτα έναν για να μπει στη βάρκα και μετά πάτα «Πέρνα απέναντι».']}
};
const RIVER=[['wolf','🐺',['the wolf','τον λύκο'],['Wolf!','Ο λύκος!']],['sheep','🐑',['the sheep','το πρόβατο'],['Sheep!','Το πρόβατο!']],['grass','🌿',['the grass','το χόρτο'],['Grass!','Το χόρτο!']]];
const DISC_COLORS=['#e53935','#fbc02d','#1e6fd9'];
const DISC_NAMES=[['red','κόκκινο'],['yellow','κίτρινο'],['blue','μπλε']];
const ORD=[['first','πρώτη'],['second','δεύτερη'],['third','τρίτη']];

function setupPuzzle(l){
  const c=PUZZLES[l];
  if(c.type==='maze'){run.p=makeMaze(c.n,c.key,c.mino);run.cur=PZ_TEXT[c.mino?'mazeMino':c.key?'mazeKey':'maze'];requestAnimationFrame(mazeLoop)}
  if(c.type==='hanoi'){run.p={type:'hanoi',n:c.n,pegs:[[...Array(c.n)].map((_,i)=>c.n-i),[],[]],sel:null,moves:0,best:2**c.n-1};run.cur=PZ_TEXT.hanoi}
  if(c.type==='river'){run.p={type:'river',side:{wolf:0,sheep:0,grass:0},boat:0,cargo:null,busy:false,oops:null};run.cur=PZ_TEXT.river}
  run.cur={text:tr(run.cur.text),say:tr(run.cur.say)};run.hints=0;
}
function puzzleBody(){
  const p=run.p,hint=`<button class="icon-btn" data-act="pz" data-x="hint" aria-label="Hint" style="font-size:1.7rem">💡</button>`;
  if(p.type==='maze')return mazeBody()+`<div class="row">${hint}</div>`;
  if(p.type==='hanoi')return `<div class="stage"><div class="hanoi">${p.pegs.map((pg,i)=>`<button class="peg ${p.sel===i?'sel':''}" data-act="pz" data-x="peg" data-i="${i}" aria-label="${tr(ORD[i])}"><span class="pole"></span>${pg.map((d,k)=>`<span class="disc ${p.sel===i&&k===pg.length-1?'up':''}" style="width:${34+d*20}%;background:${DISC_COLORS[d-1]}"></span>`).join('')}${i===2?'<span class="flag">⭐</span>':''}</button>`).join('')}</div></div><div class="row">${hint}</div>`;
  const item=([k,e])=>{const inBoat=p.cargo===k,left=inBoat?null:(p.side[k]?79:3),top=12+RIVER.findIndex(x=>x[0]===k)*29;
    return inBoat?'':`<button class="r-it ${p.oops===k?'oops':''}" data-act="pz" data-x="item" data-k="${k}" style="left:${left}%;top:${top}%" aria-label="${tr(RIVER.find(x=>x[0]===k)[2])}">${e}</button>`};
  const cargo=p.cargo?RIVER.find(x=>x[0]===p.cargo):null;
  return `<div class="stage"><div class="river"><span class="goal">🏁</span>${RIVER.map(item).join('')}
    <div class="r-boat" style="left:${p.boat?52:28}%"><div class="r-crew"><span class="mz-hero">${avatar(S.hero,S.skin,S.equip,'')}</span>${cargo?`<button class="r-cargo" data-act="pz" data-x="item" data-k="${cargo[0]}">${cargo[1]}</button>`:''}</div>${hullSVG}</div></div></div>
    <div class="row">${hint}<button class="btn blue" data-act="pz" data-x="row">⛵ ${tr(['Cross','Πέρνα απέναντι'])}</button></div>`;
}
function puzzleAct(b){
  if(!run||!run.p||run.won)return;const x=b.dataset.x,p=run.p;
  if(x==='hint')return puzzleHint();
  if(p.type==='hanoi'&&x==='peg')return hanoiTap(+b.dataset.i);
  if(p.type==='river'){if(x==='item')riverItem(b.dataset.k);if(x==='row')riverRow()}
}
function puzzleWin(){
  const p=run.p;let st;run.won=true;
  if(p.type==='maze')st=(p.moves<=p.best*1.3+2&&!run.mistakes)?3:p.moves<=p.best*2+4?2:1;
  else if(p.type==='hanoi')st=p.moves<=p.best&&!run.mistakes?3:p.moves<=p.best+4?2:1;
  else st=run.mistakes===0?3:run.mistakes<=2?2:1;
  if(run.hints)st=Math.min(st,2);
  sfx('good');burst(innerWidth/2,innerHeight/2,60);setTimeout(()=>finishLevel(st),900);
}

// Labyrinth: random maze carved with depth-first search, drawn as blocks on a canvas and walked with a finger
function mazeNbrs(W,n,c){const r=[];if(!W[c].n)r.push(c-n);if(!W[c].s)r.push(c+n);if(!W[c].e)r.push(c+1);if(!W[c].w)r.push(c-1);return r}
function mazeDist(W,n,from){const d=Array(n*n).fill(-1);d[from]=0;const q=[from];while(q.length){const c=q.shift();for(const k of mazeNbrs(W,n,c))if(d[k]<0){d[k]=d[c]+1;q.push(k)}}return d}
function makeMaze(n,key,mino){
  const W=Array.from({length:n*n},()=>({n:1,e:1,s:1,w:1})),seen=new Set([0]),st=[0];
  while(st.length){const c=st[st.length-1],x=c%n,y=Math.floor(c/n);
    const nb=[[0,-1,'n','s'],[1,0,'e','w'],[0,1,'s','n'],[-1,0,'w','e']].filter(([dx,dy])=>{const X=x+dx,Y=y+dy;return X>=0&&Y>=0&&X<n&&Y<n&&!seen.has(Y*n+X)});
    if(!nb.length){st.pop();continue}
    const [dx,dy,a,b]=pick(nb),k=(y+dy)*n+x+dx;W[c][a]=0;W[k][b]=0;seen.add(k);st.push(k)}
  // with a walking Minotaur, open a few extra doors so there is always a way around him
  if(mino)for(let k=0;k<n;k++){const c=rand(n,n*n-n-2);if(c%n<n-1){W[c].e=0;W[c+1].w=0}}
  const exit=n*n-1,d0=mazeDist(W,n,0);let keyAt=-1,best=d0[exit];
  if(key){const de=mazeDist(W,n,exit);const cand=[...Array(n*n).keys()].filter(i=>i!==0&&i!==exit).sort((a,b)=>(d0[b]+de[b])-(d0[a]+de[a]));keyAt=cand[rand(0,Math.min(2,cand.length-1))];best=d0[keyAt]+de[keyAt]}
  const far=[...Array(n*n).keys()].filter(i=>i!==exit&&i!==keyAt&&d0[i]>n).sort((a,b)=>d0[b]-d0[a]);
  return {type:'maze',n,W,pos:0,exit,keyAt,hasKey:!key,best,moves:0,path:[0],mino:far.length?far[rand(0,Math.min(3,far.length-1))]:-1,minoWalks:!!mino,minoT:0,minoPrev:-1,hint:-1,hx:0,hy:0,img:avatarImage(),t:0,caught:0};
}
function mazeBody(){return `<div class="stage"><div class="mazewrap"><canvas id="mzcv"></canvas></div></div>`}
function mazeStepToward(target){
  const m=run.p;let guard=0;
  while(target!==m.pos&&guard++<4){
    const dx=target%m.n-m.pos%m.n,dy=Math.floor(target/m.n)-Math.floor(m.pos/m.n),nb=mazeNbrs(m.W,m.n,m.pos);
    const tries=Math.abs(dx)>=Math.abs(dy)?[dx?m.pos+Math.sign(dx):null,dy?m.pos+Math.sign(dy)*m.n:null]:[dy?m.pos+Math.sign(dy)*m.n:null,dx?m.pos+Math.sign(dx):null];
    const to=tries.find(c=>c!==null&&nb.includes(c));if(to===undefined)break;
    mazeMove(to);if(run.won)break;
  }
}
function mazeMove(to){
  const m=run.p;m.pos=to;m.moves++;m.hint=-1;
  if(m.path.length>1&&m.path[m.path.length-2]===to)m.path.pop();else m.path.push(to);
  sfx('tap');
  if(to===m.keyAt&&!m.hasKey){m.hasKey=true;sfx('coin');say(tr(['The key! Now find the door.','Το κλειδί! Τώρα βρες την πόρτα.']))}
  if(to===m.mino)return mazeCaught();
  if(to===m.exit){if(m.hasKey)puzzleWin();else say(tr(['The door is locked. Find the key!','Η πόρτα είναι κλειδωμένη. Βρες το κλειδί!']))}
}
function mazeCaught(){
  const m=run.p;
  if(!m.minoWalks){say(tr(['Shh! The Minotaur is sleeping. Go around him!','Σσς! Ο Μινώταυρος κοιμάται. Πέρνα από άλλο δρόμο!']));return}
  run.mistakes++;m.caught=1;sfx('bad');m.pos=0;m.path=[0];drag=null;
  say(tr(['The Minotaur caught you! Back to the start.','Ο Μινώταυρος σε βρήκε! Πάμε πάλι από την αρχή.']));
}
function mazeLoop(ts){
  const m=run&&run.p;if(!m||m.type!=='maze'||ui.screen!=='game')return;
  const dt=Math.min(.05,(ts-(m.last||ts))/1000);m.last=ts;m.t+=dt;
  if(m.minoWalks&&!run.won&&m.t>2.5){m.minoT+=dt;if(m.minoT>(m.n>=11?.7:.9)){m.minoT=0;
    const nb=mazeNbrs(m.W,m.n,m.mino).filter(c=>c!==m.exit&&c!==m.keyAt);const opts=nb.filter(c=>c!==m.minoPrev);
    const to=pick(opts.length?opts:nb);if(to!==undefined){m.minoPrev=m.mino;m.mino=to;if(to===m.pos)mazeCaught()}}}
  drawMaze(m,dt);requestAnimationFrame(mazeLoop);
}
function drawMaze(m,dt){
  const cv=document.getElementById('mzcv');if(!cv)return;const ctx=cv.getContext('2d');
  const dpr=devicePixelRatio||1,rc=cv.getBoundingClientRect(),W=rc.width;if(!W)return;
  if(cv.width!==Math.round(W*dpr)){cv.width=cv.height=Math.round(W*dpr)}
  ctx.setTransform(dpr,0,0,dpr,0,0);
  const n=m.n,pad=W*.03,c=(W-pad*2)/n,X=i=>pad+(i%n)*c,Y=i=>pad+Math.floor(i/n)*c;
  // studded green baseplate
  ctx.fillStyle='#5c6b7c';ctx.fillRect(0,0,W,W);
  for(let i=0;i<n*n;i++){const x=X(i),y=Y(i);ctx.fillStyle=(i%n+Math.floor(i/n))%2?'#7cc35a':'#74bb52';ctx.fillRect(x,y,c+.5,c+.5);
    ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.arc(x+c/2,y+c/2,c*.16,0,7);ctx.fill()}
  if(m.hint>=0){ctx.fillStyle=`rgba(255,225,74,${.45+.35*Math.sin(m.t*8)})`;ctx.fillRect(X(m.hint),Y(m.hint),c,c)}
  // Ariadne's red thread
  ctx.strokeStyle='#e53935';ctx.lineWidth=Math.max(3,c*.12);ctx.lineCap=ctx.lineJoin='round';ctx.beginPath();
  m.path.forEach((p,k)=>{const x=X(p)+c/2,y=Y(p)+c/2;k?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();
  // door, key, Minotaur
  const glyph=(i,g,sz=.7)=>{ctx.font=`${c*sz}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(g,X(i)+c/2,Y(i)+c/2+c*.04)};
  ctx.fillStyle='#8a5a2b';ctx.fillRect(X(m.exit)+c*.18,Y(m.exit)+c*.1,c*.64,c*.8);ctx.fillStyle='#a8743c';ctx.fillRect(X(m.exit)+c*.24,Y(m.exit)+c*.16,c*.52,c*.68);
  ctx.fillStyle='#f2b632';ctx.fillRect(X(m.exit)+c*.62,Y(m.exit)+c*.48,c*.08,c*.08);
  if(!m.hasKey)glyph(m.exit,'🔒',.42);
  if(m.keyAt>=0&&!m.hasKey)glyph(m.keyAt,'🔑',.62+.06*Math.sin(m.t*5));
  if(m.mino>=0){glyph(m.mino,'🐂',.72);if(!m.minoWalks){ctx.fillStyle='#fff';ctx.font=`700 ${c*.28}px Ubuntu,sans-serif`;ctx.fillText('z',X(m.mino)+c*.82,Y(m.mino)+c*.2-Math.abs(Math.sin(m.t*2))*c*.1)}}
  // the hero glides to its square
  const tx=X(m.pos),ty=Y(m.pos);if(m.hx===undefined||m.caught){m.hx=tx;m.hy=ty;m.caught=0}
  m.hx+=(tx-m.hx)*Math.min(1,dt*18);m.hy+=(ty-m.hy)*Math.min(1,dt*18);
  if(m.img.complete){const h=c*1.05,w=h*200/276;ctx.drawImage(m.img,m.hx+c/2-w/2,m.hy+c-h*.98,w,h)}
  // block walls: dark front face, light top
  const t=Math.max(4,c*.16);
  const wall=(x,y,w,h)=>{ctx.fillStyle='#6d7a8c';ctx.fillRect(x,y,w,h);ctx.fillStyle='#b9c4d2';ctx.fillRect(x,y-t*.45,w,h)};
  for(let i=0;i<n*n;i++){const x=X(i),y=Y(i),w=m.W[i];
    if(w.n)wall(x-t/2,y-t/2,c+t,t);if(w.w)wall(x-t/2,y-t/2,t,c+t);
    if(i%n===n-1&&w.e)wall(x+c-t/2,y-t/2,t,c+t);if(i>=n*n-n&&w.s)wall(x-t/2,y+c-t/2,c+t,t)}
}
// finger control: press and drag the hero through the corridors
let drag=null;
function mazeCellAt(e){const cv=document.getElementById('mzcv'),m=run&&run.p;if(!cv||!m)return -1;const r=cv.getBoundingClientRect(),pad=r.width*.03,c=(r.width-pad*2)/m.n;
  const cx=Math.floor((e.clientX-r.left-pad)/c),cy=Math.floor((e.clientY-r.top-pad)/c);return cx<0||cy<0||cx>=m.n||cy>=m.n?-1:cy*m.n+cx}
document.addEventListener('pointerdown',e=>{if(e.target.id!=='mzcv'||!run||!run.p||run.won)return;e.target.setPointerCapture?.(e.pointerId);drag=true;const c=mazeCellAt(e);if(c>=0)mazeStepToward(c)});
document.addEventListener('pointermove',e=>{if(!drag||e.target.id!=='mzcv'||!run||!run.p||run.won)return;const c=mazeCellAt(e);if(c>=0&&c!==run.p.pos)mazeStepToward(c)});
['pointerup','pointercancel'].forEach(ev=>document.addEventListener(ev,()=>{drag=null}));

// Tower: tap a column to lift its top disc, tap another to drop it
function hanoiTap(i){
  const h=run.p,pg=h.pegs;
  if(h.sel===null){if(pg[i].length){h.sel=i;sfx('tap');renderGame()}return}
  if(h.sel===i){h.sel=null;return renderGame()}
  const d=pg[h.sel][pg[h.sel].length-1],top=pg[i][pg[i].length-1];
  if(top&&top<d){run.mistakes++;sfx('bad');say(tr(['A big disc cannot go on a small one!','Ο μεγάλος δίσκος δεν μπαίνει πάνω στον μικρό!']));const el=document.querySelector(`.peg[data-i="${i}"]`);el.classList.add('shake');setTimeout(()=>el.classList.remove('shake'),450);return}
  pg[i].push(pg[h.sel].pop());h.sel=null;h.moves++;sfx('flip');renderGame();
  if(pg[2].length===h.n)puzzleWin();
}

// River crossing: the cargo rides with the hero; the bank left behind must be safe
const riverBad=(side,bank)=>{const on=k=>side[k]===bank;return on('wolf')&&on('sheep')?'wolf':on('sheep')&&on('grass')?'sheep':null};
function riverItem(k){
  const r=run.p;if(r.busy)return;
  if(r.cargo===k){r.cargo=null;sfx('tap');return renderGame()}
  if(r.side[k]!==r.boat){say(tr(['The boat is on the other side!','Η βάρκα είναι στην άλλη όχθη!']));return}
  r.cargo=k;sfx('tap');say(tr(RIVER.find(x=>x[0]===k)[3]));renderGame();
}
function riverRow(){
  const r=run.p;if(r.busy)return;r.busy=true;
  const prev={side:{...r.side},boat:r.boat,cargo:r.cargo};
  const el=$('.r-boat');sfx('flip');if(el)el.style.left=(r.boat?28:52)+'%';
  setTimeout(()=>{
    r.boat=1-r.boat;if(r.cargo){r.side[r.cargo]=r.boat;r.cargo=null}
    const bad=riverBad(r.side,1-r.boat);
    if(bad){run.mistakes++;r.oops=bad;renderGame();sfx('bad');
      const msg=bad==='wolf'?['Oh no! The wolf wants to eat the sheep! Let\'s go back.','Ωχ! Ο λύκος θέλει να φάει το πρόβατο! Ας γυρίσουμε πίσω.']:['Oh no! The sheep wants to eat the grass! Let\'s go back.','Ωχ! Το πρόβατο θέλει να φάει το χόρτο! Ας γυρίσουμε πίσω.'];
      Promise.all([say(tr(msg)),wait(2000)]).then(()=>{if(run&&run.p===r){Object.assign(r,prev,{busy:false,oops:null});renderGame()}});return}
    r.busy=false;renderGame();
    if(RIVER.every(([k])=>r.side[k]===1))puzzleWin();
  },950);
}

// Hints: shortest solution from the current position, by breadth-first search
function bfsFirst(start,key,nexts,done){
  const seen=new Map([[key(start),null]]),q=[[start,null]];
  while(q.length){const [s,first]=q.shift();if(done(s))return first;
    for(const [mv,n] of nexts(s)){const k=key(n);if(!seen.has(k)){seen.set(k,1);q.push([n,first||mv])}}}
  return null;
}
function puzzleHint(){
  const p=run.p;run.hints++;
  if(p.type==='maze'){const target=p.hasKey?p.exit:p.keyAt,d=mazeDist(p.W,p.n,target);
    p.hint=mazeNbrs(p.W,p.n,p.pos).find(k=>d[k]===d[p.pos]-1);say(tr(['Follow the glowing square!','Ακολούθησε το κουτάκι που λάμπει!']));return}
  if(p.type==='hanoi'){
    const mv=bfsFirst(p.pegs.map(x=>x.slice()),s=>JSON.stringify(s),s=>{const out=[];for(let a=0;a<3;a++)for(let b=0;b<3;b++){if(a===b||!s[a].length)continue;const d=s[a][s[a].length-1],t=s[b][s[b].length-1];if(t&&t<d)continue;const n=s.map(x=>x.slice());n[b].push(n[a].pop());out.push([[a,b,d],n])}return out},s=>s[2].length===p.n);
    if(mv){const [a,b,d]=mv;say(tr([`Move the ${DISC_NAMES[d-1][0]} disc to the ${ORD[b][0]} column.`,`Βάλε τον ${DISC_NAMES[d-1][1]} δίσκο ${stin(ORD[b][1])} κολόνα.`]))}return}
  const mv=bfsFirst({side:{...p.side},boat:p.boat},s=>JSON.stringify(s),s=>{const out=[];for(const c of [null,...RIVER.map(x=>x[0]).filter(k=>s.side[k]===s.boat)]){const n={side:{...s.side},boat:1-s.boat};if(c)n.side[c]=n.boat;if(!riverBad(n.side,1-n.boat))out.push([c||'alone',n])}return out},s=>RIVER.every(([k])=>s.side[k]===1));
  if(mv)say(mv==='alone'?tr(['Cross alone, with nobody in the boat.','Πέρνα απέναντι μόνος σου, χωρίς κανέναν στη βάρκα.']):tr([`Take ${RIVER.find(x=>x[0]===mv)[2][0]} with you.`,`Πάρε μαζί σου ${RIVER.find(x=>x[0]===mv)[2][1]}.`]));
}

/* ---------- music run (Odeon) ---------- */
// Notes are indexes into one octave: Do Re Mi Fa Sol La Si Do', coloured like children's bell sets
const NOTE_MIDI=[60,62,64,65,67,69,71,72];
const NOTE_COL=['#e53935','#fb8c00','#f9b800','#43a047','#1fa7e0','#3949ab','#8e44ad','#ec407a'];
const NOTE_NAME=[['C','D','E','F','G','A','B','C'],['Ντο','Ρε','Μι','Φα','Σολ','Λα','Σι','Ντο']];
const SONGS=[
  {title:['Twinkle Twinkle','Το αστεράκι'],by:['Mozart','Μότσαρτ'],speed:9,extra:1,notes:[0,0,4,4,5,5,4,3,3,2,2,1,1,0],beats:[1,1,1,1,1,1,2,1,1,1,1,1,1,2]},
  {title:['Ode to Joy','Ωδή στη Χαρά'],by:['Beethoven','Μπετόβεν'],speed:10,extra:1,notes:[2,2,3,4,4,3,2,1,0,0,1,2,2,1,1],beats:[1,1,1,1,1,1,1,1,1,1,1,1,1.5,.5,2]},
  {title:['Lullaby','Νανούρισμα'],by:['Brahms','Μπραμς'],speed:11,extra:2,notes:[2,2,4,2,2,4,2,4,7,6,5,5,4],beats:[.5,.5,1.5,.5,.5,1.5,.5,.5,1,1.5,.5,1,1.5]},
  {title:['Morning Mood','Πρωινή Διάθεση'],by:['Grieg','Γκριγκ'],speed:12,extra:2,notes:[4,2,1,0,1,2,4,2,1,0,1,2],beats:[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,1.5]},
  {title:['Minuet','Μενουέτο'],by:['Bach','Μπαχ'],speed:13,extra:2,notes:[4,0,1,2,3,4,0,0,5,3,4,5,6,7,7,7],beats:[1,.5,.5,.5,.5,1,1,1,1,.5,.5,.5,.5,1,1,1]}
];
const noteName=i=>NOTE_NAME[isEl()?1:0][i];
function piano(i,t,dur=.9){if(!ac||!S.sound)return;const f=mtof(NOTE_MIDI[i]);tone(f,t,dur+.4,sfxG,'sine',.5);tone(f*2,t,dur*.5,sfxG,'sine',.12);tone(f*3,t,dur*.25,sfxG,'sine',.04)}
function playSong(song,onNote){
  if(!ac)return Promise.resolve();let t=ac.currentTime+.15,ms=150;const beat=.42;
  song.notes.forEach((n,i)=>{piano(n,t,song.beats[i]*beat+.35);setTimeout(()=>onNote&&onNote(i),ms);t+=song.beats[i]*beat;ms+=song.beats[i]*beat*1000});
  return wait(ms+300);
}
function setupMusic(l){
  const song=SONGS[l];stopMusic();
  run.m={song,pos:0,rows:[],dist:0,lane:0,px:0,phase:'listen',t:0,bonus:0,finishZ:null,fx:[],showing:-1,count:0,avatarImg:null};
  const sname=`«${tr(song.title)}» ${isEl()?'του':'by'} ${tr(song.by)}`;
  run.cur={text:tr(['Catch the notes in order!','Μάζεψε τις νότες με τη σειρά!']),
    say:tr([`Listen to ${tr(song.title)} by ${song.by[0]}. Then run and catch the notes in the right order. Swipe or tap left and right!`,`Άκου το κομμάτι ${sname}. Μετά τρέξε και μάζεψε τις νότες με τη σωστή σειρά. Πάτα δεξιά και αριστερά!`])};
  run.m.label=sname;
  run.m.avatarImg=avatarImage();
  const m=run.m;
  setTimeout(()=>{if(run&&run.m===m)say(run.cur.say).then(()=>{if(run&&run.m===m)return playSong(m.song,i=>{m.showing=i;musicHud()})}).then(()=>{if(run&&run.m===m){m.showing=-1;musicHud();m.phase='count';m.t=0}})},300);
  requestAnimationFrame(ts=>{m.last=ts;requestAnimationFrame(musicLoop)});
}
function musicBody(){
  return `<div class="mhud"><div class="mtitle">🎼 ${esc(run.m.label)}</div><div class="mbar" id="mbar"></div></div>
  <div class="stage runstage"><canvas id="runcv"></canvas>
  <button class="lane-btn l" data-act="mv" data-d="-1" aria-label="Left">◀</button><button class="lane-btn r" data-act="mv" data-d="1" aria-label="Right">▶</button></div>`;
}
function musicHud(){
  const el=document.getElementById('mbar');if(!el||!run||!run.m)return;const m=run.m;
  el.innerHTML=m.song.notes.map((n,i)=>`<i style="--c:${NOTE_COL[n]}" class="${m.showing===i?'play':m.showing>=0?'':i<m.pos?'got':i===m.pos&&m.phase!=='listen'?'next':''}">${noteName(n)}</i>`).join('');
}
function musicMove(d){const m=run&&run.m;if(!m||m.phase==='finish')return;m.lane=Math.max(-1,Math.min(1,m.lane+d));sfx('tap')}
const PZ0=1.2,SPACING=16;
function musicLoop(ts){
  const m=run&&run.m;if(!m||ui.screen!=='game')return;
  const dt=Math.min(.05,(ts-(m.last||ts))/1000);m.last=ts;m.t+=dt;
  if(m.phase==='count'&&m.t>=3){m.phase='run';m.t=0}
  if(m.phase==='count'&&Math.floor(m.t)!==m.count){m.count=Math.floor(m.t);sfx('tap')}
  if(m.phase==='run')musicStep(m,dt);
  m.px+=(m.lane-m.px)*Math.min(1,dt*14);
  drawRun(m);
  requestAnimationFrame(musicLoop);
}
function musicStep(m,dt){
  const dz=m.song.speed*dt;m.dist+=dz;
  m.rows.forEach(r=>r.z-=dz);
  const open=m.rows.filter(r=>!r.done);
  const left=m.song.notes.length-m.pos;
  const far=m.rows.length?m.rows[m.rows.length-1].z:8;
  if(open.length<left&&far<60-SPACING){
    const lanes=shuffle([-1,0,1]),r={z:far+SPACING,correct:lanes[0],others:[],coin:null,done:false};
    const offs=shuffle([1,2,3,4,5,6]);for(let k=0;k<m.song.extra;k++)r.others.push({lane:lanes[1+k],off:offs[k]});
    if(m.song.extra===1&&Math.random()<.6)r.coin=lanes[2];
    m.rows.push(r);
  }
  // the i-th unresolved row always asks for the next notes still missing
  m.rows.filter(r=>!r.done).forEach((r,i)=>{r.pitch=m.song.notes[Math.min(m.pos+i,m.song.notes.length-1)]});
  for(const r of m.rows){if(r.done||r.z>PZ0)continue;r.done=true;
    if(m.lane===r.correct){piano(r.pitch,ac?ac.currentTime:0);m.pos++;m.fx.push({txt:noteName(r.pitch),col:NOTE_COL[r.pitch],x:m.lane,life:1});musicHud();
      if(m.pos>=m.song.notes.length)m.finishZ=SPACING}
    else if(r.coin===m.lane){m.bonus++;sfx('coin');m.fx.push({txt:'+1',col:'#c98a12',x:m.lane,life:1});run.mistakes++}
    else{run.mistakes++;sfx('bad');m.fx.push({txt:r.others.some(o=>o.lane===m.lane)?'✗':tr(['Oops!','Ωπ!']),col:'#d9534f',x:m.lane,life:1})}
  }
  m.rows=m.rows.filter(r=>!r.done||r.z>-4);
  if(m.finishZ!==null){m.finishZ-=dz;if(m.finishZ<=PZ0){m.phase='finish';musicFinish(m)}}
}
async function musicFinish(m){
  sfx('win');burst(innerWidth/2,innerHeight/2,90);
  await wait(900);if(!run||run.m!==m)return;
  await say(tr([`Bravo! You played ${tr(m.song.title)} by ${m.song.by[0]}! Listen!`,`Μπράβο ${vocEl(heroName())}! Έπαιξες το κομμάτι ${m.label}! Άκου!`]));
  if(!run||run.m!==m)return;
  await playSong(m.song,i=>{m.showing=i;musicHud()});
  if(!run||run.m!==m)return;
  const st=run.mistakes===0?3:run.mistakes<=3?2:1;S.coins+=m.bonus;finishLevel(st);
}
const distractor=(c,off)=>{let p=(c+off)%8;if((p===0&&c===7)||(p===7&&c===0))p=(p+3)%8;return p};
function drawNote(ctx,x,y,r,col,label){
  ctx.fillStyle='rgba(60,30,40,.18)';ctx.beginPath();ctx.ellipse(x,y+r*1.9,r*.9,r*.28,0,0,7);ctx.fill();
  ctx.save();ctx.translate(x,y);
  ctx.fillStyle=col;ctx.fillRect(r*.62,-r*2.5,r*.26,r*2.5);
  ctx.beginPath();ctx.moveTo(r*.88,-r*2.5);ctx.bezierCurveTo(r*1.9,-r*2,r*1.9,-r*1.2,r*1.4,-r*.8);ctx.bezierCurveTo(r*1.5,-r*1.5,r*1.2,-r*1.8,r*.88,-r*1.8);ctx.fill();
  ctx.beginPath();ctx.ellipse(0,0,r,r*.8,-.35,0,7);ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,.85)';ctx.lineWidth=Math.max(2,r*.1);ctx.stroke();
  ctx.fillStyle='#fff';ctx.font=`700 ${Math.max(9,r*.62)}px Ubuntu,sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(label,0,r*.05);
  ctx.restore();
}
function drawRun(m){
  const cv=document.getElementById('runcv');if(!cv)return;const ctx=cv.getContext('2d');
  const dpr=devicePixelRatio||1,rc=cv.getBoundingClientRect(),W=rc.width,H=rc.height;if(!W||!H)return;
  if(cv.width!==Math.round(W*dpr)||cv.height!==Math.round(H*dpr)){cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr)}
  ctx.setTransform(dpr,0,0,dpr,0,0);
  const hy=H*.28,Z0=4,cx=W/2,RW=Math.min(W*.46,H*.55);
  const P=z=>{const s=Z0/(Math.max(z,-3.5)+Z0);return {s,y:hy+(H-hy)*s}};
  const laneX=(l,s)=>cx+l*RW*s*.64;
  // sunset sky, sea, Acropolis hill and the Odeon arches on the horizon
  let g=ctx.createLinearGradient(0,0,0,hy);g.addColorStop(0,'#ff9548');g.addColorStop(1,'#ffd7a8');ctx.fillStyle=g;ctx.fillRect(0,0,W,hy+1);
  ctx.fillStyle='#ffe9a8';ctx.beginPath();ctx.arc(W*.78,hy*.55,hy*.22,0,7);ctx.fill();
  ctx.fillStyle='#c9a27a';ctx.beginPath();ctx.moveTo(0,hy);ctx.quadraticCurveTo(W*.12,hy*.55,W*.3,hy*.62);ctx.lineTo(W*.36,hy);ctx.fill();
  ctx.fillStyle='#f6ead2';const tx=W*.08,tw=W*.18,ty=hy*.5;ctx.fillRect(tx,ty,tw,hy*.05);for(let k=0;k<6;k++)ctx.fillRect(tx+k*tw/5.6,ty+hy*.05,tw/14,hy*.14);ctx.beginPath();ctx.moveTo(tx-4,ty);ctx.lineTo(tx+tw/2,ty-hy*.1);ctx.lineTo(tx+tw+4,ty);ctx.fill();
  ctx.fillStyle='#d7b48e';const ox=W*.58,ow=W*.4,oy=hy*.62;ctx.fillRect(ox,oy,ow,hy*.38);ctx.fillStyle='#b98d63';for(let k=0;k<7;k++){const ax=ox+ow*(k+.5)/7;ctx.beginPath();ctx.moveTo(ax-ow/22,hy);ctx.lineTo(ax-ow/22,oy+hy*.16);ctx.arc(ax,oy+hy*.16,ow/22,Math.PI,0);ctx.lineTo(ax+ow/22,hy);ctx.fill()}
  g=ctx.createLinearGradient(0,hy,0,H);g.addColorStop(0,'#e7c58f');g.addColorStop(1,'#cfa66b');ctx.fillStyle=g;ctx.fillRect(0,hy,W,H-hy);
  // road
  const b=P(-3.5);ctx.fillStyle='#f4a3b6';ctx.beginPath();ctx.moveTo(cx-RW*b.s*1.1,b.y);ctx.lineTo(cx,hy);ctx.lineTo(cx+RW*b.s*1.1,b.y);ctx.fill();
  ctx.fillStyle='#fffaf0';ctx.beginPath();ctx.moveTo(cx-RW*b.s,b.y);ctx.lineTo(cx,hy);ctx.lineTo(cx+RW*b.s,b.y);ctx.fill();
  ctx.fillStyle='rgba(244,163,182,.6)';for(let k=0;k<20;k++){const z=k*4-(m.dist%4);if(z<-3)continue;const a=P(z),c=P(z+1.6);for(const sx of [-.32,.32]){ctx.beginPath();ctx.moveTo(cx+sx*RW*a.s-2*a.s,a.y);ctx.lineTo(cx+sx*RW*c.s-2*c.s,c.y);ctx.lineTo(cx+sx*RW*c.s+2*c.s,c.y);ctx.lineTo(cx+sx*RW*a.s+2*a.s,a.y);ctx.fill()}}
  // things to draw far to near: cypress trees, columns, notes, coins, finish gate
  const items=[];
  for(let k=0;k<12;k++){const z=k*7-(m.dist%7);if(z>-3)for(const side of [-1,1])items.push({z,kind:k%3===0?'column':'tree',side})}
  m.rows.forEach(r=>{if(r.done)return;items.push({z:r.z,kind:'note',lane:r.correct,pitch:r.pitch});r.others.forEach(o=>items.push({z:r.z,kind:'note',lane:o.lane,pitch:distractor(r.pitch,o.off)}));if(r.coin!==null)items.push({z:r.z,kind:'coin',lane:r.coin})});
  if(m.finishZ!==null)items.push({z:m.finishZ,kind:'finish'});
  items.sort((a,c)=>c.z-a.z);
  for(const it of items){const p=P(it.z);
    if(it.kind==='tree'){const x=cx+it.side*RW*p.s*1.35,h=RW*p.s*.9,w=h*.3;ctx.fillStyle='#6b4a2a';ctx.fillRect(x-w*.15,p.y-h*.15,w*.3,h*.15);[[1,.15,.45],[.8,.45,.3],[.55,.72,.28]].forEach(([k,y0,hh])=>{ctx.fillStyle='#4f8a3a';ctx.fillRect(x-w*k/2,p.y-h*(y0+hh),w*k,h*hh);ctx.fillStyle='#6fae4f';ctx.fillRect(x-w*k/2,p.y-h*(y0+hh),w*k,h*hh*.22);ctx.fillStyle='#3d6e2c';ctx.fillRect(x+w*k/2-w*k*.2,p.y-h*(y0+hh),w*k*.2,h*hh)})}
    if(it.kind==='column'){const x=cx+it.side*RW*p.s*1.2,h=RW*p.s*.8,w=h*.14;ctx.fillStyle='#fffaf0';ctx.fillRect(x-w/2,p.y-h,w,h);ctx.fillStyle='#e6dcc4';ctx.fillRect(x-w*.8,p.y-h-w*.4,w*1.6,w*.4);ctx.fillRect(x-w*.7,p.y-w*.3,w*1.4,w*.3)}
    if(it.kind==='note'){const r=RW*p.s*.2,bob=Math.sin(m.t*5+it.lane)*r*.15;drawNote(ctx,laneX(it.lane,p.s),p.y-r*1.9+bob,r,NOTE_COL[it.pitch],noteName(it.pitch))}
    if(it.kind==='coin'){const r=RW*p.s*.1,x=laneX(it.lane,p.s),y=p.y-r*1.8;ctx.fillStyle='#f2b632';ctx.strokeStyle='#c98a12';ctx.lineWidth=r*.2;ctx.beginPath();ctx.ellipse(x,y,r*Math.abs(Math.cos(m.t*3))+r*.2,r,0,0,7);ctx.fill();ctx.stroke()}
    if(it.kind==='finish'){const w=RW*p.s,h=w*.75;ctx.fillStyle='#fffaf0';ctx.fillRect(cx-w-w*.06,p.y-h,w*.08,h);ctx.fillRect(cx+w-w*.02,p.y-h,w*.08,h);
      const bh=h*.22;for(let k=0;k<16;k++)for(let j=0;j<2;j++){ctx.fillStyle=(k+j)%2?'#1c2a48':'#fff';ctx.fillRect(cx-w+k*w/8,p.y-h+j*bh/2,w/8,bh/2)}
      ctx.fillStyle='#f2b632';ctx.font=`700 ${bh*.9}px Ubuntu,sans-serif`;ctx.textAlign='center';ctx.textBaseline='bottom';ctx.fillText(tr(['FINISH','ΤΕΡΜΑΤΙΣΜΟΣ']),cx,p.y-h-4)}
  }
  // the hero, running
  const pp=P(PZ0),hh=Math.min(H*.3,RW*.75),run_=m.phase==='run',bob=run_?Math.abs(Math.sin(m.t*11))*hh*.05:0,x=laneX(m.px,pp.s);
  ctx.fillStyle='rgba(60,30,40,.2)';ctx.beginPath();ctx.ellipse(x,pp.y,hh*.22,hh*.06,0,0,7);ctx.fill();
  if(m.avatarImg&&m.avatarImg.complete){ctx.save();ctx.translate(x,pp.y-bob);ctx.rotate(run_?Math.sin(m.t*11)*.05:0);ctx.drawImage(m.avatarImg,-hh*.38,-hh,hh*.76,hh);ctx.restore()}
  // floating feedback
  m.fx=m.fx.filter(f=>(f.life-=1/60)>0);m.fx.forEach(f=>{ctx.globalAlpha=Math.min(1,f.life*2);ctx.fillStyle=f.col;ctx.font=`700 ${hh*.22}px Ubuntu,sans-serif`;ctx.textAlign='center';ctx.fillText(f.txt,laneX(f.x,pp.s),pp.y-hh*1.05-(1-f.life)*hh*.5);ctx.globalAlpha=1});
  if(m.phase==='count'){ctx.fillStyle='#fff';ctx.strokeStyle='#0f4f8f';ctx.lineWidth=8;ctx.font=`700 ${H*.22}px Ubuntu,sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';const n=3-Math.floor(m.t);ctx.strokeText(n,cx,H*.5);ctx.fillText(n,cx,H*.5)}
  if(m.phase==='listen'){ctx.fillStyle='rgba(15,79,143,.75)';const tw=Math.min(W*.8,420);ctx.fillRect(cx-tw/2,H*.42,tw,H*.12);ctx.fillStyle='#fff';ctx.font=`700 ${Math.min(30,H*.05)}px Ubuntu,sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(tr(['🎧 Listen first…','🎧 Άκου πρώτα…']),cx,H*.48)}
}
// swipe or tap on the road to change lane
let swipe=null;
document.addEventListener('pointerdown',e=>{if(e.target.id==='runcv')swipe={x:e.clientX,t:Date.now()}});
document.addEventListener('pointerup',e=>{if(!swipe||e.target.id!=='runcv'){swipe=null;return}const dx=e.clientX-swipe.x;swipe=null;
  if(Math.abs(dx)>30)musicMove(dx>0?1:-1);else{const r=e.target.getBoundingClientRect();musicMove(e.clientX<r.left+r.width/2?-1:1)}});
document.addEventListener('keydown',e=>{if(!run||!run.m)return;if(e.key==='ArrowLeft')musicMove(-1);if(e.key==='ArrowRight')musicMove(1)});

/* ---------- game flow ---------- */
let run=null;
function startLevel(g,l){
  ui.modal=null;ui.screen='game';
  run={g,l,q:0,total:g==='memory'?[3,4,6][l]:g==='puzzle'||g==='music'?1:5,mistakes:0,busy:false,nextRank:0};
  if(g==='memory')setupMemory();else if(g==='puzzle')setupPuzzle(l);else if(g==='music')setupMusic(l);else run.cur=GEN[g](l);
  render();speakPrompt();
}
function speakPrompt(){if(!run)return;const s=run.g==='memory'?tr(SAY.memory):run.cur.say;setTimeout(()=>say(s),250)}
function setupMemory(){const pairs=shuffle(SEA).slice(0,run.total);run.cards=shuffle([...pairs,...pairs]).map((p,i)=>({i,e:p[0],n:p[1],up:false,done:false}));run.open=[];run.found=0}
function renderGame(){
  const g=GAMES.find(x=>x.id===run.g),h=HEROES[S.hero];
  const prog=run.g==='memory'?run.found:run.q;
  let body;
  if(run.g==='music')body=musicBody();
  else if(run.g==='puzzle')body=puzzleBody();
  else if(run.g==='memory'){const n=run.cards.length,cols=n<=6?3:4;
    body=`<div class="stage"><div class="mem" style="grid-template-columns:repeat(${cols},minmax(0,1fr));width:min(100%,${cols*150}px,calc((100dvh - 230px) / ${Math.ceil(n/cols)} * .75 * ${cols} + ${(cols-1)*12}px))">${run.cards.map(c=>`<button class="card ${c.up?'up':''} ${c.done?'done':''}" data-act="card" data-i="${c.i}" aria-label="${c.up||c.done?tr(c.n):'?'}"><div class="in"><div class="b"><span>Ω</span></div><div class="f">${c.e}</div></div></button>`).join('')}</div></div>`}
  else{const c=run.cur,cls=c.big?'big':c.tall?'tall':'';
    body=`${c.stage?`<div class="stage">${c.stage}</div>`:''}<div class="options" style="${c.stage?'':'flex:1;align-items:center'}">${c.options.map((o,i)=>`<button class="opt ${cls}" data-act="ans" data-i="${i}">${o.html}</button>`).join('')}</div>`}
  app.innerHTML=`<div class="screen">
    <div class="gbar"><button class="icon-btn" data-act="map" aria-label="${t('backIsland')}">${I.home}</button>
      <div class="gtitle"><h2>${tr(g.name)}</h2><div>${t('lv')} ${run.l+1} · ${tr(g.levels[run.l])}</div></div>
      <div class="dots">${Array.from({length:run.total},(_,i)=>`<i class="${i<prog?'done':i===prog?'now':''}"></i>`).join('')}</div></div>
    <div class="prompt"><span class="pet" id="pet">${h.pet}</span><div class="bubble"><span>${run.g==='memory'?t('findPairs'):run.cur.text}</span><button class="icon-btn" data-act="repeat" aria-label="Repeat">${I.speaker}</button></div></div>
    ${body}</div>`;
  if(run.g==='music')musicHud();
}
function success(btn,after){
  run.busy=true;sfx('good');const r=btn.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2);
  $('#pet')?.classList.add('happy');const r0=run;
  Promise.all([say(after||pick(tr(HEROES[S.hero].cheer))),wait(1300)]).then(()=>{if(run!==r0)return;run.q++;run.busy=false;if(run.q>=run.total)return finishLevel();run.cur=GEN[run.g](run.l);run.nextRank=0;renderGame();speakPrompt()});
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
function finishLevel(fixed){
  const m=run.mistakes,stars=fixed||(run.g==='memory'?(m<=run.total?3:m<=run.total*2?2:1):(m===0?3:m<=2?2:1));
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
  if(a!=='ans'&&a!=='card'&&a!=='olive'&&a!=='pz'&&a!=='mv')sfx('tap');
  switch(a){
    case 'lang':{if(S.lang===b.dataset.v)break;S.lang=b.dataset.v;save();
      if(ui.screen==='game'&&run&&run.g==='puzzle'){const k=run.p.type==='maze'?(run.p.minoWalks?'mazeMino':run.p.keyAt>=0?'mazeKey':'maze'):run.p.type;run.cur={text:tr(PZ_TEXT[k].text),say:tr(PZ_TEXT[k].say)}}
      else if(ui.screen==='game'&&run&&run.g==='music')run.cur.text=tr(['Catch the notes in order!','Μάζεψε τις νότες με τη σειρά!']);
      else if(ui.screen==='game'&&run&&run.g!=='memory'){run.cur=GEN[run.g](run.l);run.nextRank=0}
      render();if(ui.screen==='game')speakPrompt();else say(isEl()?'Ελληνικά!':'English!');break}
    case 'hero':S.hero=b.dataset.h;sayL(SAY.hero(HEROES[S.hero]));save();render();break;
    case 'skin':S.skin=+b.dataset.i;save();render();break;
    case 'start':{const n=$('#kidname');S.name=(n&&n.value.trim())||'';S.started=true;save();ui.screen='map';render();sayL(SAY.welcome(heroName()));break}
    case 'map':run=null;ui.screen='map';ui.modal=null;ui.confirmReset=false;ui.confirmG=null;render();break;
    case 'room':ui.screen='room';render();break;
    case 'badges':ui.screen='badges';render();break;
    case 'tab':ui.tab=b.dataset.t;render();break;
    case 'music':S.music=!S.music;S.music?startMusic():stopMusic();save();render();break;
    case 'sound':S.sound=!S.sound;if(!S.sound&&'speechSynthesis' in window)speechSynthesis.cancel();save();render();break;
    case 'open':{const g=GAMES.find(x=>x.id===b.dataset.g);
      if(!isOpen(g)){ui.modal={type:'gate',g:g.id};renderModal();const n=tr(g.name);say(g.gate.coins?t('gateCoins',n,g.gate.coins)+' '+t('youHave',S.coins):t('gateBadges',n,g.gate.badges)+' '+t('youHave',S.badges.length));break}
      ui.modal={type:'levels',g:g.id};renderModal();sayL(SAY.pick(g));break}
    case 'unlock':{const g=GAMES.find(x=>x.id===b.dataset.g);
      if(g.gate.coins){if(S.coins<g.gate.coins){say(t('needCoins'));break}S.coins-=g.gate.coins}
      else if(S.badges.length<g.gate.badges)break;
      S.unlocked.push(g.id);sfx('win');const nb=checkBadges();save();render();burst(innerWidth/2,innerHeight/2,70);
      if(nb.length)toast(t('newBadge')+' '+tr(BADGES.find(x=>x.id===nb[0]).name));
      ui.modal={type:'levels',g:g.id};renderModal();sayL(SAY.pick(g));break}
    case 'close':ui.modal=null;if(ui.screen==='game'){run=null;ui.screen='map';render()}else renderModal();break;
    case 'play':startLevel(b.dataset.g,+b.dataset.l);break;
    case 'repeat':speakPrompt();break;
    case 'ans':answer(b,+b.dataset.i);break;
    case 'card':flip(+b.dataset.i);break;
    case 'pz':puzzleAct(b);break;
    case 'mv':musicMove(+b.dataset.d);break;
    case 'olive':{if(b.classList.contains('counted'))break;const n=document.querySelectorAll('.olive.counted').length+1;b.classList.add('counted');b.querySelector('text').textContent=n;sfx('tap');say(String(n));break}
    case 'buy':{const it=ITEMS.find(x=>x.id===b.dataset.id);if(S.coins<it.cost){say(t('needCoins'));break}S.coins-=it.cost;S.owned.push(it.id);S.equip[it.slot]=it.id;sfx('coin');const nb=checkBadges();save();render();const r=b.getBoundingClientRect();burst(r.left+r.width/2,r.top,40);sayL(SAY.wow(tr(it.name)));if(nb.length)toast(t('newBadge')+' '+tr(BADGES.find(x=>x.id===nb[0]).name));break}
    case 'wear':{const it=ITEMS.find(x=>x.id===b.dataset.id);S.equip[it.slot]=it.id;save();render();say(tr(it.name));break}
    case 'unwear':{const it=ITEMS.find(x=>x.id===b.dataset.id);S.equip[it.slot]=null;save();render();break}
    case 'rename':{const n=$('#pname');S.name=n.value.trim();save();toast(t('nameSaved'));break}
    case 'reset1':ui.confirmReset=true;render();break;
    case 'resetg':ui.confirmG=b.dataset.g;render();break;
    case 'resetg2':{const g=GAMES.find(x=>x.id===b.dataset.g);S.stars[g.id]=g.levels.map(()=>0);S.badges=S.badges.filter(x=>x!==g.id&&x!=='olympus');ui.confirmG=null;save();render();toast('↺ '+tr(g.name));break}
    case 'vtest':delete voices[S.lang];say(tr(['Hello! I am your storyteller. Shall we play?','Γεια σου! Είμαι η αφηγήτριά σου. Πάμε να παίξουμε;']));break;
    case 'reset0':ui.confirmReset=false;render();break;
    case 'reset2':{const keep={music:S.music,sound:S.sound,lang:S.lang};S=Object.assign(fresh(),keep);save();ui.confirmReset=false;ui.screen='welcome';render();break}
  }
});
document.addEventListener('change',e=>{if(e.target.id==='vsel'){S.voice=Object.assign({},S.voice,{[S.lang]:e.target.value});delete voices[S.lang];save();say(tr(['Hello! I am your storyteller.','Γεια σου! Είμαι η αφηγήτριά σου.']))}});
if('speechSynthesis' in window)speechSynthesis.addEventListener?.('voiceschanged',()=>{if(ui.screen==='parents')render()});
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
