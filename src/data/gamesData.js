// data/gamesData.js
import jigsaw from '../assets/images/jigsaw1.jpg';
import jigsawhd from '../assets/images/jigsawhd1.jpg';
import toddler from '../assets/images/toddlers1.jpg';

export const gamesData = [
    {
      id: 1,
      title: "Jigsaw Puzzle Games!",
      description: "10000+ challenging puzzles with daily updates",
      rating: 4.9,
      reviews: "(Out of 4K+ Ratings)",
      preview: jigsaw, // Add actual preview image imports
      ageRange: "Ages ANY",
      awards: ["Teachers' Choice", "Parent Approved"],
      appStore: "https://apps.apple.com/us/app/jigsaw-puzzle-games/id1049229735",
      playStore: "",
      icon: jigsaw,
      color: "from-purple-600 to-pink-500",
      features: ["Daily Challenges", "4K Graphics", "Global Leaderboards"],
      videoTrailer: "trailer1.mp4"
    },
    {
      id: 2,
      title: "Jigsaw  HD  Puzzles",
      description: "4K puzzles with magical themes, Up to 2500 pieces puzzle games",
      rating: 4.9,
      reviews: "(Out of 250+ Ratings)",
      preview: jigsawhd, // Add actual preview image imports
      ageRange: "Ages ANY",
      awards: ["Teachers' Choice", "Parent Approved"],
      appStore: "https://apps.apple.com/us/app/jigsaw-hd-puzzles/id1045849829",
      playStore: "",
      icon: jigsawhd,
      color: "from-blue-500 to-cyan-400",
      features: ["Magic Themes", "Relaxing Music", "Achievement System"],
      videoTrailer: "trailer2.mp4"
    },
    {
      id: 3,
      title: "Toddler Learning Games",
      description: "Educational adventures for ages 2-6, ABC, 123 & preschool learning",
      rating: 4.9,
      downloads: "",
      preview: toddler, // Add actual preview image imports
      ageRange: "Ages 2-6",
      awards: ["Teachers' Choice", "Parent Approved"],
      appStore: "https://apps.apple.com/us/app/kids-games-for-toddlers-2-to-6/id6736658511",
      playStore: "https://play.google.com/store/apps/details?id=com.twepple.baby.toddler.kids.preschool.learning.activity.games&hl=en_USr",
      icon: toddler,
      color: "from-green-500 to-yellow-400",
      features: ["ABC Learning", "Parent Dashboard", "Ad-Free"],
      videoTrailer: "trailer3.mp4"
    }
  ];