import Chart from "chart.js/auto";
import { gzipData, brData } from "../data";
export function renderDeCompressionTime(canvasId: string) {
    const elem = document.getElementById(canvasId) as HTMLCanvasElement;
    new Chart(elem, {
        type: "line",
        data: {
            labels: brData.map((c) => `Level ${c.level}`),
            datasets: [
                {
                    label: "Gzip DeCompression Time",
                    data: gzipData.map((u) => u.decompressionTime),
                    borderWidth: 1,
                },
                {
                    label: "Brotli DeCompression Time",
                    data: brData.map((u) => u.decompressionTime),
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}
