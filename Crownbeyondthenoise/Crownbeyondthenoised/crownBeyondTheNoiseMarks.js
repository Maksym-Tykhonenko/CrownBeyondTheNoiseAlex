export const crownBeyondTheNoiseMarks = [
  {
    id: 'first_trace',
    title: 'First Trace',
    conditionText: 'Condition: 1 saved entry',
    icon: require('../../assets/crownBeyondImages/crownBeyondMark1.png'),
    check: stats => stats.entriesCount >= 1,
  },
  {
    id: 'five_remains',
    title: 'Five Remains',
    conditionText: 'Condition: 5 post-silence entries',
    icon: require('../../assets/crownBeyondImages/crownBeyondMark2.png'),
    check: stats => stats.entriesCount >= 5,
  },
  {
    id: 'ten_silences',
    title: 'Ten Silences',
    conditionText: 'Condition: 10 completed silence sessions',
    icon: require('../../assets/crownBeyondImages/crownBeyondMark3.png'),
    check: stats => stats.sessionsCount >= 10,
  },
  {
    id: 'silent_chain',
    title: 'Silent Chain',
    conditionText: 'Condition: 5 consecutive sessions (no skips)',
    icon: require('../../assets/crownBeyondImages/crownBeyondMark4.png'),
    check: stats => stats.maxStreak >= 5,
  },
  {
    id: 'weight_holder',
    title: 'Weight Holder',
    conditionText: 'Condition: 50 total minutes of silence',
    icon: require('../../assets/crownBeyondImages/crownBeyondMark5.png'),
    check: stats => stats.totalMinutes >= 50,
  },
];
