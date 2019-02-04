var movies = [ "Birdman", "Snakes on a Plane", "50 Shades of Grey", "The Dark Knight", "12 Angry Men", "The Godfather", "The Lord of the Rings", "The Good, The Bad and the Ugly", "Fight Club", "Star Wars", "Forrest Gump", "The Matrix", "City of God", "The Silence of the Lambs", "The Green Mile", "Raiders of the Lost Ark", "Star Wars: A New Hope", "The Pianst", "Back to the Future", "The Lion King", "The Dark Knight Rises", "Braveheart", "To Kill a Mockingbird", "Toy Story 3", "Monty Python and the Holy Grail", "Scarface", "Good Will Hunting", "Die Hard", "The Third Man", "The wolf of Wall Street", "Finding Nemo", "Finding Dory", "How to Train Your Dragon", "American Sniper", "Shutter Island", "Star Wars: The Force Awakens", "Jurassic Park", "The Princess Bride", "The Grapes of Wrath", "Harry Potter", "Monsters, Inc.", "Groundhog Day", "Twelve Monkeys", "Batman", "Deadpool", "The Hunger Games: Catching Fire", "The Hunger Games: Mockingjay", "The Hunger Games", "Zero Dark Thirty", "The Breakfast Club", "Pillow Talk", "Rain Man" ];
var tvshows = [ "Breaking Bad", "Big Bang Theory", "Blacklist", "Grey's Anatomy", "Criminal Minds", "The Bachelor", "Mad Men" ];
var songs = [ "Smells Like Teen Spirit", "Shake it Off", "American Pie", "Welcome to the Jungle", "One Dance", "7 Years", "Love Yourself", "Can't Stop The Feeling", "Dancing on my Own", "Work From Home", "Cold Water", "Cake by the Ocean", "Pillowtalk", "I Hate U I Love U", "Black Beatles", "Starboy", "24K Magic", "Blue Ain't Your Color", "Play That Song", "No Heart", "Call me Maybe?", "The Fox", "See You Again", "Shut Up and Dance", "Different Colors", "Shats & Squats", "A Thousand Miles", "Lady in Black", "Follow Me", "Rack City", "Tear In My Heart", "50 Ways To Say Goodbye", "The Lion Sleeps Tonight", "Red Lights", "Eye of the Tiger", "Two Princes", "Young, Wild & Free", "Watch Me", "Hall of Fame", "Fight Song", "I Would Walk 500 Miles", "International Love", "Gone, Gone, Gone", "When Can I See You Again", "Fireflies", "Good Time", "Stop and Stare", "Story of my Life", "Wonderwall", "Photograph", "Sleeping with A Friend", "Everybody Talks", "Animal", "One Day", "Maps", "Payphone", "Same Love", "Uptown Funk", "Party Rock Anthem", "Don't Stop Believin", "Free Fallin", "Bang Bang", "Price Tag", "Holy Grail", "Radioactive", "Stereo Hearts", "Take Me To Church", "Wake Me Up When September Ends", "Black Balloon", "Panda", "Can't Buy Me Love", "Lovers in a Dangerous Time", "One Week", "Call and Answer", "Cup Song (When I'm Gone)" ];
var phrases = [ "I heard it through the grapevine", "A picture is worth a thousand words", "Seeing eye to eye", "Money doesn't grow on trees", "In the same boat", "Head over heals in over", "Feeling under the weather", "Out of this world", "Have two left feet", "Rise above the blues", "Caught red handed", "Jump the gun", "Cost an arm and a leg", "Once in a blue moon", "Water under the bridge", "Get cold feet", "Kick the bucket", "Carry a tune", "Raining cats and dogs", "Frog in your throat", "Tie the knot", "A penny for your thoughts" ];
var books = [ "Cat in the Hat"]

var words = [].concat(movies, tvshows, songs, phrases, books);


for(var i = 0; i < 20; i++) 
  shuffle(words);

function shuffle(a) {
  var j, x, i;
  for(i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

function getRandomWord() {
  var index = parseInt(Math.random() * words.length);
  var word = words[index];
  var category;
  
  if (movies.indexOf(word) != -1) 
    category = "Movie";
  else if (tvshows.indexOf(word) != -1) 
    category = "TV Show";
  else if (songs.indexOf(word) != -1) 
    category = "Song";
  else if (phrases.indexOf(word) != -1) 
    category = "Phrases";  
  else if(books.indexOf(word) != -1) 
    category = "Books";
  
  words.splice(index, 1);
  
  console.log(words.length + " word(s) left.");
  if(words.length === 0) 
    location.reload();  
  
  return { word: word, category: category };
}