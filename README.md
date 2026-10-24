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
| Riddle Cave · Σπηλιά των Γρίφων | Picture puzzles: Minotaur labyrinth, Tower, wolf–sheep–grass river crossing (6 levels, 💡 hints) |

Each place has 3 levels of 5 questions (the Riddle Cave has 6 puzzles). Some places start locked: Mount Olympus (10 coins), Olympic Stadium (15 coins), Fishing Harbour (20 coins), Riddle Cave (3 badges). Stars earn coins, coins buy hero gear (helmets, capes, lyre, winged sandals…), and there are 15 badges. The EN / ΕΛ switch changes the narrator's voice and all text. The voice uses the device's built-in text-to-speech; for Greek the tablet needs a Greek voice installed.

## Files

- `src/page.html` – styles and scene
- `src/game.js` – all game logic and content
- `build.sh` – builds `index.html` (Claude artifact version) and `docs/index.html` (the GitHub Pages site)

Progress is saved in the browser on the device.
