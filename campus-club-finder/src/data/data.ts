export type ClubEvent = {
  name: string;
  date: string;
};

export type Club = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  events: ClubEvent[];
};

export const clubs: Club[] = [
  {
    id: 'cooking',
    name: 'Cooking Club',
    shortDescription: 'Learn to cook delicious meals and desserts.',
    description: "Unleash your inner chef in a fun, hands-on environment. Whether you're a total beginner or a master of the wok, there's something for everyone. From savory dishes to mouthwatering desserts, we explore cuisines from all over the world. Expect food-themed games, recipe swaps, and monthly cooking battles. Join us and turn your love for food into delicious experiences!",
    events: [
      { name: 'Rendang Fest', date: '2025-06-21' },
      { name: 'Chinese Food Battle', date: '2025-07-05' }
    ]
  },
  {
    id: 'dance',
    name: 'Dance Club',
    shortDescription: 'Move to the rhythm with various dance styles.',
    description: "Step into the rhythm and express yourself through movement. Our club explores styles from hip-hop to traditional, contemporary to ballroom. Each week brings energetic practices, workshops, and mini-performances. Whether you’re dancing solo or in sync, you'll build confidence and friendships. Let's move, groove, and create unforgettable moments together!",
    events: [
      { name: 'Hip Hop Basics', date: '2025-06-22' },
      { name: 'Ballroom Dance', date: '2025-07-12' }
    ]
  },
  {
    id: 'english',
    name: 'English Club',
    shortDescription: 'Practice English through games, debates, and stories.',
    description: "Words have power — and this is where yours come alive. We play language games, hold lively debates, and create fun storytelling sessions. It’s not about perfection — it’s about confidence and creativity. Whether you love speaking, writing, or just listening, you’ll find your voice here. Let’s explore English in a way that’s fresh, fearless, and fun!",
    events: [
      { name: 'Debate Night', date: '2025-06-25' },
      { name: 'Scrabble Wabble', date: '2025-07-08' }
    ]
  },
  {
    id: 'football',
    name: 'Football Club',
    shortDescription: 'Train, compete, and score goals as a team.',
    description: "Ready to kick off some action? Join a team that values teamwork, skill-building, and friendly competition. We train regularly, host matches, and cheer each other on every step of the way. Whether you dream of scoring goals or just want to stay active, there’s a spot for you here. Grab your cleats — your football journey starts now!",
    events: [
      { name: 'Skills Training Camp', date: '2025-06-28' },
      { name: 'Intercampus Match', date: '2025-07-15' }
    ]
  },
  {
    id: 'band',
    name: 'Band Club',
    shortDescription: 'Make music and perform live with friends.',
    description: "Turn up the volume and make music with friends who share your passion. From jamming in practice rooms to performing live, this is where creativity thrives. Whether you sing, play an instrument, or just love music — we welcome all levels. Collaborate, experiment, and maybe even start your first band. Let’s make some noise and memories that rock!",
    events: [
      { name: 'Band Jam Session', date: '2025-06-30' },
      { name: 'Album Recording', date: '2025-07-20' }
    ]
  }
];