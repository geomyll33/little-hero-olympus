# Little Hero of Olympus · Μικρός Ήρωας του Ολύμπου

A bilingual (English / Greek) learning game for 5-year-olds, set on a Greek island. Made for tablets.

**Play:** https://geomyll33.github.io/little-hero-olympus/

On a tablet, open the link and choose **Add to Home Screen** to get a full-screen app icon.

## The islands

The map has three islands, from easiest to hardest: Island of Dawn, Island of the Muses and Athena's Island (scroll between them). Places are numbered and a 👇 shows what to play next. Each place has its own background. Collecting every badge starts an Olympic award ceremony: podium in ancient Olympia, the kotinos olive wreath, a gold medal and a champion diploma (replay it from the badge hall). The narrator and the game sounds have separate on/off switches, and rewards can be tunes, applause with cheers and whistles, or both. With the narrator off, "listen and find" games show the target on screen instead, and the music listening games ask for sound. Correct answers get reward sounds and pop-up praise; finishing a place or island gets a trophy and a spoken celebration. Background sound: changing calm tunes or sea, rain, forest or a calm tone.

### Places

| Place | Skill |
|---|---|
| Olive Grove · Ελαιώνας | Counting to 5, to 10, adding |
| Temple of Letters · Ναός των Γραμμάτων | Letters by sound, first sounds, capital to small, and writing with a finger: trace and copy every letter (Greek or English) and the numbers 0–9, with stroke order, direction arrows and mirror-writing detection |
| Mount Olympus · Όρος Όλυμπος | Biggest, smallest, small to big |
| Agora Market · Αγορά | Colours and shapes |
| Olympic Stadium · Ολυμπιακό Στάδιο | Odd one out |
| Pottery Workshop · Εργαστήρι Αγγείων | Patterns |
| Fishing Harbour · Λιμάνι των Ψαράδων | More and fewer |
| Aegean Sea · Αιγαίο Πέλαγος | Memory cards |
| Tower of the Winds · Ο Πύργος των Ανέμων | Time: the order of a day, days of the week, yesterday/today/tomorrow (with the real day), the seasons, last year/this year/next year, reading the clock (o'clock and half past) and setting the clock by dragging both hands |
| Music Odeon · Μουσικό Ωδείο | Learn the notes on a xylophone (note stairs, high or low, listen and find, repeat the tune) and a runner game: catch coloured notes to play Mozart, Beethoven, Brahms, Grieg and Bach |
| Archimedes' Workshop · Εργαστήρι του Αρχιμήδη | STEM: code the robot Talos with arrows, float or sink, balance scale, water pipes, electric circuit, magnets, life cycles, gears, shadows and light, gear doors to open (12 levels, 💡 help) |
| Star Observatory · Αστεροσκοπείο | Astronomy: day/night, planets placed on their orbits around the Sun, Moon phases, constellations with Greek myths (6 levels, 💡 help) |
| Panathenaic Way · Παναθηναϊκή Οδός | Road safety: pedestrian and car traffic lights, safe places to walk, cross and play, crossing at a zebra crossing after looking left-right-left with moving cars, road signs, and safe habits (child seat, helmet, holding hands, reflective clothes) |
| Palaestra · Παλαίστρα | Attention and self-control: tap olives but never stones (go/no-go), find a shape among many (visual search, easy and hard), and tap along with a drum, then keep the beat alone (rhythm and timing) |
| The Pnyx · Η Πνύκα | Feelings, being a good friend, no to bullying, volunteering (clean the beach and park), neighbourhood helpers, and democracy with a class vote |
| Art Gallery · Πινακοθήκη | Colour famous paintings: Mondrian, Kandinsky, the Minoan dolphins of Knossos, Van Gogh's Sunflowers and Starry Night, Hokusai's Great Wave; colour-mixing puzzles |
| Riddle Cave · Σπηλιά των Γρίφων | Picture puzzles: drag-through Minotaur labyrinths (up to 11×11, with a walking Minotaur), Tower of 2–4 discs, wolf–sheep–grass river crossing (8 levels, 💡 hints) |

Each place has 3 levels of 5 questions (the Riddle Cave has 8 puzzles, the Music Odeon 5 songs). Some places start locked: Mount Olympus (10 coins), Olympic Stadium (15 coins), Fishing Harbour (20 coins), Music Odeon (25 coins), Riddle Cave (3 badges), Archimedes' Workshop (30 coins), Star Observatory (35 coins), Art Gallery (20 coins). Grown-ups can open everything at once. Stars earn coins, coins buy hero gear (helmets, capes, lyre, winged sandals…), and there are 21 badges. The EN / ΕΛ switch changes the narrator's voice and all text. The voice uses the device's built-in text-to-speech; for Greek the tablet needs a Greek voice installed.

## Files

- `src/page.html` – styles and scene
- `src/game.js` – all game logic and content
- `build.sh` – builds `index.html` (Claude artifact version) and `docs/index.html` (the GitHub Pages site)

Progress is saved in the browser on the device. Grown-ups can reset each place separately and pick the narrator voice in the Grown-ups' corner.

The look is a blocky, toy-brick style drawn in code (no external images).

## Fine-motor report

The parents' corner has a **fine-motor report** built from the writing levels, the mazes and every tap in the games: tracing deviation (as % of letter height), coverage and copy score (F1 of coverage and precision), stroke direction, speed variability, pauses, corrections, mirror writing and tap offset, with day-by-day charts, a grid of every letter and number with the child's latest drawing, plain-language observations and a method section. A 3-minute **visual-motor check** (copying 8 shapes in the order of the Beery VMI, 2 letters and a number) can be repeated over time. The report prints or saves as PDF, and the raw data downloads as CSV. It is a measurement aid, not a clinical or standardised assessment.

## Development profile and screen time

The parents' corner also has a **development profile** built from normal play, with no extra tasks for the child: first-answer accuracy for letters, numbers, visual perception, pitch listening and emotions; memory (known pairs found in the memory game, longest tune repeated); planning (moves used vs the shortest solution, rule mistakes) in mazes, the Tower, the river crossing and the robot; response time and very fast wrong answers; hints, levels finished or left halfway; letters that get mixed up; and minutes played per day. Self-control, visual search and rhythm from the Palaestra are included. A radar chart compares the last 14 days with the 14 before, and a weekly summary suggests activities for home. A **daily play limit** (15–60 minutes) ends play gently with a resting hero; grown-ups can add 10 minutes behind the parents' gate.

New activities: **Join the dots** in the Olive Grove (numbers in order, steady straight lines) and **Write your name** in the Temple of Letters.
