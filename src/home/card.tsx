import React, {PureComponent} from 'react';
import './card.sass';

export interface ICardProps {
	icon: string;
	title: string;
	description: string;
}
export class Card extends PureComponent<ICardProps> {
	public state = {
		expand: false,
	};
	private toggleExpand = (e: any) => {
		e.preventDefault();
		this.setState({expand: !this.state.expand});
	}
	public render() {
		const {icon, title, description} = this.props;
		return (
			<article className={`home-card ${this.state.expand ? 'active' : ''}`}>
				<img src={icon} alt=""/>
				<div className="content">
					<h3>{title}</h3>
					<p>{description}</p>
					<a href="#" className="more" onClick={this.toggleExpand}>{this.state.expand ? (
						<>
							<span>Close</span>
							<i className="icon">remove</i>
						</>
					) : (
						<>
							<span>More</span>
							<i className="icon">add</i>
						</>
					)}</a>
				</div>
			</article>
		);
	}
}
