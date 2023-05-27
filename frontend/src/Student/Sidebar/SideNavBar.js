import React, { useState } from "react";
import "./SideNavBar.css";
import { SidebarData } from "./SidebarData";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

const SideNavBar = (props) => {
	const { setOrganizationLog, setSignup, setIsLoggedIn } = props;
	const [isExpanded, setExpendState] = useState(false);
	const showSidebar = () => {
		setExpendState(!isExpanded) //for hamburger
		if (isExpanded) {
			document.body.style.marginLeft = "90px";
		} else {
			document.body.style.marginLeft = "300px";
		}
	};
	const closeSidebar = () => {
		setExpendState(false);
		document.body.style.marginLeft = "90px";

	};
	return (
		<>

			<IconContext.Provider value={{ color: "#fff" }}>
				<div
					className={
						isExpanded
							? "side-nav-container"
							: "side-nav-container side-nav-container-NX"
					}
				>
					<div className="nav-upper">
						<div className="nav-heading">
							{isExpanded && (
								<div className="nav-brand">
									<img
										src="https://storage.googleapis.com/mixo-files/logos/hirEx-1679323310963.svg"
										alt="" srcset="" />
									<h2>HirEx</h2>
								</div>
							)}
							<button
								className={
									isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
								}
								onClick={showSidebar}
							>
								<span></span>
								<span></span>
								<span></span>
							</button>
						</div>
						<div className="nav-menu">
							{SidebarData.map((item, index) => {
								return (
									<Link
										className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
										to={item.path}
										onClick={closeSidebar}
									>
										<span className="menu-item-icon">

											{item.icon}
										</span>
										{isExpanded && <p>{item.title}</p>}
									</Link>
								);

							})}
						</div>
					</div>
					<div className="nav-footer">
						{isExpanded && (
							<div className="nav-details">
								<img
									className="nav-footer-avatar"
									src="https://randomuser.me/api/portraits/men/1.jpg"
									alt="Icon"
									srcset=""
								/>
								<div className="nav-footer-info">
									<p className="nav-footer-user-name">Hrushikesh</p>
									<p className="nav-footer-user-position">Web3.0 Developer</p>
								</div>
							</div>
						)}
						<Link
							to="/"
							className="logout-button"
							onClick={() => {
								closeSidebar();
								setIsLoggedIn(false);
							}}
						>
							<span className="logout-icon">
								{<FiIcons.FiLogOut />}
							</span>
						</Link>
					</div>
				</div>
			</IconContext.Provider >

		</>
	);
};

export default SideNavBar;
