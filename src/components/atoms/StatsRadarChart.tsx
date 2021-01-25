import React from "react";
import { Radar } from "react-chartjs-2";

type OwnProps = {
	data: number[];
};

type tooltipItemTypes = {
	xLabel: string;
	yLabel: string;
	datasetIndex: number;
	index: number;
	x: number;
	y: number;
}[];

type Props = OwnProps;

export const StatsRadarChart = ({ data }: Props): JSX.Element => {
	const graphData = {
		labels: ["HP", "AT", "DF", "SA", "SD", "SP"],
		datasets: [
			{
				data,
				label: ["base_stats"],
				backgroundColor: "rgba(63, 81, 181, .5)",
				borderColor: "rgba(63, 81, 181, .5)"
			}
		]
	};

	const graphOptions = {
		title: {
			display: true,
			text: "Base_Stats",
			fontColor: "#FFFFFF"
		},
		legend: {
			display: false
		},
		scale: {
			ticks: {
				fontColor: "#000000",
				stepSize: 30,
				max: 120,
				min: 0
			},
			gridLines: {
				color: "#444444"
			},
			angleLines: {
				color: "#444444"
			},
			pointLabels: {
				fontColor: "#FFFFFF"
			}
		},
		tooltips: {
			callbacks: {
				title(
					tooltipItem: tooltipItemTypes,
					dataObj: typeof graphData
				): string {
					return dataObj.labels[tooltipItem[0].index];
				}
			}
		}
	};

	return <Radar data={graphData} options={graphOptions} width={300} />;
};
