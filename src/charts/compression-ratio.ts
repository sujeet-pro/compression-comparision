import Chart from "chart.js/auto";
import { gzipData, brData } from "../data";
export function renderCompressionRatioChart(canvasId: string) {
  const elem = document.getElementById(canvasId) as HTMLCanvasElement;

  new Chart(elem, {
    type: "line",
    data: {
      labels: brData.map((c) => `Level ${c.level}`),
      datasets: [
        {
          label: "Gzip Compressed Bytes",
          data: gzipData.map(
            (u) => u.decompressedByteLength / u.compressedByteLength
          ),
          borderWidth: 1,
        },
        {
          label: "Brotli Compressed Bytes",
          data: brData.map(
            (u) => u.decompressedByteLength / u.compressedByteLength
          ),
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
