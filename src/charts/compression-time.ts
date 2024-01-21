import Chart from "chart.js/auto";
import { gzipData, brData } from "../data";
export function renderCompressionTime(canvasId: string) {
    const elem = document.getElementById(canvasId) as HTMLCanvasElement;
    new Chart(elem, {
        type: "line",
        data: {
            labels: brData.map((c) => `Level ${c.level}`),
            datasets: [
                {
                    label: "Gzip Compression Time",
                    data: gzipData.map((u) => u.compressionTime),
                    borderWidth: 1,
                },
                {
                    label: "Brotli Compression Time",
                    data: brData.map((u) => u.compressionTime),
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
