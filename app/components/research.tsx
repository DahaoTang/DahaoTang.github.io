export default function Research() {
  return (
    <div>
      <div className="text-lg pb-1">Research</div>
      <div className="pb-1">
        <div>
          <span className="pr-1 text-neutral-500">ADC 2024</span>
          <a
            className="text-blue-600"
            href="https://link.springer.com/chapter/10.1007/978-981-96-1242-0_5"
          >
            Stability-Driven CNN Training with Lyapunov-Based Dynamic Learning
            Rate
          </a>
        </div>
        <div className="pl-2">
          Dahao Tang, Nan Yang, Yongkun Deng, Yuning Zhang, Abubakar Sadiq Sani,
          Dong Yuan
        </div>
      </div>
      <div className="pb-1">
        <span className="pr-1 text-neutral-500">ADMA 2024</span>
        <a
          className="text-blue-600"
          href="https://link.springer.com/chapter/10.1007/978-981-96-0847-8_4"
        >
          Adaptformer: An Adaptive Multimodal Deep Decomposition Approach for
          Power Consumption Forecasting
        </a>
        <div className="pl-2">
          Nan Yang, Yuning Zhang, Yunqi Wang, Dahao Tang, Yanli Li, Dong Yuan
        </div>
      </div>
    </div>
  );
}
