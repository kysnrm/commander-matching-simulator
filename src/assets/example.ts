const exampleCommanders = [
  "《織り手のティムナ》+《ルーデヴィックの名作、クラム》",
  "《織り手のティムナ》+《ルーデヴィックの名作、クラム》",
  "《織り手のティムナ》+《ルーデヴィックの名作、クラム》",
  "《織り手のティムナ》+《ルーデヴィックの名作、クラム》",
  "《織り手のティムナ》+《ルーデヴィックの名作、クラム》",
  "《織り手のティムナ》+《ルーデヴィックの名作、クラム》",
  "《織り手のティムナ》+《ルーデヴィックの名作、クラム》",
  "《織り手のティムナ》+《ルーデヴィックの名作、クラム》",
  "《織り手のティムナ》+《ルーデヴィックの名作、クラム》",
  "《織り手のティムナ》+《ルーデヴィックの名作、クラム》",
  "《秘密売り、ティヴィット》",
  "《秘密売り、ティヴィット》",
  "《秘密売り、ティヴィット》",
  "《秘密売り、ティヴィット》",
  "《秘密売り、ティヴィット》",
  "《秘密売り、ティヴィット》",
  "《秘密売り、ティヴィット》",
  "《秘密売り、ティヴィット》",
  "《秘密売り、ティヴィット》",
  "《舞台座一家の料理人、ロッコ》",
  "《舞台座一家の料理人、ロッコ》",
  "《舞台座一家の料理人、ロッコ》",
  "《舞台座一家の料理人、ロッコ》",
  "《舞台座一家の料理人、ロッコ》",
  "《ロフガフフの息子、ログラクフ》+《愚者滅ぼし、テヴェシュ・ザット》",
  "《ロフガフフの息子、ログラクフ》+《愚者滅ぼし、テヴェシュ・ザット》",
  "《ロフガフフの息子、ログラクフ》+《愚者滅ぼし、テヴェシュ・ザット》",
  "《ロフガフフの息子、ログラクフ》+《愚者滅ぼし、テヴェシュ・ザット》",
  "《織り手のティムナ》+《トリトンの英雄、トラシオス》",
  "《織り手のティムナ》+《トリトンの英雄、トラシオス》",
  "《織り手のティムナ》+《トリトンの英雄、トラシオス》",
  "《織り手のティムナ》+《トリトンの英雄、トラシオス》",
  "《ロフガフフの息子、ログラクフ》+《トリトンの英雄、トラシオス》",
  "《ロフガフフの息子、ログラクフ》+《トリトンの英雄、トラシオス》",
  "《ロフガフフの息子、ログラクフ》+《トリトンの英雄、トラシオス》",
  "《ロフガフフの息子、ログラクフ》+《織り手のティムナ》",
  "《ロフガフフの息子、ログラクフ》+《織り手のティムナ》",
  "《ロフガフフの息子、ログラクフ》+《織り手のティムナ》",
  "《光明の不可思議、タヤム》",
  "《光明の不可思議、タヤム》",
  "《光明の不可思議、タヤム》",
  "《最高工匠卿、ウルザ》",
  "《最高工匠卿、ウルザ》",
  "《最高工匠卿、ウルザ》",
  "《精霊の魂、アニマー》",
  "《精霊の魂、アニマー》",
  "《精霊の魂、アニマー》",
  "《パルン、ニヴ＝ミゼット》",
  "《パルン、ニヴ＝ミゼット》",
  "《暴動の長、ラクドス》",
  "《暴動の長、ラクドス》",
  "《冒険好きなホビット、フロド》+《忠実なる従者、サム》",
  "《冒険好きなホビット、フロド》+《忠実なる従者、サム》",
  "《語りの神、ビルギ》",
  "《語りの神、ビルギ》",
  "《刃を咲かせる者、ナジーラ》",
  "《刃を咲かせる者、ナジーラ》",
  "《トリトンの英雄、トラシオス》+《愚者滅ぼし、テヴェシュ・ザット》",
  "《トリトンの英雄、トラシオス》+《愚者滅ぼし、テヴェシュ・ザット》",
  "《鋭い目の航海士、マルコム》+《織り手のティムナ》",
  "《鋭い目の航海士、マルコム》+《織り手のティムナ》",
  "《意志を縛る者、ディハーダ》",
  "《意志を縛る者、ディハーダ》",
  "《大いなる歪み、コジレック》",
  "《フェイに呪われた王、コルヴォルド》",
  "《親指なしのクラーク》+《千の顔の逆嶋》",
  "《親指なしのクラーク》+《千の顔の逆嶋》",
  "《樹の神、エシカ》",
  "《樹の神、エシカ》",
  "《眷者の神童、キナン》",
  "《眷者の神童、キナン》",
  "《軍団のまとめ役、ウィノータ》",
  "《軍団のまとめ役、ウィノータ》",
  "《儀式の大魔導師、イナーラ》",
  "《儀式の大魔導師、イナーラ》",
  "《秘本に縛られし者、プロスパー》",
  "《Myra the Magnificent》",
  "《マルネウス・カルガー》",
  "《テイサ・カルロフ》",
  "《ジン＝ギタクシアス》",
  "《ウラブラスク》",
  "《アーカム・ダグソン》",
  "《ロフガフフの息子、ログラクフ》",
  "《求道の達人、サイラス・レン》",
  "《暗号動物学者、ローニス》",
  "《侵攻の伝令、ローナ》",
  "《流浪の発電機》",
  "《流浪のドルイド、ジェンソン・カルサリオン》+相棒《夢の巣のルールス》",
  "《虎の影、百合子》",
  "《無限のエルシャ》",
  "《鋭い目の航海士、マルコム》+《激情の薬瓶砕き》",
  "《鋭い目の航海士、マルコム》+《ルーデヴィックの名作、クラム》",
  "《鋭い目の航海士、マルコム》+《血を蒔く者、ターナ》",
  "《鋭い目の航海士、マルコム》+《粗野な牧人、ブルース・タール》",
  "《厚顔の無法者、マグダ》",
  "《光輝の夜明け、ヘリオッド》",
  "《カーの空奪い、プローシュ》",
  "《大衆扇動者、ブリーナ》",
  "《熱心な秘儀術師、ハルダン》+《秘儀を運ぶもの、パコ》",
  "《囚われの黒幕、オブ・ニクシリス》",
  "《綱投げ、アキリ》+《トリトンの英雄、トラシオス》",
  "《トリトンの英雄、トラシオス》+《激情の薬瓶砕き》",
  "《浄火の戦術家、デリーヴィー》",
  "《祖神の使徒、テシャール》",
  "《織り手のティムナ》+《船壊し、ダーゴ》",
  "《伝承の語り部、チュレイン》",
  "《狂気を操る者チェイナー》",
  "《血を蒔く者、ターナ》+《愚者滅ぼし、テヴェシュ・ザット》",
  "《船壊し、ダーゴ》+《三度の再誕、ジェスカ》",
  "《野生の心、セルヴァラ》",
  "《巣を守る者、アトラ・パラーニ》",
  "《ウェザーライトの艦長、ジョイラ》",
  "《深海の破滅、ジャイルーダ》",
  "《始祖ドラゴン》",
  "《原初の災厄、ザカマ》",
  "《千の顔の逆嶋》+《東の樹の木霊》",
  "《サウロンの破滅、フロド》",
  "《ニヴ＝ミゼット再誕》",
  "《奪い取り屋、サーダ・アデール》",
  "《山賊の頭、伍堂》",
  "《ヨーグモスの息子、ケリク》",
  "《大霊堂の王、ゲス》",
  "《ワイアウッドの呼び手、ギランラ》+《東の樹の木霊》",
  "《ギトラグの怪物》",
  "《鍛冶の神、パーフォロス》",
  "《風の憤怒、カイカ》",
  "《永遠王、ブレイゴ》",
  "《ウェザーライトの艦長、シッセイ》",
  "《首席議長ヴァニファール》",
  "《放浪の吟遊詩人、イーサーン》",
  "《死に微笑むもの、アリーシャ》",
  "《円渦海峡の暴君、アシー》",
  "《アッシュベイルの英雄、グウィン卿》",
];

export default exampleCommanders;
