# Little Hero of Olympus · Μικρός Ήρωας του Ολύμπου

A bilingual (English / Greek) learning game for 5-year-olds, set on a Greek island. Made for tablets.

**Play:** https://geomyll33.github.io/little-hero-olympus/

On a tablet, open the link and choose **Add to Home Screen** to get a full-screen app icon.

## The island

| Place | Skill |
|---|---|
| Olive Grove · Ελαιώνας | Counting to 5, to 10, adding |
| Temple of Letters · Ναός των Γραμμάτων | ABC in English, Α Β Γ in Greek |
| Mount Olympus · Όρος Όλυμπος | Biggest, smallest, small to big |
| Agora Market · Αγορά | Colours and shapes |
| Olympic Stadium · Ολυμπιακό Στάδιο | Odd one out |
| Pottery Workshop · Εργαστήρι Αγγείων | Patterns |
| Fishing Harbour · Λιμάνι των Ψαράδων | More and fewer |
| Aegean Sea · Αιγαίο Πέλαγος | Memory cards |
| Music Odeon · Μουσικό Ωδείο | Learn the notes on a xylophone (note stairs, high or low, listen and find, repeat the tune) and a runner game: catch coloured notes to play Mozart, Beethoven, Brahms, Grieg and Bach |
| Archimedes' Workshop · Εργαστήρι του Αρχιμήδη | STEM: code the robot Talos with arrows, float or sink, balance scale, water pipes, electric circuit, magnets, life cycles, gears, shadows and light, gear doors to open (12 levels, 💡 help) |
| Star Observatory · Αστεροσκοπείο | Astronomy: day/night, planets placed on their orbits around the Sun, Moon phases, constellations with Greek myths (6 levels, 💡 help) |
| Art Gallery · Πινακοθήκη | Colour famous paintings: Mondrian, Kandinsky, the Minoan dolphins of Knossos, Van Gogh's Sunflowers and Starry Night, Hokusai's Great Wave; colour-mixing puzzles |
| Riddle Cave · Σπηλιά των Γρίφων | Picture puzzles: drag-through Minotaur labyrinths (up to 11×11, with a walking Minotaur), Tower of 2–4 discs, wolf–sheep–grass river crossing (8 levels, 💡 hints) |

Each place has 3 levels of 5 questions (the Riddle Cave has 8 puzzles, the Music Odeon 5 songs). Some places start locked: Mount Olympus (10 coins), Olympic Stadium (15 coins), Fishing Harbour (20 coins), Music Odeon (25 coins), Riddle Cave (3 badges), Archimedes' Workshop (30 coins), Star Observatory (35 coins), Art Gallery (20 coins). Grown-ups can open everything at once. Stars earn coins, coins buy hero gear (helmets, capes, lyre, winged sandals…), and there are 19 badges. The EN / ΕΛ switch changes the narrator's voice and all text. The voice uses the device's built-in text-to-speech; for Greek the tablet needs a Greek voice installed.

## Files

- `src/page.html` – styles and scene
- `src/game.js` – all game logic and content
- `build.sh` – builds `index.html` (Claude artifact version) and `docs/index.html` (the GitHub Pages site)

Progress is saved in the browser on the device. Grown-ups can reset each place separately and pick the narrator voice in the Grown-ups' corner.

The look is a blocky, toy-brick style drawn in code (no external images).
