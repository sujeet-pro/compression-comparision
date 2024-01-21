import { renderCompressionRatioChart } from './charts/compression-ratio';
import { renderCompressionTime } from './charts/compression-time';
import { renderDeCompressionTime } from './charts/decompression-time';
import './style.css'

renderCompressionRatioChart("compression-ratio");
renderCompressionTime("compression-time");
renderDeCompressionTime("decompression-time");