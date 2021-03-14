import { useEffect, useState, VFC } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { setPartnerInfoState } from "@store/setPartnerInfo/reducer";
import { decidePartnerInfo, partnerInfoType } from "@utils/decidePartnerInfo";
import { InputArea } from "@components/organisms/searchPartner/InputArea";
import { useFormik } from "formik";
import html2canvas from "html2canvas";

type StateProps = {
	partnerInfoState: setPartnerInfoState;
};

type DispatchProps = {
	setPartnerInfo: (inputName: string, partnerInfo: partnerInfoType) => void;
	fetchPokeData: (partnerNo: number) => void;
	fetchPartnerPokeSpecies: (partnerNo: number) => void;
};

type Props = StateProps & DispatchProps;

const WrappedInputArea: VFC<Props> = ({
	partnerInfoState,
	setPartnerInfo,
	fetchPokeData,
	fetchPartnerPokeSpecies
}) => {
	/** define for React Router Hooks */
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const name = query.get("name");

		/** add Query Strings if store have searchPartner State */
		if (partnerInfoState.inputName && !name) {
			H.replace(`/partner?name=${partnerInfoState.inputName}`);
			return;
		}

		/** show search result if URL has query */
		if (name) {
			const partnerInfo = decidePartnerInfo(name);
			setPartnerInfo(name, partnerInfo);
			fetchPokeData(partnerInfo.pokeNo);
			fetchPartnerPokeSpecies(partnerInfo.pokeNo);
		}
	}, []);

	/**
	 * fire this function when you click Fix Button
	 */
	const searchPartner = (value: { inputText: string }): void => {
		if (!value.inputText) return;
		const partnerInfo = decidePartnerInfo(value.inputText);
		setPartnerInfo(value.inputText, partnerInfo);
		fetchPokeData(partnerInfo.pokeNo);
		fetchPartnerPokeSpecies(partnerInfo.pokeNo);
		H.replace(`/partner?name=${value.inputText}`);
	};

	const formik = useFormik({
		initialValues: { inputText: "" },
		validationSchema: null,
		onSubmit: searchPartner
	});

	// html2canvas で得られる URI を用いてダウンロードさせる関数
	const saveAsImage = (uri: string) => {
		const downloadLink = document.createElement("a");

		downloadLink.href = uri;

		// ファイル名
		downloadLink.download = `partner_${partnerInfoState.inputName}.png`;

		// Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
		document.body.appendChild(downloadLink);

		// ダウンロードリンクが設定された a タグをクリック
		downloadLink.click();

		// Firefox 対策で追加したリンクを削除しておく
		document.body.removeChild(downloadLink);
	};

	const exportPng = () => {
		// 画像に変換する component の id を指定
		const target = document.getElementById("target-component");
		if (!target) return;
		html2canvas(target, {
			scale: 1
		}).then((canvas) => {
			const targetImgUri = canvas.toDataURL();

			saveAsImage(targetImgUri);
		});
	};

	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (partnerInfoState.inputName) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [partnerInfoState]);

	return <InputArea {...{ searchPartner, formik, exportPng, disabled }} />;
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	partnerInfoState: state.searchPartner.partnerInfo
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchPartner } = dispatches;

	return {
		setPartnerInfo: (inputName: string, partnerInfo: partnerInfoType): void => {
			searchPartner.setPartnerInfoDispatcher(dispatch)(inputName, partnerInfo);
		},
		fetchPokeData: (partnerNo: number): void => {
			searchPartner.searchPartnerGetPokeDataDispatcher(dispatch)(partnerNo);
		},
		fetchPartnerPokeSpecies: (partnerNo: number): void => {
			searchPartner.searchPartnerGetPokeSpeciesDispatcher(dispatch)(partnerNo);
		}
	};
};

export const EnhancedInputArea = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedInputArea);
