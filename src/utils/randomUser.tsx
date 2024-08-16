const colors = [
  "#958DF1",
  "#F98181",
  "#FBBC88",
  "#FAF594",
  "#70CFF8",
  "#94FADB",
  "#B9F18D",
];

// some random gpt generated names
const names = [
  "匿名ホイップ",
  "匿名バター",
  "匿名マーガリン",
  "匿名オリーブオイル",
  "匿名サラダ油",
  "匿名ごま油",
  "匿名ココナッツオイル",
  "匿名パーム油",
  "匿名ラード",
  "匿名ショートニング",
  "匿名アボカドオイル",
  "匿名アーモンドオイル",
  "匿名ヘーゼルナッツオイル",
  "匿名ピーナッツオイル",
  "匿名ゴマ油",
  "匿名ひまわり油",
  "匿名コットンシードオイル",
  "匿名ライスブランオイル",
  "匿名ヘンプオイル",
  "匿名フラックスオイル",
  "匿名カヌーオイル",
  "匿名ワセリン",
  "匿名ミネラルオイル",
  "匿名パラフィン",
];

const getRandomElement = <T,>(list: T[]) =>
  list[Math.floor(Math.random() * list.length)];

const getRandomColor = () => getRandomElement(colors);
const getRandomName = () => getRandomElement(names);

export const getRandomUser = () => ({
  name: getRandomName(),
  color: getRandomColor(),
});
