import React from "react";
import styled from "styled-components";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";

const Heading2 = styled.h2`
	margin: 0px auto 40px;
	width: 500px;
`;

const Heading3 = styled.h3`
	margin: 10px auto 0;
	width: 500px;
`;

const UpDateList = styled.ul`
	margin: 32px auto 0;
	text-align: left;
	width: 500px;
`;

/**
 * トップページです。
 */
export const Index = (): JSX.Element => {
	return (
		<PokedexTemplate>
			<>
				<Heading2>Topページです</Heading2>
				<a
					href="https://smashawk.github.io/pokedex/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Version1.0
				</a>
				<Heading3>Version2.0 アップデート内容</Heading3>
				<UpDateList>
					<li>Component細分化</li>
					<li>react-redux</li>
					<li>react-routerで機能ごとにページ分け</li>
					<li>スタイルをstyled-componentにした</li>
					<li>redux-sagaで非同期処理（社員API）</li>
					<li>TypeScript導入（未完了）</li>
					<li>タイプ検索でアイコンをhoverした際に詳細データを表示</li>
					<li>タイプ検索でアイコンをクリックすると色違い画像を表示</li>
					<li>相棒検索でひらがな以外のほぼ全ての文字に対応した</li>
				</UpDateList>
			</>
		</PokedexTemplate>
	);
};
