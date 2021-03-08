export type menuListType = { label: string; value: string; id: number }[];

export const menuList = [
	{
		label: "TOP",
		value: "/",
		id: 0
	},
	{
		label: "名前検索",
		value: "/pokemon",
		id: 1
	},
	{
		label: "タイプ検索",
		value: "/type",
		id: 2
	},
	{
		label: "相棒検索",
		value: "/partner",
		id: 3
	}
];

export const typeList = [
	{
		ja: "ノーマル",
		en: "normal",
		no: 1
	},
	{
		ja: "かくとう",
		en: "fighting",
		no: 2
	},
	{
		ja: "ひこう",
		en: "flying",
		no: 3
	},
	{
		ja: "どく",
		en: "poison",
		no: 4
	},
	{
		ja: "じめん",
		en: "ground",
		no: 5
	},
	{
		ja: "いわ",
		en: "rock",
		no: 6
	},
	{
		ja: "むし",
		en: "bug",
		no: 7
	},
	{
		ja: "ゴースト",
		en: "ghost",
		no: 8
	},
	{
		ja: "はがね",
		en: "steel",
		no: 9
	},
	{
		ja: "ほのお",
		en: "fire",
		no: 10
	},
	{
		ja: "みず",
		en: "water",
		no: 11
	},
	{
		ja: "くさ",
		en: "grass",
		no: 12
	},
	{
		ja: "でんき",
		en: "electric",
		no: 13
	},
	{
		ja: "エスパー",
		en: "psychic",
		no: 14
	},
	{
		ja: "こおり",
		en: "ice",
		no: 15
	},
	{
		ja: "ドラゴン",
		en: "dragon",
		no: 16
	},
	{
		ja: "あく",
		en: "dark",
		no: 17
	},

	{
		ja: "フェアリー",
		en: "fairy",
		no: 18
	}
];

export const NatureList = [
	{
		ja: "いじっぱり",
		en: "Adamant"
	},
	{
		ja: "うっかりや",
		en: "Rash"
	},
	{
		ja: "おくびょう",
		en: "Timid"
	},
	{
		ja: "おだやか",
		en: "Calm"
	},
	{
		ja: "おっとり",
		en: "Mild"
	},
	{
		ja: "おとなしい",
		en: "Gentle"
	},
	{
		ja: "がんばりや",
		en: "Hardy"
	},
	{
		ja: "きまぐれ",
		en: "Quirky"
	},
	{
		ja: "さみしがり",
		en: "Lonely"
	},
	{
		ja: "しんちょう",
		en: "Careful"
	},
	{
		ja: "すなお",
		en: "Docile"
	},
	{
		ja: "ずぶとい",
		en: "Bold"
	},
	{
		ja: "せっかち",
		en: "Hasty"
	},
	{
		ja: "てれや",
		en: "Bashful"
	},
	{
		ja: "なまいき",
		en: "Sassy"
	},
	{
		ja: "のうてんき",
		en: "Lax"
	},
	{
		ja: "のんき",
		en: "Relaxed"
	},
	{
		ja: "ひかえめ",
		en: "Modest"
	},
	{
		ja: "まじめ",
		en: "Serious"
	},
	{
		ja: "むじゃき",
		en: "Naive"
	},
	{
		ja: "やんちゃ",
		en: "Naughty"
	},
	{
		ja: "ゆうかん",
		en: "Brave"
	},
	{
		ja: "ようき",
		en: "Jolly"
	},
	{
		ja: "れいせい",
		en: "Quiet"
	},
	{
		ja: "わんぱく",
		en: "Impish"
	}
];

export const CharacteristicList = [
	{
		ja: "ひるねを よくする",
		en: "Often dozes off"
	},
	{
		ja: "あばれることが すき",
		en: "Likes to thrash about"
	},
	{
		ja: "うたれ づよい",
		en: "Capable of taking hits"
	},
	{
		ja: "イタズラが すき",
		en: "Mischievous"
	},
	{
		ja: "ちょっぴり みえっぱり",
		en: "Somewhat vain"
	},
	{
		ja: "ものおとに びんかん",
		en: "Alert to sounds"
	},
	{
		ja: "いねむりがおおい",
		en: "Scatters things often"
	},
	{
		ja: "ちょっとおこりっぽい",
		en: "little quick tempered"
	},
	{
		ja: "ねばりづよい",
		en: "Highly persistent"
	},
	{
		ja: "ぬけめがない",
		en: "Thoroughly Cunning"
	},
	{
		ja: "まけんきがつよい",
		en: "Strongly defiant"
	},
	{
		ja: "おっちょこちょい",
		en: "Impetuous and silly"
	},
	{
		ja: "ものをよくちらかす",
		en: "Often scatters things"
	},
	{
		ja: "ケンカをするのがすき",
		en: "Likes to fight"
	},
	{
		ja: "しんぼうづよい",
		en: "Good endurance"
	},
	{
		ja: "かんがえごとがおおい",
		en: "Often lost in thought"
	},
	{
		ja: "まけずぎらい",
		en: "Hates to lose"
	},
	{
		ja: "すこしおちょうしもの",
		en: "Somewhat of a clown"
	},
	{
		ja: "のんびりするのがすき",
		en: "Likes to Relax"
	},
	{
		ja: "ちのけがおおい",
		en: "Quick Tempered"
	},
	{
		ja: "がまんづよい",
		en: "Good perseverance"
	},
	{
		ja: "とてもきちょうめん",
		en: "Very finicky"
	},
	{
		ja: "ちょっぴりごうじょう",
		en: "Somewhat stubborn"
	},
	{
		ja: "にげるのがはやい",
		en: "Quick to flee"
	},
	{
		ja: "たべるのがだいすき",
		en: "Loves to eat"
	},
	{
		ja: "ちからじまん",
		en: "Proud of its power"
	},
	{
		ja: "からだがじょうぶ",
		en: "Sturdy body"
	},
	{
		ja: "こうきしんがつよい",
		en: "Highly curious"
	},
	{
		ja: "きがつよい",
		en: "Strong willed"
	},
	{
		ja: "かけっこがすき",
		en: "Likes to run"
	}
];
