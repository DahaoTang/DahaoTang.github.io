import { Heading1, Heading2 } from "@/app/components/Heading";
import { DefaultButton } from "@/app/components/DefaultButton";

export default function ControlCNN() {
	return (
		<div>
			<Heading1 content="Stability Driven CNN Training with Lyapunov Based Dynamic Learning Rate" />
			<div className="pt-3">
				<Heading2 content="Authors" />
				<div className="grid grid-cols-3 grid-flow-row gap-4">
					<div>Dahao Tang</div>
					<div>Nan Yang</div>
					<div>Yongkun Deng</div>
					<div>Yuning Zhang</div>
					<div>Abubakar Sadiq Sani</div>
					<div>Dong Yuan</div>
				</div>
			</div>
			<div className="pt-5">
				<Heading2 content="Abstract" />
				<div>
					In recent years, Convolutional Neural Networks (CNNs) have become a
					cornerstone in computer vision tasks, but ensuring stable training
					remains a challenge, especially when high learning rates or large
					datasets are involved, as standard optimization techniques like
					Stochastic Gradient Descent (SGD) can suffer from oscillations and
					slow convergence. In this paper, we leverage control theory to propose
					a novel stability-driven training method by modeling the CNN training
					process as a dynamic control system where we introduce Lyapunov
					Stability Analysis, implemented with Quadratic Lyapunov Function, to
					guide real-time learning rate adjustments, ensuring stability and
					faster convergence. We provide both theoretical insights and practical
					guidelines for the implementation of the learning rate adaptation. We
					examine the effectiveness of this approach in mitigating oscillations
					and improving training performance by comparing the proposed
					Lyanpunov-stability-enhanced SGD, termed SGD-DLR (SGD with
					Lyapunov-based Dynamic Learning Rate), to traditional SGD with a fixed
					learning rate. We also conduct experiments on the datasets CIFAR-10
					and CIFAR-100 to demonstrate that SGD-DLR enhances both stability and
					performance, outperforming standard SGD.
				</div>
			</div>
			<div className="pt-5">
				<Heading2 content="Full Content" />
				<div className="pt-2"></div>
				<DefaultButton
					label="Download PDF"
					href="Stability_Driven_CNN_Training_with_Lyapunov_Based_Dynamic_Learning_Rate.pdf"
				/>
			</div>
		</div>
	);
}
